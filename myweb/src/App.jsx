import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Journey } from "./components/sections/Journey";
import { YouTube } from "./components/sections/YouTube";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar />
      <main className="mx-auto max-w-6xl space-y-28 px-4 py-10 sm:px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <YouTube />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}