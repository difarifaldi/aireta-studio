import React, { useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function VideoStorySection({
  kicker,
  title,
  description,
  videos,
  tone = "light",
}) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const single = videos.length === 1;

  useEffect(() => {
    if (!selectedVideo) return undefined;

    document.body.style.overflow = "hidden";
    const close = (event) => event.key === "Escape" && setSelectedVideo(null);
    window.addEventListener("keydown", close);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [selectedVideo]);

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
        <button
          type="button"
          className="video-card"
          key={video.id}
          onClick={() => setSelectedVideo(video)}
          aria-label={`Play ${video.title}`}
        >
          <span className="video-card-media">
            <img
              src={`${import.meta.env.BASE_URL}images/video-posters/${video.id}.webp`}
              alt={video.title}
              loading="lazy"
            />
            <span className="video-card-shade" />
            <span className="video-play-button">
              <Play size={18} strokeWidth={1.5} fill="currentColor" />
            </span>
            <span className="video-card-number">
              {String(index + 1).padStart(2, "0")}
            </span>
          </span>
          <span className="video-card-copy">
            <span className="video-card-category">{video.category}</span>
            <span className="video-card-title">{video.title}</span>
            <span className="video-card-description">{video.description}</span>
          </span>
        </button>
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

      {selectedVideo && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
          onClick={() => setSelectedVideo(null)}
        >
          <button
            type="button"
            className="video-modal-close"
            aria-label="Close video"
            onClick={() => setSelectedVideo(null)}
          >
            <X size={25} strokeWidth={1.4} />
          </button>
          <div
            className="video-modal-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <video
              controls
              autoPlay
              playsInline
              preload="metadata"
              poster={`${import.meta.env.BASE_URL}images/video-posters/${selectedVideo.id}.webp`}
            >
              <source
                src={`${import.meta.env.BASE_URL}videos/optimized/${selectedVideo.id}.mp4`}
                type="video/mp4"
              />
            </video>
            <div className="video-modal-copy">
              <p className="section-kicker">{selectedVideo.category}</p>
              <h2 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                {selectedVideo.title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
