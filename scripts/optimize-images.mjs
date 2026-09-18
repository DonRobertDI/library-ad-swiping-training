import { readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const directory = path.resolve("public/screenshots");
const files = (await readdir(directory)).filter((file) => file.endsWith(".png")).sort();

await Promise.all(
  files.map(async (file) => {
    const source = path.join(directory, file);
    const destination = path.join(directory, file.replace(/\.png$/i, ".webp"));
    await sharp(source)
      .resize({ width: 1280, withoutEnlargement: true })
      .sharpen({ sigma: 0.45 })
      .webp({ quality: 88, effort: 5, smartSubsample: true })
      .toFile(destination);
  }),
);

console.log(`Optimized ${files.length} screenshots.`);
