"use client";
import React, { useEffect } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { skills } from "./skillData";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function SkillDemo() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value to control when the animation triggers
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      });
    }
  }, [controls, inView]);

  return (
    <div
      id="skills"
      className="h-[800px] w-full bg-neutral-50 relative flex flex-col items-center justify-center antialiased"
    >
      <div className="w-[72%] text-center">
        <h1 className="text-black text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[40px] font-bold -mt-10">
          Skills
        </h1>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="flex items-center justify-between w-full mt-20"
        >
          <div className="border-4 h-[430px] md:h-[450px] lg:h-[470px] xl:h-[500px] 2xl:h-[550px] 3xl:h-[600px] border-[#676F75]"></div>
          <div className="flex flex-col items-center justify-center">
            <div className="h-full w-full rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards
                items={skills}
                direction="right"
                speed="slow"
              />
            </div>
            <div className="h-full w-full rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards
                items={skills}
                direction="left"
                speed="slow"
              />
            </div>
          </div>
          <div className="border-4 h-[430px] md:h-[450px] lg:h-[470px] xl:h-[500px] 2xl:h-[550px] 3xl:h-[600px] border-[#676F75]"></div>
        </motion.div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
