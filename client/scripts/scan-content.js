import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PAGES_DIR = path.join(__dirname, '../src/pages');
const OUTPUT_FILE = path.join(__dirname, '../public/bot-memory.json');

function scanFiles() {
    const memory = [];

    if (!fs.existsSync(PAGES_DIR)) {
        console.error(`Pages directory not found: ${PAGES_DIR}`);
        return;
    }

    // Helper to recursivley get files if needed, but requirements said src/Pages
    // We will just do flat scan of src/Pages for now as per "scan all my src/Pages files"
    const files = fs.readdirSync(PAGES_DIR);

    files.forEach(file => {
        if (file.endsWith('.jsx') || file.endsWith('.js')) {
            const filePath = path.join(PAGES_DIR, file);
            const content = fs.readFileSync(filePath, 'utf-8');

            // Extract content from <p> and <li> tags
            // Using regex for simplicity as requested, handling multiline
            const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
            const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;

            let match;

            // Process paragraphs
            while ((match = pRegex.exec(content)) !== null) {
                cleanAndStore(match[1], file);
            }

            // Process list items
            while ((match = liRegex.exec(content)) !== null) {
                cleanAndStore(match[1], file);
            }
        }
    });

    function cleanAndStore(text, sourceFile) {
        // Remove HTML tags inside the text (like <strong>, <span>, <a>)
        let cleanText = text.replace(/<[^>]*>/g, '');

        // Remove brace expressions often found in JSX like {variable} or {conditional ? ... : ...}
        // This is a simple heuristic; complex nested braces might remain, but good enough for static text.
        cleanText = cleanText.replace(/\{[^}]*\}/g, '');

        // Normalize whitespace
        cleanText = cleanText.replace(/\s+/g, ' ').trim();

        // Filter out empty or too short strings, and strings that look like import statements or code
        if (cleanText.length > 15 &&
            !cleanText.startsWith('import') &&
            !cleanText.startsWith('const') &&
            !cleanText.includes('return (')
        ) {
            memory.push({
                source: sourceFile,
                text: cleanText
            });
        }
    }

    // Ensure public directory exists
    const publicDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(memory, null, 2));
    console.log(`Bot memory refreshed! Scanned ${files.length} files. Extracted ${memory.length} items. Saved to ${OUTPUT_FILE}`);
}

scanFiles();
