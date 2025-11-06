import { NextResponse } from "next/server";
import { leadSchema, type LeadInput } from "@/lib/validators";
import { sendLeadEmail } from "@/lib/mailer";
import { sendLeadToCrm } from "@/lib/crm";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
  if (!checkRateLimit(ip, 10, 60000)) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }
  try {
    const json = await req.json();
    const parsed = leadSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { errors: parsed.error.flatten() },
        { status: 422 }
      );
    }

    const lead: LeadInput = {
      ...parsed.data,
      referrer: parsed.data.referrer || req.headers.get("referer") || undefined,
    };
    // Honeypot check
    if (lead.hp && lead.hp.trim() !== "") {
      return NextResponse.json({ error: "Bad request" }, { status: 400 });
    }
    console.log("NEW_LEAD", lead);
    const to = process.env.LEADS_TO_EMAIL;
    if (to) {
      try {
        await sendLeadEmail(lead as Record<string, unknown>, {
          to,
          from: process.env.LEADS_FROM_EMAIL || "noreply@resend.dev",
          subject: `Лид с сайта: ${lead.service}`,
        });
      } catch (e) {
        console.error("RESEND_ERROR", e);
      }
    }

    // CRM (optional)
    await sendLeadToCrm(lead);

    return NextResponse.json({ success: true });
  } catch (_e: unknown) {
    console.error("LEAD_ERROR", _e);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
