import SectionWrapper from "../SectionWrapper";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    content: "The team delivered an exceptional e-commerce platform that increased our online sales by 300%. Their attention to detail and technical expertise is unmatched.",
    rating: 5,
    image: "/porfile/1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "DataFlow Solutions",
    content: "Working with this team was a game-changer for our data analytics capabilities. They transformed our legacy systems into modern, scalable solutions.",
    rating: 5,
    image: "/porfile/2.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "HealthTech Pro",
    content: "The mobile app they developed for us has revolutionized patient care. The user experience is intuitive and the performance is outstanding.",
    rating: 5,
    image: "/porfile/3.jpg"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder",
    company: "GreenEnergy Corp",
    content: "Their AI-powered optimization system reduced our operational costs by 40%. The ROI was evident within the first quarter of implementation.",
    rating: 5,
    image: "/porfile/4.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <SectionWrapper className="py-20 bg-white border-b border-gray-200">
      <div className="">
        <div className="mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full border border-gray-300 mb-6">
            <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
            <span className="text-gray-700 text-sm font-medium">Client Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            What Our Clients Say
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl ">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                &quot;{testimonial.content}&quot;
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </SectionWrapper>
  );
}
