import React, { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

export default function InlineVideoCard({ video, index = 0, eager = false }) {
  const [opened, setOpened] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!opened || !videoRef.current) return;
    videoRef.current.play().catch(() => {});
  }, [opened]);

  const pauseOtherVideos = (event) => {
    document.querySelectorAll("video.inline-story-video").forEach((element) => {
      if (element !== event.currentTarget) element.pause();
    });
  };

  return (
    <article className="video-card">
      <div className="video-card-media">
        {opened ? (
          <video
            ref={videoRef}
            className="inline-story-video"
            controls
            autoPlay
            playsInline
            preload="metadata"
            poster={`${import.meta.env.BASE_URL}images/video-posters/${video.id}.webp`}
            onPlay={pauseOtherVideos}
          >
            <source
              src={`${import.meta.env.BASE_URL}videos/optimized/${video.id}.mp4`}
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>
        ) : (
          <button
            type="button"
            className="video-card-trigger"
            onClick={() => setOpened(true)}
            aria-label={`Play ${video.title}`}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/video-posters/${video.id}.webp`}
              alt={video.title}
              loading={eager ? "eager" : "lazy"}
            />
            <span className="video-card-shade" />
            <span className="video-play-button">
              <Play size={18} strokeWidth={1.5} fill="currentColor" />
            </span>
            <span className="video-card-number">
              {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        )}
      </div>
      <div className="video-card-copy">
        <span className="video-card-category">{video.category}</span>
        <span className="video-card-title">{video.title}</span>
        <span className="video-card-description">{video.description}</span>
      </div>
    </article>
  );
}
