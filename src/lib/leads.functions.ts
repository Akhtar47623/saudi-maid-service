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

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    console.log("[lead]", JSON.stringify({ ...data, at: new Date().toISOString() }));
    return { ok: true as const };
  });
