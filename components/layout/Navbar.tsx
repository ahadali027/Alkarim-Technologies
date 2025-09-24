"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight, Search, Menu, X } from "lucide-react";
import Logo from "../Logo";
import { Sheet } from "@/components/ui/sheet";
import { AccordionItem } from "@/components/ui/accordion";

interface NavItem {
  label: string;
  href?: string;
  children?: {
    label: string;
    href?: string;
    children?: { label: string; href?: string }[];
  }[];
}

const navItems: NavItem[] = [
  {
    label: "About us",
    href: "/about",
    children: [
      {
        label: "Overview",
        href: "/about",
      },
      { label: "Purpose & strategy", href: "/about/ourStrategy" },
      {
        label: "Leadership",
        href: "/about/leadership",
        // children: [
        //   { label: "Board", href: "/about/leadership/board" },
        //   { label: "Management", href: "/about/leadership/management" },
        // ],
      },
      { label: "History", href: "/about/history" },
    ],
  },
  {
    label: "Sustainability",
    href: "/sustainability",
    children: [
      { label: "Our Strategy", href: "/sustainability/strategy" },
      { label: "Reports", href: "/sustainability/reports" },
    ],
  },
  {
    label: "Our business",
    href: "/business",
    children: [
      { label: "Real Estate", href: "/business/real-estate" },
      { label: "Marine", href: "/business/marine" },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    children: [
      { label: "Opportunities", href: "/careers/opportunities" },
      { label: "Life at Crown Estate", href: "/careers/life" },
    ],
  },
  {
    label: "News and Stories",
    href: "/news",
    children: [
      { label: "Press Releases", href: "/news/press" },
      { label: "Blog", href: "/news/blog" },
    ],
  },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<NavItem | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const openSidebar = (item: NavItem) => {
    setActiveMenu(item);
    setSidebarOpen(true);
  };

  useEffect(() => {
    if (!sidebarOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [sidebarOpen]);

  useEffect(() => {
    const isAnyPanelOpen = sidebarOpen || mobileOpen;
    document.body.style.overflow = isAnyPanelOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen, mobileOpen]);

  // Auto-close mobile panel when switching to desktop width
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setMobileOpen(false);
    };
    mq.addEventListener?.("change", onChange);
    // Also run once in case page loads on desktop after having state
    onChange();
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return (
    <header className=" bg-white shadow-sm  z-50">
      <nav className="container mx-auto flex items-center justify-between px-3 gap-5 py-3 md:py-5">
        <Logo />

        <ul className="hidden md:flex items-center lg:gap-8 z-50 gap-4 ">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <button
                  onClick={() => openSidebar(item)}
                  className=" py-2 lg:text-base text-sm text-gray-700 hover:text-black cursor-pointer rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  className="lg:text-base text-sm text-gray-700 hover:text-black cursor-pointer rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}

          <li className="hidden lg:flex items-center border-l pl-6 space-x-2">
            <button className="rounded-full p-2 text-gray-700 hover:bg-gray-100">
              <Search size={20} />
            </button>
          </li>
        </ul>

        <button
          className="md:hidden rounded p-2 text-gray-700 hover:bg-gray-100"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>
      <div className="md:block hidden">
        <Sheet
          open={!!(sidebarOpen && activeMenu)}
          onOpenChange={setSidebarOpen}
          side="left"
        >
          <div className="space-y-2 text-black ">
            <p className="text-2xl font-semibold mb-5">{activeMenu?.label} </p>
            {activeMenu?.children?.map((child) => {
              const hasGrandChildren = !!child.children?.length;
              if (hasGrandChildren) {
                return (
                  <AccordionItem key={child.label} title={child.label}>
                    {child.children?.map((g) => (
                      <Link
                        key={g.label}
                        href={g.href ?? "#"}
                        className="flex items-center justify-between rounded-md px-5 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        {g.label}
                        <ChevronRight size={16} className="text-gray-400" />
                      </Link>
                    ))}
                  </AccordionItem>
                );
              }
              return (
                <Link
                  key={child.label}
                  href={child.href ?? "#"}
                  className="flex items-center justify-between rounded-md px-3 py-3 text-gray-800 hover:bg-gray-100"
                >
                  {child.label}
                  <ChevronRight size={18} className="text-gray-400" />
                </Link>
              );
            })}
          </div>
        </Sheet>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          ></div>
          <div
            className={`absolute inset-0 bg-white p-6 overflow-y-auto transform transition-transform duration-300 ease-out ${
              mobileOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <Logo />
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded p-1 hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-2">
              {navItems.map((item) => {
                const hasChildren = !!item.children?.length;
                if (hasChildren) {
                  return (
                    <AccordionItem
                      key={item.label}
                      title={
                        <span className="font-semibold text-gray-900">
                          {item.label}
                        </span>
                      }
                    >
                      {item.children?.map((child) => {
                        const hasGrand = !!child.children?.length;
                        if (hasGrand) {
                          return (
                            <AccordionItem
                              key={child.label}
                              title={child.label}
                            >
                              {child.children?.map((g) => (
                                <Link
                                  key={g.label}
                                  href={g.href ?? "#"}
                                  className="block rounded-md px-3 py-2 text-gray-800 hover:bg-gray-100"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {g.label}
                                </Link>
                              ))}
                            </AccordionItem>
                          );
                        }
                        return (
                          <Link
                            key={child.label}
                            href={child.href ?? "#"}
                            className="flex items-center justify-between rounded-md px-3 py-3 text-gray-800 hover:bg-gray-100"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                            <ChevronRight size={18} className="text-gray-400" />
                          </Link>
                        );
                      })}
                    </AccordionItem>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    href={item.href ?? "#"}
                    className="block rounded-md px-3 py-3 font-semibold text-gray-800 hover:bg-gray-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="border-t pt-4 space-y-2">
                <button className="flex items-center space-x-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 w-full">
                  <Search size={20} />
                  <span>Search</span>
                </button>
                <button className="w-full rounded-md bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-gray-200">
                  Accessibility tools
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
