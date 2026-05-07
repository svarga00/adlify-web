/**
 * translations.ts — UI texty Layoutu, navigácie, footera a univerzálnych CTA.
 *
 * Stratégia:
 *  - Navigácia, footer, jazykový switcher, common CTA → tu (vždy preložené)
 *  - Page-specific hero & meta → pageMeta.ts
 *  - Body copy stránok (manifest, sekcie, kalkulačka) → zatiaľ SK fallback,
 *    neskôr nahradíme z `web_pages_content` admin tabuľky
 *
 * Použitie:
 *   import { t } from '../lib/translations';
 *   <a>{t('nav.home', lang)}</a>
 */
import type { Lang } from './i18n';

type Dict = Record<Lang, string>;

const DICT: Record<string, Dict> = {
  // ============ NAVIGATION ============
  'nav.home':              { sk: 'Domov',              cs: 'Domů',                hu: 'Kezdőlap',         en: 'Home',           de: 'Startseite' },
  'nav.services':          { sk: 'Služby',             cs: 'Služby',              hu: 'Szolgáltatások',   en: 'Services',       de: 'Leistungen' },
  'nav.howItWorks':        { sk: 'Ako to funguje',     cs: 'Jak to funguje',      hu: 'Hogyan működik',   en: 'How it works',   de: 'So funktioniert es' },
  'nav.cases':             { sk: 'Prípadové štúdie',   cs: 'Případové studie',    hu: 'Esettanulmányok',  en: 'Case studies',   de: 'Fallstudien' },
  'nav.pricing':           { sk: 'Cenník',             cs: 'Ceník',               hu: 'Árak',             en: 'Pricing',        de: 'Preise' },
  'nav.about':             { sk: 'O nás',              cs: 'O nás',               hu: 'Rólunk',           en: 'About',          de: 'Über uns' },
  'nav.blog':              { sk: 'Blog',               cs: 'Blog',                hu: 'Blog',             en: 'Blog',           de: 'Blog' },
  'nav.faq':               { sk: 'FAQ',                cs: 'FAQ',                 hu: 'GYIK',             en: 'FAQ',            de: 'FAQ' },
  'nav.tools':             { sk: 'S čím pracujeme',   cs: 'S čím pracujeme',     hu: 'Eszközeink',       en: 'Tools',          de: 'Tools' },
  'nav.contact':           { sk: 'Kontakt',            cs: 'Kontakt',             hu: 'Kapcsolat',        en: 'Contact',        de: 'Kontakt' },

  // ============ CTA ============
  'cta.freeConsultation':  { sk: 'Bezplatná konzultácia',     cs: 'Bezplatná konzultace',     hu: 'Ingyenes konzultáció',     en: 'Free consultation',     de: 'Kostenlose Beratung' },
  'cta.freeAudit':         { sk: 'Bezplatný audit',           cs: 'Bezplatný audit',          hu: 'Ingyenes audit',           en: 'Free audit',            de: 'Kostenloser Audit' },
  'cta.freeAudit30':       { sk: 'Bezplatný audit za 30 min', cs: 'Bezplatný audit za 30 min',hu: '30 perces ingyenes audit', en: '30-min free audit',     de: 'Gratis-Audit in 30 Min.' },
  'cta.dontWaste':         { sk: 'NESTRÁCAJTE ČAS',           cs: 'NEZTRÁCEJTE ČAS',          hu: 'NE PAZAROLD AZ IDŐT',      en: "DON'T WASTE TIME",       de: 'KEINE ZEIT VERSCHWENDEN' },
  'cta.writeUs':           { sk: 'Napíšte nám',               cs: 'Napište nám',              hu: 'Írjon nekünk',             en: 'Write to us',           de: 'Schreiben Sie uns' },
  'cta.startNow':          { sk: 'Začať spolupracovať',       cs: 'Začít spolupracovat',      hu: 'Együttműködés indítása',   en: 'Start collaboration',   de: 'Zusammenarbeit beginnen' },

  // ============ FOOTER ============
  'footer.tagline':        { sk: 'Výkonnostný marketing bez prázdnych slov.', cs: 'Výkonnostní marketing bez prázdných slov.', hu: 'Teljesítményalapú marketing üres szavak nélkül.', en: 'Performance marketing without empty words.', de: 'Performance-Marketing ohne leere Worte.' },
  'footer.email':          { sk: 'E-MAIL',             cs: 'E-MAIL',              hu: 'E-MAIL',           en: 'EMAIL',          de: 'E-MAIL' },
  'footer.colNav':         { sk: 'Navigácia',          cs: 'Navigace',            hu: 'Navigáció',        en: 'Navigation',     de: 'Navigation' },
  'footer.colCompany':     { sk: 'Firma',              cs: 'Firma',               hu: 'Cég',              en: 'Company',        de: 'Unternehmen' },
  'footer.colResources':   { sk: 'Zdroje',             cs: 'Zdroje',              hu: 'Források',         en: 'Resources',      de: 'Ressourcen' },
  'footer.copyright':      { sk: 'Všetky práva vyhradené.', cs: 'Všechna práva vyhrazena.', hu: 'Minden jog fenntartva.', en: 'All rights reserved.', de: 'Alle Rechte vorbehalten.' },
  'footer.privacy':        { sk: 'Ochrana údajov',     cs: 'Ochrana údajů',       hu: 'Adatvédelem',      en: 'Privacy',        de: 'Datenschutz' },
  'footer.terms':          { sk: 'Obchodné podmienky', cs: 'Obchodní podmínky',   hu: 'Üzleti feltételek',en: 'Terms',          de: 'AGB' },
  'footer.cookies':        { sk: 'Cookies',            cs: 'Cookies',             hu: 'Cookie-k',         en: 'Cookies',        de: 'Cookies' },
};

/**
 * Vráti lokalizovaný UI text. Ak kľúč chýba, vráti SK fallback alebo kľúč.
 */
export function t(key: string, lang: Lang): string {
  const entry = DICT[key];
  if (!entry) return key;
  return entry[lang] || entry.sk || key;
}
