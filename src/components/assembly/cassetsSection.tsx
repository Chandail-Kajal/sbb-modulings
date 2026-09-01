"use client"

import React from "react"
import { Section } from "../Section"

export interface CardItem {
  id: string
  title: string
}

const defaultCardItems: CardItem[] = [
  { id: "cassette", title: "Cassette AC" },
  { id: "split-idu", title: "Split AC IDU" },
  { id: "decorative", title: "Decorative Panels" },
  { id: "box-packed", title: "Complete Box-\nPacked Units" },
  { id: "components", title: "AC Components" },
]

export interface CardsProps {
  items?: CardItem[]
  onSelect?: (item: CardItem) => void
}

export function CassetsSection({ items = defaultCardItems, onSelect }: CardsProps) {
  return (
    <div className="relative">

      <Section>
        <div className="flex flex-col gap-16 section-container overflow-x-visible">
          <div className="flex sm:flex-row flex-col justify-between items-start gap-6">
            <div className="sm:max-w-lg w-full mx-auto sm:mx-0">
              <p className="text-fluid-24 font-light text-neutral-500 tracking-tight mb-2">
                Air Conditioning Assembly
              </p>
              <h2 className="text-fluid-40 font-bold tracking-tight text-neutral-900 leading-tight">
                Specialized Cassette <br />
                <span className="text-[#0052cc]">AC Assembly</span>
              </h2>
            </div>

            <div className="sm:max-w-[42%] w-full font-ce text-fluid-16 text-neutral-600 sm:text-right leading-relaxed space-y-4">
              <p>
                SBB Mouldings has developed dedicated assembly capabilities for Cassette
                AC applications, including complex decorative panel assembly programs.
              </p>
              <p>
                Our operations support complete assembly requirements involving multiple
                components and sub-assemblies, with production processes structured
                around customer-specific requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full py-16 bg-white select-none overflow-hidden">
          <div className="relative w-full">

            <div className="relative z-10 grid lg:grid-cols-5 no-scrollbar gap-4">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelect?.(item)}
                  className="group relative flex items-center justify-center shrink-0 w-full  px-3.5 py-6 rounded-2xl text-center font-bold font-ce text-fluid-24 cursor-pointer outline-none overflow-hidden transition-all duration-300 ease-out border border-[#e2e8f0] shadow-[0_3px_10px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(3,70,148,0.35)] hover:border-transparent"
                >
                  {/* 1. Default State: Pure #FFFFFF for all cards */}
                  <div className="absolute inset-0 z-0 bg-[#FFFFFF] transition-opacity duration-300 group-hover:opacity-0" />

                  {/* 2. Hover State: Radial Blue Gradient overlay */}
                  <div
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
                    style={{
                      background: "radial-gradient(ellipse at top, #2b77c9 0%, #1555a3 55%, #083c7b 100%)",
                    }}
                  />

                  {/* 3. Subtle top gloss border */}
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 group-hover:via-white/50 to-transparent z-10 pointer-events-none transition-colors duration-300" />

                  {/* 4. Text Content: Dark by default, turns white on hover */}
                  <span className="relative z-20 whitespace-pre-line leading-[1.25] text-[#1e293b] group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 bottom-35 h-20 pointer-events-none z-0 opacity-80"
          style={{
            backgroundImage: `url("/assembly/cardbus.png")`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            backgroundSize: "auto 100%",
          }}
        >
          {/* Fallback rail line */}
          <div className="w-full h-full border-y border-slate-200 bg-slate-100/40" />
        </div>
      </Section>
    </div>
  )
}

