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
    <Section className="w-full pb-(--section-y)" disablePaddingY>
      <div className="section-container">
        <div className="relative flex flex-col pt-4 sm:pt-8 lg:flex-row lg:items-end">
          {/* Handshake image card */}
          <div className="relative z-10 h-64 sm:h-100 md:h-120 lg:h-145 xl:h-160 w-full shrink-0 overflow-hidden rounded-[26px] bg-neutral-900 shadow-lg lg:w-[40%] xl:w-[38%]">
            <Image
              src="/quality/handshake.png"
              alt="Business handshake"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/15 to-transparent" />

            <div className="absolute left-6 top-6 sm:left-8 sm:top-8 lg:left-10 lg:top-10 z-10 text-white">
              <p className="text-fluid-24 font-normal text-white/85 font-neue leading-none">
                Certifications
              </p>
              <h2 className="mt-1.5 text-fluid-40 font-bold tracking-tight text-white leading-none font-neue">
                Our Certifications
              </h2>
            </div>
          </div>

          {/* Certificate cards container */}
          <div className="relative z-20 mt-14 sm:mt-16 flex w-full flex-col gap-14 sm:flex-row sm:gap-6 lg:-ml-16 lg:mt-0 lg:mb-2 lg:w-[68%] lg:gap-7 xl:-ml-20 xl:w-[70%]">
            {certificates.map((cert) => (
              <div
                key={cert.standard}
                className="relative flex flex-1 flex-col justify-between rounded-3xl border border-neutral-100 bg-white p-6 shadow-[0px_8px_8px_rgba(0,0,0,0.10)] sm:p-7 lg:p-9 xl:px-10 lg:py-8"
              >
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none opacity-[0.2]"
                  style={{
                    backgroundImage: "url('/map-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Card Header: Standard text + Floating logo in flex layout */}
                <div className="relative z-10 flex items-start justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-fluid-16 font-normal text-[#525252] font-ce">
                      Standard
                    </p>
                    <p className="mt-1 text-fluid-24 font-bold tracking-tight text-neutral-900 font-neue leading-tight">
                      {cert.standard}
                    </p>
                  </div>

                  <div className="-mt-11 sm:-mt-13 lg:-mt-16 h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 xl:h-36 xl:w-36 shrink-0 transition-transform duration-200 hover:scale-105">
                    <Image
                      src={cert.logo}
                      alt={cert.logoAlt}
                      width={200}
                      height={200}
                      className="h-full w-full object-contain rounded-2xl"
                    />
                  </div>
                </div>

                <div className="my-3 sm:my-4 lg:my-4" />

                <div>
                  <p className="text-fluid-16 font-normal text-[#525252] font-ce">
                    Certificate No.
                  </p>
                  <p className="mt-1.5 text-fluid-24 font-bold tracking-tight text-neutral-900 font-neue">
                    {cert.certNo}
                  </p>
                </div>

                <div className="my-3 sm:my-4 lg:my-5 border-t border-neutral-200" />

                <div>
                  <p className="text-fluid-16 font-normal text-[#525252] font-ce">
                    Certifying body
                  </p>
                  <p className="mt-1.5 text-fluid-24 font-bold tracking-tight text-neutral-900 font-neue">
                    {cert.certifyingBody}
                  </p>
                </div>

                <div className="my-3 sm:my-4 lg:my-5 border-t border-neutral-200" />

                <div>
                  <p className="text-fluid-16 font-normal text-[#525252] font-ce">
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

        <p className="mt-6 text-fluid-16 text-[#717171] font-ce sm:mt-10">
          Certificates expire 26 Oct 2026 — confirm renewal status before
          publishing this page, and update the &quot;valid until&quot; date once
          the renewed certificate is issued.
        </p>
      </div>
    </Section>
  );
}
