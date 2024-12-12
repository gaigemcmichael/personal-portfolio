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
      className="p-2 bg-transparent rounded text-black dark:text-white"
    >
      <Image
        src="/dark-mode.svg"
        alt="dark mode toggle"
        width={30}
        height={30}
      />
    </button>
  );
}
