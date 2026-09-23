import Image from "next/image";
import { Section } from "../Section";

interface StepItem {
  id: string;
  title: string;
  desc: string;
  defaultActive?: boolean;
  // Precise large screen coordinate placement (% based from top/left)
  desktopPos: string;
}

const steps: StepItem[] = [
  {
    id: "01",
    title: "Understanding",
    desc: "We understand the component, application, and production requirement.",
    defaultActive: true,
    // Step 1: Bottom left, directly underneath the text block
    desktopPos: "lg:left-[8%] lg:top-[53%] xl:left-[8.5%] xl:top-[54%]",
  },
  {
    id: "02",
    title: "Engineering",
    desc: "We evaluate the appropriate manufacturing and machine capability.",
    // Step 2: Elevated between 1 and 3
    desktopPos: "lg:left-[27.5%] lg:top-[33%] xl:left-[28%] xl:top-[33.5%]",
  },
  {
    id: "03",
    title: "Manufacturing",
    desc: "We use our injection moulding and production infrastructure to manufacture the required components.",
    // Step 3: Highest elevated apex
    desktopPos: "lg:left-[47%] lg:top-[12%] xl:left-[47.5%] xl:top-[12.5%]",
  },
  {
    id: "04",
    title: "Assembly",
    desc: "Where required, components can move into dedicated assembly operations.",
    // Step 4: Vertically below Manufacturing
    desktopPos: "lg:left-[47.5%] lg:top-[54%] xl:left-[48%] xl:top-[54.5%]",
  },
  {
    id: "05",
    title: "Packaging & Traceability",
    desc: "Finished products can be packaged, labelled, and managed according to applicable customer requirements.",
    // Step 5: Right anchor aligned with Engineering height
    desktopPos: "lg:left-[67%] lg:top-[33%] xl:left-[67.5%] xl:top-[33.5%]",
  },
];

export function OurApproach() {
  return (
    <Section className="relative overflow-hidden py-12 sm:py-16 lg:py-0 bg-white" disablePaddingY>
      {/* Container calibrated for ultrawide 16:9 ratio letterbox canvasing */}
      <div className="relative mx-auto w-full max-w-[1780px] 2xl:max-w-[1920px] px-6 sm:px-10 lg:px-12 xl:px-16">
        
        {/* ========================================================================= */}
        {/* LARGE & ULTRAWIDE CANVAS (lg and above): True 1:1 Aspect Canvas Match      */}
        {/* ========================================================================= */}
        <div className="relative hidden lg:block w-full h-[760px] xl:h-[860px] 2xl:h-[940px]">
          
          {/* Header Block: Placed top-left precisely matching screenshot canvas[cite: 7] */}
          <div className="absolute left-[8.5%] top-[12%] max-w-[430px] z-10 select-none">
            <span className="block text-[21px] xl:text-[23px] font-light text-[#7a7a7a] tracking-tight">
              Our Approach
            </span>
            <h2 className="mt-1 text-[38px] xl:text-[44px] 2xl:text-[48px] font-extrabold text-[#22252a] leading-[1.08] tracking-[-0.03em]">
              Understand. Engineer.<br />
              Manufacture. Deliver.
            </h2>
            <p className="mt-5 text-[13.5px] xl:text-[14.5px] leading-[1.5] text-[#737373] max-w-[280px]">
              We believe effective manufacturing starts with understanding the requirement.
            </p>
          </div>

          {/* 5 Hexagons: Sized up with direct border color highlighting on hover */}
          {steps.map((step) => (
            <div
              key={step.id}
              className={`group absolute w-[290px] xl:w-[335px] 2xl:w-[370px] aspect-[1/1.12] transition-transform duration-300 hover:scale-[1.03] z-20 cursor-pointer ${step.desktopPos}`}
            >
              {/* Hexagon Image Container: Light blue by default, shifts to deep royal blue on active / hover */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/about-us/ourapproach.png"
                  alt={`${step.title} step`}
                  fill
                  className={`object-contain transition-all duration-300 pointer-events-none select-none ${
                    step.defaultActive
                      ? "filter hue-rotate-[0deg] saturate-[3] contrast-[1.25] brightness-[0.85] drop-shadow-[0_16px_28px_rgba(0,82,204,0.25)]"
                      : "opacity-95 filter hue-rotate-0 saturate-100 brightness-100 group-hover:saturate-[3] group-hover:contrast-[1.25] group-hover:brightness-[0.85] group-hover:drop-shadow-[0_16px_28px_rgba(0,82,204,0.25)]"
                  }`}
                  priority
                />
              </div>

              {/* Text: Padded deeply to fit safely inside the hexagon geometry[cite: 7] */}
              <div className="relative z-10 h-full w-full px-12 xl:px-14 2xl:px-16 flex flex-col items-center justify-center text-center select-none pointer-events-none">
                <h3 className="text-[16px] xl:text-[18px] 2xl:text-[19px] font-bold text-[#0057b7] leading-snug tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-[11.5px] xl:text-[12.5px] 2xl:text-[13px] leading-[1.4] text-[#55595d] max-w-[190px] xl:max-w-[215px] 2xl:max-w-[235px]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* RESPONSIVE FALLBACK (< lg): Tablet and Mobile Fluid Stack                 */}
        {/* ========================================================================= */}
        <div className="block lg:hidden">
          <div className="max-w-xl text-left mb-10">
            <span className="text-lg font-light text-[#7a7a7a]">Our Approach</span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#22252a] leading-tight tracking-tight">
              Understand. Engineer.<br />
              Manufacture. Deliver.
            </h2>
            <p className="mt-3 text-sm text-[#737373] max-w-sm">
              We believe effective manufacturing starts with understanding the requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 justify-items-center">
            {steps.map((step) => (
              <div
                key={step.id}
                className="group relative w-[270px] sm:w-[290px] aspect-[1/1.12] transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/about-us/ourapproach.png"
                    alt={step.title}
                    fill
                    className={`object-contain transition-all duration-300 ${
                      step.defaultActive
                        ? "filter saturate-[3] contrast-[1.25] brightness-[0.85] drop-shadow-[0_12px_22px_rgba(0,82,204,0.2)]"
                        : "group-hover:saturate-[3] group-hover:contrast-[1.25] group-hover:brightness-[0.85] group-hover:drop-shadow-[0_12px_22px_rgba(0,82,204,0.2)]"
                    }`}
                  />
                </div>

                <div className="relative z-10 h-full w-full px-10 flex flex-col items-center justify-center text-center">
                  <h3 className="text-base font-bold text-[#0057b7] leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-[#55595d] max-w-[190px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}