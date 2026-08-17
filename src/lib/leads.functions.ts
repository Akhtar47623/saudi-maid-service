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

const LEAD_INBOX = "njeerijully@gmail.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const lovableApiKey = process.env["LOVABLE_API_KEY"];
    const resendApiKey = process.env["RESEND_API_KEY"];
    if (!lovableApiKey || !resendApiKey) {
      console.error("[lead] email not configured");
      throw new Error("Email service is not configured");
    }

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

    const html = `
      <h2>New quote request</h2>
      <table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="border:1px solid #ddd"><strong>${k}</strong></td><td style="border:1px solid #ddd">${escapeHtml(v)}</td></tr>`,
          )
          .join("")}
      </table>
    `;

    const response = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableApiKey}`,
        "X-Connection-Api-Key": resendApiKey,
      },
      body: JSON.stringify({
        from: "Website Leads <onboarding@resend.dev>",
        to: [LEAD_INBOX],
        reply_to: undefined,
        subject: `New quote request — ${data.name} (${data.phone})`,
        html,
        text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`[lead] email send failed [${response.status}]: ${errorBody}`);
      throw new Error(`Email send failed [${response.status}]: ${errorBody}`);
    }

    return { ok: true as const };
  });
