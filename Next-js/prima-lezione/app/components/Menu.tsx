import Link from 'next/link';

export default function Menu() {
  return (
    <nav className="menu p-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}