import { readdir } from "node:fs/promises";
import { join, parse } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const imagesDirectory = fileURLToPath(
  new URL("../public/images/kids/", import.meta.url),
);
const files = (await readdir(imagesDirectory, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && /\.jpe?g$/i.test(entry.name))
  .map((entry) => entry.name);

for (const file of files) {
  const source = join(imagesDirectory, file);
  const output = join(imagesDirectory, `${parse(file).name}.webp`);

  await sharp(source)
    .rotate()
    .resize({ width: 1600, height: 2000, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 78, effort: 5, smartSubsample: true })
    .toFile(output);
}

console.log(`Optimized ${files.length} Kidswear images to WebP.`);
