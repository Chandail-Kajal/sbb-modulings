import React from "react";

export function Engineering() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image Container with Dynamic Aspect Ratio */}
      <div
        className="relative w-full min-h-137.5 md:min-h-160 lg:min-h-208 bg-contain bg-center flex flex-col justify-end"
        style={{
          backgroundImage: "url('/assembly/engineeringbg.jpg')",
        }}
      >
        {/* Subtle Dark Gradient Overlay at the bottom to ensure high contrast */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

        {/* Content Container aligned at the bottom */}
        <div className="relative z-10 w-full section-container pb-10 pt-32 section-container">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-8 lg:gap-12">
            
            {/* Left Header Column */}
            <div className="max-w-xl text-left">
              <p className="text-fluid-24  font-medium text-slate-300 tracking-normal mb-1.5 drop-shadow font-neue">
                Engineering &amp; Project Execution
              </p>
              <h2 className="text-fluid-40 font-extrabold tracking-tight text-white leading-none drop-shadow-md font-neue">
                From Drawing to
              </h2>
              <h2 className="text-fluid-40 font-extrabold tracking-tight text-[#2b77c9] leading-none drop-shadow-md font-neue">
                Mass Production
              </h2>
            </div>

            {/* Right Paragraphs Column (Right-Aligned on Desktop) */}
            <div max-w-xl text-right>
            <div className="max-w-xl w-full  text-slate-200/90 text-fluid-16 leading-snug  drop-shadow font-ce flex flex-col gap-4 text-right">
              <p>
                SBB Mouldings has experience executing complex assembly projects from the drawing stage through mass production.
              </p>
              <p>
                Our experienced engineering and operations professionals work across plant functions to support customer-specific requirements, production setup, process improvement, and ongoing manufacturing operations.
              </p>
              <p className="text-slate-300 text-fluid-16 font-ce">
                The company team includes 45+ professionals, including managers, engineers, and supervisors.
              </p>
            </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Engineering;