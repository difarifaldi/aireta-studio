import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Seo, { SITE_URL } from "../components/Seo";

const kidsCollection = Array.from(
  { length: 14 },
  (_, index) => `kids${index + 1}.webp`,
);

export default function Kidswear() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  useEffect(() => {
    const close = (event) => event.key === "Escape" && setSelectedImage(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className="kidswear-page">
      <Seo
        title="Kidswear Collection & Manufacturing"
        description="Explore Aireta Studio's Kidswear collection, featuring comfortable silhouettes, thoughtful details, and professional garment production."
        path="/portfolio/kidswear/"
        image={`${SITE_URL}/images/kids/kids12.webp`}
      />

      <section className="kidswear-hero">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
          <Link to="/portfolio" className="kidswear-back-link">
            <span aria-hidden="true">←</span> BACK TO PORTFOLIO
          </Link>
          <div className="mt-10 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <p className="section-kicker">SELECTED COLLECTION · KIDSWEAR</p>
              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                Little Pieces,
                <span className="text-gold"> Beautiful Stories</span>
              </h1>
            </div>
            <p className="max-w-md text-sm leading-7 text-stone-600 md:justify-self-end">
              Playful silhouettes, comfortable materials, and thoughtful
              details—developed to let every child move freely and confidently.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-16">
        <div className="kidswear-gallery-heading">
          <p className="section-kicker">THE COLLECTION</p>
          <p>{kidsCollection.length} SELECTED LOOKS</p>
        </div>
        <div className="kids-collection-grid kidswear-page-grid">
          {kidsCollection.map((image, index) => (
            <button
              type="button"
              className="kids-collection-item"
              key={image}
              onClick={() => setSelectedImage(image)}
              aria-label={`View Kidswear photo ${index + 1}`}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/kids/${image}`}
                alt={`Aireta Kidswear collection ${index + 1}`}
                loading={index < 4 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="portfolio-closing">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-6 sm:py-20">
          <p className="section-kicker">CREATE YOUR KIDSWEAR COLLECTION</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Have a Collection in Mind?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-600">
            Discuss your concept, materials, sizing, and production needs with
            our team.
          </p>
          <Link to="/contact" className="services-cta-button mt-8 inline-flex">
            START YOUR PROJECT <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {selectedImage && (
        <div
          className="kids-image-viewer"
          role="dialog"
          aria-modal="true"
          aria-label="Kidswear photo preview"
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
            src={`${import.meta.env.BASE_URL}images/kids/${selectedImage}`}
            alt="Aireta Kidswear collection preview"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
