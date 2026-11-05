import { Check } from 'lucide-react';
import Container from '../components/Container.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { engagement } from '../data/content.js';

export default function Engagement() {
  return (
    <section id="engagement" aria-labelledby="engagement-title" className="section relative overflow-hidden bg-[#050505] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[70%] -translate-x-1/2 rounded-full bg-coral/[0.07] blur-3xl" />

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-coral-deep px-4 py-1.5 text-sm font-semibold text-white">{engagement.tag}</span>
          <SectionHeading id="engagement-title" heading={engagement.heading} dark className="mt-5" />
          <p className="mt-5 leading-relaxed text-white/65 sm:text-lg">{engagement.text}</p>
        </Reveal>

        <ul className="mx-auto mt-14 grid max-w-5xl items-center gap-6 md:grid-cols-3 lg:mt-20 lg:gap-8">
          {engagement.plans.map((plan, i) => {
            const featured = plan.featured;
            return (
              <Reveal as="li" key={plan.title} delay={i * 0.07} className="h-full">
                <article
                  className={`relative flex h-full flex-col overflow-hidden rounded-[36px] bg-gradient-to-b from-[#141414] to-[#0f1424] p-7 text-center ring-1 transition-transform duration-300 hover:-translate-y-1.5 ${
                    featured
                      ? 'shadow-[0_20px_60px_-20px_rgba(255,90,78,0.55)] ring-white/15 md:-my-4 md:py-10'
                      : 'shadow-[0_14px_40px_-18px_rgba(0,0,0,0.9)] ring-white/10'
                  }`}
                >
                  {/* Bottom edge glow */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-x-0 bottom-0 h-20 ${
                      featured ? 'bg-gradient-to-t from-coral-deep/70 to-transparent' : 'bg-gradient-to-t from-white/[0.06] to-transparent'
                    }`}
                  />

                  {featured && (
                    <span className="mx-auto mb-4 rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 ring-1 ring-white/15">
                      {engagement.featuredLabel}
                    </span>
                  )}

                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-coral/15 text-coral ring-1 ring-coral/30">
                    <Icon name={plan.icon} size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{plan.title}</h3>
                  <p className="mt-2 text-coral">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="ml-0.5 text-sm font-semibold text-white">{plan.period}</span>}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{plan.text}</p>

                  <a
                    href="#contact"
                    aria-label={`${plan.cta}: ${plan.title} plan`}
                    className={`mt-6 rounded-full py-2.5 text-sm font-semibold transition-colors ${
                      featured ? 'bg-coral-deep text-white hover:bg-coral-deeper' : 'bg-white/15 text-white hover:bg-white/25'
                    }`}
                  >
                    {plan.cta}
                  </a>

                  <ul className="relative mt-7 flex-1 space-y-3.5 pb-4 text-left">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-white/75">
                        <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-coral-deep">
                          <Check size={12} strokeWidth={3} aria-hidden="true" className="text-white" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
