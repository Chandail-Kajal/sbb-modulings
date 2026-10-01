import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoSection } from "@/components/LogoSection";
import { Section } from "@/components/Section";
import Image from "next/image";
import { Link as LinkIcon } from "lucide-react";


type IconProps = { className?: string };

/* Filled icons to match the design. Cut-outs use the --cut CSS variable (tile colour). */
const GearIcon = ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="5.9" stroke="currentColor" strokeWidth="5.2" />
        <g stroke="currentColor" strokeWidth="3.4">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
                <line key={a} x1="12" y1="1.4" x2="12" y2="4.8" transform={`rotate(${a} 12 12)`} />
            ))}
        </g>
    </svg>
);

const ShieldCheckIcon = ({ className }: IconProps) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
            d="M12 2.6c2.4 1.6 5 2.3 7.6 2.4v6.5c0 4.4-3 7.6-7.6 9.5-4.6-1.9-7.6-5.1-7.6-9.5V5c2.6-.1 5.2-.8 7.6-2.4Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
        />
        <path
            d="m8.4 12 2.5 2.5 4.8-5"
            fill="none"
            style={{ stroke: "var(--cut)" }}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);


const BarsIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <g fill="currentColor">
      <rect x="2.1" y="13" width="6" height="11" rx="1.6" />
      <rect x="9" y="10.4" width="6" height="13.6" rx="1.6" />
      <rect x="15.9" y="7.6" width="6" height="16.4" rx="1.6" />
    </g>
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.2 8.6C7.4 7.9 11.4 5.9 15.4 2.6" />
      <path d="M12.9 1.9 16.5 1.6 16.1 5.2" />
    </g>
  </svg>
);

const ChainIcon = ({ className }: IconProps) => (
    <LinkIcon className={className} strokeWidth={2.2} />
);

const items = [
    {
        icon: GearIcon,
        text: "High-volume assembly capacity matched to OEM production schedules",
    },
    {
        icon: ShieldCheckIcon,
        text: "Certified quality systems (ISO 9001:2015, IATF 16949:2016) built for OEM audit standards",
    },
    {
        icon: ChainIcon,
        text: "Integrated moulding-to-assembly production, reducing supply-chain handoffs",
    },
    {
        icon: BarsIcon,
        text: "A track record of taking programs from drawing stage to mass production, including first-of-its-kind lines in India",
    },
];

export default function Clients() {


    return (
        <div>
            <Header />
            <Hero />
            <Section>
                <div className="section-container">
                    <div className="flex sm:flex-row flex-col justify-between items-start gap-6">
                        <div className="sm:max-w-lg w-full mx-auto sm:mx-0">

                            <h2 className="text-fluid-40 font-bold text-neutral-900 leading-none">
                                Trusted by Industry  <br />
                                <span className="text-[#0052cc]">Leaders</span>
                            </h2>
                        </div>
                        <div className="sm:max-w-[42%] w-full font-ce text-fluid-16 text-neutral-600 sm:text-right leading-relaxed space-y-4">
                            <p>
                                SBB Mouldings supplies directly and indirectly to some of the biggest names in air conditioning, white goods and automotive manufacturing.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
            <LogoSection />
            <Section className="section-container py-(--section-y)">
                <h2 className="mb-10 text-fluid-40 font-bold text-neutral-700 lg:mb-17.5">
                    Why they work with us
                </h2>

                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-12">
                    {items.map(({ icon: Icon, text }) => (
                        <li
                            key={text}
                            className="group flex min-h-65 flex-col gap-6 rounded-4xl border border-[#dcebfd] bg-[#f1f7ff] p-6 text-neutral-800 transition-colors duration-200 hover:border-[#0e58b2] hover:bg-[#0e58b2] hover:text-white lg:min-h-[300px] lg:gap-9 lg:p-9"
                        >
                            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-[#dfeeff] text-[#64b0fa] transition-colors duration-200 [--cut:#dfeeff] group-hover:bg-[#f0f6ff] group-hover:text-[#0e58b2] group-hover:[--cut:#f0f6ff] lg:h-[90px] lg:w-[90px]">
                                <Icon className="h-[58%] w-[58%]" />
                            </span>
                            <p className="text-fluid-16 font-semibold leading-snug">{text}</p>
                        </li>
                    ))}
                </ul>
            </Section>
            <Section className="pt-0">
                <div className="w-full ">
                    <div className="section-container">
                        <div
                            className="relative w-full rounded-[2.25rem] overflow-hidden px-8 py-10 sm:px-14 sm:py-12 md:px-20 lg:px-25 md:py-16 flex flex-col md:flex-row items-center justify-between gap-9 shadow-lg"
                            style={{
                                backgroundImage: "linear-gradient(115deg, #3b82f6 0%, #1e40af 100%)",
                            }}
                        >
                            <div
                                className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-20"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                }}
                            />

                            <div className="flex flex-col gap-4 max-w-xl z-10 text-white">
                                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight leading-tight">
                                    Let&apos;s Build What&apos;s Next
                                </h2>



                                <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-md">
                                    Partner with us for reliable supply, superior quality
                                    and long-term success
                                </p>

                                <div className="pt-3 flex flex-wrap gap-3.5 items-center">
                                    <button className="bg-white text-[#1d4ed8] hover:bg-slate-50 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer">
                                        Become a partner
                                    </button>
                                    <button className="bg-white text-[#1d4ed8] hover:bg-slate-50 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer">
                                        Contact Our Team
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-center z-10 max-h-48 sm:max-h-60 md:max-h-72">
                                <Image
                                    height={1080}
                                    width={1280}
                                    src={"/manufacturing-capabilities/puzzle.png"}
                                    className="h-full max-h-48 sm:max-h-60 md:max-h-72 w-auto object-contain"
                                    alt="puzzle"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>


            <Footer />
        </div>
    )
}