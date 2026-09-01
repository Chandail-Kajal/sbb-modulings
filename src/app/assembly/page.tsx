
import { CompleteAssemble } from "@/components/assembly/complete-assemble";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import AssemblyProcess from "@/components/assembly/AssemblyProcess";
import { Engineering } from "@/components/assembly/engineering";
import { Packaging } from "@/components/assembly/packaging";
import WhyUs from "@/components/assembly/chooseUS";
import { AssemblyBanner } from "@/components/assembly/assemblyBanner";
import { CassetsSection } from "@/components/assembly/cassetsSection";

export default function Assembly() {
    return (
        <main className="min-h-screen w-full flex flex-col overflow-x-hidden">
            <Header />
            <Section>
                <div className="flex flex-col items-center text-center font-neue  section-container">
                    {/* Eyebrow */}
                    <p className="text-fluid-24 font-light text-neutral-500 tracking-tight mb-2">
                        Assembly
                    </p>

                    {/* Main Headline */}
                    <h2 className="text-fluid-40 font-bold tracking-tight text-neutral-900 leading-tight">
                        Precision Assembly.{' '}
                        <span className="text-[#0052cc]">Built for Production.</span>
                    </h2>

                    {/* Description Paragraphs */}
                    <div className="mt-6 max-w-3xl space-y-4 text-fluid-16 text-neutral-600 font-normal leading-relaxed">
                        <p>
                            SBB Mouldings provides dedicated assembly solutions for automotive
                            and air-conditioning applications, combining moulded components,
                            structured production lines, experienced teams, and controlled
                            manufacturing processes.
                        </p>
                        <p>
                            Our assembly capabilities support projects from initial development
                            through mass production, helping customers achieve consistent quality
                            and reliable production output.
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


            <CompleteAssemble />
            
            <CassetsSection/>
            

           <AssemblyProcess/>
           <Engineering/>
           <Packaging/>
           <WhyUs/>
           <AssemblyBanner/>
            <Footer />
        </main>


    )
}