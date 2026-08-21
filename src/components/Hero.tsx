"use client";

import { CirclePlay } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative h-full min-h-[300px] sm:min-h-[450px] lg:min-h-[600px] w-full overflow-hidden rounded-2xl bg-black">
      {/* Video Element */}
      <video
        ref={videoRef}
        src="/hero-video.mp4"
        controls={isPlaying}
        playsInline
        onEnded={handleVideoEnded}
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          isPlaying ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Thumbnail and Play Button Overlay */}
      {!isPlaying && (
        <div
          onClick={handlePlay}
          className="group absolute inset-0 z-10 flex cursor-pointer items-center justify-center"
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />

          {/* Play Icon */}
          <div className="relative z-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 active:scale-95">
            <CirclePlay className="size-16 sm:size-24 lg:size-28 stroke-1 text-white drop-shadow-lg" />
          </div>

          {/* Image Poster */}
          <Image
            className="h-full w-full object-cover select-none"
            src="/hero_thumbnail.png"
            alt="hero"
            fill
            priority
            sizes="100vw"
          />
        </div>
      )}
    </div>
  );
};