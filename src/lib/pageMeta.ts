/**
 * pageMeta.ts — Lokalizované meta + hero pre statické stránky.
 *
 * Pre každú stránku 5 jazykových verzií:
 *  - title: <title> + og:title
 *  - description: meta description + og:description
 *  - hero: { num, kind, title, titleAccent, lead }
 *
 * Stránky to konzumujú ako:
 *   const meta = pageMeta.cennik[lang];
 */
import type { Lang } from './i18n';

export interface PageHeroProps {
  num: string;
  kind: string;
  title: string;
  titleAccent: string;
  lead: string;
}

export interface PageMeta {
  title: string;
  description: string;
  hero?: PageHeroProps;
}

type LangPageMeta = Record<Lang, PageMeta>;

// ============================================================
// HOMEPAGE
// ============================================================
const home: LangPageMeta = {
  sk: { title: 'Adlify — Výkonnostný marketing pre malé a stredné firmy',
        description: 'Online marketingu sa venujeme od roku 2014. 50+ klientov, €250k+ spravovaný budget, 5× priemerný ROAS. Bez viazanosti, od 149 € mesačne.' },
  cs: { title: 'Adlify — Výkonnostní marketing pro malé a střední firmy',
        description: 'Online marketingu se věnujeme od roku 2014. 50+ klientů, €250k+ spravovaný budget, 5× průměrný ROAS. Bez vázanosti, od 149 € měsíčně.' },
  hu: { title: 'Adlify — Teljesítményalapú marketing kis- és középvállalkozásoknak',
        description: '2014 óta foglalkozunk online marketinggel. 50+ ügyfél, €250k+ kezelt költségvetés, 5× átlagos ROAS. Kötöttség nélkül, havi 149 €-tól.' },
  en: { title: 'Adlify — Performance marketing for small and mid-sized businesses',
        description: "We've been doing online marketing since 2014. 50+ clients, €250k+ managed budget, 5× average ROAS. No commitment, from €149/month." },
  de: { title: 'Adlify — Performance-Marketing für KMU',
        description: 'Online-Marketing machen wir seit 2014. 50+ Kunden, €250k+ verwaltetes Budget, 5× durchschnittlicher ROAS. Keine Bindung, ab 149 €/Monat.' },
};

// ============================================================
// SERVICES
// ============================================================
const services: LangPageMeta = {
  sk: { title: 'Služby — Adlify',
        description: '14 služieb v 5 oblastiach — online marketing, web a aplikácie, automatizácie, grafika a brand, konzultácie. Plus hotové balíky pre konkrétne odvetvia.',
        hero: { num: '002', kind: 'SERVICES', title: 'Čo pre vás vieme', titleAccent: 'zariadiť.', lead: 'Od online marketingu cez tvorbu webov a aplikácií, automatizácie, grafiku a tlač až po konzultácie. Plus hotové balíky pre vaše odvetvie.' } },
  cs: { title: 'Služby — Adlify',
        description: '14 služeb v 5 oblastech — online marketing, web a aplikace, automatizace, grafika a brand, konzultace. Plus hotové balíčky pro konkrétní odvětví.',
        hero: { num: '002', kind: 'SLUŽBY', title: 'Co pro vás umíme', titleAccent: 'zařídit.', lead: 'Od online marketingu přes tvorbu webů a aplikací, automatizace, grafiku a tisk až po konzultace. Plus hotové balíčky pro vaše odvětví.' } },
  hu: { title: 'Szolgáltatások — Adlify',
        description: '14 szolgáltatás 5 területen — online marketing, web és alkalmazások, automatizálás, grafika és brand, konzultáció. Plusz kész csomagok konkrét iparágakra.',
        hero: { num: '002', kind: 'SZOLGÁLTATÁSOK', title: 'Mit tudunk Önnek', titleAccent: 'elintézni.', lead: 'Az online marketingtől a web- és alkalmazásfejlesztésen, automatizáláson, grafikán és nyomtatáson át a konzultációig. Plusz kész csomagok az Ön iparágára.' } },
  en: { title: 'Services — Adlify',
        description: '14 services in 5 areas — online marketing, web & apps, automations, graphics & brand, consulting. Plus ready-made packages for specific industries.',
        hero: { num: '002', kind: 'SERVICES', title: 'What we can', titleAccent: 'handle for you.', lead: 'From online marketing through web & app development, automation, graphics and print, to consulting. Plus ready packages for your industry.' } },
  de: { title: 'Leistungen — Adlify',
        description: '14 Leistungen in 5 Bereichen — Online-Marketing, Web & Apps, Automatisierung, Grafik & Brand, Beratung. Plus fertige Pakete für bestimmte Branchen.',
        hero: { num: '002', kind: 'LEISTUNGEN', title: 'Was wir für Sie', titleAccent: 'erledigen können.', lead: 'Von Online-Marketing über Web- und App-Entwicklung, Automatisierung, Grafik und Druck bis hin zur Beratung. Plus fertige Pakete für Ihre Branche.' } },
};

// ============================================================
// CASES
// ============================================================
const cases: LangPageMeta = {
  sk: { title: 'Prípadové štúdie — Adlify',
        description: '6 príbehov rastu. E-commerce, DTC, B2C aj B2B — reálne čísla, reálni klienti. Tržby +284%, ROAS 6.2×, CPA −42%.',
        hero: { num: '003', kind: 'CASE STUDIES', title: 'Reálne čísla,', titleAccent: 'reálni klienti.', lead: '6 príbehov rastu. E-commerce, DTC, B2C aj B2B — bez retušovaných grafov a marketingových klišé.' } },
  cs: { title: 'Případové studie — Adlify',
        description: '6 příběhů růstu. E-commerce, DTC, B2C i B2B — reálná čísla, reální klienti. Tržby +284%, ROAS 6.2×, CPA −42%.',
        hero: { num: '003', kind: 'CASE STUDIES', title: 'Reálná čísla,', titleAccent: 'reální klienti.', lead: '6 příběhů růstu. E-commerce, DTC, B2C i B2B — bez retušovaných grafů a marketingových klišé.' } },
  hu: { title: 'Esettanulmányok — Adlify',
        description: '6 növekedési történet. E-kereskedelem, DTC, B2C és B2B — valós számok, valós ügyfelek. Bevétel +284%, ROAS 6.2×, CPA −42%.',
        hero: { num: '003', kind: 'ESETTANULMÁNYOK', title: 'Valós számok,', titleAccent: 'valós ügyfelek.', lead: '6 növekedési történet. E-kereskedelem, DTC, B2C és B2B — retusált grafikonok és marketing klisék nélkül.' } },
  en: { title: 'Case studies — Adlify',
        description: '6 growth stories. E-commerce, DTC, B2C and B2B — real numbers, real clients. Revenue +284%, ROAS 6.2×, CPA −42%.',
        hero: { num: '003', kind: 'CASE STUDIES', title: 'Real numbers,', titleAccent: 'real clients.', lead: '6 growth stories. E-commerce, DTC, B2C and B2B — without retouched charts and marketing clichés.' } },
  de: { title: 'Fallstudien — Adlify',
        description: '6 Wachstumsgeschichten. E-Commerce, DTC, B2C und B2B — echte Zahlen, echte Kunden. Umsatz +284%, ROAS 6,2×, CPA −42%.',
        hero: { num: '003', kind: 'FALLSTUDIEN', title: 'Echte Zahlen,', titleAccent: 'echte Kunden.', lead: '6 Wachstumsgeschichten. E-Commerce, DTC, B2C und B2B — ohne retuschierte Diagramme und Marketing-Klischees.' } },
};

// ============================================================
// PRICING
// ============================================================
const pricing: LangPageMeta = {
  sk: { title: 'Cenník — Adlify',
        description: 'Fixný mesačný paušál. Žiadne skryté poplatky. Bez viazanosti — odísť môžete kedykoľvek.',
        hero: { num: '004', kind: 'PRICING', title: 'Jednoduchý cenník.', titleAccent: 'Bez prekvapení.', lead: 'Fixný mesačný paušál. Žiadne skryté poplatky. Bez viazanosti — odísť môžete kedykoľvek.' } },
  cs: { title: 'Ceník — Adlify',
        description: 'Fixní měsíční paušál. Žádné skryté poplatky. Bez vázanosti — odejít můžete kdykoli.',
        hero: { num: '004', kind: 'CENÍK', title: 'Jednoduchý ceník.', titleAccent: 'Bez překvapení.', lead: 'Fixní měsíční paušál. Žádné skryté poplatky. Bez vázanosti — odejít můžete kdykoli.' } },
  hu: { title: 'Árak — Adlify',
        description: 'Fix havi átalány. Nincsenek rejtett díjak. Kötöttség nélkül — bármikor leállíthatja.',
        hero: { num: '004', kind: 'ÁRAK', title: 'Egyszerű árazás.', titleAccent: 'Meglepetések nélkül.', lead: 'Fix havi átalány. Nincsenek rejtett díjak. Kötöttség nélkül — bármikor leállíthatja.' } },
  en: { title: 'Pricing — Adlify',
        description: 'Fixed monthly retainer. No hidden fees. No commitment — cancel anytime.',
        hero: { num: '004', kind: 'PRICING', title: 'Simple pricing.', titleAccent: 'No surprises.', lead: 'Fixed monthly retainer. No hidden fees. No commitment — cancel anytime.' } },
  de: { title: 'Preise — Adlify',
        description: 'Fixe monatliche Pauschale. Keine versteckten Gebühren. Keine Bindung — jederzeit kündbar.',
        hero: { num: '004', kind: 'PREISE', title: 'Einfache Preise.', titleAccent: 'Keine Überraschungen.', lead: 'Fixe monatliche Pauschale. Keine versteckten Gebühren. Keine Bindung — jederzeit kündbar.' } },
};

// ============================================================
// ABOUT
// ============================================================
const about: LangPageMeta = {
  sk: { title: 'O nás — Adlify',
        description: 'Online marketingu sa venujeme od roku 2014. Adlify sme založili preto, aby výkonnostný marketing bol dostupný aj pre živnostníkov a malé firmy — nie len pre veľké e-shopy.',
        hero: { num: '005', kind: 'ABOUT', title: 'Marketing pre tých,', titleAccent: 'na ktorých veľké agentúry zabudli.', lead: 'Online marketingu sa venujeme od roku 2014. Adlify sme založili preto, aby kvalitnú reklamu mohli mať aj živnostníci, malé e-shopy a regionálne firmy — nie len veľkí hráči s rozpočtom 5 000 € mesačne.' } },
  cs: { title: 'O nás — Adlify',
        description: 'Online marketingu se věnujeme od roku 2014. Adlify jsme založili proto, aby byl výkonnostní marketing dostupný i pro živnostníky a malé firmy — ne jen pro velké e-shopy.',
        hero: { num: '005', kind: 'O NÁS', title: 'Marketing pro ty,', titleAccent: 'na které velké agentury zapomněly.', lead: 'Online marketingu se věnujeme od roku 2014. Adlify jsme založili proto, aby kvalitní reklamu mohli mít i živnostníci, malé e-shopy a regionální firmy — ne jen velcí hráči s rozpočtem 5 000 € měsíčně.' } },
  hu: { title: 'Rólunk — Adlify',
        description: '2014 óta foglalkozunk online marketinggel. Az Adlify-t azért alapítottuk, hogy a teljesítményalapú marketing elérhető legyen a kisvállalkozók és kis cégek számára is — ne csak a nagy webshopoknak.',
        hero: { num: '005', kind: 'RÓLUNK', title: 'Marketing azoknak,', titleAccent: 'akikről a nagy ügynökségek elfeledkeztek.', lead: '2014 óta foglalkozunk online marketinggel. Az Adlify-t azért alapítottuk, hogy a minőségi reklám elérhető legyen vállalkozók, kis webshopok és regionális cégek számára is — ne csak a havi 5 000 €-s költségvetéssel rendelkező nagyoknak.' } },
  en: { title: 'About — Adlify',
        description: "We've been doing online marketing since 2014. We founded Adlify to make performance marketing accessible to solopreneurs and small businesses — not just large e-shops.",
        hero: { num: '005', kind: 'ABOUT', title: 'Marketing for those', titleAccent: 'big agencies forgot about.', lead: "We've been doing online marketing since 2014. We founded Adlify so that quality advertising would be available to solopreneurs, small e-shops, and regional businesses — not just big players with €5,000+ monthly budgets." } },
  de: { title: 'Über uns — Adlify',
        description: 'Online-Marketing machen wir seit 2014. Adlify haben wir gegründet, damit Performance-Marketing auch für Selbstständige und kleine Unternehmen zugänglich ist — nicht nur für große Online-Shops.',
        hero: { num: '005', kind: 'ÜBER UNS', title: 'Marketing für die,', titleAccent: 'die große Agenturen vergessen haben.', lead: 'Online-Marketing machen wir seit 2014. Adlify haben wir gegründet, damit qualitatives Werbung auch für Selbstständige, kleine Online-Shops und regionale Firmen zugänglich ist — nicht nur für große Player mit 5 000 €+ Monatsbudget.' } },
};

// ============================================================
// BLOG
// ============================================================
const blog: LangPageMeta = {
  sk: { title: 'Blog — Adlify',
        description: 'Praktické know-how, ktoré môžete použiť hneď. Bez copy-paste clickbaitov. Píšeme z toho, čo reálne robíme pre klientov.',
        hero: { num: '006', kind: 'BLOG', title: 'Know-how,', titleAccent: 'ktoré funguje.', lead: 'Praktické know-how, ktoré môžete použiť hneď. Bez copy-paste clickbaitov — píšeme z toho, čo reálne robíme pre klientov.' } },
  cs: { title: 'Blog — Adlify',
        description: 'Praktické know-how, které můžete použít hned. Bez copy-paste clickbaitů. Píšeme z toho, co reálně děláme pro klienty.',
        hero: { num: '006', kind: 'BLOG', title: 'Know-how,', titleAccent: 'které funguje.', lead: 'Praktické know-how, které můžete použít hned. Bez copy-paste clickbaitů — píšeme z toho, co reálně děláme pro klienty.' } },
  hu: { title: 'Blog — Adlify',
        description: 'Gyakorlatias tudás, amit azonnal használhatsz. Másolt clickbaitek nélkül. Arról írunk, amit valóban csinálunk az ügyfeleinkért.',
        hero: { num: '006', kind: 'BLOG', title: 'Tudás,', titleAccent: 'ami működik.', lead: 'Gyakorlatias tudás, amit azonnal használhatsz. Másolt clickbaitek nélkül — arról írunk, amit valóban csinálunk az ügyfeleinkért.' } },
  en: { title: 'Blog — Adlify',
        description: 'Practical know-how you can use immediately. No copy-paste clickbait. We write about what we actually do for clients.',
        hero: { num: '006', kind: 'BLOG', title: 'Know-how', titleAccent: 'that works.', lead: 'Practical know-how you can use immediately. No copy-paste clickbait — we write about what we actually do for clients.' } },
  de: { title: 'Blog — Adlify',
        description: 'Praktisches Know-how, das Sie sofort nutzen können. Kein Copy-Paste-Clickbait. Wir schreiben über das, was wir wirklich für Kunden tun.',
        hero: { num: '006', kind: 'BLOG', title: 'Know-how,', titleAccent: 'das funktioniert.', lead: 'Praktisches Know-how, das Sie sofort nutzen können. Kein Copy-Paste-Clickbait — wir schreiben über das, was wir wirklich für Kunden tun.' } },
};

// ============================================================
// FAQ
// ============================================================
const faq: LangPageMeta = {
  sk: { title: 'Časté otázky a slovník pojmov — Adlify',
        description: 'Otázky a odpovede o spolupráci, cenách, výsledkoch a tracking. Plus slovník 60+ marketingových pojmov (ROAS, CPA, GA4...) zrozumiteľne vysvetlených.',
        hero: { num: '007', kind: 'FAQ', title: 'Otázky a', titleAccent: 'pojmy.', lead: 'Všetko, čo sa pýtajú klienti pred rozhodnutím + slovník 60+ marketingových pojmov zrozumiteľne pre začiatočníkov.' } },
  cs: { title: 'Časté otázky a slovník pojmů — Adlify',
        description: 'Otázky a odpovědi o spolupráci, cenách, výsledcích a trackingu. Plus slovník 60+ marketingových pojmů (ROAS, CPA, GA4...) srozumitelně vysvětlených.',
        hero: { num: '007', kind: 'FAQ', title: 'Otázky a', titleAccent: 'pojmy.', lead: 'Vše, na co se klienti ptají před rozhodnutím + slovník 60+ marketingových pojmů srozumitelně pro začátečníky.' } },
  hu: { title: 'GYIK és marketing kifejezések — Adlify',
        description: 'Kérdések és válaszok az együttműködésről, árakról, eredményekről és trackingről. Plusz 60+ marketing kifejezés (ROAS, CPA, GA4...) érthetően magyarázva.',
        hero: { num: '007', kind: 'GYIK', title: 'Kérdések és', titleAccent: 'kifejezések.', lead: 'Minden, amit az ügyfelek a döntés előtt kérdeznek + 60+ marketing kifejezés szótára érthetően kezdőknek.' } },
  en: { title: 'FAQ and marketing glossary — Adlify',
        description: "Questions and answers about collaboration, pricing, results, and tracking. Plus a glossary of 60+ marketing terms (ROAS, CPA, GA4...) explained simply.",
        hero: { num: '007', kind: 'FAQ', title: 'Questions and', titleAccent: 'terms.', lead: 'Everything clients ask before deciding + a glossary of 60+ marketing terms explained for beginners.' } },
  de: { title: 'FAQ und Marketing-Glossar — Adlify',
        description: 'Fragen und Antworten zu Zusammenarbeit, Preisen, Ergebnissen und Tracking. Plus ein Glossar mit 60+ Marketing-Begriffen (ROAS, CPA, GA4...) verständlich erklärt.',
        hero: { num: '007', kind: 'FAQ', title: 'Fragen und', titleAccent: 'Begriffe.', lead: 'Alles, was Kunden vor der Entscheidung fragen + ein Glossar mit 60+ Marketing-Begriffen verständlich für Einsteiger.' } },
};

// ============================================================
// CONTACT
// ============================================================
const contact: LangPageMeta = {
  sk: { title: 'Kontakt — Adlify',
        description: 'Bezplatný audit, jasné odporúčania a plán. Bez záväzku, bez predajného tlaku. Odpovedáme rýchlo — väčšinou do 4 hodín počas pracovného dňa.',
        hero: { num: '008', kind: 'CONTACT', title: 'Napíšte nám.', titleAccent: 'Odpovieme rýchlo.', lead: 'Bezplatný audit, jasné odporúčania a plán. Bez záväzku, bez predajného tlaku. Odpovedáme zvyčajne do 4 hodín počas pracovných dní.' } },
  cs: { title: 'Kontakt — Adlify',
        description: 'Bezplatný audit, jasná doporučení a plán. Bez závazku, bez prodejního tlaku. Odpovídáme rychle — většinou do 4 hodin během pracovního dne.',
        hero: { num: '008', kind: 'KONTAKT', title: 'Napište nám.', titleAccent: 'Odpovíme rychle.', lead: 'Bezplatný audit, jasná doporučení a plán. Bez závazku, bez prodejního tlaku. Odpovídáme obvykle do 4 hodin během pracovních dní.' } },
  hu: { title: 'Kapcsolat — Adlify',
        description: 'Ingyenes audit, világos ajánlások és terv. Kötelezettség nélkül, értékesítési nyomás nélkül. Általában 4 órán belül válaszolunk munkaidőben.',
        hero: { num: '008', kind: 'KAPCSOLAT', title: 'Írjon nekünk.', titleAccent: 'Gyorsan válaszolunk.', lead: 'Ingyenes audit, világos ajánlások és terv. Kötelezettség nélkül, értékesítési nyomás nélkül. Általában 4 órán belül válaszolunk munkanapokon.' } },
  en: { title: 'Contact — Adlify',
        description: 'Free audit, clear recommendations, and a plan. No commitment, no sales pressure. We reply fast — usually within 4 hours during business hours.',
        hero: { num: '008', kind: 'CONTACT', title: 'Write to us.', titleAccent: "We'll reply fast.", lead: "Free audit, clear recommendations, and a plan. No commitment, no sales pressure. We typically reply within 4 hours on business days." } },
  de: { title: 'Kontakt — Adlify',
        description: 'Kostenloser Audit, klare Empfehlungen und ein Plan. Ohne Verpflichtung, ohne Verkaufsdruck. Antwort meist innerhalb von 4 Stunden zur Geschäftszeit.',
        hero: { num: '008', kind: 'KONTAKT', title: 'Schreiben Sie uns.', titleAccent: 'Wir antworten schnell.', lead: 'Kostenloser Audit, klare Empfehlungen und ein Plan. Ohne Verpflichtung, ohne Verkaufsdruck. Wir antworten in der Regel innerhalb von 4 Stunden an Werktagen.' } },
};

// ============================================================
// PARTNERS
// ============================================================
const tools: LangPageMeta = {
  sk: { title: 'S čím pracujeme — Adlify',
        description: 'Honest list nástrojov a platforiem, s ktorými reálne pracujeme každý deň. Reklamy, meranie, analytika, e-mail, e-commerce, AI a kreatíva.',
        hero: { num: '010', kind: 'TOOLS', title: 'Naše', titleAccent: 'pracovné nástroje.', lead: 'Žiadne marketingové tituly. Toto je reálny zoznam platforiem, s ktorými pracujeme každý deň — od Google Ads cez Klaviyo až po server-side tracking. A pri každom napíšeme, kedy a načo ho nasadzujeme.' } },
  cs: { title: 'S čím pracujeme — Adlify',
        description: 'Honest list nástrojů a platforem, se kterými reálně pracujeme každý den. Reklamy, měření, analytika, e-mail, e-commerce, AI a kreativa.',
        hero: { num: '010', kind: 'TOOLS', title: 'Naše', titleAccent: 'pracovní nástroje.', lead: 'Žádné marketingové tituly. Toto je reálný seznam platforem, se kterými pracujeme každý den — od Google Ads přes Klaviyo až po server-side tracking. A u každého napíšeme, kdy a na co ho nasazujeme.' } },
  hu: { title: 'Eszközeink — Adlify',
        description: 'Őszinte lista azokról az eszközökről és platformokról, amelyekkel valóban dolgozunk minden nap. Hirdetések, mérés, analitika, e-mail, e-kereskedelem, AI és kreatíva.',
        hero: { num: '010', kind: 'TOOLS', title: 'Munka', titleAccent: 'eszközeink.', lead: 'Semmi marketing címke. Ez egy valódi lista azokról a platformokról, amelyekkel mindennap dolgozunk — a Google Ads-től a Klaviyo-ig és a server-side trackingig. És minden eszköznél leírjuk, mikor és mire használjuk.' } },
  en: { title: 'What We Work With — Adlify',
        description: "An honest list of tools and platforms we actually use every day. Ads, measurement, analytics, e-mail, e-commerce, AI and creative.",
        hero: { num: '010', kind: 'TOOLS', title: 'Our', titleAccent: 'working tools.', lead: "No marketing titles. This is a real list of platforms we work with every day — from Google Ads through Klaviyo to server-side tracking. And for each one, we explain when and why we use it." } },
  de: { title: 'Unsere Tools — Adlify',
        description: 'Ehrliche Liste der Tools und Plattformen, mit denen wir täglich arbeiten. Werbung, Tracking, Analytik, E-Mail, E-Commerce, KI und Kreatives.',
        hero: { num: '010', kind: 'TOOLS', title: 'Unsere', titleAccent: 'Arbeitswerkzeuge.', lead: 'Keine Marketing-Titel. Das ist eine echte Liste von Plattformen, mit denen wir täglich arbeiten — von Google Ads über Klaviyo bis zum Server-Side-Tracking. Und bei jedem erklären wir, wann und wofür wir es einsetzen.' } },
};

// ============================================================
// HOW IT WORKS
// ============================================================
const howItWorks: LangPageMeta = {
  sk: { title: 'Ako to funguje — Adlify',
        description: 'Transparentný proces, jasné termíny a klientsky portál s prístupom 24/7. Od prvej správy po prvé výsledky vediete vy — my dodáme tempo a plný prehľad.',
        hero: { num: '011', kind: 'HOW IT WORKS', title: 'Ako to u nás funguje.', titleAccent: 'Krok po kroku.', lead: 'Transparentný proces, jasné termíny a vlastný klientsky portál s prístupom 24/7 — pridaná hodnota, ktorú dostávate v cene každého balíka. Od prvej správy po prvé výsledky vediete vy.' } },
  cs: { title: 'Jak to funguje — Adlify',
        description: 'Transparentní proces, jasné termíny a klientský portál s přístupem 24/7. Od první zprávy po první výsledky vedete vy — my dodáme tempo a plný přehled.',
        hero: { num: '011', kind: 'JAK TO FUNGUJE', title: 'Jak to u nás funguje.', titleAccent: 'Krok po kroku.', lead: 'Transparentní proces, jasné termíny a vlastní klientský portál s přístupem 24/7 — přidaná hodnota, kterou dostáváte v ceně každého balíčku. Od první zprávy po první výsledky vedete vy.' } },
  hu: { title: 'Hogyan működik — Adlify',
        description: 'Átlátható folyamat, egyértelmű határidők és 24/7 ügyfélportál hozzáférés. Az első üzenettől az első eredményekig Ön irányít — mi adjuk a tempót és a teljes átláthatóságot.',
        hero: { num: '011', kind: 'HOGYAN MŰKÖDIK', title: 'Így működünk mi.', titleAccent: 'Lépésről lépésre.', lead: 'Átlátható folyamat, egyértelmű határidők és saját ügyfélportál 24/7 hozzáféréssel — hozzáadott érték, amelyet minden csomag tartalmaz. Az első üzenettől az első eredményekig Ön irányít.' } },
  en: { title: 'How it works — Adlify',
        description: 'Transparent process, clear deadlines, and 24/7 client portal access. From the first message to the first results, you lead — we provide tempo and full transparency.',
        hero: { num: '011', kind: 'HOW IT WORKS', title: 'How we work.', titleAccent: 'Step by step.', lead: 'Transparent process, clear deadlines, and your own client portal with 24/7 access — added value included in every plan. From the first message to the first results, you lead.' } },
  de: { title: 'So funktioniert es — Adlify',
        description: 'Transparenter Prozess, klare Deadlines und 24/7 Kundenportal-Zugang. Von der ersten Nachricht bis zu den ersten Ergebnissen führen Sie — wir geben Tempo und volle Transparenz.',
        hero: { num: '011', kind: 'SO FUNKTIONIERT ES', title: 'So arbeiten wir.', titleAccent: 'Schritt für Schritt.', lead: 'Transparenter Prozess, klare Deadlines und Ihr eigenes Kundenportal mit 24/7-Zugang — Mehrwert, der in jedem Paket enthalten ist. Von der ersten Nachricht bis zu den ersten Ergebnissen führen Sie.' } },
};

// ============================================================
// LEGAL PAGES (Obchodné podmienky, Ochrana údajov, Cookies)
// ============================================================
const terms: LangPageMeta = {
  sk: { title: 'Obchodné podmienky — Adlify',
        description: 'Všeobecné obchodné podmienky pre poskytovanie marketingových služieb.',
        hero: { num: '012', kind: 'TERMS', title: 'Obchodné', titleAccent: 'podmienky.', lead: 'Pravidlá, podľa ktorých spolupracujeme. Bez prekvapení.' } },
  cs: { title: 'Obchodní podmínky — Adlify',
        description: 'Všeobecné obchodní podmínky pro poskytování marketingových služeb.',
        hero: { num: '012', kind: 'TERMS', title: 'Obchodní', titleAccent: 'podmínky.', lead: 'Pravidla, podle kterých spolupracujeme. Bez překvapení.' } },
  hu: { title: 'Általános szerződési feltételek — Adlify',
        description: 'Általános szerződési feltételek marketingszolgáltatások nyújtására.',
        hero: { num: '012', kind: 'TERMS', title: 'Általános', titleAccent: 'feltételek.', lead: 'A szabályok, amelyek alapján együttműködünk. Meglepetések nélkül.' } },
  en: { title: 'Terms of Service — Adlify',
        description: 'Terms and conditions for the provision of marketing services.',
        hero: { num: '012', kind: 'TERMS', title: 'Terms of', titleAccent: 'service.', lead: 'The rules we collaborate by. No surprises.' } },
  de: { title: 'AGB — Adlify',
        description: 'Allgemeine Geschäftsbedingungen für Marketing-Dienstleistungen.',
        hero: { num: '012', kind: 'TERMS', title: 'Allgemeine', titleAccent: 'Geschäftsbedingungen.', lead: 'Die Regeln, nach denen wir zusammenarbeiten. Ohne Überraschungen.' } },
};

const privacy: LangPageMeta = {
  sk: { title: 'Ochrana osobných údajov — Adlify',
        description: 'Ako spracúvame vaše osobné údaje. Súlad s GDPR.',
        hero: { num: '013', kind: 'PRIVACY', title: 'Ochrana', titleAccent: 'osobných údajov.', lead: 'Aké údaje zbierame, načo, ako dlho a aké máte práva.' } },
  cs: { title: 'Ochrana osobních údajů — Adlify',
        description: 'Jak zpracováváme vaše osobní údaje. Soulad s GDPR.',
        hero: { num: '013', kind: 'PRIVACY', title: 'Ochrana', titleAccent: 'osobních údajů.', lead: 'Jaké údaje sbíráme, k čemu, jak dlouho a jaká máte práva.' } },
  hu: { title: 'Adatvédelem — Adlify',
        description: 'Hogyan kezeljük személyes adatait. GDPR megfelelés.',
        hero: { num: '013', kind: 'PRIVACY', title: 'Személyes', titleAccent: 'adatok védelme.', lead: 'Milyen adatokat gyűjtünk, miért, mennyi ideig és milyen jogai vannak.' } },
  en: { title: 'Privacy Policy — Adlify',
        description: 'How we process your personal data. GDPR compliant.',
        hero: { num: '013', kind: 'PRIVACY', title: 'Privacy', titleAccent: 'policy.', lead: 'What data we collect, why, for how long, and what rights you have.' } },
  de: { title: 'Datenschutz — Adlify',
        description: 'Wie wir Ihre personenbezogenen Daten verarbeiten. DSGVO-konform.',
        hero: { num: '013', kind: 'PRIVACY', title: 'Datenschutz', titleAccent: 'erklärung.', lead: 'Welche Daten wir sammeln, wofür, wie lange und welche Rechte Sie haben.' } },
};

const cookies: LangPageMeta = {
  sk: { title: 'Cookies — Adlify',
        description: 'Aké cookies používame a prečo.',
        hero: { num: '014', kind: 'COOKIES', title: 'Cookies a', titleAccent: 'sledovanie.', lead: 'Aké cookies používame a ako ich môžete spravovať.' } },
  cs: { title: 'Cookies — Adlify',
        description: 'Jaké cookies používáme a proč.',
        hero: { num: '014', kind: 'COOKIES', title: 'Cookies a', titleAccent: 'sledování.', lead: 'Jaké cookies používáme a jak je můžete spravovat.' } },
  hu: { title: 'Cookie-k — Adlify',
        description: 'Milyen cookie-kat használunk és miért.',
        hero: { num: '014', kind: 'COOKIES', title: 'Cookie-k és', titleAccent: 'követés.', lead: 'Milyen cookie-kat használunk és hogyan kezelheted őket.' } },
  en: { title: 'Cookies — Adlify',
        description: 'What cookies we use and why.',
        hero: { num: '014', kind: 'COOKIES', title: 'Cookies and', titleAccent: 'tracking.', lead: 'What cookies we use and how you can manage them.' } },
  de: { title: 'Cookies — Adlify',
        description: 'Welche Cookies wir verwenden und warum.',
        hero: { num: '014', kind: 'COOKIES', title: 'Cookies und', titleAccent: 'Tracking.', lead: 'Welche Cookies wir verwenden und wie Sie sie verwalten können.' } },
};

// ============================================================
// EXPORT
// ============================================================
export const pageMeta = {
  home,
  services,
  cases,
  pricing,
  about,
  blog,
  faq,
  contact,
  tools,
  howItWorks,
  terms,
  privacy,
  cookies,
};

export type PageKey = keyof typeof pageMeta;
