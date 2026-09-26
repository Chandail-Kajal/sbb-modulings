import Image from "next/image";
import { Section } from "../Section";

type QualityItem = {
  iconGray: string;
  iconBlue: string;
  iconAlt: string;
  description: string;
};

const items: QualityItem[] = [
  {
    iconGray: "/quality/quality-assurance-gray.svg",
    iconBlue: "/quality/quality-assurance-blue.svg",
    iconAlt: "Quality assurance icon",
    description:
      "In-process quality assurance and production inspection at every station",
  },
  {
    iconGray: "/quality/mrplabel-gray.svg",
    iconBlue: "/quality/mrplabel-blue.svg",
    iconAlt: "MRP labelling icon",
    description: "MRP labelling and barcode printing on all finished goods",
  },
  {
    iconGray: "/quality/products-gray.svg",
    iconBlue: "/quality/products-blue.svg",
    iconAlt: "Product traceability icon",
    description:
      "Full product traceability to international standards, from raw material to shipped part",
  },
  {
    iconGray: "/quality/vsa-gray.svg",
    iconBlue: "/quality/vsa-blue.svg",
    iconAlt: "VSA assessment icon",
    description:
      "Regular VSA (vendor/supplier) assessments and fire-risk assessments as part of our compliance program",
  },
];

export function Consistency() {
  return (
    <Section disablePaddingY>
      <div className="section-container">
        <p className="text-fluid-24 font-light text-neutral-500 tracking-tight mb-2 font-neue">
          Our quality process
        </p>
        <h2 className="text-fluid-40 font-bold tracking-tight text-[#212529] leading-none font-neue">
          Built for Consistency.
          <br />
          Designed for Confidence.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-0">
          {items.map((item, index) => (
            <div
              key={item.description}
              className={`group flex w-full h-full flex-col justify-start gap-6 cursor-pointer p-4 sm:p-5 lg:p-6 select-none transition-all duration-200 ${
                index !== 0 ? "lg:border-l lg:border-neutral-200" : ""
              }`}
            >
              <div className="relative h-18 w-18 sm:h-20 sm:w-20 lg:h-22 lg:w-22 shrink-0 transition-transform duration-200 ease-out group-hover:scale-105">
                <Image
                  src={item.iconGray}
                  alt={item.iconAlt}
                  width={96}
                  height={96}
                  className="h-full w-full object-contain transition-opacity duration-200 group-hover:opacity-0"
                />
                <Image
                  src={item.iconBlue}
                  alt={item.iconAlt}
                  width={96}
                  height={96}
                  className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
              </div>

              <p className="text-fluid-16 leading-snug text-[#495057] transition-colors duration-200 group-hover:text-[#000000] font-normal font-ce">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
