import Image from "next/image";
import { MapPin } from "lucide-react";
import { Section } from "@/components/Section";

interface Facility {
  id: number;
  address: string;
  description: string;
}

const facilities: Facility[] = [
  {
    id: 1,
    address: "84 km Stone, Sangwari Jarthal Road",
    description:
      "Panasonic, Daikin, Mitsubishi, Blue Star, Lloyd/Havells and other AC assemblies",
  },
  {
    id: 2,
    address: "Plot No. 8 & 9, Sector 3, HSIIDC Bawal",
    description:
      "Panasonic, Daikin, Mitsubishi, Blue Star, Lloyd/Havells and other AC assemblies",
  },
  {
    id: 3,
    address: "Plot No. 58, Sector 14, HSIIDC Bawal",
    description:
      "Panasonic, Daikin, Mitsubishi, Blue Star, Lloyd/Havells and other AC assemblies",
  },
];

export const StrategicFacilities = () => {
  return (
    <Section className="relative overflow-hidden py-8 sm:py-12 lg:py-14" disablePaddingY>
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <Image
          src="/map-bg.jpg"
          alt="map background"
          fill
          className="object-cover"
          priority
        />
        {/* 70% White Overlay */}
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 bg-transparent">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-fluid-32 font-semibold text-text-primary leading-none">
              Strategically Located <br className="hidden sm:block" />
              Manufacturing Facilities
            </h2>
            <p className="text-fluid-16 text-text-secondary">
              Display the three locations mentioned in the profile:
            </p>
          </div>

          <div className="flex flex-col gap-6 pt-2 max-w-lg">
            {facilities.map((item) => (
              <div
                key={item.id}
                className="group flex flex-row items-start gap-4 cursor-pointer"
              >
                <div className="pt-0.5 shrink-0">
                  <MapPin
                    className="text-text-primary transition-colors duration-300 group-hover:text-primary group-hover:fill-primary/10"
                    size={24}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-fluid-24 font-bold text-text-primary transition-colors duration-300 group-hover:text-primary">
                    {item.address}
                  </h3>
                  <p className="text-fluid-16 text-text-secondary leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center items-center w-full h-full">
          <div className="relative w-full max-w-2xl h-90 sm:h-112.5 lg:h-130 xl:h-145">
            <Image
              src="/map.png"
              alt="Manufacturing Facilities Map"
              fill
              className="object-contain object-right"
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};