"use client";

import React, { useState } from "react";
import { Section } from "../Section";



interface AccordionItem {
  id: string;
  title: string;
  description: string;
}



const whyUsItems: AccordionItem[] = [
  {
    id: "assembly",
    title: "Dedicated Assembly Infrastructure",
    description: "Structured main-line and sub-assembly stations for complex products.",
  },
  {
    id: "production",
    title: "High-Volume Production",
    description: "Scalable machinery and automated systems to support large batch manufacturing and quick turnarounds.",
  },
  {
    id: "experience",
    title: "Multi-Industry Experience",
    description: "Serving diverse sectors including HVAC, automotive, consumer appliances, and industrial components.",
  },
  {
    id: "integrated",
    title: "Integrated Manufacturing",
    description: "End-to-end capabilities under one roof from raw material compounding to final packaging and testing.",
  },
  {
    id: "team",
    title: "Experienced Team",
    description: "45+ dedicated operations and engineering specialists overseeing process quality and continuous improvement.",
  },
  {
    id: "support",
    title: "End-to-End Support",
    description: "Comprehensive lifecycle backing including tooling maintenance, engineering changes, and full traceability.",
  },
];

const MetricBlock = ({
  title,
  subtitle,
}: {
  title: string | null;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4 py-6 md:py-4 min-h-[90px]">
      {title ? (
        <>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1e293b] leading-none">
            {title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-normal leading-snug">
            {subtitle}
          </p>
        </>
      ) : (
        <p className="text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed max-w-[200px]">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export function WhyUs() {
  // Start with no card selected by default so all cards are white initially
  const [openId, setOpenId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <div className="w-full py-16 lg:py-24 bg-[#f0f6ff]/40 overflow-hidden">
        <div className="section-container flex flex-col items-center">
          
          {/* Top Metrics Grid */}


          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-fluid-16 uppercase  text-slate-500 font-semibold mb-2">
              CHOOSE US
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1e293b]">
              Why <span className="text-[#0055b8]">SBB Moldings?</span>
            </h2>
          </div>

          {/* Accordion List Cards */}
          <div className="w-full max-w-4xl flex flex-col gap-3.5">
            {whyUsItems.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(item.id)}
                  className={`group relative w-full rounded-2xl p-5 sm:p-6 cursor-pointer transition-all duration-300 select-none border ${
                    isOpen
                      ? "bg-[#0055b8] text-white border-transparent shadow-[0_10px_25px_rgba(0,85,184,0.3)]"
                      : "bg-[#ffffff] text-[#1e293b] border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:bg-[#0055b8] hover:text-white hover:border-transparent hover:shadow-[0_8px_20px_rgba(0,85,184,0.25)] hover:-translate-y-0.5"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    {/* Title & Description Container */}
                    <div className="flex flex-col text-left pr-4">
                      <h3
                        className={`text-base sm:text-lg lg:text-xl font-medium tracking-tight leading-snug transition-colors duration-200 ${
                          isOpen ? "text-white" : "text-[#1e293b] group-hover:text-white"
                        }`}
                      >
                        {item.title}
                      </h3>

                      {/* Expandable description */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "max-h-24 opacity-100 mt-2.5"
                            : "max-h-0 opacity-0 mt-0 group-hover:max-h-24 group-hover:opacity-90 group-hover:mt-2.5"
                        }`}
                      >
                        <p
                          className={`text-xs sm:text-sm leading-relaxed transition-colors duration-200 ${
                            isOpen
                              ? "text-blue-100"
                              : "text-slate-500 group-hover:text-blue-100"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Pill Arrow Button */}
                    <div
                      className={`shrink-0 w-12 h-6 sm:w-14 sm:h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? "border-white/80 bg-transparent text-white"
                          : "border-transparent bg-[#334155] text-white group-hover:bg-transparent group-hover:border-white/80"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}

export default WhyUs;