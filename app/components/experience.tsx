import JobCard from "./experience-card";

export default function Experience() {
  const jobs = [
    {
      title: "Front End Development Intern",
      company: "Ruoff Mortgage",
      date: "May 2024 - Aug 2024",
      imageUrl: "/ruoff-logo.png",
      imageAlt: "Ruoff Mortgage logo",
      descriptionPoints: [
        "Developed UI components using React and TypeScript.",
        "Improved front-end performance and accessibility.",
        "Worked with TailwindCSS for styling.",
      ],
      classes: "ml-10",
    },
    {
      title: "IT Support Intern",
      company: "Ruoff Mortgage",
      date: "May 2023 - Aug 2023",
      imageUrl: "/ruoff-logo.png",
      imageAlt: "Ruoff Mortgage logo",
      descriptionPoints: [
        "Developed UI components using React and TypeScript.",
        "Improved front-end performance and accessibility.",
        "Worked with TailwindCSS for styling.",
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
        "Developed UI components using React and TypeScript.",
        "Improved front-end performance and accessibility.",
        "Worked with TailwindCSS for styling.",
      ],    
      classes: "mr-10",
    },
  ];

  return (
    <div className="flex-col gap-4 bg-gray-secondary dark:bg-black-secondary text-black dark:text-white-primary py-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-left pl-6">Experience</h2>

      <div className="carousel carousel-center bg-gray-secondary rounded-box max-w-[1920px] space-x-10 p-4">
        {jobs.map((job, index) => (
          <div key={index} className="carousel-item">
            <JobCard {...job} />
          </div>
        ))}
      </div>
    </div>
  );
}
