import { Card, CardContent } from "@/components/ui/card";
import { FileSpreadsheet, ReceiptText, Users2, Briefcase, CheckCircle } from "lucide-react";
import imgAccounting from "@assets/img_accounting.webp";
import imgTax from "@assets/img_tax.webp";
import imgHr from "@assets/img_hr.webp";
import imgOther from "@assets/img_other.webp";


const serviceDetails = [
  {
    id: "accounting",
    icon: FileSpreadsheet,
    title: "Accounting Services",
    color: "bg-blue-100 text-blue-600",
    checkColor: "text-blue-600",
    image: imgAccounting,
    imageAlt: "Financial documents and charts",
    features: [
      "Daily transaction recording and management",
      "Bank reconciliation and cash flow monitoring",
      "Monthly, quarterly, and annual financial statements",
      "Expert bookkeeping with cutting-edge technologies",
      "Budgeting, forecasting, and financial analysis",
      "Management reports for decision making"
    ],
    background: "bg-white"
  },
  {
    id: "tax",
    icon: ReceiptText,
    title: "Tax Services",
    color: "bg-yellow-100 text-yellow-700",
    checkColor: "text-yellow-700",
    image: imgTax,
    imageAlt: "Tax documents and calculations",
    features: [
      "Individual and company tax computation",
      "Annual income tax return preparation and submission",
      "Monthly and quarterly tax schedules",
      "VAT and income tax payment estimation",
      "RAMIS system updates and management",
      "All IRD registrations and compliance",
      "Advisory on tax planning and compliance"
    ],
    background: "bg-neutral",
    reverse: true
  },
  {
    id: "hr",
    icon: Users2,
    title: "HR & Payroll Services",
    color: "bg-rose-100 text-rose-600",
    checkColor: "text-rose-600",
    image: imgHr,
    imageAlt: "Professional HR review",
    features: [
      "Complete payroll handling and processing",
      "EPF/ETF/PAYE calculation and submission",
      "Personal file maintenance and HR support",
      "Labour law compliance and advisory",
      "Preparation of employee letters and contracts",
      "Leave and attendance management"
    ],
    background: "bg-white"
  },
  {
    id: "other",
    icon: Briefcase,
    title: "Other Services",
    color: "bg-indigo-100 text-indigo-600",
    checkColor: "text-indigo-600",
    image: imgOther,
    imageAlt: "Business registration and software setup",
    features: [
      "Complete company registration services",
      "Business name registrations",
      "Business proposals and feasibility reports for bank loans",
      "Physical verification of inventories",
      "Fixed assets verification and valuation",
      "Accounting software supply and installation",
      "Cheque writing and supporting software solutions",
      "Secretarial support and compliance filing"
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Explore Our Services</h2>
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
