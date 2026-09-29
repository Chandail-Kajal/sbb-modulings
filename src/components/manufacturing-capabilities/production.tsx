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
      title: "Advanced Infrastructure",
      description: "Three manufacturing units in Bawal, Rewari — totaling roughly 10,300 sqm — combining dedicated moulding halls, assembly lines and finished-goods warehousing under one group, with a 25-ton overhead crane for large tool and component handling.",
      imageSrc: "/advanced-infrastructure.png",
      imageAlt: "Advanced Infrastructure",
    },
    {
      id: 2,
      title: "Flexible Production",
      description:
        "A 29-machine fleet spanning 90 to 2,800 tons means production runs — from small precision parts to the largest automotive and HVAC components — can be matched to the right press size rather than a one-size-fits-all approach.",
      imageSrc: "/flexible-production.jpg",
      imageAlt: "Flexible Production",
    },
    {
      id: 3,
      title: "Integrated Capabilities",
      description: "Moulding, assembly, packaging, warehousing and quality inspection all run within the same group, so a program moves from raw material to boxed, traceable finished goods without leaving our facilities.",
      imageSrc: "/integrated-capabilities.jpg",
      imageAlt: "Integrated Capabilities",
    },
  ];

  return (
    <div>
      <Section>
        <div className="section-container">
          <div className="flex sm:flex-row flex-col justify-between items-start gap-6">
            <div className="sm:max-w-lg w-full mx-auto sm:mx-0">
              <p className="text-fluid-24 font-light text-neutral-500 tracking-tight mb-2">
                Flexible build
              </p>
              <h2 className="text-fluid-40 font-bold text-neutral-900 leading-none">
                Core Manufacturing  <br />
                <span className="text-[#0052cc]">Capabilitiess</span>
              </h2>
            </div>
            <div className="sm:max-w-[42%] w-full font-ce text-fluid-16 text-neutral-600 sm:text-right leading-relaxed space-y-4">
              <p>
                Our manufacturing capabilities are designed around your specific
                production requirements, from initial concept and tooling to
                high-volume production. We combine advanced technology, skilled
                expertise, and flexible processes to deliver consistent quality,
                efficiency, and reliable results at every stage.
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
        speed: 1,
        stopOnInteraction: true,     // stops when user swipes so gesture doesn't fight auto-scroll
        stopOnMouseEnter: true,      // pauses on hover
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
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div
      className="w-full overflow-hidden select-none cursor-grab active:cursor-grabbing"
      ref={emblaRef}
    >
      <div className="flex -ml-4 touch-pan-y py-6">
        {extendedCapabilities.map((item, index) => {
          const isSelected = index === selectedIndex;

          return (
            <div
              key={`${item.id}-${index}`}
              onClick={() => scrollTo(index)}
              className="flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_60%] lg:flex-[0_0_48%] pl-4 min-w-0"
            >
              <div className="group flex flex-col items-center text-center w-full">
                {/* Capsule Card (Swipe target & clickable) */}
                <div className="w-full flex items-center justify-center mb-6">
                  <div
                    className={`w-full xl:h-96 lg:h-80 sm:h-72 h-56 relative rounded-full p-1 border-4 transition-all duration-500 ease-out ${
                      isSelected
                        ? "border-[#0052cc] scale-100 shadow-lg shadow-blue-500/10"
                        : "border-transparent scale-95 opacity-60 hover:opacity-85"
                    }`}
                  >
                    <div
                      className={`relative w-full h-full rounded-full overflow-hidden transition-all duration-500 ${
                        isSelected ? "blur-none" : "blur-[2px]"
                      }`}
                    >
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        draggable={false} // Prevents native browser image dragging from blocking touch swipe
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                        sizes="(max-width: 768px) 90vw, 48vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <h3
                  className={`w-full text-fluid-32 font-bold tracking-tight leading-tight mb-3 transition-all duration-500 ${
                    isSelected
                      ? "text-neutral-900 opacity-100"
                      : "text-neutral-400 opacity-60"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`w-full text-fluid-16 leading-snug text-pretty transition-all duration-500 ${
                    isSelected
                      ? "text-neutral-600 opacity-100"
                      : "text-neutral-400 opacity-60"
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
  );
}