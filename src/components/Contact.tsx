import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Reveal, SectionTag } from './shared';
import { useLanguage } from '../i18n';

export default function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contacto" className="relative overflow-hidden py-24 md:py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_100%,black,transparent)]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[400px] w-[720px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionTag>{t.contact.tag}</SectionTag>
            <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
              {t.contact.description}
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-14 max-w-2xl">
            {sent ? (
              <div className="rounded-2xl border border-accent-500/30 bg-surface-raised p-12 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-accent-400" />
                <h3 className="font-display mt-6 text-2xl font-semibold text-white">
                  {t.contact.successTitle.replace('{name}', name.split(' ')[0] || '')}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {t.contact.successBody.replace('{email}', email)}
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="mt-8 text-sm font-medium text-accent-400 hover:text-accent-300"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-surface-line bg-surface-raised p-8 md:p-10"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                      {t.contact.nameLabel}
                    </span>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full rounded-xl border border-surface-line bg-surface px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-accent-500/50"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                      {t.contact.emailLabel}
                    </span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full rounded-xl border border-surface-line bg-surface px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-accent-500/50"
                    />
                  </label>
                </div>
                <label className="mt-5 block">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {t.contact.messageLabel}
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full resize-none rounded-xl border border-surface-line bg-surface px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-accent-500/50"
                  />
                </label>
                <button
                  type="submit"
                  className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-accent-400"
                >
                  {t.contact.submit}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="mt-4 text-center text-xs text-zinc-600">{t.contact.note}</p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
