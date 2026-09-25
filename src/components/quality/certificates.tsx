import Image from "next/image";
import { Section } from "../Section";

type Cert = {
  standard: string;
  certNo: string;
  certifyingBody: string;
  validUntil: string;
  logo: string;
  logoAlt: string;
};

const certificates: Cert[] = [
  {
    standard: "ISO 9001:2015",
    certNo: "44564/23/AN",
    certifyingBody: "RINA Services S.p.A.",
    validUntil: "26 Oct 2026",
    logo: "/quality/ISO.png",
    logoAlt: "ISO 9001:2015 Logo",
  },
  {
    standard: "IATF 16949:2016",
    certNo: "TS/44564/23",
    certifyingBody: "RINA Services S.p.A.",
    validUntil: "26 Oct 2026",
    logo: "/quality/iatf.svg",
    logoAlt: "IATF 16949:2016 Logo",
  },
];

export function Certificate() {
  return (
    <Section className="w-full py-10 sm:py-16 lg:py-18" disablePaddingY>
      <div className="section-container">
        {/* Overlapping Layout: Left Image Card with Certificate Cards overlaying on top */}
        <div className="relative flex flex-col pt-8 sm:pt-12 lg:flex-row lg:items-end">
          {/* Card 1 (Base/Left): Handshake Image Card */}
          <div className="relative z-10 h-[420px] w-full shrink-0 overflow-hidden rounded-[26px] bg-neutral-900 shadow-lg sm:h-[480px] lg:h-[650px] lg:w-[40%] xl:w-[38%]">
            <Image
              src="/quality/handshake.png"
              alt="Business handshake"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Dark gradient overlay for text clarity */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/15 to-transparent" />

            <div className="absolute left-7 top-7 z-10 text-white sm:left-9 sm:top-9 lg:left-10 lg:top-10">
              <p className="text-fluid-18 font-normal text-white/85 font-neue">
                Certifications
              </p>
              <h2 className="mt-1.5 text-fluid-40 font-bold tracking-tight text-white leading-tight font-neue">
                Our Certifications
              </h2>
            </div>
          </div>

          {/* Cards 2 & 3 (Overlay/Right): Certificate Cards overlapping over the handshake photo */}
          <div className="relative z-20 mt-8 flex w-full flex-col gap-6 sm:flex-row sm:gap-6 lg:-ml-14 lg:mt-0 lg:mb-4 lg:w-[68%] lg:gap-7 xl:-ml-16 xl:w-[70%]">
            {certificates.map((cert) => (
              <div
                key={cert.standard}
                className="relative flex flex-1 flex-col justify-between rounded-[24px] border border-neutral-100 bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.10)] sm:p-8 lg:p-9 xl:p-10"
              >
                {/* Card Background Image */}
                <div
                  className="absolute inset-0 rounded-[24px] pointer-events-none opacity-[0.2]"
                  style={{
                    backgroundImage: "url('/map-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Floating Logo Badge overlapping top-right */}
                <div className="absolute -top-14 right-6 sm:-top-16 sm:right-7 lg:-top-18 lg:right-8 h-28 w-28 sm:h-32 sm:w-32 lg:h-36 lg:w-36 drop-shadow-md transition-transform duration-200 hover:scale-105">
                  <Image
                    src={cert.logo}
                    alt={cert.logoAlt}
                    width={200}
                    height={200}
                    className="h-full w-full object-contain rounded-2xl"
                  />
                </div>

                {/* Standard */}
                <div className="pr-16 sm:pr-20">
                  <p className="text-fluid-16 font-normal text-neutral-400 font-ce">
                    Standard
                  </p>
                  <p className="mt-1.5 text-fluid-24 font-bold tracking-tight text-neutral-900 font-neue">
                    {cert.standard}
                  </p>
                </div>

                <div className="my-4 sm:my-5 lg:my-5.5 border-t border-neutral-100" />

                {/* Certificate No. */}
                <div>
                  <p className="text-fluid-16 font-normal text-neutral-400 font-ce">
                    Certificate No.
                  </p>
                  <p className="mt-1.5 text-fluid-24 font-bold tracking-tight text-neutral-900 font-neue">
                    {cert.certNo}
                  </p>
                </div>

                <div className="my-4 sm:my-5 lg:my-5.5 border-t border-neutral-100" />

                {/* Certifying body */}
                <div>
                  <p className="text-fluid-16 font-normal text-neutral-400 font-ce">
                    Certifying body
                  </p>
                  <p className="mt-1.5 text-fluid-24 font-bold tracking-tight text-neutral-900 font-neue">
                    {cert.certifyingBody}
                  </p>
                </div>

                <div className="my-4 sm:my-5 lg:my-5.5 border-t border-neutral-100" />

                {/* Valid until */}
                <div>
                  <p className="text-fluid-16 font-normal text-neutral-400 font-ce">
                    Valid until
                  </p>
                  <p className="mt-1.5 text-fluid-24 font-bold tracking-tight text-neutral-900 font-neue">
                    {cert.validUntil}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expiration Notice / Footnote */}
        <p className="mt-8 text-fluid-16 text-neutral-400 font-ce sm:mt-10">
          Certificates expire 26 Oct 2026 — confirm renewal status before
          publishing this page, and update the &quot;valid until&quot; date once
          the renewed certificate is issued.
        </p>
      </div>
    </Section>
  );
}
