import Container from '../components/Container.jsx';
import Icon from '../components/Icon.jsx';
import { industryStrip } from '../data/content.js';

export default function IndustryStrip() {
  return (
    <section aria-labelledby="industries-label" className="border-b border-line bg-white py-12 lg:py-14">
      <Container>
        <h2 id="industries-label" className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
          {industryStrip.label}
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:justify-between">
          {industryStrip.items.map((item) => (
            <li
              key={item.label}
              className="group flex items-center gap-3 text-text-muted transition-colors duration-200 hover:text-coral-deep"
            >
              <Icon name={item.icon} size={26} strokeWidth={1.7} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
              <span className="text-[15px] font-semibold">{item.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
