import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, FileText, Search, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Accounting & HR",
    description: "Complete bookkeeping, payroll, and HR management with Xero and QuickBooks expertise.",
    color: "bg-primary/10 text-primary",
    anchor: "accounting"
  },
  {
    icon: FileText,
    title: "Tax Services",
    description: "Expert tax computation, filing, and compliance for individuals and companies.",
    color: "bg-accent/10 text-accent",
    anchor: "tax"
  },
  {
    icon: Search,
    title: "Audit Services",
    description: "Comprehensive internal, special purpose, and statutory auditing services.",
    color: "bg-green-100 text-green-600",
    anchor: "audit"
  },
  {
    icon: Settings,
    title: "Other Services",
    description: "Company registration, business proposals, and software solutions.",
    color: "bg-purple-100 text-purple-600",
    anchor: "other"
  }
];

export default function ServicesOverview() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Financial Services
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            From daily bookkeeping to management accounts, we offer comprehensive financial solutions tailored to meet your business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.title} className="hover:shadow-xl transition-shadow cursor-pointer group">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${service.color}`}>
                    <IconComponent className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-secondary mb-6">{service.description}</p>
                  <button
                    onClick={() => scrollToSection(service.anchor)}
                    className="text-primary font-semibold hover:text-blue-800 transition-colors flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
