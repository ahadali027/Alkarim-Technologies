import Image from "next/image";
import SectionWrapper from "../SectionWrapper";

export default function FeaturedStorySection() {
  return (
    <SectionWrapper className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full border border-gray-300 mb-8">
          <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
          <span className="text-gray-700 text-sm font-medium">Featured Story</span>
        </div>
        
        <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 lg:h-auto">
              <Image
                src="/strategy.jpg"
                alt="Featured story"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                  Company Update
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-sm text-gray-500 mb-4">December 15, 2024</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                Major Partnership Announcement: Expanding Our Global Reach
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We&apos;re excited to announce our strategic partnership with leading technology companies 
                across three continents. This collaboration will enable us to deliver even more 
                innovative solutions to our clients worldwide while maintaining our commitment to 
                sustainable and ethical technology practices.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                  <span>Global Expansion</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                  <span>Strategic Partnership</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                  <span>Innovation</span>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-500">
                <span>Read full story</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
