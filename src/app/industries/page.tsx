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
                <div className="flex flex-col items-center text-center font-neue  section-container">
                    {/* Eyebrow */}
                    <p className="text-fluid-24 font-light text-neutral-500 tracking-tight mb-2">
                        Industries We Serve
                    </p>

                    {/* Main Headline */}
                    <h2 className="text-fluid-40 font-bold tracking-tight text-neutral-900 leading-relaxed">
                        Built for Automotive. Proven in HVAC. Trusted Across Industrial.
                    </h2>

                    {/* Description Paragraphs */}
                    <div className="mt-6 w-full space-y-4 text-fluid-16 text-neutral-600 font-normal leading-relaxed font-ce">
                        <p>
                            From automotive sub-assemblies to cassette air-conditioning units, our machine range and assembly infrastructure are built to serve multiple demanding <br />industries without compromise.
                        </p>

                    </div>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <button
                            type="button"
                            className="px-6 py-2.5 rounded-lg bg-[#0052cc] text-white text-sm font-medium hover:bg-[#0041a3] transition-colors"
                        >
                            Request A Quote
                        </button>
                    </div>
                </div>
            </Section>

            <IndustriesWeServe/>

            <Section>
                  <div className="w-full">
                    <div className="section-container">
                      <div
                        className="relative w-full rounded-[2.25rem] overflow-hidden px-8 py-12 sm:px-14 sm:py-16 md:px-20 lg:px-25 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg"
                        style={{
                          backgroundImage:
                            "linear-gradient(115deg, #3b82f6 0%, #1e40af 100%)",
                        }}
                      >
                        <div
                          className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-20"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                          }}
                        />
            
                        <div className="flex flex-col gap-4 max-w-xl z-10 text-white">
                          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight leading-tight">
                           Talk to Us About Your Industry
                          </h2>
            
                          <p className="text-lg sm:text-xl font-normal text-white/90 -mt-1">
                            Tell us what you build- we’ll help you find the right solution, capacity and support for your needs.
                          </p>
            
                          
                          <div className="pt-4 flex flex-wrap gap-3.5 items-center">
                            <button className="bg-white text-[#1d4ed8] hover:bg-slate-50 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer">
                              Talk to us
                            </button>
                           
                          </div>
                        </div>
            
                        <div className="flex h-full object-contain">
                          <Image
                            height={1080}
                            width={1280}
                            src={"/manufacturing-capabilities/puzzle.png"}
                            className="h-full w-full object-contain"
                            alt="puzzle"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Section>

            <Footer />
        </div>
    )
}