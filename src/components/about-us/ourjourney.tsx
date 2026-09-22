"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "../Section";

interface JourneyItem {
  yearPrefix: string;
  yearHighlight: string;
  label: string;
  title: string;
  description: string;
  imageSrc?: string;
}

const journeyData: JourneyItem[] = [
  {
    yearPrefix: "20",
    yearHighlight: "18",
    label: "Joint Venture",
    title: "SBB Mouldings Established",
    description:
      "The company was incorporated as a 50:50 joint venture between SB Felts and Panipat Texo Fabs Pvt. Ltd.",
    imageSrc: "",
  },
  {
    yearPrefix: "20",
    yearHighlight: "18",
    label: "Manufacturing Facility",
    title: "Initial Manufacturing Facility",
    description:
      "Set up an initial injection moulding facility to support manufacturing and assembly operations.",
    imageSrc: "",
  },
  {
    yearPrefix: "20",
    yearHighlight: "21",
    label: "Expansion",
    title: "Second Manufacturing Unit",
    description:
      "A second facility was commissioned to enhance production capabilities and storage space.",
    imageSrc: "",
  },
  {
    yearPrefix: "20",
    yearHighlight: "24",
    label: "Warehousing",
    title: "Third Facility Added",
    description:
      "Added infrastructure to support assembly, tool room capabilities, and finished goods warehousing.",
    imageSrc: "",
  },
  {
    yearPrefix: "To",
    yearHighlight: "day",
    label: "Ongoing Growth",
    title: " ",
    description:
      "Continuous investment in high-tonnage machinery, advanced infrastructure, and skilled engineering teams.",
    imageSrc: "",
  },
];

export function OurJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = journeyData[activeIndex];

  // Percentage position along the line for each of the 5 points
  const stepPositions = [20, 38, 55, 72, 90];
  const activePositionPercent = stepPositions[activeIndex];

  return (
    <Section className="w-full bg-[#f8f9fa] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col">
        
        {/* Section Header */}
        <div className="flex flex-col mb-14 lg:mb-16 font-neue">
          <p className="text-[18px] sm:text-[20px] font-normal text-[#6c757d] mb-1">
            Our Journey
          </p>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold leading-[1.12] tracking-tight ">
            <span className="text-[#212529] block">Growing Through</span>
            <span className="text-[#0052cc] block">Manufacturing Excellence</span>
          </h2>
        </div>

        {/* Slide Content: Left Image / Right Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 lg:mb-20 min-h-[220px]">
          {/* Card / Image */}
          <div className="md:col-span-4 flex items-center justify-start">
            <div className="w-full max-w-[340px] aspect-[16/10] bg-[#d9d9d9] rounded-md relative overflow-hidden shadow-sm">
              {activeItem.imageSrc && (
                <Image
                  src={activeItem.imageSrc}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-8 flex flex-col justify-center max-w-xl">
            <h3 className="text-[24px] sm:text-[28px] font-bold text-[#212529] tracking-tight font-ce">
              {activeItem.title}
            </h3>
            <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-[#6c757d]">
              {activeItem.description}
            </p>
          </div>
        </div>

        {/* Timeline Slider with Dots */}
        <div className="relative w-full pt-16 pb-4">
          
          {/* Active Year & Tag (Follows the active point) */}
          <div
            className="absolute top-0 -translate-x-1/2 flex flex-col items-center pointer-events-none transition-all duration-300 ease-out"
            style={{ left: `${activePositionPercent}%` }}
          >
            <div className="text-[34px] sm:text-[38px] font-bold tracking-tight leading-none text-[#212529]">
              {activeItem.yearPrefix}
              <span className="text-[#0052cc]">{activeItem.yearHighlight}</span>
            </div>
            <span className="text-[13px] sm:text-[14px] text-[#6c757d] font-normal mt-1 whitespace-nowrap">
              {activeItem.label}
            </span>
          </div>

          {/* Track Lines */}
          <div className="relative w-full flex items-center">
            {/* Inactive Track (Full Width) */}
            <div className="absolute left-0 right-0 h-[2px] bg-[#212529]" />

            {/* Active Track (Blue fill up to active dot) */}
            <div
              className="absolute left-0 h-[2.5px] bg-[#0052cc] transition-all duration-300 ease-out"
              style={{ width: `${activePositionPercent}%` }}
            />

            {/* Milestone Dots */}
            <div className="relative w-full flex items-center justify-between">
              {journeyData.map((item, index) => {
                const isSelected = activeIndex === index;
                const isPassed = activeIndex >= index;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to ${item.title}`}
                    className="relative z-10 flex items-center justify-center p-2 focus:outline-none transition-all"
                    style={{ left: `${stepPositions[index]}%`, position: "absolute", transform: "translateX(-50%)" }}
                  >
                    <span
                      className={`block rounded-full transition-all duration-200 ${
                        isSelected
                          ? "w-4 h-4 bg-white border-[3px] border-[#0052cc] ring-2 ring-[#0052cc]/20"
                          : isPassed
                          ? "w-3 h-3 bg-[#0052cc] border-[2px] border-white"
                          : "w-3 h-3 bg-white border-[2px] border-[#212529] hover:border-[#0052cc]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </Section>
  );
}