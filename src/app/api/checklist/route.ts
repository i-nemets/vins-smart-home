import { NextResponse } from "next/server";
import { leadMagnetSchema } from "@/lib/validators";
import { sendLeadEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = leadMagnetSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ errors: parsed.error.flatten() }, { status: 422 });
    }

    const { name, email, hp } = parsed.data;
    if (hp && hp.trim() !== "") {
      return NextResponse.json({ error: "Bad request" }, { status: 400 });
    }

    console.log("CHECKLIST_REQUEST", { name, email });

    // Send checklist PDF via email
    const to = email;
    const from = process.env.LEADS_FROM_EMAIL || "noreply@resend.dev";
    const subject = "Ваш чек‑лист по умному дому от VINS";
    const html = `<h2>Спасибо, ${name}!</h2><p>Держите обещанный чек‑лист.</p><p>Ссылка на скачивание: <a href="${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/downloads/checklist-umnyj-dom.pdf">Скачать PDF</a></p><p>Если есть вопросы — <a href="${process.env.NEXT_PUBLIC_SITE_URL}/kontakty">свяжитесь с нами</a>.</p>`;

    try {
      await sendLeadEmail({ name, email } as Record<string, unknown>, {
        to,
        from,
        subject,
        html,
      });
    } catch (e) {
      console.error("CHECKLIST_EMAIL_ERROR", e);
    }

    return NextResponse.json({ success: true });
  } catch (_e: unknown) {
    console.error("CHECKLIST_ERROR", _e);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

