import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.resolve(__dirname, '../public');
const CLIENT_INDEX = path.resolve(__dirname, '../client/index.html');
const BASE_URL = 'https://jetblackpainting.com';

function getRedirectHtml(urlPath) {
  const fullUrl = `${BASE_URL}${urlPath}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0;url=${fullUrl}">
  <link rel="canonical" href="${fullUrl}">
  <title>Redirecting...</title>
</head>
<body>
  <p>This page has moved. If you are not redirected automatically, please click <a href="${fullUrl}">here</a>.</p>
</body>
</html>`;
}

// 1. Find all index.html files in public/
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (file === 'index.html') {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const htmlFiles = findHtmlFiles(PUBLIC_DIR);

// 2. Replace each with redirect HTML
htmlFiles.forEach(filePath => {
  const relativePath = path.relative(PUBLIC_DIR, path.dirname(filePath));
  const urlPath = relativePath === '.' ? '/' : `/${relativePath}/`;
  console.log(`Replacing ${filePath} with redirect to ${urlPath}`);
  fs.writeFileSync(filePath, getRedirectHtml(urlPath), 'utf8');
});

// 3. Also replace client/index.html (the root source)
console.log(`Replacing ${CLIENT_INDEX} with redirect to /`);
fs.writeFileSync(CLIENT_INDEX, getRedirectHtml('/'), 'utf8');

console.log('Done.');
