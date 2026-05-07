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
  sk: { title: 'Adlify — Výkonnostný marketing pre ambiciózne firmy',
        description: 'Spravujeme Google a Meta reklamy pre e-shopy a remeselníkov tak, aby ste videli, kam každé euro ide. 48+ klientov, €680k tržieb, 5.2× priemerný návrat.' },
  cs: { title: 'Adlify — Výkonnostní marketing pro ambiciózní firmy',
        description: 'Spravujeme Google a Meta reklamy pro e-shopy a řemeslníky tak, abyste viděli, kam každé euro jde. 48+ klientů, €680k tržeb, 5.2× průměrný návrat.' },
  hu: { title: 'Adlify — Teljesítményalapú marketing ambiciózus cégeknek',
        description: 'Google és Meta hirdetéseket kezelünk e-kereskedők és kisvállalkozók számára átláthatóan. 48+ ügyfél, €680k bevétel, 5.2× átlagos megtérülés.' },
  en: { title: 'Adlify — Performance marketing for ambitious companies',
        description: 'We manage Google and Meta ads for e-shops and tradespeople so you can see where every euro goes. 48+ clients, €680k revenue, 5.2× average return.' },
  de: { title: 'Adlify — Performance-Marketing für ambitionierte Unternehmen',
        description: 'Wir verwalten Google- und Meta-Anzeigen für Online-Shops und Handwerker, damit Sie sehen, wohin jeder Euro fließt. 48+ Kunden, €680k Umsatz, 5,2× durchschnittlicher Return.' },
};

// ============================================================
// SERVICES
// ============================================================
const services: LangPageMeta = {
  sk: { title: 'Služby — Adlify',
        description: 'Google Ads, Meta Ads, SEO, e-mailové kampane, meranie a vstupné stránky. Postaráme sa o všetko, čo vám prinesie zákazníkov.',
        hero: { num: '002', kind: 'SERVICES', title: 'Čo pre vás vieme', titleAccent: 'zariadiť.', lead: 'Postaráme sa o všetko, čo vám prinesie zákazníkov. Vy len sledujete čísla — my dolaďujeme detaily.' } },
  cs: { title: 'Služby — Adlify',
        description: 'Google Ads, Meta Ads, SEO, e-mailové kampaně, měření a vstupní stránky. Postaráme se o všechno, co vám přivede zákazníky.',
        hero: { num: '002', kind: 'SLUŽBY', title: 'Co pro vás umíme', titleAccent: 'zařídit.', lead: 'Postaráme se o všechno, co vám přivede zákazníky. Vy jen sledujete čísla — my doladíme detaily.' } },
  hu: { title: 'Szolgáltatások — Adlify',
        description: 'Google Ads, Meta Ads, SEO, e-mail kampányok, mérés és landing oldalak. Mindent elintézünk, ami ügyfeleket hoz.',
        hero: { num: '002', kind: 'SZOLGÁLTATÁSOK', title: 'Mit tudunk Önnek', titleAccent: 'elintézni.', lead: 'Mindent elintézünk, ami ügyfeleket hoz. Ön csak a számokat figyeli — mi finomítjuk a részleteket.' } },
  en: { title: 'Services — Adlify',
        description: 'Google Ads, Meta Ads, SEO, email campaigns, tracking, and landing pages. We handle everything that brings you customers.',
        hero: { num: '002', kind: 'SERVICES', title: 'What we can', titleAccent: 'handle for you.', lead: 'We take care of everything that brings you customers. You watch the numbers — we fine-tune the details.' } },
  de: { title: 'Leistungen — Adlify',
        description: 'Google Ads, Meta Ads, SEO, E-Mail-Kampagnen, Tracking und Landingpages. Wir kümmern uns um alles, was Ihnen Kunden bringt.',
        hero: { num: '002', kind: 'LEISTUNGEN', title: 'Was wir für Sie', titleAccent: 'erledigen können.', lead: 'Wir kümmern uns um alles, was Ihnen Kunden bringt. Sie beobachten die Zahlen — wir feilen an den Details.' } },
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
        description: 'Fixný mesačný paušál. Žiadne provízie z reklamy, žiadne skryté poplatky. Minimálna spolupráca 3 mesiace.',
        hero: { num: '004', kind: 'PRICING', title: 'Jednoduchý cenník.', titleAccent: 'Bez prekvapení.', lead: 'Fixný mesačný paušál. Žiadne provízie z reklamy, žiadne skryté poplatky. Minimálna spolupráca 3 mesiace.' } },
  cs: { title: 'Ceník — Adlify',
        description: 'Fixní měsíční paušál. Žádné provize z reklamy, žádné skryté poplatky. Minimální spolupráce 3 měsíce.',
        hero: { num: '004', kind: 'CENÍK', title: 'Jednoduchý ceník.', titleAccent: 'Bez překvapení.', lead: 'Fixní měsíční paušál. Žádné provize z reklamy, žádné skryté poplatky. Minimální spolupráce 3 měsíce.' } },
  hu: { title: 'Árak — Adlify',
        description: 'Fix havi átalány. Nincs hirdetési jutalék, nincsenek rejtett díjak. Minimum 3 hónapos együttműködés.',
        hero: { num: '004', kind: 'ÁRAK', title: 'Egyszerű árazás.', titleAccent: 'Meglepetések nélkül.', lead: 'Fix havi átalány. Nincs hirdetési jutalék, nincsenek rejtett díjak. Minimum 3 hónapos együttműködés.' } },
  en: { title: 'Pricing — Adlify',
        description: 'Fixed monthly retainer. No ad commissions, no hidden fees. Minimum 3-month engagement.',
        hero: { num: '004', kind: 'PRICING', title: 'Simple pricing.', titleAccent: 'No surprises.', lead: 'Fixed monthly retainer. No commissions on ad spend, no hidden fees. Minimum 3-month engagement.' } },
  de: { title: 'Preise — Adlify',
        description: 'Fixe monatliche Pauschale. Keine Werbeprovisionen, keine versteckten Gebühren. Mindestlaufzeit 3 Monate.',
        hero: { num: '004', kind: 'PREISE', title: 'Einfache Preise.', titleAccent: 'Keine Überraschungen.', lead: 'Fixe monatliche Pauschale. Keine Provisionen auf Werbebudgets, keine versteckten Gebühren. Mindestlaufzeit 3 Monate.' } },
};

// ============================================================
// ABOUT
// ============================================================
const about: LangPageMeta = {
  sk: { title: 'O nás — Adlify',
        description: 'Sme malý tím s veľkou obsesiou pre čísla. Založili sme Adlify v roku 2021. Robíme výkonnostný marketing — a robíme ho dobre.',
        hero: { num: '005', kind: 'ABOUT', title: 'Sme malý tím s veľkou', titleAccent: 'obsesiou pre čísla.', lead: 'Založili sme Adlify v roku 2021, pretože sme mali dosť agentúr, ktoré robia všetko pre všetkých. Robíme výkonnostný marketing — a robíme ho dobre.' } },
  cs: { title: 'O nás — Adlify',
        description: 'Jsme malý tým s velkou posedlostí pro čísla. Adlify jsme založili v roce 2021. Děláme výkonnostní marketing — a děláme ho dobře.',
        hero: { num: '005', kind: 'O NÁS', title: 'Jsme malý tým s velkou', titleAccent: 'posedlostí pro čísla.', lead: 'Adlify jsme založili v roce 2021, protože jsme měli dost agentur, které dělají všechno pro všechny. Děláme výkonnostní marketing — a děláme ho dobře.' } },
  hu: { title: 'Rólunk — Adlify',
        description: 'Egy kis csapat vagyunk, akik megszállottan szeretik a számokat. Az Adlify-t 2021-ben alapítottuk. Teljesítményalapú marketinget csinálunk — és jól csináljuk.',
        hero: { num: '005', kind: 'RÓLUNK', title: 'Kis csapat vagyunk', titleAccent: 'a számok megszállottjai.', lead: 'Az Adlify-t 2021-ben alapítottuk, mert elegünk volt azokból az ügynökségekből, amelyek mindent megcsinálnak mindenkinek. Teljesítményalapú marketinget csinálunk — és jól csináljuk.' } },
  en: { title: 'About — Adlify',
        description: 'A small team obsessed with numbers. We founded Adlify in 2021. We do performance marketing — and we do it well.',
        hero: { num: '005', kind: 'ABOUT', title: "We're a small team with a big", titleAccent: 'obsession for numbers.', lead: 'We founded Adlify in 2021 because we got tired of agencies that do everything for everyone. We do performance marketing — and we do it well.' } },
  de: { title: 'Über uns — Adlify',
        description: 'Ein kleines Team mit großer Leidenschaft für Zahlen. Adlify gründeten wir 2021. Wir machen Performance-Marketing — und zwar richtig.',
        hero: { num: '005', kind: 'ÜBER UNS', title: 'Kleines Team mit großer', titleAccent: 'Leidenschaft für Zahlen.', lead: 'Adlify gründeten wir 2021, weil wir genug von Agenturen hatten, die alles für jeden machen. Wir machen Performance-Marketing — und zwar richtig.' } },
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
  sk: { title: 'Časté otázky (FAQ) — Adlify',
        description: 'Všetko, čo sa pýtajú klienti o spolupráci, cenách, výsledkoch, tracking a službách. Ak nenájdete odpoveď, napíšte nám — odpovieme do 24 hodín.',
        hero: { num: '007', kind: 'FAQ', title: 'Časté', titleAccent: 'otázky.', lead: 'Všetko, čo sa pýtajú klienti — predtým než sa začneme baviť o cenníku. Ak nenájdete odpoveď, napíšte nám. Odpovedáme do 24 hodín.' } },
  cs: { title: 'Časté otázky (FAQ) — Adlify',
        description: 'Vše, na co se klienti ptají ohledně spolupráce, cen, výsledků, trackingu a služeb. Pokud nenajdete odpověď, napište nám — odpovíme do 24 hodin.',
        hero: { num: '007', kind: 'FAQ', title: 'Časté', titleAccent: 'otázky.', lead: 'Vše, na co se klienti ptají — předtím než začneme řešit ceník. Pokud nenajdete odpověď, napište nám. Odpovídáme do 24 hodin.' } },
  hu: { title: 'Gyakori kérdések (GYIK) — Adlify',
        description: 'Minden, amit ügyfeleink kérdeznek az együttműködésről, árakról, eredményekről, trackingről és szolgáltatásokról. Ha nem találja a választ, írjon nekünk — 24 órán belül válaszolunk.',
        hero: { num: '007', kind: 'GYIK', title: 'Gyakori', titleAccent: 'kérdések.', lead: 'Minden, amit ügyfeleink kérdeznek — mielőtt az árakról beszélnénk. Ha nem találja a választ, írjon nekünk. 24 órán belül válaszolunk.' } },
  en: { title: 'Frequently asked questions (FAQ) — Adlify',
        description: 'Everything clients ask about collaboration, pricing, results, tracking, and services. If you don\'t find the answer, write to us — we reply within 24 hours.',
        hero: { num: '007', kind: 'FAQ', title: 'Frequently', titleAccent: 'asked questions.', lead: 'Everything clients ask — before we even start talking about pricing. If you don\'t find the answer, write to us. We reply within 24 hours.' } },
  de: { title: 'Häufige Fragen (FAQ) — Adlify',
        description: 'Alles, was Kunden zur Zusammenarbeit, Preisen, Ergebnissen, Tracking und Leistungen fragen. Wenn Sie die Antwort nicht finden, schreiben Sie uns — wir antworten innerhalb von 24 Stunden.',
        hero: { num: '007', kind: 'FAQ', title: 'Häufige', titleAccent: 'Fragen.', lead: 'Alles, was Kunden fragen — bevor wir über Preise sprechen. Wenn Sie die Antwort nicht finden, schreiben Sie uns. Wir antworten innerhalb von 24 Stunden.' } },
};

// ============================================================
// CONTACT
// ============================================================
const contact: LangPageMeta = {
  sk: { title: 'Kontakt — Adlify',
        description: 'Audit zdarma, jasné odporúčania a plán, čo by sa dalo zlepšiť. Bez záväzku, bez predajného tlaku. Odpovedáme do 24 hodín.',
        hero: { num: '008', kind: 'CONTACT', title: 'Napíšte nám.', titleAccent: 'Odpovieme do 24 hodín.', lead: 'Audit zdarma, jasné odporúčania a plán, čo by sa dalo zlepšiť. Bez záväzku, bez predajného tlaku.' } },
  cs: { title: 'Kontakt — Adlify',
        description: 'Audit zdarma, jasná doporučení a plán, co by se dalo zlepšit. Bez závazku, bez prodejního tlaku. Odpovídáme do 24 hodin.',
        hero: { num: '008', kind: 'KONTAKT', title: 'Napište nám.', titleAccent: 'Odpovíme do 24 hodin.', lead: 'Audit zdarma, jasná doporučení a plán, co by se dalo zlepšit. Bez závazku, bez prodejního tlaku.' } },
  hu: { title: 'Kapcsolat — Adlify',
        description: 'Ingyenes audit, világos ajánlások és terv arra, hogy mit lehetne javítani. Kötelezettség nélkül, értékesítési nyomás nélkül. 24 órán belül válaszolunk.',
        hero: { num: '008', kind: 'KAPCSOLAT', title: 'Írjon nekünk.', titleAccent: '24 órán belül válaszolunk.', lead: 'Ingyenes audit, világos ajánlások és terv arra, hogy mit lehetne javítani. Kötelezettség nélkül, értékesítési nyomás nélkül.' } },
  en: { title: 'Contact — Adlify',
        description: 'Free audit, clear recommendations, and a plan for what could be improved. No commitment, no sales pressure. We reply within 24 hours.',
        hero: { num: '008', kind: 'CONTACT', title: 'Write to us.', titleAccent: 'We reply within 24 hours.', lead: 'Free audit, clear recommendations, and a plan for what could be improved. No commitment, no sales pressure.' } },
  de: { title: 'Kontakt — Adlify',
        description: 'Kostenloser Audit, klare Empfehlungen und ein Plan, was verbessert werden könnte. Ohne Verpflichtung, ohne Verkaufsdruck. Wir antworten innerhalb von 24 Stunden.',
        hero: { num: '008', kind: 'KONTAKT', title: 'Schreiben Sie uns.', titleAccent: 'Antwort in 24 Stunden.', lead: 'Kostenloser Audit, klare Empfehlungen und ein Plan, was verbessert werden könnte. Ohne Verpflichtung, ohne Verkaufsdruck.' } },
};

// ============================================================
// PARTNERS
// ============================================================
const partners: LangPageMeta = {
  sk: { title: 'Partneri — Adlify',
        description: 'Certifikovaný partner hlavných platforiem. Premier status na Google, Master Partner na Klaviyo. Dedikovaná support linka, betas a školenia priamo od platforiem.',
        hero: { num: '010', kind: 'PARTNERS', title: 'Nepracujeme sami.', titleAccent: 'Integrujeme to najlepšie.', lead: 'Certifikovaný partner hlavných platforiem. Premier status na Google, Master Partner na Klaviyo. Vďaka tomu máme prístup k betám, dedikovanej support linke a školeniam priamo od platforiem.' } },
  cs: { title: 'Partneři — Adlify',
        description: 'Certifikovaný partner hlavních platforem. Premier status u Google, Master Partner u Klaviyo. Dedikovaná support linka, beta verze a školení přímo od platforem.',
        hero: { num: '010', kind: 'PARTNEŘI', title: 'Nepracujeme sami.', titleAccent: 'Integrujeme to nejlepší.', lead: 'Certifikovaný partner hlavních platforem. Premier status u Google, Master Partner u Klaviyo. Díky tomu máme přístup k beta verzím, dedikované support lince a školení přímo od platforem.' } },
  hu: { title: 'Partnerek — Adlify',
        description: 'Vezető platformok tanúsított partnere. Premier státusz a Google-nél, Master Partner a Klaviyónál. Dedikált support, béta verziók és képzések közvetlenül a platformoktól.',
        hero: { num: '010', kind: 'PARTNEREK', title: 'Nem egyedül dolgozunk.', titleAccent: 'A legjobbat integráljuk.', lead: 'A vezető platformok tanúsított partnere vagyunk. Premier státusz a Google-nél, Master Partner a Klaviyónál. Ezért hozzáférünk a béta verziókhoz, dedikált supporthoz és közvetlenül a platformoktól származó képzésekhez.' } },
  en: { title: 'Partners — Adlify',
        description: 'Certified partner of major platforms. Premier status with Google, Master Partner with Klaviyo. Dedicated support line, betas, and training directly from the platforms.',
        hero: { num: '010', kind: 'PARTNERS', title: "We don't work alone.", titleAccent: 'We integrate the best.', lead: 'Certified partner of major platforms. Premier status with Google, Master Partner with Klaviyo. This gives us access to betas, a dedicated support line, and training directly from the platforms.' } },
  de: { title: 'Partner — Adlify',
        description: 'Zertifizierter Partner der wichtigsten Plattformen. Premier-Status bei Google, Master-Partner bei Klaviyo. Dedizierter Support, Betas und Schulungen direkt von den Plattformen.',
        hero: { num: '010', kind: 'PARTNER', title: 'Wir arbeiten nicht allein.', titleAccent: 'Wir integrieren das Beste.', lead: 'Zertifizierter Partner der wichtigsten Plattformen. Premier-Status bei Google, Master-Partner bei Klaviyo. Dadurch haben wir Zugang zu Betas, einer dedizierten Support-Linie und Schulungen direkt von den Plattformen.' } },
};

// ============================================================
// HOW IT WORKS
// ============================================================
const howItWorks: LangPageMeta = {
  sk: { title: 'Ako to funguje — Adlify',
        description: 'Transparentný proces, jasné termíny, žiadne čierne skrinky. Od prvej správy po prvé výsledky vediete vy — my len pridáme tempo.',
        hero: { num: '011', kind: 'HOW IT WORKS', title: 'Ako to u nás funguje.', titleAccent: 'Krok po kroku.', lead: 'Transparentný proces, jasné termíny, žiadne čierne skrinky. Od prvej správy po prvé výsledky vediete vy — my len pridáme tempo.' } },
  cs: { title: 'Jak to funguje — Adlify',
        description: 'Transparentní proces, jasné termíny, žádné černé skříňky. Od první zprávy po první výsledky vedete vy — my jen přidáme tempo.',
        hero: { num: '011', kind: 'JAK TO FUNGUJE', title: 'Jak to u nás funguje.', titleAccent: 'Krok po kroku.', lead: 'Transparentní proces, jasné termíny, žádné černé skříňky. Od první zprávy po první výsledky vedete vy — my jen přidáme tempo.' } },
  hu: { title: 'Hogyan működik — Adlify',
        description: 'Átlátható folyamat, egyértelmű határidők, semmi feketedoboz. Az első üzenettől az első eredményekig Ön irányít — mi csak gyorsítunk.',
        hero: { num: '011', kind: 'HOGYAN MŰKÖDIK', title: 'Így működünk mi.', titleAccent: 'Lépésről lépésre.', lead: 'Átlátható folyamat, egyértelmű határidők, semmi feketedoboz. Az első üzenettől az első eredményekig Ön irányít — mi csak gyorsítunk.' } },
  en: { title: 'How it works — Adlify',
        description: 'Transparent process, clear deadlines, no black boxes. From the first message to the first results, you lead — we just add tempo.',
        hero: { num: '011', kind: 'HOW IT WORKS', title: 'How we work.', titleAccent: 'Step by step.', lead: 'Transparent process, clear deadlines, no black boxes. From the first message to the first results, you lead — we just add tempo.' } },
  de: { title: 'So funktioniert es — Adlify',
        description: 'Transparenter Prozess, klare Deadlines, keine Black Boxes. Von der ersten Nachricht bis zu den ersten Ergebnissen führen Sie — wir geben nur das Tempo.',
        hero: { num: '011', kind: 'SO FUNKTIONIERT ES', title: 'So arbeiten wir.', titleAccent: 'Schritt für Schritt.', lead: 'Transparenter Prozess, klare Deadlines, keine Black Boxes. Von der ersten Nachricht bis zu den ersten Ergebnissen führen Sie — wir geben nur das Tempo.' } },
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
  partners,
  howItWorks,
  terms,
  privacy,
  cookies,
};

export type PageKey = keyof typeof pageMeta;
