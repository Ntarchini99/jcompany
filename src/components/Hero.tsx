import { ArrowRight, ArrowUpRight, Play } from 'lucide-react';
import { useLanguage } from '../i18n';

const logos = ['FINTECH LAB', 'NORDIC RETAIL', 'HEALTHCORE', 'LOGISTIQ', 'BANCO NORTE', 'CLOUDPAY'];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-accent-500/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-surface-line bg-surface-raised/80 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            {t.hero.badge}
          </span>

          <h1
            className="animate-fade-up font-display mt-8 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '100ms' }}
          >
            {t.hero.title1}
            <br />
            <span className="text-gradient">{t.hero.title2}</span>
          </h1>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
            style={{ animationDelay: '200ms' }}
          >
            {t.hero.description}
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: '300ms' }}
          >
            <a
              href="#contacto"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-accent-400 sm:w-auto"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#modelo"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-surface-line px-7 py-3.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-surface-raised sm:w-auto"
            >
              <Play className="h-4 w-4" />
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <dl
          className="animate-fade-up mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-surface-line bg-surface-line sm:grid-cols-3"
          style={{ animationDelay: '400ms' }}
        >
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="bg-surface-raised/90 px-8 py-7 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-semibold text-white">{stat.value}</dd>
              <dd className="mt-1.5 text-sm text-zinc-500">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mt-20 border-y border-surface-line bg-surface-raised/40 py-5">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="whitespace-nowrap font-display text-sm font-medium tracking-[0.25em] text-zinc-600"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#servicios"
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 lg:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">{t.hero.scroll}</span>
        <ArrowUpRight className="h-4 w-4 rotate-90" />
      </a>
    </section>
  );
}
