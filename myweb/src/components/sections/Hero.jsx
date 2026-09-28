import { ChevronRight, Github } from "lucide-react";
import { useState } from "react";
import { profile } from "../../data/profile";
import { Button } from "../ui/Button";

export function Hero() {
  const [tab, setTab] = useState("code");
  return (
    <section id="home" className="grid items-center gap-10 pt-6 lg:grid-cols-12 lg:pt-12">
      <div className="space-y-6 lg:col-span-7">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-indigo-400"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />Frontend Developer</div>
        <div className="space-y-2"><h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Parsa</span></h1><h2 className="font-mono text-2xl font-bold text-zinc-500 dark:text-zinc-400 sm:text-3xl">&lt;Frontend Developer /&gt;</h2></div>
        <p className="max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">I build modern, responsive and user-focused web experiences with JavaScript, React, Vue and clean UI architecture.</p>
        <div className="flex flex-wrap gap-3"><Button href="#projects">View Projects <ChevronRight size={16} /></Button><Button href={profile.github} variant="secondary" target="_blank" rel="noreferrer"><Github size={16} /> GitHub Profile</Button><Button href="#contact" variant="ghost">Get in Touch</Button></div>
      </div>
      <div className="lg:col-span-5"><div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 font-mono text-xs shadow-xl">
        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-4 py-3"><div className="flex gap-2"><i className="h-3 w-3 rounded-full bg-red-500/80" /><i className="h-3 w-3 rounded-full bg-amber-500/80" /><i className="h-3 w-3 rounded-full bg-emerald-500/80" /></div><div className="flex gap-2"><TabButton active={tab === "code"} onClick={() => setTab("code")}>Developer.js</TabButton><TabButton active={tab === "terminal"} onClick={() => setTab("terminal")}>Terminal</TabButton></div></div>
        <div className="min-h-[220px] overflow-x-auto p-4 text-zinc-300">{tab === "code" ? <pre className="text-[12px] leading-relaxed">{`const developer = {
  name: "Parsa",
  age: ${profile.age},
  role: "Frontend Developer",
  stack: ["React", "Vue", "Tailwind", "Python"],
  learning: true
};`}<span className="mt-2 block text-zinc-500">// building, learning, improving...</span></pre> : <div className="space-y-2 text-[12px]"><p className="text-emerald-400">$ npm run dev</p><p className="text-zinc-400">&gt; parsa-portfolio@1.0.0 dev</p><p className="text-zinc-400">&gt; vite</p><p className="pt-1 text-indigo-400">VITE ready</p><p className="text-zinc-500">Watching for changes...</p></div>}</div>
      </div></div>
    </section>
  );
}
function TabButton({ active, children, ...props }) { return <button {...props} className={`rounded px-2.5 py-1 text-[11px] font-medium transition ${active ? "bg-zinc-800 text-indigo-400" : "text-zinc-500 hover:text-zinc-300"}`}>{children}</button>; }
