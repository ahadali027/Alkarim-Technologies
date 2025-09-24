"use client";

import { X } from "lucide-react";
import { ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  side?: "left" | "right" | "top" | "bottom";
  title?: ReactNode;
  children: ReactNode;
}

export function Sheet({ open, onOpenChange, side = "left", title, children }: SheetProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  const sideClasses: Record<string, string> = {
    // Start below navbar on md+ using top-16 (64px) and reduce height accordingly
    left: "translate-x-0 -translate-y-0 left-0 top-0 h-full w-80 max-w-[90vw] md:top-16 md:h-[calc(100%-4rem)]",
    right: "right-0 top-0 h-full w-80 max-w-[90vw]",
    top: "top-0 left-0 w-full max-h-[80vh]",
    bottom: "bottom-0 left-0 w-full max-h-[80vh]",
  };

  // const axisClass = side === "left" || side === "right" ? "translate-x-0" : "translate-y-0";
  // const hiddenTransform = side === "left" ? "-translate-x-full" : side === "right" ? "translate-x-full" : side === "top" ? "-translate-y-full" : "translate-y-full";

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed top-[27px] bottom-0 left-0 right-0 z-40" aria-modal="true" role="dialog">
          <motion.div
            className="absolute top-16 bottom-0 left-0 right-0 h-full bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            className={`absolute bg-white shadow-xl border-r md:border-l border-gray-200 p-6 overflow-y-auto  ${sideClasses[side]}`}
            initial={{ x: side === "left" ? -320 : 320, y: side === "top" ? -320 : side === "bottom" ? 320 : 0 }}
            animate={{ x: 0, y: 0 }}
            exit={{ x: side === "left" ? -320 : 320, y: side === "top" ? -320 : side === "bottom" ? 320 : 0 }}
            transition={{ type: "spring", stiffness: 360, damping: 32 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-semibold">{title}</div>
              <button aria-label="Close" onClick={() => onOpenChange(false)} className="rounded p-1 hover:bg-gray-100">
                <X size={22} />
              </button>
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}


