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
        "I am excited to be be apart of the LCS team as I join as a C# development intern.",
      ],
      classes: "ml-10",
    },
    {
      title: "Front End Development Intern",
      company: "Ruoff Mortgage",
      date: "May 2024 - Aug 2024",
      imageUrl: "/ruoff-logo.png",
      imageAlt: "Ruoff Mortgage logo",
      descriptionPoints: [
        "Developed dynamic Vue.js and Nuxt.js UI components using Typescript and Tailwind for mortgage applications.",
        "Collaborated with back-end and design teams to implement features and impove user experience.",
        "Engaged in agile practives inclding stand ups, sprint planning, & code review boosting project efficiency.",
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
        "Formulated and executed plan correcting company-wide, IT asset management system.",
        "Used corrected asset information to earn company revenue through Dell recyle program.",
        "Provided team process improvements for asset tracking and IT onboarding/offboarding.",
      ],
      classes: "",
    },
    {
      title: "Construction Worker",
      company: "Hughes Gutters & More",
      date: "May 2022 - Aug 2022",
      imageUrl: "/hughes-gutters.jpg",
      imageAlt: "Ruoff Mortgage logo",
      descriptionPoints: [
        "Completed indoor and outdoor construction projects for homeowners in a timely manner..",
        "Gained experience in various construction activities including roofing, siding, gutter installation, insulation, trim, drywall, and more.",
      ],    
      classes: "mr-10",
    },
  ];

  return (
    <div className="flex-col gap-4 max-w-[1024px] bg-gray-secondary dark:bg-black-secondary text-black dark:text-white-primary py-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-left pl-6">Experience</h2>

      <div className="carousel carousel-center bg-gray-secondary dark:bg-black-secondary text-black dark:text-white-primary rounded-box max-w-[1920px] space-x-10 p-4">
        {jobs.map((job, index) => (
          <div key={index} className="carousel-item">
            <ExperienceCard {...job} />
          </div>
        ))}
      </div>
    </div>
  );
}
