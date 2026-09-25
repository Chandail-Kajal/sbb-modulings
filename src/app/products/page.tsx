import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";

export default function Products(){
    return (
        <div>
            <Header/>
             <Section>
                <div className="flex flex-col items-center text-center font-neue  section-container">
                    {/* Eyebrow */}
                    <p className="text-fluid-24 font-light text-neutral-500 tracking-tight mb-2">
                       Products / Our Work
                    </p>

                    {/* Main Headline */}
                    <h2 className="text-fluid-40 font-bold tracking-tight text-neutral-900 leading-relaxed">
                      What We Build
                    </h2>

                    {/* Description Paragraphs */}
                    <div className="mt-6 w-full space-y-4 text-fluid-16 text-neutral-600 font-normal leading-relaxed font-ce">
                        <p>
                            A look at the components and assemblies moving through our facilities — from single moulded automotive parts to fully assembled, box-packed <br/>cassette AC units.
                        </p>

                    </div>

                    {/* Product Image */}
                    <div className="relative mt-10 w-full overflow-hidden rounded-2xl sm:mt-12 lg:mt-14">
                      <div className="relative h-[280px] w-full sm:h-[400px] lg:h-[520px] xl:h-[400px]">
                        <Image
                          src="/products/ac.jpg"
                          alt="Cassette AC unit product"
                          fill
                          className="object-cover object-center  rounded-2xl"
                          priority
                        />
                      </div>
                    </div>

                    {/* Arrow Navigation Buttons */}
                    <div className="mt-8 flex items-center gap-4">
                      <button
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 transition-colors hover:bg-neutral-100 hover:border-neutral-400"
                        aria-label="Previous product"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l6-6m-6 6l6 6" />
                        </svg>
                      </button>
                      <button
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 transition-colors hover:bg-neutral-100 hover:border-neutral-400"
                        aria-label="Next product"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                        </svg>
                      </button>
                    </div>

                   
                </div>
            </Section>
            
            <Footer/>
        </div>
    )
}
