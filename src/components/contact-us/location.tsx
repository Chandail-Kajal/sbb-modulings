import React from "react";
import Image from "next/image";

interface LocationItem {
  id: number;
  tagline: string;
  name: string;
  addressLines: string[];
  imageSrc: string;
  imageAlt: string;
  hasBorder?: boolean;
}

const locations: LocationItem[] = [
  {
    id: 1,
    tagline: "Head Office / Unit 1",
    name: "SBB Mouldings Pvt Ltd",
    addressLines: [
      "Plot No. 08 & 09, Sector-3",
      "HSIIDC Growth Centre, Bawal",
      "Distt. Rewari, Haryana - 123501, India",
    ],
    imageSrc: "/advanced-infrastructure.png",
    imageAlt: "Head Office Unit 1 Injection Moulding Machinery",
    hasBorder: true, // blue border ring around the first card image
  },
  {
    id: 2,
    tagline: "Sangwari / Unit 2",
    name: "Godown No. 2, SB Felts",
    addressLines: [
      "Jarthal Road, Sangwari",
      "P.O. Ladhuwas Gurjar, Bawal",
      "Distt. Rewari, Haryana - 123501",
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
      "Distt. Rewari, Haryana - 123501",
    ],
    imageSrc: "/integrated-capabilities.jpg",
    imageAlt: "Bawal Sector-14 Unit 3 Technology",
  },
];

export const CompanyLocations: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Heading */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-800">
            Company location
          </h2>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {locations.map((loc) => (
            <div key={loc.id} className="flex flex-col space-y-5">
              {/* Capsule / Pill Shaped Image Frame */}
              <div
                className={`relative w-full aspect-[2.1/1] rounded-full overflow-hidden shadow-sm ${
                  loc.hasBorder ? "ring-2 ring-[#0060df]" : ""
                }`}
              >
                <Image
                  src={loc.imageSrc}
                  alt={loc.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Text Info */}
              <div className="space-y-1">
                {/* Subtitle / Unit Label */}
                <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                  {loc.tagline}
                </p>

                {/* Location Name */}
                <h3 className="text-base sm:text-lg font-bold text-[#0060df] tracking-tight">
                  {loc.name}
                </h3>

                {/* Address Lines */}
                <div className="pt-2 text-[11px] sm:text-xs text-neutral-600 leading-snug space-y-0.5 font-normal">
                  {loc.addressLines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLocations;