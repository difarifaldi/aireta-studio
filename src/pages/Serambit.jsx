import React from "react";
import PortfolioCollectionPage from "../components/PortfolioCollectionPage";

export default function Serambit() {
  return (
    <PortfolioCollectionPage
      collectionName="Serambit"
      imageFolder="serambit"
      imagePrefix="serambit"
      imageCount={9}
      seoTitle="Serambit Collection & Manufacturing"
      seoDescription="Explore Aireta Studio's Serambit collection, featuring coordinated family outfits, elegant details, and professional garment production."
      seoPath="/portfolio/serambit/"
      seoImage="serambit/serambit1.webp"
      title="Made to Match,"
      highlightTitle="Designed to Belong"
      description=" Coordinated family looks crafted with thoughtful details,
              harmonious colors, and comfortable silhouettes for memorable
              moments together."
      closingDescription=" Discuss your concept, colors, materials, sizing, and production
            needs with our team to create a coordinated collection for the whole
            family."
    />
  );
}
