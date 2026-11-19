import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import { Reveal, SectionTag } from './shared';
import { useLanguage } from '../i18n';

const icons = [Search, PenTool, Code2, Rocket];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="proceso" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionTag>{t.process.tag}</SectionTag>
            <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {t.process.titleA}
              <br />
              <span className="text-zinc-500">{t.process.titleB}</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={step.title} delay={i * 100}>
                <div className="group relative h-full rounded-2xl border border-surface-line bg-surface-raised p-7 transition-colors hover:border-accent-500/30">
                  <span className="font-mono text-xs text-zinc-600">0{i + 1}</span>
                  <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl border border-surface-line bg-surface text-accent-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-400">
                    {step.phase}
                  </p>
                  <h3 className="font-display mt-2 text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500">{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
