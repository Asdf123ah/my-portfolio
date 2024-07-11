"use client";
import React from "react";
import { Vortex } from "@/components/ui/vortex";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function VortexDemoSecond() {
  return (
    <div
      id="contact"
      className="w-full mx-auto rounded-md h-[400px] overflow-hidden"
    >
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="flex flex-row w-[75%] gap-12 text-white justify-center text-[24px]">
          <div className="flex flex-col items-start justify-center">
            <p className="mb-4">
              <b>Explore</b>
            </p>
            <Link href="#home">
              <p>Home</p>
            </Link>
            <Link href="#about">
              <p>About</p>
            </Link>
            <Link href="#projects">
              <p>Projects</p>
            </Link>
            <Link href="#skills">
              <p>Skills</p>
            </Link>
            <Link href="#contact">
              <p>Contact</p>
            </Link>
            <p className="text-black">.</p>
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="mb-4">
              <b>Projects</b>
            </p>
            <Link href="#sycures">
              <p>Sycures</p>
            </Link>
            <Link href="majjiprems">
              <p>MAJJI PREMS</p>
            </Link>
            <Link href="#earchiving">
              <p>E-Archiving System</p>
            </Link>
            <Link href="#eventmanagement">
              <p>Event Management System</p>
            </Link>
            <Link href="#ipcrsystem">
              <p>IPCR-System</p>
            </Link>
            <Link href="#studentmanagement">
              <p>Student Management System</p>
            </Link>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-80 border-l-2 border-white"></div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <p>
              <b>Jonathan Guevarra</b>
            </p>
            <p>
              <b>Contact</b>
            </p>
            <p>+639760588894</p>
            <p>jonathan.guevarra2600@gmail.com</p>
            <div className="flex flex-row gap-4">
              <Link href="https://www.facebook.com/cruzathan07" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="1x" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jonathan-guevarra-ab9b50315/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="1x" />
              </Link>
              <Link
                href="https://www.instagram.com/tantananannnnnn/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="1x" />
              </Link>
              <Link href="https://github.com/Asdf123ah" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </Link>
              <Link
                href="mailto:jonathan.guevarra2600@gmail.com"
                target="_blank"
              >
                <FontAwesomeIcon icon={faEnvelope} size="1x" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4">
            <input
              className="h-1/6 rounded-lg text-black"
              type="text"
              placeholder="Name"
            />
            <input
              className="h-1/6 rounded-lg text-black"
              type="text"
              placeholder="Email"
            />
            <input
              className="h-4/6 rounded-lg text-black"
              type="text"
              placeholder="Message..."
            />
            <button className="bg-slate-500 w-full rounded-lg">Submit</button>
          </div>
        </div>
      </Vortex>
    </div>
  );
}
