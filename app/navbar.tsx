"use client";

import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div
      id="navbar"
      className="relative bg-[#0a0a0a] w-full flex items-center justify-center"
    >
      <Navbar className="top-0 relative bg-[#0a0a0a]" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed text-white bg-[#0a0a0a] mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive}>
        <div
          className="
        relative text-[4px] font-bold mr-[1%] sm:text-[8px] sm:mr-[5%] md:text-[16px] md:mr-[9%] lg:text-[24px] lg:mr-[13%] xl:text-[32px] xl:mr-[17%] 2xl:text-[40px] 2xl:mr-[21%] 3xl:text-[48px] 3xl:mr-[25%]
        "
        >
          JONATHAN
        </div>
        <Link href="/" passHref>
          <MenuItem setActive={setActive} active="" item="Home"></MenuItem>
        </Link>
        <Link href="#about">
          <MenuItem setActive={setActive} active="" item="About"></MenuItem>
        </Link>
        <Link href="#projects">
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Sycures"
                href="#sycures"
                src="/sycures.jpg"
                description="Gamified digital literacy tool for enhancing youth digital skills."
              />
              <ProductItem
                title="MAJJI PREMS"
                href="#majjiprems"
                src="/MAJJIPREMS.jpg"
                description="Online store built with PHP and MySQL."
              />
              <ProductItem
                title="E-Archiving System"
                href="#earchiving"
                src="/e-archivingsystem.jpg"
                description="Archiving system developed with Next.js, React, PostgreSQL, and Tailwind CSS."
              />
              <ProductItem
                title="Event Management System"
                href="#eventmanagement"
                src="/eventmanagement.jpg"
                description="Event management platform developed with TypeScript, Next.js, React, and json-server."
              />
              <ProductItem
                title="IPCR System"
                href="#ipcrsystem"
                src="/ipcrsystem.jpg"
                description="Performance review system built with Next.js, React, and MongoDB."
              />
              <ProductItem
                title="Student Management System"
                href="#studentmanagement"
                src="/studentmanagementsystem.jpg"
                description="Management system for students developed with JavaScript, HTML, CSS, and localStorage."
              />
            </div>
          </MenuItem>
        </Link>
        <Link href="#skills" passHref>
          <MenuItem setActive={setActive} active="" item="Skills"></MenuItem>
        </Link>
        <Link href="#contact">
          <MenuItem setActive={setActive} active="" item="Contact"></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
