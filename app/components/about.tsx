import Image from "next/image";
import Link from "next/link";

export default function About() {
  const socialLinks = [
    {
      href: "https://github.com/gaigemcmichael/",
      src: "/github.svg",
      alt: "GitHub button",
    },
    {
      href: "https://www.linkedin.com/in/gaigemcmichael/",
      src: "/linkedin.svg",
      alt: "LinkedIn button",
    },
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between gap-5 items-center text-center md:text-left bg-gray-secondary dark:bg-black-secondary text-black dark:text-white-primary p-6 rounded-lg shadow-lg">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl md:text-5xl font-bold">
          Gaige McMichael
        </h2>
        <h3 className="text-lg md:text-xl">
          A driven computer science student who currently attends The Ohio State University.
        </h3>
        <div className="flex justify-center md:justify-start gap-4">
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
                className="cursor-pointer hover:opacity-80"
                width={25}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
      <Image
        src="/profile.jpeg"
        alt="Gaige's profile picture"
        className="rounded-full border-4 border-blue-primary dark:border-blue-primary-dark"
        width={175}
        height={175}
      />
    </div>
  );
}
