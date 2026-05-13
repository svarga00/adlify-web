#!/usr/bin/env node
/**
 * Bulk translate all Adlify web content from SK to CS, HU, EN, DE.
 * Uses the auto-translate Edge Function.
 *
 * Usage: node translate-all.js
 */

const SUPABASE_URL = 'https://pjdfdedpprrokblxpnzs.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqZGZkZWRwcHJyb2tibHhwbnpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwNTU0NjUsImV4cCI6MjA5MzYzMTQ2NX0.oeBSnRlHTG9uE02AReSFkDhF-Wuyw92-sivzrubfsLg';
const TARGETS = ['cs', 'hu', 'en', 'de'];

// Tables and their JSONB text fields to translate
const TABLES = {
  web_case_studies: [
    'tag', 'name', 'summary', 'hero_subtitle', 'industry', 'duration', 'budget',
    'metric_a_label', 'metric_a_value', 'metric_b_label', 'metric_b_value',
    'challenge', 'approach', 'results', 'testimonial', 'testimonial_by'
  ],
  web_blog_posts: [
    'category', 'title', 'excerpt', 'body', 'author_name', 'author_role'
  ],
  web_services: [
    'title', 'short_desc', 'hero_lead', 'pricing_note'
  ],
  web_testimonials: [
    'quote', 'author_name', 'author_role'
  ],
  web_faq: [
    'question', 'answer'
  ],
  web_pricing: [
    'name', 'subtitle', 'target_audience'
  ]
};

async function fetchTable(table) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?select=*&order=id.asc`, {
    headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }
  });
  if (!res.ok) throw new Error(`Fetch ${table}: ${res.status} ${await res.text()}`);
  return res.json();
}

async function updateRow(table, id, updates) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
    method: 'PATCH',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: JSON.stringify(updates)
  });
  if (!res.ok) {
    const err = await res.text();
    console.error(`  ✗ Update ${table} id=${id}: ${res.status} ${err}`);
    return false;
  }
  return true;
}

async function translate(texts) {
  const res = await fetch(`${SUPABASE_URL}/functions/v1/auto-translate`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      source_lang: 'sk',
      targets: TARGETS,
      texts,
      preserve_html: true,
      context: 'Marketing agency website (Adlify) — Google/Meta Ads services for SMBs. Use formal tone (vykanie in Czech, Siezen in German). Keep brand names, technical terms, and numbers unchanged.'
    })
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Translate error: ${res.status} ${err}`);
  }
  const data = await res.json();
  if (!data.ok) throw new Error(`Translate failed: ${JSON.stringify(data)}`);
  return data.translations; // { cs: {field: text}, hu: {...}, ... }
}

async function processTable(table, fields) {
  console.log(`\n══════ ${table} ══════`);
  const rows = await fetchTable(table);
  console.log(`  ${rows.length} rows`);

  for (const row of rows) {
    const label = row.slug || row.id;
    
    // Collect SK texts that need translation
    const textsToTranslate = {};
    let needsTranslation = false;

    for (const field of fields) {
      const val = row[field];
      if (!val || typeof val !== 'object') continue;
      const skText = val.sk;
      if (!skText) continue;
      
      // Check if already translated (has all target langs)
      const missingLangs = TARGETS.filter(l => !val[l]);
      if (missingLangs.length === 0) continue;
      
      textsToTranslate[field] = skText;
      needsTranslation = true;
    }

    if (!needsTranslation) {
      console.log(`  ✓ ${label} — already translated`);
      continue;
    }

    const fieldCount = Object.keys(textsToTranslate).length;
    console.log(`  → ${label} — translating ${fieldCount} fields...`);

    try {
      const translations = await translate(textsToTranslate);
      
      // Build update object: merge translations into existing JSONB
      const updates = {};
      for (const field of Object.keys(textsToTranslate)) {
        const existing = row[field] || {};
        const merged = { ...existing };
        for (const lang of TARGETS) {
          if (translations[lang] && translations[lang][field]) {
            merged[lang] = translations[lang][field];
          }
        }
        updates[field] = merged;
      }

      const ok = await updateRow(table, row.id, updates);
      if (ok) {
        console.log(`  ✓ ${label} — ${fieldCount} fields × ${TARGETS.length} langs`);
      }
    } catch (err) {
      console.error(`  ✗ ${label} — ${err.message}`);
    }

    // Rate limit: wait 1s between rows to not overload Claude API
    await new Promise(r => setTimeout(r, 1000));
  }
}

async function main() {
  console.log('═══════════════════════════════════════');
  console.log('  ADLIFY BULK TRANSLATE: SK → CS/HU/EN/DE');
  console.log('═══════════════════════════════════════');

  for (const [table, fields] of Object.entries(TABLES)) {
    try {
      await processTable(table, fields);
    } catch (err) {
      console.error(`\n✗ Table ${table} failed: ${err.message}`);
    }
  }

  console.log('\n═══════════════════════════════════════');
  console.log('  DONE — trigger web rebuild to apply');
  console.log('═══════════════════════════════════════');
}

main().catch(console.error);
