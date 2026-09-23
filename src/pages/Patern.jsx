import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Seo, { SITE_URL } from "../components/Seo";

const PatternCollection = Array.from(
  { length: 10 },
  (_, index) => `patern${index + 1}.webp`,
);

export default function Pattern() {
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
    <div className="detail-portofolio-page">
      <Seo
        title="Pattern Making & Development"
        description="Explore Aireta Studio's patern making portfolio, featuring precise garment patterns, thoughtful construction, and professional fashion development."
        path="/portfolio/patern/"
        image={`${SITE_URL}/images/patern/pattern1.webp`}
      />

      <section className="detail-portofolio-hero">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
          <Link to="/portfolio" className="detail-portofolio-back-link">
            <span aria-hidden="true">←</span> BACK TO PORTFOLIO
          </Link>

          <div className="mt-10 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <p className="section-kicker">
                SELECTED COLLECTION · PATTERN MAKING
              </p>

              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                Precision in Every Line,
                <span className="text-gold"> Built for the Perfect Fit</span>
              </h1>
            </div>

            <p className="max-w-md text-sm leading-7 text-stone-600 md:justify-self-end">
              Carefully developed patterns that translate creative concepts into
              accurate, balanced, and production-ready garments.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-16">
        <div className="detail-portofolio-gallery-heading">
          <p className="section-kicker">THE COLLECTION</p>
          <p>{PatternCollection.length} SELECTED WORKS</p>
        </div>

        <div className="details-collection-grid detail-portofolio-page-grid">
          {PatternCollection.map((image, index) => (
            <button
              type="button"
              className="details-collection-item"
              key={image}
              onClick={() => setSelectedImage(image)}
              aria-label={`View Pattern photo ${index + 1}`}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/patern/${image}`}
                alt={`Aireta Pattern Making collection ${index + 1}`}
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
          <p className="section-kicker">DEVELOP YOUR GARMENT PATTERN</p>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Have a Design in Mind?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-600">
            Discuss your design, measurements, sizing, construction, and patern
            development needs with our team.
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
          aria-label="Pattern photo preview"
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
            src={`${import.meta.env.BASE_URL}images/patern/${selectedImage}`}
            alt="Aireta Pattern Making preview"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
