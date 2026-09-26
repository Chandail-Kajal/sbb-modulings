import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";

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
          <div className="relative mt-10 w-5xl mx-auto overflow-hidden rounded-2xl sm:mt-12 lg:mt-14">
            <div className="relative w-full h-70 sm:h-100 lg:h-130 xl:h-100">
              <Image
                src="/products/ac.jpg"
                alt="Cassette AC unit product"
                fill
                className="object-cover object-center w-full  rounded-2xl"
                priority
              />
            </div>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <button
              className="flex h-12 w-12 items-center justify-center rounded-ful bg-white text-neutral-700 transition-colors hover:bg-neutral-100"
              aria-label="Previous product"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-8 stroke-2"
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
                className="size-8 stroke-2"
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

      <Footer />
    </div>
  );
}
