import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import { ArrowLeft, Check, Phone } from 'lucide-react';
import Container from './components/Container.jsx';
import Logo from './components/Logo.jsx';
import Button from './components/Button.jsx';
import Reveal from './components/Reveal.jsx';
import Platform from './sections/Platform.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import Architecture from './sections/Architecture.jsx';
import Contact from './sections/Contact.jsx';
import { footer, platform, product, site } from './data/content.js';
import './index.css';

// The dashboard preview pulls in Recharts, so it is loaded in a separate chunk.
const AppPreview = lazy(() => import('./sections/AppPreview.jsx'));

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
      <Container className="flex h-[80px] items-center justify-between gap-4">
        <a href="./" aria-label="Evrasko home">
          <Logo />
        </a>
        <div className="flex items-center gap-3 sm:gap-5">
          <a href="./" className="hidden items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-coral sm:inline-flex">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to home
          </a>
          <Button href="#contact" size="sm">
            {site.primaryCta}
          </Button>
        </div>
      </Container>
    </header>
  );
}

function ProductHero() {
  return (
    <section aria-labelledby="product-title" className="relative overflow-hidden bg-ink pb-20 pt-14 text-white lg:pb-28 lg:pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-coral/25 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-coral/10 blur-3xl" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal>
          <p className="inline-flex rounded-full border border-coral/40 bg-coral/10 px-4 py-1.5 text-sm font-semibold text-coral">
            {product.tag}
          </p>
          <h1 id="product-title" className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.4rem]">
            {product.headline.before}
            <span className="text-coral">{product.headline.highlight}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{product.text}</p>

          <ul className="mt-8 space-y-3">
            {product.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-white/90">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-coral-deep">
                  <Check size={14} strokeWidth={3} aria-hidden="true" />
                </span>
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#contact" className="shadow-[0_10px_30px_-8px_rgba(255,90,78,0.8)]">
              {site.primaryCta}
            </Button>
            <Button href="#preview" variant="outlineLight" arrow={false}>
              See the Dashboard
            </Button>
          </div>
          <a href={site.phoneHref} className="mt-6 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-coral">
            <Phone size={15} aria-hidden="true" />
            {site.phoneLabel}: {site.phone}
          </a>
        </Reveal>

        {/* Module overview card */}
        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_80px_-30px_rgba(255,90,78,0.45)] backdrop-blur sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/50">{product.modulesTitle}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {platform.modules.map((m) => (
                <li key={m.title} className="flex items-center gap-3 rounded-2xl bg-white/[0.05] p-3 ring-1 ring-white/10 transition-colors hover:ring-coral/50">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white">
                    <img src={m.image} alt="" width="32" height="32" className="h-8 w-8 object-contain" />
                  </span>
                  <span className="text-sm font-medium leading-snug text-white/90">{m.title}</span>
                </li>
              ))}
            </ul>
            <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
              {product.stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-xs text-white/50">{s.label}</dt>
                  <dd className="mt-1 text-2xl font-bold text-coral">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ProductFooter() {
  return (
    <footer className="bg-ink py-8 text-sm text-white/70">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>{footer.copyright}</p>
        <nav aria-label="Legal" className="flex gap-5">
          <a href="./" className="transition-colors hover:text-coral">
            Home
          </a>
          {footer.legal.map((l) => (
            <a key={l.label} href={l.href} className="transition-colors hover:text-coral">
              {l.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}

/** Separate product page that every "Request a Demo" button opens. */
function ProductPage() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main id="main">
        <ProductHero />
        <Platform />
        <HowItWorks />
        <Suspense fallback={<div id="preview" className="min-h-[900px] bg-white" aria-hidden="true" />}>
          <AppPreview />
        </Suspense>
        <Architecture />
        <Contact />
      </main>
      <ProductFooter />
    </MotionConfig>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductPage />
  </React.StrictMode>,
);
