import { ArrowRight } from 'lucide-react';

const VARIANTS = {
  // Deep coral keeps white button text above the WCAG AA 4.5:1 ratio.
  primary: 'bg-coral-deep text-white hover:bg-coral-deeper',
  outlineLight: 'border border-white/70 text-white hover:bg-white hover:text-ink',
  outlineDark: 'border border-ink/80 text-ink hover:bg-ink hover:text-white',
  dark: 'bg-ink text-white hover:bg-ink/85',
  white: 'bg-white text-ink hover:bg-coral-soft',
};

const SIZES = {
  md: 'px-6 py-3 text-[15px]',
  sm: 'px-5 py-2.5 text-sm',
};

/**
 * Pill button. Renders an <a> when `href` is given, otherwise a <button>.
 * The arrow nudges right on hover.
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  arrow = true,
  className = '',
  children,
  ...rest
}) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-70 ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          size={17}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
