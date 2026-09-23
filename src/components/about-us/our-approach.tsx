"use client";
import React, { useState } from "react";
import { Section } from "../Section";
import Image from "next/image";

interface StepItem {
  id: string;
  title: string;
  desc: string;
  defaultActive?: boolean;
  desktopPos: string;
}

const steps: StepItem[] = [
  {
    id: "01",
    title: "Understanding",
    desc: "We understand the component, application, and production requirement.",
    defaultActive: true,
    desktopPos: "lg:left-[8%] lg:top-[53%] xl:left-[8.5%] xl:top-[54%]",
  },
  {
    id: "02",
    title: "Engineering",
    desc: "We evaluate the appropriate manufacturing and machine capability.",
    desktopPos: "lg:left-[27.5%] lg:top-[33%] xl:left-[28%] xl:top-[33.5%]",
  },
  {
    id: "03",
    title: "Manufacturing",
    desc: "We use our injection moulding and production infrastructure to manufacture the required components.",
    desktopPos: "lg:left-[47%] lg:top-[12%] xl:left-[47.5%] xl:top-[12.5%]",
  },
  {
    id: "04",
    title: "Assembly",
    desc: "Where required, components can move into dedicated assembly operations.",
    desktopPos: "lg:left-[47.5%] lg:top-[54%] xl:left-[48%] xl:top-[54.5%]",
  },
  {
    id: "05",
    title: "Packaging & Traceability",
    desc: "Finished products can be packaged, labelled, and managed according to applicable customer requirements.",
    desktopPos: "lg:left-[67%] lg:top-[33%] xl:left-[67.5%] xl:top-[33.5%]",
  },
];

function HexagonCard({
  title,
  desc,
  isActive,
  isHovered,
  imageUrl = "/about-us/hexagon-bg.jpg", // 1. Added a prop for your background image URL
}: {
  title: string;
  desc: string;
  isActive?: boolean;
  isHovered?: boolean;
  imageUrl?: string;
}) {
  const isDark = isActive || isHovered;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 320 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full overflow-hidden h-full transition-all duration-300 ${
          isDark
            ? "drop-shadow-[0_16px_28px_rgba(0,87,183,0.28)]"
            : "drop-shadow-[0_10px_20px_rgba(184,210,238,0.35)]"
        }`}
      >
        <defs>
          {/* 2. Create a pattern that scales to fill the shape */}
          <pattern
            id="hex-bg-image"
            patternUnits="userSpaceOnUse"
            width="320"
            height="280"
          >
            <image
              href={imageUrl}
              width="320"
              height="280"
              preserveAspectRatio="xMidYMid slice"
              className="object-cover"
            />

            <rect width="320" height="280" fill="black" fillOpacity="0.04" />
          </pattern>

          <linearGradient id="sheenBand" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="
            M 100 20
            L 220 20
            Q 236 20, 244 32
            L 298 126
            Q 304 140, 298 154
            L 244 248
            Q 236 260, 220 260
            L 100 260
            Q 84 260, 76 248
            L 22 154
            Q 16 140, 22 126
            L 76 32
            Q 84 20, 100 20
            Z
          "
          fill="url(#hex-bg-image)"
          stroke={isDark ? "#0057b7" : "#b8d2ee"}
          strokeWidth={10}
          strokeLinejoin="round"
          strokeLinecap="round"
          className="transition-colors duration-300"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10 xl:px-12 select-none pointer-events-none">
        <h3 className="font-bold leading-snug tracking-tight text-fluid-24 text-[#0057B8] max-w-50 drop-shadow-md">
          {title}
        </h3>
        <p className="mt-2 text-fluid-16 text-[#4D4D4D] leading-relaxed max-w-52.5 drop-shadow-sm">
          {desc}
        </p>
      </div>
    </div>
  );
}

export function OurApproach() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <Section className="relative overflow-hidden bg-white py-16">
      <div className="relative section-container">
        <div className="relative hidden lg:block w-full h-190 xl:h-210 2xl:h-225">
          <div className="absolute left-0 top-[12%] z-10 select-none">
            <span className="block text-2xl font-light text-[#7a7a7a] tracking-tight">
              Our Approach
            </span>
            <h2 className="mt-1 text-4xl xl:text-5xl font-extrabold text-[#22252a] leading-tight tracking-[-0.03em]">
              Understand. Engineer.
              <br />
              Manufacture. Deliver.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#737373] max-w-sm">
              We believe effective manufacturing starts with understanding the
              requirement.
            </p>
          </div>

          {steps.map((step) => {
            const isHovered = hoveredId === step.id;
            return (
              <div
                key={step.id}
                onMouseEnter={() => setHoveredId(step.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group absolute w-74 xl:w-78 2xl:w-85 aspect-320/280 transition-transform duration-300 hover:scale-[1.03] z-20 cursor-pointer ${step.desktopPos}`}
              >
                <HexagonCard
                  title={step.title}
                  desc={step.desc}
                  isActive={step.defaultActive}
                  isHovered={isHovered}
                />
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="block lg:hidden">
          <div className="max-w-xl text-left mb-10">
            <span className="text-xl sm:text-2xl font-light text-[#7a7a7a]">
              Our Approach
            </span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#22252a] leading-tight tracking-tight">
              Understand. Engineer.
              <br />
              Manufacture. Deliver.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#737373] max-w-sm">
              We believe effective manufacturing starts with understanding the
              requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-x-4 justify-items-center">
            {steps.map((step) => (
              <div
                key={step.id}
                onMouseEnter={() => setHoveredId(step.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative w-[290px] sm:w-[310px] aspect-[320/280] transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <HexagonCard
                  title={step.title}
                  desc={step.desc}
                  isActive={step.defaultActive}
                  isHovered={hoveredId === step.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
