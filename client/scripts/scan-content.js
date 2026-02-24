import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PAGES_DIR = path.join(__dirname, "../src");
const OUTPUT_FILE = path.join(__dirname, "../public/bot-memory.json");

function scanFiles() {
  const memory = [];

  if (!fs.existsSync(PAGES_DIR)) {
    console.error(`Source directory not found: ${PAGES_DIR}`);
    return;
  }

  // Helper to recursively get all files in a directory
  function getFilesRecursively(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
      file = path.join(dir, file);
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory()) {
        // Ignore node_modules, dist, hidden folders
        if (!file.includes("node_modules") && !file.includes(".git")) {
          results = results.concat(getFilesRecursively(file));
        }
      } else {
        if (file.endsWith(".jsx") || file.endsWith(".js")) {
          results.push(file);
        }
      }
    });
    return results;
  }

  const files = getFilesRecursively(PAGES_DIR);

  files.forEach((filePath) => {
    const content = fs.readFileSync(filePath, "utf-8");
    const fileName = path.basename(filePath);

    // Extract content from <p> and <li> tags
    // Using regex for simplicity as requested, handling multiline
    const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
    const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;

    // Also extract headers
    const hRegex = /<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi;

    let match;

    // Process paragraphs
    while ((match = pRegex.exec(content)) !== null) {
      cleanAndStore(match[1], fileName);
    }

    // Process list items
    while ((match = liRegex.exec(content)) !== null) {
      cleanAndStore(match[1], fileName);
    }

    // Process headers
    while ((match = hRegex.exec(content)) !== null) {
      cleanAndStore(match[1], fileName);
    }
  });

  function cleanAndStore(text, sourceFile) {
    // Remove HTML tags inside the text (like <strong>, <span>, <a>)
    let cleanText = text.replace(/<[^>]*>/g, "");

    // Remove brace expressions often found in JSX like {variable} or {conditional ? ... : ...}
    // This is a simple heuristic; complex nested braces might remain, but good enough for static text.
    cleanText = cleanText.replace(/\{[^}]*\}/g, "");

    // Normalize whitespace
    cleanText = cleanText.replace(/\s+/g, " ").trim();

    // Filter out empty or too short strings, and strings that look like import statements or code
    if (
      cleanText.length > 15 &&
      !cleanText.startsWith("import") &&
      !cleanText.startsWith("const") &&
      !cleanText.includes("return (")
    ) {
      memory.push({
        source: sourceFile,
        text: cleanText,
      });
    }
  }

  // Ensure public directory exists
  const publicDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(memory, null, 2));
  console.log(
    `Bot memory refreshed! Scanned ${files.length} files. Extracted ${memory.length} items. Saved to ${OUTPUT_FILE}`,
  );
}

scanFiles();
