import { Check } from "lucide-react";

const features = [
  {
    title: "Expert Team",
    description: "Our qualified professionals bring years of experience in Sri Lankan financial compliance and international standards."
  },
  {
    title: "Technology-Driven",
    description: "We leverage advanced accounting and management systems to deliver efficient and accurate services."
  },
  {
    title: "Personalized Solutions",
    description: "Tailored approaches designed to meet your unique business needs and growth objectives."
  },
  {
    title: "Local Compliance",
    description: "In-depth knowledge of Sri Lankan regulations, RAMIS system, IRD requirements, and labour laws ensures full compliance."
  }
];


export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office workspace" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why Choose Strong Cents Associates?
            </h2>
            
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="text-white text-sm" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-secondary">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
