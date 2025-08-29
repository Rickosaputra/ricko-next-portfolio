import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export default function WorkPage(){
  const projects = [
    {t:'SaaS Landing', d:'Hero, features, pricing. Focused on conversions.'},
    {t:'Agency Website', d:'Services, team, testimonials, contact.'},
    {t:'Creator Portfolio', d:'Gallery, bio, CTAs, contact form.'},
  ];
  return (
    <>
      <Navbar/>
      <main className="mx-auto max-w-7xl container-pad py-16">
        <h1 className="text-3xl font-extrabold">Selected Work</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">A few projects that represent my capabilities.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p,i)=> (
            <article key={i} className="rounded-2xl border bg-white p-5 shadow-sm dark:bg-slate-900 dark:border-slate-800">
              <h3 className="font-semibold">{p.t}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.d}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer/>
    </>
  );
}
