"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/logo/Gold_Minimalist_Crown_Logo__1_-removebg-preview.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  let [isOpen, setisOpen] = useState(false);
  let handleNav = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="bg-transparent sticky top-0 z-[100] ">
      <div className="p-6 justify-between flex items-center flex-wrap ">
        <div className="flex items-center">
          <span>
            <Image
              src={Logo}
              alt="AA Coding Logo"
              width={300}
              height={300}
              className="w-11 h-11 rounded-full"
            />
          </span>
          <span className="h-10 mx-4 w-[2px] bg-amber-300"></span>
          <span className="ml-2 font-sans text-white">AA CODING</span>
        </div>
        <div>
          <ul className="md:flex gap-8 hidden text-white font-sans">
            <li>
              <Link href={""} className="hover:text-amber-300">
                Home
              </Link>
            </li>
            <li>
              <Link href={"#skills"} className="hover:text-amber-300">
                Skills
              </Link>
            </li>
            <li>
              <Link href={"#projects"} className="hover:text-amber-300">
                Projects
              </Link>
            </li>
            <li>
              <Link href={"#contact"} className="hover:text-amber-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button onClick={handleNav} className="md:hidden items-center sm:flex">
          <div>
            <GiHamburgerMenu size={20} />
          </div>
        </button>
      </div>
      {/* mobile nav  */}
      <div className={isOpen === false ? "hidden" : ""}>
        <div
          className={"md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"}
        >
          <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-white p-10">
            <div className="flex items-center justify-between">
              <Image
                src={Logo}
                alt="AA Coding Logo"
                width={300}
                height={300}
                className="w-11 h-11 rounded-full bg-blue-500"
              />

              <div onClick={handleNav} className="p-3 cursor-pointer">
                <RxCross2 size={20} />
              </div>
            </div>

            <div className="border-b border-gray-300 py-4 mb-10">
              <h1>Abdur Rahman Akbar | FrontEnd Developer</h1>
            </div>
            <div>
              <ul onClick={handleNav}>
                <Link href={""}>
                  <li className="py-4 font-sans">HOME</li>
                </Link>
                <Link href={"#skills"}>
                  <li className="py-4 font-sans">SKILLS</li>
                </Link>
                <Link href={"#projects"}>
                  <li className="py-4 font-sans">PROJECTS</li>
                </Link>
                <Link href={"#contact"}>
                  <li className="py-4 font-sans">CONTACT</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
