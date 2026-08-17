# Riyadh Home Connect

Landing Page Build Brief — Maid & Home Care Services, Riyadh

Bilingual (English / Arabic) — Google Ads Landing Page

Act as a Senior Software Architect, CRO Expert, UX/UI Designer, Local SEO Specialist, and Digital Marketing Expert.

Build a high-converting, mobile-first, bilingual (English + Arabic) landing page for a professional maid and home care services business serving Riyadh, Saudi Arabia. Traffic will come primarily from Google Ads. The page must be built and delivered as two fully working language versions from day one — not "architected for later."

1. Business Information

Field Value Location Riyadh, Saudi Arabia Phone 0570567188 Primary services Maid Services, Home Cleaning, Deep Cleaning, Cooking Services, Child Care, Elderly Care Availability Available 24/7 Booking basis Hourly, Weekly, Monthly, or Long-Term

Availability and booking flexibility (24/7, hourly/weekly/monthly/long-term) should be treated as a core differentiator and surfaced repeatedly — hero, trust indicators, services, why choose us, and FAQ — not buried in one place.

Every phone CTA must use a real clickable link: tel:+966570567188. Every WhatsApp CTA (if included) must use https://wa.me/966570567188.

Do not invent business registration numbers, certifications, licenses, years in operation, employee/customer counts, reviews, ratings, awards, guarantees, prices, or specific neighborhood coverage. Use only what's provided here.

2. Bilingual Requirement (core change from v1)

Build / (English) and /ar (Arabic) as two real, complete pages — same structure, same sections, same forms, same tracking IDs — not a stub with a "coming soon" Arabic toggle.

Arabic version uses proper RTL layout (dir="rtl", mirrored spacing/icons/flex order — not just flipped text).

Arabic copy must be natural, professional Gulf-Arabic business tone (not literal/machine translation). Use the Arabic copy provided in Section 9 below as the base; a native reviewer should still sanity-check idioms before launch.

Language switcher (English / العربية) visible in the header on both versions, linking / ↔ /ar (or /en ↔ /ar if you prefer explicit prefixes — pick one and be consistent).

hreflang tags (en, ar, x-default) on both pages so Google understands they're alternates of each other, not duplicate content.

Numbers (phone number, prices if ever added) stay in Western numerals in both versions for scannability, unless you have a specific reason to use Arabic-Indic numerals — flag this as a design decision, don't default silently.

Fonts: pick a typeface pairing that renders both Latin and Arabic well (e.g., a system stack or a webfont with full Arabic glyph support) rather than bolting Arabic onto a Latin-only font.

3. Conversion Strategy

Every screen (both languages) must answer within the first viewport: What service? Where? Why trust it? How do I contact them right now?

CTA hierarchy (same across languages):

Primary: Call Now — 0570567188

Secondary: Request a Quote (lead form)

Tertiary (if WhatsApp number is confirmed registered): Chat on WhatsApp

Never make the visitor scroll to find the phone number.

4. Page Structure

4.0 Top Announcement Banner (new, sits above the header)

A slim, persistent bar across the very top of the page — visible before any scrolling, on both languages.

Contents:

Availability: "Available 24/7" / "متوفرون على مدار الساعة"

Phone (click-to-call): 0570567188

WhatsApp (click-to-chat): icon + "Chat on WhatsApp" / "تواصل عبر واتساب" → https://wa.me/966570567188

Behavior:

Should not push the hero too far down — keep it compact (single line on desktop, may wrap to two lines on small mobile).

Stays fixed/sticky at the top on scroll on desktop; on mobile it can scroll away once the sticky bottom Call Now bar (Section 5) takes over, to avoid two competing sticky bars at once.

Uses distinct styling from the main header (e.g., accent background color) so it reads as a quick-contact strip, not a nav row.

Same tracking IDs apply: banner phone link and banner WhatsApp link should fire the same conversion events as #call-now / #whatsapp-button (see Section 6) — use #banner-call and #banner-whatsapp as distinct classes if you want to measure banner-specific click-through separately.

4.1 Header

Logo/business name · Services · Why Choose Us · FAQs · Contact · phone number · Call Now button · language switcher. Mobile: simplified nav, prominent Call Now button, optional sticky bottom Call Now bar.

4.2 Hero

H1 (local-service headline): "Reliable Maid & Home Care Services in Riyadh"

Subtext: professional cleaning, deep cleaning, cooking, childcare, elderly care for Riyadh homes and families

"Serving Riyadh, Saudi Arabia" locality line

Availability badge/line: "Available 24/7 · Hourly, Weekly, Monthly & Long-Term Bookings"

Primary CTA: Call Now — 0570567188 · Secondary CTA: Request a Quote

Real, non-generic imagery of home service/cleaning/family context

4.3 Trust Indicators (no invented stats)

Professional Service · Reliable & Convenient · Home Service · Riyadh Based · Quick Response · Customer Focused · Available 24/7 · Flexible Hourly/Weekly/Monthly/Long-Term Booking

4.4 Services Grid (6 cards)

Each card: icon/image, title, 1–2 line description, CTA.

Service CTA Maid Services Book Maid Service Home Cleaning Book Cleaning Deep Cleaning Request Deep Cleaning Cooking Services Ask About Cooking Service Child Care Ask About Child Care Elderly Care Ask About Elderly Care

All CTAs route to call or lead form.

4.4a Availability & Booking Options (sub-block under Services)

Show clearly that every service above can be booked on flexible terms:

Hourly — for one-off or occasional needs

Weekly — recurring help on a set day/time

Monthly — ongoing regular service

Long-Term — extended/continuous placement

Pair this with the 24/7 availability message so visitors immediately understand both "how often" and "how soon" they can get service. Present as a small icon row or badge set directly beneath the services grid — not a separate scroll-heavy section. No specific pricing per tier unless pricing is later provided.

4.5 Why Choose Us

Convenient Home Service · Easy Booking · Multiple Home Services in One Place · Riyadh-Focused · Customer-Focused · Available 24/7 · Flexible Hourly, Weekly, Monthly & Long-Term Options. No superlative claims ("No. 1," "100% guaranteed") without proof.

4.6 How It Works (3 steps)

Contact Us — call 0570567188 and describe what you need

Discuss Your Requirement — home, service type, schedule

Arrange Your Service — confirm details and timing Followed by a Call Now CTA.

4.7 Service Areas (Local SEO)

"Maid & Home Services in Riyadh" — mention Riyadh generally; only name specific districts if the business genuinely covers them. Natural copy, not keyword-stuffed.

4.8 Lead Form

Heading: "Need Help at Home? Get in Touch Today" Fields: Name · Phone Number · Service Required (dropdown: the 6 services) · Booking Basis (dropdown: Hourly / Weekly / Monthly / Long-Term) · Preferred Date/Time · Message CTA: Request a Quote Below form: "Prefer to speak directly? Call 0570567188" Client + server-side validation, clear success/error states, minimal required fields.

4.9 Phone Conversion Block

Dedicated high-contrast section: "Need a Maid or Home Service in Riyadh?" → Call Now — 0570567188 (clickable), designed to be the easiest tap on the page on mobile.

4.10 FAQ

What areas do you serve? → Riyadh, Saudi Arabia

What services do you provide? → the 6 listed services

How can I book a service? → call 0570567188

Can I request a quote? → phone or form

Do you provide home services? → yes, at the customer's home

How quickly can I get a response? → call to discuss availability (no fabricated SLA)

Are you available 24/7? → yes, contact us any time on 0570567188

Can I book by the hour, week, month, or long-term? → yes, hourly, weekly, monthly and long-term bookings are all available — call to discuss what fits your needs

4.11 Final CTA

"Looking for Reliable Home Services in Riyadh?" → Call Now (0570567188) + Request a Quote, both prominent.

4.12 Footer

Business name · service list · Riyadh, Saudi Arabia · Phone · Privacy Policy · Terms & Conditions · language switcher.

5. Mobile Conversion Optimization

Sticky bottom Call Now bar (must not obscure content or the form's submit button)

Large tap targets, click-to-call everywhere

No intrusive popups, no heavy animation, no autoplay video backgrounds

Fast load, responsive at all breakpoints, readable type at small sizes

6. Google Ads / Conversion Tracking

Stable, clearly named IDs/classes for GTM / Google Ads conversion tracking, consistent across both language versions:

#call-now

#quote-form

#whatsapp-button

#banner-call (top banner phone link)

#banner-whatsapp (top banner WhatsApp link) Track: phone clicks, Call Now button clicks, form submissions, WhatsApp clicks (including banner variants). No fake/simulated conversion events.

7. SEO (per language)

English target phrases: maid services Riyadh, maid service in Riyadh, cleaning services Riyadh, home cleaning Riyadh, deep cleaning Riyadh, cooking services Riyadh, child care Riyadh, elderly care Riyadh, home care services Riyadh.

Arabic target phrases (natural, not stuffed): خدمات منزلية الرياض، عاملة منزلية الرياض، تنظيف منازل الرياض، تنظيف عميق الرياض، خدمة طبخ الرياض، رعاية أطفال الرياض، رعاية مسنين الرياض.

Per-page requirements: unique SEO title, meta description, one H1, proper H2/H3 hierarchy, semantic HTML, descriptive alt text (translated per language), Open Graph metadata, favicon, canonical URLs, hreflang alternates linking the two versions.

8. Design

Premium, warm, trustworthy, modern Saudi home-services aesthetic. Real imagery of clean homes, professional cleaning, cooking, family/home context — nothing misleading. Avoid: excess animation, heavy video, cluttered nav, too many colors, huge paragraphs, fake reviews/stats/certifications/guarantees.

9. Core Bilingual Copy Reference

Element English Arabic H1 Reliable Maid & Home Care Services in Riyadh خدمات منزلية وعاملات منزل موثوقة في الرياض Subtext Professional cleaning, deep cleaning, cooking, childcare and elderly care services for homes and families in Riyadh. خدمات تنظيف احترافية، تنظيف عميق، طبخ، رعاية أطفال ورعاية مسنين لمنازل وعائلات الرياض. Locality line Serving Riyadh, Saudi Arabia نخدم مدينة الرياض، المملكة العربية السعودية Availability badge Available 24/7 · Hourly, Weekly, Monthly & Long-Term Bookings متوفرون على مدار الساعة طوال أيام الأسبوع · حجز بالساعة، أسبوعي، شهري، أو طويل الأمد Trust: 24/7 Available 24/7 متوفر على مدار الساعة Trust: Flexible booking Flexible Hourly/Weekly/Monthly/Long-Term Booking حجز مرن بالساعة / أسبوعي / شهري / طويل الأمد Booking basis: Hourly Hourly بالساعة Booking basis: Weekly Weekly أسبوعي Booking basis: Monthly Monthly شهري Booking basis: Long-Term Long-Term طويل الأمد Form: Booking Basis Booking Basis نوع الحجز Primary CTA Call Now — 0570567188 اتصل الآن — 0570567188 Secondary CTA Request a Quote اطلب عرض سعر WhatsApp CTA Chat on WhatsApp تواصل عبر واتساب Nav: Services Services خدماتنا Nav: Why Choose Us Why Choose Us لماذا تختارنا Nav: FAQs FAQs الأسئلة الشائعة Nav: Contact Contact تواصل معنا Lead form heading Need Help at Home? Get in Touch Today تحتاج مساعدة في منزلك؟ تواصل معنا اليوم Form: Name Name الاسم Form: Phone Number Phone Number رقم الجوال Form: Service Required Service Required الخدمة المطلوبة Form: Preferred Date/Time Preferred Date/Time الوقت المفضل Form: Message Message ملاحظات Prefer to call line Prefer to speak directly? Call 0570567188 تفضل التحدث مباشرة؟ اتصل على 0570567188 Service: Maid Services Maid Services خدمات العاملة المنزلية Service: Home Cleaning Home Cleaning تنظيف المنازل Service: Deep Cleaning Deep Cleaning تنظيف عميق Service: Cooking Services Cooking Services خدمات الطبخ Service: Child Care Child Care رعاية الأطفال Service: Elderly Care Elderly Care رعاية كبار السن Footer: Privacy Policy Privacy Policy سياسة الخصوصية Footer: Terms & Conditions Terms & Conditions الشروط والأحكام

(Full FAQ, "Why Choose Us," and "How It Works" copy should be translated using this same tone — direct, warm, no exaggerated claims — and reviewed by a native speaker before launch.)

10. Technical Requirements

Mobile-first, responsive, fast-loading, accessible, semantic HTML, optimized images, proper button/link semantics, click-to-call, form validation with clear success/error states, minimal dependencies, minimal animation, deployable on free hosting (e.g., Vercel), correct rendering on Chrome, Safari, Android, iPhone, and desktop browsers — for both / and /ar.

11. Accuracy Guardrail

Do not fabricate: registration numbers, certifications, licenses, years of experience, employee/customer counts, reviews, ratings, awards, guarantees, specific prices, specific service availability, or specific neighborhoods. Use only the information in this brief.

Single objective: generate more qualified phone calls and leads from Google Ads visitors in Riyadh, in whichever language they land on.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://saudi-maid-service.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8ce4894b-b776-4a8e-ab94-a1ccb00840b4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
