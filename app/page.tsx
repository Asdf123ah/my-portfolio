"use client";
import { BackgroundBeamsDemo } from "./backgroundBeam";
import { NavbarDemo } from "./navbar";
import { AboutDemo } from "./about";
import { VortexDemo } from "./projects";
import { VortexDemoSecond } from "./contact";
import { SkillDemo } from "./skill";
import Link from "next/link";
import UpArrowIcon from "./UpArrowIcon";
import Head from "next/head";

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
    <>
      <Head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FK4K0N2H76"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FK4K0N2H76');
        `,
          }}
        />
      </Head>
      <div className="bg-[#0a0a0a] overflow-x-hidden">
        <NavbarDemo />
        <BackgroundBeamsDemo />
        <AboutDemo />
        <VortexDemo />
        <SkillDemo />
        <VortexDemoSecond />
        <BackButton />
      </div>
    </>
  );
}
