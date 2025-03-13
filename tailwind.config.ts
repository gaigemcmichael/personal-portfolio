import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enables dark mode using the 'class' strategy
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        // Light Mode Colors
        "blue-primary": "#2563eb",
        "blue-secondary": "#1d4ed8",
        "white-primary": "#e5e7eb", // text (gray-200)
        "gray-primary": "#d6dbdc", // light background (closest to gray-300)
        "gray-secondary": "#f3f4f6", // light background for section background (gray-100)
        "gray-light": "#4b5563", // text or dark background (gray-600)
        "red-light": "#f87171", // Light red for alerts
        "green-light": "#34d399", // Light green for success
        "yellow-light": "#fde047", // Vibrant yellow for warnings
        "orange-light": "#fb923c", // Bright orange for accenting
        "purple-light": "#a78bfa", // Soft lavender purple for subtle highlights

        // Dark Mode Colors
        "black-primary": "#1f2937", //dark background
        "black-secondary": "#374151", //dark sections background
        "blue-primary-dark": "#1e40af", // Darker blue for primary
        "blue-secondary-dark": "#1c3aa9", // Muted secondary blue
        "white-primary-dark": "#374151", // Soft grayish white for text in dark mode
        "gray-dark": "#111827", // Very dark gray for backgrounds
        "red-dark": "#dc2626", // Vibrant red for alerts
        "green-dark": "#16a34a", // Rich green for success
        "yellow-dark": "#d97706", // Muted yellow for warnings
        "orange-dark": "#ea580c", // Burnt orange for accenting
        "purple-dark": "#7c3aed", // Deep violet for highlights
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;
