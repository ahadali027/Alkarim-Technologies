"use client";

import SectionWrapper from "../SectionWrapper";

export default function PerformanceOverview() {
  const stats = [
    { value: "56+", label: "Projects completed" },
    { value: "17+", label: "Clients served" },
    { value: "45%", label: "Revenue growth" },
    { value: "4+", label: "Team members" },
  ];

  return (
    <section className="bg-[#dce5e5] py-16">
      <SectionWrapper className="">
        <div className="inline-block bg-white px-4 py-2 text-sm font-semibold  rounded-full ">
          Performance Overview
        </div>

        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2  md:grid-cols-4 gap-5  text-black ">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col border items-center py-16 rounded-lg bg-white hover:shadow-lg transition-shadow cursor-pointer"
            >
              <p className="text-6xl font-bold">{stat.value}</p>
              <p className="mt-2 text-xl ">{stat.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
      
    </section>
  );
}
