import { User, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
              At Strong Cents Associates, we envision becoming Sri Lanka's most trusted financial services partner, 
              empowering businesses and individuals to achieve their financial goals through comprehensive, 
              technology-driven solutions and personalized service excellence.
            </p>
            <p className="text-secondary leading-relaxed">
              Our mission is to provide exceptional accounting, tax, and HR services that ensure compliance, 
              optimize financial performance, and support sustainable growth for our clients across diverse industries.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
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
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400" 
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
                    <span className="text-secondary">info@strongcents.lk</span>
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
