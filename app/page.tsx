import About from './components/about';
import Experience from './components/experience';

export default function Home() {
  return (
    <main className="flex flex-col gap-6 min-h-screen max-w-[1920px] items-center px-1 sm:px-10 lg:px-24 dark:bg-black-primary">
      <About/>
      <Experience/>
    </main>
  );
}
