"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  children,
  className,
}: SectionWrapperProps) {
  return (
    <div className={clsx("max-w-[95rem] px-5 mx-auto", className)}>
      {children}
    </div>
  );
}
