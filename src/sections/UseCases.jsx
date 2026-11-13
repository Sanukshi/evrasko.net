import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronRight, X } from 'lucide-react';
import Container from '../components/Container.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import Button from '../components/Button.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { useCases } from '../data/content.js';

// One accent per card: solid colour (hex) used for icon, glow, tint and top bar.
const ACCENTS = ['#F43F6B', '#EAB308', '#FF5A4E', '#14B8A6', '#7C3AED', '#3B82F6'];

// One white icon per card, in card order (public/Evrasko/24.svg … 29.svg).
const IMAGES = [24, 25, 26, 27, 28, 29].map((n) => `${import.meta.env.BASE_URL}Evrasko/${n}.svg`);

function UseCaseCard({ item, color, image, onOpen }) {
  return (
    <div
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-line transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card hover:ring-transparent"
      style={{ '--accent': color }}
    >
      {/* Accent top bar that grows on hover */}
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-500 group-hover:scale-x-100" />
      {/* Soft tinted blob in the corner */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full opacity-[0.08] transition-all duration-500 group-hover:scale-125 group-hover:opacity-[0.16]"
        style={{ background: color }}
      />

      <span
        className="relative grid h-14 w-14 place-items-center rounded-2xl text-white transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
        style={{ background: color, boxShadow: `0 10px 24px -8px ${color}` }}
      >
        {image ? (
          <img src={image} alt="" width="36" height="36" loading="lazy" decoding="async" className="h-9 w-9 object-contain" />
        ) : (
          <Icon name={item.icon} size={24} />
        )}
      </span>
      <h3 className="relative mt-6 text-xl font-semibold text-text-dark">{item.title}</h3>
      <p className="relative mt-3 flex-1 text-[15px] leading-relaxed text-text-muted">{item.text}</p>
      <button
        type="button"
        onClick={onOpen}
        className="relative mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-light px-4 py-2 text-sm font-semibold text-text-dark transition-colors hover:bg-[var(--accent)] hover:text-white"
      >
        Learn more<span className="sr-only"> about {item.title}</span>
        <ChevronRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  );
}

function DetailsModal({ item, color, image, onClose, onNavigate }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] grid place-items-center bg-ink/60 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="usecase-dialog-title"
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Coloured header */}
        <div className="relative overflow-hidden px-8 pb-6 pt-8 text-white" style={{ background: color }}>
          <span aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15" />
          <span aria-hidden="true" className="absolute -bottom-16 right-16 h-32 w-32 rounded-full bg-white/10" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
          >
            <X size={20} aria-hidden="true" />
          </button>
          <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white/20">
            {image ? (
              <img src={image} alt="" width="36" height="36" className="h-9 w-9 object-contain" />
            ) : (
              <Icon name={item.icon} size={26} />
            )}
          </span>
          <p className="relative mt-5 text-sm font-medium text-white/80">{useCases.tag}</p>
          <h3 id="usecase-dialog-title" className="relative text-2xl font-bold">
            {item.title}
          </h3>
        </div>

        <div className="px-8 py-7">
          <p className="leading-relaxed text-text-muted">{item.details?.intro ?? item.text}</p>
          {item.details?.points && (
            <>
              <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-text-dark">How Evrasko helps</h4>
              <ul className="mt-4 space-y-3">
                {item.details.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[15px] text-text-dark">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-white" style={{ background: color }}>
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="./product.html" onClick={onNavigate}>
              Evra X.1
            </Button>
            <Button variant="outlineDark" arrow={false} onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function UseCases() {
  const [openIndex, setOpenIndex] = useState(null);
  const lastTrigger = useRef(null);

  const open = (i) => (e) => {
    lastTrigger.current = e.currentTarget;
    setOpenIndex(i);
  };
  const close = () => {
    setOpenIndex(null);
    lastTrigger.current?.focus();
  };

  return (
    <section id="usecases" aria-labelledby="usecases-title" className="section bg-light">
      <Container>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Intro tile */}
          <Reveal as="li" className="flex flex-col justify-center py-4 sm:col-span-2 lg:col-span-1 lg:pr-6">
            <p className="flex items-center gap-3 text-sm font-semibold text-coral-deep">
              {useCases.tag}
            </p>
            <SectionHeading id="usecases-title" heading={useCases.heading} className="mt-4" />
            <p className="mt-4 leading-relaxed text-text-muted">
              {useCases.rolesTitle}: {useCases.roles.join(', ')}.
            </p>
          </Reveal>

          {useCases.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.05}>
              <UseCaseCard item={item} color={ACCENTS[i % ACCENTS.length]} image={IMAGES[i]} onOpen={open(i)} />
            </Reveal>
          ))}

          {/* CTA tile fills the last row on desktop */}
          <Reveal as="li" delay={0.3} className="sm:col-span-2 lg:col-span-2">
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl bg-ink p-8 text-white sm:p-10">
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-coral/30 blur-3xl" />
              <h3 className="relative text-2xl font-semibold">Not sure where Evrasko fits your team?</h3>
              <p className="relative mt-3 max-w-md text-white/70">Tell us how your suppliers are managed today and we will show you the setup that suits you.</p>
              <Button href="./product.html" className="relative mt-6 w-fit">
                Evra X.1
              </Button>
            </div>
          </Reveal>
        </ul>
      </Container>

      <AnimatePresence>
        {openIndex !== null && (
          <DetailsModal
            item={useCases.items[openIndex]}
            color={ACCENTS[openIndex % ACCENTS.length]}
            image={IMAGES[openIndex]}
            onClose={close}
            onNavigate={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
