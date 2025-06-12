'use client';

import { useState, useEffect, useRef } from 'react';
import DarkMode from './dark-mode';
import ScrollLinkButton from './scroll-button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
      id: "home",
      src: "/navbar/home.svg",
      alt: "Home button",
      buttonName: "Home",
      size: 20,
    },
    {
      id: "education",
      src: "/navbar/open-book-white.svg",
      alt: "Education button",
      buttonName: "Education",
      size: 25,
    },
    {
      id: "projects",
      src: "/navbar/project.svg",
      alt: "Projects button",
      buttonName: "Projects",
      size: 20,
    },
    {
      id: "skills",
      src: "/navbar/skill.svg",
      alt: "Skills button",
      buttonName: "Skills",
      size: 20,
    },
    {
      id: "contact",
      src: "/navbar/email.svg",
      alt: "Contact button",
      buttonName: "Contact",
      size: 25,
    },
  ];

  return (
    <header
      ref={navRef}
      className="sticky top-2 z-50 md:top-4 bg-blue-primary text-white-primary dark:bg-black-secondary p-2 md:px-4 mx-2 md:mx-6 2xl:max-w-[1600px] 2xl:mx-auto rounded-lg shadow-lg transition-all duration-300 before:absolute before:inset-x-0 before:top-[-1.0rem] before:h-4 before:bg-gray-primary dark:before:bg-black-primary"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <ScrollLinkButton
            id={navLinks[0].id}
            label="Gaige McMichael"
            src={navLinks[0].src}
            size={navLinks[0].size}
          />
        </h1>
        <div className="flex items-center gap-4">
          {/* Desktop Links */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <ScrollLinkButton
                  id={link.id}
                  label={link.buttonName}
                  src={link.src}
                  size={link.size}
                />
              </li>
            ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle */}
          <DarkMode />

          {/* Mobile Menu Toggle */}
          <div className="md:hidden hover:opacity-80">
            <button
              onClick={(event) => {
                event.stopPropagation();
                setIsOpen(!isOpen);
              }}
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="#e5e7eb"
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute left-0 right-0 top-[54px] mx-auto w-[calc(100%-2rem)] max-w-[600px] bg-black-primary bg-opacity-90 p-4 mt-2 rounded-b-lg z-40"
          >
            <nav>
              <ul className="flex flex-col gap-y-4 text-left items-left">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ScrollLinkButton
                      id={link.id}
                      label={link.buttonName}
                      src={link.src}
                      size={link.size}
                      onClick={() => setIsOpen(false)}
                    />
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
