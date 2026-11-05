import Container from '../components/Container.jsx';
import Button from '../components/Button.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import RotatingBadge from '../components/RotatingBadge.jsx';
import Reveal from '../components/Reveal.jsx';
import { about } from '../data/content.js';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section relative overflow-hidden bg-white">
      {/* Decorative curved lines and glow */}
      <svg aria-hidden="true" className="pointer-events-none absolute -left-40 top-24 hidden h-[600px] w-[600px] text-line md:block" viewBox="0 0 600 600" fill="none">
        <path d="M0 300 C 150 120, 300 520, 600 260" stroke="currentColor" strokeWidth="1.5" />
        <path d="M0 360 C 170 180, 320 560, 600 320" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-40 h-72 w-72 rounded-full bg-coral/10 blur-3xl" />

      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading id="about-title" heading={about.heading} />
          <p className="mt-5 text-base leading-relaxed text-text-muted sm:text-lg">{about.subtext}</p>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <img
                src={about.smallImage.src}
                alt={about.smallImage.alt}
                width="1512"
                height="1080"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
              />
            </div>
            <h3 className="mt-8 text-2xl font-semibold leading-snug text-text-dark lg:text-[28px]">
              {about.block.heading.before}
              <span className="text-coral">{about.block.heading.highlight}</span>
              {about.block.heading.after}
            </h3>
            <p className="mt-4 leading-relaxed text-text-muted">{about.block.text}</p>
            <Button href={about.block.cta.href} className="mt-7">
              {about.block.cta.label}
            </Button>
          </Reveal>

          <Reveal delay={0.1} className="relative order-1 mx-auto w-full max-w-[460px] pl-6 pt-6 lg:order-2 lg:ml-auto lg:mr-0">
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img
                src={about.tallImage.src}
                alt={about.tallImage.alt}
                width="436"
                height="581"
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <RotatingBadge text={about.badgeText} size={128} className="absolute left-0 top-0 sm:-left-6 sm:-top-6" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
