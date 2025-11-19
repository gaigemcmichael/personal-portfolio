import Image from "next/image";

const skills = [
  // Core Programming Languages
  { name: "Java", imageUrl: "/skills/java.png", imageAlt: "Java" },
  { name: "C#", imageUrl: "/skills/c-sharp.png", imageAlt: "C#" },
  { name: "C", imageUrl: "/skills/c.png", imageAlt: "C" },
  { name: "C++", imageUrl: "/skills/c++.png", imageAlt: "C++" },
  { name: "Python", imageUrl: "/skills/python.png", imageAlt: "Python" },
  { name: "SQL", imageUrl: "/skills/sql.png", imageAlt: "SQL" },

  // Web Development
  { name: "HTML", imageUrl: "/skills/html.png", imageAlt: "HTML" },
  { name: "JavaScript", imageUrl: "/skills/js.png", imageAlt: "JavaScript" },
  { name: "TypeScript", imageUrl: "/skills/typescript.png", imageAlt: "TypeScript" },
  { name: "CSS", imageUrl: "/skills/css.webp", imageAlt: "CSS" },
  { name: "Tailwind CSS", imageUrl: "/skills/tailwind.png", imageAlt: "Tailwind CSS" },

  // Frameworks & Libraries
  { name: "Vue.js", imageUrl: "/skills/vue.png", imageAlt: "Vue.js" },
  { name: "Nuxt.js", imageUrl: "/skills/nuxtjs.svg", imageAlt: "Nuxt.js" },
  { name: "React", imageUrl: "/skills/react.svg", imageAlt: "React.js" },
  { name: "Next.js", imageUrl: "/skills/nextjs.png", imageAlt: "Next.js" },
  { name: "Node.js", imageUrl: "/skills/nodejs.png", imageAlt: "Node.js" },
  { name: ".NET", imageUrl: "/skills/dotnet.png", imageAlt: ".NET" },

  // Tools & Platforms
  { name: "Git", imageUrl: "/skills/git.png", imageAlt: "Git version control" },
  { name: "Docker", imageUrl: "/skills/docker.png", imageAlt: "Docker" },
  { name: "Linux", imageUrl: "/skills/linux.png", imageAlt: "Linux OS" },
  { name: "Amazon Web Services", imageUrl: "/skills/aws.webp", imageAlt: "Amazon Web Services" },

  //Software concepts
  { name: "OOP", imageUrl: "/skills/oop.webp", imageAlt: "Object-Oriented Programming (OOP)" },
  { name: "Data Structures", imageUrl: "/skills/data-structures.png", imageAlt: "Data Structures" },
  { name: "Algorithms", imageUrl: "/skills/algorithms.png", imageAlt: "Algorithms" },
  { name: "REST APIs", imageUrl: "/skills/rest-api.png", imageAlt: "Rest APIs" },
  { name: "Microservice Architecture", imageUrl: "/skills/microservices.png", imageAlt: "Microservice Architecture" },
  { name: "Mobile First Design", imageUrl: "/skills/phone.png", imageAlt: "Mobile First Design" },
];

export default function Skills() {
  return (
    <div id="skills" className="flex flex-col max-w-[1024px] text-left bg-gray-secondary dark:bg-black-secondary text-black dark:text-white-primary p-6 rounded-lg shadow-lg w-full transition-all duration-300 scroll-m-[80px] sm:scroll-m-[90px]">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-left">Skills</h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="cursor-default min-w-[90px] rounded-lg p-3 bg-white-transparent text-black dark:text-white-primary transition-all duration-300 ease-in-out hover:scale-110 flex flex-col items-center"
          >
            <Image
              src={skill.imageUrl}
              alt={skill.imageAlt}
              width={64}
              height={64}
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-md object-contain"
            />
            <h3 className="text-base sm:text-md font-bold mt-2 text-center">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
