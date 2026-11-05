import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Container from '../components/Container.jsx';
import SectionTag from '../components/SectionTag.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { faq } from '../data/content.js';
// FAQ collage graphics live in public/Evrasko (served as static files).
const faq1 = `${import.meta.env.BASE_URL}Evrasko/33.svg`;
const faq2 = `${import.meta.env.BASE_URL}Evrasko/34.svg`;
const faq3 = `${import.meta.env.BASE_URL}Evrasko/35.svg`;
const faq4 = `${import.meta.env.BASE_URL}Evrasko/36.svg`;

function FaqItem({ item, open, onToggle }) {
  const id = useId();
  const buttonId = `${id}-q`;
  const panelId = `${id}-a`;
  return (
    <li className="border-b border-line last:border-b-0">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className={`flex w-full items-center justify-between gap-4 py-6 text-left text-base transition-colors sm:text-lg ${
            open ? 'font-semibold text-text-dark' : 'font-medium text-text-dark/85 hover:text-coral-deep'
          }`}
        >
          {item.q}
          <span
            aria-hidden="true"
            className={`grid h-6 w-6 shrink-0 place-items-center rounded-md bg-coral-deep text-white transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          >
            <ChevronDown size={16} />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="-mt-2 pb-6 pr-10 text-[15px] leading-relaxed text-text-muted">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

const Photo = ({ src, className }) => (
  <img src={src} alt="" loading="lazy" decoding="async" className={`absolute rounded-2xl object-cover shadow-card ring-4 ring-white ${className}`} />
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" aria-labelledby="faq-title" className="section bg-white">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>{faq.tag}</SectionTag>
          <SectionHeading id="faq-title" heading={faq.heading} />
        </Reveal>

        <div className="mt-12 grid items-start gap-12 lg:mt-16 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          {/* Photo collage */}
          <Reveal delay={0.1} className="relative mx-auto aspect-square w-full max-w-[480px]" aria-hidden="true">
            <Photo src={faq1} className="left-0 top-0 h-[38%] w-[48%]" />
            <Photo src={faq2} className="right-0 top-[-2%] h-[38%] w-[40%]" />
            <Photo src={faq3} className="left-[20%] top-[26%] z-10 h-[50%] w-[56%]" />
            <Photo src={faq4} className="bottom-0 left-[3%] h-[34%] w-[34%]" />
            <div className="absolute bottom-[8%] right-[2%] h-24 w-24 rounded-full bg-coral/15 blur-2xl" />
          </Reveal>

          <ul>
            {faq.items.map((item, i) => (
              <FaqItem key={item.q} item={item} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
