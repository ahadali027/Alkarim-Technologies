"use client";

import CustomButton from "@/components/CustomButton";
import SectionWrapper from "@/components/SectionWrapper";
import { Pause, Play } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [isPaused, setIsPaused] = useState(false);

  const toggleVideo = () => {
    const video = document.getElementById("hero-video") as HTMLVideoElement;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  return (
    <div className="relative h-[500px] sm:h-[600px] lg:h-[680px] w-full overflow-hidden">
      <video
        id="hero-video"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        poster="/fallback.jpg"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/50 z-10" />

      <SectionWrapper className="absolute inset-0 z-20 flex flex-col items-start justify-center text-white ">
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl font-semibold leading-snug">
            Lasting and shared prosperity for the nation
          </p>
          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 max-w-[16rem] sm:max-w-[18rem]">
            <CustomButton title="Read our Annual Report" />
          </div>
        </div>
      </SectionWrapper>

      <button
        onClick={toggleVideo}
        className="absolute bottom-6 sm:bottom-10 md:bottom-16 right-6 sm:right-10 md:right-20 z-30 bg-white text-black rounded-full p-2 sm:p-3 shadow-md hover:bg-gray-100 transition"
      >
        {isPaused ? (
          <Play className="h-5 w-5 sm:h-6 sm:w-6" />
        ) : (
          <Pause className="h-5 w-5 sm:h-6 sm:w-6" />
        )}
      </button>
    </div>
  );
}
