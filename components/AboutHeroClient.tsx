"use client";

import React from "react";
import { usePathname } from "next/navigation";
import AboutHero from "@/components/AboutHero";

interface NavItem {
  label: string;
  href: string;
  img: string;
  heading?: string;
}

interface Props {
  navItems: NavItem[];
  children?: React.ReactNode;
}

export default function AboutHeroClient({ navItems, children }: Props) {
  const pathname = usePathname();

  let currentNav = navItems.find((item) => pathname === item.href);
  if (!currentNav) {
    currentNav = navItems.find(
      (item) => item.href.startsWith("/about") && pathname.startsWith(item.href)
    );
  }

  return (
    <AboutHero
      title={"About Us"}
      imageSrc={currentNav?.img ?? "/2.jpeg"}
      heading={currentNav?.heading ?? "About"}
      navItems={navItems.map(({ label, href }) => ({ label, href }))}
    >
      {children}
    </AboutHero>
  );
}


