# Project memory

## Product intent & audience

- **Jerez Consulting & Dev**: software development firm combining technical execution with strategic advisory (boutique engineering / consultative software factory / tech partner model).
- Landing page targets potential clients seeking both software build and high-level consulting.
- All copy in Spanish.

## Brand personality & voice

- Premium, professional, boutique positioning.
- Confident, strategic tone — emphasizes "execution + vision" duality.
- Founder quote used to humanize and reinforce model.

## Visual design & UX direction

- Dark theme: black background with orange accents.
- Modern typography; smooth scroll-triggered animations.
- Single-page landing with anchored sections.
- Fixed navbar that becomes translucent on scroll; mobile hamburger menu.
- Sections: Hero (headline + stats + animated client logo marquee), Servicios, El Modelo (founder quote + CEO/Founder photo card with circular orange-bordered image, direct link, name, and title; monogram fallback if image missing), Proceso (4-phase cards: Descubrir → Diseñar → Construir → Escalar), Casos de éxito (metrics + testimonial), Contacto (form only — email and hours cards removed), Footer.
- CEO & Founder photo placement is in "El Modelo" section next to the quote.
- Fully responsive (mobile / tablet / desktop).

## Decisions, constraints & rationale

- Stack: Vite + React + TypeScript + Tailwind CSS + Lucide React icons.
- `@/` path alias maps to `src/`.
- No extra UI/theme packages installed.
- Contact form is front-end only; shows visual confirmation on submit (backend persistence not yet wired).
- Client logos and case-study metrics are placeholder/illustrative content.
- Contact section simplified: removed "Escríbenos directamente" (email) and horarios (hours) cards; only the form remains.
- CEO & Founder photo uses a placeholder URL; monogram fallback displays until real photo URL is provided.

## Open questions & assumptions

- Real CEO/Founder photo URL needed (user hasn't supplied it yet).
- Photo link target TBD — user may want it to point to LinkedIn profile.
- Contact form backend: storage mechanism TBD when requested.
- Real client logos, case studies, and testimonials need to be supplied.
- Assumed orange-on-black palette aligns with brand; no explicit brand guide provided.
- Founder quote text is placeholder; real quote may be needed.