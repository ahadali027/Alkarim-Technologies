import Image from "next/image";
import SectionWrapper from "../SectionWrapper";

export default function WhoWeAreSection() {
  return (
    <SectionWrapper className=" bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 ">
        <div className="flex-1">
          <Image
            src="/whoweare.jpg"
            alt="Illustration of buildings and nature"
            width={800}
            height={200}
            className=" h-96 aspect-square object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 max-w-3xl">
          <div className="flex items-center gap-7">
            <div className="w-[10px] h-60 bg-pink-500" />
            <div className="">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Who we are
              </h2>
              <p className="text-gray-700 md:text-lg mb-4">
                Across communities, countryside, coast and seabed, we own and
                manage land for the benefit of the nation.
              </p>
              <p className="text-gray-700 md:text-lg">
                We are an independent business sitting between the public and
                private sectors, acting in the national interest both today, and
                for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
