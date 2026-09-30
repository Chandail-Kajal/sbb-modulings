"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Section } from "../Section";

interface LocationItem {
  id: number;
  tagline: string;
  name: string;
  addressLines: string[];
  imageSrc: string;
  imageAlt: string;
}

const locations: LocationItem[] = [
  {
    id: 1,
    name: "UNIT 01",
    tagline: "Head Office",
    addressLines: [
      "Bawal — Sector 3",
      "Plot No. 8 & 9, Sector 3",
      "HSIIDC Growth Centre, Bawal",
      "Rewari, Haryana — 123501",
    ],
    imageSrc: "/advanced-infrastructure.png",
    imageAlt: "Head Office Unit 1 Injection Moulding Machinery",
  },
  {
    id: 2,
    name: "UNIT 02",
    tagline: "Sangwari Facility",
    addressLines: [
      "Sangwari — Bawal",
      "Godown No. 2, SB Felts, 84 KM Stone",
      "Sangwari–Jarthal Road, Bawal",
      "Rewari, Haryana — 123501",
    ],
    imageSrc: "/flexible-production.jpg",
    imageAlt: "Sangwari Unit 2 Manufacturing Facility",
  },
  {
    id: 3,
    name: "UNIT 03",
    tagline: "Sector-14 Facility",
    addressLines: [
      "Bawal — Sector 14",
      "Plot No. 58, Sector 14, HSIIDC",
      "Bawal, Rewari",
      "Haryana — 123501",
    ],
    imageSrc: "/integrated-capabilities.jpg",
    imageAlt: "Bawal Sector-14 Unit 3 Technology",
  },
];

export const CompanyLocations: React.FC = () => {
  // Pre-selected to Unit 1 to match the default blue outline in the design
  const [selectedId, setSelectedId] = useState<number>(1);

  return (
    <Section>
      <div className="section-container pt-8 pb-20">
        {/* Title */}
        <h2 className="text-[34px] sm:text-[40px] xl:text-[44px] font-extrabold text-[#2d2d2d] tracking-tight pb-14">
          Company location
        </h2>

        {/* 3-Column Large Screen Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-14">
          {locations.map((loc) => {
            const isSelected = selectedId === loc.id;

            return (
              <div
                key={loc.id}
                onClick={() => setSelectedId(loc.id)}
                className="group flex flex-col cursor-pointer select-none"
              >
                {/* Capsule Image Card */}
                <div
                  className="relative w-full aspect-[2.15/1] rounded-full overflow-hidden transition-all duration-300 ring-[3px] ring-transparent hover:ring-[#0057B8]"
                >
                  <Image
                    src={loc.imageSrc}
                    alt={loc.imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Content Block */}
                <div className="pt-6">
                  {/* Unit label (UNIT 01 / 02 / 03) */}
                  <p className="text-fluid-16 text-[#696666] font-normal leading-normal font-neue">
                    {loc.name}
                  </p>

                  {/* Title (Head Office / Sangwari Facility / Sector-14 Facility) */}
                  <h3 className="mt-1 text-fluid-16 text-[#696666] font-semibold tracking-tight leading-snug font-neue">
                    {loc.tagline}
                  </h3>

                  {/* Address */}
                  <div className="mt-2 space-y-0.5 text-sub text-[#696666]  leading-[1.45] tracking-tight font-ce">
                    {/* Blue highlighted location line */}
                    <p className="text-fluid-24 text-[#0b63c6] pb-1">
                      {loc.addressLines[0]}
                    </p>

                    {/* Remaining address lines */}
                    {loc.addressLines.slice(1).map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default CompanyLocations;