import { useState } from "react";
import { CheckCircle2, Phone, Send } from "lucide-react";
import {
  bookingBasisOptions,
  PHONE_DISPLAY,
  PHONE_TEL,
  type Content,
} from "@/lib/site-content";

type Errors = Partial<Record<"name" | "phone" | "service" | "basis" | "form", string>>;

export function LeadForm({ c }: { c: Content }) {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    service: "",
    basis: "",
    datetime: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const set = (key: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const validate = () => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = c.form.errors.name;
    if (!/^[+0-9\s()-]{7,25}$/.test(values.phone.trim())) next.phone = c.form.errors.phone;
    if (!values.service) next.service = c.form.errors.service;
    if (!values.basis) next.basis = c.form.errors.basis;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f57c1605-0f35-4f74-bba3-081f623e7f2e",
          subject: "New quote request — Riyadh Home Care",
          from_name: "Riyadh Home Care Website",
          ...values,
          language: c.lang === "ar" ? "Arabic" : "English",
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit form");
      }

      setStatus("done");
    } catch {
      setStatus("idle");
      setErrors({ form: c.form.errors.generic });
    }
  };

  const field =
    "w-full rounded-xl border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";
  const labelCls = "mb-1.5 block text-sm font-semibold text-foreground";

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)]">
        <CheckCircle2 className="mx-auto h-12 w-12 text-success" aria-hidden />
        <p className="mt-4 text-lg font-semibold text-foreground">{c.form.success}</p>
        <a
          href={PHONE_TEL}
          id="call-now-form-success"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-bold text-primary-foreground"
        >
          <Phone className="h-5 w-5" aria-hidden />
          {PHONE_DISPLAY}
        </a>
      </div>
    );
  }

  return (
    <form
      id="quote-form"
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="lf-name">
            {c.form.name} *
          </label>
          <input
            id="lf-name"
            name="name"
            className={field}
            value={values.name}
            onChange={set("name")}
            autoComplete="name"
            aria-invalid={!!errors.name}
            required
          />
          {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="lf-phone">
            {c.form.phone} *
          </label>
          <input
            id="lf-phone"
            name="phone"
            type="tel"
            dir="ltr"
            inputMode="tel"
            className={`${field} text-start`}
            value={values.phone}
            onChange={set("phone")}
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            required
          />
          {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="lf-service">
            {c.form.service} *
          </label>
          <select
            id="lf-service"
            name="service"
            className={field}
            value={values.service}
            onChange={set("service")}
            aria-invalid={!!errors.service}
            required
          >
            <option value="">{c.form.choose}</option>
            {c.services.items.map((s) => (
              <option key={s.key} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-destructive">{errors.service}</p>
          )}
        </div>
        <div>
          <label className={labelCls} htmlFor="lf-basis">
            {c.form.basis} *
          </label>
          <select
            id="lf-basis"
            name="basis"
            className={field}
            value={values.basis}
            onChange={set("basis")}
            aria-invalid={!!errors.basis}
            required
          >
            <option value="">{c.form.choose}</option>
            {bookingBasisOptions(c.lang).map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          {errors.basis && <p className="mt-1 text-sm text-destructive">{errors.basis}</p>}
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="lf-datetime">
            {c.form.datetime}
          </label>
          <input
            id="lf-datetime"
            name="datetime"
            className={field}
            value={values.datetime}
            onChange={set("datetime")}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="lf-message">
            {c.form.message}
          </label>
          <textarea
            id="lf-message"
            name="message"
            rows={4}
            className={field}
            value={values.message}
            onChange={set("message")}
          />
        </div>
      </div>

      {errors.form && (
        <p role="alert" className="mt-4 text-sm font-medium text-destructive">
          {errors.form}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-lg font-extrabold text-accent-foreground shadow-[var(--shadow-soft)] transition hover:brightness-95 disabled:opacity-70"
      >
        <Send className="h-5 w-5" aria-hidden />
        {status === "sending" ? c.form.submitting : c.form.submit}
      </button>

      <p className="mt-4 text-center text-sm text-muted-foreground">
        {c.form.callLine.split(PHONE_DISPLAY)[0]}
        <a href={PHONE_TEL} className="font-bold text-primary underline underline-offset-4">
          {PHONE_DISPLAY}
        </a>
      </p>
    </form>
  );
}
