import Image from "next/image";
import { ArrowRight, Box, Factory, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "../Section";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
}

const features: FeatureItem[] = [
  {
    id: "advanced-infrastructure",
    title: "Advanced Infrastructure",
    description:
      "Three manufacturing units in Bawal, Rewari — totaling roughly 10,300 sqm — combining dedicated moulding halls, assembly lines and finished-goods warehousing under one group, with a 25-ton overhead crane for large tool and component handling.",
    imageSrc: "/advanced-infrastructure.png",
    imageAlt: "Advanced Infrastructure",
    icon: Factory,
  },
  {
    id: "flexible-production",
    title: "Flexible Production",
    description:
      "A 29-machine fleet spanning 90 to 2,800 tons means production runs — from small precision parts to the largest automotive and HVAC components — can be matched to the right press size rather than a one-size-fits-all approach.",
    imageSrc: "/flexible-production.jpg",
    imageAlt: "Flexible Production",
    icon: Settings,
  },
  {
    id: "integrated-capabilities",
    title: "Integrated Capabilities",
    description:
      "Moulding, assembly, packaging, warehousing and quality inspection all run within the same group, so a program moves from raw material to boxed, traceable finished goods without leaving our facilities.",
    imageSrc: "/integrated-capabilities.jpg",
    imageAlt: "Integrated Capabilities",
    icon: Box,
  },
];

const noiseBg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

export default function Tec() {
  return (
    <Section
      className="relative overflow-hidden py-(--section-y)"
      disablePaddingY
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-[#f4f8ff] via-white to-[#f4f8ff]">
        <Image
          src="/map-bg.jpg"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover h-full opacity-25"
          priority
        />
      </div>

      <div className="relative z-10 section-container">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
          
          <h2 className="text-fluid-40 font-extrabold leading-tight tracking-tight text-slate-900">
            <span className="text-[#0052cc]">Core Manufacturing</span>{" "}
            Capabilities
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-fluid-16 leading-relaxed text-slate-500">
            Built around your production requirements, from concept and tooling
            to high-volume runs, with consistent quality at every stage.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.id}
                className="flex h-full flex-col rounded-[28px] border border-white bg-white/80 p-3.5 shadow-[0_12px_40px_rgba(30,90,180,0.10)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Image + icon badge */}
                <div className="relative">
                  <div className="relative aspect-4/2.7 w-full overflow-hidden rounded-3xl">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div
                    className="absolute -bottom-7 left-3 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-4 border-white text-white shadow-md"
                    style={{
                      backgroundImage:
                        "linear-gradient(115deg, #3b82f6 0%, #1e40af 100%)",
                    }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-20"
                      style={{ backgroundImage: noiseBg }}
                    />
                    <Icon
                      className="relative z-10 h-7 w-7"
                      strokeWidth={1.75}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-3 pb-2 pt-10">
                  <h3 className="text-fluid-24 font-bold leading-tight tracking-tight text-[#0052cc]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-fluid-16 leading-relaxed text-slate-500">
                    {feature.description}
                  </p>

                  <div className="mt-auto flex justify-end pt-6">
                    <button
                      type="button"
                      aria-label={`Learn more about ${feature.title}`}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e6effc] text-[#0052cc] transition-colors hover:bg-[#0052cc] hover:text-white"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}