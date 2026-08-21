"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
import Image from "next/image";
import { Section } from "./Section";

export const ManufacturingCarousel = () => {
  const advanceManufacturingSectionCards = [
    {
      image: "card_1.png",
      title: "Injection Moulding",
      description:
        "High-capacity injection moulding with machines ranging from small to 2800 tons.",
    },
    {
      image: "card_2.jpg",
      title: "Assembly",
      description:
        "Dedicated assembly capabilities for AC components and automotive parts.",
    },
    {
      image: "card_3.png",
      title: "Component Manufacturing",
      description:
        "Injection-moulded components for automotive, HVAC, white goods, & industrial applications.",
    },
    {
      image: "card_4.jpg",
      title: "Packaging & Traceability",
      description:
        "Box-packed units with MRP labelling, barcode printing, and product traceability.",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      slidesToScroll: 1,
      skipSnaps: false,
      duration: 20,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
      }),
    ]
  );

  const scrollPrev = useCallback(
    (e?: React.SyntheticEvent) => {
      e?.preventDefault();
      if (!emblaApi) return;
      emblaApi.scrollPrev();
      const autoplay = emblaApi.plugins()?.autoplay;
      if (autoplay) autoplay.reset();
    },
    [emblaApi]
  );

  const scrollNext = useCallback(
    (e?: React.SyntheticEvent) => {
      e?.preventDefault();
      if (!emblaApi) return;
      emblaApi.scrollNext();
      const autoplay = emblaApi.plugins()?.autoplay;
      if (autoplay) autoplay.reset();
    },
    [emblaApi]
  );

  return (
    <Section className="overflow-visible pt-(--section-y)" disablePaddingY>
      <div
        className="
          mx-auto
          flex
          flex-col
          lg:flex-row
          section-container
          items-start
          gap-8
          lg:gap-12
          overflow-visible
        "
      >
        <div
          className="
            w-full
            shrink-0
            lg:max-w-[40%]
          "
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-fluid-40 w-full font-bold leading-none text-text-primary">
              Advanced Manufacturing Capabilities
            </h2>

            <p className="text-fluid-16 leading-snug text-text-secondary">
              SBB Mouldings delivers precision moulding and assembly solutions
              across automotive, HVAC, white goods, and industrial applications.
            </p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 overflow-hidden">
          <div ref={emblaRef} className="w-full overflow-hidden">
            <div className="flex gap-6">
              {[
                ...advanceManufacturingSectionCards,
                ...advanceManufacturingSectionCards,
                ...advanceManufacturingSectionCards,
              ].map((card, index) => (
                <div
                  key={`${card.image}-${index}`}
                  className="
                    min-w-0
                    flex-[0_0_280px]
                    sm:flex-[0_0_320px]
                    lg:flex-[0_0_360px]
                  "
                >
                  <ManufacturingCard {...card} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 relative z-20">
            <button
              type="button"
              onClick={scrollPrev}
              onTouchEnd={(e) => {
                e.stopPropagation();
                scrollPrev(e);
              }}
              aria-label="Previous slide"
              className="
                flex h-12 w-12 cursor-pointer items-center justify-center
                rounded-full bg-black text-white active:scale-95
                transition-transform hover:bg-primary touch-manipulation select-none
              "
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={scrollNext}
              onTouchEnd={(e) => {
                e.stopPropagation();
                scrollNext(e);
              }}
              aria-label="Next slide"
              className="
                flex h-12 w-12 cursor-pointer items-center justify-center
                rounded-full bg-black text-white active:scale-95
                transition-transform hover:bg-primary touch-manipulation select-none
              "
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

const ManufacturingCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="group flex w-full cursor-pointer flex-col gap-3 select-none">
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-gray-200">
        <Image
          src={`/advance-manufacturing/${image}`}
          alt={title}
          fill
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-ce text-fluid-24 font-bold text-text-primary transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>

        <p className="font-neue text-fluid-16 font-normal leading-snug text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
};