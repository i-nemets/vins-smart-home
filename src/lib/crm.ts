import type { LeadInput } from "@/lib/validators";

export type LeadRecord = LeadInput;

export async function sendLeadToCrm(lead: LeadRecord) {
  const hubspotToken = process.env.HUBSPOT_ACCESS_TOKEN;
  const pipedriveToken = process.env.PIPEDRIVE_API_TOKEN;
  const webhookUrl = process.env.CRM_WEBHOOK_URL;

  try {
    if (hubspotToken) {
      await sendToHubSpot(lead, hubspotToken);
      return { ok: true, target: "hubspot" } as const;
    }
    if (pipedriveToken) {
      await sendToPipedrive(lead, pipedriveToken);
      return { ok: true, target: "pipedrive" } as const;
    }
    if (webhookUrl) {
      await sendToWebhook(lead, webhookUrl);
      return { ok: true, target: "webhook" } as const;
    }
    return { ok: false, error: "No CRM configured" } as const;
  } catch (e) {
    console.error("CRM_ERROR", e);
    return { ok: false, error: String(e) } as const;
  }
}

async function sendToHubSpot(lead: LeadRecord, token: string) {
  const {
    name,
    phone,
    email,
    message,
    service,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
    referrer,
  } = lead;

  const props: {
    firstname?: string;
    phone?: string;
    email?: string;
    message?: string;
    service?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    referrer?: string;
  } = {
    firstname: name,
    phone,
    email,
    message,
    service,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
    referrer,
  };
  await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ properties: props }),
  });
}

async function sendToPipedrive(lead: LeadRecord, token: string) {
  const { name, service, message, phone, email } = lead;
  const payload: { title: string; person_id?: number; note: string } = {
    title: `Лид: ${name} — ${service}`,
    person_id: undefined,
    note: `${message}\nТел: ${phone}\nEmail: ${email || "-"}`,
  };
  const url = `https://api.pipedrive.com/v1/leads?api_token=${token}`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

async function sendToWebhook(lead: LeadRecord, url: string) {
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
}
