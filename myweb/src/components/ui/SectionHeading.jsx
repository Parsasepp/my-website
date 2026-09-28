export function SectionHeading({ title, subtitle }) {
  return (
    <div className="border-b border-zinc-200 pb-4 dark:border-zinc-800">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{subtitle}</p>
    </div>
  );
}