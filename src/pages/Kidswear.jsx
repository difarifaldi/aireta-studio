import React from "react";
import PortfolioCollectionPage from "../components/PortfolioCollectionPage";

export default function Kidswear() {
  return (
    <PortfolioCollectionPage
      collectionName="Kidswear"
      imageFolder="kids"
      imagePrefix="kids"
      imageCount={14}
      seoTitle="Kidswear Collection & Manufacturing"
      seoDescription="Explore Aireta Studio's Kidswear collection, featuring comfortable silhouettes, thoughtful details, and professional garment production."
      seoPath="/portfolio/kidswear/"
      seoImage="kids/kids12.webp"
      title="Little Pieces,"
      highlightTitle="Beautiful Stories"
      description="Playful silhouettes, comfortable materials, and thoughtful details—developed to let every child move freely and confidently."
      closingDescription="Discuss your concept, materials, sizing, and production needs with our team."
    />
  );
}
