import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage(){
  const stack = ['HTML5', 'CSS/Tailwind', 'JavaScript', 'React (optional on request)'];
  return (
    <>
      <Navbar/>
      <main className="mx-auto max-w-3xl container-pad py-16">
        <h1 className="text-3xl font-extrabold">About Me</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">I’m a freelance web developer based in Indonesia, focused on building modern, responsive websites using HTML, Tailwind CSS, and JavaScript. I value clean UI, performance, and SEO.</p>
        <h2 className="mt-10 text-2xl font-bold">Tech Stack</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {stack.map((s,i)=> (<li key={i} className="rounded-xl border px-4 py-3 dark:border-slate-800">{s}</li>))}
        </ul>
        <div className="mt-10 rounded-2xl border bg-white p-6 dark:bg-slate-900 dark:border-slate-800">
          <h3 className="font-semibold">Availability</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Open for freelance projects. Typical delivery 7 days. Let’s discuss your goals.</p>
          <a className="mt-4 inline-flex items-center rounded-xl bg-brand px-4 py-2 text-white font-semibold" href="/contact">Hire Me</a>
        </div>
      </main>
      <Footer/>
    </>
  );
}
