import { execFile } from "node:child_process";
import { access, mkdir, readdir, stat } from "node:fs/promises";
import { basename, join, relative, resolve, sep } from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import ffmpegPath from "ffmpeg-static";

const run = promisify(execFile);
const videosRoot = fileURLToPath(new URL("../public/videos/", import.meta.url));
const postersRoot = fileURLToPath(
  new URL("../public/images/video-posters/", import.meta.url),
);
const requestedFolder = process.argv[2]
  ?.replaceAll("\\", "/")
  .replace(/^\/+|\/+$/g, "");
const supportedVideo = /\.(mp4|mov|m4v|mkv|avi|webm)$/i;

await mkdir(videosRoot, { recursive: true });
await mkdir(postersRoot, { recursive: true });

async function collectVideos(directory) {
  const entries = (await readdir(directory, { withFileTypes: true })).sort(
    (a, b) =>
      a.name.localeCompare(b.name, undefined, {
        numeric: true,
        sensitivity: "base",
      }),
  );
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory() && entry.name.toLowerCase() === "optimized") {
      continue;
    }

    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collectVideos(fullPath)));
    else if (entry.isFile() && supportedVideo.test(entry.name)) files.push(fullPath);
  }

  return files;
}

async function getTargetDirectories() {
  if (requestedFolder) {
    const target = resolve(videosRoot, requestedFolder);
    const relativeTarget = relative(videosRoot, target);

    if (
      relativeTarget.startsWith(`..${sep}`) ||
      relativeTarget === ".." ||
      relativeTarget === ""
    ) {
      throw new Error("Nama folder video tidak valid.");
    }

    await access(target);
    if (!(await stat(target)).isDirectory()) {
      throw new Error(`Target bukan folder: ${requestedFolder}`);
    }
    return [target];
  }

  return (await readdir(videosRoot, { withFileTypes: true }))
    .filter(
      (entry) =>
        entry.isDirectory() && entry.name.toLowerCase() !== "optimized",
    )
    .map((entry) => join(videosRoot, entry.name));
}

const directories = await getTargetDirectories();

if (directories.length === 0) {
  console.log("Tidak ada folder video di public/videos.");
  process.exit(0);
}

let processedCount = 0;
let totalOriginalBytes = 0;
let totalOptimizedBytes = 0;

for (const directory of directories) {
  const files = await collectVideos(directory);
  const folderLabel = relative(videosRoot, directory);
  const outputPrefix = basename(directory)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const outputDirectory = join(videosRoot, "optimized");
  const posterDirectory = postersRoot;

  await mkdir(outputDirectory, { recursive: true });
  await mkdir(posterDirectory, { recursive: true });
  console.log(`\n[${folderLabel}] ${files.length} video ditemukan`);

  for (const [index, source] of files.entries()) {
    const outputName = `${outputPrefix}${index + 1}`;
    const outputVideo = join(outputDirectory, `${outputName}.mp4`);
    const outputPoster = join(posterDirectory, `${outputName}.webp`);
    const sourceSize = (await stat(source)).size;

    console.log(`  Memproses ${basename(source)}...`);

    await run(
      ffmpegPath,
      [
        "-hide_banner",
        "-loglevel",
        "error",
        "-y",
        "-i",
        source,
        "-map_metadata",
        "-1",
        "-vf",
        "scale=1280:1280:force_original_aspect_ratio=decrease:force_divisible_by=2",
        "-c:v",
        "libx264",
        "-preset",
        "medium",
        "-crf",
        "27",
        "-pix_fmt",
        "yuv420p",
        "-c:a",
        "aac",
        "-b:a",
        "96k",
        "-movflags",
        "+faststart",
        outputVideo,
      ],
      { maxBuffer: 10 * 1024 * 1024 },
    );

    await run(
      ffmpegPath,
      [
        "-hide_banner",
        "-loglevel",
        "error",
        "-y",
        "-ss",
        "00:00:01",
        "-i",
        outputVideo,
        "-frames:v",
        "1",
        "-vf",
        "scale=900:900:force_original_aspect_ratio=decrease:force_divisible_by=2",
        "-c:v",
        "libwebp",
        "-quality",
        "82",
        outputPoster,
      ],
      { maxBuffer: 10 * 1024 * 1024 },
    );

    const optimizedSize = (await stat(outputVideo)).size;
    totalOriginalBytes += sourceSize;
    totalOptimizedBytes += optimizedSize;
    processedCount += 1;

    console.log(
      `  ✓ ${outputName}.mp4 + ${outputName}.webp (${formatSize(sourceSize)} → ${formatSize(optimizedSize)})`,
    );
  }
}

const reduction = totalOriginalBytes
  ? ((1 - totalOptimizedBytes / totalOriginalBytes) * 100).toFixed(1)
  : "0.0";

console.log(`\nSelesai: ${processedCount} video dioptimasi.`);
console.log(
  `Total video: ${formatSize(totalOriginalBytes)} → ${formatSize(totalOptimizedBytes)} (${reduction}% lebih kecil).`,
);

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 ** 2).toFixed(2)} MB`;
}
