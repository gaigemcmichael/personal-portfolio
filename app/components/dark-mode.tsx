import { useState, useEffect } from "react";
import Image from "next/image";

export default function DarkMode(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="relative p-2 bg-transparent rounded transition-all duration-500 lg:ml-10"
    >
      <div
        className={`relative w-[30px] h-[30px] transition-transform duration-500 hover:opacity-80 ${
          isDarkMode ? "rotate-180" : "rotate-0"
        }`}
      >
        {/* Moon Icon */}
        <Image
          src="/moon.svg"
          alt="moon icon"
          width={30}
          height={30}
          className={`absolute inset-0 transition-opacity duration-500 ${
            isDarkMode ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Sun Icon */}
        <Image
          src="/sun.svg"
          alt="sun icon"
          width={30}
          height={30}
          className={`absolute inset-0 transition-opacity duration-500 text-white-primary hover:text-yellow-light ${
            isDarkMode ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </button>
  );
}
