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
        {
          href: "https://www.instagram.com/gaige_mcmichael/",
          src: "/instagram.svg",
          alt: "Instagram button",
        },
    ];

  return (
      <div className="flex flex-col-reverse md:flex-row justify-between gap-5 items-center text-center md:text-left">
        <div className="flex flex-col gap-4 justify-normal">
          <h2 className="text-3xl md:text-5xl font-bold">Gaige McMichael</h2>
          <h3 className="text-lg md:text-xl">A driven computer science student who currently attends The Ohio State University.</h3>
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
                  className="cursor-pointer"
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
          className="rounded-full border-3 border-gray-500"
          width={175}
          height={175}
        />
      </div>
  );
}