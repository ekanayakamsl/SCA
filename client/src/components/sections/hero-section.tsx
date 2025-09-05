import { Button } from "@/components/ui/button";
import imgMain from "@assets/img_main.webp";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Your Trusted
              <span className="text-accent"> Accounts </span> 
              Partner in Sri Lanka
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive accounting, tax, and HR services delivered by expert professionals with cutting-edge technology and personalized solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("services")}
                className="bg-accent hover:bg-yellow-500 text-white px-8 py-4 h-auto font-semibold shadow-lg"
              >
                Explore Services
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-white bg-transparent hover:bg-white hover:text-primary text-white px-8 py-4 h-auto font-semibold transition-all duration-200"
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={imgMain} 
              alt="Professional business meeting" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
