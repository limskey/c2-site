import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RECIPIENT = "info@cyber-coalition.com";
const FROM = "CyberCoalition Website <noreply@cyber-coalition.com>";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const organization = typeof body.organization === "string" ? body.organization.trim() : "";
    const service = typeof body.service === "string" ? body.service.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Persist submission to the database (always — survives even if email fails)
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );
    const { data: row, error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        organization: organization || null,
        service: service || null,
        message,
      })
      .select("id")
      .single();

    if (dbError) throw dbError;

    // Build and send email via Resend if an API key is configured
    const resendKey = Deno.env.get("RESEND_API_KEY");
    let sent = false;

    if (resendKey) {
      const serviceLabel = service
        ? service.charAt(0).toUpperCase() + service.slice(1)
        : "General";

      const html = [
        `<div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;color:#0f172a">`,
        `<h2 style="color:#1e3a8a">New message from the CyberCoalition website</h2>`,
        `<table style="width:100%;border-collapse:collapse;font-size:14px">`,
        `<tr><td style="padding:6px 0;font-weight:600;width:120px">Name:</td><td>${escapeHtml(name)}</td></tr>`,
        `<tr><td style="padding:6px 0;font-weight:600">Email:</td><td>${escapeHtml(email)}</td></tr>`,
        organization
          ? `<tr><td style="padding:6px 0;font-weight:600">Organization:</td><td>${escapeHtml(organization)}</td></tr>`
          : "",
        `<tr><td style="padding:6px 0;font-weight:600">Service:</td><td>${escapeHtml(serviceLabel)}</td></tr>`,
        `</table>`,
        `<h3 style="margin-top:20px;color:#1e3a8a">Message</h3>`,
        `<p style="white-space:pre-wrap;background:#f8fafc;padding:16px;border-radius:8px;border:1px solid #e2e8f0">${escapeHtml(message)}</p>`,
        `<p style="margin-top:24px;font-size:12px;color:#64748b">Submitted via the contact form on cyber-coalition.com</p>`,
        `</div>`,
      ].join("");

      const text = `New message from the CyberCoalition website\n\nName: ${name}\nEmail: ${email}\n${organization ? `Organization: ${organization}\n` : ""}Service: ${serviceLabel}\n\nMessage:\n${message}\n`;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM,
          to: [RECIPIENT],
          reply_to: email,
          subject: `Website contact form: ${name}`,
          html,
          text,
        }),
      });

      sent = res.ok;
      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend error:", res.status, errText);
      }
    } else {
      console.warn("RESEND_API_KEY not set — submission stored only.");
    }

    // Update the sent flag
    await supabase
      .from("contact_submissions")
      .update({ sent })
      .eq("id", row.id);

    return new Response(
      JSON.stringify({ success: true, sent }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("send-contact-email error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to send message." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
