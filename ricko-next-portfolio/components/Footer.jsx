export default function Footer(){
  return (
    <footer className="border-t border-slate-200/60 py-10 bg-white/80 dark:bg-slate-900/80 dark:border-slate-800">
      <div className="mx-auto max-w-7xl container-pad flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Ricko Saputra. All rights reserved.</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="/work" className="hover:text-brand">Work</a>
          <a href="/about" className="hover:text-brand">About</a>
          <a href="/contact" className="hover:text-brand">Contact</a>
        </div>
      </div>
    </footer>
  );
}
