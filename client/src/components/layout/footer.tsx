import { User, Mail, Phone } from "lucide-react";
import logoPath from "@assets/Logo.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoPath} 
                alt="Strong Cents Associates Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-primary">STRONG CENTS</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Associates</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for comprehensive financial services in Sri Lanka. 
              Expert accounting, tax, HR, and audit solutions for businesses and individuals.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300 flex items-center">
                <User className="mr-2 h-4 w-4" />
                <strong>MD:</strong> J.G.N.N. Kumara
              </p>
              <p className="text-gray-300 flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                strongcentsa@gmail.com
              </p>
              <p className="text-gray-300 flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                +94 071 113 4381
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Accounting & HR
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Tax Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Audit Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Other Services
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Strong Cents Associates. All rights reserved. | Professional Financial Services in Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}