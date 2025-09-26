import Image from "next/image";


const newsItems = [
  {
    id: 1,
    title: "Product Launch: Next-Gen Analytics Platform",
    excerpt: "Introducing our revolutionary analytics platform that provides real-time insights and predictive modeling for businesses of all sizes.",
    date: "December 10, 2024",
    category: "Product Updates",
    image: "/strategy.jpg",
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "Industry Recognition: Best Tech Innovation Award",
    excerpt: "We're honored to receive the Best Tech Innovation Award at the Global Technology Summit for our sustainable software solutions.",
    date: "December 5, 2024",
    category: "Achievements",
    image: "/values.jpg",
    readTime: "2 min read"
  },
  {
    id: 3,
    title: "Client Success: 50% Efficiency Improvement",
    excerpt: "How we helped a Fortune 500 company reduce operational costs by 50% through intelligent automation and process optimization.",
    date: "November 28, 2024",
    category: "Success Stories",
    image: "/whoweare.jpg",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "Team Expansion: New Office in Silicon Valley",
    excerpt: "We're excited to announce the opening of our new Silicon Valley office, bringing our total global presence to 8 locations.",
    date: "November 20, 2024",
    category: "Company Updates",
    image: "/leadership.jpg",
    readTime: "2 min read"
  },
  {
    id: 5,
    title: "Sustainability Report: Carbon Neutral Operations",
    excerpt: "Our latest sustainability report shows we've achieved carbon neutral operations across all our development centers worldwide.",
    date: "November 15, 2024",
    category: "Sustainability",
    image: "/img1.jpeg",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Technology Conference: Keynote Presentation",
    excerpt: "Our CTO delivered a keynote on 'The Future of Sustainable Technology' at the International Tech Conference in London.",
    date: "November 8, 2024",
    category: "Events",
    image: "/strategy.jpg",
    readTime: "3 min read"
  }
];

export default function NewsSection() {
  return (
    <div className="py-12 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-300 mb-6">
            <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
            <span className="text-gray-700 text-sm font-medium">Latest News</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            News & Announcements
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl ">
            Stay updated with our latest product releases, company milestones, and industry insights
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <span>Read more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
