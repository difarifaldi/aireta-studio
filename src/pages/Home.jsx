import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
  const labels = [
    "Design Consultation",
    "Pattern Development",
    "Sampling & Prototyping",
    "Fabric Sourcing",
    "Production Management",
    "Quality Control",
    "Packaging & Finishing",
    "Global Shipping",
  ];
  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-lg text-gray-600">
          End-to-End Manufacturing Solutions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {labels.map((l, i) => (
            <div
              key={i}
              className="p-6 bg-white border rounded text-center text-sm text-gray-600"
            >
              {l}
            </div>
          ))}
        </div>
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
          <p className="section-kicker">FEATURED COLLECTIONS</p>
          <h3 className="mt-2 text-2xl font-serif">
            Crafted for International Brands
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
      location: "Bandung, Indonesia",
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
            <p className="section-kicker">CLIENT STORIES</p>
            <h2 className="mt-3 max-w-lg font-serif text-3xl leading-tight sm:text-4xl">
              Trusted by Visionary Fashion Brands
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
    ["Consultation", "Understanding your vision and requirements"],
    ["Development", "Design, pattern, and material development"],
    ["Sampling", "Creating prototypes and fit samples"],
    ["Production", "High-quality production with advanced systems"],
    ["Quality Control", "Multi-stage quality inspection"],
    ["Global Delivery", "On-time delivery to your destination"],
  ];

  return (
    <section className="journey-section">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <div className="text-center">
          <p className="section-kicker">HOW WE WORK</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Our Production Journey
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-stone-500">
            A thoughtful process designed to turn your creative vision into a
            beautifully finished collection.
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
  const destinations = [
    "Sumatra",
    "Jakarta",
    "Bali",
    "Kalimantan",
    "Sulawesi",
    "Papua",
  ];

  return (
    <section className="global-section">
      <div className="global-layout mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <div className="global-copy">
          <p className="section-kicker">GLOBAL REACH</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            Trusted by Fashion Brands Across the World
          </h2>
          <p className="mt-5 text-sm leading-7 text-stone-600">
            Menjangkau berbagai kota dan pulau di seluruh Indonesia, dengan
            Bandung sebagai pusat dari setiap perjalanan produksi kami.
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
            <path d="M522 207 Q503 202 490 205" />
            <path d="M522 207 Q525 220 536 228" />
            <path d="M522 207 Q552 196 570 201" />
            <path d="M522 207 Q565 183 586 184" />
            <path d="M522 207 Q585 194 612 205" />
            <path d="M522 207 Q618 186 654 192" />
            <circle cx="522" cy="207" r="7" className="map-origin-pulse" />
            <circle cx="522" cy="207" r="3" />
            <circle cx="490" cy="205" r="3" />
            <circle cx="536" cy="228" r="3" />
            <circle cx="570" cy="201" r="3" />
            <circle cx="586" cy="184" r="3" />
            <circle cx="612" cy="205" r="3" />
            <circle cx="654" cy="192" r="3" />
          </svg>
          <span className="map-label map-label-origin">BANDUNG</span>
          <div className="global-destinations">
            {destinations.map((place) => (
              <span key={place}>{place}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
          <img
            src={`${import.meta.env.BASE_URL}images/factory-landscape.jpg`}
            alt="factory"
            className="rounded"
          />
          <div>
            <p className="text-xs text-gray-400">ABOUT AIRETA</p>
            <h2 className="font-serif text-3xl mt-4">
              A Manufacturing Partner for Visionary Fashion Brands
            </h2>
            <p className="mt-4 text-gray-600">
              Aireta combines technical expertise, advanced production
              capabilities, and meticulous craftsmanship to support fashion
              brands from concept development to global distribution.
            </p>
            <button className="mt-6 border px-4 py-2">
              LEARN MORE ABOUT US
            </button>
          </div>
        </div>
      </section>

      <Stats />
      <Services />
      <Portfolio />
      <CustomerFeedback />

      <ProductionJourney />
      <GlobalReach />

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-serif text-2xl">
              Let's Create Something Extraordinary
            </h4>
            <p className="mt-4 text-gray-600">
              Your next collection begins here.
            </p>
          </div>
          <div className="md:col-span-2">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input placeholder="Full Name" className="border p-3" />
              <input placeholder="Brand / Company" className="border p-3" />
              <input placeholder="Email Address" className="border p-3" />
              <input placeholder="Country" className="border p-3" />
              <textarea
                placeholder="Message"
                className="border p-3 md:col-span-2"
                rows="4"
              ></textarea>
              <button className="bg-black text-white px-6 py-3 md:col-span-2">
                REQUEST A QUOTE
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
