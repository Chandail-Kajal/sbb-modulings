import { BuiltOnExperience } from "@/components/about-us/builtOn-experience";
import { EngineeringExpertise } from "@/components/about-us/engineering-expertise";
import { OurJourney } from "@/components/about-us/ourjourney";
import { OurTeam } from "@/components/about-us/ourteam";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function AboutUs(){
  return (
    <div>
      <Header/>
      <Hero/>
      <EngineeringExpertise/>
      <BuiltOnExperience/>
      <OurJourney/>
      <OurTeam/>
      <Footer/>
    </div>
  )
}