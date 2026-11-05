import { motion } from 'framer-motion';
import Container from '../components/Container.jsx';
import SectionTag from '../components/SectionTag.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { architecture } from '../data/content.js';

const stepVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }),
};

/** One glowing step: numbered tab + top line with arrow, ringed icon, C-shaped arc, end dot. */
function Step({ layer, index, className = '' }) {
  const num = String(index + 1).padStart(2, '0');
  const inner = (
    <div className="group relative pl-3 pt-7">
      {/* Top line with arrow head */}
      <span aria-hidden="true" className="absolute left-14 right-2 top-[14px] h-px bg-gradient-to-r from-coral/80 via-coral/50 to-coral/80" />
      <span aria-hidden="true" className="absolute right-0 top-[10px] h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-coral" />
      {/* Glowing number tab */}
      <span className="absolute left-24 top-0 rounded-b-2xl rounded-t-md bg-gradient-to-b from-coral to-coral-deep px-6 pb-1 pt-1 text-sm font-bold text-white shadow-[0_0_24px_rgba(255,90,78,0.55)] sm:left-28">
        {num}
        {layer.proposed && <span className="ml-2 text-[10px] uppercase tracking-wider text-white/85">{architecture.proposedLabel}</span>}
      </span>

      <div className="flex items-center gap-5 pb-8">
        {/* C-shaped arc around the icon */}
        <span aria-hidden="true" className="absolute left-0 top-[14px] h-[calc(100%-14px-12px)] w-16 rounded-l-full border-y border-l border-coral/50" />
        <span className="relative z-10 grid h-[88px] w-[88px] shrink-0 place-items-center rounded-full bg-gradient-to-b from-white/10 to-white/[0.02] shadow-[0_0_30px_-6px_rgba(255,90,78,0.6)] ring-1 ring-coral/40 transition-shadow duration-300 group-hover:shadow-[0_0_40px_-2px_rgba(255,90,78,0.8)]">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-ink text-coral ring-1 ring-white/10">
            {layer.image ? (
              <img src={layer.image} alt="" width="40" height="40" loading="lazy" decoding="async" className="h-10 w-10 object-contain" />
            ) : (
              <Icon name={layer.icon} size={24} />
            )}
          </span>
        </span>
        <div className="min-w-0">
          <h3 className="text-[15px] font-bold uppercase tracking-wide text-white">{layer.name}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-white/60">{layer.text}</p>
        </div>
      </div>

      {/* Bottom line ending in a dot */}
      <span aria-hidden="true" className="absolute bottom-3 left-14 h-px w-40 bg-gradient-to-r from-coral/60 to-coral/0" />
      <span aria-hidden="true" className="absolute bottom-[9px] left-[216px] h-2 w-2 rounded-full border border-coral bg-ink shadow-[0_0_8px_rgba(255,90,78,0.9)]" />
    </div>
  );

  return (
    <motion.li className={className} custom={index} variants={stepVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -10% 0px' }}>
      {layer.href ? (
        <a href={layer.href} className="block rounded-3xl transition-transform hover:-translate-y-1">
          {inner}
        </a>
      ) : (
        inner
      )}
    </motion.li>
  );
}

export default function Architecture() {
  return (
    <section id="architecture" aria-labelledby="architecture-title" className="section relative overflow-hidden bg-ink text-white">
      {/* Top glow arc */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-72 w-[80%] -translate-x-1/2 rounded-[100%] bg-coral/25 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 h-24 w-[70%] -translate-x-1/2 rounded-[100%] border-b border-coral/40" />

      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionTag dark>{architecture.tag}</SectionTag>
          <SectionHeading id="architecture-title" heading={architecture.heading} dark />
          <p className="mt-5 leading-relaxed text-white/70 sm:text-lg">{architecture.text}</p>
        </Reveal>

        <figure className="mt-14 lg:mt-20">
          <figcaption className="sr-only">{architecture.diagramCaption}</figcaption>
          <ol className="mx-auto grid max-w-6xl gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-6">
            {architecture.layers.map((layer, i) => (
              <Step key={layer.name} layer={layer} index={i} className={`lg:col-span-2 ${i === 3 ? 'lg:col-start-2' : ''}`} />
            ))}
          </ol>
        </figure>

        {/* Governance */}
        <div className="mt-16 lg:mt-20">
          <Reveal>
            <h3 className="text-center text-xl font-semibold sm:text-2xl">{architecture.governanceTitle}</h3>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {architecture.governance.map((g, i) => (
              <Reveal as="li" key={g.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-coral/50 hover:shadow-[0_0_30px_-10px_rgba(255,90,78,0.7)]">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-coral/15 text-coral ring-1 ring-coral/40">
                    {g.image ? (
                      <img src={g.image} alt="" width="32" height="32" loading="lazy" decoding="async" className="h-8 w-8 object-contain" />
                    ) : (
                      <Icon name={g.icon} size={18} />
                    )}
                  </span>
                  <h4 className="mt-4 text-sm font-semibold text-white">{g.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{g.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
