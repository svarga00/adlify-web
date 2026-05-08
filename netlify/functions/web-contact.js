/**
 * Netlify Function: web-contact
 * 
 * Endpoint: POST /.netlify/functions/web-contact
 * 
 * Prijíma JSON s poľami: name, email, company, message
 * Posiela e-mail cez Resend API na info@adlify.eu.
 * 
 * Premenné prostredia (Netlify Site settings → Environment variables):
 *   - RESEND_API_KEY    — API kľúč z resend.com (tvar: re_xxx...)
 *   - CONTACT_TO_EMAIL  — kam posielať (default: info@adlify.eu)
 *   - CONTACT_FROM      — odosielateľ (default: "Adlify Web <noreply@adlify.eu>")
 * 
 * Anti-spam: jednoduchý honeypot field "_gotcha" — keď je vyplnený, ticho ignorujeme.
 */

export default async (req) => {
  // CORS pre prípadné fetch z iných domén (default: same-origin)
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  // Parse body
  let body;
  try {
    body = await req.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  const { name = '', email = '', company = '', message = '', plan = '', period = '', topic = '', phone = '', source = '', _gotcha = '' } = body;

  // Honeypot: ak je vyplnený, predstierame úspech a vyhodíme
  if (_gotcha) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  // Validácia
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Chýbajú povinné polia (meno, e-mail, správa).' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Neplatný e-mail.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  const RESEND_API_KEY  = process.env.RESEND_API_KEY;
  const TO              = process.env.CONTACT_TO_EMAIL || 'info@adlify.eu';
  const FROM            = process.env.CONTACT_FROM     || 'Adlify Web <noreply@adlify.eu>';

  if (!RESEND_API_KEY) {
    console.error('[web-contact] RESEND_API_KEY nie je nastavený v Netlify env vars.');
    return new Response(JSON.stringify({ error: 'Server konfiguračná chyba.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  // Prepare email content
  const safeText = (s) => String(s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
  const subject = plan
    ? `Záujem o plán ${plan} — ${name}`
    : `Nová správa z webu — ${name}`;

  const planRow = plan
    ? `<tr><td style="padding: 8px 0; color: #6b6b6b;">Záujem o plán</td><td style="padding: 8px 0; font-weight: 700; color: #F16434;">${safeText(plan)}${period ? ` <span style="color: #6b6b6b; font-weight: 400;">(${safeText(period)})</span>` : ''}</td></tr>`
    : '';

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="font-family: -apple-system, system-ui, sans-serif; background: #f5f4f1; padding: 32px; color: #0a0a0a;">
      <div style="max-width: 560px; margin: 0 auto; background: white; border-radius: 16px; padding: 32px; border: 1px solid rgba(0,0,0,0.08);">
        <div style="font-family: ui-monospace, monospace; font-size: 11px; color: #6b6b6b; letter-spacing: 0.05em; margin-bottom: 8px;">[ ${plan ? 'PRICING ZÁUJEM' : 'NOVÝ KONTAKT'} ]</div>
        <h1 style="font-size: 22px; font-weight: 700; letter-spacing: -0.02em; margin: 0 0 24px 0;">${plan ? `Záujem o plán ${safeText(plan)}` : 'Nová správa z webu'}</h1>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          ${planRow}
          <tr><td style="padding: 8px 0; color: #6b6b6b; width: 140px;">Meno</td><td style="padding: 8px 0; font-weight: 600;">${safeText(name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #6b6b6b;">E-mail</td><td style="padding: 8px 0; font-weight: 600;"><a href="mailto:${safeText(email)}" style="color: #F16434;">${safeText(email)}</a></td></tr>
          ${phone ? `<tr><td style="padding: 8px 0; color: #6b6b6b;">Telefón</td><td style="padding: 8px 0; font-weight: 600;"><a href="tel:${safeText(phone.replace(/\s/g, ''))}" style="color: #F16434;">${safeText(phone)}</a></td></tr>` : ''}
          ${company ? `<tr><td style="padding: 8px 0; color: #6b6b6b;">Firma / Web</td><td style="padding: 8px 0; font-weight: 600;">${safeText(company)}</td></tr>` : ''}
          ${topic ? `<tr><td style="padding: 8px 0; color: #6b6b6b;">Téma</td><td style="padding: 8px 0; font-weight: 600;">${safeText(topic)}</td></tr>` : ''}
          ${source ? `<tr><td style="padding: 8px 0; color: #6b6b6b;">Zdroj</td><td style="padding: 8px 0; font-size: 12px; color: #6b6b6b;">${safeText(source)}</td></tr>` : ''}
        </table>

        <div style="margin-top: 24px; padding: 16px; background: #f5f4f1; border-radius: 12px; border-left: 3px solid #F16434;">
          <div style="font-family: ui-monospace, monospace; font-size: 10px; color: #6b6b6b; letter-spacing: 0.05em; margin-bottom: 8px;">SPRÁVA</div>
          <div style="white-space: pre-wrap; line-height: 1.55;">${safeText(message)}</div>
        </div>

        <p style="margin-top: 32px; font-size: 12px; color: #6b6b6b;">Prijatá z formulára na adlify.eu — ${new Date().toLocaleString('sk-SK', { timeZone: 'Europe/Bratislava' })}</p>
      </div>
    </body>
    </html>
  `;

  const text = `${plan ? `Záujem o plán ${plan}${period ? ` (${period})` : ''}` : 'Nová správa z webu Adlify'}

Meno: ${name}
E-mail: ${email}
${company ? `Firma / Web: ${company}\n` : ''}${plan ? `Plán: ${plan}${period ? ` (${period})` : ''}\n` : ''}
Správa:
${message}

---
Prijatá: ${new Date().toLocaleString('sk-SK', { timeZone: 'Europe/Bratislava' })}
  `.trim();

  // Posielame e-mail cez Resend
  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject,
        html,
        text,
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error('[web-contact] Resend API error:', resp.status, errText);
      return new Response(JSON.stringify({ error: 'Nepodarilo sa odoslať e-mail.' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  } catch (err) {
    console.error('[web-contact] fetch error:', err);
    return new Response(JSON.stringify({ error: 'Sieťová chyba pri odoslaní.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};
