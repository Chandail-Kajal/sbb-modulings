"use client";

import { Section } from "../Section";
import Image from "next/image";
import React from "react";

export function IntegratedProduction() {
  return (
    <Section disablePaddingY>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 section-container ">
        {/* Left Side: Text Content */}
        <div className="flex flex-col w-full lg:max-w-[40%] font-sans text-neutral-800">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <p className="text-xl sm:text-2xl font-light text-neutral-500 tracking-tight">
              Finished Assembly
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
              Integrated Production <br />
              Beyond <span className="text-[#0052cc]">Injection Moulding</span>
            </h2>
          </div>

          {/* Paragraphs */}
          <div className="mt-8 flex flex-col gap-5 text-sm sm:text-base text-neutral-500 font-normal leading-relaxed">
            <p>
              Our injection moulding operations work alongside dedicated assembly
              capabilities to support complete product requirements.
            </p>
            <p>
              SBB Mouldings has executed complex AC assembly programs involving
              150 parts, 17 main-line stations, and 13 sub-assembly stations,
              taking projects from drawing stage through mass production.
            </p>
            <p>
              Our assembly capabilities include cassette AC and automotive
              applications, with production capacity tailored to individual
              programs.
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:max-w-[45%] overflow-hidden rounded-[2.5rem] shadow-2xl">
          <Image
            height={1080}
            width={1920}
            src="/injection-moulding/milling-machine.jpg"
            className="w-full lg:h-110 object-cover"
            alt="Injection moulding assembly line machinery"
            priority
          />
        </div>
      </div>
    </Section>
  );
}