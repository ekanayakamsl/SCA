import { Button } from "@/components/ui/button";

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
              Your Trusted Partner for 
              <span className="text-accent"> Financial Excellence</span> 
              in Sri Lanka
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive accounting, tax, HR, and audit services delivered by expert professionals with cutting-edge technology and personalized solutions.
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
                className="border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 h-auto font-semibold"
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Professional business meeting" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
