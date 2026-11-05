# Evrasko — Landing Page

Single-page product site for **Evrasko** (evrasko.net), a supplier intelligence and supply chain risk forecasting platform.

Built with React 18, Vite, Tailwind CSS, Framer Motion, lucide-react, react-hook-form, and Recharts.

## Setup

Requires Node.js 18 or newer.

```bash
npm install        # install dependencies
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # production build into /dist
npm run preview    # serve the production build locally
```

## Where to edit things

| What | Where |
| --- | --- |
| All page text (headings, lists, FAQ, contact details, footer, social URLs) | `src/data/content.js` |
| Show / hide the Testimonials section | `SHOW_TESTIMONIALS` at the top of `src/data/content.js` |
| Photos | `src/assets/images/` (imported at the top of `content.js`) |
| Colours, font, spacing tokens | `tailwind.config.js` |
| Page title, meta description, Open Graph tags | `index.html` |
| Favicon / social share image | `public/favicon.svg`, `public/og-image.jpg` |
| Contact form submission | `submitDemoRequest()` in `src/sections/Contact.jsx` |

### Project structure

```
src/
  assets/images/   photos (WebP, < 300 KB each)
  assets/svg/      reserved for custom SVG illustrations
  components/      Navbar, Footer, Button, SectionTag, SectionHeading, Container,
                   RotatingBadge, Marquee, Logo, Icon, Reveal, useScrollSpy
  sections/        one file per page section
  data/content.js  all text content
```

Icons referenced by name in `content.js` (e.g. `icon: 'Truck'`) must be registered in `src/components/Icon.jsx`.

## Before launch — checklist

- **Testimonials:** the three entries in `content.js` are **placeholders**. Replace them with real, approved customer quotes, or set `SHOW_TESTIMONIALS = false` to hide the section and its nav link.
- **Social links:** replace the placeholder URLs in `footer.social` with the official Evrasko profiles.
- **Legal links:** point `footer.legal` (Privacy Policy, Terms of Use) to the real pages.
- **Contact form:** connect `submitDemoRequest()` in `src/sections/Contact.jsx` to the Laravel API endpoint.
- **NVIDIA content:** keep it labelled "Proposed" and keep the disclaimer in the Technology section.

## Images

Photos are free-licence images from [Unsplash](https://unsplash.com/license), stored locally (never hotlinked). To re-download or swap them:

1. Edit the Unsplash photo IDs in `scripts/fetch-images.mjs`.
2. Run `npm run images`. Each photo is resized, converted to WebP, and compressed under 300 KB into `src/assets/images/`.

To use your own photo instead, drop a `.webp` file into `src/assets/images/` with the same file name, or add a new file and update the import at the top of `src/data/content.js`.

## Accessibility notes

- Brand coral `#FF5A4E` is used for icons, large headings, and accents. White text on that colour only reaches about 3:1 contrast, so buttons, the marquee band, the contact card, and small coral labels use the deeper shades `coral-deep` (`#D63A2F`) and `coral-deeper` (`#B8302A`) to meet WCAG AA.
- All animations respect `prefers-reduced-motion` (Framer Motion `MotionConfig reducedMotion="user"` plus a CSS fallback).
- The mobile menu traps focus, closes on Escape, and returns focus to the menu button.
