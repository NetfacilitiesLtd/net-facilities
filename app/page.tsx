import LoadingScreen from "@/components/LoadingScreen";
import BackToTop from "@/components/BackToTop";
import Gallery from "@/components/Gallery";
import WhatsAppButton from "@/components/WhatsAppButton";
import Process from "@/components/Process";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomeCTA from "@/components/HomeCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
  <LoadingScreen />
  <Hero />
  <Services />
  <WhyChooseUs />
  <Gallery />
<Process />
<HomeCTA />
  <BackToTop />
</main>
  );
}