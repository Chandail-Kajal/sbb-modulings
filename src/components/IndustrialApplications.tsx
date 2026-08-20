import Image from "next/image";
import { Section } from "@/components/Section";

interface IndustryItem {
  number: string;
  title: string;
  description: string;
  image: string;
  isPrimary?: boolean;
}

const industries: IndustryItem[] = [
  {
    number: "01",
    title: "Automotive",
    description:
      "We manufacture injection-moulded and assembled automotive components, including parts such as door visors, with production capabilities designed for high-volume requirements.",
    image: "/industrial-application/app_1.jpg",
    isPrimary: true,
  },
  {
    number: "02",
    title: "Air Conditioning",
    description:
      "We provide moulded components and complete assembly solutions for cassette and split AC applications, supporting multiple leading AC brands.",
    image: "/industrial-application/app_2.jpg",
  },
  {
    number: "03",
    title: "White Goods",
    description:
      "Our injection moulding and assembly capabilities support the production of components and assemblies for white goods and appliance applications.",
    image: "/industrial-application/app_3.jpg",
  },
  {
    number: "04",
    title: "Industrial Applications",
    description:
      "With versatile moulding infrastructure and experienced engineering teams, we support a range of industrial component requirements with scalable production capabilities.",
    image: "/industrial-application/app_4.jpg",
  },
];

export const IndustrialApplications = () => {
  return (
    <Section>
      <div className="flex flex-col gap-10 lg:gap-14">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-fluid-32 font-semibold text-text-primary max-w-xl leading-tight">
            Serving Diverse Industrial Applications
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary max-w-xs text-left md:text-right">
            SBB Mouldings delivers precision moulding and assembly solutions
            across automotive, HVAC, white goods, and industrial applications.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          <div className="flex flex-col gap-8 relative">
            <div className="relative bg-primary text-white p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col justify-between min-h-70">
              <div>
                <span className="text-5xl lg:text-6xl font-bold block mb-4">
                  {industries[0].number}
                </span>
                <h3 className="text-xl font-semibold mb-3">
                  {industries[0].title}
                </h3>
                <p className="text-xs leading-relaxed opacity-90">
                  {industries[0].description}
                </p>
              </div>
              <div className="hidden lg:block absolute -right-12 top-1/3 -translate-y-1/2 w-12 h-20 bg-linear-to-r from-primary to-primary z-20 [clip-path:polygon(0_0,100%_50%,0_100%)]" />
            </div>

            <div className="hidden lg:block absolute left-1/2 top-70 bottom-1/3 w-3 bg-linear-to-b from-primary/10 via-primary to-primary -translate-x-1/2 z-0" />

            <div className="relative min-h-70 rounded-3xl overflow-hidden shadow-md">
              <Image
                src={industries[0].image}
                alt={industries[0].title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 relative">
            <div className="relative min-h-70 rounded-3xl overflow-hidden shadow-md z-10">
              <Image
                src={industries[1].image}
                alt={industries[1].title}
                fill
                className="object-cover"
              />
            </div>

            <div className="hidden lg:block absolute left-1/2 top-1/3 bottom-70 w-3 bg-linear-to-t from-primary/10 via-primary to-primary -translate-x-1/2 z-0" />

            <div className="relative bg-white text-text-primary border border-gray-100 z-10 p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col justify-between min-h-70">
              <div>
                <span className="text-5xl lg:text-6xl font-extrabold block mb-4 text-transparent [-webkit-text-stroke:1.5px_#3b3b3b]">
                  {industries[1].number}
                </span>
                <h3 className="text-xl font-semibold mb-3">
                  {industries[1].title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {industries[1].description}
                </p>
              </div>
              <div className="hidden lg:block absolute -right-12 top-1/3 -translate-y-1/2 w-12 h-20 bg-linear-to-r from-primary via-primary-light to-white z-20 [clip-path:polygon(0_0,100%_50%,0_100%)]" />
            </div>
          </div>
          <div className="flex flex-col gap-8 relative">
            <div className="relative bg-white text-text-primary border border-gray-100 p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col justify-between min-h-70">
              <div>
                <span className="text-5xl lg:text-6xl font-extrabold block mb-4 text-transparent [-webkit-text-stroke:1.5px_#3b3b3b]">
                  {industries[2].number}
                </span>
                <h3 className="text-xl font-semibold mb-3">
                  {industries[2].title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {industries[2].description}
                </p>
              </div>

              <div className="hidden lg:block absolute -right-12 top-1/3 -translate-y-1/2 w-12 h-20 bg-linear-to-r from-primary via-primary-light to-white z-20 [clip-path:polygon(0_0,100%_50%,0_100%)]" />
            </div>

            <div className="hidden lg:block absolute left-1/2 top-70 bottom-1/3 w-3 bg-linear-to-b from-primary/10 via-primary to-primary -translate-x-1/2 z-0" />

            <div className="relative min-h-70 rounded-3xl overflow-hidden shadow-md">
              <Image
                src={industries[2].image}
                alt={industries[2].title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 relative">
            <div className="relative min-h-70 rounded-3xl overflow-hidden shadow-md z-10">
              <Image
                src={industries[3].image}
                alt={industries[3].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden lg:block absolute left-1/2 top-1/3 bottom-70 w-3 bg-linear-to-t from-primary/10 via-primary to-primary -translate-x-1/2 z-0" />
            <div className="relative bg-white text-text-primary border border-gray-100 p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col justify-between min-h-70">
              <div>
                <span className="text-5xl lg:text-6xl font-extrabold block mb-4 text-transparent [-webkit-text-stroke:1.5px_#3b3b3b]">
                  {industries[3].number}
                </span>
                <h3 className="text-xl font-semibold mb-3">
                  {industries[3].title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {industries[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
