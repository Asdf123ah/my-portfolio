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
          <h1 className="
          text-black text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[40px] font-bold -mt-10 md:-mt-80 lg:-mt-64 xl:-mt-40 2xl:-mt-20 3xl:-mt-2 cursor-pointer
          ">
            About me
          </h1>
          <div className="flex items-center justify-center">
            <div className="mr-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }
              }
                animate={{ opacity: 1, x: 0 }}
     
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-xl bg-black mt-20 overflow-hidden"
              >
                <Image
                  width={700}
                  height={700}
                  src="/portfoliopic.jpg"
                  alt="Portfolio Picture"
                  className="w-[100px] md:w-[200px] lg:w-[300px] xl:w-[400px] 2xl:w-[500px] 3xl:w-[600px] h-[100px] md:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] 3xl:h-[600px]"
                />
              </motion.div>
            </div>
            <div className="border-4 h-[180px] md:h-[280px] lg:h-[380px] xl:h-[480px] 2xl:h-[580px] 3xl:h-[680px] border-[#676F75] mx-4 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20 3xl:mx-24 mt-20"></div>
            <div className="">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="
                text-black max-w-auto text-[16px] md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[40px] 3xl:text-[50px] text-justify font-bold my-6 mt-20
                "
              >
                <Highlight className="text-black dark:text-white">
                  Jonathan Guevarra
                </Highlight>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="
                text-black max-w-[200px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px] 3xl:max-w-[700px] text-[24px] md:text-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[19px] 3xl:text-[24px] text-justify
                "
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
