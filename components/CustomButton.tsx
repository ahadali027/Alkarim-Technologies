"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomButtonProps {
  title: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; 
}

function CustomButton({ title, className, onClick }: CustomButtonProps) {
  return (
    <div>
      <button
        onClick={onClick}
        className={cn(
          "group relative font-semibold overflow-hidden bg-transparent text-white border hover:text-black rounded-lg hover:bg-[#f2f2f6] cursor-pointer flex items-center gap-2 px-5 py-3",
          className
        )}
      >
        <span>{title}</span>
        <span className="relative w-5 h-5 overflow-hidden inline-block">
          <ArrowRight
            size={20}
            className="absolute top-1/2 -translate-y-1/2 left-0 transition-transform duration-500 group-hover:translate-x-6"
          />
          <ArrowRight
            size={20}
            className="absolute top-1/2 -translate-y-1/2 -left-6 transition-transform duration-500 group-hover:translate-x-6"
          />
        </span>
      </button>
    </div>
  );
}

export default CustomButton;
