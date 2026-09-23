"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Section } from "../Section";

interface PackagingCard {
  id: string;
  title: string;
  desc: string;
}

const cards: PackagingCard[] = [
  {
    id: "01",
    title: "Complete Box-Packed Units",
    desc: "Where required, finished assemblies can be prepared as complete box-packed units, ready for handling and dispatch.",
  },
  {
    id: "02",
    title: "MRP Labelling",
    desc: "MRP labelling can be incorporated into the packaging process according to applicable product requirements.",
  },
  {
    id: "03",
    title: "Barcode Printing",
    desc: "Barcode printing supports product identification and retains important data produced even information through the production and packaging process.",
  },
  {
    id: "04",
    title: "Product Traceability",
    desc: "Traceability processes help ensure that every product carries relevant production and identification information, supporting controlled manufacturing operations.",
  },
];

export function IntegratedPackaging() {
  // activeIndex tracks the active big card on the right (defaults to index 1 = card 02)
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const startX = useRef(0);
  const isDragging = useRef(false);

  // Infinite Next: 4 ke baad wapas 1 pe loop
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % cards.length);
    setTimeout(() => setIsAnimating(false), 450);
  };

  // Infinite Prev: 1 ke pehle wapas 4 pe loop
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setTimeout(() => setIsAnimating(false), 450);
  };

  // Touch Swipe Handlers (Mobile / Tablets)
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;
    if (diff > 45) {
      handleNext(); // swipe left -> next card (infinite)
    } else if (diff < -45) {
      handlePrev(); // swipe right -> prev card (infinite)
    }
  };

  // Mouse Drag Handlers (Desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = startX.current - e.clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
  };

  // Infinite Left Card calculation: current index se 1 peeche circular wrap
  const prevIndex = (activeIndex - 1 + cards.length) % cards.length;
  const leftCard = cards[prevIndex];
  const rightCard = cards[activeIndex];

  return (
    <Section className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-white select-none" disablePaddingY>
      <div className="mx-auto w-full max-w-[1780px] px-6 sm:px-10 lg:px-16 xl:px-24">
        
        {/* Section Heading */}
        <div className="text-left mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#23272e] leading-[1.12] tracking-tight">
            Integrated Packaging<br />Solutions
          </h2>
        </div>

        {/* 2-Card Infinite Swipe Surface */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 xl:gap-8 w-full cursor-grab active:cursor-grabbing"
        >
          {/* LEFT CARD: Smaller, Inactive, Infinite Loop backward on click */}
          <div
            onClick={handlePrev}
            className="w-full lg:w-[38%] xl:w-[36%] h-[200px] sm:h-[220px] md:h-[235px] rounded-[24px] sm:rounded-[28px] bg-[#f1f3f5] text-[#23272e] p-3.5 sm:p-4 flex items-center shadow-sm transition-all duration-500 ease-out cursor-pointer hover:bg-[#eaecee]"
          >
            {/* Left Image (Smaller) */}
            <div className="relative shrink-0 w-[42%] sm:w-[40%] h-full overflow-hidden rounded-[18px] sm:rounded-[22px] pointer-events-none">
              <Image
                key={`left-img-${leftCard.id}`}
                src="/packaging/image1.jpg"
                alt={leftCard.title}
                fill
                className="object-cover transition-opacity duration-300"
              />
            </div>

            {/* Left Content */}
            <div className="ml-4 sm:ml-5 flex flex-col justify-center flex-1 pr-2 pointer-events-none">
              <h3 className="font-bold text-[#0057b7] text-base sm:text-lg leading-snug tracking-tight">
                {leftCard.title}
              </h3>
              <p className="mt-2 text-xs sm:text-[12.5px] leading-relaxed text-[#666c75] line-clamp-3 sm:line-clamp-4">
                {leftCard.desc}
              </p>
            </div>
          </div>

          {/* RIGHT CARD: Bigger, Active Royal Blue with Zoomed Image, Infinite Loop forward on click */}
          <div
            onClick={handleNext}
            className="w-full lg:w-[62%] xl:w-[64%] h-[240px] sm:h-[270px] md:h-[295px] rounded-[24px] sm:rounded-[28px] bg-[#0057b7] text-white p-4 sm:p-5 flex items-center shadow-xl transition-all duration-500 ease-out cursor-pointer"
          >
            {/* Right Image (Bigger & Scale-110 Zoomed) */}
            <div className="relative shrink-0 w-[52%] sm:w-[50%] h-full overflow-hidden rounded-[18px] sm:rounded-[22px] pointer-events-none">
              <Image
                key={`right-img-${rightCard.id}`}
                src="/packaging/image1.jpg"
                alt={rightCard.title}
                fill
                priority
                className="object-cover scale-110 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Right Content */}
            <div className="ml-5 sm:ml-7 flex flex-col justify-center flex-1 pr-3 sm:pr-6 pointer-events-none">
              <h3 className="font-bold text-white text-lg sm:text-xl xl:text-[23px] leading-snug tracking-tight">
                {rightCard.title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-[13px] xl:text-[14px] leading-relaxed text-white/90 line-clamp-4">
                {rightCard.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Progress Bar synced with infinite active card index */}
        <div className="mt-8 sm:mt-12 flex items-center gap-4 max-w-full text-xs sm:text-sm font-semibold text-[#8c94a0]">
          <span>{rightCard.id}</span>
          <div className="relative flex-1 h-[2px] bg-[#e4e7eb] rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#0057b7] transition-all duration-500 rounded-full"
              style={{
                width: `${((activeIndex + 1) / cards.length) * 100}%`,
              }}
            />
          </div>
          <span>0{cards.length}</span>
        </div>

      </div>
    </Section>
  );
}