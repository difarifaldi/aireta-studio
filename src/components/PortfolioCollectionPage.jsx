import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Seo, { SITE_URL } from "./Seo";

export default function PortfolioCollectionPage({
  collectionName,
  imageFolder,
  imagePrefix,
  imageCount,

  seoTitle,
  seoDescription,
  seoPath,
  seoImage,

  kicker,
  title,
  highlightTitle,
  description,

  closingKicker,
  closingTitle,
  closingDescription,
}) {
  const [selectedImage, setSelectedImage] = useState(null);

  const collection = Array.from(
    { length: imageCount },
    (_, index) => `${imagePrefix}${index + 1}.webp`,
  );

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", close);

    return () => {
      window.removeEventListener("keydown", close);
    };
  }, []);

  return (
    <div className="detail-portofolio-page">
      <Seo
        title={seoTitle}
        description={seoDescription}
        path={seoPath}
        image={`${SITE_URL}/images/${seoImage}`}
      />

      <section className="detail-portofolio-hero">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
          <Link to="/portfolio" className="detail-portofolio-back-link">
            <span aria-hidden="true">←</span> BACK TO PORTFOLIO
          </Link>

          <div className="mt-10 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <p className="section-kicker">
                SELECTED COLLECTION · {collectionName.toUpperCase()}
              </p>

              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                {title}
                <span className="text-gold"> {highlightTitle}</span>
              </h1>
            </div>

            <p className="max-w-md text-sm leading-7 text-stone-600 md:justify-self-end">
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-16">
        <div className="detail-portofolio-gallery-heading">
          <p className="section-kicker">THE COLLECTION</p>

          <p>{collection.length} SELECTED LOOKS</p>
        </div>

        <div className="details-collection-grid detail-portofolio-page-grid">
          {collection.map((image, index) => {
            const total = collection.length;
            const isTallPattern = index % 5 === 0;
            const isLastRow = index >= total - 4;

            return (
              <button
                type="button"
                key={image}
                className={`details-collection-item ${
                  isTallPattern && isLastRow
                    ? "details-collection-item-last-row"
                    : ""
                }`}
                onClick={() => setSelectedImage(image)}
                aria-label={`View ${collectionName} photo ${index + 1}`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/${imageFolder}/${image}`}
                  alt={`Aireta ${collectionName} collection ${index + 1}`}
                  loading={index < 4 ? "eager" : "lazy"}
                  fetchpriority={index === 0 ? "high" : "auto"}
                />

                <span>{String(index + 1).padStart(2, "0")}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="portfolio-closing">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-6 sm:py-20">
          <p className="section-kicker">
            "CREATE YOUR {collectionName.toUpperCase()} COLLECTION
          </p>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Have a {collectionName} Collection in Mind?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-600">
            {closingDescription}
          </p>

          <Link to="/contact" className="services-cta-button mt-8 inline-flex">
            START YOUR PROJECT <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {selectedImage && (
        <div
          className="details-image-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`${collectionName} photo preview`}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close photo preview"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={`${import.meta.env.BASE_URL}images/${imageFolder}/${selectedImage}`}
            alt={`Aireta ${collectionName} collection preview`}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
