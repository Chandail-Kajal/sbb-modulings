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
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-linear-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-linear-to-l from-white to-transparent" />
      <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
        {duplicatedLogos.map((logo, index) => (
          <div key={`${logo}-${index}`} className="px-3 shrink-0">
            <LogoBlock logo={logo} />
          </div>
        ))}
      </div>
    </div>
  );
};

const LogoBlock = ({ logo }: { logo: string }) => {
  return (
    <div className="w-54 h-18 p-4 border border-gray-400 shadow-md rounded-2xl flex items-center justify-center shadow-black/20 bg-white hover:shadow-lg transition-shadow">
      <Image
        src={`/client-logo/${logo}_logo.png`}
        alt={logo}
        height={40}
        width={120}
        className="object-contain max-h-12 w-auto"
      />
    </div>
  );
};
