import { useEffect, useState } from 'react';
import Container from '../components/Container.jsx';
import SectionTag from '../components/SectionTag.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { howItWorks } from '../data/content.js';

// Soft "neumorphic" shadows: raised cards and a pressed-in active card.
const RAISED = 'shadow-[10px_10px_24px_#d5d8e0,-10px_-10px_24px_#ffffff]';
const PRESSED = 'shadow-[inset_8px_8px_18px_#d5d8e0,inset_-8px_-8px_18px_#ffffff]';

export default function HowItWorks() {
  const steps = howItWorks.steps;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Walk through the steps automatically unless the user is interacting.
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setInterval(() => setActive((a) => (a + 1) % steps.length), 3500);
    return () => clearInterval(t);
  }, [paused, steps.length]);

  const pct = steps.length > 1 ? (active / (steps.length - 1)) * 100 : 0;

  return (
    <section id="how-it-works" aria-labelledby="how-title" className="section bg-[#eef0f5]">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>{howItWorks.tag}</SectionTag>
          <SectionHeading id="how-title" heading={howItWorks.heading} />
        </Reveal>

        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, i) => {
              const on = i === active;
              return (
                <Reveal as="li" key={step.title} delay={i * 0.08}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-current={on ? 'step' : undefined}
                    className={`flex h-full min-h-[200px] w-full flex-col rounded-[32px] bg-[#eef0f5] p-7 text-left transition-all duration-500 ${
                      on ? `${PRESSED} ring-1 ring-coral/20` : `${RAISED} hover:-translate-y-1`
                    }`}
                  >
                    <span className={`text-sm font-bold transition-colors ${on ? 'text-coral-deep' : 'text-text-muted/60'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-text-dark">{step.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-text-muted">{step.text}</p>
                  </button>
                </Reveal>
              );
            })}
          </ol>

          {/* Dot timeline (desktop) */}
          <div className="relative mx-[10%] mt-12 hidden lg:block" aria-hidden="true">
            <div className="h-2 rounded-full bg-[#dfe2ea] shadow-[inset_2px_2px_4px_#cdd1da,inset_-2px_-2px_4px_#ffffff]" />
            <div className="absolute left-0 top-0 h-2 rounded-full bg-gradient-to-r from-coral-deep to-coral transition-all duration-700" style={{ width: `${pct}%` }} />
            {steps.map((s, i) => (
              <span
                key={s.title}
                className={`absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ${
                  i <= active ? 'bg-coral-deep shadow-[0_4px_12px_rgba(214,58,47,0.5)]' : 'bg-[#c3c9d8] shadow-[3px_3px_6px_#cdd1da,-3px_-3px_6px_#ffffff]'
                } ${i === active ? 'scale-125' : ''}`}
                style={{ left: `${(i / (steps.length - 1)) * 100}%` }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
