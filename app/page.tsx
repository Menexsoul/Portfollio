import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <main className="relative w-full">
      <CustomCursor />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
