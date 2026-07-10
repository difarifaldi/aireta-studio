import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
function Stats() {
  const items = [
    { end: 15, label: "YEARS EXPERIENCE" },
    { end: 200, label: "COLLECTIONS PRODUCED" },
    { end: 50, label: "FASHION BRANDS" },
    { end: 10, label: "COUNTRIES SERVED" },
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
      className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
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
    "/images/foto1.jpg",
    "/images/foto2.jpg",
    "/images/foto3.jpg",
    "/images/foto4.jpg",
    "/images/foto5.jpg",
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
          <h3 className="mt-2 text-2xl font-serif">Crafted for International Brands</h3>
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
              <div className="text-sm text-white">
                {labels[i]}
              </div>
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

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/images/factory-landscape.jpg"
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

      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h4 className="text-center text-lg text-gray-600">
            Our Production Journey
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-6 text-center text-sm text-gray-600">
            {["01", "02", "03", "04", "05", "06"].map((n, i) => (
              <div key={i}>
                <div className="text-2xl font-semibold">{n}</div>
                <div className="mt-2">Step Title</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-2xl">
              Trusted by Fashion Brands Across the World
            </h3>
            <p className="mt-4 text-gray-600">
              Delivering premium quality garments to our partners in more than
              10 countries.
            </p>
          </div>
          <div
            className="h-48 bg-contain bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg)",
            }}
          ></div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-serif text-2xl">
              Let\'s Create Something Extraordinary
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
