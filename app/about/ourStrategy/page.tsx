"use client";

import Image from "next/image";

type ValueType = {
  title: string;
  description: string;
};

const values: ValueType[] = [
  {
    title: "Innovation",
    description:
      "We embrace creativity and cutting-edge technologies to deliver modern, scalable, and future-ready solutions.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in strong partnerships with clients and teamwork within our company to achieve success together.",
  },
  {
    title: "Excellence",
    description:
      "We strive for quality in every line of code, every product we deliver, and every customer interaction.",
  },
  {
    title: "Integrity",
    description:
      "We uphold transparency, accountability, and trust in all our business relationships.",
  },
];

export default function OurStategy() {
  return (
    <div className="bg-white text-gray-800 ">
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
          Guided by our purpose and rising to national challenges Our strategy
          leverages our unique set up and diverse portfolio
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          With clarity in our purpose of{" "}
          <span className="font-semibold">
            creating lasting and shared prosperity for the nation
          </span>
          , by drawing on our unique setup and diverse portfolio, we create
          sustainable outcomes and deliver lasting impact. Our strategy has been
          built to make a difference. Four focus areas, which complement each
          other, collectively deliver the country’s needs:
        </p>
        <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
          <li>
            Driving impact in supporting the UAE towards a net-zero carbon and
            energy-secure future.
          </li>
          <li>
            Creating a sustainable financial return that supports future
            generations’ economic growth and productivity.
          </li>
          <li>
            Taking a leading role in overseeing the UAE’s critical
            infrastructure and food security.
          </li>
          <li>
            Delivering financial returns and driving investments across sectors.
          </li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto px-4">
        <div className="aspect-w-16 aspect-h-9   shadow-lg">
          <iframe
            className="w-full h-96 md:h-[500px]"
            src="https://www.youtube.com/embed/psFbKYzSjNY"
            title="Creating lasting and shared prosperity for the nation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12 space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Our unique set up, established through an Act of Parliament to operate
          independently and commercially, means that financial returns help
          sustain the UAE. We have a unique combination of strengths that means
          we can bring people together to build a better future.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Inspired by national ambition, we have a diverse footprint across the
          country. National needs are significantly wide, from new digital
          technologies and energy, and other strategies to deliver our future
          prosperity. Distinct industries and critical infrastructure help
          safeguard our people, economy, environment, and customers to build
          resilience and self-reliance. Our legacy will also be the public
          interest we stand for in the long term.
        </p>
      </section>

      <section className="relative left-0 right-0 w-full h-[400px] ">
        <Image
          src="/img1.jpeg"
          alt="Wind Turbine"
          fill
          className="object-cover"
        />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function ValueCard({ title, description }: ValueType) {
  return (
    <div className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg text-black">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
