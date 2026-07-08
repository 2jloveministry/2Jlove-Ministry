'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const nav = [
  { href: '/#vision', label: 'Vision' },
  { href: '/#about', label: 'About' },
  { href: '/word', label: 'The Word' },
  { href: '/worship', label: 'Worship' },
  { href: '/prayer', label: 'Prayer' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-3 transition md:px-10 lg:px-16 ${scrolled ? 'border-b border-white/10 bg-black/75 backdrop-blur-xl' : 'bg-gradient-to-b from-black/75 to-transparent'}`}>
      <Link href="/" className="flex items-center gap-3 no-underline">
        <Image src="/assets/2jlove-logo.png" alt="2Jlove Ministry logo" width={52} height={52} className="rounded-full border border-ministryGold/30 object-cover shadow-[0_0_35px_rgba(212,175,55,.18)]" />
        <div>
          <strong className="block text-sm md:text-base">2Jlove Ministry</strong>
          <span className="hidden text-[11px] tracking-[.06em] text-ministryMuted sm:block">Worship • Word • Mission</span>
        </div>
      </Link>

      <button className="relative z-50 grid h-11 w-11 place-items-center md:hidden" onClick={() => setOpen(!open)} aria-label="메뉴 열기">
        {open ? <X /> : <Menu />}
      </button>

      <nav className={`${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black/95 text-2xl transition md:pointer-events-auto md:static md:flex-row md:gap-8 md:bg-transparent md:text-sm md:opacity-100`}>
        {nav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-ministryWhite/80 no-underline transition hover:text-ministryGoldSoft">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
