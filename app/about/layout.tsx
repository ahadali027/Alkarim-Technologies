import AboutHeroClient from "@/components/AboutHeroClient";

interface NavItem {
  label: string; // main heading
  href: string;
  img: string;
  heading?: string; // optional page heading
}

export const navItems: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    img: "/2.jpeg",
    heading: "Lasting and shared prosperity for the nation",
  },
  {
    label: "Purpose & strategy",
    href: "/about/ourStrategy",
    img: "/2.jpeg",
    heading: "Our purpose & strategy",
  },
  {
    label: "Leadership",
    href: "/about/leadership",
    img: "/leadership.jpg",
    heading: "Our leadership",
  },
  {
    label: "History",
    href: "/about/history",
    img: "/whoweare.jpg",
    heading: "Our Journey Through Time",
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AboutHeroClient navItems={navItems}>{children}</AboutHeroClient>
    </div>
  );
}
