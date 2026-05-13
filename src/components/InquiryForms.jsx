'use client';

import { useState } from 'react';

const contactDefaults = {
  name: '',
  email: '',
  phone: '',
  serviceInterest: '',
  message: '',
};

const quoteDefaults = {
  ...contactDefaults,
  aircraftType: '',
  date: '',
  location: '',
};

function Field({ label, children }) {
  return (
    <label className="grid gap-1.5 text-sm text-slate-300">
      {label}
      {children}
    </label>
  );
}

function SubmitMessage({ message }) {
  return <p className="min-h-6 text-sm text-amber-300" aria-live="polite">{message}</p>;
}

function ContactForm() {
  const [values, setValues] = useState(contactDefaults);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const inputClass = 'w-full rounded-xl border border-white/15 bg-slate-950/80 px-3.5 py-2.5 text-slate-100 outline-none ring-0 transition focus:border-amber-300';

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus('Sending...');
    try {
      const response = await fetch('/api/inquiries/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Submission failed');
      setStatus(result.message);
      setValues(contactDefaults);
    } catch (error) {
      setStatus(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="card-shell grid gap-3.5 p-6" onSubmit={onSubmit}>
      <h3 className="text-xl font-semibold">Contact form</h3>
      <Field label="Name">
        <input className={inputClass} value={values.name} onChange={(event) => setValues({ ...values, name: event.target.value })} required />
      </Field>
      <Field label="Email">
        <input className={inputClass} type="email" value={values.email} onChange={(event) => setValues({ ...values, email: event.target.value })} required />
      </Field>
      <Field label="Phone">
        <input className={inputClass} value={values.phone} onChange={(event) => setValues({ ...values, phone: event.target.value })} required />
      </Field>
      <Field label="Service interest">
        <select className={inputClass} value={values.serviceInterest} onChange={(event) => setValues({ ...values, serviceInterest: event.target.value })} required>
          <option value="">Select a service</option>
          <option>Meet &amp; Greet</option>
          <option>Ground Handling</option>
          <option>Fuel Coordination</option>
          <option>Permits</option>
          <option>Helicopter Charter Kenya</option>
        </select>
      </Field>
      <Field label="Message">
        <textarea className={inputClass} rows="5" value={values.message} onChange={(event) => setValues({ ...values, message: event.target.value })} required />
      </Field>
      <button className="btn-primary disabled:opacity-70" type="submit" disabled={loading}>Request Handling</button>
      <SubmitMessage message={status} />
    </form>
  );
}

function QuoteForm() {
  const [values, setValues] = useState(quoteDefaults);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const inputClass = 'w-full rounded-xl border border-white/15 bg-slate-950/80 px-3.5 py-2.5 text-slate-100 outline-none ring-0 transition focus:border-amber-300';

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus('Sending...');
    try {
      const response = await fetch('/api/inquiries/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Submission failed');
      setStatus(result.message);
      setValues(quoteDefaults);
    } catch (error) {
      setStatus(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="card-shell grid gap-3.5 p-6" onSubmit={onSubmit}>
      <h3 className="text-xl font-semibold">Quote request</h3>
      <Field label="Name">
        <input className={inputClass} value={values.name} onChange={(event) => setValues({ ...values, name: event.target.value })} required />
      </Field>
      <Field label="Email">
        <input className={inputClass} type="email" value={values.email} onChange={(event) => setValues({ ...values, email: event.target.value })} required />
      </Field>
      <Field label="Phone">
        <input className={inputClass} value={values.phone} onChange={(event) => setValues({ ...values, phone: event.target.value })} required />
      </Field>
      <Field label="Service interest">
        <select className={inputClass} value={values.serviceInterest} onChange={(event) => setValues({ ...values, serviceInterest: event.target.value })} required>
          <option value="">Select a service</option>
          <option>Meet &amp; Greet</option>
          <option>Ground Handling</option>
          <option>Fuel Coordination</option>
          <option>Permits</option>
          <option>Helicopter Charter Kenya</option>
        </select>
      </Field>
      <Field label="Aircraft type">
        <input className={inputClass} value={values.aircraftType} onChange={(event) => setValues({ ...values, aircraftType: event.target.value })} required />
      </Field>
      <Field label="Date">
        <input className={inputClass} type="date" value={values.date} onChange={(event) => setValues({ ...values, date: event.target.value })} required />
      </Field>
      <Field label="Location">
        <input className={inputClass} value={values.location} onChange={(event) => setValues({ ...values, location: event.target.value })} required />
      </Field>
      <Field label="Message">
        <textarea className={inputClass} rows="5" value={values.message} onChange={(event) => setValues({ ...values, message: event.target.value })} required />
      </Field>
      <button className="btn-primary disabled:opacity-70" type="submit" disabled={loading}>Get a Quote</button>
      <SubmitMessage message={status} />
    </form>
  );
}

export default function InquiryForms() {
  return (
    <section className="pb-14 pt-3">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 px-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-400">Lead generation</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Request handling or a quote</h2>
          <p className="mt-3 text-slate-300">Use either form below and we’ll respond with the right aviation support for your trip.</p>
        </div>
        <div className="grid gap-5 xl:grid-cols-2">
          <ContactForm />
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
