/**
 * Full-width coral band with infinitely scrolling text.
 * The list is rendered twice so the -50% translate loops seamlessly.
 * Pauses on hover; reduced-motion users see a static band.
 */
export default function Marquee({ items }) {
  const Row = ({ hidden }) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap">
          <span className="px-6 text-lg font-semibold uppercase tracking-wide text-white sm:text-2xl">{item}</span>
          <span aria-hidden="true" className="text-xl text-white/80 sm:text-2xl">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Evrasko focus areas" className="overflow-hidden bg-coral-deep py-5 sm:py-6">
      <div className="marquee-track flex w-max animate-marquee motion-reduce:animate-none">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
