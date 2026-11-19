import { useEffect, useRef, useState, type ReactNode } from 'react';

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-surface-line bg-surface-raised px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-accent-400">
      <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
      {children}
    </span>
  );
}

export function Logo({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="7" className="fill-zinc-800" />
      <path
        d="M11 8v10.5a3.5 3.5 0 0 1-3.5 3.5"
        stroke="#f97f0f"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M11 8h9M20 8v14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}
