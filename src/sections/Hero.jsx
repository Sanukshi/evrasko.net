import { motion } from 'framer-motion';
import { CheckCircle2, TrendingDown } from 'lucide-react';
import Container from '../components/Container.jsx';
import Button from '../components/Button.jsx';
import { hero } from '../data/content.js';

const HIGHLIGHTS = ['Early risk warnings', 'One supplier workspace', 'Traceable mitigation'];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } };
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// Highlight the last word of the headline.
const words = hero.headline.split(' ');
const highlight = words.pop();
const before = `${words.join(' ')} `;

// Gentle up-and-down float for the decorative cards.
const float = (delay = 0) => ({
  animate: { y: [0, -10, 0] },
  transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay },
});

export const RISK_DOT = {
  Low: 'bg-risk-low',
  Medium: 'bg-risk-medium',
  High: 'bg-risk-high',
};

function RiskCard({ card }) {
  return (
    <div className="w-[250px] rounded-2xl border border-line bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-text-dark">{card.title}</p>
        <span className="rounded-full bg-light px-2 py-0.5 text-[11px] font-medium text-text-muted">{card.badge}</span>
      </div>
      <ul className="space-y-2.5">
        {card.rows.map((row) => (
          <li key={row.label} className="flex items-center justify-between text-[13px]">
            <span className="text-text-muted">{row.label}</span>
            <span className="flex items-center gap-1.5 font-semibold text-text-dark">
              <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${RISK_DOT[row.level]}`} />
              {row.level}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Hero graphics: 3 is the main card background, 4 is the side image.
const MAIN_IMAGE = '/Evrasko/3.svg';
const SIDE_IMAGE = '/Evrasko/4.svg';

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden bg-light pb-16 pt-6 lg:pb-24 lg:pt-10">
      {/* Decorative background shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-coral/15 blur-3xl" />
      <svg aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 h-[420px] w-[420px] text-line" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="198" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <Container className="relative">
        <div className="relative lg:pr-[230px]">
          {/* Main dark image card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative isolate overflow-hidden rounded-3xl bg-ink shadow-card"
          >
            <img
              src={MAIN_IMAGE}
              alt={hero.mainImage.alt}
              width="1512"
              height="1080"
              fetchpriority="high"
              className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
            />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/30" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/70 to-transparent" />

            {/* Subtle grid pattern + coral glow inside the card */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_left,black_20%,transparent_70%)]"
            />
            <div aria-hidden="true" className="absolute -left-20 -top-20 -z-10 h-72 w-72 rounded-full bg-coral/30 blur-3xl" />

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="max-w-[660px] px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20"
            >
              <motion.span
                variants={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-coral" />
                </span>
                {hero.tag}
              </motion.span>

              <motion.h1 variants={item} id="hero-title" className="h1 mt-6 text-white">
                {before}
                <span className="relative whitespace-nowrap bg-gradient-to-r from-coral via-[#ff8a5c] to-coral bg-[length:200%_auto] bg-clip-text text-transparent [animation:hero-shine_4s_linear_infinite]">
                  {highlight}
                  <svg aria-hidden="true" viewBox="0 0 300 12" className="absolute -bottom-2 left-0 h-3 w-full text-coral" preserveAspectRatio="none">
                    <motion.path
                      d="M2 9 C 80 2, 200 2, 298 7"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.9, delay: 0.8, ease: 'easeOut' }}
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p variants={item} className="mt-6 max-w-[540px] text-base leading-relaxed text-white/80 sm:text-lg">
                {hero.subtext}
              </motion.p>

              <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={hero.primaryCta.href} className="shadow-[0_10px_30px_-8px_rgba(255,90,78,0.8)]">
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="outlineLight">
                  {hero.secondaryCta.label}
                </Button>
              </motion.div>

              <motion.ul variants={item} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">
                {HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <CheckCircle2 size={16} aria-hidden="true" className="text-coral" />
                    {h}
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Overlapping side image + floating risk card (desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -right-0 top-1/2 hidden w-[300px] -translate-y-1/2 lg:block"
          >
            <div className="overflow-hidden rounded-3xl border-[6px] border-light shadow-card">
              <img
                src={SIDE_IMAGE}
                alt={hero.sideImage.alt}
                width="1512"
                height="1080"
                className="h-[360px] w-full object-cover object-center"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="absolute -bottom-16 -left-24"
            >
              <motion.div {...float(0.5)}>
                <RiskCard card={hero.riskCard} />
              </motion.div>
            </motion.div>

            {/* Floating stat chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -right-6 -top-10"
            >
              <motion.div {...float(0)} className="flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-card ring-1 ring-line backdrop-blur">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-coral-soft text-coral-deep">
                  <TrendingDown size={20} aria-hidden="true" />
                </span>
                <span className="leading-tight">
                  <span className="block text-[11px] font-medium text-text-muted">High-risk suppliers</span>
                  <span className="block text-base font-bold text-text-dark">
                    −18% <span className="text-[11px] font-medium text-text-muted">demo data</span>
                  </span>
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Tablet / mobile: side image and risk card stacked below */}
          <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end lg:hidden">
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img
                src={SIDE_IMAGE}
                alt={hero.sideImage.alt}
                width="1512"
                height="1080"
                className="h-56 w-full object-cover object-center sm:h-64"
              />
            </div>
            <div className="flex justify-center sm:-ml-20 sm:mb-6">
              <RiskCard card={hero.riskCard} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
