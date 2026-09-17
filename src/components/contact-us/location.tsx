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
    tagline: "Head Office / Unit 1",
    name: "SBB Mouldings Pvt Ltd",
    addressLines: [
      "Plot No. 08 & 09, Sector-3",
      "HSIIDC Growth Centre, Bawal",
      "Distt. Rewari, Haryana – 123501, India",
    ],
    imageSrc: "/advanced-infrastructure.png",
    imageAlt: "Head Office Unit 1 Injection Moulding Machinery",
  },
  {
    id: 2,
    tagline: "Sangwari / Unit 2",
    name: "Godown No. 2, SB Felts",
    addressLines: [
      "Jarthal Road, Sangwari",
      "P.O. Ladhuwas Gurjar, Bawal",
      "Distt. Rewari, Haryana – 123501",
    ],
    imageSrc: "/flexible-production.jpg",
    imageAlt: "Sangwari Unit 2 Manufacturing Facility",
  },
  {
    id: 3,
    tagline: "Bawal Sector-14 / Unit 3",
    name: "Plot No. 58",
    addressLines: [
      "Sector-14",
      "HSIIDC Growth Centre, Bawal",
      "Distt. Rewari, Haryana – 123501",
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
                  {/* Tagline */}
                  <p className="text-title-sm sm:text-title-sm text-[#4b5563] font-normal tracking-normal leading-normal font-neue">
                    {loc.tagline}
                  </p>

                  {/* Company / Facility Name */}
                  <h3 className="text-[28px] sm:text-[28px] font-semibold text-[#0b63c6] tracking-tight leading-snug mt-1 font-neue">
                    {loc.name}
                  </h3>

                  {/* Address */}
                  <div className="mt-7 space-y-0.5 text-sub sm:text-sub text-[#4D4D4D] font-normal leading-[1.45] tracking-tight font-ce">
                    {loc.addressLines.map((line, idx) => (
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