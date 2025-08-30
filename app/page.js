import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Ricko Saputra — Web Developer" };

export default function HomePage() {
  return (
    <>
      <Navbar />
       <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
  {/* HERO */}
  <section className="grid gap-8 md:grid-cols-2 md:items-center">
    {/* Text */}
        <p className="text-sm">Freelance Web Developer</p>
        <h1 className="mt-1 text-3xl font-extrabold">
          Hi, I’m Ricko Saputra
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          I craft responsive landing pages and websites for startups, creators, and small businesses.
          Clean design, solid performance, and SEO-friendly by default.
        </p>

        <div className="mt-6">
          <Link href="/contact" className="mr-3 rounded-xl bg-brand px-5 py-3 text-white font-semibold">
            Let’s Work Together
          </Link>
          <Link href="/work" className="rounded-xl border px-5 py-3">
            See My Work
          </Link>
        </div>

        {/* contoh ganti <img> */}
        <div className="mt-8 rounded-2xl overflow-hidden">
          <Image
            src="/ricko.png"          // file di /public
            alt="Ricko Saputra"
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
