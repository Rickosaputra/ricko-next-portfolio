import './globals.css';

export const metadata = {
  title: 'Ricko Saputra — Web Developer',
  description: 'Freelance web developer building modern, fast & elegant websites.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
