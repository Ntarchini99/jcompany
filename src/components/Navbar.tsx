import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo, useScrolled } from './shared';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../i18n';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const { t } = useLanguage();

  const links = [
    { label: t.navbar.services, href: '#servicios' },
    { label: t.navbar.model, href: '#modelo' },
    { label: t.navbar.process, href: '#proceso' },
    { label: t.navbar.cases, href: '#casos' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-surface-line bg-surface/85 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <Logo className="h-8 w-8" />
          <span className="font-display text-sm font-semibold tracking-wide text-white">
            Jerez <span className="text-zinc-500">Consulting &amp; Dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href="#contacto"
            className="group inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-accent-400"
          >
            {t.navbar.cta}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          className="rounded-lg p-2 text-zinc-300 hover:bg-surface-overlay md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-surface-line bg-surface/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-zinc-300 hover:bg-surface-overlay"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-white px-5 py-2.5 text-center text-sm font-medium text-black"
            >
              {t.navbar.cta}
            </a>
            <LanguageSwitcher mobile />
          </div>
        </div>
      )}
    </header>
  );
}
