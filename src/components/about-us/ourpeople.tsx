import Image from "next/image";
import { Section } from "../Section";

export function OurPeople() {
  return (
    <Section className="relative overflow-hidden py-16 sm:py-24" disablePaddingY>
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/map-bg.jpg"
          alt="Abstract background pattern"
          fill
          className="object-cover h-full opacity-15"
          priority
        />
      </div>

      {/* 3-Column Content Layout */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <span className="text-sm sm:text-base font-normal text-[#666666]">
              Our People
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1a1a] tracking-tight leading-tight">
              Experienced People.<br />
              Strong Manufacturing.
            </h2>
          </div>

          {/* Center Column: Facility Image */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[4/5] overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/about-us/ourpeople.jpg" // Replace with your image path
                alt="SBB Mouldings manufacturing facility floor"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Paragraphs */}
          <div className="lg:col-span-4 space-y-5 text-xs sm:text-sm leading-relaxed text-[#555555]">
            <p>
              Our manufacturing capabilities are supported by a team of 45+
              professionals, including managers, engineers, supervisors, and
              manufacturing personnel.
            </p>

            <p>
              Our teams work together across engineering, production, assembly,
              quality, and operations to maintain an efficient and responsive
              manufacturing environment.
            </p>

            <p>
              We believe that the strength of a manufacturing organization is
              not defined only by its machines, but by the people who operate,
              manage, and continuously improve its processes.
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
}