/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import Image from "next/image";
import { Section } from "../Section";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

interface CapabilityItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function Production() {
  const capabilities: CapabilityItem[] = [
    {
      id: 1,
      title: "Capacity",
      description:
        "High-tonnage injection moulding equipment for large and complex components.",
      imageSrc: "/manufacturing-capabilities/capacity.jpg",
      imageAlt: "Digital gauge and analytics interface",
    },
    {
      id: 2,
      title: "Flexibility",
      description:
        "A broad equipment range supporting different component sizes and production requirements.",
      imageSrc: "/manufacturing-capabilities/flexibility.jpg",
      imageAlt: "Team working on laptop and reviewing schematics",
    },
    {
      id: 3,
      title: "Integration",
      description:
        "Moulding, assembly, quality and warehousing in one unified manufacturing environment.",
      imageSrc: "/manufacturing-capabilities/integration.jpg",
      imageAlt: "Interlocking glowing puzzle pieces on circuit board",
    },
  ];

  return (
    <div>
      <Section>
        <div className="section-container">
          <div className="flex sm:flex-row flex-col justify-between items-start gap-6">
            <div className="sm:max-w-lg w-full mx-auto sm:mx-0">
              <p className="text-fluid-24 font-light text-neutral-500 tracking-tight mb-2">
                Three core principles
              </p>
              <h2 className="text-fluid-40 font-bold text-neutral-900 leading-none">
                Technical Excellence <br />
                <span className="text-[#0052cc]">in Production</span>
              </h2>
            </div>
            <div className="sm:max-w-[42%] w-full font-ce text-fluid-16 text-neutral-600 sm:text-right leading-relaxed space-y-4">
              <p>
                Our manufacturing infrastructure is built around three core
                principles: capacity, flexibility and integration.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <div className="mb-(--section-y)">
        <CapabilitiesCarousel capabilities={capabilities} />
      </div>
    </div>
  );
}

interface Capability {
  id: string | number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

interface CapabilitiesCarouselProps {
  capabilities: Capability[];
}

function CapabilitiesCarousel({ capabilities }: CapabilitiesCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Triple items for continuous infinite scroll feel
  const extendedCapabilities = [
    ...capabilities,
    ...capabilities,
    ...capabilities,
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false,
      containScroll: false,
    },
    [
      AutoScroll({
        speed: 0.8,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );
  return (
    <div
      className="w-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="Technical excellence in production"
    >
      <div
        className="w-full overflow-hidden select-none cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex -ml-4 touch-pan-y py-4">
          {extendedCapabilities.map((item, index) => {
            const isSelected = index === selectedIndex;

            return (
              <div
                key={`${item.id}-${index}`}
                onClick={() => scrollTo(index)}
                className="flex-[0_0_78%] sm:flex-[0_0_46%] md:flex-[0_0_38%] lg:flex-[0_0_30%] xl:flex-[0_0_26%] pl-4 min-w-0"
              >
                <div className="group flex flex-col items-center text-center w-full">
                  {/* Capsule card */}
                  <div className="w-full flex items-center justify-center mb-4">
                    <div
                      className={`w-full xl:h-56 lg:h-48 sm:h-44 h-36 relative rounded-full p-1 border-[3px] transition-all duration-500 ease-out ${
                        isSelected
                          ? "border-[#0052cc] scale-100 shadow-lg shadow-blue-500/20"
                          : "border-transparent scale-90 opacity-60 group-hover:opacity-100 group-hover:scale-95 group-hover:border-[#0052cc]/40"
                      }`}
                    >
                      <div
                        className={`relative w-full h-full rounded-full overflow-hidden transition-all duration-500 ${
                          isSelected
                            ? "blur-none"
                            : "blur-[2px] group-hover:blur-none"
                        }`}
                      >
                        <Image
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          fill
                          draggable={false}
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                          sizes="(max-width: 768px) 78vw, 30vw"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <h3
                    className={`w-full text-fluid-24 font-bold tracking-tight leading-tight mb-2 transition-all duration-500 ${
                      isSelected
                        ? "text-neutral-900 opacity-100"
                        : "text-neutral-400 opacity-60 group-hover:text-neutral-700 group-hover:opacity-100"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`w-full max-w-xs text-fluid-16 leading-snug text-pretty transition-all duration-500 ${
                      isSelected
                        ? "text-neutral-600 opacity-100 translate-y-0"
                        : "text-neutral-400 opacity-0 translate-y-1 h-0 overflow-hidden sm:h-auto sm:opacity-60 sm:translate-y-0"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}