import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Marine",
    desc: "Unlocking the potential of our seabed and coastline to support the nation’s net zero and energy-secure future.",
    image: "/2.jpeg",
  },
  {
    title: "Land",
    desc: "Supporting the sustainable transformation of land for farmers and for a thriving natural world.",
    image: "/3.jpg",
  },
  {
    title: "The Windsor Estate",
    desc: "Across 16,000 acres of ancient landscape, we're creating a centre of ecological and environmental best practice.",
    image: "/img1.jpeg",
  },
  {
    title: "Property & Places",
    desc: "Creating vibrant destinations and communities for people and businesses, with inclusivity at their core.",
    image: "/whoweare.jpg",
  },
];

export default function Portfolio() {
  return (
    <section className="w-full bg-white pt-16">
      <SectionWrapper className=" flex flex-col lg:flex-row lg:items-center items-start justify-between gap-6 mb-10">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">Our Portfolio</h2>
          <p className="text-gray-600 mt-4 max-w-2xl">
            We partner with businesses across industries, delivering solutions
            that accelerate growth, improve operations, and unlock new
            opportunities for a sustainable future.
          </p>
        </div>
        <Button
          variant={"outline"}
          className="bg-transparent px-5 py-6 border-black hover:bg-black hover:text-white cursor-pointer"
        >
          Overview
          <span>→</span>
        </Button>
      </SectionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {portfolioItems.map((item, idx) => (
          <div
            key={idx}
            className="relative h-[300px] md:h-[350px] lg:h-[400px] group overflow-hidden "
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute  bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-10">
              <div className="max-w-lg border-l-4 group-hover:border-l-8 px-5 duration-700">
                <Link
                  href={"/"}
                  className="text-white font-bold md:text-2xl text-xl flex items-center group-hover:underline  gap-5"
                >
                  {item.title}
                  <span className="hidden group-hover:inline-block">
                    <ArrowRightIcon />
                  </span>
                </Link>
                <p className="text-gray-200 md:text-lg text-sm mt-2">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
