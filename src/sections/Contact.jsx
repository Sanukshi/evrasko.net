import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Globe, Loader2, MapPin, Phone } from 'lucide-react';
import Container from '../components/Container.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import { contact } from '../data/content.js';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Digits with optional +, spaces, dashes, dots and brackets; 7–15 digits in total.
const PHONE_PATTERN = /^\+?[\d\s().-]{7,20}$/;

/**
 * Sends the demo request to public/api/demo-request.php, which saves it
 * to the MySQL `demo_requests` table. Throwing shows the form's failure message.
 */
async function submitDemoRequest(data) {
  // Relative path so it works when the site is hosted in a sub-folder.
  const res = await fetch(`${import.meta.env.BASE_URL}api/demo-request.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Request failed');
}

function Field({ id, label, required, hint, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-text-dark">
        {label}
        {required && (
          <span aria-hidden="true" className="text-coral-deep">
            {' '}
            *
          </span>
        )}
        {hint && <span className="font-normal text-text-muted"> ({hint})</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-[#B91C1C]">
          {error}
        </p>
      )}
    </div>
  );
}

function ContactForm() {
  const { form } = contact;
  const { labels, errors: msg } = form;
  const [status, setStatus] = useState('idle'); // idle | success | error
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onTouched' });

  const onSubmit = async (data) => {
    setStatus('idle');
    try {
      await submitDemoRequest(data);
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  const a11y = (name) => ({
    'aria-invalid': errors[name] ? 'true' : 'false',
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  if (status === 'success') {
    return (
      <div role="status" className="flex h-full flex-col items-center justify-center py-12 text-center">
        <CheckCircle2 size={56} className="text-risk-low" aria-hidden="true" />
        <p className="mt-5 max-w-sm text-lg font-semibold text-text-dark">{form.success}</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-coral-deep underline-offset-4 hover:underline"
        >
          {form.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-labelledby="contact-form-title">
      {/* Hidden spam trap */}
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register('website')} />
      <h3 id="contact-form-title" className="text-2xl font-semibold text-text-dark">
        {form.title}
      </h3>
      <p className="mt-2 text-text-muted">{form.intro}</p>
      <p className="mt-1 text-sm text-text-muted">{labels.requiredNote}</p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field id="name" label={labels.name} required error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className="form-input"
            {...a11y('name')}
            {...register('name', {
              required: msg.nameRequired,
              validate: (v) => v.trim().length > 0 || msg.nameRequired,
            })}
          />
        </Field>

        <Field id="email" label={labels.email} required error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            className="form-input"
            {...a11y('email')}
            {...register('email', {
              required: msg.emailRequired,
              pattern: { value: EMAIL_PATTERN, message: msg.emailInvalid },
            })}
          />
        </Field>

        <Field id="company" label={labels.company} required error={errors.company?.message}>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            className="form-input"
            {...a11y('company')}
            {...register('company', {
              required: msg.companyRequired,
              validate: (v) => v.trim().length > 0 || msg.companyRequired,
            })}
          />
        </Field>

        <Field id="role" label={labels.role}>
          <select id="role" className="form-input appearance-auto" defaultValue="" {...register('role')}>
            <option value="">{labels.rolePlaceholder}</option>
            {form.roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </Field>

        <Field id="phone" label={labels.phone} hint={labels.phoneHint} error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className="form-input"
            {...a11y('phone')}
            {...register('phone', {
              validate: (v) => {
                if (!v) return true;
                const digits = v.replace(/\D/g, '').length;
                return (PHONE_PATTERN.test(v) && digits >= 7 && digits <= 15) || msg.phoneInvalid;
              },
            })}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field id="message" label={labels.message} required error={errors.message?.message}>
            <textarea
              id="message"
              rows={5}
              placeholder={labels.messagePlaceholder}
              className="form-input resize-y"
              {...a11y('message')}
              {...register('message', {
                required: msg.messageRequired,
                validate: (v) => v.trim().length >= 20 || msg.messageMin,
              })}
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <div className="flex items-start gap-3">
            <input
              id="consent"
              type="checkbox"
              className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-line accent-coral-deep"
              {...a11y('consent')}
              {...register('consent', { required: msg.consentRequired })}
            />
            <label htmlFor="consent" className="cursor-pointer text-sm text-text-dark">
              {labels.consent}
              <span aria-hidden="true" className="text-coral-deep">
                {' '}
                *
              </span>
            </label>
          </div>
          {errors.consent && (
            <p id="consent-error" role="alert" className="mt-1.5 text-sm text-[#B91C1C]">
              {errors.consent.message}
            </p>
          )}
        </div>
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-5 rounded-xl bg-risk-high/10 px-4 py-3 text-sm text-[#B91C1C]">
          {msg.submitFailed}
        </p>
      )}

      <Button type="submit" arrow={!isSubmitting} disabled={isSubmitting} className="mt-7 w-full sm:w-auto" aria-busy={isSubmitting}>
        {isSubmitting ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            {labels.submitting}
          </span>
        ) : (
          labels.submit
        )}
      </Button>
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section relative overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-32 h-80 w-80 rounded-full bg-coral/10 blur-3xl" />

      <Container className="relative grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-10">
        {/* Coral CTA card */}
        <Reveal className="relative overflow-hidden rounded-3xl bg-coral-deep p-8 text-white sm:p-10">
          <svg aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 text-white/15" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="2" />
            <circle cx="100" cy="100" r="64" stroke="currentColor" strokeWidth="2" />
          </svg>
          <h2 id="contact-title" className="h2 relative text-white">
            {contact.heading}
          </h2>
          <p className="relative mt-5 leading-relaxed text-white/90">{contact.text}</p>

          <ul className="relative mt-9 space-y-7">
            {contact.offices.map((o) => (
              <li key={o.country}>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-white">{o.country}</p>
                <address className="flex gap-3 not-italic text-white/90">
                  <MapPin size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {o.address}
                </address>
                <a href={o.phoneHref} className="mt-2 inline-flex items-center gap-3 font-semibold text-white hover:underline">
                  <Phone size={18} className="shrink-0" aria-hidden="true" />
                  {o.phone}
                </a>
              </li>
            ))}
            <li>
              <a href={contact.website.href} className="inline-flex items-center gap-3 font-semibold text-white hover:underline">
                <Globe size={18} className="shrink-0" aria-hidden="true" />
                {contact.website.label}
              </a>
            </li>
          </ul>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1} className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-10">
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
