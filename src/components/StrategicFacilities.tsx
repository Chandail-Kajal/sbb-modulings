import Image from "next/image";
import { MapPin } from "lucide-react";
import { Section } from "@/components/Section";

interface Facility {
  id: number;
  address: string;
  description: string;
  isPrimary?: boolean;
}

const facilities: Facility[] = [
  {
    id: 1,
    address: "84 km Stone, Sangwari Jarthal Road",
    description:
      "Panasonic, Daikin, Mitsubishi, Blue Star, Lloyd/Havells and other AC assemblies",
    isPrimary: true,
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
    <Section className="bg-transparent">
      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
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
          <div className="flex flex-col gap-8 pt-2 max-w-lg">
            {facilities.map((item) => (
              <div key={item.id} className="flex flex-row items-start gap-4">
                <div className="pt-0.5 shrink-0">
                  <MapPin
                    className={
                      item.isPrimary
                        ? "text-primary fill-primary/10"
                        : "text-text-primary"
                    }
                    size={24}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h3
                    className={`text-fluid-24 font-bold ${
                      item.isPrimary ? "text-primary" : "text-text-primary"
                    }`}
                  >
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
          <div className="relative w-full max-w-lg h-full aspect-3/3">
            <Image
              src="/map.png"
              alt="Strategically Located Manufacturing Facilities Map"
              fill
              className="object-contain drop-shadow-md"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
