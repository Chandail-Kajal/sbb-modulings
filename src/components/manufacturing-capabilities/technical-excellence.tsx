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
    id: "advanced-infrastructure",
    title: "Advanced Infrastructure",
    description:
      "Three units in Bawal, Rewari spanning roughly 10,300 sqm, with moulding halls, assembly lines, warehousing and a 25-ton overhead crane.",
    imageSrc: "/advanced-infrastructure.png",
    imageAlt: "Advanced Infrastructure",
    imageOnRight: true,
  },
  {
    id: "flexible-production",
    title: "Flexible Production",
    description:
      "A 29-machine fleet from 90 to 2,800 tons, so every part runs on the right press size.",
    imageSrc: "/flexible-production.jpg",
    imageAlt: "Flexible Production",
    imageOnRight: false,
  },
  {
    id: "integrated-capabilities",
    title: "Integrated Capabilities",
    description:
      "Moulding, assembly, packaging, warehousing and inspection under one group, from raw material to traceable finished goods.",
    imageSrc: "/integrated-capabilities.jpg",
    imageAlt: "Integrated Capabilities",
    imageOnRight: true,
  },
];

export default function Tec() {
  return (
    <Section
      className="relative overflow-hidden py-(--section-y) "
      disablePaddingY
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/map-bg.jpg"
          alt="Abstract background pattern"
          fill
          className="object-cover h-full opacity-25"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 section-container">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14 lg:mb-16">
          <p className="mb-2 text-fluid-24 font-light tracking-tight text-slate-500">
            Flexible build
          </p>
          <h2 className="text-fluid-40 font-bold leading-tight text-slate-800">
            <span className="text-[#0e5c9e]">Core Manufacturing</span>{" "}
            Capabilities
          </h2>
          <p className="mt-4 text-fluid-16 leading-relaxed text-slate-500">
            Built around your production requirements, from concept and tooling
            to high-volume runs, with consistent quality at every stage.
          </p>
        </div>

        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
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
                <p className="mt-2 text-fluid-16 leading-relaxed text-slate-500">
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