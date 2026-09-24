import React from "react";
import PortfolioCollectionPage from "../components/PortfolioCollectionPage";

export default function Manwear() {
  return (
    <PortfolioCollectionPage
      collectionName="Manwear"
      imageFolder="man"
      imagePrefix="man"
      imageCount={11}
      seoTitle="Manwear Collection & Manufacturing"
      seoDescription="Explore Aireta Studio's Manwear collection, featuring refined silhouettes, quality materials, thoughtful details, and professional garment production."
      seoPath="/portfolio/manwear/"
      seoImage="man/man1.webp"
      title="Refined Essentials,"
      highlightTitle="Made with Purpose"
      description="A curated manwear collection designed with elegant proportions, refined fabrics, versatile colors, and thoughtful details for effortless everyday styling."
      closingDescription=" Refined silhouettes, quality materials, and thoughtful
              construction—designed to deliver confidence, comfort, and timeless
              everyday style."
    />
  );
}
