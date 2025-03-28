"use client";
import { useState } from "react";
import Image from "next/image";
import ProjectModal from "./project-modal";
import { Project } from "../types";

const projects: Project[] = [
  {
    name: "Personal Portfolio Website",
    descriptionShort: "Developed a personal porfolio website...",
    descriptionLong: "Developed a personal portfolio website using Next.js, React, TypeScript, and Tailwind CSS to showcase my projects, education, and experience. Designed a responsive and modern UI with smooth animations and dark mode support.",
    imageUrl: "/portfolio.jpg",
    imageAlt: "Personal portfolio",
  },
  {
    name: "Equipment Rental System",
    descriptionShort: "Designed an equipment rental system...",
    descriptionLong: "Developed a database for a fictional community-managed equipment rental service using SQL and Java. The system provides functionality to manage the rental of customer equipment, which is delivered by autonomous drones from warehouses. Worked in a team of four to implement and design the database schema, wrote SQL queries to manage the data, and built a terminal-based Java application to use the system.",
    imageUrl: "/er-diagram.jpg",
    imageAlt: "ER Diagram",
  },
  {
    name: "Ruoff Onboarding Website",
    descriptionShort: "A centralized webpage for onboarding...",
    descriptionLong: "Developed a centralized webpage for onboarding materials, ensuring easy access and continuous use by HR and employees. Collaborated with project manager, UI/UX manager, and back-end team to develop a data driven, responsive webpage. Developed reusable components, ensured cross-browser compatibility and accessibility, and improved user experience.",
    imageUrl: "/ruoff-plus.png",
    imageAlt: "Ruoff onboarding website",
  },
  {
    name: "Brutus the Plumber",
    descriptionShort: "A Mario-inspired C game incorporating...",
    descriptionLong: "This project is a Mario-inspired C game where I implemented physics, gameplay mechanics, score tracking, and multiple game modes developed during my System 1 course learning low-level programming.",
    imageUrl: "/brutus-plumber.png",
    imageAlt: "Brutus the Plumber",
  },
  {
    name: "Shooting Game",
    descriptionShort: "A Wii Shooting inspired C++ game...",
    descriptionLong: "This project is a Wii Play Shooting Range inspired C++ game incorporating interactice gameplay mechanics, score management/memory, and multiple game modes developed in my engineering course with a partner.",
    imageUrl: "/shooting-game.png",
    imageAlt: "Wii Shooting Range inspired game",
  },
  {
    name: "RSS Aggregator",
    descriptionShort: "A RSS parser in coded in Java...",
    descriptionLong: "Developed a RSS in Java to parse multiple sources to provide a user-friendly interface for viewing content during my Software 1 course learning good coding practices and object oriented programmming.",
    imageUrl: "/aggregator.png",
    imageAlt: "RSS aggregator",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="flex flex-col max-w-[1024px] text-left bg-gray-secondary dark:bg-black-secondary text-black dark:text-white-primary p-6 rounded-lg shadow-lg w-full transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 text-left">Project Experience</h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer rounded-lg p-4 bg-white-primary dark:bg-gray-light text-black dark:text-white-primary border border-gray-primary dark:border-gray-light shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 w-full max-w-xs sm:max-w-sm mx-auto"
          >
            <Image
              src={project.imageUrl}
              alt={project.imageAlt}
              width={300}
              height={200}
              className="rounded-md w-full h-[200px] object-cover"
            />
            <h3 className="text-lg font-bold mt-3">{project.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{project.descriptionShort}</p>
          </div>
        ))}
      </div>

      {/* Modal (if a project is selected) */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
