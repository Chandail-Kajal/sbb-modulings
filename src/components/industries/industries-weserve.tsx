import Image from "next/image";

type Industry = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
};

const industries: Industry[] = [
  {
    image: "/industries/automotive.jpg",
    imageAlt: "Automotive assembly line",
    title: "Automotive",
    description:
      "Tier-1 automotive experience runs through SBB's leadership team, and shows up on the floor — including door-visor sub-assembly running up to 1,600 car-sets per day. Our group's automotive heritage extends further through SBB Felts' NVH and filter product lines.",
  },
  {
    image: "/industries/ac.jpg",
    imageAlt: "Air conditioning unit installation",
    title: "Air Conditioning & HVAC",
    description:
      "This is where SBB's assembly capability is deepest: cassette AC lines for Daikin (up to 800 units/day) and for Panasonic, Havells, Blue Star, Mitsubishi and Hitachi under the Amber line (up to 350 units/day), plus split AC indoor unit assembly up to 1,400 units/day. New cassette AC lines have recently launched for Panasonic, Voltas, LLOYD, Mitsubishi, Hitachi, Godrej and Blue Star.",
  },
  {
    image: "/industries/whitegoods.jpg",
    imageAlt: "White goods kitchen appliances",
    title: "White Goods",
    description:
      "The original reason SBB was formed — diversification into white goods moulding and assembly — remains core to the business, with injection moulding capacity built to support large-format white goods housings and components.",
  },
  {
    image: "/industries/industrial.jpg",
    imageAlt: "Industrial plant at dusk",
    title: "Industrial",
    description:
      "Our medium and small-tonnage machines (250-450T and 90T) support precision industrial components and fittings alongside our larger automotive and HVAC programs.",
  },
];

export function IndustriesWeServe() {
  return (
    <div className="w-full">
      <div className="section-container py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="overflow-hidden rounded-2xl p-7 shadow-sm sm:p-8 lg:p-10"
              style={{ backgroundColor: "#F3F7FD" }}
            >
              <div className="relative h-60 w-full overflow-hidden rounded-xl sm:h-72 lg:h-80">
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              <h3
                className="mt-5 text-fluid-24 font-bold font-neue lg:mt-6"
                style={{ color: "#0057B8" }}
              >
                {industry.title}
              </h3>

              <p className="mt-2.5 text-fluid-18 leading-relaxed text-neutral-600 font-ce">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
