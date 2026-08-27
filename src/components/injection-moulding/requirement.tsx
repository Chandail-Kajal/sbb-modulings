"use client";

import { Section } from "../Section";
import Image from "next/image";
import React, { useState } from "react";

export function Requirements() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const equipment = [
        {
            title: "High-Capacity Equipment",
            subtitle:
                "Our facilities include injection moulding machines from 90T through 2800T, including major machines from HAITIAN and Windsor.",
        },
        {
            title: "Engineering Support",
            subtitle:
                "Comprehensive engineering backing to assist with tooling, part optimization, material selection, and process refinement.",
        },
        {
            title: "Integrated Assembly",
            subtitle:
                "Seamless secondary operations including welding, decorative finishing, and full sub-assembly integration.",
        },
        {
            title: "Packaging & Traceability",
            subtitle:
                "End-to-end component traceability with customized packaging solutions ready for downstream delivery.",
        },
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section disablePaddingY>
            <div className="flex flex-col lg:flex-row justify-between items-start section-container ">
                {/* Left Side: Image */}
                <div className="w-full lg:max-w-[45%] overflow-hidden rounded-3xl shadow-xl">
                    <Image
                        height={1080}
                        width={1920}
                        src="/injection-moulding/milling-machine.jpg"
                        className="h-100 object-cover"
                        alt="Milling machine"
                    />
                </div>

                {/* Right Side: Accordion Content */}
                <div className="flex flex-col w-full lg:max-w-xl font-sans text-neutral-800">
                    {/* Header */}
                    <div className="flex flex-col gap-2">
                        <p className="text-fluid-24 font-light font-neue text-neutral-500 tracking-tight">
                            Manufacturing Excellence
                        </p>
                        <h2 className="text-fluid-40 font-bold tracking-tight text-neutral-900 leading-none font-neue">
                            A Manufacturing <br />
                            Partner Built Around <br />
                            Your Requirements
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="mt-6 mb-8 text-fluid-16  text-neutral-500 font-normal  font-ce leading-snug">
                        SBB Mouldings combines injection moulding, assembly, and supporting
                        manufacturing operations to provide an integrated production solution.
                    </p>

                    {/* Accordion Items */}
                    <div className="flex flex-col">
                        {equipment.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={item.title}
                                    className="border-b border-neutral-900 py-5"
                                >
                                    {/* Row Trigger */}
                                    <button
                                        type="button"
                                        onClick={() => handleToggle(index)}
                                        aria-expanded={isOpen}
                                        className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none"
                                    >
                                        <h3
                                            className={`text-fluid-24 leading-none font-normal tracking-tight font-neue transition-colors duration-200 ${isOpen
                                                    ? "text-[#1d70b8]"
                                                    : "text-neutral-700 group-hover:text-neutral-900"
                                                }`}
                                        >
                                            {item.title}
                                        </h3>

                                        {/* Pill Arrow Indicator */}
                                        <div
                                            className={`flex items-center justify-center w-20 h-7 rounded-full border border-neutral-900 transition-all shrink-0 ${isOpen
                                                    ? "bg-neutral-900 text-white"
                                                    : "bg-transparent text-neutral-900 group-hover:bg-neutral-100"
                                                }`}
                                        >
                                            <svg
                                                className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "translate-x-1" : ""
                                                    }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={1.75}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                                />
                                            </svg>
                                        </div>
                                    </button>

                                    {/* Smooth Collapse Content */}
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${isOpen
                                                ? "grid-rows-[1fr] opacity-100 mt-3"
                                                : "grid-rows-[0fr] opacity-0 mt-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="pr-8 text-fluid-16  text-neutral-500 font-ce leading-snug max-w-lg">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Section>
    );
}