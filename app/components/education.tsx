import Image from "next/image";
import Link from "next/link";

export default function About() {

  return (
    <div className="flex flex-col gap-5 items-left bg-gray-secondary dark:bg-black-secondary text-black dark:text-white-primary p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-left pl-6">Education</h2>
      <p>Ohio State</p>
      <p>Antwerp High School</p>
    </div>
  );
}
