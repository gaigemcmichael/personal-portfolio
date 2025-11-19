import Image from "next/image";
import Link from "next/link";

export default function EducationTimeline() {
  const educationData = [
    {
      school: "Ohio State University",
      date: "2022 - 2026",
      image: "/education/blockO.jpg",
      description: "Pursuing a Bachelor’s degree in Computer Science & Engineering, specializing in software engineering.",
      gpa: "3.9/4.0",
      link: "https://osu.edu/",
      classes: "pb-4",
    },
    {
      school: "Antwerp High School",
      date: "2018 - 2022",
      image: "/education/archer.png",
      description: "Graduated valedictorian, participated in National Honor Society and student council, and played golf, basketball, and track & field.",
      gpa: "4.0/4.0",
      link: "https://www.antwerpschools.org/",
      classes: "pt-2",
    },
  ];

  return (
    <div id="education" className="flex flex-col items-start w-full max-w-[1024px] bg-gray-secondary dark:bg-black-secondary text-black dark:text-white-primary p-6 rounded-lg shadow-lg transition-all duration-300 scroll-m-[80px] sm:scroll-m-[90px]">
      <h2 className="text-xl sm:text-2xl font-bold text-left mb-4 sm:mb-5">Education</h2>
      
      {/* Timeline Container */}
      <div className="relative border-l-4 border-gray-primary dark:border-gray-light pl-6">
        {educationData.map((edu, index) => (
          <div key={index} className={`relative ${edu.classes}`}>
            {/* Timeline Dot */}
            <div className="absolute left-[-36px] top-[22%] sm:top-[45%] -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full border-2 border-white-primary dark:border-transparent"></div>

            {/* Timeline Content */}
            <div className="flex-col gap-2">
              <div className="flex items-start sm:items-center jusitfy-center gap-4">
                <Link
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex align-start min-w-[75px] hover:opacity-95"
                >
                  <Image
                    src={edu.image}
                    alt={edu.school}
                    width={75}
                    height={75}
                    className="rounded-md bg-white"
                  />
                </Link>
                <div className="flex-col items-start w-full">
                  {/* School Information */}
                  <div className="flex flex-col sm:flex-row justify-between">
                    <h3 className="text-md sm:text-lg font-bold">{edu.school}</h3>
                    <div className="flex justify-start align-center gap-2">
                      <p className="text-md">GPA: {edu.gpa}</p>
                      <Image
                        src="/education/open-book-black.svg"
                        alt="Open book"
                        width={25}
                        height={25}
                        className="dark:invert h-[25px]"
                      />
                    </div>

                  </div>
                  <p className="text-sm text-gray-light dark:text-gray-primary">{edu.date}</p>
                  <p className="hidden sm:block text-sm">{edu.description}</p>
                </div>
              </div>
              <p className="block sm:hidden text-sm mt-2">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>        

    </div>
  );
}
