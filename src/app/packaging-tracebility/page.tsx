import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IntegratedPackaging } from "@/components/packaging-tracebility/integrated-packaging";
import { ProductionProcess } from "@/components/packaging-tracebility/production-process";
import Support from "@/components/packaging-tracebility/support";
import { Section } from "@/components/Section";

export default function PackagingTracebility() {
    return (
        <div>
            <Header />
            <Section>
                <div className="flex flex-col items-center text-center font-neue  section-container">
                    <p className="text-fluid-29 font-light text-neutral-500 tracking-tight mb-2">
                        Packaging & Traceability
                    </p>

                    {/* Main Headline */}
                    <h2 className="text-fluid-47 font-bold tracking-tight text-neutral-900 leading-tight">
                        From Production to Delivery, {' '}
                        <span className="text-[#0052cc]">Every Unit Accounted For.</span>
                    </h2>

                    {/* Description Paragraphs */}
                    <div className="mt-6 max-w-3xl space-y-4 text-fluid-18 text-neutral-600 font-normal leading-relaxed">
                        <p>
                            At SBB Mouldings, packaging is an integrated part of the production process.
                            Our assembly operations support complete box-packed units, along with MRP labelling, barcode printing, and product traceability requirements.


                        </p>
                        <p>
                            By combining production, assembly, packaging, and identification processes,
                            we help ensure that finished products are prepared consistently for the next stage of the supply chain.
                        </p>
                    </div>

                   
                   
                </div>
            </Section>
            <IntegratedPackaging/>
            <ProductionProcess/>
            <Support/>
            <Footer/>
        </div>
    )
}