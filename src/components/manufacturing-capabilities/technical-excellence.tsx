import Image from "next/image";
import { Section } from "../Section";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageOnRight: boolean;
}

const features: FeatureItem[] = [
  {
    id: "capacity",
    title: "Capacity",
    description:
      "High-tonnage injection moulding equipment for large and complex components.",
    imageSrc: "/manufacturing-capabilities/capacity.jpg",
    imageAlt: "Digital gauge and analytics interface",
    imageOnRight: true,
  },
  {
    id: "flexibility",
    title: "Flexibility",
    description:
      "A broad equipment range supporting different component sizes and production requirements.",
    imageSrc: "/manufacturing-capabilities/flexibility.jpg",
    imageAlt: "Team working on laptop and reviewing schematics",
    imageOnRight: false,
  },
  {
    id: "integration",
    title: "Integration",
    description:
      "Injection moulding, assembly, packaging, and traceability capabilities within an integrated manufacturing environment.",
    imageSrc: "/manufacturing-capabilities/integration.jpg",
    imageAlt: "Interlocking glowing puzzle pieces on circuit board",
    imageOnRight: true,
  },
];

export default function TechnicalExcellence() {
  return (
    <Section className="relative overflow-hidden py-16" disablePaddingY>
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/map-bg.jpg"
          alt="Abstract background pattern"
          fill
          className="object-cover h-full opacity-75"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-white/70 via-white/80 to-white/95" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-14 sm:mb-20 max-w-2xl text-left">
          <h2 className="text-fluid-40 font-bold leading-relaxed text-slate-800">
            <span className="text-[#0e5c9e]">Technical Excellence</span> in
            Production
          </h2>
          <p className="mt-4 text-fluid-24 leading-none font-normal text-slate-500">
            Our manufacturing infrastructure is built around three core
            principles:
          </p>
        </div>

        <div className="space-y-12 md:space-y-14">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8"
            >
              <div
                className={`flex flex-col justify-center md:col-span-5 ${
                  feature.imageOnRight
                    ? "order-1 md:order-1 md:pr-6"
                    : "order-1 md:order-2 md:col-start-8 md:pl-6"
                }`}
              >
                <h3 className="text-fluid-24 leading-none font-bold tracking-wide text-[#0e5c9e]">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-fluid-16 leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </div>

              <div
                className={`flex items-center md:col-span-7 ${
                  feature.imageOnRight
                    ? "order-2 md:order-2 justify-center md:justify-end"
                    : "order-2 md:order-1 justify-center md:justify-start"
                }`}
              >
                <div className="relative aspect-16/7 w-full max-w-115 overflow-hidden rounded-full shadow-sm">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 460px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
