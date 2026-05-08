/**
 * Slovník marketingových pojmov
 *
 * 6 kategórií, ~45 pojmov.
 * Každý pojem má:
 *  - term (názov)
 *  - shortcut (skratka, napr. ROAS, CPA)
 *  - category
 *  - description (1-2 vety pre začiatočníkov)
 */

export interface GlossaryTerm {
  term: string;
  shortcut?: string;
  category: 'reklama' | 'meranie' | 'seo' | 'email' | 'eshop' | 'vseobecne';
  description: string;
}

export const glossary: GlossaryTerm[] = [
  // ===== REKLAMA =====
  {
    term: 'A/B testovanie',
    category: 'reklama',
    description: 'Porovnávanie dvoch verzií reklamy (alebo webu) na zistenie, ktorá funguje lepšie. Napríklad rovnaký produkt s dvoma rôznymi titulkami — sleduje sa, ktorý prinesie viac klikov a predajov.',
  },
  {
    term: 'Bid (ponuka)',
    category: 'reklama',
    description: 'Maximálna suma, ktorú ste ochotní zaplatiť za kliknutie alebo zobrazenie reklamy. Reklamné platformy fungujú ako aukcie — kto ponúkne viac (a má kvalitnejšiu reklamu), zobrazí sa pred konkurenciou.',
  },
  {
    term: 'CPC',
    shortcut: 'CPC',
    category: 'reklama',
    description: 'Cost Per Click — cena za jedno kliknutie na reklamu. V Google Ads pre Slovensko bežne 0,30–2 €, podľa odvetvia. Vyšší CPC = viac konkurencie alebo horšia kvalita reklamy.',
  },
  {
    term: 'CPM',
    shortcut: 'CPM',
    category: 'reklama',
    description: 'Cost Per Mille — cena za 1 000 zobrazení reklamy. Používa sa najmä pri brand kampaniach (Display, YouTube), kde nejde o kliky, ale o povedomie.',
  },
  {
    term: 'CPA',
    shortcut: 'CPA',
    category: 'reklama',
    description: 'Cost Per Acquisition — cena za získanie jedného zákazníka alebo objednávky. Najdôležitejší metrik pre e-shopy. CPA 20 € znamená, že zákazník vás stojí 20 € na reklame.',
  },
  {
    term: 'CPL',
    shortcut: 'CPL',
    category: 'reklama',
    description: 'Cost Per Lead — cena za získanie jedného leadu (kontaktu, dopytu). Bežné pri B2B alebo službách, kde sa nepredáva online ale telefonuje sa.',
  },
  {
    term: 'CTR',
    shortcut: 'CTR',
    category: 'reklama',
    description: 'Click-Through Rate — percento ľudí, ktorí klikli na reklamu z tých, čo ju videli. CTR 2 % znamená, že z 1 000 zobrazení kliklo 20 ľudí. Vyšší CTR = relevantnejšia reklama.',
  },
  {
    term: 'Konverzia',
    category: 'reklama',
    description: 'Akákoľvek akcia, ktorú návštevník urobí na webe — nákup, vyplnenie formulára, telefonát, registrácia. Bez sledovania konverzií nemôžete optimalizovať reklamu.',
  },
  {
    term: 'Konverzný pomer',
    shortcut: 'CR',
    category: 'reklama',
    description: 'Conversion Rate — percento návštevníkov, ktorí spravili konverziu. CR 2 % znamená, že z 1 000 návštev 20 nakúpilo. Pre e-shopy je dobré CR 1–3 %.',
  },
  {
    term: 'Lookalike audience',
    category: 'reklama',
    description: 'Publikum, ktoré sa podobá vašim existujúcim zákazníkom (vek, záujmy, správanie). Algoritmus hľadá ľudí, čo majú podobný profil ako tí, čo už nakúpili. Najsilnejší typ cielenia.',
  },
  {
    term: 'Performance Max',
    shortcut: 'PMAX',
    category: 'reklama',
    description: 'Typ Google Ads kampane, ktorá automaticky zobrazuje reklamy naprieč všetkými Google sieťami (Search, YouTube, Discover, Gmail, Maps, Display). Vhodné pre e-shopy s Shopping feedom.',
  },
  {
    term: 'Remarketing (retargeting)',
    category: 'reklama',
    description: 'Reklama cielená na ľudí, ktorí už navštívili váš web alebo si pozreli produkt. Najefektívnejší typ kampane — človek vás už pozná, takže šanca na nákup je vyššia.',
  },
  {
    term: 'ROAS',
    shortcut: 'ROAS',
    category: 'reklama',
    description: 'Return On Ad Spend — návratnosť reklamných výdavkov. ROAS 5× znamená, že za každé euro v reklame ste získali 5 € tržieb. Cieľom väčšiny e-shopov je ROAS aspoň 3–4×.',
  },
  {
    term: 'Search Network',
    category: 'reklama',
    description: 'Reklamy v Google vyhľadávaní — text nad organickými výsledkami. Najsilnejší kanál pre okamžitý dopyt (zákazník už hľadá riešenie).',
  },
  {
    term: 'Display Network',
    category: 'reklama',
    description: 'Bannerové reklamy na partnerských weboch (spravodajské weby, blogy, YouTube). Vhodné pre brand a remarketing, slabšie pre okamžitý predaj.',
  },

  // ===== MERANIE =====
  {
    term: 'GA4',
    shortcut: 'GA4',
    category: 'meranie',
    description: 'Google Analytics 4 — najnovšia verzia analytického nástroja od Google. Sleduje návštevy, konverzie, zdroje trafficu, správanie používateľov. Bezplatný a povinný základ pre každý web.',
  },
  {
    term: 'GTM',
    shortcut: 'GTM',
    category: 'meranie',
    description: 'Google Tag Manager — nástroj na správu trackingových kódov bez zasahovania do kódu webu. Cez GTM nasadzujete GA4, Meta Pixel, konverzie, atď. Centrálne miesto pre všetky tracky.',
  },
  {
    term: 'Pixel',
    category: 'meranie',
    description: 'Malý kúsok kódu (väčšinou JavaScript), ktorý platforma (Meta, Google, TikTok) inštaluje na váš web. Pixel zaznamenáva, kto navštívil web, čo si pozrel a čo nakúpil — to potom umožňuje retargeting.',
  },
  {
    term: 'Server-side tracking',
    category: 'meranie',
    description: 'Pokročilá metóda merania, kde dáta neidú priamo z prehliadača do Google/Meta, ale cez váš server. Obíde ad-blockery a iOS 14.5+ obmedzenia. Vďaka tomu sa zachová ~30 % konverzií, ktoré by sa inak stratili.',
  },
  {
    term: 'CAPI',
    shortcut: 'CAPI',
    category: 'meranie',
    description: 'Conversions API — Meta technológia, ktorá posiela konverzie zo servera priamo na Meta servery. Doplnok k Pixelu — bez nej strácate ~30 % konverzií v atribúcii.',
  },
  {
    term: 'Atribúcia',
    category: 'meranie',
    description: 'Spôsob, akým sa rozhoduje, ktorý kanál dostane "kredit" za konverziu. Napríklad ak zákazník kliknul najprv na Facebook, potom na Google a nakúpil — atribučný model rozhoduje, ktorý kanál sa zarátal.',
  },
  {
    term: 'Looker Studio',
    category: 'meranie',
    description: 'Bezplatný nástroj od Google na tvorbu vizuálnych dashboardov. Spája dáta z viacerých zdrojov (Ads, GA4, Shopify, CRM) do prehľadných grafov. Bývalý Data Studio.',
  },
  {
    term: 'Heatmapa',
    category: 'meranie',
    description: 'Vizualizácia, kde používatelia klikajú a kam sa pozerajú na vašom webe. Teplé farby (červená) = veľa klikov, studené (modrá) = málo. Pomôže odhaliť, prečo ľudia neklikajú na CTA tlačítka. Hotjar, Microsoft Clarity.',
  },
  {
    term: 'Session recording',
    category: 'meranie',
    description: 'Nahrávky reálnych návštev na webe — vidíte, kde používateľ klikol, ako sa hýbal myšou, kde sa "zasekol". Pomôže zistiť, prečo ľudia nedokončia objednávku.',
  },

  // ===== SEO =====
  {
    term: 'SEO',
    shortcut: 'SEO',
    category: 'seo',
    description: 'Search Engine Optimization — optimalizácia webu pre vyhľadávače (hlavne Google). Cieľom je dostať web na prvú stránku výsledkov pre kľúčové slová relevantné pre váš biznis. Dlhodobý proces.',
  },
  {
    term: 'Onpage SEO',
    category: 'seo',
    description: 'Časť SEO, ktorá rieši, čo je priamo na vašom webe — texty, nadpisy, meta tagy, štruktúra, vnútorné prelinkovanie. Najľahšia časť SEO.',
  },
  {
    term: 'Technické SEO',
    category: 'seo',
    description: 'Časť SEO, ktorá rieši technický stav webu — rýchlosť načítania, mobilná verzia, sitemap, robots.txt, schema markup. Bez správneho technického SEO Google web ani neindexuje.',
  },
  {
    term: 'Off-page SEO',
    category: 'seo',
    description: 'Časť SEO, ktorá rieši to, čo o vás hovoria iné weby — backlinks (odkazy na váš web), social media zmienky, recenzie. Najťažšia časť SEO.',
  },
  {
    term: 'Backlink',
    category: 'seo',
    description: 'Odkaz z iného webu na váš web. Google to chápe ako hlas dôvery — čím viac kvalitných backlinkov máte, tým vyššie sa zobrazujete. Pozor: lacné spam linky vás môžu poškodiť.',
  },
  {
    term: 'Local SEO',
    category: 'seo',
    description: 'SEO zamerané na lokálne vyhľadávania ("kaderníctvo Bratislava", "autoservis Prešov"). Kľúčový je Google Business Profile, recenzie a lokálne backlinky.',
  },
  {
    term: 'Google Business Profile',
    shortcut: 'GBP',
    category: 'seo',
    description: 'Bezplatný profil firmy v Google Maps a vyhľadávaní. Obsahuje adresu, otváracie hodiny, fotky, recenzie. Kľúčový pre lokálne podniky — ak nemáte profil, neexistujete pre lokálnych zákazníkov.',
  },
  {
    term: 'Kľúčové slovo (keyword)',
    category: 'seo',
    description: 'Slovo alebo fráza, ktorú zákazník zadáva do Google. Napríklad "kúpiť topánky online" alebo "kaderníctvo Bratislava". SEO sa točí okolo cieľovania správnych kľúčových slov.',
  },
  {
    term: 'Meta description',
    category: 'seo',
    description: 'Krátky popis stránky (do 160 znakov), ktorý Google zobrazuje pod titulkom vo výsledkoch. Neovplyvňuje priamo SEO pozíciu, ale ovplyvňuje, či ľudia kliknú práve na váš výsledok.',
  },

  // ===== EMAIL =====
  {
    term: 'Newsletter',
    category: 'email',
    description: 'Pravidelný e-mail rozosielaný zoznamu odberateľov. Obsahuje novinky, akcie, články. Lacný kanál na komunikáciu s existujúcimi zákazníkmi.',
  },
  {
    term: 'Welcome flow',
    category: 'email',
    description: 'Automatická séria e-mailov, ktorá sa odošle novému odberateľovi (alebo prvonákupníkovi). Predstavuje firmu, produkty, hodnoty. Najsilnejšie e-maily — otvorenosť cez 50 %.',
  },
  {
    term: 'Abandoned cart',
    category: 'email',
    description: 'Automatický e-mail, ktorý sa odošle zákazníkovi, čo dal produkt do košíka, ale nenakúpil. Bežne získava 10–20 % stratených objednávok späť.',
  },
  {
    term: 'Open rate',
    category: 'email',
    description: 'Percento ľudí, ktorí otvorili váš e-mail z tých, čo ho dostali. Bežný open rate pre newsletter je 20–30 %. Pri welcome flow až 50–60 %.',
  },
  {
    term: 'Klaviyo',
    category: 'email',
    description: 'Najpopulárnejšia e-mail platforma pre e-shopy. Najlepšia integrácia so Shopify, WooCommerce. Pokročilá segmentácia a flows.',
  },
  {
    term: 'Mailchimp',
    category: 'email',
    description: 'Najznámejšia e-mail platforma — jednoduchá, lacná pre malých. Bezplatná pre ~500 kontaktov. Vhodné pre začiatočníkov a malé firmy.',
  },

  // ===== E-SHOP =====
  {
    term: 'AOV',
    shortcut: 'AOV',
    category: 'eshop',
    description: 'Average Order Value — priemerná hodnota objednávky. AOV 80 € znamená, že priemerný zákazník nakúpi za 80 €. Zvýšenie AOV o 10 % je často ľahšie než získať nového zákazníka.',
  },
  {
    term: 'LTV',
    shortcut: 'LTV',
    category: 'eshop',
    description: 'Lifetime Value — celková hodnota zákazníka cez celú dobu nákupov. Ak zákazník priemerne nakúpi 4× v živote a každá objednávka je 80 €, LTV = 320 €. Toto je strop, koľko môžete minúť na získanie zákazníka.',
  },
  {
    term: 'Shopify',
    category: 'eshop',
    description: 'Globálna e-shop platforma — najjednoduchšia integrácia s Meta CAPI, Klaviyo, GA4. Hodí sa pre nové aj rastúce e-shopy. Mesačný poplatok od ~30 USD.',
  },
  {
    term: 'WooCommerce',
    category: 'eshop',
    description: 'Bezplatný e-shop plugin pre WordPress. Flexibilný, ale vyžaduje viac údržby (hosting, security, updates). Hodí sa, ak už máte WordPress web.',
  },
  {
    term: 'Upgades',
    category: 'eshop',
    description: 'Slovenská e-shop platforma s dobrým support-om pre SK/CZ trh. Mesačný poplatok od ~30 €. Vhodná pre lokálne e-shopy.',
  },
  {
    term: 'Shoptet',
    category: 'eshop',
    description: 'Veľmi populárna e-shop platforma v ČR a SR. Mesačný poplatok od ~10 €. Dobré pre začínajúce e-shopy.',
  },
  {
    term: 'Feed (produktový)',
    category: 'eshop',
    description: 'Štruktúrovaný zoznam produktov vo formáte, ktorý chápu reklamné platformy (XML, CSV). Bez správneho feedu nemôžete spustiť Google Shopping ani Meta Catalog reklamu.',
  },
  {
    term: 'Google Shopping',
    category: 'eshop',
    description: 'Reklama v Google s obrázkom produktu, cenou a názvom obchodu. Najsilnejší kanál pre e-shopy — zákazník vidí produkt ešte pred kliknutím.',
  },
  {
    term: 'Heuréka',
    category: 'eshop',
    description: 'Najväčší porovnávač cien v ČR a SR. Pre e-shopy povinný kanál — väčšina ľudí pri nákupe overuje cenu cez Heuréku.',
  },

  // ===== VŠEOBECNÉ =====
  {
    term: 'B2B',
    shortcut: 'B2B',
    category: 'vseobecne',
    description: 'Business to Business — predaj firmám. Dlhý rozhodovací cyklus, viac rozhodovateľov, vyššie hodnoty objednávok. LinkedIn, Google Search a B2B landing pages sú hlavné kanály.',
  },
  {
    term: 'B2C',
    shortcut: 'B2C',
    category: 'vseobecne',
    description: 'Business to Consumer — predaj koncovým zákazníkom (bežní ľudia). Krátky rozhodovací cyklus, impulzné nákupy. Meta a Google sú hlavné kanály.',
  },
  {
    term: 'KPI',
    shortcut: 'KPI',
    category: 'vseobecne',
    description: 'Key Performance Indicator — kľúčový metrik, ktorý sledujete. Pre e-shop sú KPI tržby, ROAS, počet objednávok, AOV. Bez KPI neviete, či kampaň funguje.',
  },
  {
    term: 'Brand awareness',
    category: 'vseobecne',
    description: 'Povedomie o značke — koľko ľudí vás pozná, hoci u vás nikdy nenakúpili. Nie je to priamy predaj, ale zvyšuje budúce konverzie. YouTube, Display a sociálne siete sú hlavné kanály.',
  },
  {
    term: 'Funnel',
    category: 'vseobecne',
    description: 'Lievik — cesta zákazníka od prvého kontaktu po nákup. Top funnel = povedomie (nikdy nepočul o vás), middle = zvažovanie, bottom = nákup. Každá fáza potrebuje iný typ reklamy.',
  },
  {
    term: 'Lead',
    category: 'vseobecne',
    description: 'Potenciálny zákazník, ktorý prejavil záujem (vyplnil formulár, zavolal, stiahol PDF). Nie je to ešte zákazník, ale niekto, komu môžete predávať.',
  },
  {
    term: 'Landing page',
    shortcut: 'LP',
    category: 'vseobecne',
    description: 'Jednoúčelová stránka, na ktorú vedú reklamy. Má jeden cieľ — získať konverziu (nákup, formulár, telefonát). Bez rušivých elementov, jasné CTA.',
  },
  {
    term: 'CTA',
    shortcut: 'CTA',
    category: 'vseobecne',
    description: 'Call To Action — výzva k akcii. Tlačítko alebo odkaz, ktorý hovorí, čo má návštevník urobiť: "Kúpiť teraz", "Vyžiadať audit", "Zarezervovať sa". Najdôležitejší prvok na webe.',
  },
];
