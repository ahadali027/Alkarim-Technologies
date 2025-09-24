"use client";

import SectionWrapper from "@/components/SectionWrapper";

import Image from "next/image";


export default function HistoryHero() {
  return (
    <div className="relative  h-[300px] lg:h-[500px] w-full overflow-hidden">
      <Image
        alt="about-us-img"
        src={"/2.jpeg"}
        width={400}
        height={400}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <SectionWrapper className="absolute inset-0 z-20 flex flex-col items-start justify-center text-white ">
        <div>
          <h1 className="font-bold text-2xl">About Us</h1>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl font-semibold leading-tight mt-3">
            Our History
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
