"use client";

import React from "react";
import { Vortex } from "@/components/ui/vortex";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Highlight } from "@/components/ui/hero-highlight";
import Link from "next/link";

export function VortexDemo() {
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const AnimatedText: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    React.useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textAnimation}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    );
  };

  const AnimatedImage: React.FC<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }> = ({ src, alt, width, height }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    React.useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={imageAnimation}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-xl"
        />
      </motion.div>
    );
  };

  return (
    <div className="w-[calc(100%-0rem)] mx-auto rounded-md h-auto overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={5000}
        particleCount={1000}
        className="flex items-center flex-col px-2 md:px-10 py-4 w-full h-full"
      >
        <h1 id="projects" className="text-white text-[40px] font-bold">
          Projects
        </h1>
        <div
          id="sycures"
          className="grid grid-cols-2 w-[75%] mt-20 space-y-20 gap-20 mx-auto"
        >
          <div className="col-span-1 flex flex-col w-full items-center text-white justify-center">
            <AnimatedText>
              <h1 className="w-full mb-0 text-[40px] text-left">
                <Highlight className="text-black dark:text-white">
                  Sycures
                </Highlight>
              </h1>
              <p className="mb-4 text-[20px] text-justify">
                Developed an interactive quiz game using React and vanilla CSS
                to enhance digital literacy skills among youth. Leveraged
                MongoDB for efficient data storage of user progress, quiz
                content, and results. Implemented dynamic game logic and
                interfaces with JavaScript, ensuring a seamless and engaging
                user experience. The project integrated gamification principles
                to promote effective learning and engagement, aiming to empower
                young learners with essential digital literacy competencies.
              </p>
            </AnimatedText>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <Link href="https://sycures.netlify.app" target="_blank">
              <AnimatedImage
                width={600}
                height={300}
                src="/sycures.jpg"
                alt="Sycures"
              />
            </Link>
          </div>
        </div>
        <div
          id="majjiprems"
          className="grid grid-cols-2 w-[78%] mt-20 space-y-4 gap-20 mx-auto"
        >
          <div className="col-span-1 flex items-center justify-center">
            <Link
              href="https://github.com/Asdf123ah/MAJJI-Prems"
              target="_blank"
            >
              <AnimatedImage
                width={600}
                height={300}
                src="/MAJJIPREMS.jpg"
                alt="MAJJI PREMS"
              />
            </Link>
          </div>
          <div className="col-span-1 flex flex-col w-full items-center text-white justify-center">
            <AnimatedText>
              <h1 className="mb-0 text-[40px] text-left w-full">
                <Highlight className="text-black dark:text-white">
                  MAJJI PREMS
                </Highlight>
              </h1>
              <p className="mb-4 text-[20px] text-justify">
                Created an online store using PHP for browsing, cart management,
                and purchases. Implemented phpMyAdmin SQL for handling products,
                users, and transactions efficiently. Enhanced user experience by
                optimizing performance and integrating modern front-end
                technologies.
              </p>
            </AnimatedText>
          </div>
        </div>
        <div
          id="earchiving"
          className="grid grid-cols-2 w-[75%] mt-20 space-y-20 gap-20 mx-auto"
        >
          <div className="col-span-1 flex flex-col w-full items-center text-white justify-center">
            <AnimatedText>
              <h1 className="w-full mb-0 text-[40px] text-left">
                <Highlight className="text-black dark:text-white">
                  E-Archiving System
                </Highlight>
              </h1>
              <p className="mb-4 text-[20px] text-justify">
                Contributed to the development of an archiving system using
                Next.js and React, optimizing document storage and retrieval
                efficiency. Implemented PostgreSQL with Supabase and EdgeStore
                for secure management of archival data. Improved user interface
                responsiveness and usability with Tailwind CSS, ensuring an
                intuitive and visually appealing design.
              </p>
            </AnimatedText>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <Link href="http://e-archiving.ccs-octa.com/" target="_blank">
              <AnimatedImage
                width={600}
                height={300}
                src="/e-archivingsystem.jpg"
                alt="E-Archiving System"
              />
            </Link>
          </div>
        </div>
        <div
          id="eventmanagement"
          className="grid grid-cols-2 w-[78%] mt-20 space-y-4 gap-20 mx-auto"
        >
          <div className="col-span-1 flex items-center justify-center">
            <Link
              href="https://github.com/Asdf123ah/event-management-system"
              target="_blank"
            >
              <AnimatedImage
                width={600}
                height={300}
                src="/eventmanagement.jpg"
                alt="Event Management System"
              />
            </Link>
          </div>
          <div className="col-span-1 flex flex-col w-full items-center text-white justify-center">
            <AnimatedText>
              <h1 className="mb-0 text-[40px] text-left w-full">
                <Highlight className="text-black dark:text-white">
                  Event Management System
                </Highlight>
              </h1>
              <p className="mb-4 text-[20px] text-justify">
                Contributed to building an event management system using
                TypeScript, Next.js, and React, facilitating seamless event
                creation, updates, and management. Utilized json-server to
                simulate a RESTful API, ensuring efficient handling and
                retrieval of event data.
              </p>
            </AnimatedText>
          </div>
        </div>
        <div
          id="ipcrsystem"
          className="grid grid-cols-2 w-[75%] mt-20 space-y-20 gap-20 mx-auto"
        >
          <div className="col-span-1 flex flex-col w-full items-center text-white justify-center">
            <AnimatedText>
              <h1 className="w-full mb-0 text-[40px] text-left">
                <Highlight className="text-black dark:text-white">
                  IPCR-System
                </Highlight>
              </h1>
              <p className="mb-4 text-[20px] text-justify">
                Contributed to developing a performance review system using
                Next.js and React, enabling tracking of commitments and reviews.
                Implemented MongoDB for scalable storage of performance data.
                Enhanced user interface and experience with Tailwind CSS,
                creating a user-friendly interface.
              </p>
            </AnimatedText>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <Link
              href="https://github.com/xcutiepatootie/IPCR-System"
              target="_blank"
            >
              <AnimatedImage
                width={600}
                height={300}
                src="/ipcrsystem.jpg"
                alt="IPCR-System"
              />
            </Link>
          </div>
        </div>
        <div
          id="studentmanagement"
          className="grid grid-cols-2 w-[78%] mt-20 mb-20 space-y-4 gap-20 mx-auto"
        >
          <div className="col-span-1 flex items-center justify-center">
            <Link
              href="https://github.com/Asdf123ah/Student-Requirements-Management"
              target="_blank"
            >
              <AnimatedImage
                width={600}
                height={300}
                src="/studentmanagementsystem.jpg"
                alt="Studen Requirement Management System"
              />
            </Link>
          </div>
          <div className="col-span-1 flex flex-col w-full items-center text-white justify-center">
            <AnimatedText>
              <h1 className="mb-0 text-[40px] text-left w-full">
                <Highlight className="text-black dark:text-white">
                  Student Management System
                </Highlight>
              </h1>
              <p className="mb-4 text-[20px] text-justify">
                Developed a web-based system using JavaScript, HTML, and CSS for
                tracking and managing student requirements. Implemented
                localStorage for efficient client-side data storage, ensuring
                data persistence across sessions.
              </p>
            </AnimatedText>
          </div>
        </div>
      </Vortex>
    </div>
  );
}
