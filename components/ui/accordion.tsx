"use client";

import { ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";

interface AccordionItemProps {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, children, defaultOpen }: AccordionItemProps) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="border-b">
      <button
        className="w-full flex items-center justify-between py-3 text-left font-medium hover:text-blue-600"
        onClick={() => setOpen((v) => !v)}
      >
        <span>{title}</span>
        <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} size={18} />
      </button>
      <div className={`overflow-hidden transition-[max-height] duration-300 ease-out ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="pb-3 space-y-1">{children}</div>
      </div>
    </div>
  );
}


