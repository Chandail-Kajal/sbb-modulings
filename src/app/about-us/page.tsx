/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface CardItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const cardsData: CardItem[] = [
  {
    id: 1,
    title: "Precision Assembly. Built for Production.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley.",
    imageSrc: "/blogimg-1.jpg",
    imageAlt: "Design and CAD engineering workstation",
  },
  {
    id: 2,
    title: "Precision Assembly. Built for Production.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley.",
    imageSrc: "/blogimg-2.jpg",
    imageAlt: "Packaging and warehouse logistics",
  },
  {
    id: 3,
    title: "Precision Assembly. Built for Production.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley.",
    imageSrc: "/blogimg-3.jpg",
    imageAlt: "Automated automotive assembly line",
  },
];

export default function Blog() {
  // Triple the data so loop auto-scrolling is seamless and continuous
  const displayCards = [...cardsData, ...cardsData, ...cardsData];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: true,  // Pauses auto-scrolling when user swipes/drags
        stopOnMouseEnter: true,   // Pauses on hover
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <Header />
      <Section>
        <div className="section-container font-neue w-full">
          {/* Top Header Block */}
          <div className="w-full space-y-2 mb-10">
            <h2 className="w-full text-left text-fluid-40 font-extrabold tracking-tight text-neutral-900">
              Precision Assembly.{" "}
              <span className="text-[#0052cc]">Built for Production.</span>
            </h2>
            <p className="w-full text-center text-fluid-24 text-neutral-500 font-normal">
              Assembly
            </p>
          </div>

          {/* Sub-header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 w-full">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="w-8 h-8 rounded-full bg-neutral-200 shrink-0" />
              <div className="w-full">
                <h4 className="w-full text-left text-fluid-24 font-semibold text-[#0052cc]">
                  Capacity
                </h4>
                <p className="w-full text-center text-fluid-16 text-neutral-500">
                  High-tonnage injection moulding equipment for large
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end md:self-auto">
              <span className="h-7 w-24 rounded-full bg-neutral-200 inline-block" />
              <span className="h-7 w-24 rounded-full bg-neutral-200 inline-block" />
              <span className="h-7 w-24 rounded-full bg-neutral-200 inline-block" />
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full relative aspect-video md:aspect-21/9 rounded-4xl overflow-hidden shadow-sm mb-12">
            <Image
              src="/blog.png"
              alt="Precision assembly and high-tonnage injection moulding factory floor"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Body Content */}
          <div className="space-y-6 font-ce text-neutral-600 text-fluid-16 leading-snug mb-16 w-full">
            <p className="w-full text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
            </p>

            <p className="w-full text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
            </p>

            <div className="space-y-2 pt-4 w-full">
              <h3 className="w-full text-left font-neue text-fluid-24 font-bold text-[#0057B8]">
                Precision Assembly. Built for Production.
              </h3>
              <p className="w-full text-center text-fluid-16 leading-snug">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
              </p>
            </div>

            <div className="space-y-2 pt-4 w-full">
              <h3 className="w-full text-left font-neue text-fluid-24 font-bold text-[#0057B8]">
                Precision Assembly. Built for Production.
              </h3>
              <p className="w-full text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
              </p>
            </div>
          </div>

          {/* Carousel & Controls Container */}
          <div className="flex flex-col w-full">
            {/* Slider Controls: order-2 on mobile (bottom), order-1 on desktop (top) */}
            <div className="order-2 sm:order-1 flex justify-center sm:justify-end items-center gap-3 mt-6 sm:mt-0 sm:mb-6">
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Previous slide"
                className="group w-10 h-10 rounded-full bg-neutral-200 hover:bg-black active:scale-95 flex items-center justify-center transition-colors duration-200"
              >
                <FaChevronLeft className="w-3.5 h-3.5 text-neutral-800 group-hover:text-white transition-colors duration-200" />
              </button>

              <button
                type="button"
                onClick={scrollNext}
                aria-label="Next slide"
                className="group w-10 h-10 rounded-full bg-neutral-200 hover:bg-black active:scale-95 flex items-center justify-center transition-colors duration-200"
              >
                <FaChevronRight className="w-3.5 h-3.5 text-neutral-800 group-hover:text-white transition-colors duration-200" />
              </button>
            </div>

            {/* Swipeable & Auto-scrolling Viewport */}
            <div
              ref={emblaRef}
              className="order-1 sm:order-2 overflow-hidden select-none cursor-grab active:cursor-grabbing pb-4"
            >
              <div className="flex -ml-6 touch-pan-y">
                {displayCards.map((card, index) => (
                  <div
                    key={`${card.id}-${index}`}
                    className="flex-[0_0_85%] sm:flex-[0_0_48%] lg:flex-[0_0_32%] min-w-0 pl-6 flex flex-col space-y-4"
                  >
                    <div className="relative w-full aspect-16/10 rounded-[1.75rem] overflow-hidden bg-neutral-100 shadow-sm pointer-events-none">
                      <Image
                        src={card.imageSrc}
                        alt={card.imageAlt}
                        fill
                        draggable={false}
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <div className="space-y-1.5 w-full pointer-events-none">
                      <h3 className="w-full text-left font-bold text-neutral-900 text-fluid-24 leading-snug">
                        {card.title}
                      </h3>
                      <p className="w-full text-left font-ce text-fluid-16 text-neutral-500 leading-snug">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}