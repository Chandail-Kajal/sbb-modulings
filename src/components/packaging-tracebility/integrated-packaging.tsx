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
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const startX = useRef(0);
  const isDragging = useRef(false);

  // Animation duration increased to 1200ms for slow & gentle transition
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % cards.length);
    setTimeout(() => setIsAnimating(false), 1200);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setTimeout(() => setIsAnimating(false), 1200);
  };

  // Touch Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
  };

  // Mouse Drag Handlers
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

  const prevIndex = (activeIndex - 1 + cards.length) % cards.length;
  const nextCardIndex = (activeIndex + 1) % cards.length;

  return (
    <Section
      className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-white select-none"
      disablePaddingY
    >
      <div className="mx-auto w-full section-container">
        {/* Section Heading */}
        <div className="text-left mb-8 sm:mb-12">
          <h2 className="text-fluid-47 font-bold text-[#23272e] leading-[1.12] tracking-tight">
            Integrated Packaging
            <br />
            Solutions
          </h2>
        </div>

        {/* Swipe Track */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className="relative w-full h-[200px] sm:h-[220px] md:h-[235px] cursor-grab active:cursor-grabbing"
        >
          {cards.map((card, idx) => {
            const isRightActive = idx === activeIndex;
            const isLeftInactive = idx === prevIndex;
            const isUpcoming = idx === nextCardIndex;

            let stateClasses = "opacity-0 pointer-events-none scale-90 z-0";

            if (isLeftInactive) {
              stateClasses =
                "left-0 w-full lg:w-[38%] xl:w-[36%] bg-[#f1f3f5] text-[#23272e] shadow-sm opacity-100 z-10 cursor-pointer hover:bg-[#eaecee]";
            } else if (isRightActive) {
              stateClasses =
                "left-0 lg:left-[40%] xl:left-[38%] w-full lg:w-[60%] xl:w-[62%] bg-[#0057b7] text-white shadow-xl opacity-100 z-20 cursor-pointer";
            } else if (isUpcoming) {
              stateClasses =
                "left-[105%] w-full lg:w-[60%] xl:w-[62%] bg-[#0057b7] text-white opacity-0 pointer-events-none z-0";
            }

            return (
              <div
                key={card.id}
                onClick={() => {
                  if (isLeftInactive) handlePrev();
                  if (isRightActive) handleNext();
                }}
                className={`absolute top-0 h-full rounded-lg sm:rounded-xl p-2 sm:p-2 flex items-center transition-all duration-1200 ease-in-out ${stateClasses}`}
              >
                {/* Inner Image: Slow morph of container width & scale */}
                <div
                  className={`relative shrink-0 h-full overflow-hidden rounded-lg sm:rounded-xl pointer-events-none transition-all duration-1200 ease-in-out ${
                    isRightActive
                      ? "w-[52%] sm:w-[50%]"
                      : "w-[42%] sm:w-[40%]"
                  }`}
                >
                  <Image
                    src="/packaging/image1.jpg"
                    alt={card.title}
                    fill
                    priority={isRightActive || isLeftInactive}
                    className={`object-cover transition-transform duration-1200 ease-in-out ${
                      isRightActive ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>

                {/* Text Content: Slow color transitions */}
                <div className="ml-4 sm:ml-5 flex flex-col justify-start flex-1 pr-2 pointer-events-none h-full py-4 gap-3 sm:gap-4 overflow-hidden">
                  <h3
                    className={`font-bold transition-colors duration-1000 ease-in-out leading-snug tracking-tight ${
                      isRightActive
                        ? "text-white text-lg sm:text-xl xl:text-[23px]"
                        : "text-[#0057b7] text-fluid-24"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-fluid-16 leading-snug line-clamp-3 sm:line-clamp-4 transition-colors duration-1000 ease-in-out ${
                      isRightActive ? "text-white/90" : "text-[#666c75]"
                    }`}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Progress Indicator */}
        <div className="mt-8 sm:mt-12 flex items-center gap-4 max-w-full leading-none font-semibold text-[#8c94a0]">
          <span className="text-fluid-29">{cards[activeIndex].id}</span>
          <div className="relative flex-1 h-1 bg-[#e4e7eb] rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#0057b7] transition-all duration-1200 ease-in-out rounded-full"
              style={{
                width: `${((activeIndex + 1) / cards.length) * 100}%`,
              }}
            />
          </div>
          <span className="text-fluid-29">0{cards.length}</span>
        </div>
      </div>
    </Section>
  );
}