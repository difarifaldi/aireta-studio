import React from "react";
import PortfolioCollectionPage from "../components/PortfolioCollectionPage";

export default function Pattern() {
  return (
    <PortfolioCollectionPage
      collectionName="Pattern"
      imageFolder="patern"
      imagePrefix="patern"
      imageCount={10}
      seoTitle="Pattern Making & Development"
      seoDescription="Explore Aireta Studio's patern making portfolio, featuring precise garment patterns, thoughtful construction, and professional fashion development."
      seoPath="/portfolio/pattern/"
      seoImage="patern/patern1.webp"
      title="Precision in Every Line,"
      highlightTitle="Built for the Perfect Fit"
      description="  Carefully developed patterns that translate creative concepts into
              accurate, balanced, and production-ready garments."
      closingDescription=" Discuss your design, measurements, sizing, construction, and patern
            development needs with our team."
    />
  );
}
