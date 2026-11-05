import {
  Activity,
  AlarmClock,
  Brain,
  Building2,
  CalendarClock,
  CalendarRange,
  ClipboardList,
  Code2,
  Cpu,
  Database,
  EyeOff,
  Facebook,
  Factory,
  FolderTree,
  History,
  Instagram,
  KeyRound,
  Layers,
  LineChart,
  Link2,
  Linkedin,
  ListChecks,
  Lock,
  MonitorSmartphone,
  Network,
  Scale,
  Server,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Users,
  Youtube,
} from 'lucide-react';

// The X (formerly Twitter) mark is not in lucide-react, so it is drawn here.
function XLogo({ size = 24, className, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...rest}>
      <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3zm-1.08 16.2h1.7L7.4 4.7H5.58l11.09 14.5z" />
    </svg>
  );
}

const ICONS = {
  Activity,
  AlarmClock,
  Brain,
  Building2,
  CalendarClock,
  CalendarRange,
  ClipboardList,
  Code2,
  Cpu,
  Database,
  EyeOff,
  Facebook,
  Factory,
  FolderTree,
  History,
  Instagram,
  KeyRound,
  Layers,
  LineChart,
  Link2,
  Linkedin,
  ListChecks,
  Lock,
  MonitorSmartphone,
  Network,
  Scale,
  Server,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Users,
  X: XLogo,
  Youtube,
};

/** Renders a lucide icon by the name used in data/content.js. Decorative by default. */
export default function Icon({ name, size = 24, className = '', ...rest }) {
  const Component = ICONS[name];
  if (!Component) {
    if (import.meta.env.DEV) console.warn(`Icon "${name}" is not registered in Icon.jsx`);
    return null;
  }
  return <Component size={size} className={className} aria-hidden="true" focusable="false" {...rest} />;
}
