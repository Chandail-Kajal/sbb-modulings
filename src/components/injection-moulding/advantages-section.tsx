"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { RiStackFill } from "react-icons/ri";
import { Section } from "../Section";

export function AdvantageSection() {
    const advantages = [
        {
            title: "Capacity",
            subtitle: "High-Capacity Moulding",
            description:
                "Our machine portfolio extends up to 2800 tons, enabling production of large and complex injection-moulded components.",
        },
        {
            title: "Flexibility",
            subtitle: "A Wide Range of Machine Sizes",
            description:
                "From 90-ton machines to high-capacity 2800-ton equipment, our range supports varied component and production requirements.",
        },
        {
            title: "Production",
            subtitle: "Built for High-Volume Manufacturing",
            description:
                "Our manufacturing infrastructure is designed to support demanding production volumes for automotive, HVAC, white goods, and industrial applications.",
        },
        {
            title: "Expertise",
            subtitle: "Experienced Engineering & Operations",
            description:
                "A team of 45+ professionals, including managers, engineers, and supervisors, supports plant operations and OEM-tailored requirements.",
        },
    ];

    // Initialize Embla with 1-card scroll step & loop enabled
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            slidesToScroll: 1,
            align: "start",
        },
        [Autoplay({ delay: 3500, stopOnInteraction: false })]
    );

    return (
        <Section className="overflow-hidden py-(--section-y)" disablePaddingX disablePaddingY asChild >
            <div className="flex flex-col gap-6  carousel-section overflow-hidden">
                <div>
                    <p className="font-neue text-fluid-24">Injection Moulding Advantages</p>
                    <h4 className="font-neue text-fluid-40 font-bold leading-none">
                        Injection Moulding Advantages
                    </h4>
                </div>

                {/* Embla Viewport */}
                <div className="overflow-visible lg:mt-8 mt-4" ref={emblaRef}>
                    {/* Embla Container */}
                    <div className="-ml-6 flex touch-pan-y py-2">
                        {[...advantages, ...advantages, ...advantages].map((item) => (
                            <div
                                key={item.title}
                                className="min-w-0 flex-[0_0_100%] pl-6 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
                            >
                                <AdvantageCard {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}

const AdvantageCard = ({
    title,
    description,
    subtitle,
}: {
    title: string;
    subtitle: string;
    description: string;
}) => {
    return (
        <div
            className="group relative h-100 w-full overflow-hidden rounded-4xl bg-white text-text-primary transition-colors duration-300 hover:text-primary-foreground lg:h-125"
            style={{
                boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)",
            }}
        >
            {/* Hover gradient */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    backgroundImage: "linear-gradient(to right, #569FF2, #0057B8)",
                }}
            />

            {/* Monotone noise */}
            <div
                className="pointer-events-none absolute inset-0 z-10 opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-25"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Content */}
            <div className="relative z-20 mx-auto flex h-full max-w-[80%] flex-col gap-6 pt-6 font-neue">
                <RiStackFill className="size-30" />

                <h5 className="text-fluid-40 font-bold leading-none">{title}</h5>

                <p className="text-fluid-24 leading-none">{subtitle}</p>

                <p className="font-ce text-fluid-16 leading-snug">{description}</p>
            </div>
        </div>
    );
};