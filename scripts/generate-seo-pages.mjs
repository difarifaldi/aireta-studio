import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const dist = new URL("../dist/", import.meta.url);
const distPath = fileURLToPath(dist);
const source = await readFile(new URL("index.html", dist), "utf8");
const siteUrl = "https://difarifaldi.github.io/aireta-studio";

const pages = [
  {
    route: "our-services",
    title: "Fashion Design & Production Services | Aireta Studio",
    description:
      "Explore Aireta Studio services including fashion design, pattern development, embroidery, garment production, branding, photoshoots, video campaigns, and websites.",
    image: `${siteUrl}/images/fashion.png`,
  },
  {
    route: "portfolio",
    title: "Fashion Portfolio & Selected Collections | Aireta Studio",
    description:
      "View selected Aireta Studio works including modest wear, abaya, kidswear, manwear, sarimbit, hijab, embroidery, and custom collections.",
    image: `${siteUrl}/images/foto1.jpg`,
  },
  {
    route: "portfolio/kidswear",
    title: "Kidswear Collection & Manufacturing | Aireta Studio",
    description:
      "Explore Aireta Studio's Kidswear collection, featuring comfortable silhouettes, thoughtful details, and professional garment production.",
    image: `${siteUrl}/images/kids/kids12.webp`,
  },
  {
    route: "portfolio/manwear",
    title: "Manwear Collection & Manufacturing | Aireta Studio",
    description:
      "Explore Aireta Studio's Manwear collection, featuring comfortable silhouettes, thoughtful details, and professional garment production.",
    image: `${siteUrl}/images/man/man12.webp`,
  },
  {
    route: "contact",
    title: "Contact Aireta Studio | Fashion & Production Consultation",
    description:
      "Contact Aireta Studio in Bekasi to discuss fashion design, garment production, embroidery, branding, creative campaigns, and digital services.",
    image: `${siteUrl}/images/main-landscape.png`,
  },
];

function pageHtml(page) {
  const url = `${siteUrl}/${page.route}/`;
  return source
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*("\s*\/?>)/,
      `$1${page.description}$2`,
    )
    .replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*("\s*\/?>)/,
      `$1${page.title}$2`,
    )
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*("\s*\/?>)/,
      `$1${page.description}$2`,
    )
    .replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*("\s*\/?>)/,
      `$1${url}$2`,
    )
    .replace(
      /(<meta\s+property="og:image"\s+content=")[^"]*("\s*\/?>)/,
      `$1${page.image}$2`,
    )
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*("\s*\/?>)/, `$1${url}$2`);
}

for (const page of pages) {
  const directory = join(distPath, page.route);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, "index.html"), pageHtml(page), "utf8");
}

await writeFile(new URL("404.html", dist), source, "utf8");
