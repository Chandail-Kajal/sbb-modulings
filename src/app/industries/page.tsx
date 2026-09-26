import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IndustriesWeServe } from "@/components/industries/industries-weserve";
import { Section } from "@/components/Section";
import Image from "next/image";

export default function Industries() {
  return (
    <div>
      <Header />

      <Section>
        <div className="flex flex-col items-center text-center font-neue section-container">
          <p className="text-fluid-29 font-light text-neutral-500 tracking-tight mb-2">
            Industries We Serve
          </p>

          <h2 className="text-fluid-47 font-bold tracking-tight text-neutral-900 leading-none max-w-6xl">
            Built for Automotive. Proven in HVAC. Trusted Across Industrial.
          </h2>

          <div className="mt-6 w-full space-y-4 text-fluid-18 text-neutral-600 font-normal max-w-6xl leading-relaxed font-ce">
            <p>
              From automotive sub-assemblies to cassette air-conditioning units,
              our machine range and assembly infrastructure are built to serve
              multiple demanding industries without compromise.
            </p>
          </div>

          <div className="mt-8">
            <button
              type="button"
              className="px-6 py-3 rounded-xl bg-[#0052cc] text-white text-fluid-16 font-medium hover:bg-[#0041a3] transition-colors"
            >
              Request A Quote
            </button>
          </div>
        </div>
      </Section>

      <IndustriesWeServe />

      <Section>
        <div className="section-container">
          <div
            className="relative w-full rounded-4xl overflow-hidden p-8 sm:px-12 sm:py-6 lg:py-30 lg:px-30 flex flex-col md:flex-row justify-between items-center gap-8"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #4b92e7 0%, #1562b8 100%)",
              boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-25"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="flex flex-col gap-6 lg:gap-10 z-10 text-white max-w-3xl">
              <div className="flex flex-col lg:gap-4 gap-2">
                <h2 className="text-fluid-47 font-bold leading-none font-neue">
                  Talk to Us About Your Industry
                </h2>
                <p className="text-fluid-18 text-white/80 leading-snug font-ce">
                  Tell us what you build- we’ll help you find the right
                  solution, capacity and support for your needs.
                </p>
              </div>
              <div className="pt-2 flex sm:flex-row flex-col gap-4">
                <button className="bg-white text-[#0057B8] hover:bg-gray-100 font-semibold text-fluid-16 px-6 py-3 rounded-xl transition-colors cursor-pointer shadow-md">
                  Talk to us
                </button>
              </div>
            </div>

            <div className="relative w-full md:w-1/3 h-48 sm:h-64 md:h-full min-h-50 flex items-center justify-center z-10">
              <div
                className="bg-white w-full h-64"
                style={{
                  WebkitMaskImage:
                    "url('/manufacturing-capabilities/puzzle.png')",
                  maskImage: "url('/manufacturing-capabilities/puzzle.png')",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskPosition: "right",
                  maskPosition: "right",
                }}
              />
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
