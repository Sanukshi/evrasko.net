import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Container from './Container.jsx';
import Logo from './Logo.jsx';
import Button from './Button.jsx';
import useScrollSpy from './useScrollSpy.js';
import { site } from '../data/content.js';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Navbar({ links }) {
  const ids = useMemo(() => links.map((l) => l.id), [links]);
  const active = useScrollSpy(ids);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Mobile menu: lock page scroll, focus the first item, trap Tab, close on Escape.
  useEffect(() => {
    if (!open) return undefined;
    const menu = menuRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (menu) menu.inert = false;
    menu?.querySelector(FOCUSABLE)?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        close();
        return;
      }
      if (e.key !== 'Tab' || !menu) return;
      const items = [...menu.querySelectorAll(FOCUSABLE)];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  // Keep the off-screen menu out of the tab order and accessibility tree while closed.
  useEffect(() => {
    if (menuRef.current) menuRef.current.inert = !open;
  }, [open]);

  // Close the mobile menu if the viewport grows to desktop size.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const linkClass = (id) =>
    `block rounded-full px-4 py-2 text-[14px] font-medium transition-all duration-200 xl:px-5 ${
      active === id
        ? 'bg-coral-deep text-white shadow-[0_6px_18px_-6px_rgba(255,90,78,0.8)]'
        : 'text-white/75 hover:bg-white/10 hover:text-white'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-white/10 bg-ink/85 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl'
          : 'border-transparent bg-ink'
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <a href="#home" aria-label="Evrasko home" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={linkClass(l.id)} aria-current={active === l.id ? 'true' : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button href="./product.html" size="sm" className="hidden shadow-[0_8px_24px_-8px_rgba(255,90,78,0.7)] hover:-translate-y-0.5 sm:inline-flex">
            {site.primaryCta}
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </Container>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={close}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-y-0 right-0 z-50 flex h-[100dvh] w-full max-w-sm flex-col bg-ink px-6 pb-8 pt-5 transition-transform duration-300 lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white"
            aria-label="Close menu"
            onClick={close}
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile" className="mt-10 flex-1 overflow-y-auto">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === l.id ? 'true' : undefined}
                  className={`block rounded-xl px-3 py-3 text-lg font-medium transition-colors hover:bg-white/5 ${
                    active === l.id ? 'text-coral' : 'text-white'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-5 border-t border-white/10 pt-6">
          <Button href="./product.html" className="w-full" onClick={() => setOpen(false)}>
            {site.primaryCta}
          </Button>
        </div>
      </div>
    </header>
  );
}
