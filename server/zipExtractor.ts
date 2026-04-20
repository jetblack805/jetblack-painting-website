import { execSync } from "child_process";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

/**
 * Extract and analyze ZIP file contents
 */
export async function analyzeZipFile(zipPath: string) {
  try {
    if (!existsSync(zipPath)) {
      throw new Error(`ZIP file not found: ${zipPath}`);
    }

    // Get file listing from ZIP
    const output = execSync(`unzip -l "${zipPath}"`, { encoding: "utf-8" });
    const lines = output.split("\n");

    const files: Array<{
      path: string;
      size: number;
      type: string;
    }> = [];

    // Parse unzip output
    let inFileList = false;
    for (const line of lines) {
      if (line.includes("-----")) {
        inFileList = !inFileList;
        continue;
      }

      if (!inFileList || !line.trim()) continue;

      const parts = line.trim().split(/\s+/);
      if (parts.length >= 4) {
        const size = parseInt(parts[0], 10);
        const path = parts.slice(3).join(" ");

        if (path && !path.endsWith("/")) {
          const fileType = path.split(".").pop() || "unknown";
          files.push({
            path,
            size,
            type: fileType,
          });
        }
      }
    }

    // Categorize files
    const categories = categorizeFiles(files);

    return {
      totalFiles: files.length,
      totalSize: files.reduce((sum, f) => sum + f.size, 0),
      files,
      categories,
    };
  } catch (error) {
    console.error("Error analyzing ZIP file:", error);
    throw error;
  }
}

/**
 * Categorize files by type
 */
function categorizeFiles(files: Array<{ path: string; size: number; type: string }>) {
  const categories: Record<string, Array<{ path: string; size: number }>> = {
    components: [],
    pages: [],
    styles: [],
    config: [],
    server: [],
    database: [],
    assets: [],
    other: [],
  };

  for (const file of files) {
    const path = file.path.toLowerCase();

    if (path.includes("components/")) {
      categories.components.push({ path: file.path, size: file.size });
    } else if (path.includes("pages/")) {
      categories.pages.push({ path: file.path, size: file.size });
    } else if (file.type === "css" || file.type === "scss") {
      categories.styles.push({ path: file.path, size: file.size });
    } else if (
      file.type === "json" ||
      file.type === "config" ||
      file.type === "yml" ||
      file.type === "yaml"
    ) {
      categories.config.push({ path: file.path, size: file.size });
    } else if (path.includes("server/")) {
      categories.server.push({ path: file.path, size: file.size });
    } else if (path.includes("drizzle/") || path.includes("migrations/")) {
      categories.database.push({ path: file.path, size: file.size });
    } else if (
      file.type === "png" ||
      file.type === "jpg" ||
      file.type === "jpeg" ||
      file.type === "gif" ||
      file.type === "svg" ||
      file.type === "webp"
    ) {
      categories.assets.push({ path: file.path, size: file.size });
    } else {
      categories.other.push({ path: file.path, size: file.size });
    }
  }

  // Remove empty categories
  return Object.fromEntries(
    Object.entries(categories).filter(([_, files]) => files.length > 0)
  );
}

/**
 * Get file statistics
 */
export function getFileStatistics(files: Array<{ path: string; size: number; type: string }>) {
  const stats = {
    byType: {} as Record<string, { count: number; totalSize: number }>,
    byDirectory: {} as Record<string, { count: number; totalSize: number }>,
    largestFiles: [] as Array<{ path: string; size: number }>,
  };

  // Group by type
  for (const file of files) {
    if (!stats.byType[file.type]) {
      stats.byType[file.type] = { count: 0, totalSize: 0 };
    }
    stats.byType[file.type].count++;
    stats.byType[file.type].totalSize += file.size;
  }

  // Group by directory
  for (const file of files) {
    const dir = file.path.split("/")[0] || "root";
    if (!stats.byDirectory[dir]) {
      stats.byDirectory[dir] = { count: 0, totalSize: 0 };
    }
    stats.byDirectory[dir].count++;
    stats.byDirectory[dir].totalSize += file.size;
  }

  // Get largest files
  stats.largestFiles = files
    .sort((a, b) => b.size - a.size)
    .slice(0, 10)
    .map(f => ({ path: f.path, size: f.size }));

  return stats;
}

/**
 * Extract specific files from ZIP
 */
export async function extractFilesFromZip(zipPath: string, outputPath: string, filePatterns?: string[]) {
  try {
    if (!existsSync(zipPath)) {
      throw new Error(`ZIP file not found: ${zipPath}`);
    }

    let command = `unzip -q "${zipPath}" -d "${outputPath}"`;

    if (filePatterns && filePatterns.length > 0) {
      const patterns = filePatterns.map(p => `"${p}"`).join(" ");
      command = `unzip -q "${zipPath}" ${patterns} -d "${outputPath}"`;
    }

    execSync(command);

    return {
      success: true,
      message: `Files extracted to ${outputPath}`,
      outputPath,
    };
  } catch (error) {
    console.error("Error extracting files from ZIP:", error);
    throw error;
  }
}

/**
 * Get ZIP file information
 */
export async function getZipFileInfo(zipPath: string) {
  try {
    if (!existsSync(zipPath)) {
      throw new Error(`ZIP file not found: ${zipPath}`);
    }

    const stats = execSync(`unzip -t "${zipPath}" 2>&1 | tail -1`, { encoding: "utf-8" });

    return {
      path: zipPath,
      exists: true,
      stats,
    };
  } catch (error) {
    console.error("Error getting ZIP file info:", error);
    throw error;
  }
}
