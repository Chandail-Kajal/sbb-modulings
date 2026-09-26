import Image from "next/image";
import { Section } from "../Section";

function Card({
  src,
  alt,
  label,
  className = "",
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="33vw" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/0 to-transparent" />
      <span className="absolute left-5 top-5 text-base font-semibold text-white sm:text-lg">
        {label}
      </span>
    </div>
  );
}

export function CasseteAc() {
  return (
    <Section>
      <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
        Cassette AC — final assembled units
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-[340px_1fr]">
        <Card
          src="/products/panasonic.jpg"
          alt="Panasonic cassette AC installed in ceiling"
          label="Panasonic Cassette AC"
          className="aspect-[3/4] sm:aspect-auto sm:h-full"
        />

        <div className="grid gap-6 sm:grid-rows-2">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[43fr_57fr]">
            <Card
              src="/products/ac.jpg"
              alt="LLOYD by Havells cassette AC indoor unit"
              label="LLOYD (Havells) Cassette AC"
              className="aspect-[4/3]"
            />
            <Card
              src="/products/mitsubhishi.jpg"
              alt="Mitsubishi cassette AC wall-mounted unit"
              label="Mitsubishi Cassette AC"
              className="aspect-[4/3]"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[55fr_45fr]">
            <Card
              src="/products/bluestar.jpg"
              alt="Technician installing Blue Star cassette AC unit"
              label="Blue Star Cassette AC"
              className="aspect-[4/3]"
            />
            <Card
              src="/products/daikin.jpg"
              alt="Daikin 2x2 cassette AC installed in ceiling"
              label="Daikin 2x2 Cassette AC"
              className="aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}