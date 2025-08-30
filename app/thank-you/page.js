import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export const metadata = { title: 'Thanks! — Ricko Saputra' };

export default function ThankYou(){
  return (
    <>
      <Navbar/>
      <main className="min-h-[60vh] grid place-items-center container-pad text-center py-20">
        <div>
          <h1 className="text-3xl font-extrabold">Thanks! 🎉</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Your message has been sent. I’ll reply to your email within 24 hours.</p>
          <a href="/" className="mt-6 inline-flex items-center rounded-xl border px-4 py-2 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800">Back to Home</a>
        </div>
      </main>
      <Footer/>
    </>
  );
}
