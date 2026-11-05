/** Small uppercase label shown above section headings. */
export default function SectionTag({ children, dark = false, className = '' }) {
  return (
    <p
      className={`mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
        dark ? 'text-coral' : 'text-coral-deep'
      } ${className}`}
    >
      {children}
    </p>
  );
}
