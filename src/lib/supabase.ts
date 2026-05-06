/**
 * Supabase klient pre Astro build-time fetch.
 * Používa anon key (RLS ho obmedzí na published záznamy).
 *
 * Premenné prostredia (Netlify Site settings → Environment variables):
 *   - SUPABASE_URL       — napr. https://xxxxx.supabase.co
 *   - SUPABASE_ANON_KEY  — anon (public) kľúč z Supabase dashboardu
 *
 * V .env súbore lokálne (nie pushnúť do gitu, je v .gitignore):
 *   SUPABASE_URL=...
 *   SUPABASE_ANON_KEY=...
 */
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL      = import.meta.env.SUPABASE_URL      || process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  // Build čas: warn, ale nezhoď — zostane to fungovať s prázdnym contentom (fallback)
  console.warn(
    '[supabase] Chýbajú env premenné SUPABASE_URL alebo SUPABASE_ANON_KEY. ' +
    'Build pokračuje s prázdnym contentom. Nastav ich v Netlify alebo lokálnom .env súbore.'
  );
}

export const supabase: SupabaseClient | null =
  SUPABASE_URL && SUPABASE_ANON_KEY
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: { persistSession: false },
      })
    : null;
