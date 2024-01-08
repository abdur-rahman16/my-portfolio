"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";
import photo from "../../public/assets/hero/Untitled design (3).png";

const Hero = () => {
  return (
    <div className=" flex mt-20">
      <div className="ml-36 flex-col hidden justify-between lg:flex basis-[70%]">
        <h1 className="font-sans text-5xl">
          I am
          <Typewriter
            options={{
              strings: [
                "Abdur Rahman Akbar",
                "FrontEnd Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <h1 className="w-[550px] text-lg mt-10 hidden lg:flex font-sans font-semibold text-amber-400">
          Hello, I am Abdur Rahman Akbar. A High School student and a
          FrontEnd Web Developer. At the age of 17 I have mastered the
          incredible skills of TypeScript, HTML, CSS and NextJs. I am always
          passionate about learning and exploring new things. Currently I am
          learning more about Full-stack development and Data Science
        </h1>
        <h1 className="mt-10 text-lg">
          Want to learn more about me?{" "}
          <Link href={""} className="text-amber-400 hover:underline">
            Contact Me
          </Link>
        </h1>
      </div>
      <div className="basis-[30%] hidden lg:flex">
        <Image
          src={photo}
          alt="my profile picture"
          width={500}
          height={500}
          className=" w-72 h-72 rounded-full border-[4px] border-violet-700"
        />
      </div>

      {/* small screen */}

      <div className="flex flex-col items-center gap-4 h-screen w-full justify-center ml-10 lg:hidden">
        <Image
          src={photo}
          alt="my porfle photo"
          width={300}
          height={300}
          className="w-80 h-80 -ml-8 rounded-full"
        />
        <h1 className="text-md text-amber-400 font-semibold -ml-8">
          FrontEnd Developer
        </h1>
        <h1 className="text-amber-400 font-semibold font-sans mr-3">
          {" "}
          Hello, I am Abdur Rahman Akbar. A High School student and a
          FrontEnd Web Developer. At the age of 17 I have mastered the
          incredible skills of TypeScript, HTML, CSS and NextJs. I am always
          passionate about learning and exploring new things. Currently I am
          learning more about Full-stack development and Data Science
        </h1>
        <div className="flex items-center mr-4">
        <h1 className="font-sans">
          Want to learn more about me?{" "}
          <Link href={""} className="text-amber-400 hover:underline">
            Contact Me
          </Link>
        </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
