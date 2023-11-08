import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Menu from './components/Menu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CiaoCiao App',
  description: '...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <header className="p-4 text-center text-3xl mb-10">My App</header>

          <Menu />

          <section className="mt-10 p-4">{children}</section>

          <footer className="text-center bg-black text-white py-10">
            Copyright &copy; CiaoCiao
          </footer>
        </main>
      </body>
    </html>
  );
}
