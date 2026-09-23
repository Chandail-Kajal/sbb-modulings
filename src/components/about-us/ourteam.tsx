"use client";

import { useCallback, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section } from "../Section";

export type Leader = {
  name: string;
  role: string;
  bio: string;
  largeImage: StaticImageData | string;
  cardImage: StaticImageData | string;
  avatarImage: StaticImageData | string;
};

// Update these to match your public/ or local assets
const DEFAULT_IMAGE = "/about-us/team1.png";

export const leaders: Leader[] = [
  {
    name: "Mr. Narshi Chauhan",
    role: "Managing Director",
    bio: "Provides leadership and strategic direction for the company's continued manufacturing growth and development.",
    largeImage: DEFAULT_IMAGE,
    cardImage: DEFAULT_IMAGE,
    avatarImage: DEFAULT_IMAGE,
  },
  {
    name: "Ayesha Kapoor",
    role: "Operations Director",
    bio: "Drives technical excellence, plant automation, and manufacturing operations across our multi-facility production network.",
    largeImage: DEFAULT_IMAGE,
    cardImage: DEFAULT_IMAGE,
    avatarImage: DEFAULT_IMAGE,
  },
  {
    name: "Martin Feldman",
    role: "Head of Engineering",
    bio: "Specializes in high-precision tooling, plastic injection mould design, and end-to-end component validation.",
    largeImage: DEFAULT_IMAGE,
    cardImage: DEFAULT_IMAGE,
    avatarImage: DEFAULT_IMAGE,
  },
  {
    name: "Neha Raghav",
    role: "Quality Assurance Lead",
    bio: "Oversees stringent automotive standards, defect-free production runs, and comprehensive testing protocols.",
    largeImage: DEFAULT_IMAGE,
    cardImage: DEFAULT_IMAGE,
    avatarImage: DEFAULT_IMAGE,
  },
  {
    name: "Daniel Ortiz",
    role: "Plant Operations Lead",
    bio: "Ensures seamless assembly line throughput, optimized supply chain logistics, and production reliability.",
    largeImage: DEFAULT_IMAGE,
    cardImage: DEFAULT_IMAGE,
    avatarImage: DEFAULT_IMAGE,
  },
];

const cardVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 36 : -36,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -36 : 36,
    opacity: 0,
  }),
};

const largeImageVariants = {
  enter: {
    opacity: 0,
    scale: 0.97,
  },
  center: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.97,
  },
};

const roleVariants = {
  enter: (dir: number) => ({
    y: dir > 0 ? 8 : -8,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    y: dir > 0 ? -8 : 8,
    opacity: 0,
  }),
};

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function OurTeam() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const count = leaders.length;

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setActive((current) => (current + dir + count) % count);
    },
    [count],
  );

  const current = leaders[active]!;

  const at = (offset: number) => {
    return leaders[(active + offset + count) % count]!;
  };

  const leftSide = [at(-2), at(-1)];
  const rightSide = [at(1), at(2)];

  const indexOf = (leader: Leader) => leaders.indexOf(leader);

  const select = (index: number) => {
    const diff = index - active;
    const dir =
      diff === 0 ? direction : (diff + count) % count <= count / 2 ? 1 : -1;

    setDirection(dir);
    setActive(index);
  };

  return (
    <>
      <style>{`
        .leadership-marquee-track {
          display: flex;
          width: max-content;
          animation: leadership-marquee 30s linear infinite;
          will-change: transform;
        }

        @keyframes leadership-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .leadership-marquee-track {
            animation: none;
          }
        }
      `}</style>

      <Section
        aria-label="Leadership team"
        className="relative w-full overflow-hidden bg-white sm:py-20"
        disablePaddingY
      >
        <div className="mx-auto section-container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <span className="text-fluid-24 text-slate-500">Leadership</span>
              <h2 className="mt-1 font-extrabold tracking-tight text-[#1E2229] text-fluid-40 leading-none">
                Experience Behind Every <br />
                <span className="text-[#0E58BD]">Production Decision</span>
              </h2>
            </div>
            <p className="max-w-[320px] sm:text-right text-fluid-16 text-slate-500">
              Our leadership combines expertise in automotive manufacturing,
              tooling, engineering, operations, and business management.
            </p>
          </div>

          <div className="z-20 absolute top-[30%]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.p
                key={`role-${active}`}
                custom={direction}
                variants={roleVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-fluid-24 font-semibold tracking-wide text-slate-500"
              >
                {current.role}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="relative mt-2 h-100 sm:h-110 lg:h-120">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[40%] z-0 w-screen -translate-x-1/2 -translate-y-1/2 select-none overflow-hidden"
            >
              <div className="leadership-marquee-track">
                <div className="flex shrink-0">
                  {[0, 1, 2].map((item) => (
                    <span
                      key={`marquee1-${item}`}
                      className="shrink-0 px-8 text-[18vw] font-black uppercase leading-none tracking-tight text-[#BFD7F5]/50 sm:text-[12vw] lg:text-[8.5vw]"
                    >
                      {current.name}
                    </span>
                  ))}
                </div>
                <div className="flex shrink-0">
                  {[0, 1, 2].map((item) => (
                    <span
                      key={`marquee2-${item}`}
                      className="shrink-0 px-8 text-[18vw] font-black uppercase leading-none tracking-tight text-[#BFD7F5]/50 sm:text-[12vw] lg:text-[8.5vw]"
                    >
                      {current.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-4 left-1/2 z-10 hidden h-0.5 w-screen -translate-x-1/2 bg-[#E2E8F0] md:block"
            />

            <div className="pointer-events-none absolute bottom-[64px] left-0 z-20 hidden w-full -translate-y-1/2 md:block">
              <div className="pointer-events-auto absolute left-6 flex items-center gap-10 lg:left-12">
                <AnimatePresence
                  mode="popLayout"
                  custom={direction}
                  initial={false}
                >
                  {leftSide.map((person) => (
                    <motion.div
                      key={`left-${person.name}`}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <SideAvatar
                        person={person}
                        onClick={() => select(indexOf(person))}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Right Avatars */}
              <div className="pointer-events-auto absolute right-6 flex items-center gap-10 lg:right-12">
                <AnimatePresence
                  mode="popLayout"
                  custom={direction}
                  initial={false}
                >
                  {rightSide.map((person) => (
                    <motion.div
                      key={`right-${person.name}`}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <SideAvatar
                        person={person}
                        onClick={() => select(indexOf(person))}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            <div className="pointer-events-none absolute  left-1/2 z-10 h-70 w-95 -translate-x-1/2  sm:h-95 sm:w-165  lg:h-105 lg:w-180">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`hero-${active}`}
                  variants={largeImageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={current.largeImage}
                    alt={`${current.name}, ${current.role}`}
                    fill
                    priority
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 480px"
                    className="object-contain object-bottom grayscale"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-0 left-1/2 z-30 w-[calc(100%-32px)] max-w-95 sm:h-40 -translate-x-1/2 sm:w-80">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.article
                  key={`card-${active}`}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative w-full rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-start gap-4 min-h-20">
                    <div className="relative -mt-9 h-24 w-24 shrink-0 overflow-hidden rounded-xl border-2 border-white bg-slate-100 shadow-md">
                      <Image
                        src={current.cardImage}
                        alt={current.name}
                        fill
                        sizes="480px"
                        className="object-cover object-top"
                      />
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className="truncate text-sm font-bold text-slate-900">
                        {current.name}
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        {current.role}
                      </p>

                      <div className="mt-2 flex items-center gap-2.5 text-slate-800">
                        <a
                          href="#"
                          aria-label={`${current.name} Facebook`}
                          className="transition hover:text-[#0E58BD]"
                        >
                          <FacebookIcon className="h-3 w-3" />
                        </a>
                        <a
                          href="#"
                          aria-label={`${current.name} Twitter`}
                          className="transition hover:text-[#0E58BD]"
                        >
                          <TwitterIcon className="h-3 w-3" />
                        </a>
                        <a
                          href="#"
                          aria-label={`${current.name} Instagram`}
                          className="transition hover:text-[#0E58BD]"
                        >
                          <InstagramIcon className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <p className="mb-3 text-[11px] leading-relaxed text-slate-600">
                    {current.bio}
                  </p>
                </motion.article>
              </AnimatePresence>

              <div className="absolute bottom-0 left-1/2 sm:-bottom-10 sm:left-60 z-40 flex h-7 w-28 -translate-x-1/2 items-center justify-between rounded-full bg-[#0E58BD] px-1 shadow-md">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous leader"
                  className="flex h-full flex-1 items-center justify-center text-white transition hover:opacity-80"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                </button>
                <span className="h-3.5 w-[1px] bg-white/30" />
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next leader"
                  className="flex h-full flex-1 items-center justify-center text-white transition hover:opacity-80"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function SideAvatar({
  person,
  onClick,
}: {
  person: Leader;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Select ${person.name}`}
      className="group relative block h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-white bg-slate-200 shadow-sm transition-transform duration-300 hover:scale-105 lg:h-24 lg:w-24"
    >
      <Image
        src={person.avatarImage}
        alt={person.name}
        fill
        sizes="96px"
        className="object-cover object-top grayscale transition-all duration-300 group-hover:grayscale-0"
      />
    </button>
  );
}
