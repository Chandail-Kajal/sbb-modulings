import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
import { Section } from "./Section";
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

  // Embla Carousel setup: align start, loop enabled, snap 1 card at a time
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Section enableRightPadding={false} asChild>
      <div className="sm:pl-14 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
        <div className="flex flex-col gap-3 sm:gap-4 w-full lg:max-w-md">
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary leading-tight">
            Advanced Manufacturing Capabilities
          </h4>
          <p className="text-sm leading-relaxed text-text-secondary">
            SBB Mouldings delivers precision moulding and assembly solutions
            across automotive, HVAC, white goods, and industrial applications.
          </p>

          <div className="hidden lg:flex flex-row items-center gap-4 pt-4">
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

        <div className="w-full flex flex-col gap-6 overflow-hidden">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6">
              {advanceManufacturingSectionCards.map((card) => (
                <div
                  key={card.image}
                  className="flex-[0_0_80%] sm:flex-[0_0_300px] lg:flex-[0_0_320px] min-w-0"
                >
                  <ManufacturingCard {...card} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex lg:hidden flex-row justify-center items-center gap-4 pt-2">
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
    <div className="w-full flex flex-col gap-3">
      <div className="relative aspect-3/4 w-full overflow-hidden border border-gray-200 rounded-4xl">
        <Image
          src={`/advance-manufacturing/${image}`}
          alt={title}
          fill
          sizes="(max-width: 640px) 80vw, 320px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-primary text-lg font-ce font-medium">{title}</h4>
        <p className="text-text-secondary font-neue text-sm font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};
