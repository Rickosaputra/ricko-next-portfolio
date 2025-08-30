import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

export default function ThankYouPage() {
  return (
    <>
      <Navbar />

      <section className="relative z-10 min-h-[72vh] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-950 dark:to-black">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

        <main className="relative mx-auto max-w-3xl px-4 py-16 sm:py-24">
          <div className="mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl dark:bg-black/20 sm:p-10">
            {/* Ikon sukses */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 text-emerald-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="m22 4-10 10-3-3" />
              </svg>
            </div>

            <h1 className="text-center text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Thank you!
            </h1>
            <p className="mt-3 text-center text-slate-300">
              Your message has been sent. I’ll get back to you soon via{" "}
              <span className="font-semibold text-white">email</span> or{" "}
              <span className="font-semibold text-white">WhatsApp</span>.
            </p>

            {/* CTA utama */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-brand/60"
              >
                Back to Home
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                See My Work
              </Link>

              <a
                href="https://wa.me/6282281054502"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-3 font-semibold text-emerald-200 backdrop-blur transition hover:bg-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Social links */}
            <div className="mt-10 flex justify-center gap-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6282281054502"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-emerald-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.648.5.5 5.648.5 12c0 2.104.549 4.162 1.59 5.983L.5 23.5l5.74-1.55A11.42 11.42 0 0 0 12 23.5c6.352 0 11.5-5.148 11.5-11.5S18.352.5 12 .5zm0 20.9a9.35 9.35 0 0 1-4.759-1.296l-.342-.204-3.405.92.911-3.317-.223-.34A9.353 9.353 0 0 1 2.1 12C2.1 6.615 6.615 2.1 12 2.1s9.9 4.515 9.9 9.9-4.515 9.9-9.9 9.9z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/ikoanak.emak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-pink-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/rickosaputra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.648.5.5 5.82.5 12.383c0 5.236 3.438 9.674 8.207 11.246.6.11.82-.263.82-.582 0-.287-.01-1.046-.016-2.052-3.338.744-4.042-1.642-4.042-1.642-.546-1.403-1.333-1.777-1.333-1.777-1.09-.77.082-.755.082-.755 1.205.087 1.838 1.258 1.838 1.258 1.07 1.87 2.807 1.33 3.492 1.017.108-.8.418-1.33.76-1.637-2.664-.31-5.466-1.364-5.466-6.07 0-1.342.463-2.44 1.223-3.3-.123-.31-.53-1.558.117-3.248 0 0 1.004-.33 3.293 1.26a11.32 11.32 0 0 1 3-.414c1.018.005 2.042.14 3 .414 2.287-1.59 3.29-1.26 3.29-1.26.65 1.69.242 2.938.12 3.248.76.86 1.22 1.958 1.22 3.3 0 4.718-2.807 5.756-5.478 6.06.43.383.823 1.138.823 2.296 0 1.66-.015 2.998-.015 3.41 0 .322.216.697.826.58C20.06 22.054 23.5 17.62 23.5 12.383 23.5 5.82 18.352.5 12 .5z" />
                </svg>
              </a>
            </div>
          </div>
        </main>
      </section>

      <Footer />
    </>
  );
}
