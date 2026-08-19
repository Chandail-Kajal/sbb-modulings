import Image from "next/image";
import { Section } from "./Section";

export const CtaBanner = () => {
  return (
    <Section>
      <div className="relative w-full bg-linear-90 from-primary-light to-primary rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
        <div className="flex flex-col gap-4 max-w-xl z-10 text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            {"Let's Build the Next Generation of Components Together."}
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-md">
            Short supporting text focused on OEM and manufacturing partnerships.
          </p>
          <div className="pt-2">
            <button className="bg-white text-primary hover:bg-gray-100 font-semibold text-sm px-6 py-3 rounded-lg transition-colors cursor-pointer shadow-md">
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
    </Section>
  );
};
