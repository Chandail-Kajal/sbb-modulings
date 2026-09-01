"use client";

import { Section } from "../Section";
import Image from "next/image";
import React from "react";

export function Packaging() {
  const packagingFeatures = [
    "MRP labelling",
    "Barcode printing",
    "Product traceability",
    "Finished-goods handling",
    "Customer-specific packaging requirements",
  ];

  return (
    <Section>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 section-container ">
        {/* Left Side: Text Content */}
        <div className="flex flex-col w-full lg:max-w-[48%] font-sans text-neutral-800">
          {/* Header */}
          <div className="flex flex-col  font-neue">
            <p className="text-fluid-24 font-light text-neutral-500 leading-relaxed">
              Packaging & Traceability
            </p>
            <h2 className="text-fluid-40 font-bold  text-neutral-900">
              Ready-to-<span className="text-[#0052cc]">Dispatch.</span> <br />
              Fully <span className="text-[#0052cc]">Traceable.</span>
            </h2>
          </div>

          {/* Body & List */}
          <div className="mt-8 flex flex-col gap-6 text-fluid-16 leading-snug text-neutral-600">
            <p className="font-normal leading-relaxed text-neutral-500 font-ce">
              Our assembly capabilities extend through final product preparation and packaging.
            </p>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-neutral-900 text-fluid-24 leading-relaxed font-ce">
                We can supply complete box-packed units with:
              </h3>
              
              {/* Bullet List matching image */}
              <ul className="space-y-1.5 text-neutral-500 text-fluid-16 leading-snug font-ce">
                {packagingFeatures.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-neutral-400 text-base leading-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Image with matching smooth rounded corners */}
        <div className="w-full lg:max-w-[48%] overflow-hidden rounded-3xl sm:rounded-[2.5rem] shadow-sm">
          <Image
            height={1080}
            width={1920}
            src="/injection-moulding/milling-machine.jpg"
            className="w-full h-auto max-h-[460px] object-cover"
            alt="Packaging & Traceability machinery"
            priority
          />
        </div>
      </div>
    </Section>
  );
}

export default Packaging;