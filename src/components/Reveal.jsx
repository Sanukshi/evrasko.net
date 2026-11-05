import { motion } from 'framer-motion';

/**
 * Fades children up once when scrolled into view.
 * Movement is skipped automatically for prefers-reduced-motion (see MotionConfig in App).
 */
export default function Reveal({ as = 'div', delay = 0, y = 24, className = '', children, ...rest }) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
