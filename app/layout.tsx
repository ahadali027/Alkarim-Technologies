import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Al-Karim Technologies",
  description:
    "Al-Karim Technologies Portfolio Website 2025 | Developed by Al-karim",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white " suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 ">{children}</main>
         <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
