import { Globe, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { languageOptions, useLanguage } from '../i18n';

export default function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  if (mobile) {
    return (
      <div className="flex gap-2 px-3 py-2">
        {languageOptions.map((opt) => (
          <button
            key={opt.code}
            onClick={() => setLang(opt.code)}
            className={`flex-1 rounded-lg border px-3 py-2 text-sm transition-colors ${
              lang === opt.code
                ? 'border-accent-500/50 bg-accent-500/10 text-accent-400'
                : 'border-surface-line text-zinc-400 hover:bg-surface-overlay'
            }`}
          >
            {opt.name}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-surface-line px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:bg-surface-raised"
        aria-label="Change language"
      >
        <Globe className="h-3.5 w-3.5" />
        {lang.toUpperCase()}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-36 overflow-hidden rounded-xl border border-surface-line bg-surface-overlay shadow-2xl shadow-black/50">
          {languageOptions.map((opt) => (
            <button
              key={opt.code}
              onClick={() => {
                setLang(opt.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                lang === opt.code
                  ? 'bg-accent-500/10 text-accent-400'
                  : 'text-zinc-300 hover:bg-surface-raised'
              }`}
            >
              {opt.name}
              {lang === opt.code && <Check className="h-3.5 w-3.5" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
