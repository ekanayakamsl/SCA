import { User, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import imgCeo from "@assets/img_ceo.webp";
import imgVision from "@assets/img_vision.webp";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Strong Cents Associates</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Building trust through expertise, integrity, and innovation in financial services.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Vision & Mission</h3>
            <p className="text-secondary leading-relaxed">
              At Strong Cents Associates, we provide specialized Business Process Outsourcing (BPO) solutions with a strong focus on accounting, bookkeeping, payroll, HR, and compliance services. As a trusted partner, we help businesses streamline their operations, reduce overheads, and stay fully compliant with regulatory requirements.
            </p>
            <p className="text-secondary leading-relaxed">
              Our expertise lies in offering end-to-end support for finance and human resource functions, allowing organizations to focus on growth while we manage their critical back-office tasks. With a team of qualified professionals, proven processes, and a commitment to accuracy and confidentiality, we ensure reliable and efficient outsourcing solutions tailored to your business needs.
            </p>
            <p className="text-secondary leading-relaxed">
              Whether you are a startup, SME, or established enterprise, Strong Cents Associates is here to deliver cost-effective, high-quality outsourcing services that drive efficiency, enhance productivity, and support sustainable success.
            </p>
          </div>
          <div>
            <img 
              src={imgVision}
              alt="Professional business environment" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
        
        {/* MD Profile */}
        <Card className="p-8 lg:p-12 shadow-lg">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <img 
                  src={imgCeo} 
                  alt="Noshantha Gunasekara - Founder & CEO" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Noshantha Gunasekara</h3>
                  <p className="text-primary font-semibold text-lg">Founder & CEO</p>
                </div>
                <p className="text-secondary leading-relaxed">
                  With extensive experience in financial management and business consulting, Mr. Noshantha leads 
                  Strong Cents Associates with a commitment to excellence and innovation. His expertise spans 
                  across international accounting standards, local compliance requirements, and strategic business 
                  development, ensuring our clients receive world-class service tailored to the Sri Lankan market.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-primary h-4 w-4" />
                    <span className="text-secondary">accounts@strongcents.lk</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-primary h-4 w-4" />
                    <span className="text-secondary">+94 91 227 3445</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
