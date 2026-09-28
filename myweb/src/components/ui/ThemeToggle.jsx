import { Moon, Sun } from "lucide-react";
import { useApp } from "../../context/AppContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useApp();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition hover:bg-slate-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-amber-400 dark:hover:border-zinc-700"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}