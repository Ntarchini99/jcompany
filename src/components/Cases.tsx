import { ArrowUpRight, Quote } from 'lucide-react';
import { Reveal, SectionTag } from './shared';
import { useLanguage } from '../i18n';

export default function Cases() {
  const { t } = useLanguage();

  return (
    <section id="casos" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <SectionTag>{t.cases.tag}</SectionTag>
              <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {t.cases.titleA}
                <br />
                <span className="text-zinc-500">{t.cases.titleB}</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-500">{t.cases.intro}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.cases.items.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <article className="group flex h-full flex-col rounded-2xl border border-surface-line bg-surface-raised p-8 transition-all duration-300 hover:border-accent-500/30 hover:bg-surface-overlay">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-surface-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                    {c.industry}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-400" />
                </div>
                <h3 className="font-display mt-6 text-xl font-semibold text-white">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{c.result}</p>
                <div className="mt-8 border-t border-surface-line pt-6">
                  <p className="font-display text-3xl font-semibold text-accent-400">{c.metric}</p>
                  <p className="mt-1 text-xs text-zinc-500">{c.metricLabel}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <figure className="mt-16 rounded-2xl border border-surface-line bg-surface-raised p-10 text-center md:p-14">
            <Quote className="mx-auto h-6 w-6 text-accent-400" />
            <blockquote className="font-display mx-auto mt-6 max-w-3xl text-xl font-medium leading-relaxed text-white md:text-2xl">
              {t.cases.quote}
            </blockquote>
            <figcaption className="mt-6 text-sm text-zinc-500">{t.cases.attribution}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
