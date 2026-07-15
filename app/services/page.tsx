import ServicesCTA from "../../components/services/ServicesCTA";
import SectorsServed from "../../components/services/SectorsServed";
import PropertyManagement from "../../components/services/PropertyManagement";
import ComplianceSection from "../../components/services/ComplianceSection";
import SoftServices from "../../components/services/SoftServices";
import SecurityServices from "../../components/services/SecurityServices";
import HardServices from "../../components/services/HardServices";
import IFMSection from "../../components/services/IFMSection";
import ServicesHero from "../../components/services/ServicesHero";
import ServicesIntro from "../../components/services/ServicesIntro";
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">

<ServicesHero />

   
{/* Services Introduction */}
<ServicesIntro />
    {/* Integrated Facilities Management */}
<IFMSection />
    {/* Hard Services */}

{/* Hard Services */}

<HardServices />
  {/* Soft Services */}

<SoftServices />
    {/* Security Services */}

<SecurityServices />
    {/* Property & Asset Management */}

<PropertyManagement />

{/* Compliance & Health & Safety */}

<ComplianceSection />

{/* Sectors We Serve */}

<SectorsServed />
    {/* Call To Action */}

<ServicesCTA />
    </main>
  );
}