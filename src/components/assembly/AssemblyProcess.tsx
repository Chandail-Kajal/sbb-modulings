"use client";

import React from "react";
import { Section } from "../Section";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  position: "top" | "bottom";
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Component Preparation",
    description:
      "Injection-moulded components & required parts are prepared according to production requirements.",
    position: "bottom",
  },
  {
    number: "02",
    title: "Sub-Assembly",
    description:
      "Individual components are combined through dedicated sub-assembly stations.",
    position: "top",
  },
  {
    number: "03",
    title: "Main-Line Assembly",
    description:
      "Sub-assemblies and components are integrated through structured main-line assembly operations.",
    position: "bottom",
  },
  {
    number: "04",
    title: "Quality Inspection",
    description:
      "Finished assemblies are checked according to defined production and quality requirements.",
    position: "top",
  },
  {
    number: "05",
    title: "Packaging & Traceability",
    description:
      "Completed products can be box-packed with MRP labels, barcode printing, and complete traceability.",
    position: "bottom",
  },
];

export default function AssemblyProcessSection() {
  return (
    <div className="relavtive pb-(--section-y) flex flex-col gap-16">
      <Section className="overflow-x-visible w-full " disablePaddingY>
        <div className="section-container">
          <div className="">
            <p className="text-fluid-16 font-medium text-slate-500 mb-1">
              Assembly Process
            </p>
            <h2 className="text-fluid-40 font-extrabold text-[#1e293b] leading-none ">
              From Components to
            </h2>
            <h2 className="text-fluid-40 font-extrabold text-[#0055b8] leading-none">
              Finished Products
            </h2>
          </div>
        </div>
        <div className="lg:hidden ">
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
      </Section>
      <div className="hidden lg:block relative">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-2 bg-[#334155] z-0 pointer-events-none" />
        <div className="relative  px-12 xl:px-20 h-90 flex items-center justify-between z-10 max-w-(--container-content) lg:mx-4">
          {steps.map((step, index) => {
            const isTop = step.position === "top";
            return (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center flex-1"
              >
                <div
                  className={`absolute w-0.75 bg-[#0055b8] z-10 ${
                    isTop ? "bottom-1/2 h-19" : "top-1/2 h-19"
                  }`}
                />

                <div className="relative z-20 w-6 h-6 rounded-full bg-[#0055b8] border-[3.5px] border-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]" />

                <div
                  className={`absolute overflow-visible left-1/2 -translate-x-10 z-30 flex items-center bg-[#0055b8] h-26 p-2 rounded-full shadow-[0_5px_0_0_#cbd5e1,0_20px_25px_-5px_rgba(0,0,0,0.1)] shadow-blue-950 transition-transform duration-300 hover:scale-105 ${
                    isTop ? "bottom-[calc(50%+72px)]" : "top-[calc(50%+72px)]"
                  }`}
                >
                  <div className="w-full flex flex-row relative h-full">
                    <div className="w-85">
                      <div className="shrink-0 aspect-square h-full rounded-full border-6 border-white flex items-center justify-center text-white font-extrabold text-fluid-32 shadow-inner">
                        {step.number}
                      </div>
                    </div>
                    <div className="h-2 bg-white w-20 fixed top-1/2 -mt-0.5 left-23"/>
                    <div
                      className={
                        "absolute left-26 w-70 bg-white h-22 rounded-full flex flex-col justify-center text-left shadow-[0_1px_0_4px_rgba(0,0,0,0.06)]"
                      }
                    >
                      <div className="px-6 flex-col flex">
                        <h4 className="text-fluid-16 font-bold text-[#0055b8] leading-none">
                          {step.title}
                        </h4>
                        <p className="text-xs text-[#475569] leading-[1.28] font-normal line-clamp-3">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
