import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Info } from 'lucide-react';
import Container from '../components/Container.jsx';
import SectionTag from '../components/SectionTag.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { appPreview } from '../data/content.js';

// Chart colours. Risk levels use the reserved status colours and are always shown with a text label.
const RISK_COLORS = { low: '#22C55E', medium: '#F59E0B', high: '#EF4444' };
const SERIES = { historical: '#3F3F4A', projected: '#FF5A4E' };
const AXIS = { tick: { fill: '#6B6B76', fontSize: 12 }, line: '#E7E7EC' };

const LEVEL_BADGE = {
  Low: 'bg-risk-low/15 text-[#15803D]',
  Medium: 'bg-risk-medium/15 text-[#B45309]',
  High: 'bg-risk-high/15 text-[#B91C1C]',
};

const KPI_TONE = {
  high: 'bg-risk-high/10 text-[#B91C1C]',
  medium: 'bg-risk-medium/15 text-[#B45309]',
  default: 'bg-coral-soft text-coral-deep',
};

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-line bg-white px-3 py-2 text-xs shadow-soft">
      {label && <p className="mb-1 font-semibold text-text-dark">{label}</p>}
      {payload.map((p) => (
        <p key={p.name} className="flex items-center gap-2 text-text-muted">
          <span aria-hidden="true" className="h-2 w-2 rounded-sm" style={{ background: p.payload.fill || p.color }} />
          {p.name}: <span className="font-semibold text-text-dark">{p.value}</span>
        </p>
      ))}
    </div>
  );
}

function Panel({ title, children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-line bg-white p-4 sm:p-5 ${className}`}>
      <h4 className="text-sm font-semibold text-text-dark">{title}</h4>
      {children}
    </div>
  );
}

function RiskDonut({ donut }) {
  const total = donut.data.reduce((s, d) => s + d.value, 0);
  const data = donut.data.map((d) => ({ ...d, fill: RISK_COLORS[d.level] }));
  return (
    <Panel title={donut.title}>
      <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row lg:flex-col xl:flex-row">
        <div className="relative h-[160px] w-[160px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={52}
                outerRadius={76}
                paddingAngle={2}
                stroke="#fff"
                strokeWidth={2}
                isAnimationActive={false}
              >
                {data.map((d) => (
                  <Cell key={d.name} fill={d.fill} />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
            <div>
              <p className="text-2xl font-bold text-text-dark">{total}</p>
              <p className="text-[11px] text-text-muted">suppliers</p>
            </div>
          </div>
        </div>
        <ul className="w-full space-y-2 text-sm">
          {data.map((d) => (
            <li key={d.name} className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 text-text-muted">
                <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full" style={{ background: d.fill }} />
                {d.name}
              </span>
              <span className="font-semibold text-text-dark">{d.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  );
}

function ForecastBars({ bar }) {
  return (
    <Panel title={bar.title}>
      <ul className="mt-2 flex gap-4 text-xs text-text-muted" aria-label="Legend">
        <li className="flex items-center gap-1.5">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-sm" style={{ background: SERIES.historical }} />
          {bar.historicalLabel}
        </li>
        <li className="flex items-center gap-1.5">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-sm" style={{ background: SERIES.projected }} />
          {bar.projectedLabel}
        </li>
      </ul>
      <div className="mt-3 h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={bar.data} barGap={2} barCategoryGap="28%" margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke={AXIS.line} />
            <XAxis dataKey="category" tick={AXIS.tick} axisLine={{ stroke: AXIS.line }} tickLine={false} interval={0} />
            <YAxis tick={AXIS.tick} axisLine={false} tickLine={false} allowDecimals={false} />
            <Tooltip content={<ChartTooltip />} cursor={{ fill: '#F7F7F9' }} />
            <Bar dataKey="historical" name={bar.historicalLabel} fill={SERIES.historical} radius={[4, 4, 0, 0]} isAnimationActive={false} />
            <Bar dataKey="projected" name={bar.projectedLabel} fill={SERIES.projected} radius={[4, 4, 0, 0]} isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}

function ReviewTable({ table }) {
  return (
    <Panel title={table.title}>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead>
            <tr className="border-b border-line text-xs text-text-muted">
              {table.columns.map((c) => (
                <th key={c} scope="col" className="pb-2 pr-4 font-medium">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((r) => (
              <tr key={r.name} className="border-b border-line last:border-0">
                <th scope="row" className="py-3 pr-4 font-semibold text-text-dark">
                  {r.name}
                </th>
                <td className="py-3 pr-4 text-text-muted">{r.category}</td>
                <td className="py-3 pr-4">
                  <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${LEVEL_BADGE[r.level]}`}>{r.level}</span>
                </td>
                <td className="py-3 text-text-muted">{r.review}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

export default function AppPreview() {
  const p = appPreview;
  return (
    <section id="preview" aria-labelledby="preview-title" className="section relative overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-40 h-96 w-[700px] -translate-x-1/2 rounded-full bg-coral/10 blur-3xl" />

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>{p.tag}</SectionTag>
          <SectionHeading id="preview-title" heading={p.heading} />
          <p className="mt-5 leading-relaxed text-text-muted sm:text-lg">{p.text}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 lg:mt-16">
          {/* Browser window frame */}
          <figure className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
            <div className="flex items-center gap-3 border-b border-line bg-light px-4 py-3">
              <span aria-hidden="true" className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              </span>
              <span className="hidden min-w-0 flex-1 truncate rounded-full bg-white px-4 py-1 text-xs text-text-muted sm:block">
                {p.frameUrl}
              </span>
              <figcaption className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full bg-coral-soft px-3 py-1 text-[11px] font-semibold text-coral-deep">
                <Info size={13} aria-hidden="true" />
                {p.frameLabel}
              </figcaption>
            </div>

            <div className="bg-light/60 p-4 sm:p-6">
              <h3 className="mb-4 text-lg font-semibold text-text-dark">{p.appTitle}</h3>

              <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
                {p.kpis.map((k) => (
                  <li key={k.label} className="rounded-2xl border border-line bg-white p-4">
                    <span className={`grid h-9 w-9 place-items-center rounded-lg ${KPI_TONE[k.tone || 'default']}`}>
                      <Icon name={k.icon} size={18} />
                    </span>
                    <p className="mt-3 text-2xl font-bold text-text-dark sm:text-3xl">{k.value}</p>
                    <p className="mt-0.5 text-xs leading-snug text-text-muted sm:text-sm">{k.label}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_minmax(0,1.5fr)]">
                <RiskDonut donut={p.riskDonut} />
                <ForecastBars bar={p.forecastBar} />
                <ReviewTable table={p.table} />
              </div>
            </div>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
