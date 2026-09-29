"use client"

import React, { useEffect, useState } from "react"
import { Section } from "../Section"

/* ---------- types & data ---------- */

interface CapacityLine {
  name: string
  value: number
  unit: string
  brands?: string[]
}

export interface CardItem {
  id: string
  title: string
  summary: string
  peak?: string
  peakUnit?: string
  lines?: CapacityLine[]
  steps?: string[]
  note?: string
}

const MAX_CAPACITY = 1600

const defaultCardItems: CardItem[] = [
  {
    id: "cassette",
    title: "Cassette AC",
    summary: "Two dedicated cassette lines running in parallel.",
    peak: "800",
    peakUnit: "units/day",
    lines: [
      { name: "Daikin cassette line", value: 800, unit: "units/day" },
      {
        name: "Amber cassette line",
        value: 350,
        unit: "units/day",
        brands: ["Panasonic", "Havells", "Blue Star", "Mitsubishi", "Hitachi"],
      },
    ],
  },
  {
    id: "split-idu",
    title: "Split AC IDU",
    summary: "Indoor unit (IDU) assembly for split air conditioners.",
    peak: "1,400",
    peakUnit: "units/day",
    lines: [{ name: "Indoor unit (IDU) assembly", value: 1400, unit: "units/day" }],
  },
  {
    id: "decorative",
    title: "Decorative Panels",
    summary: "A full assembly-to-pack line, including MRP labelling and barcode printing.",
    steps: ["Assembly", "MRP labelling", "Barcode printing", "Pack"],
    note: "Complete traceability to international standards",
  },
  {
    id: "automotive",
    title: "Automotive",
    summary: "Door-visor sub-assembly for automotive programs.",
    peak: "1,600",
    peakUnit: "car-sets/day",
    lines: [{ name: "Door-visor sub-assembly", value: 1600, unit: "car-sets/day" }],
  },
]

const recentLines = [
  "Panasonic",
  "Voltas",
  "LLOYD",
  "Mitsubishi",
  "Hitachi",
  "Godrej",
  "Blue Star",
]

/* ---------- small pieces ---------- */

/** Bar that animates from 0 to its width whenever it mounts (panel is re-keyed on selection). */
function CapacityBar({ percent, delay = 0 }: { percent: number; delay?: number }) {
  const [w, setW] = useState(0)

  useEffect(() => {
    const id = requestAnimationFrame(() => setW(percent))
    return () => cancelAnimationFrame(id)
  }, [percent])

  return (
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/15">
      <div
        className="h-full rounded-full bg-white transition-[width] duration-1000 ease-out motion-reduce:transition-none"
        style={{ width: `${w}%`, transitionDelay: `${delay}ms` }}
      />
    </div>
  )
}

function StepFlow({ steps }: { steps: string[] }) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <ol className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
      {steps.map((step, i) => {
        const on = hovered === i
        return (
          <li
            key={step}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="relative flex flex-1 items-center gap-3 sm:flex-col sm:items-start sm:gap-4"
          >
            {/* connector line */}
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[19px] top-10 h-[calc(100%-2rem)] w-px bg-white/25 sm:left-10 sm:top-[19px] sm:h-px sm:w-[calc(100%-2rem)]"
              />
            )}
            <span
              className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-all duration-300 motion-reduce:transition-none ${
                on
                  ? "scale-110 border-white bg-white text-[#0052cc]"
                  : "border-white/40 bg-white/10 text-white"
              }`}
            >
              {i + 1}
            </span>
            <span
              className={`text-fluid-16 font-semibold leading-tight transition-colors duration-300 ${
                on ? "text-white" : "text-white/80"
              }`}
            >
              {step}
            </span>
          </li>
        )
      })}
    </ol>
  )
}

/* ---------- main component ---------- */

export interface CardsProps {
  items?: CardItem[]
  onSelect?: (item: CardItem) => void
}

export function CassetsSection({ items = defaultCardItems, onSelect }: CardsProps) {
  const [active, setActive] = useState(0)
  const current = items[active]

  const select = (i: number) => {
    setActive(i)
    onSelect?.(items[i])
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault()
      select((active + 1) % items.length)
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault()
      select((active - 1 + items.length) % items.length)
    }
  }

  return (
    <div className="relative">
      <Section>
        <div className="flex flex-col gap-12 sm:gap-16 section-container">
          {/* Header */}
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
              <p className="font-semibold text-neutral-900">
                SBB Mouldings runs dedicated cassette and split AC assembly lines:
              </p>
              <p>
                SBB Mouldings has developed dedicated assembly capabilities for Cassette
                AC applications, including complex decorative panel assembly programs.
              </p>
            </div>
          </div>

          {/* Selector + detail panel */}
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Line selector */}
            <div
              role="tablist"
              aria-orientation="vertical"
              onKeyDown={onKeyDown}
              className="flex flex-col gap-3 lg:col-span-5"
            >
              {items.map((item, i) => {
                const isActive = i === active
                return (
                  <button
                    key={item.id}
                    id={`line-tab-${item.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="line-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => select(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border px-5 py-5 text-left font-ce outline-none transition-all duration-300 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052cc] ${
                      isActive
                        ? "border-[#0052cc] bg-white shadow-[0_8px_20px_rgba(3,70,148,0.18)] lg:translate-x-2"
                        : "border-[#e2e8f0] bg-white shadow-[0_3px_10px_rgba(0,0,0,0.06)] hover:border-slate-300"
                    }`}
                  >
                    {/* accent bar */}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-0 h-full w-1 origin-top bg-[#0052cc] transition-transform duration-300 motion-reduce:transition-none ${
                        isActive ? "scale-y-100" : "scale-y-0"
                      }`}
                    />

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 ${
                        isActive ? "bg-[#0052cc] text-white" : "bg-slate-100 text-[#1e293b]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-fluid-24 font-bold leading-tight text-[#1e293b]">
                      {item.title}
                    </span>

                    {item.peak ? (
                      <span className="flex shrink-0 flex-col items-end leading-none">
                        <span
                          className={`text-fluid-24 font-bold tabular-nums transition-colors duration-300 ${
                            isActive ? "text-[#0052cc]" : "text-[#1e293b]"
                          }`}
                        >
                          {item.peak}
                        </span>
                        <span className="mt-1 text-xs text-slate-500">{item.peakUnit}</span>
                      </span>
                    ) : (
                      <span
                        className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-300 ${
                          isActive ? "bg-[#0052cc] text-white" : "bg-slate-100 text-[#1e293b]"
                        }`}
                      >
                        Full line
                      </span>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Detail panel */}
            <div
              id="line-panel"
              role="tabpanel"
              aria-labelledby={`line-tab-${current.id}`}
              aria-live="polite"
              className="relative overflow-hidden rounded-3xl p-6 font-ce text-white shadow-[0_8px_20px_rgba(3,70,148,0.35)] sm:p-8 lg:col-span-7"
              style={{
                background: "radial-gradient(ellipse at top, #2b77c9 0%, #1555a3 55%, #083c7b 100%)",
              }}
            >
              {/* top gloss */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

              {/* re-keyed so bars and content re-animate on each selection */}
              <div key={current.id} className="flex h-full flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                    Assembly line
                  </span>
                  <h3 className="text-fluid-40 font-bold leading-tight">{current.title}</h3>
                  <p className="max-w-md text-fluid-16 leading-snug text-white/85">
                    {current.summary}
                  </p>
                </div>

                {/* Capacity lines */}
                {current.lines && (
                  <div className="flex flex-col gap-7">
                    {current.lines.map((line, i) => (
                      <div key={line.name} className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-1">
                          <span className="text-fluid-16 font-semibold">{line.name}</span>
                          <span className="flex items-baseline gap-2">
                            <span className="text-xs text-white/70">up to</span>
                            <span className="text-fluid-40 font-bold leading-none tabular-nums">
                              {line.value.toLocaleString("en-US")}
                            </span>
                            <span className="text-sm font-semibold text-white/80">{line.unit}</span>
                          </span>
                        </div>

                        <CapacityBar percent={(line.value / MAX_CAPACITY) * 100} delay={i * 150} />

                        {line.brands && (
                          <ul className="flex flex-wrap gap-2 pt-1">
                            {line.brands.map((b) => (
                              <li
                                key={b}
                                className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold transition-colors duration-300 hover:bg-white hover:text-[#0052cc]"
                              >
                                {b}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                    <p className="text-xs text-white/60">
                      Bars are scaled against the highest line (1,600 per day).
                    </p>
                  </div>
                )}

                {/* Decorative panel flow */}
                {current.steps && (
                  <div className="flex flex-col gap-8">
                    <StepFlow steps={current.steps} />
                    {current.note && (
                      <div className="flex items-center gap-3 self-start rounded-full border border-white/30 bg-white/10 px-4 py-2">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span className="text-sm font-semibold">{current.note}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Recently online lines */}
          <div className="flex flex-col gap-4 rounded-2xl border border-[#e2e8f0] bg-slate-50/70 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="flex items-center gap-3 lg:max-w-md">
              <span className="relative flex h-3 w-3 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0052cc] opacity-40 motion-reduce:animate-none" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#0052cc]" />
              </span>
              <p className="font-ce text-fluid-16 font-semibold leading-snug text-[#1e293b]">
                New cassette AC assembly lines have recently come online for
              </p>
            </div>

            <ul className="flex flex-wrap gap-2">
              {recentLines.map((brand) => (
                <li
                  key={brand}
                  className="cursor-default rounded-full border border-[#e2e8f0] bg-white px-4 py-1.5 font-ce text-sm font-semibold text-[#1e293b] shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-[#1555a3] hover:text-white motion-reduce:transition-none"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}