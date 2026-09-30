/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useState } from "react";
import {
  RiBuilding2Fill,
  RiCustomerService2Fill,
  RiSettings3Fill,
  RiGlobalFill,
  RiTeamFill,
  RiToolsFill,
} from "react-icons/ri";
import { Section } from "../Section";

interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const whyUsItems: WhyUsItem[] = [
  {
    id: "assembly",
    title: "Dedicated Assembly Infrastructure",
    description: "Structured main-line and sub-assembly stations for complex products.",
    Icon: RiToolsFill,
  },
  {
    id: "production",
    title: "High-Volume Production",
    description: "Scalable machinery and automated systems to support large batch manufacturing and quick turnarounds.",
    Icon: RiSettings3Fill,
  },
  {
    id: "experience",
    title: "Multi-Industry Experience",
    description: "Serving diverse sectors including HVAC, automotive, consumer appliances, and industrial components.",
    Icon: RiGlobalFill,
  },
  {
    id: "integrated",
    title: "Integrated Manufacturing",
    description: "End-to-end capabilities under one roof from raw material compounding to final packaging and testing.",
    Icon: RiBuilding2Fill,
  },
  {
    id: "team",
    title: "Experienced Team",
    description: "45+ dedicated operations and engineering specialists overseeing process quality and continuous improvement.",
    Icon: RiTeamFill,
  },
  {
    id: "support",
    title: "End-to-End Support",
    description: "Comprehensive lifecycle backing including tooling maintenance, engineering changes, and full traceability.",
    Icon: RiCustomerService2Fill,
  },
];

const CYCLE_MS = 3500;

export function WhyUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Auto-advance the highlighted card; hover / focus / tap takes over.
  useEffect(() => {
    if (paused || reduceMotion) return;
    const t = setTimeout(
      () => setActiveIndex((i) => (i + 1) % whyUsItems.length),
      CYCLE_MS,
    );
    return () => clearTimeout(t);
  }, [activeIndex, paused, reduceMotion]);

  return (
    <div>
      <style>{`
        @keyframes whyus-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>

      <Section className="bg-primary-light/10 py-12" disablePaddingY>
        <div className="section-container flex flex-col items-center">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-fluid-24 font-neue uppercase text-[#3B3B3B] font-semibold mb-2">
              CHOOSE US
            </p>
            <h2 className="text-fluid-40 font-neue font-bold leading-none text-[#1e293b]">
              Why <span className="text-[#0055b8]">SBB Moldings?</span>
            </h2>
          </div>

          {/* Six small cards */}
          <div
            className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
            onMouseLeave={() => setPaused(false)}
          >
            {whyUsItems.map((item, i) => (
              <WhyUsCard
                key={item.id}
                item={item}
                isActive={i === activeIndex}
                paused={paused}
                onActivate={() => setActiveIndex(i)}
                onPause={() => setPaused(true)}
                onResume={() => setPaused(false)}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

interface CardProps {
  item: WhyUsItem;
  isActive: boolean;
  paused: boolean;
  onActivate: () => void;
  onPause: () => void;
  onResume: () => void;
}

const WhyUsCard = ({ item, isActive, paused, onActivate, onPause, onResume }: CardProps) => {
  const { title, description, Icon } = item;

  return (
    <div
      tabIndex={0}
      role="button"
      aria-pressed={isActive}
      onMouseEnter={() => {
        onPause();
        onActivate();
      }}
      onFocus={() => {
        onPause();
        onActivate();
      }}
      onBlur={onResume}
      onClick={onActivate}
      className={`relative flex min-h-[190px] cursor-pointer select-none flex-col gap-3 overflow-hidden rounded-2xl border p-5 text-left transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0055b8] focus-visible:ring-offset-2 ${
        isActive
          ? "-translate-y-1 border-transparent bg-[#0055b8] text-white shadow-[0_12px_28px_rgba(0,85,184,0.3)]"
          : "border-slate-200/90 bg-white text-[#1e293b] shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
      }`}
    >
      {/* Background image: visible on idle cards, fades on the active one */}
      <div
        className={`pointer-events-none absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
          isActive ? "opacity-0" : "opacity-25"
        }`}
        style={{ backgroundImage: "url('/assembly/faqbg.jpg')" }}
      />

      {/* Icon badge */}
      <div
        className={`relative z-10 flex size-11 items-center justify-center rounded-xl transition-colors duration-500 ${
          isActive ? "bg-white/15 text-white" : "bg-[#0055b8]/10 text-[#0055b8]"
        }`}
      >
        <Icon className="size-6" />
      </div>

      <div className="relative z-10 flex flex-col gap-1.5">
        <h3 className="text-fluid-16 font-neue font-bold leading-snug tracking-tight">
          {title}
        </h3>
        <p
          className={`text-sm font-neue leading-relaxed transition-colors duration-500 ${
            isActive ? "text-blue-100" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Timer bar: shows how long until the next card takes over */}
      {isActive && (
        <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20">
          <div
            key={`${item.id}-${paused}`}
            className="h-full origin-left bg-white motion-reduce:hidden"
            style={{
              animation: paused ? "none" : `whyus-progress ${CYCLE_MS}ms linear forwards`,
              transform: paused ? "scaleX(1)" : undefined,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default WhyUs;