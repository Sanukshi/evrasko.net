/**
 * Section heading with an optional coral-highlighted phrase.
 * `heading` is { before, highlight, after } from data/content.js, or a plain string.
 */
export default function SectionHeading({ heading, as: Tag = 'h2', dark = false, className = '', id }) {
  const color = dark ? 'text-white' : 'text-text-dark';
  if (typeof heading === 'string') {
    return (
      <Tag id={id} className={`h2 ${color} ${className}`}>
        {heading}
      </Tag>
    );
  }
  const { before = '', highlight = '', after = '' } = heading;
  return (
    <Tag id={id} className={`h2 ${color} ${className}`}>
      {before}
      {highlight && <span className="text-coral">{highlight}</span>}
      {after}
    </Tag>
  );
}
