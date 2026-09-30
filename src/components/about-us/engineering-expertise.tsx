import Image from "next/image";
import { Section } from "../Section";

export function EngineeringExpertise() {
  return (
    <Section className="relative w-full bg-[#f8f9fa] overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-6 xl:col-span-5 flex flex-col z-10">
            <div className="flex flex-col font-neue font-semibold">
              <p className="text-fluid-24 font-normal text-[#595959] leading-snug mb-2">
                About SBB Mouldings
              </p>
              <h2 className="text-fluid-40 font-extrabold tracking-tight leading-none">
                <span className="text-[#1f2428] block">Two Manufacturing Legacies, </span>
                <span className="text-[#0052cc] block">One Focused Mission</span>
              </h2>
            </div>

            <div className="mt-8 flex flex-col gap-6 text-fluid-16 leading-snug text-[#6a737d]">
              <p>
               SBB Mouldings was built in 2018 to bring together deep automotive component experience and industrial manufacturing discipline under one purpose-built moulding and assembly operation.
               </p>
              <p>
               SBB Mouldings Pvt Ltd was incorporated in October 2018 as a 50:50 joint venture between SB Felts (India) Pvt Ltd and Panipat Texo Fabs Pvt Ltd, formed to diversify into injection moulding and assembly for the white goods and automotive industries. The company&lsquo;s first unit went into operation in Bawal, Rewari shortly after, and has since grown into a three-facility operation — adding a second unit in 2021 and a third, 4,000 sqm facility in December 2024 dedicated to new moulding capacity, assembly and finished-goods warehousing.
              </p>
              
            </div>
          </div>

          {/* Right: Illustration pinned flush to the bottom-right edge */}
          <div className="lg:col-span-6 xl:col-span-7 relative w-full h-[360px] sm:h-[460px] lg:h-[540px] flex items-end justify-end self-end">
            <div className="relative w-full h-full ">
              <Image
                src="/about-us/engineer.png"
                alt="Engineering Expertise"
                fill
                priority
                className="object-contain object-bottom-right pointer-events-none select-none"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}