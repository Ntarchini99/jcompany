import { Reveal, SectionTag } from './shared';
import { useLanguage } from '../i18n';
import { FOUNDER_PHOTO_URL } from '../config';

export default function Model() {
  const { t } = useLanguage();

  return (
    <section id="modelo" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-[420px] bg-accent-500/5 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionTag>{t.model.tag}</SectionTag>
            <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {t.model.titleA}
              <br />
              <span className="text-zinc-500">{t.model.titleB}</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400">{t.model.paragraph}</p>
            <div className="mt-10 flex flex-col gap-6">
              {t.model.pillars.map((pillar) => (
                <div key={pillar.step} className="flex gap-5">
                  <span className="font-mono text-sm text-accent-400">{pillar.step}</span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent-500/40 via-surface-line to-transparent" />
              <div className="relative rounded-2xl bg-surface-raised p-8 md:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-400">
                  {t.model.commitmentLabel}
                </p>
                <blockquote className="font-display mt-6 text-xl font-medium leading-relaxed text-white md:text-2xl">
                  {t.model.quote}
                </blockquote>
                <div className="mt-8 flex items-center gap-4 border-t border-surface-line pt-8">
                  <a
                    href={https://i.postimg.cc/hPpyNR7F/Whats-App-Image-2026-11-18-at-21-35-45.jpg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-accent-500/40 transition-all hover:ring-accent-400"
                  >
                    <img
                      src={FOUNDER_PHOTO_URL}
                      alt={`${t.model.founderName}, ${t.model.founderRole}`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <span className="absolute inset-0 hidden items-center justify-center bg-accent-500/15 font-display text-sm font-semibold text-accent-400">
                      JJ
                    </span>
                  </a>
                  <div>
                    <p className="text-sm font-medium text-white">{t.model.founderName}</p>
                    <p className="text-xs uppercase tracking-wider text-zinc-500">
                      {t.model.founderRole}
                    </p>
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-surface-line bg-surface-line">
                  <div className="bg-surface p-6">
                    <p className="font-display text-2xl font-semibold text-white">
                      {t.model.statA.value}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">{t.model.statA.label}</p>
                  </div>
                  <div className="bg-surface p-6">
                    <p className="font-display text-2xl font-semibold text-white">
                      {t.model.statB.value}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">{t.model.statB.label}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
