'use client';

import { useSearchParams } from 'next/navigation';

export default function About() {
  const qs = useSearchParams();

  console.log(qs, qs.get('username'));

  return <div>About / Input {qs.get('username')}</div>;
}
