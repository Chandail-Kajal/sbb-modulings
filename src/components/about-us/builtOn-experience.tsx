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
                <h2 className="text-fluid-40 font-extrabold text-[#212529] tracking-tight font-neue">
                    <span>Two Manufacturing  </span>
                    <span className="text-[#0052cc]">Legacies, </span>
                    <span>One Focused  </span>
                    <span className="text-[#0052cc]">Mission</span>
                </h2>

                <div className="mt-6 sm:mt-8 space-y-4 text-fluid-16 leading-relaxed text-[#928b8b] font-ce">
                    <p>
                        SBB Mouldings was incorporated in{" "}
                        <strong className="font-semibold text-[#6b6868]">October 2018</strong> as a{" "}
                        <strong className="font-semibold text-[#6b6868]">50:50 joint venture</strong> between{" "}
                        <strong className="font-semibold text-[#6b6868]">SB Felts</strong> and{" "}
                        <strong className="font-semibold text-[#6b6868]">Panipat Texo Fabs Pvt. Ltd.</strong>
                    </p>

                    <p>
                        formed to diversify into injection moulding and assembly for the white goods and automotive industries. 
                        
                    </p>

                    <p>
                        The company&lsquo;s first unit went into operation in Bawal, Rewari shortly after, and has since grown into a three-facility operation — adding a second unit in 2021 and a third, 4,000 sqm facility in December 2024 dedicated to new moulding capacity, assembly and finished-goods warehousing.
                    </p>
                </div>
            </div>
        </Section>
    );
}