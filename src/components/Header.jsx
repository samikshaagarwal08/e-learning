"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#f6f8f7] sticky top-0 z-50 shadow-md p-2 ">
      <div className="bg-[#aa43f1] py-3 rounded-xl px-4 sm:px-6 md:px-8">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl sm:text-2xl font-bold text-white flex items-center">
            E-Learning
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none hover:bg-opacity-70 p-2 rounded"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Navigation for Desktop */}
          <nav className="hidden md:flex items-center space-x-4 text-[#F8F9FA]">
            <Link href="/courses" className="text-sm md:text-base hover:underline">
              OUR COURSES
            </Link>
            <Link href="/about" className="text-sm md:text-base hover:underline">
              ABOUT US
            </Link>
            <Link href="/dashboard" className="text-sm md:text-base hover:underline">
              DASHBOARD
            </Link>
            <Link href="/contact" className="text-sm md:text-base hover:underline">
              CONTACT US
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 right-0 h-full bg-[#3d435b] text-white transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ width: '80%', maxWidth: '320px', zIndex: 999 }}
        >
          <div className="flex flex-col h-full px-6 py-8">
            <button onClick={() => setIsOpen(false)} className="text-3xl self-end">
              &times;
            </button>
            <div className="flex flex-col mt-12 space-y-4">
              <Link
                href="/courses"
                className="text-xl md:text-2xl py-2 hover:underline"
                onClick={() => setIsOpen(false)}
              >
                OUR COURSES
              </Link>
              <Link
                href="/about"
                className="text-xl md:text-2xl py-2 hover:underline"
                onClick={() => setIsOpen(false)}
              >
                ABOUT US
              </Link>
              <Link
                href="/dashboard"
                className="text-xl md:text-2xl py-2 hover:underline"
                onClick={() => setIsOpen(false)}
              >
                DASHBOARD
              </Link>
              <Link
                href="/contact"
                className="text-xl md:text-2xl py-2 hover:underline"
                onClick={() => setIsOpen(false)}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
