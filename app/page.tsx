import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[1440px] flex-col items-center justify-between p-24">
      <div className="flex justify-between gap-5">
        <div className="flex flex-col gap-4 justify-normal">
          <h2 className="text-5xl font-bold">Gaige McMichael</h2>
          <h3 className="text-xl">A driven computer science student who currently attends The Ohio State University.</h3>
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/gaigemcmichael/" target="_blank" rel="noopener noreferrer">
              <img 
                src="/linkedin.svg" 
                alt="LinkedIn button" 
                style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
              />
            </Link>
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
     
      <p>Content</p>
    </main>
  );
}
