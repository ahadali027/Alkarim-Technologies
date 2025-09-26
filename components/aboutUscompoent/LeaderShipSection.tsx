// components/LeadershipSection.tsx

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const LeadershipSection = () => {
  return (
    <section className="flex  flex-col-reverse lg:flex-row pt-12 ">
      <div className="flex-1">
        <Image
          src="/leadership.jpg"
          alt="Leadership Image"
          width={600}
          height={400}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      
      <div className="flex-1 bg-[#dce5e5] w-full">
        <div className="flex flex-col justify-center h-full p-6 sm:p-10 md:p-16 lg:p-20 xl:p-24">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
            Our leadership
          </h3>
          <p className="mt-4 text-gray-800 text-base sm:text-lg lg:text-[18px] leading-relaxed">
            Our leadership team bring a wide range of expertise to help us
            deliver value for our customers, partners and communities.
          </p>
          <a
            href="/about/leadership"
            className="mt-10 sm:mt-12 lg:mt-14 text-base flex items-center gap-3 hover:underline font-semibold"
          >
            Meet our leadership team
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
