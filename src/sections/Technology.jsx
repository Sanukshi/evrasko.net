import Container from '../components/Container.jsx';
import SectionTag from '../components/SectionTag.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { technology } from '../data/content.js';

export default function Technology() {
  return (
    <section id="technology" aria-labelledby="technology-title" className="section relative overflow-hidden bg-light">
      <svg aria-hidden="true" className="pointer-events-none absolute -right-48 -top-20 h-[520px] w-[520px] text-line" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="198" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>{technology.tag}</SectionTag>
          <SectionHeading id="technology-title" heading={technology.heading} />
          <p className="mt-5 leading-relaxed text-text-muted sm:text-lg">{technology.text}</p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {technology.cards.map((card, i) => (
            <Reveal as="li" key={card.name} delay={i * 0.07}>
              <article className="group relative flex h-full flex-col rounded-3xl border-2 border-dashed border-line bg-white p-6 transition-colors duration-200 hover:border-coral/60">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-coral transition-colors group-hover:bg-coral-deep group-hover:text-white">
                    <Icon name={card.icon} size={26} />
                  </span>
                  <span className="rounded-full bg-coral-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-coral-deep">
                    {technology.proposedLabel}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-text-dark">{card.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-muted">{card.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-text-muted">{technology.stackTitle}</h3>
          <ul className="mt-5 flex flex-wrap justify-center gap-3">
            {technology.stack.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-text-dark"
              >
                <Icon name={item.icon} size={16} className="text-coral-deep" />
                {item.label}
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-text-muted">{technology.disclaimer}</p>
      </Container>
    </section>
  );
}
