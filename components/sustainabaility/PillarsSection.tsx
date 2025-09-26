const pillars = [
  {
    title: "Technology Sustainability",
    desc: "We build scalable, maintainable, and energy-efficient solutions that optimize performance and cost.",
    icon: "⚡",
    features: [
      "Energy-efficient architecture",
      "Optimized performance",
      "Cost-effective scaling",
    ],
  },
  {
    title: "Business Sustainability",
    desc: "Future-ready, cost-efficient products designed to evolve with market and customer needs.",
    icon: "🚀",
    features: [
      "Future-proof design",
      "Cost optimization",
      "Market adaptability",
    ],
  },
  {
    title: "Social Responsibility",
    desc: "Ethical practices, long-term partnerships, and innovation that benefits society.",
    icon: "🤝",
    features: [
      "Ethical practices",
      "Long-term partnerships",
      "Social innovation",
    ],
  },
];

export default function PillarsSection() {
  return (
    <div className="py-12 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-300 mb-6">
            <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
            <span className="text-gray-700 text-sm font-medium">
              Our Foundation
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Sustainability Pillars
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl ">
            Three core principles that guide our approach to building
            sustainable technology solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mt-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-black rounded-t-2xl"></div>

              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {pillar.desc}
                </p>
              </div>

              <div className="space-y-3">
                {pillar.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
