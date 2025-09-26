import SectionWrapper from "../SectionWrapper";

export default function ContactOverviewSection() {
  return (
    <SectionWrapper className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto ">
        <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full border border-gray-300 mb-8">
          <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
          <span className="text-gray-700 text-sm font-medium">How We Help</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          We&apos;re Here to Help
        </h2>
        
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Whether you have questions about our services, need technical support, or want to discuss a new project, 
            our team is ready to assist you. We believe in building lasting relationships through exceptional service.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gray-300">
                <div className="w-8 h-8 bg-black rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Quick Response</h3>
              <p className="text-gray-600 text-sm">We typically respond within 24 hours to all inquiries</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gray-300">
                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">Our technical team provides professional guidance and solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gray-300">
                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Personalized Service</h3>
              <p className="text-gray-600 text-sm">Tailored solutions that meet your specific business needs</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
