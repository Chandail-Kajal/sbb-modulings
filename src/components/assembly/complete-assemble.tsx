"use client";

import { Section } from "../Section";
import Image from "next/image";
import React from "react";

export function CompleteAssemble(): React.JSX.Element {
  return (
    <Section disablePaddingY>
      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 section-container font-neue">
        {/* Left Side: Image */}
        <div className="w-full lg:w-[42%] overflow-hidden rounded-3xl shadow-md min-h-[420px] relative">
          <Image
            src="/assembly/medium-shortman.jpg"
            alt="Assembly process"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side: Blue Information Card */}
        <div className="w-full lg:w-[58%] rounded-3xl bg-[#0057B8] p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-between shadow-md">
          <div>
            {/* Sub-header */}
            <p className="text-fluid-24  font-neue text-white/80 tracking-wide mb-1">
              Integrated Assembly Solutions
            </p>

            {/* Main Heading */}
            <h2 className="text-fluid-32 font-bold  font-neue leading-none tracking-tight mb-5">
              From Components to Complete Assemblies
            </h2>

            {/* Description Text */}
            <div className="space-y-3 text-fluid-16 font-normal font-ce text-white/90 leading-snug max-w-xl">
              <p>
                Our assembly capabilities bring together plastics moulded parts, integrated electronics, and precision hardware
                into finished products ready for supply into client assembly operations.
              </p>
              <p>
                We have executed end-to-end multi-line assembly processes for projects from the electrical appliance and auto
                sectors, supported by testing, validation, and automated production infrastructure.
              </p>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="mt-8 pt-2">
            <h3 className="text-fluid-24 font-semibold font-neue text-white mb-4">
              Key Highlights
            </h3>

            {/* 2x2 Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
              {/* Highlight 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-300/80 shrink-0 font-ce" />
                <div>
                  <h4 className="text-fluid-24 font-bold leading-snug">150 Parts</h4>
                  <p className="text-fluid-16 text-white/80 mt-0.5">
                    Component count in complex HVAC systems
                  </p>
                </div>
              </div>

              {/* Highlight 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-300/80 shrink-0" />
                <div>
                  <h4 className="text-fluid-24 font-bold leading-snug">17 Main Line Stations</h4>
                  <p className="text-fluid-16 sm:text-xs text-white/80 mt-0.5">
                    Central assembly line stations deployed
                  </p>
                </div>
              </div>

              {/* Highlight 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-300/80 shrink-0" />
                <div>
                  <h4 className="text-fluid-24 font-bold leading-snug">13 Sub-Assembly Stations</h4>
                  <p className="text-fluid-16 text-white/80 mt-0.5">
                    Supporting module preparation lines
                  </p>
                </div>
              </div>

              {/* Highlight 4 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-300/80 shrink-0" />
                <div>
                  <h4 className="text-fluid-24 font-bold leading-snug">62 Line Manpower</h4>
                  <p className="text-fluid-16 text-white/80 mt-0.5">
                    Dedicated operators allocated per production shift
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}