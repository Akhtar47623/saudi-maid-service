import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(25)
    .regex(/^[+0-9\s()-]+$/),
  service: z.string().trim().min(1).max(80),
  basis: z.string().trim().min(1).max(40),
  datetime: z.string().trim().max(80).optional().default(""),
  message: z.string().trim().max(1000).optional().default(""),
  lang: z.enum(["en", "ar"]),
});

const LEAD_INBOX = "maidserviceksa@gmail.com";
const RESEND_API_URL = "https://api.resend.com/emails";

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const resendApiKey = process.env["RESEND_API_KEY"];
    if (!resendApiKey) {
      console.error("[lead] email not configured");
      throw new Error("Email service is not configured");
    }

    const sender = process.env["RESEND_FROM"] ?? "Riyadh Home Care <onboarding@resend.dev>";

    const rows: Array<[string, string]> = [
      ["Name", data.name],
      ["Phone", data.phone],
      ["Service", data.service],
      ["Booking basis", data.basis],
      ["Preferred time", data.datetime || "—"],
      ["Message", data.message || "—"],
      ["Language", data.lang === "ar" ? "Arabic" : "English"],
      ["Submitted", new Date().toISOString()],
    ];

    const submittedAt = `${new Intl.DateTimeFormat("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Riyadh",
    }).format(new Date())} (Riyadh time)`;
    const formattedRows: Array<[string, string]> = rows.map(([label, value]) => {
      if (label === "Preferred time" && !data.datetime) return [label, "Not specified"];
      if (label === "Message" && !data.message) return [label, "No additional message"];
      if (label === "Submitted") return [label, submittedAt];
      return [label, value] as [string, string];
    });

    const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;color:#182230;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f7fb;padding:32px 16px;"><tr><td align="center">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:620px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 18px rgba(24,34,48,.08);">
      <tr><td style="padding:28px 32px;background:#0f766e;color:#fff;"><p style="margin:0 0 6px;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#ccfbf1;">Riyadh Home Care</p><h1 style="margin:0;font-size:26px;line-height:34px;color:#fff;">New quote request</h1></td></tr>
      <tr><td style="padding:32px;"><p style="margin:0 0 24px;font-size:16px;line-height:24px;color:#475467;">A new customer has requested a home-care quote. Their details are below.</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e4e7ec;border-radius:10px;border-collapse:separate;border-spacing:0;overflow:hidden;">
          ${formattedRows.map(([label, value], index) => `<tr><td style="width:38%;padding:14px 16px;background:#f9fafb;border-bottom:${index === formattedRows.length - 1 ? "0" : "1px solid #e4e7ec"};font-size:14px;font-weight:700;line-height:20px;color:#344054;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:14px 16px;border-bottom:${index === formattedRows.length - 1 ? "0" : "1px solid #e4e7ec"};font-size:14px;line-height:20px;color:#182230;white-space:pre-wrap;vertical-align:top;">${escapeHtml(value)}</td></tr>`).join("")}
        </table>
        <p style="margin:24px 0 0;font-size:13px;line-height:20px;color:#667085;">Please contact the customer using the phone number above to follow up on this request.</p>
      </td></tr>
      <tr><td style="padding:18px 32px;background:#f9fafb;border-top:1px solid #eaecf0;font-size:12px;line-height:18px;color:#667085;">This notification was sent from the Riyadh Home Care website.</td></tr>
    </table>
  </td></tr></table>
</body></html>`;

    const send = () =>
      fetch(RESEND_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: sender,
          to: [LEAD_INBOX],
          subject: `New quote request — ${data.name} (${data.phone})`,
          html,
          text: formattedRows.map(([k, v]) => `${k}: ${v}`).join("\n"),
        }),
      });

    const response = await send();

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`[lead] email send failed [${response.status}]: ${errorBody}`);
      throw new Error(`Email send failed [${response.status}]: ${errorBody}`);
    }

    return { ok: true as const };
  });
