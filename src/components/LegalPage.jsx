import React from 'react';
import ReactDOM from 'react-dom/client';
import { ArrowLeft } from 'lucide-react';
import Container from './Container.jsx';
import Logo from './Logo.jsx';
import { footer } from '../data/content.js';
import '../index.css';

/** Simple layout for long-form legal pages (privacy policy, terms). */
function LegalPage({ html }) {
  return (
    <>
      <header className="sticky top-0 z-50 bg-ink">
        <Container className="flex h-[72px] items-center justify-between gap-4">
          <a href="./" aria-label="Evrasko home">
            <Logo />
          </a>
          <a href="./" className="inline-flex items-center gap-2 text-sm font-medium text-white/85 transition-colors hover:text-coral">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to home
          </a>
        </Container>
      </header>
      <main id="main" className="bg-white py-14 lg:py-20">
        <Container>
          {/* Static, trusted HTML from src/data */}
          <article className="legal mx-auto max-w-3xl" dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </main>
      <footer className="bg-ink py-6 text-sm text-white/70">
        <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <nav aria-label="Legal" className="flex gap-5">
            {footer.legal.map((l) => (
              <a key={l.label} href={l.href} className="transition-colors hover:text-coral">
                {l.label}
              </a>
            ))}
          </nav>
        </Container>
      </footer>
    </>
  );
}

export function renderLegalPage(html) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <LegalPage html={html} />
    </React.StrictMode>,
  );
}
