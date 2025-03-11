import Image from "next/image";

export default function EducationTimeline() {
  const educationData = [
    {
      school: "Ohio State University",
      date: "2022 - Present",
      image: "/blockO.jpg",
      description: "Pursuing a Bachelor’s degree in Computer Science & Engineering, specializing in software engineering.",
      gpa: "3.9/4.0",
      classes: "mb-4",
    },
    {
      school: "Antwerp High School",
      date: "2018 - 2022",
      image: "/archer.png",
      description: "Graduated valedictorian, participated in National Honor Society and student council, and played golf, basketball, and track & field.",
      gpa: "4.0/4.0",
      classes: "",
    },
  ];

  return (
    <div className="flex flex-col items-start w-full max-w-[1024px] bg-gray-secondary dark:bg-black-secondary text-black dark:text-white-primary p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-left mb-6">Education</h2>
      
      {/* Timeline Container */}
      <div>
        <div className="relative border-l-4 border-gray-primary dark:border-gray-light pl-6">
          {educationData.map((edu, index) => (
            <div key={index} className={`mb-2 relative ${edu.classes}`}>
              {/* Timeline Dot */}
              <div className="absolute left-[-36px] top-[22%] sm:top-[35%] -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full border-2 border-white dark:border-transparent"></div>

              {/* Timeline Content */}
              <div className="flex-col gap-2">
                <div className="flex items-start sm:items-center jusitfy-center gap-4">
                  <Image
                    src={edu.image}
                    alt={edu.school}
                    width={75}
                    height={75}
                    className="rounded-md bg-white"
                  />
                  <div className="flex-col items-start sm:items-center w-full">
                    <div className="flex-col sm:flex justify-between">
                      <h3 className="text-lg font-bold">{edu.school}</h3>
                      <div className="flex justify-start gap-2">
                        <p>GPA: {edu.gpa}</p>
                        <Image
                          src="/open-book.svg"
                          alt="Open book"
                          width={25}
                          height={25}
                          className="dark:invert"
                        />
                      </div>

                    </div>
                    <p className="text-sm text-gray-light dark:text-gray-primary">{edu.date}</p>
                  </div>
                </div>
                <p className="text-sm mt-2">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>        
      </div>

    </div>
  );
}
