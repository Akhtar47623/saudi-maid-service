import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  CalendarDays,
  CalendarRange,
  Clock,
  Heart,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
  Zap,
} from "lucide-react";
import { LeadForm } from "./LeadForm";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  whatsappLink,
  type Content,
  type ServiceKey,
} from "@/lib/site-content";

import heroImg from "@/assets/hero-maid.jpg";
import maidImg from "@/assets/service-maid.jpg";
import cleaningImg from "@/assets/service-cleaning.jpg";
import deepImg from "@/assets/service-deep.jpg";
import cookingImg from "@/assets/service-cooking.jpg";
import childImg from "@/assets/service-childcare.jpg";
import elderlyImg from "@/assets/service-elderly.jpg";

const serviceImages: Record<ServiceKey, string> = {
  maid: maidImg,
  cleaning: cleaningImg,
  deep: deepImg,
  cooking: cookingImg,
  child: childImg,
  elderly: elderlyImg,
};

const trustIcons = [
  BadgeCheck,
  ShieldCheck,
  Home,
  MapPin,
  Zap,
  Heart,
  Clock,
  CalendarRange,
];
const bookingIcons = [Timer, CalendarDays, CalendarRange, Users];

function CallLink({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={PHONE_TEL} id={id} className={className} data-conversion="call">
      {children}
    </a>
  );
}

export function LandingPage({ c }: { c: Content }) {
  const [scrolled, setScrolled] = useState(false);
  const otherPath = c.lang === "en" ? "/ar" : "/";
  const waHref = whatsappLink(c.lang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const btnPrimary =
    "inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-base font-extrabold text-accent-foreground shadow-[var(--shadow-soft)] transition hover:brightness-95 sm:text-lg";
  const btnSecondary =
    "inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-card px-6 py-4 text-base font-bold text-primary transition hover:bg-secondary sm:text-lg";

  return (
    <div dir={c.dir} lang={c.htmlLang} className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Announcement / quick-contact strip */}
      <div className="w-full bg-primary-dark text-primary-foreground md:sticky md:top-0 md:z-50">
        <div className="section-x flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-sm font-medium md:justify-between">
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 shrink-0" aria-hidden />
            {c.banner.availability}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <CallLink
              id="banner-call"
              className="inline-flex items-center gap-2 font-bold underline-offset-4 hover:underline"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              <span dir="ltr">{c.banner.call}</span>
            </CallLink>
            <a
              id="banner-whatsapp"
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              data-conversion="whatsapp"
              className="inline-flex items-center gap-2 font-bold underline-offset-4 hover:underline"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
              {c.banner.whatsapp}
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur md:top-9 ${
          scrolled ? "shadow-[var(--shadow-soft)]" : ""
        }`}
      >
        <div className="section-x flex items-center justify-between gap-3 py-3">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Sparkles className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-base font-extrabold tracking-tight text-foreground sm:text-lg">
              {c.brand}
            </span>
          </a>

          <nav
            aria-label={c.nav.services}
            className="hidden items-center gap-7 text-sm font-semibold text-foreground lg:flex"
          >
            <a href="#services" className="hover:text-primary">
              {c.nav.services}
            </a>
            <a href="#why" className="hover:text-primary">
              {c.nav.why}
            </a>
            <a href="#faq" className="hover:text-primary">
              {c.nav.faq}
            </a>
            <a href="#contact" className="hover:text-primary">
              {c.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <div
              className="flex items-center overflow-hidden rounded-lg border border-border text-xs font-bold"
              aria-label={c.switcher.label}
            >
              <Link
                to="/"
                className={`px-2.5 py-1.5 ${c.lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"}`}
                hrefLang="en"
              >
                {c.switcher.toEn}
              </Link>
              <Link
                to="/ar"
                className={`px-2.5 py-1.5 ${c.lang === "ar" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"}`}
                hrefLang="ar"
              >
                {c.switcher.toAr}
              </Link>
            </div>
            <CallLink
              id="call-now"
              className="hidden items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-extrabold text-accent-foreground sm:inline-flex"
            >
              <Phone className="h-4 w-4" aria-hidden />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </CallLink>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-sand">
        <div className="section-x grid items-center gap-8 py-10 md:grid-cols-2 md:py-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs font-bold text-primary shadow-[var(--shadow-soft)] sm:text-sm">
              <MapPin className="h-4 w-4" aria-hidden />
              {c.hero.locality}
            </p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {c.hero.h1}
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">{c.hero.sub}</p>
            <p className="mt-4 inline-flex items-start gap-2 rounded-xl border border-primary/25 bg-card px-4 py-3 text-sm font-bold text-primary sm:text-base">
              <Clock className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
              {c.hero.availability}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CallLink id="call-now-hero" className={btnPrimary}>
                <Phone className="h-5 w-5" aria-hidden />
                <span dir="ltr">{c.hero.primary}</span>
              </CallLink>
              <a href="#contact" className={btnSecondary}>
                {c.hero.secondary}
              </a>
            </div>
            <a
              id="whatsapp-button"
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              data-conversion="whatsapp"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-whatsapp underline-offset-4 hover:underline"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {c.banner.whatsapp}
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img
              src={heroImg}
              alt={c.hero.imageAlt}
              width={1536}
              height={1152}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="border-y border-border bg-card py-8">
        <div className="section-x">
          <h2 className="sr-only">{c.trust.heading}</h2>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {c.trust.items.map((item, i) => {
              const Icon = trustIcons[i % trustIcons.length]!;
              return (
                <li key={item} className="flex items-start gap-2.5">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span className="text-sm font-semibold text-foreground">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14 sm:py-20">
        <div className="section-x">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            {c.services.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            {c.services.intro}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.services.items.map((s) => (
              <article
                key={s.key}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]"
              >
                <img
                  src={serviceImages[s.key]}
                  alt={s.alt}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-44 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-extrabold text-foreground">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
                  <CallLink
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-dark"
                    id={`call-now-service-${s.key}`}
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    {s.cta}
                  </CallLink>
                </div>
              </article>
            ))}
          </div>

          {/* Booking options */}
          <div className="mt-10 rounded-2xl border border-border bg-sand p-6">
            <h3 className="text-lg font-extrabold text-foreground">{c.booking.heading}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.booking.note}</p>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {c.booking.items.map((b, i) => {
                const Icon = bookingIcons[i]!;
                return (
                  <li
                    key={b.title}
                    className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-[var(--shadow-soft)]"
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" aria-hidden />
                    <div>
                      <p className="font-bold text-foreground">{b.title}</p>
                      <p className="text-sm text-muted-foreground">{b.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section id="why" className="bg-secondary py-14 sm:py-20">
        <div className="section-x">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            {c.why.heading}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.why.items.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
              >
                <BadgeCheck className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-3 text-base font-extrabold text-foreground">{w.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 sm:py-20">
        <div className="section-x">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            {c.how.heading}
          </h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {c.how.steps.map((s, i) => (
              <li
                key={s.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <CallLink id="call-now-how" className={btnPrimary}>
              <Phone className="h-5 w-5" aria-hidden />
              <span dir="ltr">{c.how.cta}</span>
            </CallLink>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-sand py-14 sm:py-20">
        <div className="section-x max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            {c.areas.heading}
          </h2>
          {c.areas.body.map((p) => (
            <p key={p} className="mt-4 text-base text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Lead form */}
      <section id="contact" className="py-14 sm:py-20">
        <div className="section-x grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              {c.form.heading}
            </h2>
            <p className="mt-3 text-base text-muted-foreground">{c.form.sub}</p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-3 text-sm font-bold text-primary">
              <Clock className="h-5 w-5" aria-hidden />
              {c.hero.availability}
            </p>
          </div>
          <LeadForm c={c} />
        </div>
      </section>

      {/* Phone conversion block */}
      <section className="bg-primary py-12 text-primary-foreground sm:py-16">
        <div className="section-x text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {c.phoneBlock.heading}
          </h2>
          <p className="mt-3 text-base opacity-90">{c.phoneBlock.sub}</p>
          <CallLink
            id="call-now-block"
            className="mt-7 inline-flex w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-accent px-8 py-5 text-xl font-extrabold text-accent-foreground shadow-[var(--shadow-card)]"
          >
            <Phone className="h-6 w-6" aria-hidden />
            <span dir="ltr">{c.phoneBlock.cta}</span>
          </CallLink>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 sm:py-20">
        <div className="section-x max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            {c.faq.heading}
          </h2>
          <div className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {c.faq.items.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="cursor-pointer list-none text-base font-bold text-foreground marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-sand py-14 sm:py-20">
        <div className="section-x text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            {c.finalCta.heading}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">{c.finalCta.sub}</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <CallLink id="call-now-final" className={btnPrimary}>
              <Phone className="h-5 w-5" aria-hidden />
              <span dir="ltr">{c.hero.primary}</span>
            </CallLink>
            <a href="#contact" className={btnSecondary}>
              {c.hero.secondary}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark py-12 text-primary-foreground">
        <div className="section-x grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-lg font-extrabold">{c.brand}</p>
            <p className="mt-2 text-sm opacity-85">{c.footer.tagline}</p>
          </div>
          <div>
            <p className="font-bold">{c.footer.servicesTitle}</p>
            <ul className="mt-3 space-y-1.5 text-sm opacity-85">
              {c.services.items.map((s) => (
                <li key={s.key}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold">{c.footer.contactTitle}</p>
            <ul className="mt-3 space-y-2 text-sm opacity-90">
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden />
                {c.footer.location}
              </li>
              <li>
                <CallLink
                  id="call-now-footer"
                  className="inline-flex items-center gap-2 font-bold underline-offset-4 hover:underline"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  <span dir="ltr">{PHONE_DISPLAY}</span>
                </CallLink>
              </li>
              <li>
                <a
                  id="whatsapp-button-footer"
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-conversion="whatsapp"
                  className="inline-flex items-center gap-2 font-bold underline-offset-4 hover:underline"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  {c.banner.whatsapp}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-4 text-sm opacity-85">
              <Link to="/privacy" className="underline-offset-4 hover:underline">
                {c.footer.privacy}
              </Link>
              <Link to="/terms" className="underline-offset-4 hover:underline">
                {c.footer.terms}
              </Link>
              <Link to={otherPath} className="underline-offset-4 hover:underline">
                {c.lang === "en" ? c.switcher.toAr : c.switcher.toEn}
              </Link>
            </div>
          </div>
        </div>
        <div className="section-x mt-8 border-t border-primary-foreground/20 pt-5 text-sm opacity-75">
          © {new Date().getFullYear()} {c.brand}. {c.footer.rights}
        </div>
      </footer>

      {/* Sticky mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-border bg-card p-2.5 shadow-[0_-6px_20px_rgba(0,0,0,0.08)] md:hidden">
        <CallLink
          id="call-now-sticky"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3.5 text-base font-extrabold text-accent-foreground"
        >
          <Phone className="h-5 w-5" aria-hidden />
          <span dir="ltr">{PHONE_DISPLAY}</span>
        </CallLink>
        <a
          id="whatsapp-button-sticky"
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          data-conversion="whatsapp"
          aria-label={c.banner.whatsapp}
          className="flex items-center justify-center rounded-xl bg-whatsapp px-4 py-3.5 text-primary-foreground"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
        </a>
      </div>
    </div>
  );
}
