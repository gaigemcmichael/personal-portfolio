import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from './navbar';

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
      <body>
        <NavBar/>
        <main className="p-4 md:p-12">{children}</main>
      </body>
    </html>
  );
}
