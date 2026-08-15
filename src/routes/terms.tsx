import { createFileRoute, Link } from "@tanstack/react-router";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-content";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Riyadh Home Care" },
      {
        name: "description",
        content:
          "Terms for booking maid, cleaning, cooking, child care and elderly care services in Riyadh.",
      },
      { property: "og:title", content: "Terms & Conditions | Riyadh Home Care" },
      {
        property: "og:description",
        content: "Terms that apply to home service bookings arranged by phone or form.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <main className="section-x py-14">
      <Link to="/" className="text-sm font-bold text-primary underline-offset-4 hover:underline">
        ← Home
      </Link>
      <h1 className="mt-6 text-3xl font-extrabold text-foreground">Terms &amp; Conditions</h1>
      <div className="mt-6 max-w-2xl space-y-4 text-muted-foreground">
        <p>
          Submitting the form or calling us is a request for service, not a confirmed
          booking. A booking is confirmed once we agree the service, schedule and details
          with you directly.
        </p>
        <p>
          Services are provided at the customer&apos;s home in Riyadh, Saudi Arabia, on an
          hourly, weekly, monthly or long-term basis as agreed.
        </p>
        <p>
          To change or cancel an arranged service, contact us as early as possible on{" "}
          <a href={PHONE_TEL} className="font-bold text-primary">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>

      <h2 dir="rtl" className="mt-12 text-2xl font-extrabold text-foreground">
        الشروط والأحكام
      </h2>
      <div dir="rtl" className="mt-4 max-w-2xl space-y-4 text-muted-foreground">
        <p>
          إرسال النموذج أو الاتصال بنا يُعد طلب خدمة وليس حجزاً مؤكداً. يتم تأكيد الحجز بعد
          الاتفاق معك مباشرة على الخدمة والموعد والتفاصيل.
        </p>
        <p>
          تُقدَّم الخدمات في منزل العميل داخل مدينة الرياض، بالساعة أو أسبوعياً أو شهرياً أو
          طويل الأمد حسب الاتفاق.
        </p>
        <p>
          لتعديل الخدمة أو إلغائها، يرجى التواصل معنا في أقرب وقت على{" "}
          <a href={PHONE_TEL} className="font-bold text-primary">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
