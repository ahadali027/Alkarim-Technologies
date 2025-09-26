"use client"

import { useRouter } from "next/navigation";
import CustomButton from "../CustomButton";


export default function FutureVisionSection() {
  const router = useRouter()
  return (
    <div className="relative py-12 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white shadow-sm rounded-full border border-gray-200 mb-8">
          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
          <span className="text-gray-800 text-sm font-medium tracking-wide">
            Looking Ahead
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
          Our Future Vision
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
          We are committed to building future-ready digital ecosystems by
          investing in performance-first architectures, smart automation,
          and responsible AI — ensuring scalable and sustainable growth.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: "🏗️",
              title: "Performance-First",
              desc: "Architectures designed for speed and efficiency",
            },
            {
              icon: "🤖",
              title: "Smart Automation",
              desc: "Intelligent systems that optimize themselves",
            },
            {
              icon: "🌱",
              title: "Responsible AI",
              desc: "Ethical AI that benefits society and environment",
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
        <div className="mt-16 pt-8 border-t flex flex-col items-center">
          <span className="text-base font-medium text-gray-700 mb-3">
            Join us in building a sustainable future
          </span>
          
          <CustomButton className="text-black" onClick={()=> router.push('/contact-us') } title="Get Involved"/>
        </div>
      </div>
    </div>
  );
}
