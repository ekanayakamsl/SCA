import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, FileText, Search, Settings } from "lucide-react";

const serviceDetails = [
  {
    id: "accounting",
    icon: TrendingUp,
    title: "Accounting & HR Services",
    color: "bg-primary/10 text-primary",
    checkColor: "text-primary",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    imageAlt: "Financial documents and charts",
    features: [
      "Daily transaction recording and management",
      "Monthly, quarterly, and annual financial statements",
      "Expert bookkeeping with Xero and QuickBooks",
      "Complete payroll handling and processing",
      "EPF/ETF/PAYE calculation and submission",
      "Personal file maintenance and HR support"
    ],
    background: "bg-white"
  },
  {
    id: "tax",
    icon: FileText,
    title: "Tax Services",
    color: "bg-accent/10 text-accent",
    checkColor: "text-accent",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    imageAlt: "Tax documents and calculations",
    features: [
      "Individual and company tax computation",
      "Annual income tax return submission",
      "Monthly and quarterly tax schedules",
      "VAT and income tax payment estimation",
      "RAMIS system updates and management",
      "All IRD registrations and compliance"
    ],
    background: "bg-neutral",
    reverse: true
  },
  {
    id: "audit",
    icon: Search,
    title: "Audit Services",
    color: "bg-green-100 text-green-600",
    checkColor: "text-green-600",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    imageAlt: "Professional audit review",
    features: [
      "Comprehensive internal audit services",
      "Special purpose audit engagements",
      "Annual statutory audit compliance",
      "Risk assessment and mitigation strategies",
      "Financial control system evaluation",
      "Detailed audit reporting and recommendations"
    ],
    background: "bg-white"
  },
  {
    id: "other",
    icon: Settings,
    title: "Other Services",
    color: "bg-purple-100 text-purple-600",
    checkColor: "text-purple-600",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    imageAlt: "Business registration and software setup",
    features: [
      "Complete company registration services",
      "Business proposals for bank loans",
      "Physical verification of inventories",
      "Fixed assets verification and valuation",
      "Accounting software supply and installation",
      "Cheque writing and supporting software solutions"
    ],
    background: "bg-neutral",
    reverse: true
  }
];

export default function DetailedServices() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Comprehensive Financial Services</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Detailed breakdown of our specialized service offerings across all financial disciplines.
          </p>
        </div>
        
        <div className="space-y-16">
          {serviceDetails.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} id={service.id}>
                <div className={`rounded-2xl p-8 lg:p-12 ${service.background === 'bg-white' ? 'bg-white shadow-lg' : 'bg-neutral'}`}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${service.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={service.reverse ? 'lg:col-start-2' : ''}>
                      <div className="flex items-center space-x-4 mb-8">
                        <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${service.color}`}>
                          <IconComponent className="text-2xl" />
                        </div>
                        <h3 className="text-3xl font-bold">{service.title}</h3>
                      </div>
                      
                      <div className="space-y-4">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className={`mt-1 h-5 w-5 ${service.checkColor}`} />
                            <span className="text-secondary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={service.reverse ? 'lg:col-start-1' : ''}>
                      <img 
                        src={service.image}
                        alt={service.imageAlt}
                        className="rounded-xl shadow-lg w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
