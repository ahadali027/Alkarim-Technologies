"use client"

import { useRouter } from "next/navigation";
import CustomButton from "../CustomButton";

export default function HomeCTASection() {
  const router = useRouter()
  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white shadow-sm rounded-full border border-gray-200 mb-8">
          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
          <span className="text-gray-800 text-sm font-medium tracking-wide">
            Ready to Start
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Let&apos;s discuss your project and create a solution that drives real results. 
          Our team is ready to help you achieve your technology goals.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "💬",
              title: "Free Consultation",
              desc: "Schedule a free 30-minute consultation to discuss your project requirements and goals",
            },
            {
              icon: "📋",
              title: "Custom Proposal",
              desc: "Receive a detailed proposal tailored to your specific needs and budget",
            },
            {
              icon: "🚀",
              title: "Start Development",
              desc: "Begin your project with our experienced team and proven development process",
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
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CustomButton 
              className="text-black" 
              onClick={() => router.push('/contact-us')} 
              title="Get Started Today"
            />
            <CustomButton 
              className="text-gray-700 border border-gray-300 bg-white hover:bg-gray-50" 
              onClick={() => router.push('/our-business')} 
              title="View Our Services"
            />
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>Or call us directly: <span className="font-semibold text-gray-700">+1 (555) 123-4567</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
