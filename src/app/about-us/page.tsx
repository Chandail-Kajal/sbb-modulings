"use client";

import React, { useRef } from "react";
import Image from "next/image";
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

export default function AboutUs() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 380;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div>
            <Header />
            <Section>
                <div className="section-container font-neue py-12 md:py-16">
                    {/* ================= Header ================= */}
                    <div className="flex flex-col items-center text-center space-y-2 mb-10">
                        <p className="text-fluid-24 text-neutral-500 font-normal">
                            Assembly
                        </p>
                        <h2 className="text-fluid-24 font-extrabold tracking-tight text-neutral-900">
                            Precision Assembly.{" "}
                            <span className="text-[#0052cc]">Built for Production.</span>
                        </h2>
                    </div>

                    {/* ================= Capacity Bar / Controls ================= */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        {/* Left: Indicator & Description */}
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-neutral-200 shrink-0" />
                            <div className="text-left">
                                <h4 className="text-fluid-16 font-semibold text-[#0052cc]">
                                    Capacity
                                </h4>
                                <p className="text-xs text-neutral-500">
                                    High-tonnage injection moulding equipment for large
                                </p>
                            </div>
                        </div>

                        {/* Right: Pill Controls / Skeleton Tabs */}
                        <div className="flex items-center gap-3">
                            <span className="h-7 w-24 rounded-full bg-neutral-200 inline-block" />
                            <span className="h-7 w-24 rounded-full bg-neutral-200 inline-block" />
                            <span className="h-7 w-24 rounded-full bg-neutral-200 inline-block" />
                        </div>
                    </div>

                    {/* ================= Main Image ================= */}
                    <div className="w-full relative aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-sm mb-12">
                        <Image
                            src="/blog.png"
                            alt="Precision assembly and high-tonnage injection moulding factory floor"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </div>

                    {/* ================= Content Body ================= */}
                    <div className="space-y-6 font-ce text-neutral-600 text-sm leading-relaxed mb-16">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry&apos;s standard dummy
                            text ever since 1966, when designers at Letraset and James Mosley,
                            the librarian at St Bride Printing Library in London, took a 1914
                            Cicero translation and scrambled it to make dummy text for
                            Letraset&apos;s Body Type sheets. It has survived not only many
                            decades, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised thanks to these sheets
                            and more recently with desktop publishing software like Aldus
                            PageMaker and Microsoft Word including versions of Lorem Ipsum.
                        </p>

                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry&apos;s standard dummy
                            text ever since 1966, when designers at Letraset and James Mosley,
                            the librarian at St Bride Printing Library in London, took a 1914
                            Cicero translation and scrambled it to make dummy text for
                            Letraset&apos;s Body Type sheets. It has survived not only many
                            decades, but also the leap into electronic typesetting, remaining
                            essentially unchanged.
                        </p>

                        <div className="space-y-2 pt-4">
                            <h3 className="font-neue text-lg font-bold text-[#0057B8]">
                                Precision Assembly. Built for Production.
                            </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                                text ever since 1966, when designers at Letraset and James Mosley,
                                the librarian at St Bride Printing Library in London, took a 1914
                                Cicero translation and scrambled it to make dummy text for
                                Letraset&apos;s Body Type sheets.
                            </p>
                        </div>

                        <div className="space-y-2 pt-4">
                            <h3 className="font-neue text-lg font-bold text-[#0057B8]">
                                Precision Assembly. Built for Production.
                            </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                                text ever since 1966, when designers at Letraset and James Mosley,
                                the librarian at St Bride Printing Library in London, took a 1914
                                Cicero translation and scrambled it to make dummy text for
                                Letraset&apos;s Body Type sheets.
                            </p>
                        </div>
                    </div>

                    {/* ================= Carousel Navigation Header ================= */}
                    <div className="flex justify-end items-center gap-3 mb-6">
                        <button
                            type="button"
                            onClick={() => handleScroll("left")}
                            aria-label="Previous slide"
                            className="group w-10 h-10 rounded-full bg-neutral-200 hover:bg-black active:scale-95 flex items-center justify-center transition-colors duration-200"
                        >
                            <FaChevronLeft className="w-3.5 h-3.5 text-neutral-800 group-hover:text-white transition-colors duration-200" />
                        </button>

                        {/* Right Button */}
                        <button
                            type="button"
                            onClick={() => handleScroll("right")}
                            aria-label="Next slide"
                            className="group w-10 h-10 rounded-full bg-neutral-200 hover:bg-black active:scale-95 flex items-center justify-center transition-colors duration-200"
                        >
                            <FaChevronRight className="w-3.5 h-3.5 text-neutral-800 group-hover:text-white transition-colors duration-200" />
                        </button>
                    </div>

                    {/* ================= Scrollable Cards Row ================= */}
                    <div
                        ref={scrollContainerRef}
                        className="flex items-start gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {cardsData.map((card) => (
                            <div
                                key={card.id}
                                className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] flex-1 shrink-0 flex flex-col space-y-4"
                            >
                                {/* Rounded Card Image Container */}
                                <div className="relative w-full aspect-[16/10] rounded-[1.75rem] overflow-hidden bg-neutral-100 shadow-sm">
                                    <Image
                                        src={card.imageSrc}
                                        alt={card.imageAlt}
                                        fill
                                        className="object-cover object-center hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 85vw, 33vw"
                                    />
                                </div>

                                {/* Card Title & Description */}
                                <div className="space-y-1.5">
                                    <h3 className="font-bold text-neutral-900 text-sm md:text-base leading-snug">
                                        {card.title}
                                    </h3>
                                    <p className="font-ce text-xs text-neutral-500 leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
            <Footer />
        </div>
    );
}