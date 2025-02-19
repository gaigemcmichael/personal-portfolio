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

  return (
    <header
      ref={navRef} // Wrap the navbar in a ref
      className="bg-blue-primary text-white-primary dark:bg-black-secondary p-2 md:px-4 m-2 md:my-4 md:mx-6 rounded-lg shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">Gaige McMichael</Link>
        </h1>
        <div className="flex items-center gap-4">
          {/* Desktop Links */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link 
                  href="/" 
                  className="flex gap-1 hover:text-gray-200"
                >
                  <Image
                    src="/home.svg"
                    alt="Home button"
                    className="cursor-pointer hover:opacity-80"
                    width={20}
                    height={20}
                  />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-200">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-200">Contact</Link>
              </li>
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
          className="md:hidden absolute left-1/2 -translate-x-1/2 top-[70px] w-[90%] sm:w-[95%] 
          bg-black-primary bg-opacity-90 p-4 rounded-b-lg transition-all duration-300 
          opacity-100 scale-100"
        >
          <nav>
            <ul className="flex flex-col gap-y-4 text-right">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-4 text-white-primary hover:bg-gray-light rounded transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-4 text-white-primary hover:bg-gray-light rounded transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-4 text-white-primary hover:bg-gray-light rounded transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
