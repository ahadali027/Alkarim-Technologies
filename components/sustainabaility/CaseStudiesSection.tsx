import Image from "next/image";
import SectionWrapper from "../SectionWrapper";

export default function CaseStudiesSection() {
  return (
    <SectionWrapper className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className=" ">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full border border-gray-300 mb-6">
            <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
            <span className="text-gray-700 text-sm font-medium">Real Results</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Case Studies
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl ">
            See how our sustainable technology solutions deliver measurable impact for our clients
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mt-16">
          {/* Case Study 1 */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="/strategy.jpg" 
                alt="Cost reduction case study" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4">
                <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                  Cost Optimization
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-black mb-4">Cost Reduction & Scale</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We helped a client consolidate services, optimize queries, and adopt efficient
                deployments—reducing cloud spend by 28% while improving page speed.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-black">28%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-700">3x</div>
                  <div className="text-sm text-gray-600">Faster Load Times</div>
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
                alt="Greener operations case study" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4">
                <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Environmental Impact
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-black mb-4">Greener Operations</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Through better caching and server-side rendering, we cut redundant compute and
                reduced carbon intensity from traffic spikes.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-black">40%</div>
                  <div className="text-sm text-gray-600">Less Compute</div>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-lg border border-gray-200">
                  <div className="text-2xl font-bold text-gray-700">60%</div>
                  <div className="text-sm text-gray-600">Carbon Reduction</div>
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


