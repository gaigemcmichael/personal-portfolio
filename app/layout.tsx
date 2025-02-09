import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from './components/navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaige's Portfolio",
  description: "The personal portfolio of Gaige McMichael, Antwerp Ohio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-800">
        <NavBar/>
        <main className="px-2 md:px-8 dark:bg-gray-800">{children}</main>
      </body>
    </html>
  );
}
