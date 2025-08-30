import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';




export const metadata = { title: 'Contact — Ricko Saputra' };

export default function ContactPage(){
  return (
    <>
      <Navbar/>
      <main className="mx-auto max-w-7xl container-pad py-16 grid gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold">Let’s build your website</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Tell me about your project, timeline, and goals. I’ll reply within 24 hours with a tailored plan and quote.</p>
          <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-emerald-500"/> Typical delivery in 7 days</div>
            <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-emerald-500"/> Free consultation call</div>
            <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-emerald-500"/> Flexible payment milestones</div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <a href="mailto:funrki5@gmail.com" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800">📧 Email</a>
            <a href="https://wa.me/6282281054502" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800">💬 WhatsApp</a>
            <a href="https://instagram.com/ikoanak.emak" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800">📷 Instagram</a>
            <a href="https://github.com/Rickosaputra" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800">🐙 GitHub</a>
          </div>
        </div>

        <form 
           className="rounded-3xl border bg-white p-6 shadow-soft dark:bg-slate-900 dark:border-slate-800" action="https://formsubmit.co/funrki5@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="New Project Inquiry — Ricko Saputra"/>
          <input type="hidden" name="_template" value="table"/>
          <input type="hidden" name="_captcha" value="false"/>
          {/* TODO: change after deploy */}
          <input type="hidden" name="_next" value="https://your-domain.com/thank-you"/>

          <div className="grid gap-4">
            <div>
              <label className="text-sm font-medium" htmlFor="name">Name</label>
              <input id="name" name="name" required className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand/40 dark:bg-slate-950" placeholder="Your name" required />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand/40 dark:bg-slate-950" placeholder="you@example.com" required />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="phone">WhatsApp (optional)</label>
              <input id="phone" name="phone" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand/40 dark:bg-slate-950" placeholder="e.g. +6282281054502" />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="type">Project Type</label>
              <select id="type" name="project_type" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand/40 dark:bg-slate-950">
                <option>Landing Page</option>
                <option>Company Profile</option>
                <option>Blog Setup</option>
                <option>Custom</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand/40 dark:bg-slate-950" placeholder="Tell me about your goals, timeline, and any references..." required />
            </div>
            <button type="submit" className="rounded-xl bg-brand px-5 py-3 text-white font-semibold shadow-soft hover:bg-brand-dark">Request Quote</button>
          </div>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">*Form live — sent to <strong>funrki5@gmail.com</strong>.</p>
        </form>
      </main>
      <Footer/>
    </>
  );
}
