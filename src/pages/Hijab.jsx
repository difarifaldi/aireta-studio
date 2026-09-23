import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Seo, { SITE_URL } from "../components/Seo";

const HijabCollection = Array.from(
  { length: 33 },
  (_, index) => `hijab${index + 1}.webp`,
);

export default function Hijab() {
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
        title="Hijab Collection & Manufacturing"
        description="Explore Aireta Studio's hijab collection, featuring elegant designs, refined details, versatile styles, and professional garment production."
        path="/portfolio/hijab/"
        image={`${SITE_URL}/images/hijab/hijab1.webp`}
      />

      <section className="detail-portofolio-hero">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
          <Link to="/portfolio" className="detail-portofolio-back-link">
            <span aria-hidden="true">←</span> BACK TO PORTFOLIO
          </Link>

          <div className="mt-10 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <p className="section-kicker">SELECTED COLLECTION · HIJAB</p>

              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                Graceful Style,
                <span className="text-gold"> Thoughtfully Crafted</span>
              </h1>
            </div>

            <p className="max-w-md text-sm leading-7 text-stone-600 md:justify-self-end">
              A curated hijab collection designed with elegant proportions,
              refined fabrics, versatile colors, and thoughtful details for
              effortless everyday styling.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-16">
        <div className="detail-portofolio-gallery-heading">
          <p className="section-kicker">THE COLLECTION</p>
          <p>{HijabCollection.length} SELECTED LOOKS</p>
        </div>

        <div className="details-collection-grid detail-portofolio-page-grid">
          {HijabCollection.map((image, index) => (
            <button
              type="button"
              className="details-collection-item"
              key={image}
              onClick={() => setSelectedImage(image)}
              aria-label={`View Hijab photo ${index + 1}`}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/hijab/${image}`}
                alt={`Aireta Hijab collection ${index + 1}`}
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
          <p className="section-kicker">CREATE YOUR HIJAB COLLECTION</p>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Have a Hijab Collection in Mind?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-600">
            Discuss your concept, fabrics, colors, dimensions, finishing, and
            production needs with our team to create a hijab collection that
            reflects your brand and vision.
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
          aria-label="Hijab photo preview"
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
            src={`${import.meta.env.BASE_URL}images/hijab/${selectedImage}`}
            alt="Aireta Hijab collection preview"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
