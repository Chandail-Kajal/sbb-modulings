import Image from "next/image";
import { Section } from "@/components/Section";

interface CapabilityItem {
  title: string;
  description: string;
}

const capabilities: CapabilityItem[] = [
  {
    title: "Automotive Components",
    description: "Door Visors and other automotive parts",
  },
  {
    title: "AC Components",
    description: "Cassette AC components and decorative panels",
  },
  {
    title: "Final Assemblies",
    description:
      "Panasonic, Daikin, Mitsubishi, Blue Star, Lloyd/Havells and other AC assemblies",
  },
];

export const ComponentsToAssemblies = () => {
  return (
    <Section disablePaddingY className="pb-(--section-y)">
      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-4 flex flex-col gap-3">
          <h2 className="text-fluid-32 font-semibold text-text-primary leading-none">
            From Components to <br className="hidden sm:block" />
            Complete Assemblies
          </h2>
          <p className="text-fluid-16 leading-snug text-text-secondary">
            Showcase actual products from the company profile:
          </p>
        </div>
        <div className="lg:col-span-4 flex justify-center w-full">
          <div className="relative w-full max-w-md aspect-3/4 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <Image
              src="/capability.jpg"
              alt="Manufacturing facility floor"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col">
          {capabilities.map((item, index) => (
            <div
              key={item.title}
              className={`group flex flex-col py-6 cursor-pointer ${
                index !== capabilities.length - 1
                  ? "border-b-2 border-gray-400"
                  : ""
              }`}
            >
              <h3 className="text-fluid-24 sm:text-xl font-bold mb-1 text-text-primary transition-colors duration-300 group-hover:text-primary">
                {item.title}
              </h3>
              <p className="text-fluid-16 text-text-secondary leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};