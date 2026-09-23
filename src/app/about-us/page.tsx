import { BuiltOnExperience } from "@/components/about-us/builtOn-experience";
import { EngineeringExpertise } from "@/components/about-us/engineering-expertise";
import { OurApproach } from "@/components/about-us/our-approach";
import { OurJourney } from "@/components/about-us/ourjourney";
import { OurPeople } from "@/components/about-us/ourpeople";
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
      <OurPeople/>
      <OurApproach/>
      <Footer/>
    </div>
  )
}