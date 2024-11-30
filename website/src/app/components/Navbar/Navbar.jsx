"use client";

import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-6 pl-10 pr-10">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-bold py-2">
          SaranyuTakayama
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button id="menu-toggle" className="text-white" onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li className="relative">
            <Link
              href="/"
              className="text-white font-bold relative uppercase before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-white before:scale-x-0 before:origin-right before:transition-transform before:duration-[600ms] before:ease-[cubic-bezier(0.19,1,0.22,1)] hover:before:origin-left hover:before:scale-x-100"
            >
              Home
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/about"
              className="text-white font-bold relative uppercase before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-white before:scale-x-0 before:origin-right before:transition-transform before:duration-[600ms] before:ease-[cubic-bezier(0.19,1,0.22,1)] hover:before:origin-left hover:before:scale-x-100"
            >
              About Me
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/Project"
              className="text-white font-bold relative uppercase before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-white before:scale-x-0 before:origin-right before:transition-transform before:duration-[600ms] before:ease-[cubic-bezier(0.19,1,0.22,1)] hover:before:origin-left hover:before:scale-x-100"
            >
              Project
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/ContactMe"
              className="text-white font-bold relative uppercase before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-white before:scale-x-0 before:origin-right before:transition-transform before:duration-[600ms] before:ease-[cubic-bezier(0.19,1,0.22,1)] hover:before:origin-left hover:before:scale-x-100"
            >
              Contact me
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex-col md:hidden space-y-2 mt-4">
          <li>
            <a href="#" className="text-white block">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white block">
              About Me
            </a>
          </li>
          <li>
            <a href="/ContactMe" className="text-white block">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
