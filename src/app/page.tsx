import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/Services";
import Testimonials from "@/components/Testimonals";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <ServicesSection />
      <Testimonials />
      <AboutSection />
      <ContactSection />
      <Footer/>
    </div>
  );
}
