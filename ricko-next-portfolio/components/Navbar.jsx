'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar(){
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur dark:bg-slate-900/80 dark:border-slate-800">
      <nav className="mx-auto max-w-7xl container-pad flex items-center justify-between py-4">
        <Link href="/" className="inline-flex items-center gap-2 font-extrabold text-xl tracking-tight">
          <span className="h-8 w-8 grid place-items-center rounded-xl bg-brand text-white">R</span>
          Ricko <span className="hidden sm:inline">Saputra</span>
        </Link>
        <button onClick={() => setOpen(!open)} className="lg:hidden inline-flex items-center rounded-xl px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <li><Link className="hover:text-brand" href="/work">Work</Link></li>
          <li><Link className="hover:text-brand" href="/about">About</Link></li>
          <li><Link className="hover:text-brand" href="/contact">Contact</Link></li>
          <li><ThemeToggle/></li>
          <li><Link className="inline-flex items-center rounded-xl bg-brand px-4 py-2 text-white shadow-soft hover:bg-brand-dark" href="/contact">Hire Me</Link></li>
        </ul>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-slate-200/60 bg-white/95 dark:bg-slate-900/95 dark:border-slate-800">
          <div className="mx-auto max-w-7xl container-pad py-4">
            <ul className="grid gap-3 text-sm font-medium">
              <li><Link onClick={()=>setOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" href="/work">Work</Link></li>
              <li><Link onClick={()=>setOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" href="/about">About</Link></li>
              <li><Link onClick={()=>setOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
