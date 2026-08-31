"use client"

import React from "react"

interface ProcessStep {
  number: string
  title: string
  description: string
  position: "top" | "bottom"
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Component Preparation",
    description: "Injection-moulded components & required parts are prepared according to production requirements.",
    position: "bottom",
  },
  {
    number: "02",
    title: "Sub-Assembly",
    description: "Individual components are combined through dedicated sub-assembly stations.",
    position: "top",
  },
  {
    number: "03",
    title: "Main-Line Assembly",
    description: "Sub-assemblies and components are integrated through structured main-line assembly operations.",
    position: "bottom",
  },
  {
    number: "04",
    title: "Quality Inspection",
    description: "Finished assemblies are checked according to defined production and quality requirements.",
    position: "top",
  },
  {
    number: "05",
    title: "Packaging & Traceability",
    description: "Completed products can be box-packed with MRP labels, barcode printing, and complete traceability.",
    position: "bottom",
  },
]

export default function AssemblyProcessSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 select-none overflow-hidden">
      {/* 1. Header with section-container */}
      <div className="section-container mb-12 lg:mb-16">
        <p className="text-base lg:text-lg font-medium text-slate-500 mb-1">
          Assembly Process
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e293b] leading-[1.15] tracking-tight">
          From Components to
        </h2>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0055b8] leading-[1.15] tracking-tight">
          Finished Products
        </h2>
      </div>

      {/* 2. Desktop Timeline Diagram (Symmetrical Start & End) */}
      <div className="hidden lg:block relative w-full my-8">
        {/* Full-width continuous center horizontal line */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] bg-[#334155] z-0 pointer-events-none" />

        {/* 5-Step Grid Container */}
        <div className="relative max-w-[1380px] mx-auto px-12 xl:px-20 h-[340px] flex items-center justify-between z-10">
          {steps.map((step, index) => {
            const isTop = step.position === "top"

            return (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center flex-1"
              >
                {/* Connecting Blue Vertical Line (Aligned to Node and Badge Center) */}
                <div
                  className={`absolute w-[3px] bg-[#0055b8] z-10 ${
                    isTop ? "bottom-1/2 h-[72px]" : "top-1/2 h-[72px]"
                  }`}
                />

                {/* Center Node Dot on Timeline */}
                <div className="relative z-20 w-6 h-6 rounded-full bg-[#0055b8] border-[3.5px] border-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]" />

                {/* Main Blue Outer Capsule Card */}
                <div
                  className={`absolute left-1/2 -translate-x-[40px] z-30 flex items-center bg-[#0055b8] w-[275px] xl:w-[295px] h-[78px] p-1.5 rounded-full shadow-[0_12px_28px_rgba(0,40,100,0.2)] transition-transform duration-300 hover:scale-105 ${
                    isTop ? "bottom-[calc(50%+72px)]" : "top-[calc(50%+72px)]"
                  }`}
                >
                  {/* Left Circle Number Badge */}
                  <div className="shrink-0 w-[54px] h-[54px] rounded-full border-[3px] border-white flex items-center justify-center text-white font-extrabold text-[22px] tracking-tight ml-1 shadow-inner">
                    {step.number}
                  </div>

                  {/* Overlay White Inset Card Holding Text */}
                  <div className="flex-1 ml-2.5 bg-white h-full rounded-r-full rounded-l-[14px] px-3.5 py-2 flex flex-col justify-center text-left shadow-[0_2px_6px_rgba(0,0,0,0.06)]">
                    <h4 className="text-[13px] font-bold text-[#0055b8] leading-tight mb-0.5">
                      {step.title}
                    </h4>
                    <p className="text-[10px] text-[#475569] leading-[1.28] font-normal line-clamp-3">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 3. Responsive Mobile / Tablet Flow */}
      <div className="lg:hidden section-container">
        <div className="relative pl-6 border-l-2 border-[#0055b8] ml-4 space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Node Indicator */}
              <div className="absolute -left-[31px] top-6 w-[18px] h-[18px] rounded-full bg-[#0055b8] border-[3px] border-white shadow-md" />

              {/* Mobile Card (Whole Blue BG with Inset White Text Card) */}
              <div className="flex items-center bg-[#0055b8] p-1.5 rounded-[26px] shadow-[0_8px_20px_rgba(0,40,100,0.15)] max-w-md min-h-[78px]">
                <div className="shrink-0 w-[50px] h-[50px] rounded-full border-[2.5px] border-white flex items-center justify-center text-white font-bold text-lg ml-1">
                  {step.number}
                </div>
                <div className="flex-1 ml-2.5 bg-white rounded-r-[22px] rounded-l-[12px] p-3 flex flex-col justify-center text-left">
                  <h4 className="text-[13px] font-bold text-[#0055b8] leading-tight mb-1">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-[#475569] leading-tight">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}