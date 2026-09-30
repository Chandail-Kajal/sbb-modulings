"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "../Section";

const products = [
  {
    src: "/products/ac.jpg",
    alt: "Cassette AC unit product",
    position: "object-[center_60%]",
  },
  {
    src: "/products/repair.jpg",
    alt: "Repair and maintenance work",
    position: "object-center",
  },
  {
    src: "/products/car.jpg",
    alt: "Manufactured component",
    position: "object-center",
  },
];

export default function WhatWeBuild() {
  const [active, setActive] = useState(0);

  const go = (dir: number) =>
    setActive((cur) => (cur + dir + products.length) % products.length);

  return (
    <Section>
      <div className="flex flex-col items-center text-center font-neue section-container">
        <p className="text-fluid-29 font-light text-neutral-500 tracking-tight mb-2">
          Products / Our Work
        </p>
        <h2 className="text-fluid-47 font-bold tracking-tight text-neutral-900 leading-relaxed">
          What We Build
        </h2>
        <div className="mt-6 w-full space-y-4 text-fluid-18 text-neutral-600 font-normal leading-relaxed font-ce">
          <p>
            A look at the components and assemblies moving through our
            facilities — from single moulded automotive parts to fully
            assembled, box-packed <br />
            cassette AC units.
          </p>
        </div>

        {/* Image slider */}
        <div className="relative mt-10 w-full max-w-6xl mx-auto overflow-hidden rounded-2xl sm:mt-12 lg:mt-14">
          <div className="relative w-full h-60 sm:h-72 lg:h-80 xl:h-90">
            {products.map((item, i) => (
              <Image
                key={item.src}
                src={item.src}
                alt={item.alt}
                fill
                priority={i === 0}
                aria-hidden={i !== active}
                className={`h-full w-full rounded-2xl object-cover ${item.position} transition-opacity duration-500 ease-out motion-reduce:transition-none ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-700 transition-colors hover:bg-neutral-100"
            aria-label="Previous product"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-8 stroke-2 sm:stroke-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 12H5m0 0l6-6m-6 6l6 6"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-700 transition-colors hover:bg-neutral-100"
            aria-label="Next product"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-8 stroke-2 sm:stroke-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m0 0l-6-6m6 6l-6 6"
              />
            </svg>
          </button>
        </div>
      </div>
    </Section>
  );
}