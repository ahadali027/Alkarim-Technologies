import { Button } from "../ui/button";
import Image from "next/image";

const customerMoments = [
  {
    title: "High-Integrity Marine Natural Capital Markets",
    description: "Unlocking the potential of marine resources for sustainable futures.",
    image: "/coral-image.jpg", // replace with your actual image path
  },
  {
    title: "The Crown Estate Youth Panel",
    description: "Engaging with the next generation to create impactful sustainable solutions.",
    image: "/youth-panel.jpg", // replace with your actual image path
  },
  {
    title: "Creating a Green Legacy",
    description: "Promoting sustainable farming and reforestation to preserve our planet.",
    image: "/green-legacy.jpg", // replace with your actual image path
  },
  {
    title: "Green Electricity for 7 Million Homes",
    description: "Empowering homes with sustainable energy sources to reduce carbon footprints.",
    image: "/wind-turbine.jpg", // replace with your actual image path
  },
  {
    title: "New Initiative",
    description: "Description of your new initiative or project.",
    image: "/mnt/data/a93a1f5e-6777-4c98-8faf-5a7ac54796f4.png", // Path to your uploaded image
  },
];

export default function OurCustomerMoments() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerMoments.map((moment, idx) => (
            <div
              key={idx}
              className="relative rounded-lg overflow-hidden group"
            >
              {/* Image */}
              <Image
                src={moment.image}
                alt={moment.title}
                width={400} // you can adjust these values
                height={300} // you can adjust these values
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-bold text-xl">{moment.title}</h3>
                <p className="text-gray-200 text-sm mt-2">{moment.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant={"outline"} className="bg-transparent cursor-pointer">
            Scroll for more →
          </Button>
        </div>
      </div>
    </section>
  );
}
