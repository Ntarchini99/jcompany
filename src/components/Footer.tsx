import { Logo } from './shared';
import { useLanguage } from '../i18n';

export default function Footer() {
  const { t } = useLanguage();

  const nav = [
    { label: t.navbar.services, href: '#servicios' },
    { label: t.navbar.model, href: '#modelo' },
    { label: t.navbar.process, href: '#proceso' },
    { label: t.navbar.cases, href: '#casos' },
    { label: t.contact.tag, href: '#contacto' },
  ];

  return (
    <footer className="border-t border-surface-line bg-surface-raised/50">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Logo className="h-8 w-8" />
              <span className="font-display text-sm font-semibold text-white">
                Jerez <span className="text-zinc-500">Consulting &amp; Dev</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">{t.footer.description}</p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-500 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-surface-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Jerez Consulting &amp; Dev. {t.footer.rights}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">
            {t.footer.made}
          </p>
        </div>
      </div>
    </footer>
  );
}
