import React from "react";
import PortfolioCollectionPage from "../components/PortfolioCollectionPage";

export default function Basic() {
  return (
    <PortfolioCollectionPage
      collectionName="Basic"
      imageFolder="basic"
      imagePrefix="basic"
      imageCount={34}
      seoTitle="Basic Wear Collection & Manufacturing"
      seoDescription="Explore Aireta Studio's basic wear collection, featuring elegant designs, refined details, versatile styles, and professional garment production."
      seoPath="/portfolio/basic/"
      seoImage="basic/basic21.webp"
      title="Graceful Style,"
      highlightTitle="Thoughtfully Crafted"
      description="A curated basic wear collection designed with elegant proportions, refined fabrics, versatile colors, and thoughtful details for effortless everyday styling."
      closingDescription="Discuss your concept, fabrics, colors, dimensions, finishing, and production needs with our team to create a basic wear collection that reflects your brand and vision."
    />
  );
}
