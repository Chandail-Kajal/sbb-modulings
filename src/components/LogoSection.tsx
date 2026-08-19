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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
      {logos.map((logo) => (
        <LogoBlock logo={logo} key={logo} />
      ))}
    </div>
  );
};

const LogoBlock = ({ logo }: { logo: string }) => {
  return (
    <div className="w-full h-16 py-2 px-4 border border-gray-200 shadow-sm rounded-lg flex items-center justify-center bg-white hover:shadow-md transition-shadow">
      <Image
        src={`/client-logo/${logo}_logo.png`}
        alt={logo}
        height={40}
        width={120}
        className="object-contain max-h-10 w-auto"
      />
    </div>
  );
};
