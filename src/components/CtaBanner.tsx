import Image from "next/image";
import { Section } from "./Section";

export const CtaBanner = () => {
  return (
    <Section>
      <div className="section-container">
        <div className="relative w-full bg-linear-to-r from-primary-light to-primary rounded-4xl overflow-hidden p-8 sm:px-12 sm:py-6 lg:px-18 lg:py-8 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
          <div className="flex flex-col gap-4 max-w-xl z-10 text-white">
            <h2 className="text-fluid-32 font-bold leading-none">
              {"Let's Build the Next Generation of Components Together."}
            </h2>
            <p className="text-fluid-16 text-white/80 leading-snug max-w-lg">
              Short supporting text focused on OEM and manufacturing
              partnerships.
            </p>
            <div className="pt-2">
              <button className="bg-white text-primary hover:bg-gray-100 font-semibold text-fluid-16 px-6 py-3 rounded-lg transition-colors cursor-pointer shadow-md">
                Request A Quote
              </button>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 h-48 sm:h-64 md:h-full min-h-50 flex items-center justify-center">
            <div
              className="bg-white w-full h-64"
              style={{
                WebkitMaskImage: "url('/CtaBanner.png')",
                maskImage: "url('/CtaBanner.png')",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskPosition: "right",
                maskPosition: "right",
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
