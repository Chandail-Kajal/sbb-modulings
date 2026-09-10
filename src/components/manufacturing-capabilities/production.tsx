import Image from "next/image";
import { Section } from "../Section";

interface CapabilityItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function Production() {
  const capabilities: CapabilityItem[] = [
    {
      id: 1,
      title: "Advanced Infrastructure",
      description: "Moulding and dedicated assembly facilities.",
      imageSrc: "/advanced-infrastructure.png",
      imageAlt: "Advanced Infrastructure",
    },
    {
      id: 2,
      title: "Flexible Production",
      description:
        "A broad range of machine capacities for different component requirements.",
      imageSrc: "/flexible-production.jpg",
      imageAlt: "Flexible Production",
    },
    {
      id: 3,
      title: "Integrated Capabilities",
      description:
        "Moulding, assembly packaging, warehousing, and testing.",
      imageSrc: "/integrated-capabilities.jpg",
      imageAlt: "Integrated Capabilities",
    },
  ];

  return (
    <Section>
      <div className="section-container">
        {/* Header Section */}
        <div className="flex sm:flex-row flex-col justify-between items-start gap-6">
          <div className="sm:max-w-lg w-full mx-auto sm:mx-0">
            <p className="text-fluid-24 font-light text-neutral-500 tracking-tight mb-2">
              Flexible build
            </p>
            <h2 className="text-fluid-40 font-bold tracking-tight text-neutral-900 leading-tight">
              Built Around Production <br />
              <span className="text-[#0052cc]">Requirements</span>
            </h2>
          </div>

          <div className="sm:max-w-[42%] w-full font-ce text-fluid-16 text-neutral-600 sm:text-right leading-relaxed space-y-4">
            <p>
              Our manufacturing capabilities are designed around your specific
              production requirements, from initial concept and tooling to
              high-volume production. We combine advanced technology, skilled
              expertise, and flexible processes to deliver consistent quality,
              efficiency, and reliable results at every stage.
            </p>
          </div>
        </div>

        {/* Capabilities Grid — mt-16 lg:mt-24 controls the gap between text and cards */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {capabilities.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              {/* Capsule Image Frame */}
              <div className="w-full flex items-center justify-center mb-6">
                <div className="w-full aspect-[2.1/1] relative p-1.5 rounded-full border-2 border-transparent transition-colors duration-300 group-hover:border-[#0052cc]">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 tracking-tight mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 max-w-[280px] leading-snug">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}