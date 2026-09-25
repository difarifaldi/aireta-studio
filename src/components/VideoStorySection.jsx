import React from "react";
import { Link } from "react-router-dom";
import InlineVideoCard from "./InlineVideoCard";

export default function VideoStorySection({
  kicker,
  title,
  description,
  videos,
  tone = "light",
}) {
  const single = videos.length === 1;

  const heading = (
    <div className="context-video-heading">
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-7 text-stone-600">
        {description}
      </p>
      <Link to="/videos" className="gold-link mt-6 inline-flex">
        EXPLORE ALL STORIES <span aria-hidden="true">→</span>
      </Link>
    </div>
  );

  const cards = (
    <div className={single ? "context-video-single-card" : "context-video-grid"}>
      {videos.map((video, index) => (
        <InlineVideoCard
          video={video}
          index={index}
          key={video.id}
        />
      ))}
    </div>
  );

  return (
    <section className={`context-video-section context-video-${tone}`}>
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        {single ? (
          <div className="context-video-single">
            {heading}
            {cards}
          </div>
        ) : (
          <>
            <div className="context-video-heading-wide">{heading}</div>
            {cards}
          </>
        )}
      </div>

    </section>
  );
}
