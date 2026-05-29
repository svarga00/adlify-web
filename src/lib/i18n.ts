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
export const EXTRA_LANGS: Lang[] = ['cs', 'hu', 'en', 'de'];
// Na vypnutie cudzích jazykov: export const EXTRA_LANGS: Lang[] = [];

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
 * Preklad top-level ciest (segmentov) podľa jazyka.
 * Kľúč = kanonický SK slug, hodnota = { lang: lokalizovaný slug }.
 * Detail slugy (google-ads, eshopy...) sa NEPREKLADAJÚ — sú to vlastné názvy.
 */
export const PATH_SLUGS: Record<string, Record<Lang, string>> = {
  'sluzby':              { sk: 'sluzby',              cs: 'sluzby',         hu: 'szolgaltatasok', en: 'services',     de: 'leistungen' },
  'odvetvia':            { sk: 'odvetvia',            cs: 'obory',          hu: 'iparagak',       en: 'industries',   de: 'branchen' },
  'cennik':              { sk: 'cennik',              cs: 'cenik',          hu: 'arak',           en: 'pricing',      de: 'preise' },
  'o-nas':               { sk: 'o-nas',               cs: 'o-nas',          hu: 'rolunk',         en: 'about',        de: 'ueber-uns' },
  'kontakt':             { sk: 'kontakt',             cs: 'kontakt',        hu: 'kapcsolat',      en: 'contact',      de: 'kontakt' },
  'ako-to-funguje':      { sk: 'ako-to-funguje',      cs: 'jak-to-funguje', hu: 'hogyan-mukodik', en: 'how-it-works', de: 'so-funktioniert-es' },
  'faq':                 { sk: 'faq',                 cs: 'faq',            hu: 'gyik',           en: 'faq',          de: 'faq' },
  's-cim-pracujeme':     { sk: 's-cim-pracujeme',     cs: 's-cim-pracujeme',hu: 'eszkozeink',     en: 'our-stack',    de: 'unsere-tools' },
  'pripadove-studie':    { sk: 'pripadove-studie',    cs: 'pripadove-studie',hu: 'esettanulmanyok',en: 'case-studies', de: 'fallstudien' },
  'blog':                { sk: 'blog',                cs: 'blog',           hu: 'blog',           en: 'blog',         de: 'blog' },
  'cookies':             { sk: 'cookies',             cs: 'cookies',        hu: 'cookie-k',       en: 'cookies',      de: 'cookies' },
  'ochrana-udajov':      { sk: 'ochrana-udajov',      cs: 'ochrana-udaju',  hu: 'adatvedelem',    en: 'privacy',      de: 'datenschutz' },
  'obchodne-podmienky':  { sk: 'obchodne-podmienky',  cs: 'obchodni-podminky',hu: 'aszf',         en: 'terms',        de: 'agb' },
};

// Reverzná mapa: lokalizovaný slug (akýkoľvek jazyk) → kanonický SK slug
const REVERSE_SLUGS: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  for (const [canonical, langs] of Object.entries(PATH_SLUGS)) {
    for (const slug of Object.values(langs)) {
      map[slug] = canonical;
    }
  }
  return map;
})();

/**
 * Preloží kanonickú SK cestu na lokalizovanú pre daný jazyk.
 * '/sluzby/google-ads' + 'de' → '/leistungen/google-ads'
 * Prvý segment sa prekladá, zvyšok (detail slug) ostáva.
 */
export function localizeSlug(canonicalPath: string, lang: Lang): string {
  const clean = canonicalPath.replace(/^\//, '');
  if (!clean) return '/';
  const segments = clean.split('/');
  const first = segments[0].split('#')[0].split('?')[0];
  const suffix = segments[0].slice(first.length); // #fragment alebo ?query
  if (PATH_SLUGS[first]) {
    segments[0] = PATH_SLUGS[first][lang] + suffix;
  }
  return '/' + segments.join('/');
}

/**
 * Z lokalizovaného prvého segmentu zistí kanonický SK slug.
 * 'leistungen' → 'sluzby', 'sluzby' → 'sluzby'
 */
export function canonicalSlug(localizedSlug: string): string {
  return REVERSE_SLUGS[localizedSlug] || localizedSlug;
}

/**
 * Zostaví URL pre konkrétny jazyk. SK = root, ostatné = prefix.
 * Path môže byť kanonická SK cesta ('/sluzby') ALEBO už lokalizovaná
 * ('/de/leistungen', '/en/services') — najprv ju canonicalizujeme.
 * Top-level segment sa potom lokalizuje podľa cieľového jazyka.
 */
export function buildUrl(lang: Lang, path: string): string {
  // Odstráň existujúci lang prefix
  let cleanPath = path.replace(/^\/(cs|hu|en|de)(\/|$)/, '/');
  if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;

  // Canonicalizuj prvý segment (leistungen → sluzby) pred re-lokalizáciou
  const parts = cleanPath.replace(/^\//, '').split('/');
  if (parts[0]) {
    const firstClean = parts[0].split('#')[0].split('?')[0];
    const suffix = parts[0].slice(firstClean.length);
    parts[0] = canonicalSlug(firstClean) + suffix;
  }
  cleanPath = '/' + parts.join('/');

  // Lokalizuj slug segmenty pre cieľový jazyk
  const localized = localizeSlug(cleanPath, lang);
  if (lang === 'sk') return localized;
  return `/${lang}${localized === '/' ? '' : localized}`;
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
