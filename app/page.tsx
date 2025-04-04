import About from './components/about';
import Experience from './components/experience';
import Education from './components/education';
import Projects from './components/projects';
import Skills from './components/skills';

export default function Home() {
  return (
    <main className="flex flex-col gap-4 sm:gap-5 min-h-screen max-w-screen items-center px-1 sm:px-10 lg:px-24 dark:bg-black-primary">
      <About/>
      <Experience/>
      <Education/>
      <Projects/>
      <Skills/>
    </main>
  );
}
