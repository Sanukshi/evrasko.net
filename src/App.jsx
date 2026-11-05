import { Suspense, lazy } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Marquee from './components/Marquee.jsx';
import Hero from './sections/Hero.jsx';
import IndustryStrip from './sections/IndustryStrip.jsx';
import About from './sections/About.jsx';
import Platform from './sections/Platform.jsx';
import HowItWorks from './sections/HowItWorks.jsx';
import Architecture from './sections/Architecture.jsx';
import UseCases from './sections/UseCases.jsx';
import Engagement from './sections/Engagement.jsx';
import Testimonials from './sections/Testimonials.jsx';
import FAQ from './sections/FAQ.jsx';
import Contact from './sections/Contact.jsx';
import { SHOW_TESTIMONIALS, marquee, navLinks } from './data/content.js';

// The dashboard preview pulls in Recharts, so it is loaded in a separate chunk.
const AppPreview = lazy(() => import('./sections/AppPreview.jsx'));

// Hide the Testimonials link when the section is switched off.
const links = navLinks.filter((l) => SHOW_TESTIMONIALS || l.id !== 'testimonials');

export default function App() {
  return (
    // "user" makes every Framer Motion animation respect prefers-reduced-motion.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-coral focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar links={links} />
      <main id="main">
        <Hero />
        <IndustryStrip />
        <About />
        <Platform />
        <HowItWorks />
        <Architecture />
        {/* Fallback reserves space so the page doesn't jump while the chunk loads */}
        <Suspense fallback={<div id="preview" className="min-h-[900px] bg-white" aria-hidden="true" />}>
          <AppPreview />
        </Suspense>
        <UseCases />
        <Engagement />
        <Marquee items={marquee} />
        {SHOW_TESTIMONIALS && <Testimonials />}
        <FAQ />
        <Contact />
      </main>
      <Footer links={links} />
    </MotionConfig>
  );
}
