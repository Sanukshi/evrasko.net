import { ArrowUpRight } from 'lucide-react';
import { useId } from 'react';

/** Circular rotating text badge with a coral arrow in the centre. Decorative. */
export default function RotatingBadge({ text, size = 132, className = '' }) {
  const pathId = useId().replace(/:/g, '');
  return (
    <div
      className={`relative grid place-items-center rounded-full bg-white shadow-card ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow motion-reduce:animate-none">
        <defs>
          <path id={pathId} d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-text-dark" fontSize="9.2" fontWeight="600" letterSpacing="1.6">
          <textPath href={`#${pathId}`} startOffset="0">
            {text}
            {text}
          </textPath>
        </text>
      </svg>
      <span className="grid h-[42%] w-[42%] place-items-center rounded-full bg-coral text-white">
        <ArrowUpRight size={size * 0.2} strokeWidth={2.4} />
      </span>
    </div>
  );
}
