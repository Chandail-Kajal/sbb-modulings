"use client";

import { useState } from "react";
import { Section } from "../Section";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "automotive",
    question: "Does SBB Mouldings supply the automotive industry?",
    answer:
      "Yes — including door-visor sub-assembly running up to 1,600 car-sets per day, backed by a leadership team with deep Tier-1 automotive experience.",
  },
  {
    id: "hvac",
    question: "Does SBB Mouldings work with air conditioning/HVAC manufacturers?",
    answer:
      "Yes — this is SBB's deepest assembly specialization, including cassette AC lines for Daikin, Panasonic, Havells, Blue Star, Mitsubishi and Hitachi, plus split AC indoor unit assembly.",
  },
  {
    id: "white-goods",
    question: "Does SBB handle white goods components?",
    answer:
      "Yes — white goods diversification was the original reason SBB was formed, and injection moulding capacity supports large-format white goods housings and components.",
  },
  {
    id: "industrial",
    question: "Can SBB support small industrial component orders too?",
    answer:
      "Yes — our 250–450T and 90T machines are sized for precision industrial components and fittings alongside larger automotive and HVAC programs.",
  },
];

export default function IndustriesFaq() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]!.id);

  return (
    <Section className="pb-(--section-y) pt-2">
      <div className="flex flex-col gap-8 lg:gap-10 section-container">
        {/* Heading */}
        <div className="w-full font-neue text-center">
          <p className="text-fluid-24 font-light text-neutral-500 tracking-tight mb-2">
            Got questions?
          </p>
          <h2 className="text-fluid-40 font-bold leading-none text-neutral-900 md:whitespace-nowrap">
            Frequently Asked <span className="text-[#0052cc]">Questions</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            const buttonId = `faq-button-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`w-full overflow-hidden rounded-2xl border transition-all duration-300 motion-reduce:transition-none ${
                  isOpen
                    ? "border-[#0052cc] bg-white shadow-[0_8px_20px_rgba(3,70,148,0.12)]"
                    : "border-[#e2e8f0] bg-gray-50/60 hover:border-slate-300 hover:bg-gray-50"
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0052cc] sm:px-6"
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-ce text-sm font-bold transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#0052cc] text-white"
                          : "bg-slate-100 text-neutral-900"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 font-ce text-fluid-24 font-bold leading-tight text-neutral-900">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 motion-reduce:transition-none ${
                        isOpen
                          ? "rotate-180 bg-[#0052cc] text-white"
                          : "bg-[#D5D5D5] text-black"
                      }`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                </h3>

                {/* Animated panel */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 font-ce text-fluid-16 leading-relaxed text-neutral-600 sm:pl-[5.5rem] sm:pr-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="p-6 flex sm:flex-row flex-col gap-4">
          <button className="bg-white text-[#0057B8] hover:bg-gray-100 font-semibold text-fluid-16 px-6 py-3 rounded-xl transition-colors cursor-pointer shadow-md">
            Talk to Us About Your Industry
          </button>
        </div>
      </div>
    </Section>
  );
}