import Image from "next/image";
import SectionWrapper from "../SectionWrapper";

export default function BusinessCaseStudiesSection() {
  return (
    <SectionWrapper className="py-12 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className=" ">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-300 mb-6">
            <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
            <span className="text-gray-700 text-sm font-medium">Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Case Studies
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl ">
            Real-world examples of how our technology solutions have transformed businesses and driven growth
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mt-16">
          {/* Case Study 1 */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="/strategy.jpg" 
                alt="E-commerce platform case study" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4">
                <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                  E-commerce Platform
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-black mb-4">Retail Chain Digital Transformation</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Built a comprehensive e-commerce platform for a retail chain, integrating inventory management, 
                payment processing, and customer analytics—increasing online sales by 150%.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-black">150%</div>
                  <div className="text-sm text-gray-600">Sales Increase</div>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-700">40%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-500">
                <span>Read full case study</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="/values.jpg" 
                alt="Healthcare management system case study" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4">
                <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Healthcare System
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-black mb-4">Healthcare Management System</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Developed a HIPAA-compliant patient management system with telemedicine capabilities, 
                reducing administrative overhead by 60% and improving patient satisfaction.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-black">60%</div>
                  <div className="text-sm text-gray-600">Admin Reduction</div>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-700">85%</div>
                  <div className="text-sm text-gray-600">Patient Satisfaction</div>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-500">
                <span>Read full case study</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
