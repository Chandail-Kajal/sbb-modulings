import Image from "next/image";
import { Section } from "../Section";

export function Automotive() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1.5fr_1fr] sm:gap-8 items-stretch">
        {/* Left Column */}
        <div className="flex flex-col justify-between gap-6 sm:gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl lg:text-4xl">
              Automotive parts
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500 sm:text-base max-w-xl">
              Injection-moulded automotive components, including door-visor parts
              supplied for high-volume assembly programs.
            </p>
          </div>

          <div className="relative aspect-[2.2/1] w-full overflow-hidden rounded-2xl sm:rounded-[22px]">
            <Image
              src="/products/seat.jpg"
              alt="Vehicle interior dashboard and steering wheel"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 60vw, 100vw"
            />
          </div>
        </div>

        {/* Right Column (Full Height) */}
        <div className="relative min-h-[260px] w-full overflow-hidden rounded-2xl sm:h-full sm:min-h-0 sm:rounded-[22px]">
          <Image
            src="/products/car.jpg"
            alt="Vehicle back seats viewed from the front row"
            fill
            className="object-cover"
            sizes="(min-width: 640px) 40vw, 100vw"
          />
        </div>
      </div>
    </Section>
  );
}
