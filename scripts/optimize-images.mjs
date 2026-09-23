import { access, readdir, stat } from "node:fs/promises";
import { basename, dirname, join, parse, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const imagesRoot = fileURLToPath(new URL("../public/images/", import.meta.url));
const requestedFolder = process.argv[2]?.replaceAll("\\", "/").replace(/^\/+|\/+$/g, "");
const supportedImage = /\.(jpe?g|png)$/i;

async function collectImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collectImages(fullPath)));
    else if (entry.isFile() && supportedImage.test(entry.name)) files.push(fullPath);
  }

  return files;
}

async function getTargetDirectories() {
  if (requestedFolder) {
    const target = resolve(imagesRoot, requestedFolder);
    const relativeTarget = relative(imagesRoot, target);

    if (
      relativeTarget.startsWith(`..${sep}`) ||
      relativeTarget === ".." ||
      relativeTarget === ""
    ) {
      throw new Error("Nama folder tidak valid.");
    }

    await access(target);
    if (!(await stat(target)).isDirectory()) {
      throw new Error(`Target bukan folder: ${requestedFolder}`);
    }
    return [target];
  }

  return (await readdir(imagesRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => join(imagesRoot, entry.name));
}

const directories = await getTargetDirectories();

if (directories.length === 0) {
  console.log("Tidak ada folder koleksi di public/images.");
  process.exit(0);
}

let totalOriginalBytes = 0;
let totalWebpBytes = 0;
let optimizedCount = 0;

for (const directory of directories) {
  const files = await collectImages(directory);
  console.log(`\n[${relative(imagesRoot, directory)}] ${files.length} gambar ditemukan`);

  for (const source of files) {
    const output = join(dirname(source), `${parse(source).name}.webp`);
    const sourceSize = (await stat(source)).size;

    await sharp(source)
      .rotate()
      .resize({
        width: 1600,
        height: 2000,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 78, effort: 5, smartSubsample: true })
      .toFile(output);

    const outputSize = (await stat(output)).size;
    totalOriginalBytes += sourceSize;
    totalWebpBytes += outputSize;
    optimizedCount += 1;
    console.log(
      `  ✓ ${basename(source)} → ${basename(output)} (${formatSize(sourceSize)} → ${formatSize(outputSize)})`,
    );
  }
}

const reduction = totalOriginalBytes
  ? ((1 - totalWebpBytes / totalOriginalBytes) * 100).toFixed(1)
  : "0.0";

console.log(`\nSelesai: ${optimizedCount} gambar dioptimasi.`);
console.log(
  `Total: ${formatSize(totalOriginalBytes)} → ${formatSize(totalWebpBytes)} (${reduction}% lebih kecil).`,
);

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 ** 2).toFixed(2)} MB`;
}
