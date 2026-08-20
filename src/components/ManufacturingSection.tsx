"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
import Image from "next/image";

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

  /* 
    Embla Carousel Options:
    - loop: true -> Infinite loop scrolling
    - align: "start" -> Aligns current active card to the left container margin
    - slidesToScroll: 1 -> Explicitly scrolls 1 card at a time regardless of screen width
    - skipSnaps: false -> Forces tight snapping to individual cards
  */
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full overflow-hidden pl-section-x pr-0 pt-[clamp(1.5rem,8.2vw,9.84375rem)] flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
      <div className="flex flex-col gap-3 sm:gap-4 w-full lg:max-w-lg shrink-0 pr-4 sm:pr-8 lg:pr-0">
        <h2 className="text-fluid-32 font-semibold text-text-primary leading-none w-full">
          Advanced Manufacturing Capabilities
        </h2>
        <p className="text-sm leading-snug text-text-secondary">
          SBB Mouldings delivers precision moulding and assembly solutions
          across automotive, HVAC, white goods, and industrial applications.
        </p>
      </div>

      <div className="w-full min-w-0 flex flex-col gap-6">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-6">
            {advanceManufacturingSectionCards.map((card, index) => (
              <div
                key={`${card.image}-${index}`}
                className="flex-[0_0_280px] sm:flex-[0_0_320px] lg:flex-[0_0_360px] min-w-0"
              >
                <ManufacturingCard {...card} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row items-center justify-center sm:justify-end sm:mr-30 gap-4 pt-2">
          <button
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="h-10 w-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-primary transition-colors cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next slide"
            className="h-10 w-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-primary transition-colors cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
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
    <div className="w-full flex flex-col gap-3">
      <div className="relative aspect-square w-full overflow-hidden border border-gray-200 rounded-3xl">
        <Image
          src={`/advance-manufacturing/${image}`}
          alt={title}
          fill
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-primary text-sub font-ce font-medium">{title}</h3>
        <p className="text-text-secondary font-neue text-body font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
