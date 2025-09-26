import React from "react";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";

function ContactHeroSection() {
  return (
    <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden">
      <Image
        alt="Contact-Img"
        src={"/whoweare.jpg"}
        width={1920}
        height={1000}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />

      <SectionWrapper className="absolute inset-0 z-20 flex flex-col items-start justify-center text-white">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
            <span className="text-white text-sm font-medium">
              Get in Touch
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold md:leading-18 mb-6">
            Contact Us
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-3xl mb-8">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default ContactHeroSection;
