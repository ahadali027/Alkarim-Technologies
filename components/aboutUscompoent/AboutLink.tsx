"use client";

import React from "react";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  {
    label: "Purpose & strategy",
    href: "/about/ourStrategy",
  },
  {
    label: "Leadership",
    href: "/about/leadership",
  },
  {
    label: "History",
    href: "/about/history",
  },
];

export default function AboutLinks() {
  const pathname = usePathname(); // get current route

  return (
    <section className="relative w-full bg-[#00293e] py-6">
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
  );
}
