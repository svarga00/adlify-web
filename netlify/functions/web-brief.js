/**
 * Netlify Function: web-brief
 *
 * Endpoint: POST /.netlify/functions/web-brief
 *
 * Prijíma kompletný "web brief" z formulára na /web-brief (skrytá stránka).
 * Posiela 1 e-mail TEBE (info@adlify.eu) so:
 *   - štruktúrovaným textovým briefom (čitateľný prehľad)
 *   - JSON prílohou (web-brief-<firma>-<datum>.json) pripravenou pre Claude Design
 * A 1 potvrdzovací e-mail klientovi (best-effort).
 *
 * Premenné prostredia (Netlify → Environment variables):
 *   - RESEND_API_KEY    — API kľúč z resend.com (re_xxx...)
 *   - CONTACT_TO_EMAIL  — kam posielať (default: info@adlify.eu)
 *   - CONTACT_FROM      — odosielateľ (default: "Adlify Web <noreply@adlify.eu>")
 *
 * Anti-spam: honeypot field "_gotcha".
 */

export default async (req) => {
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

  let body;
  try {
    body = await req.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  // Honeypot
  if (body._gotcha) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  // ── Základná validácia ──────────────────────────────────────────────
  const contactName  = String(body.contactName  || '').trim();
  const contactEmail = String(body.contactEmail || '').trim();
  const companyName  = String(body.companyName  || '').trim();

  if (!contactName || !contactEmail || !companyName) {
    return new Response(JSON.stringify({ error: 'Chýbajú povinné polia (meno, e-mail, názov firmy).' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
    return new Response(JSON.stringify({ error: 'Neplatný e-mail.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO             = process.env.CONTACT_TO_EMAIL || 'info@adlify.eu';
  const FROM           = process.env.CONTACT_FROM     || 'Adlify Web <noreply@adlify.eu>';

  if (!RESEND_API_KEY) {
    console.error('[web-brief] RESEND_API_KEY nie je nastavený.');
    return new Response(JSON.stringify({ error: 'Server konfiguračná chyba.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  // ── Helpers ─────────────────────────────────────────────────────────
  const esc = (s) => String(s ?? '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
  const arr = (v) => Array.isArray(v) ? v : (v ? [v] : []);
  const has = (v) => Array.isArray(v) ? v.length > 0 : (v !== undefined && v !== null && String(v).trim() !== '');
  const yn  = (v) => v === true || v === 'true' || v === 'áno' || v === 'yes';

  const now = new Date();
  const stamp = now.toLocaleString('sk-SK', { timeZone: 'Europe/Bratislava' });
  const isoDate = now.toISOString().slice(0, 10);

  // ── Normalizovaný brief objekt (pre JSON prílohu + Claude Design) ────
  const brief = {
    meta: {
      source: 'adlify.eu/web-brief',
      submittedAt: now.toISOString(),
      submittedAtLocal: stamp,
    },
    kontakt: {
      meno: contactName,
      email: contactEmail,
      telefon: body.contactPhone || '',
      pozicia: body.contactRole || '',
    },
    firma: {
      nazov: companyName,
      odvetvie: body.industry || '',
      odvetvieIne: body.industryOther || '',
      sucasnyWeb: body.currentWebsite || '',
      sidlo: body.location || '',
      pocetZamestnancov: body.companySize || '',
    },
    projekt: {
      typ: body.projectType || '',
      ciele: arr(body.goals),
      cielOther: body.goalsOther || '',
      hlavnaAkcia: body.primaryAction || '',
      deadline: body.deadline || '',
      rozpocet: body.budget || '',
    },
    publikum: {
      cielovaSkupina: body.targetAudience || '',
      vekRozsah: body.ageRange || '',
      jazyky: arr(body.languages),
      trh: arr(body.markets),
    },
    obsah: {
      pocetStranok: body.pageCount || '',
      pozadovaneSekcie: arr(body.sections),
      sekciaOther: body.sectionsOther || '',
      maObsah: body.hasContent || '',
      maLogo: yn(body.hasLogo),
      maFotky: yn(body.hasPhotos),
      potrebujeTexty: yn(body.needsCopywriting),
      funkcie: arr(body.features),
      funkciaOther: body.featuresOther || '',
    },
    dizajn: {
      stylKlucoveSlova: arr(body.styleKeywords),
      farbaPrimarna: body.colorPrimary || '',
      farbaSekundarna: body.colorSecondary || '',
      farbaAkcent: body.colorAccent || '',
      farbyPoznamka: body.colorNote || '',
      typPisma: body.fontStyle || '',
      naladaSvetloTmava: body.themeMode || '',
      inspiracneWeby: body.inspirationSites || '',
      cosaNepaci: body.dislikes || '',
      maBrandManual: yn(body.hasBrandGuide),
    },
    technicke: {
      domena: body.domain || '',
      domenaStatus: body.domainStatus || '',
      hosting: body.hosting || '',
      integracie: arr(body.integrations),
      integraciaOther: body.integrationsOther || '',
      viacjazycny: yn(body.multilingual),
    },
    poznamky: {
      dodatocne: body.notes || '',
    },
  };

  // ── Štruktúrovaný TEXT brief (pre rýchle prečítanie + copy do Claude Design) ──
  const L = [];
  const sec = (t) => { L.push(''); L.push('━━━ ' + t + ' ━━━'); };
  const kv = (k, v) => { if (has(v)) L.push(`${k}: ${Array.isArray(v) ? v.join(', ') : v}`); };

  L.push(`WEB BRIEF — ${companyName}`);
  L.push(`Prijaté: ${stamp}`);

  sec('KONTAKT');
  kv('Meno', brief.kontakt.meno);
  kv('E-mail', brief.kontakt.email);
  kv('Telefón', brief.kontakt.telefon);
  kv('Pozícia', brief.kontakt.pozicia);

  sec('FIRMA');
  kv('Názov', brief.firma.nazov);
  kv('Odvetvie', brief.firma.odvetvie === 'iné' ? brief.firma.odvetvieIne : brief.firma.odvetvie);
  kv('Súčasný web', brief.firma.sucasnyWeb);
  kv('Sídlo / pôsobnosť', brief.firma.sidlo);
  kv('Veľkosť firmy', brief.firma.pocetZamestnancov);

  sec('PROJEKT');
  kv('Typ projektu', brief.projekt.typ);
  kv('Ciele webu', brief.projekt.ciele);
  kv('Iný cieľ', brief.projekt.cielOther);
  kv('Hlavná akcia návštevníka', brief.projekt.hlavnaAkcia);
  kv('Deadline', brief.projekt.deadline);
  kv('Rozpočet', brief.projekt.rozpocet);

  sec('PUBLIKUM');
  kv('Cieľová skupina', brief.publikum.cielovaSkupina);
  kv('Vek', brief.publikum.vekRozsah);
  kv('Jazyky', brief.publikum.jazyky);
  kv('Trhy', brief.publikum.trh);

  sec('OBSAH & FUNKCIE');
  kv('Počet stránok', brief.obsah.pocetStranok);
  kv('Požadované sekcie', brief.obsah.pozadovaneSekcie);
  kv('Iná sekcia', brief.obsah.sekciaOther);
  kv('Stav obsahu', brief.obsah.maObsah);
  kv('Má logo', brief.obsah.maLogo ? 'áno' : 'nie');
  kv('Má fotky', brief.obsah.maFotky ? 'áno' : 'nie');
  kv('Potrebuje copywriting', brief.obsah.potrebujeTexty ? 'áno' : 'nie');
  kv('Funkcie', brief.obsah.funkcie);
  kv('Iná funkcia', brief.obsah.funkciaOther);

  sec('DIZAJN');
  kv('Štýl (kľúčové slová)', brief.dizajn.stylKlucoveSlova);
  kv('Primárna farba', brief.dizajn.farbaPrimarna);
  kv('Sekundárna farba', brief.dizajn.farbaSekundarna);
  kv('Akcentová farba', brief.dizajn.farbaAkcent);
  kv('Poznámka k farbám', brief.dizajn.farbyPoznamka);
  kv('Typ písma', brief.dizajn.typPisma);
  kv('Svetlá/tmavá', brief.dizajn.naladaSvetloTmava);
  kv('Inšpiračné weby', brief.dizajn.inspiracneWeby);
  kv('Čo sa nepáči', brief.dizajn.cosaNepaci);
  kv('Má brand manuál', brief.dizajn.maBrandManual ? 'áno' : 'nie');

  sec('TECHNICKÉ');
  kv('Doména', brief.technicke.domena);
  kv('Stav domény', brief.technicke.domenaStatus);
  kv('Hosting', brief.technicke.hosting);
  kv('Integrácie', brief.technicke.integracie);
  kv('Iná integrácia', brief.technicke.integraciaOther);
  kv('Viacjazyčný', brief.technicke.viacjazycny ? 'áno' : 'nie');

  if (has(brief.poznamky.dodatocne)) {
    sec('DODATOČNÉ POZNÁMKY');
    L.push(brief.poznamky.dodatocne);
  }

  const textBrief = L.join('\n');

  // ── HTML e-mail TEBE ────────────────────────────────────────────────
  const swatch = (c) => c ? `<span style="display:inline-block;width:14px;height:14px;border-radius:4px;background:${esc(c)};vertical-align:middle;border:1px solid rgba(0,0,0,0.1);margin-right:6px;"></span>${esc(c)}` : '—';
  const list = (a) => a && a.length ? a.map(esc).join(', ') : '—';

  const html = `
  <!DOCTYPE html><html><body style="font-family:-apple-system,system-ui,sans-serif;background:#F5F4F1;padding:32px;color:#0A0A0A;">
    <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:16px;padding:32px;border:1px solid rgba(0,0,0,0.08);">
      <div style="font-family:ui-monospace,monospace;font-size:11px;color:#6B6B6B;letter-spacing:0.05em;margin-bottom:8px;">[ NOVÝ WEB BRIEF ]</div>
      <h1 style="font-size:24px;font-weight:800;letter-spacing:-0.02em;margin:0 0 4px 0;">${esc(companyName)}</h1>
      <div style="font-size:13px;color:#6B6B6B;margin-bottom:24px;">${esc(contactName)} · <a href="mailto:${esc(contactEmail)}" style="color:#F16434;">${esc(contactEmail)}</a>${brief.kontakt.telefon ? ` · ${esc(brief.kontakt.telefon)}` : ''}</div>

      <table style="width:100%;border-collapse:collapse;font-size:13px;line-height:1.5;">
        ${row('Odvetvie', brief.firma.odvetvie === 'iné' ? brief.firma.odvetvieIne : brief.firma.odvetvie)}
        ${row('Súčasný web', brief.firma.sucasnyWeb)}
        ${row('Typ projektu', brief.projekt.typ)}
        ${row('Ciele', list(brief.projekt.ciele))}
        ${row('Hlavná akcia', brief.projekt.hlavnaAkcia)}
        ${row('Cieľová skupina', brief.publikum.cielovaSkupina)}
        ${row('Jazyky', list(brief.publikum.jazyky))}
        ${row('Počet stránok', brief.obsah.pocetStranok)}
        ${row('Sekcie', list(brief.obsah.pozadovaneSekcie))}
        ${row('Funkcie', list(brief.obsah.funkcie))}
        ${row('Štýl', list(brief.dizajn.stylKlucoveSlova))}
        ${row('Písmo', brief.dizajn.typPisma)}
        ${row('Téma', brief.dizajn.naladaSvetloTmava)}
        ${row('Inšpirácia', brief.dizajn.inspiracneWeby)}
        ${row('Doména', [brief.technicke.domena, brief.technicke.domenaStatus].filter(Boolean).join(' · '))}
        ${row('Integrácie', list(brief.technicke.integracie))}
        ${row('Deadline', brief.projekt.deadline)}
        ${row('Rozpočet', brief.projekt.rozpocet)}
      </table>

      <div style="margin-top:20px;padding:16px;background:#F5F4F1;border-radius:12px;">
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#6B6B6B;letter-spacing:0.05em;margin-bottom:10px;">FARBY</div>
        <div style="font-size:13px;line-height:2;">
          Primárna: ${swatch(brief.dizajn.farbaPrimarna)}<br>
          Sekundárna: ${swatch(brief.dizajn.farbaSekundarna)}<br>
          Akcent: ${swatch(brief.dizajn.farbaAkcent)}
          ${brief.dizajn.farbyPoznamka ? `<br><span style="color:#6B6B6B;">${esc(brief.dizajn.farbyPoznamka)}</span>` : ''}
        </div>
      </div>

      ${brief.poznamky.dodatocne ? `
      <div style="margin-top:16px;padding:16px;background:#F5F4F1;border-radius:12px;border-left:3px solid #F16434;">
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#6B6B6B;letter-spacing:0.05em;margin-bottom:8px;">POZNÁMKY KLIENTA</div>
        <div style="white-space:pre-wrap;line-height:1.55;font-size:13px;">${esc(brief.poznamky.dodatocne)}</div>
      </div>` : ''}

      <div style="margin-top:24px;padding:16px;background:#0F2540;border-radius:12px;">
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#A8C5E8;letter-spacing:0.05em;margin-bottom:6px;">→ PRE CLAUDE DESIGN</div>
        <div style="font-size:12px;color:#D6E4F2;line-height:1.5;">Kompletný brief vrátane všetkých polí nájdeš v JSON prílohe (<strong>web-brief-${esc(isoDate)}.json</strong>) aj v textovej forme nižšie — stačí copy-paste do Claude Design.</div>
      </div>

      <div style="margin-top:16px;padding:16px;background:#fff;border:1px dashed rgba(0,0,0,0.15);border-radius:12px;">
        <div style="font-family:ui-monospace,monospace;font-size:10px;color:#6B6B6B;letter-spacing:0.05em;margin-bottom:8px;">TEXTOVÝ BRIEF (copy-paste)</div>
        <pre style="white-space:pre-wrap;font-family:ui-monospace,monospace;font-size:11px;line-height:1.5;color:#1F1F1F;margin:0;">${esc(textBrief)}</pre>
      </div>

      <p style="margin-top:24px;font-size:12px;color:#6B6B6B;">Prijaté z formulára /web-brief — ${esc(stamp)}</p>
    </div>
  </body></html>`;

  function row(k, v) {
    if (!has(v) || v === '—') return '';
    return `<tr><td style="padding:6px 12px 6px 0;color:#6B6B6B;width:140px;vertical-align:top;">${esc(k)}</td><td style="padding:6px 0;font-weight:600;">${esc(v)}</td></tr>`;
  }

  // JSON príloha (base64)
  const jsonStr = JSON.stringify(brief, null, 2);
  const jsonB64 = Buffer.from(jsonStr, 'utf-8').toString('base64');
  const safeCompany = companyName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'firma';
  const filename = `web-brief-${safeCompany}-${isoDate}.json`;

  // ── Odoslanie ───────────────────────────────────────────────────────
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
        reply_to: contactEmail,
        subject: `Web brief — ${companyName}`,
        html,
        text: textBrief,
        attachments: [
          { filename, content: jsonB64 },
        ],
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error('[web-brief] Resend error:', resp.status, errText);
      return new Response(JSON.stringify({ error: 'Nepodarilo sa odoslať e-mail.' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Potvrdenie klientovi (best-effort)
    try {
      const fname = contactName.split(' ')[0];
      const confirmHtml = `
      <!DOCTYPE html><html><body style="font-family:-apple-system,system-ui,sans-serif;background:#F5F4F1;padding:32px;color:#0A0A0A;">
        <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;padding:40px;border:1px solid rgba(0,0,0,0.08);">
          <div style="font-family:ui-monospace,monospace;font-size:11px;color:#6B6B6B;letter-spacing:0.05em;margin-bottom:12px;">[ ADLIFY ]</div>
          <h1 style="font-size:28px;font-weight:800;letter-spacing:-0.025em;margin:0 0 16px 0;line-height:1.15;">Ďakujeme, ${esc(fname)}!</h1>
          <p style="font-size:16px;line-height:1.6;color:#2A2A2A;margin:0 0 24px 0;">Váš podklad pre novú webovú stránku sme prijali. Pripravíme návrh podľa vašich predstáv a ozveme sa vám s prvými vizuálmi.</p>
          <p style="font-size:14px;line-height:1.6;color:#6B6B6B;margin:0;">Ak budeme potrebovať doplniť detail, napíšeme vám na <strong>${esc(contactEmail)}</strong>.</p>
          <hr style="border:none;border-top:1px solid rgba(0,0,0,0.08);margin:32px 0 20px 0;" />
          <p style="font-size:13px;line-height:1.55;color:#6B6B6B;margin:0;">Pekný deň,<br /><strong style="color:#2A2A2A;">tím Adlify</strong></p>
        </div>
      </body></html>`;
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: FROM,
          to: [contactEmail],
          subject: 'Prijali sme váš podklad — Adlify',
          html: confirmHtml,
          text: `Ďakujeme, ${fname}!\n\nVáš podklad pre novú webovú stránku sme prijali. Pripravíme návrh podľa vašich predstáv a ozveme sa vám s prvými vizuálmi.\n\nPekný deň,\ntím Adlify`,
        }),
      });
    } catch (confirmErr) {
      console.error('[web-brief] confirmation email error (non-fatal):', confirmErr);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  } catch (err) {
    console.error('[web-brief] fetch error:', err);
    return new Response(JSON.stringify({ error: 'Sieťová chyba pri odoslaní.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};
