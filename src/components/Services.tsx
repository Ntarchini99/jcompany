import { Code2, Compass, Rocket, ShieldCheck, Layers, Gauge } from 'lucide-react';
import { Reveal, SectionTag } from './shared';
import { useLanguage } from '../i18n';

const icons = [Code2, Compass, Rocket, ShieldCheck, Layers, Gauge];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicios" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <SectionTag>{t.services.tag}</SectionTag>
            <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {t.services.titleA}
              <br />
              <span className="text-zinc-500">{t.services.titleB}</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-surface-line bg-surface-line md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={service.title} delay={(i % 3) * 80}>
                <article className="group flex h-full flex-col bg-surface-raised p-8 transition-colors duration-300 hover:bg-surface-overlay">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-line bg-surface text-accent-400 transition-colors group-hover:border-accent-500/40">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display mt-6 text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{service.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-surface-line px-3 py-1 font-mono text-[11px] text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
