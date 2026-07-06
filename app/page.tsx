import LoadingScreen from "@/components/LoadingScreen";
import BackToTop from "@/components/BackToTop";
import Gallery from "@/components/Gallery";
import WhatsAppButton from "@/components/WhatsAppButton";
import Process from "@/components/Process";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
  <LoadingScreen />
  <Navbar />
  <Hero />
  <Services />
  <WhyChooseUs />
  <Gallery />
  <Process />
  <Contact />
  <Footer />
  <BackToTop />
</main>
  );
}