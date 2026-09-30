/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/refs */
"use client";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ManufacturingCarousel } from "@/components/ManufacturingSection";
import { LogoSection } from "@/components/LogoSection";
import { IndustrialApplications } from "@/components/IndustrialApplications";
import { ComponentsToAssemblies } from "@/components/CapabilitySection";
import { StrategicFacilities } from "@/components/StrategicFacilities";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import Faq from "@/components/faq";

const metricsData = [
  { title: "2018", subtitle: "Established" },
  { title: "45+", subtitle: "Professionals" },
  { title: "2800 Ton", subtitle: "Maximum Machine Capacity" },
  { title: "03", subtitle: "Manufacturing Units" },
  { title: "18+", subtitle: "Large Moulding Machines" },
  { title: "20+", subtitle: "Client Company" },
];

/* ---------- helpers ---------- */

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // animate once
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const reveal = (inView: boolean) =>
  `transition-all duration-700 ease-out motion-reduce:transition-none ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  }`;

/** Animates "45+", "2800 Ton", "03" etc. Years (e.g. 2018) are shown as-is. */
function CountUp({ value, start }: { value: string; start: boolean }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const digits = match ? match[1].length : 0;
  const suffix = match ? match[2] : "";
  const isYear = target >= 1900 && target <= 2100;
  const skip = !match || isYear;

  const [current, setCurrent] = useState(skip ? target : 0);

  useEffect(() => {
    if (skip || !start) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCurrent(target);
      return;
    }

    const duration = 1400;
    let raf: number;
    const t0 = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setCurrent(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, skip, target]);

  if (!match) return <>{value}</>;
  // keep leading zeros, e.g. "03"
  return <>{String(current).padStart(digits, "0")}{suffix}</>;
}

/* ---------- page ---------- */

export default function HomePage() {
  const [expanded, setExpanded] = useState(false);
  const intro = useInView<HTMLDivElement>();
  const story = useInView<HTMLDivElement>();

  return (
    <main className="min-h-screen w-full flex flex-col overflow-x-hidden">
      <Header />

      <Hero />

      <Section>
        <div className="section-container grid grid-cols-1 items-start gap-10 text-left lg:grid-cols-12 lg:gap-16">
          {/* LEFT: heading + intro + story (all paragraphs live here) */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div
              ref={intro.ref}
              className={`flex flex-col gap-5 ${reveal(intro.inView)}`}
            >
              <h4 className="text-fluid-40 font-bold leading-[1.05] text-text-primary">
                Built on Engineering. Driven by{" "}
                <span className="text-primary lg:block">
                  Manufacturing Excellence.
                </span>
              </h4>

              <p className="max-w-[60ch] text-fluid-16 font-medium leading-relaxed text-text-primary/80">
                SBB Mouldings delivers high-precision injection moulding and
                assembly solutions for the automotive, HVAC, white goods and
                industrial sectors — from a 29-machine, 90–2,800 ton fleet across
                three Haryana facilities.
              </p>
            </div>

            <p
              ref={story.ref}
              className={`max-w-[60ch] text-fluid-16 leading-relaxed text-text-primary/80 ${reveal(
                story.inView
              )}`}
            >
              SBB Mouldings Pvt Ltd was formed in 2018 as a 50:50 joint venture
              between SB Felts (India) Pvt Ltd and Panipat Texo Fabs Pvt Ltd,
              bringing together decades of automotive component and industrial
              manufacturing experience under one roof. What began as a single
              injection moulding unit has grown into a three-facility operation
              combining high-tonnage moulding, dedicated assembly lines and
              finished-goods warehousing — built to support demanding,
              high-volume OEM production programs from prototype to mass
              production.
            </p>
          </div>

          {/* RIGHT: metrics panel */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-black/10 bg-white/60 p-3 shadow-sm backdrop-blur sm:p-4 dark:border-white/10 dark:bg-white/5">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {metricsData.map((item, i) => (
                  <MetricBlock key={item.title} index={i} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <LogoSection />

      <ManufacturingCarousel />

      <IndustrialApplications />

      <ComponentsToAssemblies />

      <StrategicFacilities />

       <Faq />

      <CtaBanner />
     

      <Footer />
    </main>
  );
}

const MetricBlock = ({
  title,
  subtitle,
  index = 0,
}: {
  title: string;
  subtitle: string;
  index?: number;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${index * 80}ms` : "0ms" }}
      className={`group relative cursor-default overflow-hidden rounded-xl border border-transparent p-3 text-left font-neue
        hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg
        ${reveal(inView)}`}
    >
      {/* accent bar */}
      <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />

      <div className="flex flex-col items-start gap-1">
        <h4 className="text-fluid-40 font-bold tabular-nums text-text-primary transition-colors duration-300 group-hover:text-primary">
          <CountUp value={title} start={inView} />
        </h4>
        <p className="text-fluid-16 font-normal leading-none text-text-muted">
          {subtitle}
        </p>
      </div>
    </div>
  );
};