import React from "react";

export function Engineering() {
  return (
    // clip-path keeps the fixed background visible only inside this section
    <section className="relative w-full overflow-hidden [clip-path:inset(0)]">
      {/* Stable background: pinned to the viewport while the page scrolls over it */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assembly/engineeringbg.jpg')" }}
      />

      {/* Section body: scrolls over the fixed image */}
      <div className="relative flex min-h-137.5 w-full flex-col justify-end md:min-h-160 lg:min-h-208">
        {/* Dark gradient at the bottom for text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

        {/* Content aligned at the bottom */}
        <div className="section-container relative z-10 w-full pb-10 pt-32">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:gap-12">
            {/* Left header column */}
            <div className="max-w-xl text-left">
              <p className="mb-1.5 font-neue text-fluid-24 font-medium tracking-normal text-slate-300 drop-shadow">
                Engineering &amp; Project Execution
              </p>
              <h2 className="font-neue text-fluid-40 font-extrabold leading-none tracking-tight text-white drop-shadow-md">
                From Drawing to
              </h2>
              <h2 className="font-neue text-fluid-40 font-extrabold leading-none tracking-tight text-[#2b77c9] drop-shadow-md">
                Mass Production
              </h2>
            </div>

            {/* Right paragraphs column (right-aligned on desktop) */}
            <div className="flex w-full max-w-xl flex-col gap-4 font-ce text-fluid-16 leading-snug text-slate-200/90 drop-shadow lg:text-right">
              <p>
                SBB Mouldings has experience executing complex assembly projects from the drawing stage through mass production.
              </p>
              <p>
                Our experienced engineering and operations professionals work across plant functions to support customer-specific requirements, production setup, process improvement, and ongoing manufacturing operations.
              </p>
              <p className="text-slate-300">
                The company team includes 45+ professionals, including managers, engineers, and supervisors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Engineering;