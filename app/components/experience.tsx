"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ExperienceCard from "./experience-card";
import { Job } from "../types";

export default function Experience() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const jobs: Job[] = [
    {
      title: "Software Developer Intern",
      company: "London Computer Systems",
      date: "May 2025 - Aug 2025",
      imageUrl: "/experience/lcs-logo.png",
      imageAlt: "London Computer Systems logo",
      descriptionPoints: [
        "I am excited to have joined LCS this summer as a backend development intern on API development team.",
      ],
      link: "https://www.lcs.com/",
      classes: "sm:ml-10",
    },
    {
      title: "Front End Development Intern",
      company: "Ruoff Mortgage",
      date: "May 2024 - Aug 2024",
      imageUrl: "/experience/ruoff-logo.png",
      imageAlt: "Ruoff Mortgage logo",
      descriptionPoints: [
        "Developed dynamic Vue.js and Nuxt.js UI components using TypeScript and Tailwind.",
        "Collaborated with back-end and design teams to improve UX.",
        "Engaged in agile practices including standups, sprint planning, and code reviews.",
      ],
      link: "https://ruoff.com/",
      classes: "",
    },
    {
      title: "IT Support Intern",
      company: "Ruoff Mortgage",
      date: "May 2023 - Aug 2023",
      imageUrl: "/experience/ruoff-logo.png",
      imageAlt: "Ruoff Mortgage logo",
      descriptionPoints: [
        "Formulated and executed a plan correcting the IT asset management system.",
        "Earned company revenue through Dell's recycling program.",
        "Provided team process improvements for IT onboarding/offboarding.",
      ],
      link: "https://ruoff.com/",
      classes: "",
    },
    {
      title: "Construction Worker",
      company: "Hughes Gutters & More",
      date: "May 2022 - Aug 2022",
      imageUrl: "/experience/hughes-gutters.jpg",
      imageAlt: "Hughes Gutters & More logo",
      descriptionPoints: [
        "Completed indoor and outdoor construction projects.",
        "Gained experience in various construction tasks including roofing and siding.",
      ],
      link: "https://www.facebook.com/people/Jeremy-Hughes/100010524602096/?_rdr",
      classes: "sm:mr-10",
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-[1024px] bg-gray-secondary dark:bg-black-secondary text-black dark:text-white-primary py-4 rounded-lg shadow-lg relative transition-all duration-300">
      <h2 className="text-xl sm:text-2xl font-bold text-left pl-6">Experience</h2>

      {/* Small screens: Column layout */}
      <div className="flex flex-col space-y-6 sm:hidden p-4">
        {jobs.map((job, index) => (
          <ExperienceCard key={index} {...job} />
        ))}
      </div>

      {/* Medium screens: Carousel effect */}
      <div className="relative hidden sm:block h-[420px] overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-light opacity-80 dark:bg-gray-primary hover:opacity-90 dark:opacity-70 dark:hover:opacity-95 transition"
        >
          <ChevronLeft className="w-5 h-5 text-white-primary dark:text-gray-light" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-light opacity-80 dark:bg-gray-primary hover:opacity-90 dark:opacity-70 dark:hover:opacity-95 transition"
        >
          <ChevronRight className="w-5 h-5 text-white-primary dark:text-gray-light" />
        </button>

        {/* Side fade effect */}
        <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-gray-secondary dark:from-black-secondary to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-gray-secondary dark:from-black-secondary to-transparent z-10"></div>

        {/* Scrollable Carousel */}
        <div
          ref={scrollRef}
          className="flex flex-row overflow-x-auto gap-x-6 p-4 scrollbar-hidden scroll-smooth"
        >
          {jobs.map((job, index) => (
            <div key={index} className="carousel-item flex-shrink-0">
              <ExperienceCard {...job} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
