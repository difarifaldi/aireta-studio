import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  { title: "Modest Wear (Basic)", image: "foto1.jpg", size: "tall" },
  {
    title: "Modest Wear (Pattern Printing)",
    image: "foto2.jpg",
    size: "standard",
  },
  { title: "Abaya", image: "foto10.jpg", size: "wide" },
  { title: "Kidswear", image: "foto4.jpg", size: "standard" },
  { title: "Manwear", image: "foto5.jpg", size: "tall" },
  { title: "Sarimbit", image: "foto11.jpg", size: "wide" },
  { title: "Hijab", image: "foto6.jpg", size: "standard" },
  { title: "Embroidery", image: "foto8.jpg", size: "wide" },
  { title: "Custom Collection", image: "foto9.jpg", size: "tall" },
];

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  useEffect(() => {
    const close = (event) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="section-kicker">SELECTED WORKS</p>
              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                A Showcase
                <span className="text-gold"> of Our Work</span>
              </h1>
            </div>
            <div className="md:justify-self-end">
              <p className="max-w-md text-sm leading-7 text-stone-600">
                Every project reflects a collaborative journey, combining
                creativity, craftsmanship, and attention to detail to bring each
                brand's vision to life.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#b08d57]" aria-hidden="true" />
                <span className="text-[10px] leading-5 tracking-[0.15em] text-stone-500">
                  CREATIVE DIRECTION · DEVELOPMENT
                  <br />
                  CRAFTSMANSHIP · PRODUCTION
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="portfolio-gallery">
          {projects.map((project, index) => (
            <button
              type="button"
              className={`portfolio-project portfolio-project-${project.size}`}
              key={project.title}
              onClick={() => setSelected(project)}
              aria-label={`View ${project.title}`}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/${project.image}`}
                alt={project.title}
                loading="lazy"
              />
              <span className="portfolio-project-shade" />
              <span className="portfolio-project-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="portfolio-project-info">
                <span className="portfolio-project-category">
                  SELECTED COLLECTION
                </span>
                <span className="portfolio-project-title">{project.title}</span>
                <span className="portfolio-project-view">
                  VIEW PROJECT <i>↗</i>
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="portfolio-closing">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-6 sm:py-20">
          <p className="section-kicker">YOUR COLLECTION COULD BE NEXT</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Ready to Build Your Brand?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-600">
            Whether you're starting from an idea or refining an existing
            concept, we're here to help bring your vision to life with creative
            and production solutions tailored to your brand.
          </p>
          <Link to="/contact" className="services-cta-button mt-8 inline-flex">
            START YOUR PROJECT <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {selected && (
        <div
          className="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            className="portfolio-lightbox-close"
            aria-label="Close project"
            onClick={() => setSelected(null)}
          >
            ×
          </button>
          <div
            className="portfolio-lightbox-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/${selected.image}`}
              alt={selected.title}
            />
            <div className="portfolio-lightbox-copy">
              <p className="section-kicker">SELECTED COLLECTION</p>
              <h2 className="mt-3 font-serif text-3xl">{selected.title}</h2>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Creative development, sampling, and production by Aireta Studio.
                Every detail was thoughtfully developed to reflect the
                collection&apos;s identity.
              </p>
              <Link
                to="/contact"
                className="gold-link mt-6 inline-flex"
                onClick={() => setSelected(null)}
              >
                CREATE A SIMILAR PROJECT <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
