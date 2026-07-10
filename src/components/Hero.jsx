import React from "react";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-5 py-10 sm:px-6 sm:py-14 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <p className="text-xs tracking-widest text-gray-400">
            MANUFACTURING EXCELLENCE
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mt-4">
            Crafting Fashion
            <br />
            Beyond Production
          </h1>
          <p className="mt-6 text-gray-600 max-w-xl">
            A trusted manufacturing partner for fashion brands worldwide. Where
            craftsmanship, quality, and commitment define every piece we create.
          </p>
          <div className="flex flex-col gap-3 mt-8 sm:flex-row sm:gap-4 sm:items-center">
            <button className="bg-black text-white px-6 py-3 rounded-sm shadow hover:bg-[#b08d57] transition">
              START YOUR PROJECT
            </button>
            <button className="gold-outline-button px-6 py-3 rounded-sm">
              EXPLORE PORTFOLIO <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div
            className="w-full h-72 sm:h-96 bg-cover bg-center rounded"
            style={{
              backgroundImage: "url(/images/main-landscape.jpg)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
