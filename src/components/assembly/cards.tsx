"use client"

import React from "react"

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

export function Cards({ items = defaultCardItems, onSelect }: CardsProps) {
  return (
    <div className="w-full py-16 bg-white select-none overflow-hidden">
      <div className="relative w-full">
        {/* Conveyor Belt Track Line */}
        <div 
          className="absolute inset-x-0 top-[48px] h-[52px] pointer-events-none z-0 opacity-80"
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

        {/* Card Tabs Container */}
        <div className="relative z-10 flex flex-nowrap items-center justify-center gap-3.5 px-4 max-w-7xl mx-auto overflow-x-auto no-scrollbar">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect?.(item)}
              className="group relative flex items-center justify-center shrink-0 w-[160px] h-[78px] px-3.5 rounded-2xl text-center font-bold text-xs tracking-tight cursor-pointer outline-none overflow-hidden transition-all duration-300 ease-out border border-[#e2e8f0] shadow-[0_3px_10px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(3,70,148,0.35)] hover:border-transparent"
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
  )
}

export default Cards