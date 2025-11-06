import { Resend } from "resend";

type SendLeadOptions = {
  to: string;
  from?: string;
  subject?: string;
  html?: string;
};

export async function sendLeadEmail(
  lead: Record<string, unknown>,
  opts: SendLeadOptions
) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("RESEND_DISABLED", { lead, opts });
    return { id: "disabled" };
  }

  const resend = new Resend(apiKey);
  const from = opts.from || "noreply@resend.dev";
  const subject = opts.subject || "Новая заявка с сайта";
  const html =
    opts.html ||
    `<h2>Новый лид</h2><pre>${escapeHtml(JSON.stringify(lead, null, 2))}</pre>`;

  const { data, error } = await resend.emails.send({
    from,
    to: opts.to,
    subject,
    html,
  });
  if (error) throw error;
  return data;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}


