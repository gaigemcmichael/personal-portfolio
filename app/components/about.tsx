import Image from "next/image";
import Link from "next/link";

export default function About() {
  const socialLinks = [
    {
      href: "https://github.com/gaigemcmichael/",
      src: "/about/github.svg",
      alt: "GitHub button",
      classes: "dark:invert cursor-pointer hover:opacity-80",
    },
    {
      href: "https://www.linkedin.com/in/gaigemcmichael/",
      src: "/about/linkedin.svg",
      alt: "LinkedIn button",
      classes: "bg-white-primary rounded-md cursor-pointer hover:opacity-80",
    },
  ];

  return (
    <div id="home" className="flex flex-col-reverse md:flex-row xl:w-[1024px] justify-between gap-5 md:gap-8 items-center text-center md:text-left bg-gray-secondary dark:bg-black-secondary text-black dark:text-white-primary p-6 rounded-lg shadow-lg transition-all duration-300 scroll-m-[80px] sm:scroll-m-[90px]">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          Gaige McMichael
        </h2>
        <h3 className="text-md sm:text-lg md:text-xl">
          A driven computer science student who currently attends The Ohio State University.
        </h3>
        <div className="flex justify-center md:justify-start align-center gap-4">
          {/* Social Media Links */}
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={link.src}
                alt={link.alt}
                className={link.classes}
                width={25}
                height={20}
              />
            </Link>
          ))}
          <Link
              href="/about/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-xs text-white-primary dark:text-black-primary bg-black-primary dark:bg-white-primary p-1 rounded hover:opacity-80"
            >
              Resume
            </Link>
        </div>
      </div>
      <Image
        src="/about/profile.jpeg"
        alt="Gaige's profile picture"
        className="rounded-full border-4 border-blue-primary dark:border-blue-primary-dark"
        width={175}
        height={175}
      />
    </div>
  );
}
