import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Certificate } from "@/components/quality/certificates";
import { Consistency } from "@/components/quality/consistency";
import { QualityBanner } from "@/components/quality/qualityBanner";
import { Section } from "@/components/Section";

export default function Quality() {
    return (
        <div>
            <Header />
            <Section>
                <div className="flex flex-col items-center text-center font-neue  section-container">
                    {/* Eyebrow */}
                    <p className="text-fluid-24 font-light text-neutral-500 tracking-tight mb-2">
                        Quality & Certifications
                    </p>

                    {/* Main Headline */}
                    <h2 className="text-fluid-40 font-bold tracking-tight text-neutral-900 leading-relaxed">
                        Quality You Can Verify
                    </h2>

                    {/* Description Paragraphs */}
                    <div className="mt-6 w-full space-y-4 text-fluid-16 text-neutral-600 font-normal leading-relaxed font-ce">
                        <p>
                            Every part that leaves SBB Mouldings is backed by certified quality systems, in-process inspection and full traceability — built for OEM and Tier-1 <br/> audit standards, not just to pass them.
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
            <Certificate/>
            <Consistency/>
            <Section>
                <div className="flex flex-col items-center text-center font-neue  section-container">
                    
                    <h2 className="text-fluid-40 font-bold tracking-tight text-neutral-900 leading-tight">
                        Why it {' '}
                        <span className="text-[#0052cc]">matters to you</span>
                    </h2>
                    {/* Description Paragraphs */}
                    <div className="mt-6 w-full space-y-4 text-fluid-16 text-neutral-600 font-normal leading-relaxed font-ce">
                        <p>
                           For OEMs and Tier-1 buyers evaluating a new moulding or assembly partner, certification is table stakes — traceability and audit-readiness are what actually reduce risk in your supply chain.
                           <br/> Our quality systems are built to make a vendor audit straightforward, not a scramble.
                        </p>

                    </div>

                    
                </div>
            </Section>
            <QualityBanner/>
            <Footer />
        </div>
    )
}