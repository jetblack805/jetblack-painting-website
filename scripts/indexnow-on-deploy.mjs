#!/usr/bin/env node
/**
 * Post-deploy IndexNow submitter.
 *
 * Diffs the generated public/ folder against HEAD~1, extracts URLs that changed,
 * and submits them to IndexNow. Only runs if git diff finds changes.
 *
 * Usage:
 *   node scripts/indexnow-on-deploy.mjs
 *   node scripts/indexnow-on-deploy.mjs --dry   # show what would be submitted
 *
 * ⚠️ Only submitted URLs that actually changed. Resubmitting unchanged content
 * is treated as abuse by IndexNow and gets the key ignored.
 *
 * Integration: call this AFTER pnpm build in your post-commit hook or CI.
 *   pnpm build && node scripts/indexnow-on-deploy.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const dry = process.argv.includes("--dry");

/**
 * Maps a file path in public/ to its canonical URL.
 * Examples:
 *   public/index.html → /
 *   public/painter-sorrento/index.html → /painter-sorrento/
 *   public/services/roof-painting/index.html → /services/roof-painting/
 *   public/blog/posts/new-feature/index.html → /blog/posts/new-feature/
 */
function fileToUrl(filePath) {
  // Remove the leading "public/" if present
  let url = filePath.startsWith("public/") ? filePath.slice(7) : filePath;

  // If it's index.html at the root, it's just /
  if (url === "index.html") return "/";

  // If it's index.html in a subdirectory, strip that and add trailing slash
  // e.g., painter-sorrento/index.html → /painter-sorrento/
  if (url.endsWith("/index.html")) {
    return "/" + url.slice(0, -11) + "/";
  }

  // Edge case: top-level .html files (shouldn't happen in our structure)
  // but if it does, prefix with /
  if (url.endsWith(".html")) {
    return "/" + url;
  }

  // Non-HTML files aren't indexed
  return null;
}

/**
 * Get the list of .html files that changed in public/ between HEAD and HEAD~1.
 */
function getChangedHtmlFiles() {
  try {
    // Check if we have a previous commit
    execSync("git rev-parse HEAD~1", { stdio: "ignore" });
  } catch {
    console.log("No previous commit available (first deploy?). Skipping IndexNow.");
    return [];
  }

  try {
    const diff = execSync("git diff HEAD~1 HEAD --name-only -- public/", {
      encoding: "utf-8",
    });

    const files = diff
      .split("\n")
      .filter((line) => line.trim() && line.includes(".html"));

    return files;
  } catch (err) {
    console.error("Error diffing git:", err.message);
    return [];
  }
}

/**
 * Check if a file exists and is readable (safety check).
 */
function fileExists(filePath) {
  try {
    fs.accessSync(filePath, fs.constants.R_OK);
    return true;
  } catch {
    return false;
  }
}

const changedFiles = getChangedHtmlFiles();

if (changedFiles.length === 0) {
  console.log("No HTML files changed in public/. Nothing to submit to IndexNow.");
  process.exit(0);
}

// Convert files to URLs, skip non-HTML
const urls = changedFiles
  .map((file) => fileToUrl(file))
  .filter((url) => url !== null);

if (urls.length === 0) {
  console.log("No indexable URLs found in changed files. Skipping IndexNow.");
  process.exit(0);
}

console.log(`Found ${urls.length} changed URL(s) to submit:`);
urls.forEach((url) => console.log(`  ${url}`));

// Call the main indexnow script with the URLs
const indexnowArgs = dry ? [...urls, "--dry"] : urls;

try {
  execSync(`node scripts/indexnow.mjs ${indexnowArgs.map((a) => `'${a}'`).join(" ")}`, {
    stdio: "inherit",
  });
} catch (err) {
  // indexnow.mjs exits with codes 0 (success), 1 (API error), or 2 (network error)
  // Pass those through so the caller can decide what to do
  process.exit(err.status);
}
