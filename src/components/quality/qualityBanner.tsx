import { Section } from "../Section";

export const QualityBanner = () => {
  return (
    <Section disablePaddingY className="pb-(--section-y)">
      <div className="section-container">
        <div
          className="relative w-full rounded-3xl sm:rounded-4xl overflow-hidden p-6 sm:px-10 sm:py-8 lg:px-16 lg:py-12 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #4b92e7 0%, #1562b8 100%)",
            boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-25"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 max-w-xl z-10 text-white w-full md:w-auto text-left">
            <h2 className="text-fluid-40 font-bold leading-tight font-neue">
              Access Our Quality Documentation
            </h2>

            <p className="text-fluid-16 text-white/80 leading-relaxed max-w-lg font-ce">
              Download our certification and quality documentation, or schedule
              a facility audit to see our systems in action.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
              <button className="w-full sm:w-auto text-center bg-white text-[#0057B8] hover:bg-gray-100 font-semibold text-fluid-16 px-5 py-3 rounded-xl transition-colors cursor-pointer shadow-md">
                Request Our Quality Documentation
              </button>
              <button className="w-full sm:w-auto text-center bg-white text-[#0057B8] hover:bg-gray-100 font-semibold text-fluid-16 px-5 py-3 rounded-xl transition-colors cursor-pointer shadow-md">
                Schedule a Facility Audit
              </button>
            </div>
          </div>

          {/* Masked Graphic */}
          <div className="relative w-full md:w-1/2 h-40 sm:h-52 md:h-64 flex items-center justify-center z-10">
            <div
              className="bg-white w-full h-full"
              style={{
                WebkitMaskImage: "url('/CtaBanner.png')",
                maskImage: "url('/CtaBanner.png')",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
