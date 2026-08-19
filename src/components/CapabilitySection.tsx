import Image from "next/image";
import { Section } from "@/components/Section";

interface CapabilityItem {
  title: string;
  description: string;
  isPrimary?: boolean;
}

const capabilities: CapabilityItem[] = [
  {
    title: "Automotive Components",
    description: "Door Visors and other automotive parts",
    isPrimary: true,
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
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-4 flex flex-col gap-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary leading-[1.15]">
            From Components to <br className="hidden sm:block" />
            Complete Assemblies
          </h2>
          <p className="text-sm text-text-secondary">
            Showcase actual products from the company profile:
          </p>
        </div>
        <div className="lg:col-span-4 flex justify-center w-full">
          <div className="relative w-full max-w-sm aspect-3/4 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
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
              className={`flex flex-col py-6 ${
                index !== capabilities.length - 1 ? "border-b border-gray-300" : ""
              }`}
            >
              <h3
                className={`text-lg sm:text-xl font-bold mb-1 ${
                  item.isPrimary ? "text-primary" : "text-text-primary"
                }`}
              >
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};