import React from "react";
import PortfolioCollectionPage from "../components/PortfolioCollectionPage";

export default function Dresses() {
  return (
    <PortfolioCollectionPage
      collectionName="Dresses"
      imageFolder="dresses"
      imagePrefix="dresses"
      imageCount={16}
      seoTitle="Dresses Collection & Manufacturing"
      seoDescription="Explore Aireta Studio's dresses collection, featuring elegant silhouettes, refined details, and professional garment production."
      seoPath="/portfolio/dresses/"
      seoImage="dresses/dresses1.webp"
      title=" Elegance in Every,"
      highlightTitle="Silhouette"
      description=" A curated collection of dresses crafted with graceful silhouettes,
              thoughtful details, and refined finishes designed for timeless
              style and effortless elegance."
      closingDescription=" Discuss your concept, silhouettes, materials, colors, sizing, and
            production needs with our team to create a distinctive dress
            collection tailored to your vision."
    />
  );
}
