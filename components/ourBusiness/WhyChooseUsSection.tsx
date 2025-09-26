import SectionWrapper from "../SectionWrapper";

const valueProps = [
  {
    title: "Scalability",
    desc: "Our solutions are built to grow with your business, handling increased load and complexity seamlessly.",
    icon: "📈",
    features: ["Future-proof architecture", "Auto-scaling capabilities", "Performance optimization", "Load balancing"]
  },
  {
    title: "Innovation", 
    desc: "We leverage cutting-edge technologies and methodologies to deliver competitive advantages.",
    icon: "💡",
    features: ["Latest technologies", "Agile development", "Continuous innovation", "R&D investment"]
  },
  {
    title: "Cost Efficiency",
    desc: "Optimized solutions that reduce operational costs while maximizing business value and ROI.",
    icon: "💰",
    features: ["Cost optimization", "ROI maximization", "Efficient resource use", "Long-term savings"]
  },
  {
    title: "Long-term Partnerships",
    desc: "We build lasting relationships, providing ongoing support and evolution of your technology solutions.",
    icon: "🤝",
    features: ["Ongoing support", "Regular updates", "Strategic guidance", "Dedicated teams"]
  },
];

export default function WhyChooseUsSection() {
  return (
    <SectionWrapper className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className=" ">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full border border-gray-300 mb-6">
            <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
            <span className="text-gray-700 text-sm font-medium">Our Value</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Why Choose Us
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl ">
            Four key reasons why businesses trust us to deliver exceptional technology solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16">
          {valueProps.map((prop) => (
            <div 
              key={prop.title} 
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-black rounded-t-2xl"></div>
              
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{prop.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-4">{prop.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{prop.desc}</p>
              </div>
              
              <div className="space-y-3">
                {prop.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
