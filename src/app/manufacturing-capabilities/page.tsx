import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ControlledManufacturing from "@/components/manufacturing-capabilities/controlled-manufacturing";
import ManufacturingHero from "@/components/manufacturing-capabilities/manufacturingHero";
import Production from "@/components/manufacturing-capabilities/production";
import TechnicalExcellence from "@/components/manufacturing-capabilities/technical-excellence";
import Image from "next/image";

export default function ManufacturingCapabilities() {
    return (
        <div>
            <Header />
            <ManufacturingHero />
            <Production />
            <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen overflow-hidden mb-10">
                <div className="relative w-full aspect-21/9 md:aspect-3.5/1">
                    <Image
                        src="/manufacturing-machine.png"
                        alt="Manufacturing facility and injection moulding machinery"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                </div>
            </div>
            <ControlledManufacturing/>
            <TechnicalExcellence/>
            <Footer />

        </div>
    )
}