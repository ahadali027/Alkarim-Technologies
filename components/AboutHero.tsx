"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SectionWrapper from "@/components/SectionWrapper";

interface NavItem {
  label: string;
  href: string;
}

interface AboutHeroProps {
  title: string;

  imageSrc: string;
  heading: string;
  navItems: NavItem[];
  children?: React.ReactNode;
}

export default function AboutHero({
  title,

  heading,
  imageSrc,
  navItems,
  children,
}: AboutHeroProps) {
  const pathname = usePathname();

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[300px] lg:h-[500px] w-full">
        <Image
          alt={`${title}-img`}
          src={imageSrc}
          width={1920}
          height={1080}
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII="
          sizes="100vw"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 z-10" />

        <SectionWrapper className="absolute inset-0 z-20 flex flex-col items-start justify-center text-white">
          <div>
            <h1 className="font-bold text-2xl">{title}</h1>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl font-semibold leading-tight mt-3">
              {heading}
            </p>
          </div>
        </SectionWrapper>
      </div>

      <section className="relative w-full bg-[#00293e] py-6 z-30">
        <div className="container mx-auto flex flex-wrap md:gap-10 justify-center">
          {navItems.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <a
                key={idx}
                href={item.href}
                className={`px-4 py-2 rounded-full font-semibold transition
                  ${
                    isActive
                      ? "bg-white text-[#00293e] shadow-md"
                      : "text-white hover:bg-white hover:text-[#00293e]"
                  }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </section>

      {children && (
        <section className="">{children}</section>
      )}
    </div>
  );
}
