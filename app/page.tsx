"use client";
import { BackgroundBeamsDemo } from "./backgroundBeam";
import { NavbarDemo } from "./navbar";
import { AboutDemo } from "./about";
import { VortexDemo } from "./projects";
import { VortexDemoSecond } from "./contact";
import { SkillDemo } from "./skill";
import Link from "next/link";
import UpArrowIcon from "./UpArrowIcon";

function BackButton() {
  return (
    <Link href="#navbar" passHref>
      <button className="z-50 fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded">
        <UpArrowIcon /> {/* UpArrowIcon component */}
      </button>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] overflow-x-hidden">
      <NavbarDemo />
      <BackgroundBeamsDemo />
      <AboutDemo />
      <VortexDemo />
      <SkillDemo />
      <VortexDemoSecond />
      <BackButton />
    </div>
  );
}
