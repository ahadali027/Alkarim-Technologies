import SectionWrapper from "../SectionWrapper";

const services = [
  {
    title: "Custom Software Development",
    description: "Bespoke applications built to solve your specific business challenges with modern technologies and scalable architectures.",
    icon: "💻",
    features: ["Web Applications", "Desktop Software", "API Development", "System Integration"]
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions that engage your customers and streamline operations.",
    icon: "📱",
    features: ["iOS & Android Apps", "Cross-platform Solutions", "UI/UX Design", "App Store Optimization"]
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent systems that automate processes, analyze data, and enhance decision-making capabilities.",
    icon: "🤖",
    features: ["Process Automation", "Data Analytics", "Predictive Modeling", "Natural Language Processing"]
  },
  {
    title: "Cloud Solutions",
    description: "Scalable, secure cloud infrastructure and migration services for modern business operations.",
    icon: "☁️",
    features: ["Cloud Migration", "Infrastructure Setup", "DevOps & CI/CD", "Security & Compliance"]
  },
  {
    title: "E-commerce Platforms",
    description: "Complete online store solutions with payment processing, inventory management, and analytics.",
    icon: "🛒",
    features: ["Online Stores", "Payment Integration", "Inventory Systems", "Customer Analytics"]
  },
  {
    title: "Digital Transformation",
    description: "End-to-end digital strategy and implementation to modernize your business operations.",
    icon: "🔄",
    features: ["Strategy Consulting", "Legacy Modernization", "Process Optimization", "Change Management"]
  }
];

export default function ServicesSection() {
  return (
    <SectionWrapper className="py-20 bg-white border-b border-gray-200">
      <div className="">
        <div className="mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full border border-gray-300 mb-6">
            <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
            <span className="text-gray-700 text-sm font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Comprehensive Technology Solutions
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl ">
            From concept to deployment, we provide end-to-end technology services that drive business growth and innovation
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-black rounded-t-2xl"></div>
              
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              </div>
              
              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span>Learn more</span>
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
