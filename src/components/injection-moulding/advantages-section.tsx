"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { RiStackFill } from "react-icons/ri";
import { Section } from "../Section";

type Advantage = {
  title: string;
  description: string;
};

const advantages: Advantage[] = [
  {
    title: "Does SBB Mouldings Support Tooling and Part Design?",
    description:
      "Yes — SBB Mouldings' engineering team works alongside customer engineering teams on tooling input, part and gate optimization, and material selection, so parts are designed for the realities of high-volume moulding before a single shot is made, not fixed after.",
  },
  {
    title: "Does SBB Mouldings Handle Assembly After Moulding?",
    description:
      "Yes — moulded parts can move directly into SBB Mouldings' in-house assembly, welding and finishing, followed by quality inspection and traceable packaging, so a program moves from raw material to boxed finished good with fewer handoffs, fewer vendors, and tighter control over lead time and quality.",
  },
  {
    title: "Where Does SBB Mouldings Run Injection Moulding?",
    description:
      "SBB Mouldings runs injection moulding across all three of its Bawal, Rewari units — 2,800 sqm, 3,500 sqm and a 4,000 sqm facility added in December 2024 for new moulding capacity, assembly and finished-goods warehousing — supported by a 25-ton overhead crane for large-tool and large-part handling.",
  },
];

export function AdvantageSection() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      align: "start",
    },
    [Autoplay({ delay: 3500, stopOnInteraction: false })],
  );

  return (
    <Section className="overflow-hidden">
      <div className="flex flex-col gap-6 section-container">
        <div>
          <p className="font-neue text-fluid-24">
            Injection Moulding Advantages
          </p>
          <h4 className="font-neue text-fluid-40 font-bold leading-none">
            Injection Moulding Advantages
          </h4>
        </div>

        {/* Viewport is limited to the section-container width */}
        <div
          className="w-full overflow-hidden lg:mt-8 mt-4 pb-4"
          ref={emblaRef}
        >
          <div className="-ml-6 flex touch-pan-y py-2">
            {[...advantages, ...advantages, ...advantages].map(
              (item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="min-w-0 flex-[0_0_85%] pl-6 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
                >
                  <AdvantageCard {...item} />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

const AdvantageCard = ({ title, description }: Advantage) => {
  return (
    <div
      className="group relative h-auto min-h-[380px] sm:min-h-[440px] lg:h-125 w-full overflow-hidden rounded-3xl sm:rounded-4xl bg-white text-text-primary transition-colors duration-300 hover:text-white p-6 sm:p-8"
      style={{
        boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/map-bg.jpg"
          alt="map background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Hover gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          backgroundImage: "linear-gradient(to right, #569FF2, #0057B8)",
        }}
      />

      {/* Monotone noise */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-25"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex h-full w-full flex-col gap-4 font-neue">
        <RiStackFill className="size-16 sm:size-24 lg:size-28 text-black transition-colors duration-300 group-hover:text-white shrink-0" />

        <h5 className="text-fluid-24 font-bold leading-tight transition-colors duration-300 group-hover:text-white">
          {title}
        </h5>

        <p className="font-ce text-fluid-16 leading-snug text-text-para transition-colors duration-300 group-hover:text-white/90">
          {description}
        </p>
      </div>
    </div>
  );
};