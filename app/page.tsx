import About from './about';
import Experience from './experience';

export default function Home() {
  return (
    <main className="flex flex-col gap-16 min-h-screen max-w-[1920px]items-center px-10 lg:px-24">
      <About/>
      <Experience/>
    </main>
  );
}
