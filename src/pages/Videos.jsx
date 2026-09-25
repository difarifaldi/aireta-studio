import React, { useMemo, useState } from "react";
import Seo, { SITE_URL } from "../components/Seo";
import InlineVideoCard from "../components/InlineVideoCard";

const videos = [
  {
    id: "behind1",
    title: "Behind the Craft",
    category: "Behind the Scenes",
    description: "A closer look at the people and craft behind every piece.",
  },
  {
    id: "campaign1",
    title: "Voices of the Brand",
    category: "Campaign",
    description: "An authentic story and perspective shared through the campaign.",
  },
  {
    id: "detail1",
    title: "Textile in Detail",
    category: "Detail",
    description: "Fabric, texture, and finishing details captured up close.",
  },
  {
    id: "process1",
    title: "The Cutting Process",
    category: "Process",
    description: "Precision cutting as the first step toward a refined garment.",
  },
  {
    id: "process2",
    title: "Sampling in Motion",
    category: "Process",
    description: "Transforming an initial design into a production-ready sample.",
  },
  {
    id: "process3",
    title: "Crafted Step by Step",
    category: "Process",
    description: "A glimpse into the thoughtful stages of garment production.",
  },
  {
    id: "promotion1",
    title: "Why This Collection",
    category: "Promotion",
    description: "Introducing the values and ideas behind the product.",
  },
  {
    id: "promotion2",
    title: "Made for Everyday",
    category: "Promotion",
    description: "A product story shaped around comfort, purpose, and style.",
  },
  {
    id: "promotion3",
    title: "Designed to Inspire",
    category: "Promotion",
    description: "A visual campaign created to connect products with audiences.",
  },
];

const filters = [
  "All",
  "Behind the Scenes",
  "Campaign",
  "Detail",
  "Process",
  "Promotion",
];

export default function Videos() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleVideos = useMemo(
    () =>
      activeFilter === "All"
        ? videos
        : videos.filter((video) => video.category === activeFilter),
    [activeFilter],
  );

  return (
    <div className="videos-page">
      <Seo
        title="Fashion Videos & Campaign Showcase"
        description="Explore Aireta Studio fashion campaigns, production processes, garment details, promotional videos, and behind-the-scenes stories."
        path="/videos/"
        image={`${SITE_URL}/images/video-posters/promotion1.webp`}
      />

      <section className="videos-hero">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <p className="section-kicker">MOTION &amp; STORYTELLING</p>
              <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                Stories Made
                <span className="text-gold"> to Move</span>
              </h1>
            </div>
            <p className="max-w-md text-sm leading-7 text-stone-600 md:justify-self-end">
              From the production floor to finished campaigns, discover how
              ideas, craftsmanship, and products come alive through motion.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-16">
        <div className="video-filter" aria-label="Filter videos">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={activeFilter === filter ? "video-filter-active" : ""}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="video-gallery">
          {visibleVideos.map((video, index) => (
            <InlineVideoCard
              video={video}
              index={index}
              eager={index < 3}
              key={video.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
