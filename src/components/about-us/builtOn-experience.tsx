import Image from "next/image";
import { Section } from "../Section";

export function BuiltOnExperience() {
    return (
        <Section className="relative overflow-hidden py-16 sm:py-24" disablePaddingY>
            <div className="pointer-events-none absolute inset-0 z-0">
                <Image
                    src="/map-bg.jpg"
                    alt="Abstract background pattern"
                    fill
                    className="object-cover h-full opacity-15"
                    priority
                />
            </div>
            <div className="relative z-10 section-container text-center">
                <h2 className="text-fluid-40 font-extrabold text-[#212529] tracking-tight">
                    <span>Built on </span>
                    <span className="text-[#0052cc]">Experience. </span>
                    <span>Driven by </span>
                    <span className="text-[#0052cc]">Capability.</span>
                </h2>

                <div className="mt-6 sm:mt-8 space-y-4 text-fluid-16 leading-relaxed text-[#595959]">
                    <p>
                        SBB Mouldings was incorporated in{" "}
                        <strong className="font-semibold text-[#2b2b2b]">October 2018</strong> as a{" "}
                        <strong className="font-semibold text-[#2b2b2b]">50:50 joint venture</strong> between{" "}
                        <strong className="font-semibold text-[#2b2b2b]">SB Felts</strong> and{" "}
                        <strong className="font-semibold text-[#2b2b2b]">Panipat Texo Fabs Pvt. Ltd.</strong>
                    </p>

                    <p>
                        Since its establishment, the company has steadily expanded its manufacturing infrastructure and production capabilities.
                        <br className="hidden sm:inline" />
                        {" "}What began with an initial injection moulding facility has grown into a multi-facility manufacturing operation supporting injection moulding, assembly, and finished goods warehousing.
                    </p>

                    <p>
                        Today, SBB Mouldings operates with 45+ professionals across management, engineering, supervision, and manufacturing functions.
                    </p>
                </div>
            </div>
        </Section>
    );
}