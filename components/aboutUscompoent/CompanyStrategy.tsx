import { Button } from "../ui/button";
import Image from "next/image";
import { Lightbulb, Users, Shield } from "lucide-react"; // Import Lucide icons

const techChallenges = [
  {
    title: "Innovation and Digital Transformation",
    description:
      "We drive the future of technology by helping businesses adapt, evolve, and lead through digital transformation. From building cutting-edge applications to integrating AI-driven solutions, our goal is to continuously innovate and stay ahead of industry trends.",
    icon: Lightbulb, // Lucide icon
  },
  {
    title: "Inclusive Tech Communities and Growth",
    description:
      "Technology should benefit everyone. We create opportunities that empower diverse communities, nurture talent, and support inclusive economic growth, ensuring the digital revolution leaves no one behind.",
    icon: Users, // Lucide icon
  },
  {
    title: "Cybersecurity and Data Privacy",
    description:
      "Security is at the heart of everything we build. Our strategy focuses on safeguarding businesses against cyber threats, building resilient systems, and protecting user data with the highest level of privacy and trust.",
    icon: Shield, // Lucide icon
  },
];

export default function TechCompanyStrategy() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            We focus on the industry&apos;s long-term challenges
          </h2>
          {/* <p className="text-lg text-gray-600 mb-8">
            At Al-Karim Technologies, our strategy is built on tackling the
            biggest challenges shaping the future of the tech industry. We
            combine innovation, inclusivity, and security to create impactful
            solutions that last.
          </p> */}

          <div className="space-y-6 mt-10">
            {techChallenges.map((challenge, idx) => {
              const Icon = challenge.icon;
              return (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-[#003049]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <Button
            onClick={() => window.location.href = '/about/ourStrategy'}
              variant={"outline"}
              className="cursor-pointer bg-transparent hover:bg-gray-100"
            >
              Learn more about our strategy →
            </Button>
          </div>
        </div>

        <div className="relative w-full h-[400px] lg:h-[650px]">
          <Image
            src="/strategy.jpg"
            alt="Tech Strategy"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
