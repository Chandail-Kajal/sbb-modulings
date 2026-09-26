import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { Automotive } from "@/components/products/automotive";
import { CasseteAc } from "@/components/products/casseteAC";

export default function Products() {
  return (
    <div>
      <Header />
      <Section>
        <div className="flex flex-col items-center text-center font-neue  section-container">
          <p className="text-fluid-29 font-light text-neutral-500 tracking-tight mb-2">
            Products / Our Work
          </p>
          <h2 className="text-fluid-47 font-bold tracking-tight text-neutral-900 leading-relaxed">
            What We Build
          </h2>
          <div className="mt-6 w-full space-y-4 text-fluid-18 text-neutral-600 font-normal leading-relaxed font-ce">
            <p>
              A look at the components and assemblies moving through our
              facilities — from single moulded automotive parts to fully
              assembled, box-packed <br />
              cassette AC units.
            </p>
          </div>
          <div className="relative mt-10 w-full max-w-6xl mx-auto overflow-hidden rounded-2xl sm:mt-12 lg:mt-14">
            <div className="relative w-full h-60 sm:h-72 lg:h-80 xl:h-90">
              <Image
                src="/products/ac.jpg"
                alt="Cassette AC unit product"
                fill
                className="object-cover object-[center_60%] h-full w-full rounded-2xl"
                priority
              />
            </div>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-700 transition-colors hover:bg-neutral-100"
              aria-label="Previous product"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-8 stroke-2 sm:stroke-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 12H5m0 0l6-6m-6 6l6 6"
                />
              </svg>
            </button>
            <button
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-700 transition-colors hover:bg-neutral-100"
              aria-label="Next product"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-8 stroke-2 sm:stroke-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m0 0l-6-6m6 6l-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      </Section>
      <Automotive />
      <CasseteAc />
      <Section disablePaddingY>
        <div className="section-container">
          <div className="max-w-3xl">
            <h2 className="text-fluid-47 leading-none font-bold text-neutral-900 ">
              Split AC components
            </h2>
            <p className="mt-3 text-fluid-18 leading-snug text-neutral-500 ">
              Indoor unit (IDU) components and assemblies, produced at volumes
              up to 1,400 units/day
            </p>
          </div>

          <div className="relative mt-8 aspect-16/6 w-full overflow-hidden rounded-3xl">
            <Image
              src="/products/repair.jpg"
              alt="Technician servicing the internal components of a split AC indoor unit"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </Section>
      <Section>
        <div className="section-container">
          <div className="max-w-3xl">
            <h2 className="font-bold text-neutral-900 leading-none text-fluid-47">
              Decorative panels
            </h2>
            <p className="mt-3 text-fluid-18 leading-snug text-neutral-500">
              A dedicated 150-part decorative panel assembly, built across 17
              main-line and 13 sub-assembly stations — the first line of its
              kind set up in India for this part.
            </p>
          </div>

          <div className="relative mt-8 aspect-16/6 w-full overflow-hidden rounded-3xl">
            <Image
              src="/products/decorativetiles.jpg"
              alt="Three decorative inlaid panels with geometric patterns laid on a wooden floor"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </Section>
      <Section disablePaddingY className="pb-(--section-y)">
        <div className="section-container">
          <div
            className="relative w-full rounded-4xl overflow-hidden p-8 sm:py-20 sm:px-12 lg:py-28 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-8"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #4b92e7 0%, #1562b8 100%)",
              boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-25"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="flex flex-col gap-6 lg:gap-8 max-w-3xl z-10 text-white">
              <h2 className="text-fluid-47 font-bold leading-none font-neue">
                Request a Product Catalogue
              </h2>

              <p className="text-fluid-18 text-white/80 leading-snug font-ce">
                Get detailed specifications, images and more information about
                our volumes up to 1400 units/day.
              </p>
              <div className="pt-2 flex sm:flex-row flex-col gap-4">
                <button className="bg-white text-[#0057B8] hover:bg-gray-100 font-semibold text-fluid-16 px-6 py-3 rounded-xl transition-colors cursor-pointer shadow-md">
                  Request a Product Catalogue
                </button>
                <button className="bg-white text-[#0057B8] hover:bg-gray-100 font-semibold text-fluid-16 px-6 py-3 rounded-xl transition-colors cursor-pointer shadow-md">
                  Discuss Your Component
                </button>
              </div>
            </div>

            {/* Masked Graphic */}
            <div className="relative w-full md:w-[40%] h-48 sm:h-64 md:h-full min-h-50 flex items-center justify-center z-10">
              <div
                className="bg-white w-full h-64"
                style={{
                  WebkitMaskImage: "url('/CtaBanner.png')",
                  maskImage: "url('/CtaBanner.png')",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskPosition: "right",
                  maskPosition: "right",
                }}
              />
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
