import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "../../data/profile";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["about", "About"], ["skills", "Skills"], ["projects", "Projects"], ["journey", "Journey"], ["youtube", "YouTube"], ["contact", "Contact"]];
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2 font-mono text-lg font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-extrabold text-white transition-transform hover:scale-105">P</span>
          <span>Parsa<span className="text-indigo-500">.dev</span></span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} className="transition hover:text-indigo-500">{label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hidden rounded-lg p-2 text-zinc-500 transition hover:text-indigo-500 sm:block" aria-label="GitHub"><Github size={17} /></a>
          <ThemeToggle />
          <button onClick={() => setOpen((v) => !v)} className="rounded-lg p-2 md:hidden" aria-label="Toggle menu">{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
      {open && <nav className="border-t border-slate-200 bg-white px-4 py-4 dark:border-zinc-800 dark:bg-zinc-950 md:hidden"><div className="mx-auto flex max-w-6xl flex-col gap-1">{links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={close} className="rounded-lg px-3 py-2.5 transition hover:bg-indigo-500/10">{label}</a>)}</div></nav>}
    </header>
  );
}
