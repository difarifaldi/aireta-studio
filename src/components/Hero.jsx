import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-editorial">
      <div className="hero-editorial-inner mx-auto max-w-6xl px-5 sm:px-6">
        <div className="hero-editorial-image">
          <img
            src={`${import.meta.env.BASE_URL}images/main-landscape.png`}
            alt="Aireta fashion collection and manufacturing display"
          />
          <span className="hero-image-shade" />
          <span className="hero-image-index" aria-hidden="true">
            01
          </span>
        </div>

        <div className="hero-editorial-content">
          <p className="section-kicker">MANUFACTURING EXCELLENCE</p>
          <h1 className="hero-editorial-title">
            Empowering
            <br />
            Fashion Brands
          </h1>
          <div className="hero-editorial-body">
            <span className="hero-title-line" aria-hidden="true" />
            <p>
              Your trusted partner in transforming ideas into collections,
              guided by craftsmanship, quality, and attention to every detail.
              We believe great products begin with strong collaboration, which
              is why we work closely with every client to understand their
              vision, goals, and brand identity.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link to="/contact" className="hero-primary-button">
              START YOUR PROJECT <span aria-hidden="true">→</span>
            </Link>
            <Link
              to="/portfolio"
              className="gold-outline-button hero-secondary-button"
            >
              EXPLORE PORTFOLIO <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <p className="hero-scroll-label" aria-hidden="true">
          SCROLL TO DISCOVER <span>↓</span>
        </p>
      </div>
    </section>
  );
}
