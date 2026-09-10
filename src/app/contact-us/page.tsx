import ContactUsSection from "@/components/contact-us/hero";
import { CompanyLocations } from "@/components/contact-us/location";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import Image from "next/image";

export default function ContactUs() {
    return (
        <div>
            <Header />

            <ContactUsSection/>
            <CompanyLocations/>
            <Footer />
        </div>
    )



}