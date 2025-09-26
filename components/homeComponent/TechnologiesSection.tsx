const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Language" },
  { name: "Django", category: "Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "GraphQL", category: "API" },
  { name: "REST APIs", category: "API" },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Language",
  "Cloud",
  "DevOps",
  "Database",
  "AI/ML",
  "API",
];

export default function TechnologiesSection() {
  return (
    <div className="py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-300 mb-6">
            <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
            <span className="text-gray-700 text-sm font-medium">
              Technologies
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Technologies We Use
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and frameworks to build
            robust, scalable, and efficient solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full border transition-all duration-200 ${
                category === "All"
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="text-2xl mb-3">
                {tech.name === "React" && "⚛️"}
                {tech.name === "Next.js" && "▲"}
                {tech.name === "TypeScript" && "🔷"}
                {tech.name === "Node.js" && "🟢"}
                {tech.name === "Python" && "🐍"}
                {tech.name === "Django" && "🎸"}
                {tech.name === "AWS" && "☁️"}
                {tech.name === "Docker" && "🐳"}
                {tech.name === "Kubernetes" && "⚙️"}
                {tech.name === "PostgreSQL" && "🐘"}
                {tech.name === "MongoDB" && "🍃"}
                {tech.name === "Redis" && "🔴"}
                {tech.name === "TensorFlow" && "🧠"}
                {tech.name === "PyTorch" && "🔥"}
                {tech.name === "GraphQL" && "🔺"}
                {tech.name === "REST APIs" && "🔗"}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
              <p className="text-xs text-gray-500">{tech.category}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Don&apos;t see your preferred technology? We&apos;re always learning and
            adapting to new tools and frameworks.
          </p>
          <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Discuss Your Tech Stack
          </button>
        </div>
      </div>
    </div>
  );
}
