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
        <div className="flex flex-col items-start justify-between sm:flex-row section-container">
          <div className="w-full lg:max-w-2xl">
            <div className="flex flex-col gap-4">
              <h4 className="text-fluid-40 font-bold leading-none text-text-primary">
                Built on Engineering. Driven by{" "}
                <span className="text-primary lg:block">
                  Manufacturing Excellence.
                </span>
              </h4>

              <p className="max-w-full text-fluid-16 leading-snug text-text-muted">
                SBB Mouldings Pvt. Ltd. is an injection moulding and assembly
                company established in 2018, serving the automotive and white
                goods industries with advanced manufacturing capabilities,
                experienced professionals, and strategically developed
                production facilities. Our capabilities enable us to support
                demanding automotive and white goods applications from
                development through production.
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:max-w-2xl lg:gap-x-6 lg:gap-y-10">
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
    <div className="flex   flex-col font-neue gap-1">
      <h4 className="text-fluid-40 font-bold text-text-primary">
        {data.title}
      </h4>
      <p className="text-fluid-16 leading-none text-text-muted font-normal">{data.subtitle}</p>
    </div>
  );
};
