import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


import Link from 'next/link';

export default function HomePage(){
  return (
    <>
      <Navbar/>
      <main>
        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand/10 via-transparent to-fuchsia-200/30 dark:from-brand/10 dark:to-fuchsia-500/10"/>
          <div className="mx-auto max-w-7xl container-pad grid gap-10 lg:grid-cols-2 items-center py-20 lg:py-28">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white px-3 py-1 text-xs font-semibold text-brand dark:bg-slate-900">
                <span className="h-2 w-2 rounded-full bg-brand"></span> Freelance Web Developer
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Hi, I’m <span className="text-brand">Ricko Saputra</span><br/>I build modern, fast & elegant websites</h1>
              <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed max-w-prose">I craft responsive landing pages and websites for startups, creators, and small businesses. Clean design, solid performance, and SEO-friendly by default.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center rounded-xl bg-brand px-5 py-3 text-white font-semibold shadow-soft hover:bg-brand-dark">Let’s Work Together</Link>
                <Link href="/work" className="inline-flex items-center rounded-xl border px-5 py-3 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800">See My Work</Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 -z-10 blur-2xl bg-gradient-to-r from-brand/30 to-fuchsia-300/30 rounded-3xl"/>
              <div className="rounded-3xl p-2 shadow-soft bg-white/70 dark:bg-white/10 backdrop-blur">
                <img className="rounded-2xl" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" alt="Ricko working on laptop"/>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl container-pad">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold">Services</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">Everything you need to launch a beautiful web presence.</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {t:'Landing Pages', d:'High-converting, responsive pages with modern best practices.'},
                {t:'Company Profiles', d:'Showcase brand, services, and team with clarity.'},
                {t:'Blog & SEO', d:'Clean blog setups ready for SEO with speed.'},
                {t:'Custom Components', d:'Reusable UI blocks tailored to your brand.'},
              ].map((it,i)=> (
                <div key={i} className="rounded-2xl border bg-white p-6 shadow-soft dark:bg-slate-900 dark:border-slate-800">
                  <h3 className="mt-1 font-semibold">{it.t}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{it.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="mx-auto max-w-7xl container-pad">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-extrabold">Selected Work</h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300">A quick look at what I can deliver.</p>
              </div>
              <Link href="/work" className="hidden sm:inline-flex items-center rounded-xl border px-4 py-2 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800">View All</Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {img:'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop', t:'SaaS Landing', d:'Conversion-focused hero, features, pricing.'},
                {img:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop', t:'Agency Website', d:'Services, team, testimonials, contact.'},
                {img:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop', t:'Creator Portfolio', d:'Personal brand with gallery & contact.'},
              ].map((p,i)=> (
                <article key={i} className="group overflow-hidden rounded-2xl border shadow-soft dark:border-slate-800">
                  <img className="aspect-video w-full object-cover" src={p.img} alt={p.t} />
                  <div className="p-5"><h3 className="font-semibold">{p.t}</h3><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.d}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl container-pad">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold">What Clients Say</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">Social proof that builds trust.</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {q:'“Ricko delivered our landing page faster than expected. Clean code, great taste in design.”', a:'— Aulia, Founder of FinGrow'},
                {q:'“Komunikatif, rapi, dan responsif. Website company profile kami jadi terlihat profesional.”', a:'— Bima, PT Nusantara Digital'},
                {q:'“Highly recommended. Page speed bagus dan SEO-nya siap pakai.”', a:'— Sari, Content Creator'},
              ].map((it,i)=> (
                <figure key={i} className="rounded-2xl border bg-white p-6 shadow-soft dark:bg-slate-900 dark:border-slate-800">
                  <blockquote className="text-slate-700 dark:text-slate-200">{it.q}</blockquote>
                  <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-400">{it.a}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl container-pad grid items-center gap-6 rounded-3xl border bg-white p-8 shadow-soft dark:bg-slate-900 dark:border-slate-800">
            <div className="text-center">
              <h3 className="text-2xl font-extrabold">Have a project in mind?</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">Let’s build something great together.</p>
              <Link href="/contact" className="mt-4 inline-flex items-center rounded-xl bg-brand px-5 py-3 text-white font-semibold shadow-soft hover:bg-brand-dark">Get a Free Quote</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
