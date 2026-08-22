#!/usr/bin/env node
/**
 * Post-deploy IndexNow submitter.
 *
 * Diffs the generated public/ folder against HEAD~1, extracts URLs that changed,
 * and submits them to IndexNow. Only runs if git diff finds changes.
 *
 * Usage:
 *   pnpm indexnow:changed            # submit whatever the last commit changed
 *   pnpm indexnow:changed --dry      # show what would be submitted, send nothing
 *   pnpm indexnow:changed --no-fail  # always exit 0, even if the submission fails
 *
 * ⚠️ Only submitted URLs that actually changed. Resubmitting unchanged content
 * is treated as abuse by IndexNow and gets the key ignored.
 *
 * ⚠️ Do NOT wire this into `pnpm build` (it was briefly a `postbuild` hook, which
 * was wrong on two counts):
 *
 *   1. Cloudflare deploys every branch push straight to production by running the
 *      build. A non-zero exit here would fail the build and take the DEPLOY down
 *      over an unreachable third-party API — the site would stop shipping because
 *      Bing had a bad minute. Indexing is best-effort; deploying is not.
 *   2. Cloudflare clones shallow, so `HEAD~1` may not resolve on the build machine
 *      and the diff would silently find nothing on every deploy anyway.
 *
 * Run it after a deploy has landed instead, from a machine that can reach
 * api.indexnow.org. `--no-fail` exists for anyone who still wants it in a
 * pipeline: it reports the failure but always exits 0.
 */
import fs from "node:fs";
import path from "node:path";
import { execSync, spawnSync } from "node:child_process";

const dry = process.argv.includes("--dry");
const noFail = process.argv.includes("--no-fail");

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

// Hand off to the submitter. spawnSync with an argument array — no shell, so a
// path containing a quote cannot be reinterpreted as shell syntax.
const indexnowArgs = dry ? [...urls, "--dry"] : urls;
const run = spawnSync(process.execPath, ["scripts/indexnow.mjs", ...indexnowArgs], {
  stdio: "inherit",
});

// indexnow.mjs exits 0 (submitted), 1 (IndexNow rejected it), or 2 (never reached it).
const code = run.status ?? 1;
if (code !== 0 && noFail) {
  console.log(`\nindexnow exited ${code} — continuing anyway (--no-fail).`);
  process.exit(0);
}
process.exit(code);
