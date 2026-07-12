import AboutHero from "../../components/AboutHero";
import CompanyOverview from "../../components/CompanyOverview";
import MissionVision from "../../components/MissionVision";
import WhyChooseAbout from "../../components/WhyChooseAbout";
import CoreValues from "../../components/CoreValues";
import AboutCTA from "../../components/AboutCTA";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <CompanyOverview />
      <MissionVision />
      <WhyChooseAbout />
      <CoreValues />
      <AboutCTA />
    </main>
  );
}