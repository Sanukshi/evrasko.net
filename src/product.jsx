import React from 'react';
import ReactDOM from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import {
  Activity,
  BarChart3,
  Boxes,
  Check,
  ClipboardCheck,
  Clock3,
  Cpu,
  Database,
  FileText,
  GitBranch,
  Layers,
  LockKeyhole,
  Network,
  Package,
  Route,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import Button from './components/Button.jsx';
import Container from './components/Container.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Reveal from './components/Reveal.jsx';
import './index.css';
import './product.css';

const pageLinks = [
  { id: 'platform', label: 'Platform' },
  { id: 'technology', label: 'Technology' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'preview', label: 'Dashboard' },
  { id: 'roadmap', label: 'Roadmap' },
];

const foundation = [
  { icon: Layers, label: 'Application', value: 'Responsive web application' },
  { icon: Cpu, label: 'Backend', value: 'PHP / Laravel' },
  { icon: Database, label: 'Database', value: 'SQL records and relationships' },
  { icon: Network, label: 'Interfaces', value: 'Backend APIs' },
  { icon: LockKeyhole, label: 'Authentication', value: 'Role-based access for Administrators, Procurement Managers, Risk Analysts, and Viewers' },
  { icon: Package, label: 'Supplier records', value: 'Profiles, categories, qualification, approvals, and reviews' },
  { icon: GitBranch, label: 'Procurement records', value: 'Products, projects, contracts, delivery terms, and history' },
  { icon: ShieldAlert, label: 'Risk records', value: 'Delivery, operational, and concentration assessments' },
  { icon: BarChart3, label: 'Forecast records', value: 'Historical and projected values with period and source information' },
  { icon: ClipboardCheck, label: 'Governance', value: 'Validation, review history, and activity tracking' },
];

const technologies = [
  {
    icon: BarChart3,
    title: 'CUDA-X Data Science',
    detail: 'cuDF / cuML',
    text: 'A proposed option for accelerated tabular data preparation and large-scale analytics. cuML could support suitable future machine-learning workflows; it does not imply a deployed supplier-risk model.',
  },
  {
    icon: Route,
    title: 'NVIDIA cuOpt',
    detail: 'Decision optimization',
    text: 'A proposed GPU-accelerated optimization option for modeled logistics and resource-allocation problems, including linear programming, mixed-integer programming, and vehicle routing. cuOpt does not independently score supplier reliability or predict supplier failures.',
  },
  {
    icon: Sparkles,
    title: 'NVIDIA NeMo / NIM',
    detail: 'AI development / inference',
    text: 'Potential building blocks for controlled, AI-assisted document and information workflows. Any extracted information or summaries would need validation and human review; these technologies do not provide validated supplier-risk predictions.',
  },
];

const architectureStages = [
  { icon: Users, label: 'Procurement teams', text: 'Administrators, managers, analysts, and viewers' },
  { icon: Layers, label: 'Responsive web application', text: 'Evrasko workspace' },
  { icon: Cpu, label: 'Laravel application layer', text: 'Application services and business rules' },
  { icon: LockKeyhole, label: 'Authentication and permissions', text: 'Role-based access' },
  { icon: Network, label: 'Backend APIs and validation', text: 'Validated requests and interfaces' },
  { icon: Database, label: 'SQL database', text: 'Structured relational records' },
  { icon: Activity, label: 'Supplier and procurement data', text: 'Assessments, forecasts, actions, and history' },
  { icon: BarChart3, label: 'Dashboard and reporting', text: 'Supplier intelligence summaries for review' },
];

const dataEntities = [
  'Suppliers, categories, qualification, and approval',
  'Products, projects, contracts, and delivery terms',
  'Orders, deliveries, assessments, and indicators',
  'Forecasts, mitigation actions, reviews, and activity',
];

const capabilities = [
  {
    icon: Boxes,
    title: 'Supplier registry and profiles',
    text: 'Capture supplier identity, category, location, contact information, qualification and approval status, risk classification, and next review date.',
  },
  {
    icon: GitBranch,
    title: 'Procurement relationships',
    text: 'Associate suppliers with products, categories, procurement projects, contract references, delivery terms, and order or delivery history.',
  },
  {
    icon: ShieldAlert,
    title: 'Supply chain risk assessments',
    text: 'Record delivery, operational, and concentration assessments with scores and levels, supporting notes, an owner, review date, and assessment history.',
  },
  {
    icon: BarChart3,
    title: 'Indicators and forecast records',
    text: 'Keep performance indicators and period-based forecasts with source information. Historical and projected values remain separate records.',
  },
  {
    icon: ClipboardCheck,
    title: 'Mitigation action management',
    text: 'Link actions to identified risks, assign owners and priorities, set deadlines, track planned, in-progress, or completed status, and record outcomes.',
  },
  {
    icon: Activity,
    title: 'Supplier intelligence dashboard',
    text: 'Review supplier qualification and risk summaries, high-priority assessments, category forecasts, open actions, and upcoming reviews.',
  },
];

const riskDimensions = [
  { label: 'Delivery risk', text: 'Delivery reliability, delivery history, and assessment records' },
  { label: 'Operational risk', text: 'Recorded operational issues and service reliability assessments' },
  { label: 'Concentration risk', text: 'Supplier dependency across relevant categories and relationships' },
];

const workflow = [
  { title: 'Register suppliers', text: 'Create profiles with categories, locations, qualification details, and review information.' },
  { title: 'Connect procurement', text: 'Associate suppliers with products, categories, projects, contracts, and delivery terms.' },
  { title: 'Assess supply risk', text: 'Record delivery, operational, and concentration assessments with notes and review dates.' },
  { title: 'Record indicators', text: 'Maintain performance measures and separate historical and projected values by period and source.' },
  { title: 'Mitigate and review', text: 'Assign actions, track progress and ownership, and preserve recorded outcomes.' },
];

const distribution = [
  { label: 'Low', count: 82, width: '64%', tone: 'bg-risk-low' },
  { label: 'Medium', count: 37, width: '29%', tone: 'bg-risk-medium' },
  { label: 'High', count: 9, width: '7%', tone: 'bg-risk-high' },
];

const forecastRows = [
  { category: 'Delivery', historical: 46, projected: 31 },
  { category: 'Operational', historical: 38, projected: 24 },
  { category: 'Concentration', historical: 22, projected: 17 },
];

const reviews = [
  { supplier: 'Northbay Components', category: 'Electronic parts', level: 'Medium', review: '12 Nov 2026' },
  { supplier: 'Kelani Packaging Co.', category: 'Packaging', level: 'Low', review: '18 Nov 2026' },
  { supplier: 'Arcline Freight', category: 'Freight & carriers', level: 'High', review: '04 Nov 2026' },
  { supplier: 'Silverleaf Textiles', category: 'Raw materials', level: 'Low', review: '27 Nov 2026' },
];

const governance = [
  { icon: Clock3, title: 'Assessment history', text: 'Preserve assessment records over time instead of overwriting prior decisions.' },
  { icon: GitBranch, title: 'Risk-to-action traceability', text: 'Connect mitigation activity to the identified risk it is intended to address.' },
  { icon: ShieldCheck, title: 'Role-based access', text: 'Separate access and permitted changes according to assigned user roles.' },
  { icon: FileText, title: 'Forecast provenance', text: 'Maintain each forecast period and source, distinct from historical values.' },
  { icon: ClipboardCheck, title: 'Validation and activity', text: 'Validate structured inputs and track relevant activity for review.' },
];

const roadmap = [
  {
    title: 'Supplier Registry and Qualification Foundation',
    text: 'Strengthen supplier profiles, qualification records, approval status, category organization, and supplier review history.',
  },
  {
    title: 'Procurement Relationship Visibility',
    text: 'Improve supplier relationships with products, categories, procurement projects, contract references, delivery terms, and order history.',
  },
  {
    title: 'Risk Assessment and Historical Traceability',
    text: 'Improve delivery, operational, and concentration assessments with clearer history, supporting notes, and review ownership.',
  },
  {
    title: 'Performance Indicators and Forecast Records',
    text: 'Strengthen indicator management, forecast source tracking, period definitions, and separation of historical and projected values.',
  },
  {
    title: 'Mitigation Management and Outcome Tracking',
    text: 'Improve action ownership, priorities, deadlines, progress history, and links between identified risks and recorded actions.',
  },
  {
    title: 'Supplier Analytics and Intelligence Assessment',
    text: 'Evaluate future analytics for supplier trends, risk distributions, category-level reporting, and large-scale historical analysis.',
  },
  {
    title: 'NVIDIA CUDA-X and cuOpt Feasibility Assessment',
    text: 'Evaluate accelerated analytics and logistics optimization use cases, including data and infrastructure requirements.',
  },
  {
    title: 'AI-Assisted Procurement Intelligence Assessment',
    text: 'Assess future document processing, supplier information extraction, and AI-assisted analysis where justified.',
  },
];

function SectionIntro({ eyebrow, title, text, dark = false }) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${dark ? 'text-white' : ''}`}>
      <p className={`product-eyebrow ${dark ? 'text-coral' : 'text-coral-deep'}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${dark ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {text && (
        <p className={`mx-auto mt-5 max-w-2xl leading-relaxed sm:text-lg ${dark ? 'text-white/65' : 'text-text-muted'}`}>
          {text}
        </p>
      )}
    </div>
  );
}

function ProductHero() {
  const riskLevels = [
    { name: 'Delivery', level: 'Medium', tone: 'medium' },
    { name: 'Operational', level: 'Low', tone: 'low' },
    { name: 'Concentration', level: 'High', tone: 'high' },
  ];

  return (
    <section id="home" aria-labelledby="product-title" className="relative overflow-hidden bg-ink pb-20 pt-16 text-white lg:pb-28 lg:pt-24">
      <div aria-hidden="true" className="product-hero-glow pointer-events-none absolute inset-0" />
      <Container className="relative grid min-w-0 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <Reveal className="min-w-0">
          <p className="product-eyebrow inline-flex max-w-full rounded-full border border-coral/40 bg-coral/10 px-4 py-2 text-coral">
            Supplier Intelligence &amp; Risk Management
          </p>
          <h1 id="product-title" className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.8rem]">
            See Supplier Risk Clearly.{' '}
            <span className="text-coral">Make Better Procurement Decisions.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Bring supplier profiles, procurement relationships, risk assessments, performance indicators, forecasts, and mitigation actions into one structured intelligence workspace.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/product" className="shadow-[0_10px_30px_-8px_rgba(255,90,78,0.65)]">
              Explore Platform
            </Button>
            <Button href="#technology" variant="outlineLight">
              Technology Foundation
            </Button>
          </div>
          <p className="mt-5 flex items-start gap-2 text-xs text-white/55">
            <Check size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
            <span>Structured records and human-reviewed decisions - not live risk monitoring.</span>
          </p>
        </Reveal>

        <Reveal delay={0.12} className="min-w-0">
          <div className="product-hero-card min-w-0 rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_30px_90px_-40px_rgba(255,90,78,0.45)] backdrop-blur sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="product-eyebrow text-white/55">Supplier risk overview</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Assessment record</h2>
              </div>
              <span className="rounded-full border border-coral/35 bg-coral/10 px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-coral">
                ILLUSTRATIVE
              </span>
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-ink/70 p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Supplier profile</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">Qualification / approval / review history</p>
                </div>
                <Package className="shrink-0 text-coral" size={22} aria-hidden="true" />
              </div>
              <div className="mt-5 space-y-3">
                {riskLevels.map((risk) => (
                  <div key={risk.name} className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.035] px-3 py-3">
                    <span className="text-sm text-white/75">{risk.name} risk</span>
                    <span className={`product-risk product-risk-${risk.tone}`}>{risk.level}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 grid min-w-0 grid-cols-2 gap-3">
              <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.035] p-3 sm:p-4">
                <p className="product-eyebrow text-white/50">Forecast record</p>
                <p className="mt-2 text-sm font-medium">Historical / projected</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">Period and source retained</p>
              </div>
              <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.035] p-3 sm:p-4">
                <p className="product-eyebrow text-white/50">Mitigation</p>
                <p className="mt-2 text-sm font-medium">Owner / deadline</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">Progress and outcome recorded</p>
              </div>
            </div>
            <p className="mt-4 text-center text-[10px] leading-relaxed tracking-[0.1em] text-white/45">
              SAMPLE RECORD VIEW / NO LIVE SUPPLIER DATA
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Foundation() {
  return (
    <section id="foundation" aria-labelledby="foundation-title" className="bg-white py-16 sm:py-20">
      <Container>
        <SectionIntro
          eyebrow="Current application foundation"
          title="A structured base for supplier decisions."
          text="The published product information describes a responsive web application with role-based access, backend APIs, and structured supplier and procurement records."
        />
        <div className="mt-10 grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {foundation.map(({ icon: Icon, label, value }) => (
            <article key={label} className="flex min-w-0 items-start gap-4 rounded-2xl border border-line bg-light/60 p-4 sm:p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-coral-soft text-coral-deep">
                <Icon size={20} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-[0.11em] text-text-muted">{label}</p>
                <p className="mt-2 break-words text-sm font-semibold leading-relaxed text-ink">{value}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-4xl rounded-xl border border-line bg-light/70 px-4 py-3 text-center text-xs leading-relaxed text-text-muted">
          Scope note: these foundations come from Evrasko's product information. This repository contains the public website and demo-request endpoint, not the supplier application backend, so those backend implementations are not independently verifiable here.
        </p>
      </Container>
    </section>
  );
}

function TechnologyFoundation() {
  return (
    <section id="technology" aria-labelledby="technology-title" className="bg-light py-16 sm:py-20">
      <Container>
        <SectionIntro
          eyebrow="Technology foundation / proposed options"
          title="Potential extensions, clearly separated."
          text="NVIDIA technologies are feasibility options for a future analytics and AI layer - not current Evrasko integrations."
        />
        <div className="mt-10 grid min-w-0 gap-4 lg:grid-cols-3">
          {technologies.map(({ icon: Icon, title, detail, text }) => (
            <article key={title} className="min-w-0 rounded-3xl border border-line bg-white p-5 shadow-[0_10px_35px_-28px_rgba(11,11,15,0.4)] sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ink text-coral">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="rounded-full border border-coral/35 bg-coral-soft px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-coral-deep">
                  PROPOSED
                </span>
              </div>
              <h3 className="mt-5 break-words text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-coral-deep">{detail}</p>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-5 flex min-w-0 items-start gap-3 rounded-2xl border border-line bg-white/70 p-4 text-sm leading-relaxed text-text-muted">
          <ShieldCheck className="mt-0.5 shrink-0 text-coral-deep" size={19} aria-hidden="true" />
          <p>
            Any future use would depend on suitable data, validation, infrastructure, and human oversight. No NVIDIA partnership, endorsement, or existing integration is implied.
          </p>
        </div>
      </Container>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture" aria-labelledby="architecture-title" className="bg-white py-16 sm:py-20">
      <Container>
        <SectionIntro
          eyebrow="Technical architecture"
          title="From governed access to traceable records."
          text="The documented application flow connects procurement and risk teams to structured records, with a separate optional layer reserved for future evaluation."
        />
        <div className="mt-10 min-w-0 rounded-3xl border border-line bg-light/55 p-4 sm:p-7">
          <p className="product-eyebrow mb-5 text-coral-deep">DOCUMENTED APPLICATION FLOW</p>
          <ol className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Current application architecture flow">
            {architectureStages.map(({ icon: Icon, label, text }, index) => (
              <li key={label} className="min-w-0 rounded-2xl border border-line bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-coral-soft text-coral-deep">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="product-eyebrow text-text-muted/70">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink">{label}</h3>
                <p className="mt-2 text-xs leading-relaxed text-text-muted">{text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-5 min-w-0 rounded-2xl border border-dashed border-coral/45 bg-coral-soft/50 p-4">
            <span className="product-eyebrow inline-flex max-w-full rounded-full bg-white px-3 py-1 text-coral-deep">PROPOSED / NOT CONNECTED</span>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              Optional evaluation: CUDA-X Data Science for analytics, cuOpt for modeled operational optimization, and NeMo / NIM for suitable AI-assisted workflows. No active integration is represented.
            </p>
          </div>
        </div>
        <div className="mt-6 grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {dataEntities.map((text) => (
            <div key={text} className="flex min-w-0 items-start gap-3 rounded-xl border border-line px-4 py-3 text-xs font-medium leading-relaxed text-text-muted">
              <Check size={15} className="mt-0.5 shrink-0 text-coral-deep" aria-hidden="true" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="platform" aria-labelledby="capabilities-title" className="bg-light py-16 sm:py-20">
      <Container>
        <SectionIntro
          eyebrow="Application capabilities"
          title="Supplier intelligence, organized around real records."
          text="A connected view of supplier identity, procurement context, assessment history, and accountable follow-through."
        />
        <div className="mt-10 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <Reveal key={title} className="min-w-0">
              <article className="h-full min-w-0 rounded-3xl border border-line bg-white p-5 transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-30px_rgba(11,11,15,0.45)] sm:p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-coral">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{text}</p>
                {title === 'Supply chain risk assessments' && (
                  <ul className="mt-4 space-y-3 border-t border-line pt-4">
                    {riskDimensions.map((risk) => (
                      <li key={risk.label}>
                        <p className="text-xs font-semibold text-ink">{risk.label}</p>
                        <p className="mt-1 text-xs leading-relaxed text-text-muted">{risk.text}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Workflow() {
  return (
    <section id="workflow" aria-labelledby="workflow-title" className="bg-white py-16 sm:py-20">
      <Container>
        <SectionIntro
          eyebrow="Connected supplier risk workflow"
          title="From Supplier Records to Recorded Risk Decisions."
          text="Connect supplier profiles, procurement relationships, risk assessments, forecasts, and mitigation actions through one structured intelligence workflow."
        />
        <ol className="mt-10 grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {workflow.map((step, index) => (
            <li key={step.title} className="min-w-0 rounded-2xl border border-line bg-white p-5 shadow-[0_8px_24px_-22px_rgba(11,11,15,0.5)]">
              <span className="product-eyebrow inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-coral-soft px-2 text-coral-deep">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-sm font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Metric({ label, value, icon: Icon, tone = 'default' }) {
  return (
    <div className="min-w-0 rounded-2xl border border-line bg-white p-4">
      <span className={`grid h-9 w-9 place-items-center rounded-xl ${tone === 'high' ? 'bg-risk-high/10 text-risk-high' : tone === 'medium' ? 'bg-risk-medium/15 text-[#B45309]' : 'bg-coral-soft text-coral-deep'}`}>
        <Icon size={18} aria-hidden="true" />
      </span>
      <p className="mt-4 text-2xl font-semibold tracking-tight text-ink">{value}</p>
      <p className="mt-1 text-xs leading-relaxed text-text-muted">{label}</p>
    </div>
  );
}

function DashboardPreview() {
  return (
    <section id="preview" aria-labelledby="preview-title" className="bg-light py-16 sm:py-20">
      <Container>
        <SectionIntro
          eyebrow="Application preview"
          title="Supplier intelligence dashboard."
          text="An illustrative view of supplier risk summaries, forecast records, and review information - not a screenshot of a live application."
        />
        <div className="mt-10 min-w-0 overflow-hidden rounded-3xl border border-line bg-white shadow-[0_28px_70px_-45px_rgba(11,11,15,0.45)]">
          <div className="flex min-w-0 flex-wrap items-center justify-between gap-3 border-b border-line bg-ink px-4 py-4 text-white sm:px-7">
            <div className="flex min-w-0 items-center gap-3">
              <span aria-hidden="true" className="flex shrink-0 gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              </span>
              <span className="product-eyebrow min-w-0 text-white/70">Supplier Intelligence / Dashboard</span>
            </div>
            <span className="rounded-full border border-coral/45 bg-coral/10 px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-coral">
              ILLUSTRATIVE DEMONSTRATION DATA
            </span>
          </div>

          <div className="min-w-0 p-4 sm:p-7">
            <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Metric icon={Package} label="Active suppliers" value="128" />
              <Metric icon={ShieldAlert} label="High-risk suppliers" value="9" tone="high" />
              <Metric icon={ClipboardCheck} label="Open mitigation actions" value="23" tone="medium" />
              <Metric icon={Clock3} label="Assessments due this month" value="14" />
            </div>

            <div className="product-preview-panels mt-4 grid min-w-0 gap-4">
              <section aria-labelledby="risk-distribution-title" className="min-w-0 rounded-2xl border border-line p-4 sm:p-5">
                <h3 id="risk-distribution-title" className="text-sm font-semibold text-ink">Supplier risk distribution</h3>
                <p className="mt-1 text-xs text-text-muted">Illustrative supplier counts by recorded level</p>
                <ul className="mt-5 space-y-4">
                  {distribution.map((item) => (
                    <li key={item.label}>
                      <div className="mb-1.5 flex justify-between text-xs">
                        <span className="text-text-muted">{item.label}</span>
                        <span className="font-semibold text-ink">{item.count}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-light">
                        <span className={`block h-full rounded-full ${item.tone}`} style={{ width: item.width }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="forecast-records-title" className="min-w-0 rounded-2xl border border-line p-4 sm:p-5">
                <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 id="forecast-records-title" className="text-sm font-semibold text-ink">Forecast records by risk category</h3>
                    <p className="mt-1 text-xs text-text-muted">Example record values; no algorithm or units implied</p>
                  </div>
                  <div className="flex flex-wrap gap-3 text-[10px] text-text-muted">
                    <span className="flex items-center gap-1.5"><i aria-hidden="true" className="h-2.5 w-2.5 rounded-sm bg-ink" />Historical</span>
                    <span className="flex items-center gap-1.5"><i aria-hidden="true" className="h-2.5 w-2.5 rounded-sm bg-coral" />Projected</span>
                  </div>
                </div>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[400px] text-left text-xs">
                    <thead>
                      <tr className="border-b border-line text-text-muted">
                        <th scope="col" className="pb-2 pr-3 font-medium">Category</th>
                        <th scope="col" className="px-2 pb-2 font-medium">Historical</th>
                        <th scope="col" className="px-2 pb-2 font-medium">Projected</th>
                        <th scope="col" className="pb-2 pl-2 font-medium">Record view</th>
                      </tr>
                    </thead>
                    <tbody>
                      {forecastRows.map((row) => (
                        <tr key={row.category} className="border-b border-line last:border-0">
                          <th scope="row" className="py-3 pr-3 font-medium text-ink">{row.category}</th>
                          <td className="px-2 py-3 text-text-muted">{row.historical}</td>
                          <td className="px-2 py-3 text-text-muted">{row.projected}</td>
                          <td className="py-3 pl-2">
                            <span className="flex h-2.5 min-w-24 overflow-hidden rounded-full bg-light">
                              <i aria-hidden="true" className="h-full bg-ink" style={{ width: `${row.historical}%` }} />
                              <i aria-hidden="true" className="h-full bg-coral" style={{ width: `${row.projected}%` }} />
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            <section aria-labelledby="review-records-title" className="mt-4 min-w-0 rounded-2xl border border-line p-4 sm:p-5">
              <div className="flex min-w-0 flex-wrap items-end justify-between gap-2">
                <div>
                  <h3 id="review-records-title" className="text-sm font-semibold text-ink">Illustrative supplier review records</h3>
                  <p className="mt-1 text-xs text-text-muted">Sample names and dates; not a live schedule</p>
                </div>
                <span className="product-eyebrow text-text-muted">DEMONSTRATION</span>
              </div>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[560px] text-left text-xs">
                  <thead>
                    <tr className="border-b border-line text-text-muted">
                      <th scope="col" className="pb-3 pr-4 font-medium">Supplier</th>
                      <th scope="col" className="pb-3 pr-4 font-medium">Category</th>
                      <th scope="col" className="pb-3 pr-4 font-medium">Risk level</th>
                      <th scope="col" className="pb-3 font-medium">Next review</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviews.map((review) => (
                      <tr key={review.supplier} className="border-b border-line last:border-0">
                        <th scope="row" className="py-3 pr-4 font-semibold text-ink">{review.supplier}</th>
                        <td className="py-3 pr-4 text-text-muted">{review.category}</td>
                        <td className="py-3 pr-4">
                          <span className={`product-risk product-risk-${review.level.toLowerCase()}`}>{review.level}</span>
                        </td>
                        <td className="py-3 text-text-muted">{review.review}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <p className="mt-4 text-center text-[10px] leading-relaxed text-text-muted">
              All names, counts, risk levels, forecast values, and dates above are illustrative demonstration records.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Governance() {
  return (
    <section id="governance" aria-labelledby="governance-title" className="bg-white py-16 sm:py-20">
      <Container>
        <SectionIntro
          eyebrow="Governance and enterprise readiness"
          title="Make the record behind each decision visible."
          text="Traceable assessment, forecast, and mitigation records help teams review supplier decisions and clarify ownership."
        />
        <div className="mt-10 grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {governance.map(({ icon: Icon, title, text }) => (
            <article key={title} className="min-w-0 rounded-2xl border border-line bg-light/60 p-5">
              <Icon size={21} className="text-coral-deep" aria-hidden="true" />
              <h3 className="mt-4 text-sm font-semibold leading-snug text-ink">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-text-muted">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Roadmap() {
  return (
    <section id="roadmap" aria-labelledby="roadmap-title" className="product-roadmap relative overflow-hidden py-16 text-white sm:py-20 lg:py-24">
      <div aria-hidden="true" className="product-roadmap-grid pointer-events-none absolute inset-0 opacity-30" />
      <Container className="relative">
        <SectionIntro
          eyebrow="Advanced technology roadmap / Q3-Q4 plan"
          title="Planned Milestones &amp; Development Stages."
          text="Explore the planned development stages for strengthening supplier intelligence, improving risk traceability, expanding analytics, and evaluating future AI-assisted procurement capabilities."
          dark
        />
        <ol className="mt-10 grid min-w-0 gap-4 md:grid-cols-2 lg:mt-14">
          {roadmap.map((item, index) => (
            <li key={item.title} className="product-roadmap-card min-w-0 rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition duration-200 hover:border-coral/45 hover:bg-white/[0.075] sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="product-eyebrow grid h-10 min-w-10 place-items-center rounded-xl border border-coral/40 bg-coral/10 px-2 text-coral">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-coral">
                  PLANNED
                </span>
              </div>
              <h3 className="mt-5 max-w-xl break-words text-base font-semibold leading-snug text-white sm:text-lg">{item.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65">{item.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-white/55">
          <Check size={14} className="mt-0.5 shrink-0 text-coral" aria-hidden="true" />
          Roadmap items are planned areas for evaluation and development, not completed features or delivery commitments.
        </p>
      </Container>
    </section>
  );
}

function ProductPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="product-site-shell">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-coral-deep focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar links={pageLinks} />
        <main id="main" className="product-page">
          <ProductHero />
          <Foundation />
          <TechnologyFoundation />
          <Architecture />
          <Capabilities />
          <Workflow />
          <DashboardPreview />
          <Governance />
          <Roadmap />
        </main>
        <div id="contact">
          <Footer links={pageLinks} />
        </div>
      </div>
    </MotionConfig>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductPage />
  </React.StrictMode>,
);
