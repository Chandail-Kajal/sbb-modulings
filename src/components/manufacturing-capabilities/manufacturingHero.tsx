"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ManufacturingCapabilitiesProps {
  bgImageUrl?: string;
  humanHandUrl?: string;
  roboticHandUrl?: string;
}

export default function ManufacturingHero({
  bgImageUrl = "/manufacturing-capabilities/hero-bg.png",
  humanHandUrl = "/manufacturing-capabilities/human-hand.png",
  roboticHandUrl = "/manufacturing-capabilities/robot-hand.png",
}: ManufacturingCapabilitiesProps) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#fbfbfb] py-20 md:py-28 lg:py-36">
      
      {/* Background Fade-In */}
      {bgImageUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <Image
            src={bgImageUrl}
            alt="Manufacturing Capabilities Background"
            fill
            priority
            className="object-cover object-center opacity-80"
          />
        </motion.div>
      )}

      {/* Human Hand (Starts at Center, moves to Left) */}
      {humanHandUrl && (
        <motion.div
          initial={{ x: "32%", opacity: 1 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{
            duration: 1.6,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier ease-out
          }}
          className="absolute hidden sm:block left-0 top-10 sm:top-12 lg:-top-13 w-1/2 xl:w-full xl:max-w-180 xl:-top-36 max-w-150 pointer-events-none select-none z-[1]"
        >
          <Image
            src={humanHandUrl}
            alt="Human Hand"
            width={500}
            height={320}
            priority
            className="w-full h-auto object-contain object-left"
          />
        </motion.div>
      )}

      {/* Robotic Hand (Starts at Center, moves to Right) */}
      {roboticHandUrl && (
        <motion.div
          initial={{ x: "-32%", opacity: 1 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{
            duration: 1.6,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier ease-out
          }}
          className="absolute hidden sm:block right-0 top-10 sm:top-10 lg:-top-10 lg:w-1/2 xl:w-full xl:max-w-180 xl:-top-32 max-w-150 pointer-events-none select-none z-[1]"
        >
          <Image
            src={roboticHandUrl}
            alt="Robotic Hand"
            width={500}
            height={320}
            priority
            className="w-full h-auto object-contain object-right"
          />
        </motion.div>
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Animated Heading (Starts at 10% opacity, fades to 100% as hands move apart) */}
        <motion.h1
          initial={{ opacity: 0.1, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.6,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="flex flex-col items-center justify-center font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12 sm:mb-16"
        >
          <span className="bg-gradient-to-r from-[#59636d] via-[#85929E] to-[#4b5563] bg-clip-text text-transparent drop-shadow-sm pb-1">
            Manufacturing
          </span>

          <span className="bg-gradient-to-r from-[#1d63c6] via-[#2573e0] to-[#5190e8] bg-clip-text text-transparent drop-shadow-sm">
            Capabilities
          </span>
        </motion.h1>

        {/* Animated Paragraphs (Fades in slightly after hands part) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: "easeOut" }}
          className="max-w-6xl mx-auto space-y-4 text-center xl:mt-20"
        >
          <h2 className="text-fluid-32 font-normal text-neutral-600">
            <span className="font-semibold text-[#1e61be]">
              Manufacturing Capability
            </span>{" "}
            Built for Scale
          </h2>

          <p className="text-fluid-16 leading-snug text-neutral-500 font-light w-full mx-auto">
            SBB Mouldings combines advanced injection moulding, assembly
            operations, experienced engineering teams, and dedicated
            manufacturing infrastructure to support demanding production
            requirements across automotive, HVAC, white goods, and industrial
            applications.
          </p>

          <p className="text-fluid-16 leading-snug text-neutral-500 font-light w-full mx-auto pt-1">
            Our capabilities are designed to support customers from component
            manufacturing through assembly, packaging, and traceability.
          </p>
        </motion.div>

      </div>
    </section>
  );
}