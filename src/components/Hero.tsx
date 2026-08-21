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
    <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[650px] overflow-hidden">
      <video
        ref={videoRef}
        src="/hero-video.mp4"
        controls={isPlaying}
        playsInline
        onEnded={handleVideoEnded}
        className={`h-full w-full object-cover ${
          isPlaying ? "block" : "hidden"
        }`}
      />

      {!isPlaying && (
        <>
          <div
            onClick={handlePlay}
            className="inset-0 absolute bg-black/10 flex flex-row justify-center items-center cursor-pointer z-10"
          >
            <CirclePlay className="text-white size-16 sm:size-24 stroke-1" />
          </div>
          <Image
            className="h-full w-full object-cover"
            src={"/hero_thumbnail.png"}
            alt="hero"
            height={1080}
            width={1280}
          />
        </>
      )}
    </div>
  );
};