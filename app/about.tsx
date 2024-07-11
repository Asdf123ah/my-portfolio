"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { Highlight } from "@/components/ui/hero-highlight";

export function AboutDemo() {
  return (
    <>
      <motion.div
        id="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="h-[880px] w-full bg-neutral-50 relative flex flex-col items-center justify-center antialiased"
      >
        <div className="w-[72%] text-center">
          <h1 className="text-black text-[40px] font-bold -mt-10 cursor-pointer">
            About me
          </h1>
          <div className="flex items-center justify-center">
            <div className="mr-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-xl bg-black mt-20 overflow-hidden"
              >
                <Image
                  width={700}
                  height={700}
                  src="/portfoliopic.jpg"
                  alt="Portfolio Picture"
                />
              </motion.div>
            </div>
            <div className="border-4 h-[680px] border-[#676F75] mx-24 mt-20"></div>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-black max-w-auto text-[50px] text-justify font-bold my-8"
              >
                <Highlight className="text-black dark:text-white">
                  Jonathan Guevarra
                </Highlight>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-black max-w-[700px] text-[24px] text-justify"
              >
                Hello, I’m Jonathan A. Guevarra, a recent Computer Science
                graduate specializing in Intelligent Systems. Throughout my
                academic journey, I’ve developed a strong proficiency in machine
                learning, data analysis, algorithm design, and programming. I
                have hands-on experience in developing and deploying predictive
                models. I am passionate about leveraging new technologies to
                solve real-world problems and thrive in collaborative
                environments where I can apply my technical skills to innovate
                and create impactful solutions. With a commitment to lifelong
                learning and a drive to stay at the forefront of technological
                advancements, I am excited about contributing to the future of
                technology-driven innovation.
              </motion.p>
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </motion.div>
    </>
  );
}
