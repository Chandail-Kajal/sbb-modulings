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
      description: "Moulding and dedicated assembly facilities.",
      imageSrc: "/advanced-infrastructure.png",
      imageAlt: "Advanced Infrastructure",
    },
    {
      id: 2,
      title: "Flexible Production",
      description:
        "A broad range of machine capacities for different component requirements.",
      imageSrc: "/flexible-production.jpg",
      imageAlt: "Flexible Production",
    },
    {
      id: 3,
      title: "Integrated Capabilities",
      description: "Moulding, assembly packaging, warehousing, and testing.",
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
                Built Around Production <br />
                <span className="text-[#0052cc]">Requirements</span>
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
      <div className=" mb-(--section-y)">
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
    },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full overflow-hidden mb-(--section-y)" ref={emblaRef}>
      <div className="flex -ml-4 touch-pan-y py-4">
        {extendedCapabilities.map((item, index) => {
          const isSelected = index === selectedIndex;

          return (
            <div
              key={item.id || index}
              className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_50%] lg:flex-[0_0_40%] pl-4 min-w-0"
            >
              <div className="group flex flex-col items-center text-center cursor-pointer w-full">
                <div className="w-full flex items-center justify-center mb-6">
                  <div
                    className={`w-full xl:h-65 sm:h-55 h-50 relative rounded-full border-4 transition-all duration-500 ${
                      isSelected ? "border-[#0052cc]" : "border-transparent"
                    }`}
                  >
                    <div
                      className={`relative w-full h-full rounded-full overflow-hidden transition-all duration-500 ${
                        isSelected
                          ? "blur-none scale-100 opacity-100"
                          : "blur-[3px] scale-95 opacity-60"
                      }`}
                    >
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                </div>

                <h3
                  className={`text-fluid-32 font-bold tracking-tight leading-none mb-2 transition-all duration-500 ${
                    isSelected
                      ? "text-neutral-800 blur-none opacity-100"
                      : "text-neutral-400 blur-[1px] opacity-60"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-fluid-16 max-w-70 leading-snug transition-all duration-500 ${
                    isSelected
                      ? "text-neutral-500 blur-none opacity-100"
                      : "text-neutral-400 blur-[1px] opacity-60"
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
