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
    },
    [
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-col w-full">
      <Section className="overflow-hidden pt-(--section-y)" disablePaddingX disablePaddingY asChild>
        <div
          className="
            mx-auto
            flex
            flex-col
            sm:flex-row
            carousel-section
            items-start

            overflow-visible
          "
        >
          <div
            className="
              w-full
              shrink-0
              lg:max-w-[35%]
              h-123.5
            "
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-fluid-40 w-full font-bold leading-none text-text-primary">
                Advanced Manufacturing Capabilities
              </h2>

              <p className="text-fluid-16 leading-snug text-text-secondary">
                SBB Mouldings delivers precision moulding and assembly solutions
                across automotive, HVAC, white goods, and industrial
                applications.
              </p>
            </div>
          </div>

          <div className="min-w-0 max-w-full flex-1 w-full">
            <div ref={emblaRef} className="w-full overflow-hidden">
              <div className="flex -mx-3">
                {[
                  ...advanceManufacturingSectionCards,
                  ...advanceManufacturingSectionCards,
                ].map((card, index) => (
                  <div
                    key={`${card.image}-${index}`}
                    className="
                      min-w-0
                      flex-[0_0_100%]
                      sm:flex-[0_0_30%]
                      px-3
                    "
                  >
                    <ManufacturingCard  {...card} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      <div className="mt-6 flex items-center justify-center gap-10 sm:justify-end section-container">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="
            flex h-10 w-10 cursor-pointer items-center justify-center
            rounded-full bg-[#D5D5D5]
          text-black
            transition-colors
          hover:bg-black
          hover:text-white
          active:bg-black
          active:text-white
          
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
            rounded-full bg-[#D5D5D5]
          text-black
            transition-colors
          hover:bg-black
          hover:text-white
          active:bg-black
          active:text-white
         
  "
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
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
    <div className="group flex w-full cursor-pointer flex-col gap-6">
      <div
        className="
    lg:h-94
    md:h-85
    sm:h-78
    w-full
    overflow-hidden
    rounded-3xl
    border
    border-gray-200
    relative
  "
      >
        <Image src={'/advance-manufacturing/card-bg.jpg'} alt="title" fill className={`object-cover inset-0 z-10 opacity-80 ${image != "card_1.png" && "hidden"}`} />
        <Image
          src={`/advance-manufacturing/${image}`}
          alt={title}
          fill
          sizes="(max-width: 311px) 80vw, 50vw"
          className={`${image === "card_1.png" ? "object-contain" : "object-cover"} z-20`}
        />
      </div>
      <div className="flex flex-col gap-3">
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