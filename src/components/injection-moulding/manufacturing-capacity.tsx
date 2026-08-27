import { Section } from "../Section";

export function ManufacturingCapacity() {
  const metricsData = [
    {
      title: "2800 sq. m",
      subtitle: "initial injection moulding facility",
    },
    {
      title: "3500 sq. m",
      subtitle: "second unit added in 2021",
    },
    {
      title: "4000 sq. m",
      subtitle: "third unit added in December 2024",
    },
    {
      title: null,
      subtitle: "Dedicated assembly and warehousing areas",
    },
    {
      title: "25-ton",
      subtitle: "overhead crane facility",
    },
  ];

  return (
    <Section>
      <div className="flex flex-col items-center text-center font-neue  section-container">
        {/* Header Section */}
        <p className="text-fluid-24 font-light text-neutral-500 tracking-tight mb-2">
          Our Production Infrastructure
        </p>

        <h2 className="text-fluid-40 font-bold tracking-tight text-neutral-900 leading-tight">
          Manufacturing Capacity That Grows <br />
          With <span className="text-[#0052cc]">Your Requirements</span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-fluid-16 text-neutral-600 max-w-2xl font-normal">
          <strong className="font-semibold text-neutral-800">SBB Mouldings</strong> has developed multiple manufacturing facilities to support injection moulding, assembly, and warehousing.
        </p>

        {/* Section divider caption */}
        <p className="mt-10 mb-8 sm:mb-12 text-fluid-24 font-semibold text-neutral-900">
          The company&apos;s manufacturing footprint includes:
        </p>

        {/* Metrics Grid with Vertical Dividers */}
        <div className="grid grid-cols-2 md:grid-cols-5 w-full divide-y md:divide-y-0 md:divide-x divide-neutral-300">
          {metricsData.map((item, index) => (
            <MetricBlock key={index} title={item.title} subtitle={item.subtitle} />
          ))}
        </div>
      </div>
    </Section>
  );
}

const MetricBlock = ({
  title,
  subtitle,
}: {
  title: string | null;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4 py-4 md:py-0 min-h-[90px]">
      {title ? (
        <>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 leading-none">
            {title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-neutral-500 leading-tight">
            {subtitle}
          </p>
        </>
      ) : (
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};