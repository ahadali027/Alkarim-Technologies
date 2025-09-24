"use client";

import { Instagram, Linkedin, Mail, X as Twitter } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";
import SectionWrapper from "../SectionWrapper";

const footerSections = [
  {
    title: "Legal and Governance",
    links: [
      { label: "Terms of use", href: "#" },
      { label: "Privacy statement", href: "#" },
      { label: "Cookies statement", href: "#" },
      { label: "Modern slavery and human trafficking statement", href: "#" },
      { label: "Freedom of information", href: "#" },
    ],
  },
  {
    title: "User support and Accessibility",
    links: [
      { label: "Accessibility", href: "#" },
      { label: "Sitemap", href: "#" },
    ],
  },
  {
    title: "Reporting and Feedback",
    links: [
      { label: "Whistleblowing", href: "#" },
      { label: "Complaints", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
    hover: "hover:text-pink-400",
  },
  { icon: Twitter, href: "#", label: "Twitter", hover: "hover:text-blue-400" },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
    hover: "hover:text-blue-500",
  },
  { icon: Mail, href: "#", label: "Email", hover: "hover:text-gray-300" },
];

export default function Footer() {
  return (
    <footer className="bg-[#003049] text-white pt-16 pb-5">
      <SectionWrapper className=" grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Logo textColor="white" size="lg" />
          <address className="not-italic text-sm leading-relaxed mt-7">
            1 St James’s Market <br />
            London <br />
            SW1Y 4AH <br />
          </address>
          <p className="mt-3 font-semibold">+44 7450 002939</p>
        </div>

        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="font-bold mb-4">{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    className="hover:underline duration-500"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </SectionWrapper>

      <SectionWrapper className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between px-6">
        <div className="flex space-x-6 mb-4 md:mb-0">
          {socialLinks.map(({ icon: Icon, href, label, hover }) => (
            <Link key={label} href={href} aria-label={label}>
              <Icon className={`w-5 h-5 transition ${hover}`} />
            </Link>
          ))}
        </div>

        <p className="text-sm">© Al-Karim Technologies 2025</p>

        {/* <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="ml-6 bg-white text-[#003049] cursor-pointer rounded-full p-2 shadow-md hover:bg-gray-200 transition"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button> */}
      </SectionWrapper>
    </footer>
  );
}
