"use client"

import { useRouter } from "next/navigation";
import CustomButton from "../CustomButton";

export default function NewsCTASection() {
  const router = useRouter()
  return (
    <div className="relative py-12 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white shadow-sm rounded-full border border-gray-200 mb-8">
          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
          <span className="text-gray-800 text-sm font-medium tracking-wide">
            Stay Connected
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
          Stay Updated with Our Journey
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
          Don&apos;t miss out on our latest updates, insights, and success stories. 
          Join our community and be the first to know about new developments.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: "📧",
              title: "Newsletter Subscription",
              desc: "Get weekly updates delivered directly to your inbox with our curated newsletter",
            },
            {
              icon: "💼",
              title: "LinkedIn Follow",
              desc: "Connect with us on LinkedIn for professional updates and industry insights",
            },
            {
              icon: "🐦",
              title: "Twitter Updates",
              desc: "Follow us on Twitter for real-time news and quick updates",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm border hover:shadow-lg transition duration-300 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border bg-gray-50 text-3xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {item.desc}
              </p>
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Subscribe Now
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 pt-8 border-t flex flex-col items-center">
          <span className="text-base font-medium text-gray-700 mb-3">
            Want to collaborate or share your story?
          </span>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <CustomButton 
              className="text-black" 
              onClick={() => router.push('/contact-us')} 
              title="Contact Us"
            />
            <CustomButton 
              className="text-gray-700 border border-gray-300 bg-white hover:bg-gray-50" 
              onClick={() => router.push('/our-business')} 
              title="View Our Services"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
