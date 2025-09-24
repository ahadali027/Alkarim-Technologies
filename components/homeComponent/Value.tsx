"use client";

import Image from "next/image";
import { Users, Globe, ShieldCheck, Zap } from "lucide-react";
import SectionWrapper from "../SectionWrapper";

const values = [
  {
    icon: Users,
    title: "Stronger Connections",
    description:
      "We help businesses build meaningful digital connections with their audience, driving trust and long-term relationships.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Our solutions are designed to scale globally, enabling brands to expand their presence and engage users worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability & Security",
    description:
      "We create platforms that are safe, reliable, and secure, ensuring smooth operations and peace of mind.",
  },
  {
    icon: Zap,
    title: "Faster Growth",
    description:
      "Through innovation and efficiency, we accelerate business growth and help companies stay ahead in a competitive market.",
  },
];

function ValueCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg border  p-6 hover:shadow-md transition flex items-center gap-5">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600">
        <Icon className="w-8 h-8" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Value() {
  return (
    <section className="py-24 bg-gray-50">
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              The Value We Create
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl">
              At Al-Karim Technologies, we go beyond building digital products —
              we deliver real impact that transforms businesses and empowers
              people.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {values.map((item) => (
                <ValueCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/values.jpg"
              alt="Value creation illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
