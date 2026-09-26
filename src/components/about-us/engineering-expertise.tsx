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
                <span className="text-[#1f2428] block">Engineering Expertise.</span>
                <span className="text-[#0052cc] block">Manufacturing Excellence.</span>
              </h2>
            </div>

            <div className="mt-8 flex flex-col gap-6 text-fluid-16 leading-snug text-[#6a737d]">
              <p>
                Established in 2018, SBB Mouldings Pvt. Ltd. is a growing injection moulding and assembly company serving the Automotive, HVAC &amp; Air Conditioning, White Goods, and Industrial sectors.
              </p>
              <p>
                From injection moulded components to complete assemblies, we combine advanced manufacturing infrastructure, high-capacity machinery, experienced professionals, and integrated production capabilities to meet diverse customer requirements.
              </p>
              <p>
                Our focus is to build reliable manufacturing solutions around the product, application, and production requirements of every customer.
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