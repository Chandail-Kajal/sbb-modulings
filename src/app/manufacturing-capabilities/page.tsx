import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ControlledManufacturing from "@/components/manufacturing-capabilities/controlled-manufacturing";
import ManufacturingHero from "@/components/manufacturing-capabilities/manufacturingHero";
import Production from "@/components/manufacturing-capabilities/production";
import TechnicalExcellence from "@/components/manufacturing-capabilities/technical-excellence";
import WhatsNext from "@/components/manufacturing-capabilities/whats-next";
import Image from "next/image";

export default function ManufacturingCapabilities() {
    return (
        <div>
            <Header />
            <ManufacturingHero />
            <Production />
            <div className="relative w-full overflow-hidden mb-10">
                <div className="relative w-full xl:h-120 lg:h-115 md:h-110 sm:h-100 h-95">
                    <Image
                        src="/manufacturing-machine.png"
                        alt="Manufacturing facility and injection moulding machinery"
                        fill
                        priority
                        className="object-cover object-center w-full"
                        sizes="100vw"
                    />
                </div>
            </div>
            <ControlledManufacturing/>
            <TechnicalExcellence/>
            <WhatsNext/>
            <Footer />

        </div>
    )
}