import Image from "next/image";
import SectionWrapper from "../SectionWrapper";

const stories = [
  {
    id: 1,
    title: "Behind the Scenes: Building Sustainable Technology",
    excerpt: "An inside look at how our development team approaches sustainability in every line of code, from energy-efficient algorithms to green hosting solutions.",
    author: "Sarah Chen",
    role: "Lead Developer",
    date: "December 12, 2024",
    image: "/values.jpg",
    readTime: "6 min read",
    category: "Thought Leadership"
  },
  {
    id: 2,
    title: "Client Spotlight: Transforming Healthcare with AI",
    excerpt: "Discover how we partnered with a major healthcare provider to implement AI-powered patient management systems that improved care quality by 40%.",
    author: "Michael Rodriguez",
    role: "Project Manager",
    date: "December 8, 2024",
    image: "/leadership.jpg",
    readTime: "8 min read",
    category: "Success Stories"
  },
  {
    id: 3,
    title: "The Future of Remote Work: Lessons Learned",
    excerpt: "Three years of remote-first development has taught us valuable lessons about team collaboration, productivity, and maintaining company culture.",
    author: "Emily Watson",
    role: "Head of People",
    date: "December 3, 2024",
    image: "/whoweare.jpg",
    readTime: "5 min read",
    category: "Company Culture"
  },
  {
    id: 4,
    title: "Tech Trends 2025: What to Watch",
    excerpt: "Our technology experts share their predictions for the most impactful tech trends in 2025, from quantum computing to sustainable AI.",
    author: "Dr. Alex Kumar",
    role: "Chief Technology Officer",
    date: "November 25, 2024",
    image: "/strategy.jpg",
    readTime: "7 min read",
    category: "Industry Insights"
  }
];

export default function StoriesInsightsSection() {
  return (
    <SectionWrapper className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className=" ">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full border border-gray-300 mb-6">
            <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
            <span className="text-gray-700 text-sm font-medium">Stories & Insights</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Stories & Insights
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl ">
            Deep dives, thought leadership, and behind-the-scenes stories from our team and clients
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mt-16">
          {stories.map((story) => (
            <div 
              key={story.id} 
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {story.category}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{story.date}</span>
                  <span>{story.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors">
                  {story.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {story.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-medium text-gray-600">
                        {story.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-black">{story.author}</div>
                      <div className="text-xs text-gray-500">{story.role}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Read story</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
