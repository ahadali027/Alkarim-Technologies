
const contactMethods = [
  {
    title: "Email Address",
    desc: "Send us an email and we'll get back to you within 24 hours",
    icon: "📧",
    details: ["info@company.com", "support@company.com"],
    action: "Send Email"
  },
  {
    title: "Phone Numbers", 
    desc: "Call us during business hours for immediate assistance",
    icon: "📞",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    action: "Call Now"
  },
  {
    title: "Office Address",
    desc: "Visit our office for in-person meetings and consultations",
    icon: "📍",
    details: ["123 Business Street", "Suite 100", "City, State 12345", "United States"],
    action: "Get Directions"
  },
  {
    title: "Business Hours",
    desc: "Our team is available during these hours for your convenience",
    icon: "🕒",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
    action: "View Schedule"
  },
  {
    title: "Response Time",
    desc: "We're committed to quick and efficient communication",
    icon: "⚡",
    details: ["General inquiries: 24 hours", "Emergency support: 2-4 hours", "Technical issues: 4-8 hours"],
    action: "Learn More"
  },
  {
    title: "Social Media",
    desc: "Connect with us on social platforms for updates and support",
    icon: "🌐",
    details: ["LinkedIn", "Twitter", "Facebook", "Instagram"],
    action: "Follow Us"
  },
];

export default function ContactInformationSection() {
  return (
    <div className="py-12 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-300 mb-6">
            <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
            <span className="text-gray-700 text-sm font-medium">Contact Details</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Contact Information
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl ">
            Multiple ways to reach us - choose the method that works best for you
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {contactMethods.map((method, ) => (
            <div 
              key={method.title} 
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-black rounded-t-2xl"></div>
              
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{method.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-4">{method.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{method.desc}</p>
              </div>
              
              <div className="space-y-3 mb-6">
                {method.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span>{method.action}</span>
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
