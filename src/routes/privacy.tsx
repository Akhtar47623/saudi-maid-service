import { createFileRoute, Link } from "@tanstack/react-router";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-content";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Riyadh Home Care" },
      {
        name: "description",
        content:
          "How we handle the contact details you share when requesting maid and home care services in Riyadh.",
      },
      { property: "og:title", content: "Privacy Policy | Riyadh Home Care" },
      {
        property: "og:description",
        content: "How we use the information you send through our quote request form.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <main className="section-x py-14">
      <Link to="/" className="text-sm font-bold text-primary underline-offset-4 hover:underline">
        ← Home
      </Link>
      <h1 className="mt-6 text-3xl font-extrabold text-foreground">Privacy Policy</h1>
      <div className="mt-6 max-w-2xl space-y-4 text-muted-foreground">
        <p>
          We collect the name, phone number, service details and any message you submit
          through our quote request form, or share with us by phone or WhatsApp.
        </p>
        <p>
          This information is used only to respond to your enquiry and arrange the home
          service you requested. We do not sell it to third parties.
        </p>
        <p>
          To ask about the information you have shared, or to request its deletion, call{" "}
          <a href={PHONE_TEL} className="font-bold text-primary">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>

      <h2 dir="rtl" className="mt-12 text-2xl font-extrabold text-foreground">
        سياسة الخصوصية
      </h2>
      <div dir="rtl" className="mt-4 max-w-2xl space-y-4 text-muted-foreground">
        <p>
          نجمع الاسم ورقم الجوال وتفاصيل الخدمة وأي ملاحظات ترسلها عبر نموذج طلب عرض السعر أو
          عبر الاتصال أو واتساب.
        </p>
        <p>
          تُستخدم هذه المعلومات فقط للرد على طلبك وترتيب الخدمة المنزلية المطلوبة، ولا تُباع
          لأي طرف ثالث.
        </p>
        <p>
          للاستفسار عن بياناتك أو طلب حذفها، اتصل على{" "}
          <a href={PHONE_TEL} className="font-bold text-primary">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
