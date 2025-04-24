"use client";
import Link from "next/link";
import betlogo from "../Images/626bet.webp";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#00444a] sticky top-0 z-50">
      <nav className="container mx-auto px-4 md:px-10 flex items-center justify-between">
        <div className="text-xl font-bold text-[#f0c059c5]">
          <Link href="/">
            <Image
              src={betlogo}
              height={100}
              width={100}
              alt="bet626 game"
              className="w-60 h-32 "
              priority
            />
          </Link>
        </div>

        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>

          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-100 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden px-4 pb-4  border-t">
          <ul className="space-y-3 text-white font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>

            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
