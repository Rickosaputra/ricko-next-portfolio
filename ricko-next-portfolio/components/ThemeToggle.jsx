'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle(){
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentlyDark = saved ? saved === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', currentlyDark);
    setIsDark(currentlyDark);
  }, []);
  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  };
  return (
    <button onClick={toggle} className="inline-flex items-center rounded-xl border px-3 py-2 font-medium hover:bg-slate-50 dark:hover:bg-slate-800" aria-label="Toggle theme">
      <span aria-hidden>{isDark ? '☀️' : '🌙'}</span>
    </button>
  );
}
