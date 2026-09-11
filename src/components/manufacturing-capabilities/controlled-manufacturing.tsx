"use client";

import { Section } from "../Section";
import Image from "next/image";

export function ControlledManufacturing() {
  const packagingFeatures = [
    "Quality assurance",
    "Production inspection",
    "MRP labelling",
    "Barcode printing",
    "Product traceability",
    "VSA assessment",
    "Fire risk assessment",
  ];

  return (
    <Section>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 section-container ">
        <div className="flex flex-col w-full lg:max-w-[40%] font-sans text-neutral-800">
          <div className="flex flex-col  font-neue">
            <p className="text-fluid-24 font-light text-neutral-500 leading-snug">
              Quality & Traceability
            </p>
            <h2 className="text-fluid-40 font-bold leading-none  text-neutral-900">
              <span className="text-[#0052cc]">Controlled Manufacturing</span>{" "}
              <br />
              <span>at Every Stage.</span>
            </h2>
          </div>
          <div className="mt-8 flex flex-col gap-6 text-fluid-16 leading-snug text-neutral-600">
            <p className="font-normal leading-snug text-fluid-16 text-neutral-500 font-ce">
              Quality is integrated into our manufacturing operations through
              inspection, assessment, production controls, and traceability
              practices.
            </p>
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-neutral-900 text-fluid-24 leading-relaxed font-ce">
                Our capabilities include:
              </h3>
              <ul className="space-y-1.5 text-neutral-500 text-fluid-16 leading-snug font-ce">
                {packagingFeatures.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-neutral-400 text-base leading-none">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full lg:max-w-[48%] overflow-hidden rounded-3xl sm:rounded-[2.5rem] shadow-sm">
          <Image
            height={1080}
            width={1920}
            src="/injection-moulding/milling-machine.jpg"
            className="w-full h-auto max-h-115 object-cover"
            alt="Packaging & Traceability machinery"
            priority
          />
        </div>
      </div>
    </Section>
  );
}

export default ControlledManufacturing;
