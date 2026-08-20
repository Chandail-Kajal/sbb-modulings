"use client";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import Image from "next/image";
import { ManufacturingCarousel } from "@/components/ManufacturingSection";
import { LogoSection } from "@/components/LogoSection";
import { IndustrialApplications } from "@/components/IndustrialApplications";
import { ComponentsToAssemblies } from "@/components/CapabilitySection";
import { StrategicFacilities } from "@/components/StrategicFacilities";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";

const metricsData = [
  { title: "2018", subtitle: "Established" },
  { title: "45+", subtitle: "Professionals" },
  { title: "2800 Ton", subtitle: "Maximum Machine Capacity" },
  { title: "03", subtitle: "Manufacturing Units" },
  { title: "18+", subtitle: "Large Moulding Machines" },
  { title: "20+", subtitle: "Client Company" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen w-full flex flex-col overflow-x-hidden">
      <Header />

      <Hero />

      <Section>
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
          <div className="flex flex-col gap-2 sm:gap-3 w-full lg:max-w-xl">
            <h4 className="text-2xl sm:text-3xl leading-none lg:text-4xl font-semibold text-text-primary ">
              Built on Engineering. Driven by{" "}
              <span className="block sm:inline text-primary">
                Manufacturing Excellence.
              </span>
            </h4>

            <p className="text-sm leading-snug text-text-muted">
              SBB Mouldings Pvt. Ltd. is an injection moulding and assembly
              company established in 2018, serving the automotive and white
              goods industries with advanced manufacturing capabilities,
              experienced professionals, and strategically developed production
              facilities. Our capabilities enable us to support demanding
              automotive and white goods applications from development through
              production.
            </p>
          </div>

          <div className="w-full lg:max-w-xl grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-x-4 sm:gap-y-8 sm:pt-2">
            {metricsData.map((item) => (
              <MetricBlock key={item.title} {...item} />
            ))}
          </div>
        </div>
      </Section>

      <LogoSection />

      <ManufacturingCarousel />

      <IndustrialApplications />

      <ComponentsToAssemblies />

      <div className="relative w-full overflow-hidden">
        <Image
          src={"/map-bg.jpg"}
          alt="map-bg"
          height={1080}
          width={1280}
          className="inset-0 w-full absolute object-cover -z-10"
        />
        <div className="h-full w-full bg-white/70">
          <StrategicFacilities />
        </div>
      </div>

      <CtaBanner />

      <Footer />
    </main>
  );
}

const MetricBlock = (data: { title: string; subtitle: string }) => {
  return (
    <div className="flex flex-col font-neue gap-1">
      <h4 className="text-2xl sm:text-4xl lg:5xl font-bold text-text-primary">
        {data.title}
      </h4>
      <p className="text-sm text-text-secondary font-normal">{data.subtitle}</p>
    </div>
  );
};
