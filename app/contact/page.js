import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Contact – Ricko Saputra" };

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl container-pad">
        <h1 className="text-3xl font-extrabold">Let’s build your website</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Tell me about your project, timeline, and budget.
        </p>

        <form
          action="https://formsubmit.co/funrki5@gmail.com"
          method="POST"
          className="rounded-3xl border bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 mt-6"
        >
          {/* FormSubmit settings */}
          <input type="hidden" name="_subject" value="New Project Inquiry — Ricko Saputra" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value="false" />
          {/* ganti setelah deploy */}
          <input type="hidden" name="_next" value="https://ricko-next-portfolio.vercel.app/thank-you" />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-medium">WhatsApp (optional)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none"
                placeholder="+62…"
              />
            </div>

            <div>
              <label htmlFor="project_type" className="text-sm font-medium">Project Type</label>
              <select
                id="project_type"
                name="project_type"
                className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none"
                defaultValue="Landing Page"
              >
                <option>Landing Page</option>
                <option>Company Profile</option>
                <option>Blog Setup</option>
                <option>Custom</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none"
              placeholder="Tell me more about your goals, deadline, and budget…"
            />
          </div>

          <button type="submit" className="mt-4 rounded-xl bg-brand px-5 py-3 text-white font-semibold">
            Send
          </button>

          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
            *Form live — sent to <strong>funrki5@gmail.com</strong>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
}
