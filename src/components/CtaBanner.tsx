
export const CtaBanner = () => {
  return (
   <div className="py-22">
      <div className="section-container">
        {/* Main Banner Card */}
        <div
          className="relative w-full rounded-4xl overflow-hidden p-8 sm:px-12 sm:py-6 lg:px-18 lg:py-14 flex flex-col md:flex-row justify-between items-center gap-8"
          style={{
            // 1. Linear Gradient (#569FF2 -> #0057B8)
            backgroundImage: "linear-gradient(to right, #569FF2, #0057B8)",
            // 2. Drop Shadow (X: 4, Y: 4, Blur: 8, Spread: 0, #000000 @ 25%)
            boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* 3. Monotone Noise Overlay (SVG feTurbulence filter at 25% opacity) */}
          <div
            className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-25"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Content */}
          <div className="flex flex-col gap-4 max-w-xl z-10 text-white">
            <h2 className="text-fluid-32 font-bold leading-none">
              {"Let's Build the Next Generation of Components Together."}
            </h2>
            <p className="text-fluid-16 text-white/80 leading-snug max-w-lg">
              Short supporting text focused on OEM and manufacturing
              partnerships.
            </p>
            <div className="pt-2">
              <button className="bg-white text-[#0057B8] hover:bg-gray-100 font-semibold text-fluid-16 px-6 py-3 rounded-lg transition-colors cursor-pointer shadow-md">
                Request A Quote
              </button>
            </div>
          </div>

          {/* Masked Graphic */}
          <div className="relative w-full md:w-1/2 h-48 sm:h-64 md:h-full min-h-50 flex items-center justify-center z-10">
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
    </div>
  );
};