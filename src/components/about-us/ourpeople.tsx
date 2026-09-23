import Image from "next/image";
import { Section } from "../Section";

export function OurPeople() {
  return (
    <Section
      className="relative overflow-hidden"
      // disablePaddingY
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/map-bg.jpg"
          alt="Abstract background pattern"
          fill
          className="object-cover h-full opacity-35"
          priority
        />
      </div>

      <div className="relative z-10 section-container">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <span className="text-fluid-24 font-normal text-[#666666]">
              Our People
            </span>
            <h2 className="mt-2 text-fluid-40 font-extrabold text-[#3B3B3B] tracking-tight leading-none">
              Experienced People.
              <br />
              Strong Manufacturing.
            </h2>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full sm:max-w-100 h-60 xl:h-85 lg:h-75 sm:h-65 overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/about-us/ourpeople.jpg"
                alt="SBB Mouldings manufacturing facility floor"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-5 text-fluid-16 leading-snug text-[#555555]">
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
