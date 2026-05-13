/**
 * i18n.ts — jazykový helper pre Adlify-web.
 *
 * Web podporuje 5 jazykov (sk, cs, hu, en, de). Routing:
 *   - SK = root (/, /sluzby, /cennik...)
 *   - ostatné = prefix (/cs/sluzby, /hu/cennik...)
 *
 * Admin (Etapa C) ukladá prekladateľné polia v Supabase ako JSONB
 * `{sk, cs, hu, en, de}`. Tento súbor poskytuje:
 *   - LANGS, DEFAULT_LANG, LANG_CODES (typy + konštanty)
 *   - pickLang(value, lang)               — vyberie 1 jazyk z JSONB so SK fallbackom
 *   - flattenCase / flattenPost / flattenService — sploští celý záznam
 *   - buildUrl(lang, path)                — zostaví URL pre daný jazyk
 *   - localizePath(pathname)              — odstráni lang prefix
 */

export type Lang = 'sk' | 'cs' | 'hu' | 'en' | 'de';

export const LANG_CODES: Lang[] = ['sk', 'cs', 'hu', 'en', 'de'];
export const DEFAULT_LANG: Lang = 'sk';

export const LANGS = [
  { code: 'sk' as const, label: 'Slovenčina', short: 'SK', locale: 'sk_SK' },
  { code: 'cs' as const, label: 'Čeština',    short: 'CS', locale: 'cs_CZ' },
  { code: 'hu' as const, label: 'Magyar',     short: 'HU', locale: 'hu_HU' },
  { code: 'en' as const, label: 'English',    short: 'EN', locale: 'en_US' },
  { code: 'de' as const, label: 'Deutsch',    short: 'DE', locale: 'de_DE' },
];

/**
 * Jazyky ktoré sa AKTUÁLNE generujú.
 * Keď bude preklad hotový, pridaj kód sem.
 * Prázdne = len SK (default, bez prefixu).
 */
export const EXTRA_LANGS: Lang[] = [];
// Keď budú preklady hotové, odkomentuj:
// export const EXTRA_LANGS: Lang[] = ['cs', 'hu', 'en', 'de'];

// ============================================================
// JSONB picker
// ============================================================

/**
 * Vyberie hodnotu z JSONB lang objektu s fallbackom.
 * - Ak je `value` string (admin ešte nezmigrovaný), vráti ho rovno.
 * - Ak je objekt {sk, cs, hu, en, de}, vyberie podľa lang, fallback na SK, potom EN.
 * - Ak je null/undefined/prázdne, vráti ''.
 */
export function pickLang(value: unknown, lang: Lang): string {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'object') {
    const o = value as Record<string, unknown>;
    const candidates = [lang, 'sk', 'en'];
    for (const k of candidates) {
      const v = o[k];
      if (typeof v === 'string' && v.trim() !== '') return v;
    }
    // Posledný fallback — ľubovoľný neprázdny string v objekte
    for (const v of Object.values(o)) {
      if (typeof v === 'string' && v.trim() !== '') return v;
    }
  }
  return '';
}

// ============================================================
// URL helpers
// ============================================================

/**
 * Zostaví URL pre konkrétny jazyk. SK = root, ostatné = prefix.
 * Path môže byť '/sluzby', '/cennik', '/sluzby/seo' atď.
 */
export function buildUrl(lang: Lang, path: string): string {
  // Odstráň existujúci lang prefix
  let cleanPath = path.replace(/^\/(cs|hu|en|de)(\/|$)/, '/');
  if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
  if (lang === 'sk') return cleanPath;
  return `/${lang}${cleanPath === '/' ? '' : cleanPath}`;
}

/**
 * Odstráni lang prefix z pathname → vráti "kanonickú" cestu.
 * /cs/sluzby → /sluzby, /sluzby → /sluzby
 */
export function localizePath(pathname: string): string {
  return pathname.replace(/^\/(cs|hu|en|de)(\/|$)/, '/');
}

/**
 * Z URL paramu zistí lang. Defaultuje na 'sk' ak nie je validný.
 */
export function resolveLang(param: unknown): Lang {
  if (typeof param === 'string' && (LANG_CODES as string[]).includes(param)) {
    return param as Lang;
  }
  return DEFAULT_LANG;
}
