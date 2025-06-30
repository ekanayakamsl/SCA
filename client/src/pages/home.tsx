import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import ServicesOverview from "@/components/sections/services-overview";
import WhyChooseUs from "@/components/sections/why-choose-us";
import AboutSection from "@/components/sections/about-section";
import DetailedServices from "@/components/sections/detailed-services";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <WhyChooseUs />
        <AboutSection />
        <DetailedServices />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
