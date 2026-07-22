import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Factory,
  Globe2,
  Layers3,
  MessageCircle,
  PackageCheck,
  Ruler,
  ScanSearch,
  Scissors,
  Shirt,
  UserRound,
} from "lucide-react";
import Hero from "../components/Hero";
function Stats() {
  const items = [
    { end: 15, label: "YEARS EXPERIENCE" },
    { end: 200, label: "COLLECTIONS PRODUCED" },
    { end: 50, label: "FASHION BRANDS" },
  ];
  const [counts, setCounts] = useState(items.map(() => 0));
  const ref = useRef(null);
  const played = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !played.current) {
            played.current = true;
            items.forEach((it, i) => {
              const duration = 1400;
              const start = performance.now();
              const step = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const value = Math.floor(progress * it.end);
                setCounts((prev) => {
                  const next = [...prev];
                  next[i] = value;
                  return next;
                });
                if (progress < 1) requestAnimationFrame(step);
                else {
                  setCounts((prev) => {
                    const next = [...prev];
                    next[i] = it.end;
                    return next;
                  });
                }
              };
              requestAnimationFrame(step);
            });
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 py-12 text-center sm:grid-cols-3"
    >
      {items.map((it, idx) => (
        <div key={idx}>
          <div className="text-4xl md:text-5xl font-semibold font-serif">
            {counts[idx]}
            {it.end && "+"}
          </div>
          <div className="text-xs mt-2 text-gray-500">{it.label}</div>
        </div>
      ))}
    </div>
  );
}

function Services() {
  const services = [
    ["Design Consultation", Shirt],
    ["Pattern Making & Development", Ruler],
    ["Sample Development", Scissors],
    ["Material Sourcing", Layers3],
    ["Production Planning", Factory],
    ["Quality Control", ScanSearch],
    ["Packaging & Finishing", PackageCheck],
    ["Worldwide Delivery", Globe2],
  ];

  return (
    <section className="home-services py-12">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-kicker text-center">OUR SERVICES</p>
        <h3 className="mt-3 text-center font-serif text-2xl text-stone-700">
          From Concept to Collection, Crafted with Precision
        </h3>
        <div className="home-services-grid mt-8">
          {services.map(([label, Icon], index) => (
            <div key={label} className="home-service-card">
              <span className="home-service-icon">
                <Icon strokeWidth={1.35} />
              </span>
              <span className="home-service-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdminContacts() {
  const admins = [
    {
      name: "Acika",
      role: "Client Relations",
      number: "6281295050880",
      display: "+62 812 9505 0880",
    },
    {
      name: "Renata",
      role: "Production Consultant",
      number: "6281295050880",
      display: "+62 812 9505 0880",
    },
  ];

  return (
    <section id="admin-contact" className="admin-contact-section scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="text-center">
          <p className="section-kicker">TALK TO OUR TEAM</p>
          <h2 className="mt-3 font-serif text-3xl">
            Choose an Admin to Assist You
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-stone-500">
            Contact our team via WhatsApp to discuss your service, production,
            or brand's creative needs.
          </p>
        </div>
        <div className="admin-contact-grid mt-9">
          {admins.map((admin, index) => (
            <article className="admin-contact-card" key={admin.name}>
              <span className="admin-card-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="admin-avatar">
                <UserRound strokeWidth={1.35} />
              </span>
              <div>
                <p className="section-kicker">{admin.role}</p>
                <h3 className="mt-2 font-serif text-2xl">Admin {admin.name}</h3>
                <p className="mt-2 text-sm text-stone-500">{admin.display}</p>
              </div>
              <a
                href={`https://wa.me/${admin.number}?text=Halo%20Admin%20${admin.name},%20saya%20ingin%20konsultasi%20tentang%20layanan%20Aireta.`}
                target="_blank"
                rel="noreferrer"
                className="admin-whatsapp-button"
              >
                <MessageCircle size={16} strokeWidth={1.5} /> CHAT WHATSAPP{" "}
                <span>→</span>
              </a>
            </article>
          ))}
        </div>
        <p className="mt-5 text-center text-[10px] tracking-[0.08em] text-stone-400">
          AVAILABLE MONDAY—SATURDAY · 09:00—17:00 WIB
        </p>
      </div>
    </section>
  );
}

function Portfolio() {
  const imgs = [
    `${import.meta.env.BASE_URL}images/foto1.jpg`,
    `${import.meta.env.BASE_URL}images/foto2.jpg`,
    `${import.meta.env.BASE_URL}images/foto3.jpg`,
    `${import.meta.env.BASE_URL}images/foto4.jpg`,
    `${import.meta.env.BASE_URL}images/foto5.jpg`,
  ];
  const labels = [
    "EVENING WEAR",
    "MODEST COLLECTION",
    "RESORT WEAR",
    "KIDS WEAR",
    "FASHION SHOW",
  ];
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-end justify-between gap-5">
        <div>
          <p className="section-kicker">FEATURED PROJECTS</p>
          <h3 className="mt-2 text-2xl font-serif">
            From Concept to Collection
          </h3>
        </div>
        <Link to="/portfolio" className="gold-link hidden sm:inline-flex">
          VIEW ALL PORTFOLIO <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-6">
        {imgs.map((src, i) => (
          <div
            key={i}
            className="portfolio-card relative rounded overflow-hidden h-72 sm:h-64 md:h-48"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            />
            <div className="portfolio-overlay absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-4">
              <div className="text-sm text-white">{labels[i]}</div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/portfolio" className="gold-link mt-6 inline-flex sm:hidden">
        VIEW ALL PORTFOLIO <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}

function CustomerFeedback() {
  const testimonials = [
    {
      name: "Nadia Prameswari",
      role: "Founder, Maison Nara",
      location: "Jakarta, Indonesia",
      image: `${import.meta.env.BASE_URL}images/foto6.jpg`,
      quote:
        "Aireta tidak hanya memahami desain kami, tetapi juga karakter brand yang ingin kami bangun. Hasil produksinya rapi, komunikasinya jelas, dan setiap detail terasa sangat diperhatikan.",
    },
    {
      name: "Sarah Wijaya",
      role: "Creative Director, SORA Studio",
      location: "Bekasi, Indonesia",
      image: `${import.meta.env.BASE_URL}images/foto7.jpg`,
      quote:
        "Dari proses sampling sampai koleksi siap diluncurkan, tim Aireta sangat suportif. Mereka membantu kami menemukan solusi terbaik tanpa mengorbankan kualitas maupun visi kreatif.",
    },
    {
      name: "Alya Rahman",
      role: "Brand Owner, Élan Modest",
      location: "Kuala Lumpur, Malaysia",
      image: `${import.meta.env.BASE_URL}images/foto8.jpg`,
      quote:
        "Kami merasa memiliki partner, bukan sekadar vendor produksi. Timeline terjaga, kualitas konsisten, dan hasil akhirnya bahkan melampaui ekspektasi tim kami.",
    },
    {
      name: "Catherine Lim",
      role: "Founder, Atelier C",
      location: "Singapore",
      image: `${import.meta.env.BASE_URL}images/foto9.jpg`,
      quote:
        "Professional, thoughtful, and remarkably detail-oriented. Aireta made the entire development process feel effortless and delivered a collection we are truly proud of.",
    },
  ];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % testimonials.length),
      5500,
    );
    return () => window.clearInterval(timer);
  }, [paused, testimonials.length]);

  const changeSlide = (direction) => {
    setActive(
      (current) =>
        (current + direction + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      className="feedback-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <div className="mb-8 flex items-end justify-between gap-5 sm:mb-10">
          <div>
            <p className="section-kicker">WHAT OUR CLIENTS SAY</p>
            <h2 className="mt-3 max-w-lg font-serif text-3xl leading-tight sm:text-4xl">
              Stories Behind Successful Collections
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              className="slider-arrow"
              aria-label="Previous testimonial"
              onClick={() => changeSlide(-1)}
            >
              ←
            </button>
            <button
              type="button"
              className="slider-arrow"
              aria-label="Next testimonial"
              onClick={() => changeSlide(1)}
            >
              →
            </button>
          </div>
        </div>

        <div className="feedback-slider">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className={`feedback-slide ${index === active ? "feedback-slide-active" : ""}`}
              aria-hidden={index !== active}
            >
              <div className="feedback-image-wrap">
                <img src={item.image} alt={`Collection by ${item.role}`} />
                <span className="feedback-image-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="feedback-content">
                <div className="feedback-stars" aria-label="5 out of 5 stars">
                  ★ ★ ★ ★ ★
                </div>
                <span className="feedback-quote-mark" aria-hidden="true">
                  “
                </span>
                <blockquote>{item.quote}</blockquote>
                <div className="feedback-author">
                  <span className="feedback-author-line" />
                  <div>
                    <p className="font-serif text-xl">{item.name}</p>
                    <p className="mt-1 text-[10px] tracking-[0.12em] text-stone-500">
                      {item.role} · {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between sm:justify-center">
          <div className="flex gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={`slider-dot ${index === active ? "slider-dot-active" : ""}`}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={index === active}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
          <div className="flex gap-2 sm:hidden">
            <button
              type="button"
              className="slider-arrow"
              aria-label="Previous testimonial"
              onClick={() => changeSlide(-1)}
            >
              ←
            </button>
            <button
              type="button"
              className="slider-arrow"
              aria-label="Next testimonial"
              onClick={() => changeSlide(1)}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductionJourney() {
  const steps = [
    [
      "Consultation",
      "Aligning your vision, requirements, and production goals.",
    ],
    [
      "Development",
      "Pattern development, material selection, and technical preparation",
    ],
    ["Sampling", "Creating and refining samples for fit and approval."],
    ["Production", "Expert craftsmanship with consistent quality standards."],
    [
      "Quality Assurance",
      "Detailed inspections throughout the production process.",
    ],
    ["Finishing & Delivery", "Final touches, packaging, and on-time shipment."],
  ];

  return (
    <section className="journey-section">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <div className="text-center">
          <p className="section-kicker">OUR PROCESS</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            From Sketch to Deliver
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-stone-500">
            An end-to-end manufacturing journey designed to bring your fashion
            vision to life.
          </p>
        </div>
        <div className="journey-grid mt-12">
          {steps.map(([title, description], index) => (
            <article className="journey-step" key={title}>
              <div className="journey-step-top">
                <span className="journey-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < steps.length - 1 && (
                  <span className="journey-connector" aria-hidden="true">
                    <span />
                    <i />
                  </span>
                )}
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalReach() {
  const destinations = ["UAE", "India", "Malaysia", "Singapore", "Australia"];

  return (
    <section className="global-section">
      <div className="global-layout mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <div className="global-copy">
          <p className="section-kicker">CRAFTED IN INDONESIA</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            Manufacturing for Modern Fashion Brands
          </h2>
          <p className="mt-5 text-sm leading-7 text-stone-600">
            From concept development to finished garments, we help brands bring
            their collections to life with precision, quality, and care.
          </p>
          <Link to="/contact" className="gold-link mt-7 inline-flex">
            DISCOVER OUR LOCATION <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="global-map" aria-label="Aireta global distribution map">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            alt="World map"
          />
          <svg
            className="global-routes"
            viewBox="0 0 700 360"
            aria-hidden="true"
          >
            <path d="M527 207 Q450 150 399 171" />
            <path d="M527 207 Q475 190 455 202" />
            <path d="M527 207 Q548 184 564 188" />
            <path d="M527 207 Q565 214 585 224" />
            <path d="M527 207 Q583 250 600 287" />
            <circle cx="527" cy="207" r="7" className="map-origin-pulse" />
            <circle cx="527" cy="207" r="3" />
            <circle cx="399" cy="171" r="3" />
            <circle cx="455" cy="202" r="3" />
            <circle cx="564" cy="188" r="3" />
            <circle cx="585" cy="224" r="3" />
            <circle cx="600" cy="287" r="3" />
          </svg>
          <span className="map-label map-label-origin">BEKASI · INDONESIA</span>
          {/* <div className="global-destinations">
            {destinations.map((place) => (
              <span key={place}>{place}</span>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo !== "admin-contact") return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById("admin-contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.key, location.state]);

  return (
    <div>
      <Hero />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
          <img
            src={`${import.meta.env.BASE_URL}images/factory-landscape.png`}
            alt="factory"
            className="rounded"
          />
          <div>
            <p className="text-xs text-gray-400">ABOUT AIRETA</p>
            <h2 className="font-serif text-3xl mt-4">
              Built on Craftsmanship, Driven by Trust
            </h2>
            <p className="mt-4 text-gray-600">
              Aireta is a fashion manufacturing studio dedicated to helping
              brands bring their ideas to life. With a focus on quality,
              consistency, and attention to detail, we create an environment
              where creativity and craftsmanship work hand in hand. The result
              is a trusted partnership that supports brands in building
              collections with confidence.
            </p>

            <Link to="/contact" className="hero-primary-button mt-6">
              LEARN MORE ABOUT US
            </Link>
          </div>
        </div>
      </section>

      <Stats />
      <Services />
      <Portfolio />
      <CustomerFeedback />

      <ProductionJourney />
      <GlobalReach />

      <AdminContacts />
    </div>
  );
}
