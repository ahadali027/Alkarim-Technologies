import SectionWrapper from "../SectionWrapper";

const industries = [
  {
    title: "Real Estate",
    desc: "Property management systems, virtual tours, and CRM solutions for real estate professionals.",
    icon: "🏠",
    features: ["Property Management", "Virtual Tours", "CRM Systems", "Market Analytics"]
  },
  {
    title: "E-commerce", 
    desc: "Complete online retail solutions with payment processing, inventory, and customer management.",
    icon: "🛍️",
    features: ["Online Stores", "Payment Gateways", "Inventory Management", "Customer Analytics"]
  },
  {
    title: "Healthcare",
    desc: "HIPAA-compliant solutions for patient management, telemedicine, and medical data processing.",
    icon: "🏥",
    features: ["Patient Management", "Telemedicine", "Medical Records", "Compliance Solutions"]
  },
  {
    title: "Finance",
    desc: "Secure financial applications, trading platforms, and fintech solutions for modern banking.",
    icon: "💰",
    features: ["Banking Apps", "Trading Platforms", "Payment Systems", "Risk Management"]
  },
  {
    title: "Education",
    desc: "Learning management systems, virtual classrooms, and educational content platforms.",
    icon: "🎓",
    features: ["LMS Platforms", "Virtual Classrooms", "Student Portals", "Assessment Tools"]
  },
  {
    title: "Manufacturing",
    desc: "IoT solutions, supply chain management, and automation systems for industrial operations.",
    icon: "🏭",
    features: ["IoT Integration", "Supply Chain", "Quality Control", "Process Automation"]
  },
];

export default function IndustriesServedSection() {
  return (
    <SectionWrapper className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className=" ">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full border border-gray-300 mb-6">
            <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
            <span className="text-gray-700 text-sm font-medium">Industries We Serve</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Industries Served
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl ">
            We work across diverse sectors, bringing deep industry knowledge and proven solutions to each project
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {industries.map((industry) => (
            <div 
              key={industry.title} 
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-black rounded-t-2xl"></div>
              
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-4">{industry.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{industry.desc}</p>
              </div>
              
              <div className="space-y-3">
                {industry.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span>Explore solutions</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
