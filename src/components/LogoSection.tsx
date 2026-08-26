import Image from "next/image";

const logos = [
  "blue_star",
  "daikin",
  "godrej",
  "havells",
  "hitachi",
  "mitsubishi",
];

export const LogoSection = () => {
  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-linear-to-r from-white to-transparent" />

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-linear-to-l from-white to-transparent" />

      <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
        {/* First set */}
        {logos.map((logo) => (
          <div key={logo} className="shrink-0 px-3">
            <LogoBlock logo={logo} />
          </div>
        ))}

        {/* Exact duplicate */}
        {logos.map((logo) => (
          <div key={`duplicate-${logo}`} className="shrink-0 px-3">
            <LogoBlock logo={logo} />
          </div>
        ))}
      </div>
    </div>
  );
};

const LogoBlock = ({ logo }: { logo: string }) => {
  return (
    <div className="flex h-18 w-70 items-center justify-center rounded-2xl border border-gray-400 bg-white p-4 shadow-md shadow-black/20 transition-shadow hover:shadow-lg">
      <Image
        src={`/client-logo/${logo}_logo.png`}
        alt={logo}
        width={120}
        height={40}
        className="h-auto max-h-12 w-auto object-contain"
      />
    </div>
  );
};