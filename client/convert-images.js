import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';

const BACKUP_DIR = '_backup_images';

async function convertImages() {
  const rootDir = process.cwd();
  const backupPath = path.join(rootDir, BACKUP_DIR);

  try {
    await fs.access(backupPath);
  } catch {
    await fs.mkdir(backupPath);
  }

  // Find images in public/assets and src
  // Excluding node_modules and dist and the backup dir itself
  const files = await glob('**/*.{png,jpg,jpeg}', {
    ignore: ['node_modules/**', 'dist/**', `${BACKUP_DIR}/**`],
    cwd: rootDir,
    absolute: true,
  });

  console.log(`Found ${files.length} images to convert.`);

  for (const file of files) {
    const ext = path.extname(file);
    const dir = path.dirname(file);
    const name = path.basename(file, ext);
    const webpPath = path.join(dir, `${name}.webp`);

    console.log(`Converting: ${file} -> ${webpPath}`);

    try {
      // Convert to webp
      await sharp(file)
        .webp({ quality: 80 }) // Reasonable default quality
        .toFile(webpPath);

      // Calculate relative path for backup structure
      const relativePath = path.relative(rootDir, file);
      const backupFilePath = path.join(backupPath, relativePath);
      const backupFileDir = path.dirname(backupFilePath);

      // Create backup directory structure
      await fs.mkdir(backupFileDir, { recursive: true });

      // Move original file to backup
      await fs.rename(file, backupFilePath);
      console.log(`Moved original to: ${backupFilePath}`);

    } catch (error) {
      console.error(`Failed to convert ${file}:`, error);
    }
  }

  console.log('Conversion complete.');
}

convertImages();
