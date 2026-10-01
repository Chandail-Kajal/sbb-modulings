import Image from "next/image";
import { Section } from "../Section";

export function EngineeringExpertise() {
  return (
    <Section className="relative w-full overflow-hidden bg-[#f8f9fa] max-lg:pt-10 max-lg:pb-0">
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">

          <div className="z-10 flex flex-col lg:col-span-6 xl:col-span-5">
            <div className="flex flex-col font-neue font-semibold">
              <p className="mb-2 text-fluid-24 font-normal leading-snug text-[#595959]">
                About SBB Mouldings
              </p>
              <h2 className="text-fluid-40 font-extrabold leading-[1.1] tracking-tight lg:leading-none">
                <span className="block text-[#1f2428]">Two Manufacturing Legacies,</span>
                <span className="block text-[#0052cc]">One Focused Mission</span>
              </h2>
            </div>

            <div className="mt-6 flex flex-col gap-4 text-fluid-16 leading-snug text-[#6a737d] sm:mt-8 sm:gap-6">
              <p>
                SBB Mouldings was built in 2018 to bring together deep automotive component experience and industrial manufacturing discipline under one purpose-built moulding and assembly operation.
              </p>
              <p>
                SBB Mouldings Pvt Ltd was incorporated in October 2018 as a 50:50 joint venture between SB Felts (India) Pvt Ltd and Panipat Texo Fabs Pvt Ltd, formed to diversify into injection moulding and assembly for the white goods and automotive industries. The company&rsquo;s first unit went into operation in Bawal, Rewari shortly after, and has since grown into a three-facility operation — adding a second unit in 2021 and a third, 4,000 sqm facility in December 2024 dedicated to new moulding capacity, assembly and finished-goods warehousing.
              </p>
            </div>
          </div>

          {/* Right: illustration (centered under the text on mobile, flush bottom-right on desktop) */}
          <div className="relative flex h-[300px] w-full items-end justify-center self-end sm:h-[400px] lg:col-span-6 lg:h-[540px] lg:justify-end xl:col-span-7">
            <div className="relative h-full w-full">
              <Image
                src="/about-us/engineer.png"
                alt="Engineering Expertise"
                fill
                priority
                className="pointer-events-none select-none object-contain object-bottom lg:object-right-bottom"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}