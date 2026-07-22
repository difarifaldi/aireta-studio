import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Brand Identity & Creative Direction",
    description: "Every successful brand begins with a clear identity. We create thoughtful visual identities and creative strategies that communicate your story with clarity, consistency, and purpose.",
    image: "brand.png",
  },
  {
    title: "Fashion Design Consultation",
    description: "From concept exploration to collection planning, we help shape products that reflect your brand identity and market vision.",
    image: "fashion.png",
  },
  {
    title: "Pattern Development",
    description: "Precision-crafted patterns designed for exceptional fit, efficient production, and consistent quality.",
    image: "pattern.png",
  },
  {
    title: "Custom Embroidery",
    description: "Premium embroidery solutions that add distinctive detail, refined craftsmanship, and lasting value to every product.",
    image: "custom.png",
  },
  {
    title: "Production",
    description: "From sampling to full-scale production, we ensure consistent quality, precision, and reliable craftsmanship at every stage.",
    image: "production.png",
  },
  {
    title: "Photoshoot Production",
    description: "From creative direction and styling to on-set coordination, we produce compelling visuals that showcase your brand at its best.",
    image: "photoshoot.png",
  },
  {
    title: "Video Campaign Production",
    description: "We produce engaging campaign videos that tell your brand story and showcase your products across digital platforms.",
    image: "video-campaign.png",
  },
  {
    title: "Website Design & Development",
    description: "We design and develop responsive websites that strengthen your online presence and create a seamless digital experience for your customers.",
    image: "brand.png",
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
          <p className="section-kicker">OUR SERVICES</p>
          <div className="mt-5 grid gap-8 md:grid-cols-2 md:items-end">
            <h1 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              From Concept to
              <span className="text-gold"> Production</span>
            </h1>
            <p className="max-w-lg text-sm leading-7 text-stone-600 md:justify-self-end md:text-base">
              We provide end-to-end production solutions, from design development and pattern making to sampling, embroidery, and full-scale manufacturing—ensuring quality, precision, and consistency at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-card-image">
                <img
                  src={`${import.meta.env.BASE_URL}images/${service.image}`}
                  alt={service.title}
                  loading="lazy"
                />
                <span className="service-card-image-overlay" />
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="service-card-content">
                <p className="service-card-kicker">AIRETA SERVICE</p>
                <h2 className="mt-2 font-serif text-2xl leading-snug">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-stone-600">{service.description}</p>
                <Link to="/contact" className="service-link">
                  DISCUSS THIS SERVICE <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-6 sm:py-20">
          <p className="section-kicker">LET'S WORK TOGETHER</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Let's Build Something Exceptional Together</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-stone-600">
            Share your vision with us, and we'll help you choose the right services to transform your ideas into a distinctive brand—from strategy and production to launch.
          </p>
          <Link to="/contact" className="services-cta-button mt-8 inline-flex">
            START YOUR PROJECT <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
