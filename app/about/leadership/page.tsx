"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Leader = {
  name: string;
  role: string;
  image: string;
  short: string;
  bio: string;
  linkedin?: string;
};

const leaders: Leader[] = [
  {
    name: "James Thompson",
    role: "Chief Executive Officer",
    image: "/porfile/1.jpg",
    short:
      "20+ years delivering enterprise software and digital transformations.",
    bio: "James has over 20 years of experience in the UK tech sector, leading digital transformation and large-scale software delivery across multiple industries. He focuses on strategy, client relationships and scaling engineering teams to deliver long-term value.",
    linkedin: "#",
  },
  {
    name: "Sarah Williams",
    role: "Chief Technology Officer",
    image: "/porfile/3.jpg",
    short: "Cloud, AI and platform architecture specialist.",
    bio: "Sarah drives our technology vision. With a strong background in cloud, AI, and enterprise systems, she ensures our solutions remain scalable, secure and future-ready. She champions engineering excellence and platform thinking.",
    linkedin: "#",
  },
  {
    name: "David Patel",
    role: "Chief Operating Officer",
    image: "/porfile/2.jpg",
    short: "Operations & delivery leader focused on client success.",
    bio: "David oversees operations and service delivery. His focus is on efficiency, client satisfaction, and sustainable growth within the UK market and beyond. He brings strong delivery governance and commercial experience.",
    linkedin: "#",
  },
  {
    name: "Emma Johnson",
    role: "Head of People & Culture",
    image: "/porfile/4.jpg",
    short: "People-first HR leader building high-performing teams.",
    bio: "Emma is passionate about building inclusive workplace cultures. She leads our HR strategy, talent development, and wellbeing initiatives, ensuring the company attracts and keeps great talent.",
    linkedin: "#",
  },
];

// Leadership principles
const leadershipPrinciples = [
  {
    title: "Client-Centric Approach",
    detail:
      "We prioritise our clients’ needs, ensuring every project delivers measurable business value, not just technical success.",
  },
  {
    title: "Innovation & Agility",
    detail:
      "Our leadership team drives a culture of continuous innovation, adopting emerging technologies while remaining agile in delivery.",
  },
  {
    title: "Transparency & Trust",
    detail:
      "We believe in open communication, honesty, and accountability, building long-term partnerships with clients and employees alike.",
  },
  {
    title: "Talent Development",
    detail:
      "We invest in people, providing mentorship, training, and career growth opportunities that empower our teams to thrive.",
  },
  {
    title: "Sustainable Growth",
    detail:
      "Our leadership balances financial success with environmental and social responsibility, ensuring long-term impact in the UK and beyond.",
  },
];

function LeaderCard({
  leader,
  onOpen,
}: {
  leader: Leader;
  onOpen: (l: Leader) => void;
}) {
  return (
    <article className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 text-center hover:shadow-lg ">
      <div className="mx-auto w-28 h-28 rounded-full overflow-hidden ring-1 ring-gray-100 shadow-sm">
        <Image
          height={112}
          width={112}
          src={leader.image}
          alt={leader.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">
        {leader.name}
      </h3>
      <p className="mt-1 text-sm text-gray-500">{leader.role}</p>
      <p className="mt-3 text-sm text-gray-600">{leader.short}</p>

      <div className="mt-4 flex items-center justify-center gap-3">
        <Button
          variant={"outline"}
          onClick={() => onOpen(leader)}
          className="px-4 py-2 text-sm font-medium rounded-lg bg-transparent  "
        >
          View profile
        </Button>
      </div>
    </article>
  );
}

function LeaderModal({
  leader,
  onClose,
}: {
  leader: Leader | null;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (leader) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [leader, onClose]);

  if (!leader) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
        <div className="flex gap-6">
          <Image
            width={112}
            height={112}
            src={leader.image}
            alt={leader.name}
            className="w-28 h-28 rounded-full object-cover ring-1 ring-gray-100"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {leader.name}
            </h2>
            <p className="text-sm text-gray-500">{leader.role}</p>
            <p className="mt-4 text-gray-700">{leader.bio}</p>
            <div className="mt-5 flex gap-3">
              {leader.linkedin && (
                <Link
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border rounded-md text-sm"
                >
                  LinkedIn
                </Link>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-100 rounded-md text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LeadershipPage() {
  const [active, setActive] = useState<Leader | null>(null);

  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 py-12">
        <header className="max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900">Our Leadership</h1>
          <p className="mt-3 text-gray-600">
            Meet the leadership team guiding our software solutions and
            innovation. With a shared commitment to excellence, they are shaping
            the future of technology services in the UK and worldwide.
          </p>
        </header>

        {/* Leaders grid */}
        <section className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader) => (
              <LeaderCard
                key={leader.name}
                leader={leader}
                onOpen={setActive}
              />
            ))}
          </div>
        </section>

        {/* Leadership principles */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900">How We Lead</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Our leadership isn’t just about titles. It’s about principles that
            shape our culture, decisions, and the way we deliver software
            solutions to clients across the UK and beyond.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipPrinciples.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold ">{item.title}</h3>
                <p className="mt-3 text-gray-600 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <LeaderModal leader={active} onClose={() => setActive(null)} />
    </div>
  );
}
