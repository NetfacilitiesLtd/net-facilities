import AboutHero from "../../components/AboutHero";
import CompanyOverview from "../../components/CompanyOverview";
import MissionVision from "../../components/MissionVision";
import WhyChooseAbout from "../../components/WhyChooseAbout";
import CoreValues from "../../components/CoreValues";
import AboutCTA from "../../components/AboutCTA";
import Accreditations from "../../components/Accreditations";
export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
<CompanyOverview />
<MissionVision />
<WhyChooseAbout />
<CoreValues />
<Accreditations />
<AboutCTA />
    </main>
  );
}