"use client";

import Link from "next/link";
import { cn } from "@/lib/utils"; // optional helper if you’re using shadcn

interface LogoProps {
  href?: string;
  title?: string;
  subtitle?: string;
  iconColor?: string;
  textColor?: string;
  accentColor?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  href = "/",
  title = "Al-Karim",
  subtitle = "Technologies",
  iconColor = "text-blue-700",
  textColor = "text-gray-900",
  accentColor = "text-blue-600",
  size = "md",
}: LogoProps) {
  const sizes = {
    sm: "h-6 w-6 md:h-7 md:w-7 text-base md:text-lg",
    md: "h-8 w-8 md:h-9 md:w-9 text-xl md:text-2xl",
    lg: "h-10 w-10 md:h-12 md:w-12 text-2xl md:text-3xl",
  };

  return (
    <Link
      href={href}
      className="flex items-center gap-3 shrink-0"
      aria-label={`${title} ${subtitle} Home`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(sizes[size], iconColor)}
      >
        <path d="M12 2 3 7v10l9 5 9-5V7z" />
        <path d="M12 22V12L3 7m9 5 9-5" />
        <circle cx="12" cy="12" r="2" className="fill-blue-700" />
      </svg>

      <div className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-extrabold tracking-wide",
            size === "sm" ? "text-base md:text-lg" : size === "lg" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl",
            textColor
          )}
        >
          {title}
        </span>
        <span
          className={cn(
            "font-medium tracking-wider",
            size === "sm" ? "text-[10px] md:text-xs" : size === "lg" ? "text-sm md:text-base" : "text-xs md:text-sm",
            accentColor
          )}
        >
          {subtitle}
        </span>
      </div>
    </Link>
  );
}
