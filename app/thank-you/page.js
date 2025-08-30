import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = { title: "Thank You — Ricko Saputra" };

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl container-pad">
        <h1 className="text-3xl font-extrabold">Thank you!</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Your message has been sent. I’ll get back to you soon via email or WhatsApp.
        </p>
        <div className="mt-6">
          <Link href="/" className="rounded-xl bg-brand px-5 py-3 text-white font-semibold">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
