export function Button({ href, children, variant = "primary", className = "", ...props }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition";
  const variants = {
    primary: "bg-indigo-600 text-white shadow-md hover:bg-indigo-700",
    secondary: "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800",
    ghost: "border border-slate-300 text-slate-700 hover:border-slate-400 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-700",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) return <a href={href} {...props} className={classes}>{children}</a>;
  return <button {...props} className={classes}>{children}</button>;
}