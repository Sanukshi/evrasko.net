import Container from '../components/Container.jsx';
import Button from '../components/Button.jsx';
import SectionTag from '../components/SectionTag.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { platform } from '../data/content.js';

function ModuleCard({ m, delay }) {
  return (
    <Reveal as="li" delay={delay} className="h-full">
      <div className="group flex h-full flex-col justify-between gap-8 rounded-3xl bg-light p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft">
        {m.image ? (
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white shadow-soft transition-transform duration-300 group-hover:scale-110">
            <img src={m.image} alt="" width="48" height="48" loading="lazy" decoding="async" className="h-12 w-12 object-contain" />
          </span>
        ) : (
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-white transition-colors duration-300 group-hover:bg-coral-deep">
            <Icon name={m.icon} size={20} />
          </span>
        )}
        <p className="text-[15px] leading-relaxed text-text-muted">
          <span className="font-semibold text-text-dark">{m.title}. </span>
          {m.text}
        </p>
      </div>
    </Reveal>
  );
}

export default function Platform() {
  const half = Math.ceil(platform.modules.length / 2);
  const left = platform.modules.slice(0, half);
  const right = platform.modules.slice(half);

  return (
    <section id="platform" aria-labelledby="platform-title" className="section relative overflow-hidden bg-white">
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>{platform.tag}</SectionTag>
          <SectionHeading id="platform-title" heading={platform.heading} />
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-text-muted">{platform.text}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {left.map((m, i) => (
              <ModuleCard key={m.title} m={m} delay={i * 0.05} />
            ))}
          </ul>

          <Reveal delay={0.1} className="order-first h-full lg:order-none">
            <div className="h-full overflow-hidden rounded-3xl">
              <img
                src={platform.image.src}
                alt={platform.image.alt}
                width="387"
                height="788"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] h-full w-full object-cover object-[center_20%] lg:aspect-auto"
              />
            </div>
          </Reveal>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {right.map((m, i) => (
              <ModuleCard key={m.title} m={m} delay={0.1 + i * 0.05} />
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Button href={platform.cta.href}>{platform.cta.label}</Button>
        </div>
      </Container>
    </section>
  );
}
