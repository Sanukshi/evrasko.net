import { useCallback, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from '../components/Container.jsx';
import SectionTag from '../components/SectionTag.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { testimonials } from '../data/content.js';

const SWIPE_THRESHOLD = 50;

function initials(text) {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

/**
 * Testimonial carousel. Entries come from data/content.js.
 * Entries without an `avatar` image show role-based initials instead of a photo.
 */
export default function Testimonials() {
  const { items } = testimonials;
  const [index, setIndex] = useState(0);
  const touchX = useRef(null);
  const count = items.length;
  const hasPlaceholders = items.some((t) => t.placeholder);

  const go = useCallback((next) => setIndex(((next % count) + count) % count), [count]);

  if (!count) return null;
  const item = items[index];

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') go(index + 1);
    if (e.key === 'ArrowLeft') go(index - 1);
  };

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="section relative overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-coral/10 blur-3xl" />

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>{testimonials.tag}</SectionTag>
          <SectionHeading id="testimonials-title" heading={testimonials.heading} />
          {testimonials.text && <p className="mt-5 leading-relaxed text-text-muted sm:text-lg">{testimonials.text}</p>}
          {hasPlaceholders && (
            <p className="mt-4 inline-block rounded-full bg-light px-4 py-1.5 text-xs font-medium text-text-muted">
              {testimonials.placeholderNotice}
            </p>
          )}
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label={testimonials.tag}
            tabIndex={0}
            onKeyDown={onKeyDown}
            onTouchStart={(e) => {
              touchX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > SWIPE_THRESHOLD) go(index + (dx < 0 ? 1 : -1));
              touchX.current = null;
            }}
            className="relative rounded-3xl border border-line bg-light p-7 sm:p-12"
          >
            <span className="absolute -top-6 left-8 grid h-12 w-12 place-items-center rounded-full bg-coral-deep text-white shadow-soft">
              <Quote size={22} aria-hidden="true" className="fill-white" />
            </span>

            <div aria-live="polite" className="min-h-[220px] sm:min-h-[190px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.figure
                  key={index}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${count}`}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35 }}
                >
                  <blockquote className="text-lg leading-relaxed text-text-dark sm:text-xl">“{item.quote}”</blockquote>
                  <figcaption className="mt-7 flex items-center gap-4">
                    {item.avatar ? (
                      <img src={item.avatar} alt="" width="56" height="56" loading="lazy" className="h-14 w-14 shrink-0 rounded-full object-cover shadow-soft ring-4 ring-white" />
                    ) : (
                      <span aria-hidden="true" className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ink font-semibold text-coral">
                        {initials(item.role)}
                      </span>
                    )}
                    <span>
                      <span className="block font-semibold text-text-dark">{item.name}</span>
                      <span className="block text-sm text-text-muted">
                        {item.company ? `${item.role}, ${item.company}` : item.role}
                      </span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex gap-1">
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    aria-current={i === index ? 'true' : undefined}
                    className="grid h-8 w-8 place-items-center"
                  >
                    <span
                      aria-hidden="true"
                      className={`block h-2.5 rounded-full transition-all ${i === index ? 'w-7 bg-coral-deep' : 'w-2.5 bg-text-muted/40'}`}
                    />
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="Previous testimonial"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-text-dark transition-colors hover:border-coral-deep hover:bg-coral-deep hover:text-white"
                >
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Next testimonial"
                  className="grid h-11 w-11 place-items-center rounded-full bg-coral-deep text-white transition-colors hover:bg-coral-deeper"
                >
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
