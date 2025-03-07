'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import DarkMode from './dark-mode';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null); // Wrap entire navbar

  useEffect(() => {
    // Close the menu when clicking outside the entire navbar
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const navLinks = [
    {
      src: "/home.svg",
      alt: "Home button",
      imageClasses: "cursor-pointer hover:opacity-80",
      buttonName: "Home",
    },
    {
      src: "/profile.svg",
      alt: "About button",
      imageClasses: "cursor-pointer hover:opacity-80",
      buttonName: "About",
    },
    {
      src: "/email.svg",
      alt: "Contact button",
      imageClasses: "cursor-pointer hover:opacity-80",
      buttonName: "Contact",
    },
  ];

  return (
    <header
      ref={navRef} // Wrap the navbar in a ref
      className="sticky top-2 md:top-4 bg-blue-primary text-white-primary dark:bg-black-secondary p-2 md:px-4 mx-2 md:mx-6 rounded-lg shadow-lg"
    >



      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">Gaige McMichael</Link>
        </h1>
        <div className="flex items-center gap-4">
          {/* Desktop Links */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-4">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      key={index}
                      href="/"
                      className="relative flex gap-1 hover:opacity-80 transition-all duration-300 group"
                    >
                      <Image
                        src={link.src}
                        alt={link.alt}
                        className="cursor-pointer hover:opacity-80"
                        width={20}
                        height={20}
                      />
                      <span className="relative">
                        {link.buttonName}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white-primary transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <div className="relative bottom-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                    </Link>
                  </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle */}
          <DarkMode />

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={(event) => {
                event.stopPropagation(); // Prevent event from reaching document
                setIsOpen(!isOpen);
              }}
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div
          className="md:hidden absolute left-1/2 -translate-x-1/2 top-[60px] w-[90%] sm:w-[95%] bg-black-primary bg-opacity-90 p-4 rounded-b-lg transition-all duration-300 opacity-100 scale-100"
        >
          <nav>
            <ul className="flex flex-col gap-y-4 text-right">
              {navLinks.map((link, index) => (
                <li key="index" className="text-right">
                  <Link
                    key={index}
                    href="/"
                    className="flex gap-2 justify-end py-2 px-4 text-white-primary hover:bg-gray-light rounded transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src={link.src}
                      alt={link.alt}
                      className="cursor-pointer hover:opacity-80"
                      width={20}
                      height={20}
                    />
                    {link.buttonName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
