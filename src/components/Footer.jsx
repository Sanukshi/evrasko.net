import { ArrowUp, ArrowUpRight, MapPin, Phone } from 'lucide-react';
import Container from './Container.jsx';
import Logo from './Logo.jsx';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import { contact, footer } from '../data/content.js';

function ColumnTitle({ children }) {
  return <h3 className="mb-5 text-base font-semibold text-white">{children}</h3>;
}

const linkClass = 'text-sm text-white/70 transition-colors hover:text-coral';

export default function Footer({ links }) {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-coral/20 blur-3xl"
      />

      <Container className="relative">
        {/* Oversized headline */}
        <div className="flex flex-col gap-8 border-b border-white/10 py-14 md:flex-row md:items-end md:justify-between lg:py-20">
          <p className="text-outline text-[40px] font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-[88px]">
            {footer.headline}{' '}
            <ArrowUpRight
              aria-hidden="true"
              className="inline-block h-[0.8em] w-[0.8em] align-baseline text-coral"
              strokeWidth={2}
            />
          </p>
          <Button href={footer.cta.href} className="shrink-0 self-start md:self-auto">
            {footer.cta.label}
          </Button>
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.6fr]">
          <div>
            <a href="#home" aria-label="Evrasko home" className="inline-block">
              <Logo className="!h-20" />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">{footer.description}</p>
            <p className="mt-2 text-sm text-white/70">{footer.founded}</p>
            <ul className="mt-6 flex flex-wrap gap-3" aria-label="Social media">
              {footer.social.map((s) => (
                <li key={s.icon}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-coral hover:bg-coral hover:text-white"
                  >
                    <Icon name={s.icon} size={17} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer quick links">
            <ColumnTitle>{footer.quickLinksTitle}</ColumnTitle>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer platform links">
            <ColumnTitle>{footer.platformTitle}</ColumnTitle>
            <ul className="space-y-3">
              {footer.platformLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <ColumnTitle>{footer.contactTitle}</ColumnTitle>
            <ul className="space-y-6">
              {contact.offices.map((o) => (
                <li key={o.country} className="text-sm">
                  <p className="mb-2 font-semibold text-white">{o.country}</p>
                  <address className="flex gap-2.5 not-italic text-white/70">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-coral" aria-hidden="true" />
                    {o.address}
                  </address>
                  <a href={o.phoneHref} className={`mt-2 flex items-center gap-2.5 ${linkClass}`}>
                    <Phone size={16} className="shrink-0 text-coral" aria-hidden="true" />
                    {o.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-white/70 lg:flex-row lg:items-center lg:justify-between">
          <p>{footer.copyright}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {footer.legal.map((l, i) => (
              <span key={l.label} className="flex items-center gap-5">
                {i > 0 && <span aria-hidden="true" className="text-white/30">|</span>}
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </span>
            ))}
            <a
              href="#home"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-white transition-colors hover:border-coral hover:text-coral"
            >
              <ArrowUp size={16} aria-hidden="true" />
              {footer.backToTop}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
