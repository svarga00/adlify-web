/**
 * Detail dáta pre hlavné služby (zobrazené na homepage)
 * Použité na /sluzby/<slug> dynamic stránkach.
 *
 * Slugy zhodné s Home.astro a Services.astro 'online-marketing' kategoriou:
 *  google-ads, meta-ads, seo, email, meranie, web
 */

export interface ServiceProcess {
  num: number;
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface ServiceDetail {
  slug: string;
  category: string;          // pre breadcrumb
  categorySlug: string;
  title: string;             // názov
  tagline: string;           // krátky podtitul (1 veta)
  lead: string;              // úvodný odstavec (3-4 vety)
  icon: string;              // SVG path content

  // Špecifikácie (timing) — z Home.astro
  specs: ServiceSpec[];

  // Cena
  priceFrom: string;         // '149 € / mesiac' alebo 'Od 590 €'
  priceNote?: string;        // 'Súčasť plánov Pro+'

  // Postup — ako pracujeme
  process: ServiceProcess[];

  // Čo dostaneš — rozšírené bullets
  whatYouGet: string[];

  // Pre koho je to vhodné
  forWhom: string[];

  // Mini FAQ pre túto službu
  faq: ServiceFAQ[];

  // Related case study slugs (z DB)
  relatedCases?: string[];

  // SEO
  seoTitle?: string;
  seoDescription?: string;
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {

  // ============================================
  // GOOGLE ADS
  // ============================================
  'google-ads': {
    slug: 'google-ads',
    category: 'Online marketing',
    categorySlug: 'online-marketing',
    title: 'Google Ads',
    tagline: 'Reklama s okamžitým dopytom. Search, Performance Max, Shopping, YouTube.',
    lead: 'Google Ads sú najrýchlejší spôsob, ako získať zákazníka, ktorý už hľadá to, čo predávate. Nastavíme kampane podľa vašej cieľovej skupiny, optimalizujeme bid stratégie a sledujeme každý kliknutý cent. Bez „odpaľovania peňazí na branding" — len konverzie, ktoré vidno.',
    icon: '<circle cx="11" cy="11" r="7"></circle><path d="m21 21-4.3-4.3"></path>',

    specs: [
      { label: 'Setup',         value: '10 dní' },
      { label: 'Prvé výsledky', value: '4 týždne' },
      { label: 'Reporting',     value: 'Týždenne' },
      { label: 'Zahrnuté',      value: 'Vo všetkých plánoch' },
    ],

    priceFrom: 'Súčasť mesačného plánu',
    priceNote: 'Od 149 € / mesiac (Starter plán) — viď cenník',

    process: [
      { num: 1, title: 'Audit a stratégia', desc: 'Pozrieme si váš účet (alebo postavíme nový), analyzujeme konkurenciu a vyberáme typy kampaní podľa cieľov.' },
      { num: 2, title: 'Setup a meranie',   desc: 'Nastavíme konverzie cez GA4 a Google Tag Manager, vrátane Enhanced Conversions a server-side trackingu.' },
      { num: 3, title: 'Spustenie kampaní', desc: 'Search, Performance Max, Shopping, YouTube — podľa toho čo predávate. Začíname konzervatívne, škálujeme po prvých výsledkoch.' },
      { num: 4, title: 'Optimalizácia',      desc: 'Týždenné úpravy bidov, keywords, kreatív. Mesačný report s odporúčaniami a A/B testami.' },
    ],

    whatYouGet: [
      'Search kampane — zachytenie okamžitého dopytu (CPC + CPA stratégie)',
      'Performance Max kampane — pre e-shopy s produktovým feedom',
      'Shopping reklama — Google Merchant Center setup + feed optimalizácia',
      'YouTube ads — video kampane s targeting na zámer',
      'Konverzné meranie + remarketing publiká (do 540 dní)',
      'Týždenný reporting + mesačné optimalizačné stretnutie',
    ],

    forWhom: [
      'E-shopy s minimálne 30+ produktmi v katalógu',
      'Lokálni poskytovatelia služieb (renovácie, HVAC, kaderníctva, autoservisy)',
      'B2B firmy s konkrétnymi službami a dopytmi cez formulár',
    ],

    faq: [
      {
        q: 'Akú minimálnu mediálnu investíciu odporúčate?',
        a: 'Pre testovanie odporúčame minimálne 300 € / mesiac na médiá (mimo našich služieb). Nižšie rozpočty nestačia na zber dát potrebných pre algoritmus Google Ads.',
      },
      {
        q: 'Môžete spravovať aj môj existujúci účet?',
        a: 'Áno — najprv urobíme audit (zadarmo, do 14 dní) a navrhneme čo zlepšiť. Potom prevezmeme správu alebo necháme váš tím s našimi odporúčaniami.',
      },
      {
        q: 'Kedy uvidím prvé výsledky?',
        a: 'Search kampane môžu generovať konverzie už v prvom týždni. Performance Max potrebuje 2-4 týždne na "naučenie sa". SEO efekty z brand search trvajú 6-12 týždňov.',
      },
      {
        q: 'Aké platformy a nástroje používate?',
        a: 'Google Ads + Google Tag Manager + GA4 + Looker Studio. Pre e-shopy aj Merchant Center, Channable / DataFeedWatch (feed management) a server-side tracking cez Stape.io.',
      },
    ],

    relatedCases: ['novashop', 'zlatka'],

    seoTitle: 'Google Ads agentúra Slovensko · Search, Performance Max, Shopping',
    seoDescription: 'Spravujeme Google Ads kampane pre slovenské a české e-shopy a SMB. Search, Performance Max, Shopping, YouTube. Audit zadarmo.',
  },


  // ============================================
  // META ADS
  // ============================================
  'meta-ads': {
    slug: 'meta-ads',
    category: 'Online marketing',
    categorySlug: 'online-marketing',
    title: 'Meta Ads',
    tagline: 'Facebook a Instagram reklamy s dôrazom na kreatívy a A/B testovanie.',
    lead: 'Meta Ads (Facebook + Instagram) sú o kreatívach. Algoritmus nájde publikum sám — váš job je dať mu materiál ktorý funguje. My to robíme za vás: kreatívy, audience targeting, retargeting, server-side tracking cez Conversion API.',
    icon: '<path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5v1.8h2.6l-.4 2.9h-2.2v7C18.3 21.1 22 17 22 12z"></path>',

    specs: [
      { label: 'Setup',         value: '7 dní' },
      { label: 'Prvé výsledky', value: '2 týždne' },
      { label: 'Reporting',     value: 'Týždenne' },
      { label: 'Zahrnuté',      value: 'Vo všetkých plánoch' },
    ],

    priceFrom: 'Súčasť mesačného plánu',
    priceNote: 'Od 149 € / mesiac (Starter plán) — viď cenník',

    process: [
      { num: 1, title: 'Audit & briefing',     desc: 'Analyzujeme váš Meta Business účet, existujúce kreatívy, publiká a tracking. Stanovíme KPI.' },
      { num: 2, title: 'Kreatívy & tracking',  desc: 'Pripravíme 3-5 variantov kreatív (video + statické) na A/B test. Nastavíme Pixel + CAPI server-side.' },
      { num: 3, title: 'Spustenie kampaní',    desc: 'Cold acquisition + retargeting + Lookalike audiences. Budget split podľa funnel-fázy.' },
      { num: 4, title: 'Iterácia',              desc: 'Týždenné scaling kreatív ktoré fungujú, vypínanie tých čo nie. Mesačná nová kreatívna batch.' },
    ],

    whatYouGet: [
      'Facebook + Instagram + Reels kampane',
      'Custom + Lookalike publiká z vašich zákazníkov',
      'Retargeting návštevníkov webu (do 180 dní)',
      'Conversion API (CAPI) server-side tracking — obchádza iOS 17 ATT',
      'Advanced Matching (hash-ovaný e-mail/phone)',
      'A/B testovanie kreatív (3-5 variantov / mesiac)',
    ],

    forWhom: [
      'E-shopy s vizuálnymi produktmi (móda, kozmetika, domácnosť, hobby)',
      'DTC značky s príbehom (organic / hand-made / lifestyle)',
      'Služby s pred/po efektom (renovácie, fitness, kozmetika)',
    ],

    faq: [
      {
        q: 'Robíte aj kreatívy alebo iba kampane?',
        a: 'Robíme statické grafiky aj video reels. V plánoch Pro+ máte 3-5 kreatív mesačne v cene. Veľkofilmové produkcie sú extra.',
      },
      {
        q: 'Ako riešite iOS 17 a problémy s atribúciou?',
        a: 'Implementujeme Conversion API (CAPI) cez server-side tracking. To obchádza Safari ITP aj iOS App Tracking Transparency. Plus Advanced Matching cez hashované e-maily.',
      },
      {
        q: 'Ako rýchlo vidno výsledky?',
        a: 'Retargeting môže konvertovať za 24-48 hodín. Cold acquisition kampane potrebujú 2 týždne na "learning phase" algoritmu Meta.',
      },
      {
        q: 'Aké minimálne budgety odporúčate?',
        a: 'Minimálne 300 € / mes na médiá pre testovanie, ideálne 600+ € pre paralelné cold + retargeting kampane.',
      },
    ],

    relatedCases: ['bonsai-lab', 'krajcirstvo'],

    seoTitle: 'Meta Ads agentúra (Facebook + Instagram) · Slovensko a Česko',
    seoDescription: 'Spravujeme Facebook a Instagram reklamy s dôrazom na kreatívy a CAPI tracking. Audit zadarmo, transparentný reporting.',
  },


  // ============================================
  // SEO
  // ============================================
  'seo': {
    slug: 'seo',
    category: 'Online marketing',
    categorySlug: 'online-marketing',
    title: 'SEO optimalizácia',
    tagline: 'Dlhodobý rast organickej návštevnosti. Audit, technické SEO, content, link building.',
    lead: 'SEO nie je o trickoch — je to o tom mať lepší web než konkurencia. Technicky rýchly, s obsahom ktorý odpovedá na otázky zákazníkov, a so spätnými odkazmi ktoré dokazujú dôveryhodnosť. Postupujeme od auditu cez technické fixy ku content stratégii.',
    icon: '<circle cx="11" cy="11" r="7"></circle><path d="m21 21-4.3-4.3"></path><path d="M11 8v6"></path><path d="M8 11h6"></path>',

    specs: [
      { label: 'Audit',         value: '14 dní' },
      { label: 'Prvé výsledky', value: '3 mesiace' },
      { label: 'Reporting',     value: 'Mesačne' },
      { label: 'Zahrnuté',      value: 'Plán Pro+' },
    ],

    priceFrom: 'Súčasť plánu Pro+',
    priceNote: 'Plán Pro od 349 € / mesiac obsahuje SEO meranie a optimalizácie',

    process: [
      { num: 1, title: 'Technický audit',         desc: 'Crawl celého webu, Core Web Vitals, mobile usability, schema, robots.txt, sitemap. Identifikujeme 20+ konkrétnych fixov.' },
      { num: 2, title: 'Keyword research',         desc: 'Hľadáme témy ktoré vaši zákazníci skutočne hľadajú. Berieme do úvahy search intent (informational vs transactional).' },
      { num: 3, title: 'Onpage + content',         desc: 'Optimalizujeme existujúce stránky (title, meta, headings, internal linking). Plánujeme nové články a kategórie.' },
      { num: 4, title: 'Link building & monitoring', desc: 'Akvizícia kvalitných spätných odkazov (PR, partnerstvá, hosting articles). Mesačný report rankings a organic traffic.' },
    ],

    whatYouGet: [
      'Technický SEO audit (Screaming Frog + Ahrefs + Search Console)',
      'Keyword research a content plán (10-30 tém mesačne)',
      'Onpage optimalizácia (title, meta, headings, schema markup)',
      'Local SEO + Google Business Profile optimalizácia',
      'Link building stratégia + akvizícia 2-5 odkazov / mesiac',
      'Mesačný reporting (Google Search Console + Ahrefs + GA4)',
    ],

    forWhom: [
      'E-shopy s viacero kategoriami a produktmi (high LTV potenciál)',
      'B2B firmy s informačnými témami (saas, konzultácie, software)',
      'Lokálne podniky s viacerými pobočkami (local SEO)',
    ],

    faq: [
      {
        q: 'Za ako dlho budú prvé výsledky?',
        a: 'Technické fixy môžete vidieť v Search Console do 2-4 týždňov (lepšie indexovanie, mobile usability). Pozície na long-tail keywords sa zlepšujú za 8-12 týždňov. Konkurenčné keywords trvajú 6-12 mesiacov.',
      },
      {
        q: 'Robíte aj copywriting / články?',
        a: 'Áno, ale to nie je súčasť SEO ceny — pripravíme content brief a vy alebo váš copywriter to napíše. Vieme tiež zabezpečiť externého copywritera (extra 80-150 €/článok).',
      },
      {
        q: 'Garantujete pozíciu na konkrétne kľúčové slovo?',
        a: 'Nie — to by bola lož. Žiadna SEO agentúra to nemôže garantovať. Garantujeme proces, ktorý funguje, a transparentný reporting čo robíme.',
      },
      {
        q: 'Robíte aj negatívne SEO / disavow?',
        a: 'Áno, ak nájdeme toxické spätné odkazy v audite. Disavow file pripravíme a podáme cez Search Console.',
      },
    ],

    relatedCases: ['techpark', 'ekodom'],

    seoTitle: 'SEO agentúra Slovensko · Technické SEO, content, link building',
    seoDescription: 'Dlhodobý rast organickej návštevnosti. Technický audit, onpage optimalizácia, content stratégia a link building.',
  },


  // ============================================
  // E-MAIL MARKETING
  // ============================================
  'email': {
    slug: 'email',
    category: 'Online marketing',
    categorySlug: 'online-marketing',
    title: 'E-mailové kampane a automatizácie',
    tagline: 'Existujúci zákazník je 5× lacnejší než nový. E-mail to vie využiť.',
    lead: 'E-mail marketing je najziskovejší kanál v digitále — pomer revenue / náklady je často 30:1 a viac. Postavíme welcome flow, abandoned cart, post-purchase a newsletter strategiu tak, aby vám zákazníci kupovali znova bez toho aby ste platili za nové akvizície.',
    icon: '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path>',

    specs: [
      { label: 'Setup',     value: '7 dní' },
      { label: 'Frekvencia',value: '1–4× / mes.' },
      { label: 'Reporting', value: 'Po každej kampani' },
      { label: 'Zahrnuté',  value: 'Plán Pro+' },
    ],

    priceFrom: 'Súčasť plánu Pro+',
    priceNote: 'Plán Pro od 349 € / mesiac (alebo doplnková služba)',

    process: [
      { num: 1, title: 'Audit & segmentácia',  desc: 'Analyzujeme zoznam kontaktov, otvorenosť, klik-rate, deliverability. Segmentujeme podľa správania.' },
      { num: 2, title: 'Automation flows',     desc: 'Postavíme Welcome (4-6 e-mailov), Abandoned Cart (3 e-maily), Post-Purchase (recenzia + cross-sell), Win-back (60-90 dní).' },
      { num: 3, title: 'Kampane',              desc: '1-4 newsletter / mesiac. Pre e-shopy aj promo emaily, novinky, edukačné série.' },
      { num: 4, title: 'A/B testovanie',        desc: 'Testujeme subject lines, send time, CTA, segmenty. Mesačný report čo funguje a čo škrtáme.' },
    ],

    whatYouGet: [
      'Welcome automation (4-6 e-mailov pre nových odberateľov)',
      'Abandoned cart flow (3 e-maily — pripomienka, prekážky, zľava)',
      'Post-purchase flow (potvrdenie, recenzia, cross-sell)',
      'Newsletter kampane (1-4 mesačne, copywriting + dizajn)',
      'Win-back kampane pre neaktívnych zákazníkov',
      'Segmentácia podľa správania (VIP, abandoners, ne-otvárači)',
    ],

    forWhom: [
      'E-shopy s opakovanými nákupmi (móda, kozmetika, jedlo, hobby)',
      'B2B firmy s edukačným content marketingom (saas, kurzy, konzultácie)',
      'DTC značky s lojálnou komunitou',
    ],

    faq: [
      {
        q: 'Aké platformy / ESP podporujete?',
        a: 'Klaviyo (najmä pre e-shopy), Mailchimp, Brevo (sk/cs lokalizácia), ActiveCampaign, ConvertKit. Vieme aj migrovať z jednej do druhej.',
      },
      {
        q: 'Robíte aj copywriting alebo iba dizajn?',
        a: 'Robíme oboje — copy aj HTML/MJML dizajn. Pre špecializované B2B témy môžeme potrebovať váš materiál na rešerš.',
      },
      {
        q: 'Ako riešite deliverability a SPAM?',
        a: 'Nastavujeme SPF, DKIM, DMARC záznamy v DNS. Postupne "rozohrievame" doménu pri novej liste. Mesačne monitorujeme bounce rate a Spam Complaints.',
      },
      {
        q: 'Aký výsledok môžem očakávať?',
        a: 'Pre e-shopy automation flows typicky generujú 20-35% celkového email revenue. Welcome flow má open rate 50-60%, Abandoned Cart konvertuje 8-15% obnovenia.',
      },
    ],

    relatedCases: ['novashop', 'krajcirstvo'],

    seoTitle: 'E-mail marketing agentúra · Klaviyo, Mailchimp, automatizácie',
    seoDescription: 'Welcome flow, abandoned cart, newsletter. E-mail marketing s ROI 30:1. Audit zadarmo.',
  },


  // ============================================
  // MERANIE A ANALYTIKA
  // ============================================
  'meranie': {
    slug: 'meranie',
    category: 'Online marketing',
    categorySlug: 'online-marketing',
    title: 'Meranie a analytika',
    tagline: 'GA4, Tag Manager, server-side tracking. Bez čísel sa nedá optimalizovať.',
    lead: 'Klasické meranie v prehliadači zachytáva iba 65-75% reálnych konverzií. iOS 17, ad blockery, cookie consent — všetko vám rozbíja dáta. Postavíme server-side tracking ktorý vidí všetko a posunie marketing rozhodovanie z „intuície" na čísla.',
    icon: '<path d="M3 3v18h18"></path><path d="M7 14l4-4 4 4 5-5"></path>',

    specs: [
      { label: 'Setup',         value: '5–10 dní' },
      { label: 'Prvé reporty',  value: '2 týždne' },
      { label: 'Reporting',     value: 'Týždenne' },
      { label: 'Zahrnuté',      value: 'Vo všetkých plánoch' },
    ],

    priceFrom: 'Od 590 € (jednorazový setup)',
    priceNote: 'Alebo súčasť mesačného plánu. Setup vrátane GA4, GTM, server-side, Looker Studio.',

    process: [
      { num: 1, title: 'Audit existujúceho stavu', desc: 'Pozrieme čo máte (GA4, GTM, Pixel, Tracking) a porovnáme s reálnymi predajmi. Identifikujeme „diery" v dátach.' },
      { num: 2, title: 'GA4 + GTM setup',           desc: 'Postavíme správne event-y (purchase, lead, contact), Enhanced Conversions, custom dimensions. Test cez GTM Preview Mode.' },
      { num: 3, title: 'Server-side tracking',      desc: 'GTM Server Container (Stape.io alebo Google Cloud Run). Meta CAPI, Google Enhanced Conversions, server-side trackingu pre obchádzanie iOS/AdBlock.' },
      { num: 4, title: 'Dashboard & reporting',     desc: 'Looker Studio dashboard s konverziami, kanálmi, ROAS, CPA. Týždenný update.' },
    ],

    whatYouGet: [
      'GA4 setup (events, conversions, audiences, custom dimensions)',
      'Google Tag Manager Web + Server container',
      'Meta Pixel + Conversion API (CAPI)',
      'Google Enhanced Conversions for Web + Offline Conversion Import',
      'Consent Mode v2 (GDPR + cookie banner integration)',
      'Looker Studio dashboard (kanály, konverzie, ROAS, CPA)',
      'Heatmapy + session recordings (Hotjar / Microsoft Clarity)',
    ],

    forWhom: [
      'Každý kto míňa 300+ €/mes na reklamy a chce vedieť čo z toho funguje',
      'E-shopy ktoré chcú import offline conversions späť do Google Ads',
      'Firmy s leadmi cez formulár / telefón (offline conversion tracking)',
    ],

    faq: [
      {
        q: 'Prečo potrebujem server-side tracking?',
        a: 'Klasický browser tracking stráca 25-35% konverzií kvôli iOS 17 Privacy, ad blockerom a cookie consent „decline". Server-side tracking obchádza prehliadač a posiela dáta priamo na GA4 / Meta.',
      },
      {
        q: 'Koľko stojí prevádzka server-side?',
        a: 'Stape.io máte za ~20 €/mesiac alebo Google Cloud Run za podobne. Setup je jednorazový (590 € v našom audite), prevádzka je vaša.',
      },
      {
        q: 'Robíte aj Looker Studio dashboardy?',
        a: 'Áno — finálny dashboard je súčasť každého setupu. Kanály, ROAS, CPA, top-performing kampane. Updaty automaticky.',
      },
      {
        q: 'Spravíte aj offline conversion tracking?',
        a: 'Áno — ak predávate cez telefón / showroom / kamenná predajňa. Importujeme offline predaje späť do Google Ads cez CSV alebo API.',
      },
    ],

    relatedCases: ['novashop', 'techpark'],

    seoTitle: 'Server-side tracking a meranie · GA4, GTM, CAPI, Looker Studio',
    seoDescription: 'Spustíme presné meranie konverzií cez server-side tracking. Obíďte iOS 17 a ad blocky. Audit zadarmo.',
  },


  // ============================================
  // WEB STRÁNKY a LANDING PAGES
  // ============================================
  'web': {
    slug: 'web',
    category: 'Online marketing',
    categorySlug: 'web-aplikacie',
    title: 'Web a vstupné stránky',
    tagline: 'Rýchle, konverzné landing pages a microweby. Od copy cez dizajn po deploy.',
    lead: 'Vstupná stránka pre vaše Google a Meta Ads je často dôvod, prečo vám klienti nekupujú. Pomalý web, slabá kópia, nejasná hodnota. Postavíme stránku ktorá konvertuje — od briefu po deploy za 2-3 týždne.',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path>',

    specs: [
      { label: 'Setup',         value: '14–21 dní' },
      { label: 'Prvé výsledky', value: '4 týždne' },
      { label: 'Reporting',     value: 'Týždenne' },
      { label: 'Zahrnuté',      value: 'Doplnková služba' },
    ],

    priceFrom: 'Od 890 € (jednorazovo)',
    priceNote: 'Landing page (1 stránka). Microweb 3-5 stránok od 1 890 €.',

    process: [
      { num: 1, title: 'Brief & content strategy', desc: 'Pochopíme produkt, cieľovku, konkurenciu. Pripravíme wireframe a štruktúru.' },
      { num: 2, title: 'Copy & dizajn',            desc: 'Napíšeme copy ktoré sa číta a presviedča. Dizajn v Figma s revíziami.' },
      { num: 3, title: 'Implementácia',            desc: 'Postavíme web na Astro / Next.js (rýchle) alebo WordPress (ak treba CMS). Mobile-first, Core Web Vitals optimalizácia.' },
      { num: 4, title: 'Deploy + A/B testovanie',  desc: 'Nasadenie na Netlify / Vercel / vlastný hosting. SEO + tracking setup. A/B testy CTA, headlinov.' },
    ],

    whatYouGet: [
      'Wireframe + dizajn v Figma (3 revízne kolá)',
      'Copy v slovenčine / češtine (alebo váš text optimalizovaný)',
      'Vývoj — Astro, Next.js alebo WordPress podľa potreby',
      'Core Web Vitals optimalizácia (rýchlosť 90+)',
      'SEO základ (meta, schema, sitemap, robots)',
      'GA4 + GTM + Meta Pixel tracking pripravený',
      'Hosting setup (Netlify / Vercel alebo Váš)',
    ],

    forWhom: [
      'Firmy spúšťajúce nové reklamné kampane bez existujúcej landing page',
      'B2B firmy s drahým produktom (lead-gen formulár ako primary CTA)',
      'Konzultanti, agentúry, freelanceri (presentation site)',
    ],

    faq: [
      {
        q: 'Robíte aj e-shopy?',
        a: 'Áno, ale e-shopy sú samostatná služba (od 2 890 €) s integráciou na Stripe / GoPay / fakturáciu. Pre 5-20 produktov stačí jednoduchý landing s checkoutom.',
      },
      {
        q: 'Aké technológie používate?',
        a: 'Pre marketingové stránky: Astro alebo Next.js (rýchlejšie ako WordPress, lepší SEO). Pre stránky s častými zmenami obsahu: WordPress alebo Sanity headless CMS.',
      },
      {
        q: 'Aká je rýchlosť vývoja?',
        a: 'Landing page (1 stránka): 14-21 dní od briefu po deploy. Microweb (3-5 stránok): 21-35 dní. E-shop: 6-10 týždňov.',
      },
      {
        q: 'Aké tipy hostingu odporúčate?',
        a: 'Netlify alebo Vercel pre Astro / Next.js (free tier postačuje pre väčšinu prípadov). Pre WordPress: WPX alebo Cloudways.',
      },
    ],

    relatedCases: ['ekodom', 'techpark'],

    seoTitle: 'Tvorba landing pages a webov · Astro, Next.js, WordPress',
    seoDescription: 'Konverzné landing pages a microweby. Od briefu po deploy za 2-3 týždne. Core Web Vitals optimalizácia.',
  },
};

// Pomocná funkcia: list všetkých slugov pre getStaticPaths
export const SERVICE_DETAIL_SLUGS = Object.keys(SERVICE_DETAILS);
