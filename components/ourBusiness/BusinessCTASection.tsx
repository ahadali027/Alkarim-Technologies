"use client"

import { useRouter } from "next/navigation";
import CustomButton from "../CustomButton";

export default function BusinessCTASection() {
  const router = useRouter()
  return (
    <div className="relative py-12 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
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
          Let&apos;s Build Smarter Solutions Together
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
          Ready to transform your business with innovative technology? 
          Let&apos;s discuss your project and create a solution that drives real results.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: "🚀",
              title: "Get Started",
              desc: "Start your digital transformation journey with our expert team",
            },
            {
              icon: "💬",
              title: "Consultation",
              desc: "Free consultation to understand your business needs and challenges",
            },
            {
              icon: "🎯",
              title: "Custom Solution",
              desc: "Tailored technology solutions designed specifically for your business",
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
            Ready to transform your business?
          </span>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <CustomButton 
              className="text-black" 
              onClick={() => router.push('/contact-us')} 
              title="Get Started"
            />
            <CustomButton 
              className="text-gray-700 border border-gray-300 bg-white hover:bg-gray-50" 
              onClick={() => router.push('/our-business/solutions')} 
              title="View Solutions"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
