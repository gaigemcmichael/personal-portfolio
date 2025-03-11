import ExperienceCard from "./experience-card";

export default function Experience() {
  const jobs = [
    {
      title: "Software Developer Intern",
      company: "London Computer Systems",
      date: "May 2025 - Aug 2025",
      imageUrl: "/lcs-logo.png",
      imageAlt: "London Computer Systems logo",
      descriptionPoints: [
        "I am excited to be part of the LCS team this summer as a C# development intern.",
      ],
      classes: "md:ml-10",
    },
    {
      title: "Front End Development Intern",
      company: "Ruoff Mortgage",
      date: "May 2024 - Aug 2024",
      imageUrl: "/ruoff-logo.png",
      imageAlt: "Ruoff Mortgage logo",
      descriptionPoints: [
        "Developed dynamic Vue.js and Nuxt.js UI components using TypeScript and Tailwind.",
        "Collaborated with back-end and design teams to improve UX.",
        "Engaged in agile practices including standups, sprint planning, and code reviews.",
      ],
      classes: "",
    },
    {
      title: "IT Support Intern",
      company: "Ruoff Mortgage",
      date: "May 2023 - Aug 2023",
      imageUrl: "/ruoff-logo.png",
      imageAlt: "Ruoff Mortgage logo",
      descriptionPoints: [
        "Formulated and executed a plan correcting the IT asset management system.",
        "Earned company revenue through Dell's recycling program.",
        "Provided team process improvements for IT onboarding/offboarding.",
      ],
      classes: "",
    },
    {
      title: "Construction Worker",
      company: "Hughes Gutters & More",
      date: "May 2022 - Aug 2022",
      imageUrl: "/hughes-gutters.jpg",
      imageAlt: "Hughes Gutters & More logo",
      descriptionPoints: [
        "Completed indoor and outdoor construction projects.",
        "Gained experience in various construction tasks including roofing and siding.",
      ],
      classes: "md:mr-10",
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full max-w-[1024px] bg-gray-secondary dark:bg-black-secondary text-black dark:text-white-primary py-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-left pl-6">Experience</h2>

      {/* Small screens: Column layout */}
      <div className="flex flex-col space-y-6 sm:hidden p-4">
        {jobs.map((job, index) => (
          <ExperienceCard key={index} {...job} />
        ))}
      </div>

      {/* Medium screens: Carousel effect */}
      <div className="hidden sm:flex sm:flex-row sm:overflow-x-auto sm:space-x-6 p-4">
        {jobs.map((job, index) => (
          <div key={index} className="carousel-item flex-shrink-0">
            <ExperienceCard {...job} />
          </div>
        ))}
      </div>
    </div>
  );
}
