import React from "react";
import { FlipWords1 } from "@/components/ui/flip-words";
import { FlipWords2 } from "@/components/ui/flip-words";
import { FlipWords3 } from "@/components/ui/flip-words";
import { GlobeDemo } from "./globe";
import { motion } from "framer-motion";

export function FlipWordsDemo() {
  const words1 = ["CREATE", "BUILD", "DEVELOP"];
  const words2 = ["BUILD", "DEVELOP", "CREATE"];
  const words3 = ["DEVELOP", "CREATE", "BUILD"];

  return (
    <div
      id="home"
      className="flex items-center justify-center h-[770px] w-full"
    >
      <div className="grid grid-cols-2 w-[72%] relative antialiased">
        <div className="col-span-1 flex items-center justify-center w-[110%]">
          <div className="w-full overflow-x-visible">
            <FlipWords1 words={words1} />
            <FlipWords2 words={words2} />
            <FlipWords3 words={words3} />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="-mt-12 md:-mt-2 lg:-mt-5 xl:-mt-8 2xl:-mt-10 3xl:-mt-12 -ml-0 text-neutral-500 max-w-30 md:max-w-48 lg:max-w-80 xl:max-w-md 2xl:max-w-lg 3xl:max-w-xl mx-auto my-0 text-[16px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-justify"
            >
              {" "}
              Welcome to my portfolio! I am a passionate programmer specializing
              in intelligent systems, with a strong foundation in computer
              science. With a recent degree in Intelligent Systems, I bring
              fresh perspectives and innovative solutions to every project.
              Explore my work to see how I can contribute to your next
              technological endeavor.
            </motion.p>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center overflow-hidden">
          <GlobeDemo />
        </div>
      </div>
    </div>
  );
}
