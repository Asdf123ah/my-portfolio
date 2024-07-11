"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { skills } from "./skillData";

export function SkillDemo() {
  return (
    <>
      <div
        id="skills"
        className="h-[800px] w-full bg-neutral-50 relative flex flex-col items-center justify-center antialiased"
      >
        <div className="w-[72%] text-center">
          <h1 className="text-black text-[40px] font-bold -mt-10">Skills</h1>
          <div className="flex items-center justify-between w-full mt-20">
            <div className="border-4 h-[600px] border-[#676F75]"></div>
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
            <div className="border-4 h-[600px] border-[#676F75]"></div>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}
