"use client";

/* eslint-disable jsx-a11y/alt-text */
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AdvantageSection } from "@/components/injection-moulding/advantages-section";
import { IntegratedProduction } from "@/components/injection-moulding/integrated-production";
import { ManufacturingCapacity } from "@/components/injection-moulding/manufacturing-capacity";
import { ProjectBanner } from "@/components/injection-moulding/project-banner";
import { Requirements } from "@/components/injection-moulding/requirement";
import { Section } from "@/components/Section";
import Image from "next/image";
import { useState } from "react";


const MouldIcon = ({ filled = false }: { filled?: boolean }) => {
    return (
        <>
            {/* Outlined Icon: Visible by default, hidden on group hover (or always hidden if `filled`) */}
            <svg
                className={filled ? "hidden" : "block group-hover:hidden"}
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M20.9229 3.68444C20.9091 3.99344 20.793 4.28385 20.5995 4.48878L18.9663 6.21845C18.7599 6.43706 18.6416 6.75291 18.6416 7.08486V10.1008C18.6416 10.4146 18.7474 10.715 18.9345 10.9321L20.6313 12.9001C20.8184 13.1173 20.9242 13.4176 20.9242 13.7315V21.1012L20.9231 21.159C20.9111 21.4473 20.81 21.7206 20.6389 21.9236L18.9269 23.9541C18.7444 24.1707 18.6416 24.4671 18.6416 24.7765V27.7008C18.6416 28.0235 18.7535 28.3314 18.95 28.5495L20.6159 30.3979C20.8123 30.6159 20.9242 30.9238 20.9242 31.2465V33.3882H32.7178C33.243 33.3882 33.6689 32.8727 33.6689 32.2368V2.76316C33.6689 2.1273 33.243 1.61184 32.7178 1.61184V0C33.9784 0 35.0004 1.23711 35.0004 2.76316V32.2368C35.0004 33.7629 33.9784 35 32.7178 35H19.5927V31.4491L18.0503 29.7377C17.5787 29.2143 17.3101 28.4753 17.3101 27.7008V24.7765C17.3101 24.034 17.5569 23.3227 17.995 22.803L19.5927 20.9076V13.9278L18.0133 12.0958C17.5641 11.5746 17.3101 10.854 17.3101 10.1008V7.08486C17.3101 6.28813 17.5942 5.5302 18.0895 5.00553L19.5927 3.41302V0H32.7178V1.61184H20.9242V3.62237L20.9229 3.68444Z" fill="currentColor" />
                <path d="M14.0762 31.4491L12.5338 29.7377C12.0622 29.2143 11.7936 28.4753 11.7936 27.7008V24.7765C11.7936 24.034 12.0404 23.3227 12.4785 22.803L14.0762 20.9076V13.9278L12.4968 12.0958C12.0476 11.5746 11.7936 10.854 11.7936 10.1008V7.08486C11.7936 6.28813 12.0777 5.5302 12.573 5.00553L14.0762 3.41302V1.61184H2.28262V0H15.4077V4.14429L13.45 6.21845C13.2436 6.43708 13.1251 6.75294 13.1251 7.08486V10.1008C13.1251 10.4146 13.231 10.7149 13.4182 10.9321L15.4077 13.2399V21.5849L13.4104 23.9541C13.2279 24.1706 13.1251 24.4671 13.1251 24.7765V27.7008C13.1251 28.0235 13.2371 28.3314 13.4336 28.5495L15.4077 30.7401V35H2.28262C1.02197 35 0 33.7629 0 32.2368V2.76316C0 1.23711 1.02197 0 2.28262 0V1.61184C1.75735 1.61184 1.33153 2.1273 1.33153 2.76316V32.2368C1.33153 32.8727 1.75735 33.3882 2.28262 33.3882H14.0762V31.4491Z" fill="currentColor" />
            </svg>

            {/* Filled Icon: Hidden by default, visible on group hover (or always visible if `filled`) */}
            <svg
                className={filled ? "block" : "hidden group-hover:block"}
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M18.9382 0H33.8012C34.4632 0 34.9999 0.567755 34.9999 1.26812V33.7319C34.9999 34.4322 34.4632 35 33.8012 35H18.9382V32.6412C18.9382 32.2857 18.7972 31.9466 18.5495 31.7064L16.4502 29.6704C16.2025 29.4302 16.0615 29.0911 16.0615 28.7356V25.5147C16.0615 25.1739 16.1912 24.8475 16.4212 24.609L18.5786 22.3722C18.8086 22.1337 18.9382 21.8073 18.9382 21.4665V17.5V13.3491C18.9382 13.0034 18.8048 12.6727 18.5689 12.4335L16.4308 10.2657C16.1949 10.0265 16.0615 9.69584 16.0615 9.35016V6.02833C16.0615 5.66265 16.2107 5.31477 16.4708 5.07398L18.5289 3.16878C18.789 2.92798 18.9382 2.5801 18.9382 2.21442V0Z" fill="currentColor" />
                <path d="M16.0616 0V2.2145C16.0616 2.58012 15.9125 2.92802 15.6524 3.1688L13.5941 5.07395C13.3341 5.31473 13.1849 5.66263 13.1849 6.02826V9.35013C13.1849 9.6958 13.3182 10.0266 13.5541 10.2658L15.6925 12.4335C15.9283 12.6727 16.0616 13.0035 16.0616 13.3491V21.4666C16.0616 21.8073 15.9321 22.1338 15.7021 22.3723L13.5445 24.6089C13.3145 24.8474 13.1849 25.1739 13.1849 25.5146V28.7357C13.1849 29.0911 13.3259 29.4303 13.5735 29.6704L15.673 31.7064C15.9207 31.9465 16.0616 32.2857 16.0616 32.6411V35H1.19863C0.536645 35 0 34.4322 0 33.7319V1.26812C0 0.567755 0.536645 0 1.19863 0H16.0616Z" fill="currentColor" />
            </svg>
        </>
    );
};

const machineClasses = [
    {
        title: "2,800 Ton (Haitian, 2-platen)",
        count: 1,
        use: "Largest-format automotive & HVAC components",
    },
    {
        title: "600–2,300 Ton",
        count: 18,
        use: "Automotive body parts, cassette AC panels, white goods housings",
    },
    {
        title: "250–450 Ton",
        count: 4,
        use: "Mid-size components, sub-assemblies",
    },
    {
        title: "90 Ton",
        count: 6,
        use: "Small precision parts, fittings",
    },
];

const totalMachines = machineClasses.reduce((sum, m) => sum + m.count, 0);

/* ---------- tonnage showcase (interactive) ---------- */

function TonnageShowcase() {
    const [active, setActive] = useState(0);
    const current = machineClasses[active];

    return (
        <div className="flex lg:flex-row flex-col justify-between items-start lg:items-center gap-12 lg:gap-16 section-container">
            <div className="flex flex-col lg:max-w-[48%] w-full gap-10">
                <div className="flex flex-col gap-5">
                    <h4 className="text-fluid-40 font-neue max-w-md text-text-primary leading-none font-bold">
                        What Tonnage Range Can SBB Mouldings Handle?
                    </h4>
                    <p className="font-ce text-fluid-16 text-text-para leading-snug">
                        SBB Mouldings runs a 29-machine injection moulding fleet spanning 90 to 2,800 tons — from a
                        single 2,800-ton Haitian press for the largest components, through eighteen machines in the
                        600–2,300 ton bracket, down to compact 90-ton presses for smaller precision parts. That range
                        means a single production program — from a large HVAC housing to a small automotive clip — can
                        often be run entirely within our own walls.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <h5 className="text-fluid-24 font-semibold text-text-primary">Machine class</h5>
                        <span className="font-ce text-sm text-text-para">{totalMachines} machines total</span>
                    </div>

                    <div className="flex flex-col gap-5" role="list">
                        {machineClasses.map((item, i) => {
                            const isActive = i === active;
                            const share = (item.count / totalMachines) * 100;

                            return (
                                <button
                                    key={item.title}
                                    type="button"
                                    role="listitem"
                                    aria-expanded={isActive}
                                    onClick={() => setActive(i)}
                                    onMouseEnter={() => setActive(i)}
                                    onFocus={() => setActive(i)}
                                    className={`group relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                                        isActive
                                            ? "border-primary bg-white shadow-lg"
                                            : "border-gray-200 bg-gray-50/60 hover:border-gray-300 hover:bg-gray-50"
                                    }`}
                                >
                                    {/* accent bar */}
                                    <span
                                        aria-hidden="true"
                                        className={`absolute left-0 top-0 h-full w-1 bg-primary transition-transform duration-300 origin-top motion-reduce:transition-none ${
                                            isActive ? "scale-y-100" : "scale-y-0"
                                        }`}
                                    />

                                    {/* Title row */}
                                    <div className="flex items-center gap-4">
                                        <span
                                            className={`shrink-0 transition-colors ${
                                                isActive ? "text-primary" : "text-text-primary"
                                            }`}
                                        >
                                            <MouldIcon filled={isActive} />
                                        </span>
                                        <h6 className="flex-1 text-fluid-24 font-bold leading-tight text-primary">
                                            {item.title}
                                        </h6>
                                        <span
                                            className={`shrink-0 rounded-full px-3 py-1 font-ce text-sm font-semibold transition-colors ${
                                                isActive
                                                    ? "bg-primary text-white"
                                                    : "bg-gray-200 text-text-primary"
                                            }`}
                                        >
                                            {item.count} {item.count === 1 ? "machine" : "machines"}
                                        </span>
                                    </div>

                                    {/* Expandable details */}
                                    <div
                                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                                            isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="flex flex-col gap-5 pt-5">
                                                <div className="flex items-stretch gap-4">
                                                    <div className="flex w-14 shrink-0 flex-col justify-center gap-1">
                                                        <span className="font-ce text-sm text-text-para">Count</span>
                                                        <span className="text-fluid-16 font-bold leading-none text-text-primary">
                                                            {item.count}
                                                        </span>
                                                    </div>
                                                    <div className="w-px shrink-0 bg-text-para/40" />
                                                    <div className="flex flex-col justify-center gap-1">
                                                        <span className="font-ce text-sm text-text-para">Typical use</span>
                                                        <span className="text-fluid-16 font-bold leading-tight text-text-primary">
                                                            {item.use}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Fleet share bar */}
                                                <div className="flex items-center gap-3">
                                                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
                                                        <div
                                                            className="h-full rounded-full bg-primary transition-[width] duration-700 ease-out motion-reduce:transition-none"
                                                            style={{ width: isActive ? `${share}%` : "0%" }}
                                                        />
                                                    </div>
                                                    <span className="font-ce text-xs text-text-para tabular-nums">
                                                        {Math.round(share)}% of fleet
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Right image with live info card */}
            <div className="relative overflow-hidden rounded-3xl shadow-black/30 shadow-lg lg:max-w-[45%] w-full group/image">
                <Image
                    height={1080}
                    width={1920}
                    src={"/injection-moulding/milling-machine.jpg"}
                    className="w-full object-cover h-64 sm:h-96 md:h-140 lg:h-180 xl:h-210 transition-transform duration-700 ease-out group-hover/image:scale-105 motion-reduce:transition-none"
                    alt="Injection moulding machine"
                />

                {/* soft gradient so the card stays readable */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/50 to-transparent"
                />

                {/* Info card */}
                <div
                    aria-live="polite"
                    className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6 rounded-2xl border border-white/30 bg-white/80 p-4 sm:p-5 shadow-xl backdrop-blur-md"
                >
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-col gap-1">
                            <span className="font-ce text-xs uppercase tracking-wider text-text-para">
                                Selected class
                            </span>
                            <span className="text-fluid-16 font-bold leading-tight text-primary">
                                {current.title}
                            </span>
                        </div>
                        <div className="flex shrink-0 flex-col items-end leading-none">
                            <span className="text-fluid-40 font-bold text-text-primary tabular-nums">
                                {current.count}
                            </span>
                            <span className="font-ce text-xs text-text-para">
                                {current.count === 1 ? "machine" : "machines"}
                            </span>
                        </div>
                    </div>
                    <p className="mt-2 font-ce text-sm leading-snug text-text-para">{current.use}</p>

                    {/* Dot switcher */}
                    <div className="mt-3 flex items-center gap-2">
                        {machineClasses.map((m, i) => (
                            <button
                                key={m.title}
                                type="button"
                                aria-label={`Show ${m.title}`}
                                onClick={() => setActive(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                                    i === active ? "w-8 bg-primary" : "w-3 bg-gray-400/60 hover:bg-gray-500"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Injection() {
    return (
        <main className="min-h-screen w-full flex flex-col overflow-x-hidden">
            <Header />
            <Hero />
            <Section disablePaddingY className="pt-(--section-y)">
                <div className="flex flex-col gap-10 sm:gap-16 section-container">
                    <Image
                        src={"/injection-moulding/capacity.png"}
                        alt={"capacity image"}
                        height={1080}
                        width={1920}
                        className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl"
                    />

                    {/* Intro (left) + value prop stats card (right) */}
                    <div className="grid lg:grid-cols-12 items-start gap-8 lg:gap-12">
                        {/* Heading + description */}
                        <div className="lg:col-span-7 flex flex-col gap-6">
                            <h4 className="text-fluid-40 font-bold leading-[1.05] text-text-primary">
                                High-Capacity Injection Moulding for
                                <span className="block text-primary">
                                    Demanding Applications
                                </span>
                            </h4>
                            <p className="max-w-xl font-ce text-fluid-16 text-text-para leading-relaxed">
                                A 29-machine fleet from 90 to 2,800 tons, backed by engineering support from tooling through to production — built for automotive, HVAC, white goods and industrial parts that can&rsquo;t afford inconsistency.
                            </p>
                        </div>

                        {/* Value prop strip: smaller title, stats as rows inside one card */}
                        <div className="lg:col-span-5 rounded-2xl sm:rounded-3xl border border-gray-200 bg-gray-50/70 p-6 sm:p-8">
                            <h5 className="text-fluid-24 font-semibold leading-none text-text-primary pb-5 border-b-2 border-primary">
                                Value prop strip
                            </h5>

                            <dl className="divide-y divide-gray-200">
                                {/* Stat 1 */}
                                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-5">
                                    <dd className="flex items-baseline gap-2 font-bold leading-none text-text-primary">
                                        <span className="text-fluid-40 tabular-nums">90–2,800</span>
                                        <span className="text-fluid-16 text-primary">Tons</span>
                                    </dd>
                                    <dt className="font-ce text-fluid-16 text-text-para">machine range</dt>
                                </div>

                                {/* Stat 2 */}
                                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-5">
                                    <dd className="text-fluid-40 font-bold leading-none text-text-primary tabular-nums">3</dd>
                                    <dt className="font-ce text-fluid-16 text-text-para">Facilities in Bawal, Rewari</dt>
                                </div>

                                {/* Stat 3 */}
                                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 pt-5">
                                    <dd className="text-fluid-40 font-bold leading-none text-text-primary tabular-nums">45+</dd>
                                    <dt className="font-ce text-fluid-16 text-text-para">
                                        Professionals across engineering &amp; operations
                                    </dt>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </Section>
            <Section disablePaddingY className="pt-(--section-y)">
                <TonnageShowcase />
            </Section>
            <AdvantageSection />
            <Requirements />
            <ManufacturingCapacity />
            <IntegratedProduction />
            <ProjectBanner />
            <Footer />
        </main>
    )
}