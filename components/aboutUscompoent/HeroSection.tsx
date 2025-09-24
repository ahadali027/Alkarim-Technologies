"use client";

import SectionWrapper from "@/components/SectionWrapper";

import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="relative h-[500px] sm:h-[600px] lg:h-[680px] w-full overflow-hidden">
      <Image
        alt="about-us-img"
        src={"/img1.jpeg"}
        width={400}
        height={400}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <SectionWrapper className="absolute inset-0 z-20 flex flex-col items-start justify-center text-white ">
        <div>
          <h1 className="font-bold text-2xl">About Us</h1>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl font-semibold leading-tight mt-3">
            Lasting and shared prosperity for the nation
          </p>
          <p className="text-gray-300 mt-10 max-w-xl">
            Our purpose is to create lasting and shared prosperity for the
            nation. It drives our strategy and informs all we do.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
