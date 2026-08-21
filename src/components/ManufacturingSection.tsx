"use client";

import useEmblaCarousel from "embla-carousel-react";
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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <Section className="overflow-visible pt-(--section-y)" disablePaddingY>
      <div
        className="
          mx-auto
          flex
          flex-col
          sm:flex-row
          section-container
          items-start
          gap-12
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

        <div className="min-w-full flex-1">
          <div ref={emblaRef} className="w-full overflow-hidden">
            <div className="flex gap-6">
              {[
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
                  <ManufacturingCard index={index} {...card} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-start ml-[33vw] sm:ml-0 gap-4 sm:justify-center sm:pr-8 lg:pr-0">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="
                flex h-10 w-10 cursor-pointer items-center justify-center
                rounded-full bg-black text-white
                transition-colors hover:bg-primary
              "
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next slide"
              className="
                flex h-10 w-10 cursor-pointer items-center justify-center
                rounded-full bg-black text-white
                transition-colors hover:bg-primary
              "
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

const ManufacturingCard = ({
  index,
  image,
  title,
  description,
}: {
  index: number;
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-gray-200">
        <Image
          src={`/advance-manufacturing/${image}`}
          alt={title}
          fill
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className={`font-ce text-fluid-24 font-bold ${index===0?"text-primary":"text-text-primary"}`}>
          {title}
        </h3>

        <p className="font-neue text-fluid-16 font-normal leading-snug text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
};
