/**
 * Slovník marketingových pojmov - lokalizovany
 *
 * 6 kategórií, ~56 pojmov.
 * Každý pojem má:
 *  - term (lokalizovany - 5 jazykov)
 *  - shortcut (skratka, napr. ROAS, CPA - tie su language-agnostic)
 *  - category
 *  - description (lokalizovany - 5 jazykov)
 */

import type { Lang } from './i18n';

type MultiLang = Record<Lang, string>;

export interface GlossaryTerm {
  term: MultiLang;
  shortcut?: string;
  category: 'reklama' | 'meranie' | 'seo' | 'email' | 'eshop' | 'vseobecne';
  description: MultiLang;
}

export const glossary: GlossaryTerm[] = [
  {
    term: {"sk":"A/B testovanie","cs":"A/B testování","hu":"A/B tesztelés","en":"A/B testing","de":"A/B-Testing"},
    category: "reklama",
    description: {"sk":"Porovnávanie dvoch verzií reklamy (alebo webu) na zistenie, ktorá funguje lepšie. Napríklad rovnaký produkt s dvoma rôznymi titulkami — sleduje sa, ktorý prinesie viac klikov a predajov.","cs":"Porovnávání dvou verzí reklamy (nebo webu) na zjištění, která funguje lépe. Například stejný produkt se dvěma různými titulky — sleduje se, který přinese více kliků a prodejů.","hu":"Két reklámverzió (vagy weboldal) összehasonlítása annak kiderítésére, hogy melyik működik jobban. Például ugyanaz a termék két különböző címmel — azt nézzük, melyik hoz több kattintást és eladást.","en":"Comparing two versions of an ad (or website) to determine which performs better. For example, the same product with two different headlines — you track which one brings more clicks and sales.","de":"Vergleich zweier Werbeversionen (oder Websites), um herauszufinden, welche besser funktioniert. Zum Beispiel dasselbe Produkt mit zwei verschiedenen Titeln — man beobachtet, welcher mehr Klicks und Verkäufe bringt."},
  },
  {
    term: {"sk":"Bid (ponuka)","cs":"Bid (nabídka)","hu":"Bid (ajánlat)","en":"Bid","de":"Bid (Gebot)"},
    category: "reklama",
    description: {"sk":"Maximálna suma, ktorú ste ochotní zaplatiť za kliknutie alebo zobrazenie reklamy. Reklamné platformy fungujú ako aukcie — kto ponúkne viac (a má kvalitnejšiu reklamu), zobrazí sa pred konkurenciou.","cs":"Maximální částka, kterou jste ochotni zaplatit za kliknutí nebo zobrazení reklamy. Reklamní platformy fungují jako aukce — kdo nabídne více (a má kvalitnější reklamu), zobrazí se před konkurencí.","hu":"A maximális összeg, amelyet hajlandó fizetni egy kattintásért vagy reklámmejelenítésért. A reklámpaltformok aukciókként működnek — aki többet ajánl (és jobb minőségű reklámja van), az jelenik meg a versenytársak előtt.","en":"The maximum amount you're willing to pay for a click or ad impression. Ad platforms work like auctions — whoever bids more (and has better quality ads) appears ahead of the competition.","de":"Maximale Summe, die Sie bereit sind für einen Klick oder eine Anzeigenschaltung zu zahlen. Werbeplattformen funktionieren wie Auktionen — wer mehr bietet (und eine hochwertigere Anzeige hat), wird vor der Konkurrenz angezeigt."},
  },
  {
    term: {"sk":"CPC","cs":"CPC","hu":"CPC","en":"CPC","de":"CPC"},
    shortcut: "CPC",
    category: "reklama",
    description: {"sk":"Cost Per Click — cena za jedno kliknutie na reklamu. V Google Ads pre Slovensko bežne 0,30–2 €, podľa odvetvia. Vyšší CPC = viac konkurencie alebo horšia kvalita reklamy.","cs":"Cost Per Click — cena za jedno kliknutí na reklamu. V Google Ads pro Slovensko běžně 0,30–2 €, podle odvětví. Vyšší CPC = více konkurence nebo horší kvalita reklamy.","hu":"Cost Per Click — egy reklámkattintás ára. A Google Ads-ben Szlovákiában általában 0,30–2 €, ágazattól függően. Magasabb CPC = több verseny vagy rosszabb reklámminőség.","en":"Cost Per Click — the price for one click on your ad. In Google Ads for Slovakia typically €0.30–2, depending on the industry. Higher CPC = more competition or worse ad quality.","de":"Cost Per Click — Preis pro Klick auf eine Anzeige. In Google Ads für die Slowakei üblicherweise 0,30–2 €, je nach Branche. Höherer CPC = mehr Konkurrenz oder schlechtere Anzeigenqualität."},
  },
  {
    term: {"sk":"CPM","cs":"CPM","hu":"CPM","en":"CPM","de":"CPM"},
    shortcut: "CPM",
    category: "reklama",
    description: {"sk":"Cost Per Mille — cena za 1 000 zobrazení reklamy. Používa sa najmä pri brand kampaniach (Display, YouTube), kde nejde o kliky, ale o povedomie.","cs":"Cost Per Mille — cena za 1 000 zobrazení reklamy. Používá se zejména u brand kampaní (Display, YouTube), kde nejde o kliky, ale o povědomí.","hu":"Cost Per Mille — 1 000 reklámmejelenítés ára. Főként brand kampányoknál használják (Display, YouTube), ahol nem a kattintások, hanem az ismertség a cél.","en":"Cost Per Mille — the price for 1,000 ad impressions. Used mainly in brand campaigns (Display, YouTube), where it's not about clicks but awareness.","de":"Cost Per Mille — Preis für 1.000 Anzeigenschaltungen. Wird hauptsächlich bei Brand-Kampagnen (Display, YouTube) verwendet, wo es nicht um Klicks, sondern um Bekanntheit geht."},
  },
  {
    term: {"sk":"CPA","cs":"CPA","hu":"CPA","en":"CPA","de":"CPA"},
    shortcut: "CPA",
    category: "reklama",
    description: {"sk":"Cost Per Acquisition — cena za získanie jedného zákazníka alebo objednávky. Najdôležitejší metrik pre e-shopy. CPA 20 € znamená, že zákazník vás stojí 20 € na reklame.","cs":"Cost Per Acquisition — cena za získání jednoho zákazníka nebo objednávky. Nejdůležitější metrika pro e-shopy. CPA 20 € znamená, že zákazník vás stojí 20 € na reklamě.","hu":"Cost Per Acquisition — egy ügyfél vagy megrendelés megszerzésének költsége. A legfontosabb mutató webáruházak számára. 20 € CPA azt jelenti, hogy egy ügyfél 20 € reklámpénzbe kerül.","en":"Cost Per Acquisition — the cost to acquire one customer or order. The most important metric for e-shops. CPA €20 means a customer costs you €20 in advertising.","de":"Cost Per Acquisition — Preis für die Gewinnung eines Kunden oder einer Bestellung. Wichtigste Kennzahl für Online-Shops. CPA 20 € bedeutet, dass Sie ein Kunde 20 € in der Werbung kostet."},
  },
  {
    term: {"sk":"CPL","cs":"CPL","hu":"CPL","en":"CPL","de":"CPL"},
    shortcut: "CPL",
    category: "reklama",
    description: {"sk":"Cost Per Lead — cena za získanie jedného leadu (kontaktu, dopytu). Bežné pri B2B alebo službách, kde sa nepredáva online ale telefonuje sa.","cs":"Cost Per Lead — cena za získání jednoho leadu (kontaktu, poptávky). Běžné u B2B nebo služeb, kde se neprodává online ale telefonuje se.","hu":"Cost Per Lead — egy lead (kapcsolat, érdeklődés) megszerzésének költsége. Gyakori B2B-nél vagy szolgáltatásoknál, ahol nem online értékesítenek, hanem telefonálnak.","en":"Cost Per Lead — the cost to acquire one lead (contact, inquiry). Common in B2B or services where you don't sell online but make phone calls.","de":"Cost Per Lead — Preis für die Gewinnung eines Leads (Kontakt, Anfrage). Üblich bei B2B oder Dienstleistungen, wo nicht online verkauft wird, sondern telefoniert wird."},
  },
  {
    term: {"sk":"CTR","cs":"CTR","hu":"CTR","en":"CTR","de":"CTR"},
    shortcut: "CTR",
    category: "reklama",
    description: {"sk":"Click-Through Rate — percento ľudí, ktorí klikli na reklamu z tých, čo ju videli. CTR 2 % znamená, že z 1 000 zobrazení kliklo 20 ľudí. Vyšší CTR = relevantnejšia reklama.","cs":"Click-Through Rate — procento lidí, kteří klikli na reklamu z těch, co ji viděli. CTR 2 % znamená, že z 1 000 zobrazení kliklo 20 lidí. Vyšší CTR = relevantnější reklama.","hu":"Click-Through Rate — azok százaléka, akik rákattintottak a reklámra azok közül, akik látták. 2%-os CTR azt jelenti, hogy 1 000 mejelenítésből 20-an kattintottak. Magasabb CTR = relevánsabb reklám.","en":"Click-Through Rate — the percentage of people who clicked on your ad out of those who saw it. CTR 2% means that out of 1,000 impressions, 20 people clicked. Higher CTR = more relevant ad.","de":"Click-Through Rate — Prozentsatz der Personen, die auf eine Anzeige geklickt haben von denen, die sie gesehen haben. CTR 2 % bedeutet, dass von 1.000 Anzeigenschaltungen 20 Personen geklickt haben. Höhere CTR = relevantere Anzeige."},
  },
  {
    term: {"sk":"Konverzia","cs":"Konverze","hu":"Konverzió","en":"Conversion","de":"Conversion"},
    category: "reklama",
    description: {"sk":"Akákoľvek akcia, ktorú návštevník urobí na webe — nákup, vyplnenie formulára, telefonát, registrácia. Bez sledovania konverzií nemôžete optimalizovať reklamu.","cs":"Jakákoliv akce, kterou návštěvník udělá na webu — nákup, vyplnění formuláře, telefonát, registrace. Bez sledování konverzí nemůžete optimalizovat reklamu.","hu":"Bármilyen művelet, amit a látogató elvégez a weboldalon — vásárlás, űrlap kitöltése, telefonhívás, regisztráció. Konverziókövetés nélkül nem tudják optimalizálni a hirdetését.","en":"Any action that a visitor takes on your website — purchase, form submission, phone call, registration. Without tracking conversions, you cannot optimize your advertising.","de":"Jede Aktion, die ein Besucher auf der Website ausführt — Kauf, Ausfüllen eines Formulars, Anruf, Registrierung. Ohne Conversion-Tracking können Sie Ihre Werbung nicht optimieren."},
  },
  {
    term: {"sk":"Konverzný pomer","cs":"Konverzní poměr","hu":"Konverziós arány","en":"Conversion Rate","de":"Conversion Rate"},
    shortcut: "CR",
    category: "reklama",
    description: {"sk":"Conversion Rate — percento návštevníkov, ktorí spravili konverziu. CR 2 % znamená, že z 1 000 návštev 20 nakúpilo. Pre e-shopy je dobré CR 1–3 %.","cs":"Conversion Rate — procento návštěvníků, kteří provedli konverzi. CR 2 % znamená, že z 1 000 návštěv 20 nakoupilo. Pro e-shopy je dobré CR 1–3 %.","hu":"Conversion Rate — a látogatók százaléka, akik konverziót hajtottak végre. 2%-os CR azt jelenti, hogy 1000 látogatásból 20-an vásároltak. Az e-shopok számára jó a 1–3%-os CR.","en":"Conversion Rate — percentage of visitors who made a conversion. CR 2% means that out of 1,000 visits, 20 made a purchase. For e-shops, a good CR is 1-3%.","de":"Conversion Rate — Prozentsatz der Besucher, die eine Conversion durchgeführt haben. CR 2 % bedeutet, dass von 1.000 Besuchen 20 gekauft haben. Für Online-Shops ist eine CR von 1–3 % gut."},
  },
  {
    term: {"sk":"Lookalike audience","cs":"Lookalike audience","hu":"Lookalike audience","en":"Lookalike audience","de":"Lookalike audience"},
    category: "reklama",
    description: {"sk":"Publikum, ktoré sa podobá vašim existujúcim zákazníkom (vek, záujmy, správanie). Algoritmus hľadá ľudí, čo majú podobný profil ako tí, čo už nakúpili. Najsilnejší typ cielenia.","cs":"Publikum, které se podobá vašim stávajícím zákazníkům (věk, zájmy, chování). Algoritmus hledá lidi, kteří mají podobný profil jako ti, kteří už nakoupili. Nejsilnější typ cílení.","hu":"Olyan közönség, amely hasonlít a meglévő ügyfeleikhez (kor, érdeklődés, viselkedés). Az algoritmus olyan embereket keres, akiknek hasonló a profilja, mint azoknak, akik már vásároltak. A legerősebb célzási típus.","en":"An audience that resembles your existing customers (age, interests, behavior). The algorithm looks for people who have a similar profile to those who have already purchased. The strongest type of targeting.","de":"Zielgruppe, die Ihren bestehenden Kunden ähnelt (Alter, Interessen, Verhalten). Der Algorithmus sucht Menschen, die ein ähnliches Profil haben wie die, die bereits gekauft haben. Stärkste Art des Targetings."},
  },
  {
    term: {"sk":"Performance Max","cs":"Performance Max","hu":"Performance Max","en":"Performance Max","de":"Performance Max"},
    shortcut: "PMAX",
    category: "reklama",
    description: {"sk":"Typ Google Ads kampane, ktorá automaticky zobrazuje reklamy naprieč všetkými Google sieťami (Search, YouTube, Discover, Gmail, Maps, Display). Vhodné pre e-shopy s Shopping feedom.","cs":"Typ Google Ads kampaně, která automaticky zobrazuje reklamy napříč všemi Google sítěmi (Search, YouTube, Discover, Gmail, Maps, Display). Vhodné pro e-shopy s Shopping feedem.","hu":"Google Ads kampánytípus, amely automatikusan megjeleníti a hirdetéseket az összes Google hálózaton (Search, YouTube, Discover, Gmail, Maps, Display). Alkalmas Shopping feed-del rendelkező e-shopok számára.","en":"A type of Google Ads campaign that automatically displays ads across all Google networks (Search, YouTube, Discover, Gmail, Maps, Display). Suitable for e-shops with Shopping feed.","de":"Google Ads-Kampagnentyp, der automatisch Anzeigen in allen Google-Netzwerken schaltet (Search, YouTube, Discover, Gmail, Maps, Display). Geeignet für Online-Shops mit Shopping-Feed."},
  },
  {
    term: {"sk":"Remarketing (retargeting)","cs":"Remarketing (retargeting)","hu":"Remarketing (retargeting)","en":"Remarketing (retargeting)","de":"Remarketing (Retargeting)"},
    category: "reklama",
    description: {"sk":"Reklama cielená na ľudí, ktorí už navštívili váš web alebo si pozreli produkt. Najefektívnejší typ kampane — človek vás už pozná, takže šanca na nákup je vyššia.","cs":"Reklama cílená na lidi, kteří už navštívili váš web nebo si prohlédli produkt. Nejefektivnější typ kampaně — člověk vás už zná, takže šance na nákup je vyšší.","hu":"Olyan emberekre irányuló hirdetés, akik már látogatták a weboldalukat vagy megnézték a terméket. A leghatékonyabb kampánytípus — az ember már ismeri Önöket, így nagyobb az esély a vásárlásra.","en":"Advertising targeted at people who have already visited your website or viewed a product. The most effective type of campaign — the person already knows you, so the chance of purchase is higher.","de":"Werbung, die auf Menschen ausgerichtet ist, die bereits Ihre Website besucht oder sich ein Produkt angesehen haben. Effektivster Kampagnentyp — die Person kennt Sie bereits, daher ist die Kaufchance höher."},
  },
  {
    term: {"sk":"ROAS","cs":"ROAS","hu":"ROAS","en":"ROAS","de":"ROAS"},
    shortcut: "ROAS",
    category: "reklama",
    description: {"sk":"Return On Ad Spend — návratnosť reklamných výdavkov. ROAS 5× znamená, že za každé euro v reklame ste získali 5 € tržieb. Cieľom väčšiny e-shopov je ROAS aspoň 3–4×.","cs":"Return On Ad Spend — návratnost reklamních výdajů. ROAS 5× znamená, že za každé euro v reklamě jste získali 5 € tržeb. Cílem většiny e-shopů je ROAS alespoň 3–4×.","hu":"Return On Ad Spend — a hirdetési költések megtérülése. 5×-os ROAS azt jelenti, hogy minden hirdetésre költött euróért 5 € bevételt szereztek. A legtöbb e-shop célja legalább 3–4×-os ROAS.","en":"Return On Ad Spend — return on advertising spend. ROAS 5× means that for every euro spent on advertising, you generated €5 in revenue. The goal of most e-shops is ROAS of at least 3-4×.","de":"Return On Ad Spend — Rentabilität der Werbeausgaben. ROAS 5× bedeutet, dass Sie für jeden Euro in der Werbung 5 € Umsatz erzielt haben. Ziel der meisten Online-Shops ist ein ROAS von mindestens 3–4×."},
  },
  {
    term: {"sk":"Search Network","cs":"Search Network","hu":"Search Network","en":"Search Network","de":"Search Network"},
    category: "reklama",
    description: {"sk":"Reklamy v Google vyhľadávaní — text nad organickými výsledkami. Najsilnejší kanál pre okamžitý dopyt (zákazník už hľadá riešenie).","cs":"Reklamy v Google vyhledávání — text nad organickými výsledky. Nejsilnější kanál pro okamžitou poptávku (zákazník už hledá řešení).","hu":"Hirdetések a Google keresésben — szöveg az organikus eredmények felett. A legerősebb csatorna az azonnali kereslet számára (az ügyfél már megoldást keres).","en":"Ads in Google search — text above organic results. The strongest channel for immediate demand (the customer is already looking for a solution).","de":"Anzeigen in der Google-Suche — Text über den organischen Ergebnissen. Stärkster Kanal für sofortige Nachfrage (Kunde sucht bereits nach einer Lösung)."},
  },
  {
    term: {"sk":"Display Network","cs":"Display Network","hu":"Display Network","en":"Display Network","de":"Display Network"},
    category: "reklama",
    description: {"sk":"Bannerové reklamy na partnerských weboch (spravodajské weby, blogy, YouTube). Vhodné pre brand a remarketing, slabšie pre okamžitý predaj.","cs":"Bannerové reklamy na partnerských webech (zpravodajské weby, blogy, YouTube). Vhodné pro brand a remarketing, slabší pro okamžitý prodej.","hu":"Banneres hirdetések partnerhálózati webhelyeken (híroldalak, blogok, YouTube). Alkalmas branding és remarketing célokra, kevésbé hatékony azonnali értékesítéshez.","en":"Banner ads on partner websites (news sites, blogs, YouTube). Suitable for branding and remarketing, weaker for immediate sales.","de":"Banner-Werbung auf Partner-Websites (Nachrichten-Websites, Blogs, YouTube). Geeignet für Branding und Remarketing, weniger effektiv für sofortige Verkäufe."},
  },
  {
    term: {"sk":"GA4","cs":"GA4","hu":"GA4","en":"GA4","de":"GA4"},
    shortcut: "GA4",
    category: "meranie",
    description: {"sk":"Google Analytics 4 — najnovšia verzia analytického nástroja od Google. Sleduje návštevy, konverzie, zdroje trafficu, správanie používateľov. Bezplatný a povinný základ pre každý web.","cs":"Google Analytics 4 — nejnovější verze analytického nástroje od Google. Sleduje návštěvy, konverze, zdroje trafficu, chování uživatelů. Bezplatný a povinný základ pro každý web.","hu":"Google Analytics 4 — a Google legújabb analitikai eszköze. Követi a látogatásokat, konverziókat, forgalomforrásokat, felhasználói viselkedést. Ingyenes és minden webhelyhez kötelező alapeszköz.","en":"Google Analytics 4 — the latest version of Google's analytics tool. Tracks visits, conversions, traffic sources, and user behavior. Free and essential foundation for every website.","de":"Google Analytics 4 — die neueste Version des Analytics-Tools von Google. Verfolgt Besuche, Conversions, Traffic-Quellen und Nutzerverhalten. Kostenlos und unverzichtbare Grundlage für jede Website."},
  },
  {
    term: {"sk":"GTM","cs":"GTM","hu":"GTM","en":"GTM","de":"GTM"},
    shortcut: "GTM",
    category: "meranie",
    description: {"sk":"Google Tag Manager — nástroj na správu trackingových kódov bez zasahovania do kódu webu. Cez GTM nasadzujete GA4, Meta Pixel, konverzie, atď. Centrálne miesto pre všetky tracky.","cs":"Google Tag Manager — nástroj na správu trackingových kódů bez zásahů do kódu webu. Přes GTM nasazujete GA4, Meta Pixel, konverze, atd. Centrální místo pro všechny tracky.","hu":"Google Tag Manager — követőkódok kezelésére szolgáló eszköz a weboldal kódjának módosítása nélkül. A GTM-en keresztül telepíthetik a GA4-et, Meta Pixelt, konverziókat stb. Központi hely minden követőkódhoz.","en":"Google Tag Manager — a tool for managing tracking codes without interfering with website code. Through GTM you deploy GA4, Meta Pixel, conversions, etc. Central place for all tracking.","de":"Google Tag Manager — Tool zur Verwaltung von Tracking-Codes ohne Eingriffe in den Website-Code. Über GTM implementieren Sie GA4, Meta Pixel, Conversions usw. Zentrale Stelle für alle Tracking-Codes."},
  },
  {
    term: {"sk":"Pixel","cs":"Pixel","hu":"Pixel","en":"Pixel","de":"Pixel"},
    category: "meranie",
    description: {"sk":"Malý kúsok kódu (väčšinou JavaScript), ktorý platforma (Meta, Google, TikTok) inštaluje na váš web. Pixel zaznamenáva, kto navštívil web, čo si pozrel a čo nakúpil — to potom umožňuje retargeting.","cs":"Malý kousek kódu (většinou JavaScript), který platforma (Meta, Google, TikTok) instaluje na váš web. Pixel zaznamenává, kdo navštívil web, co si prohlédl a co nakoupil — to pak umožňuje retargeting.","hu":"Egy kis kóddarab (többnyire JavaScript), amelyet a platform (Meta, Google, TikTok) telepít az Önök webhelyére. A Pixel rögzíti, hogy ki látogatta meg a webhelyet, mit nézett meg és mit vásárolt — ez teszi lehetővé a retargetinget.","en":"A small piece of code (usually JavaScript) that platforms (Meta, Google, TikTok) install on your website. The pixel records who visited the site, what they viewed, and what they purchased — this then enables retargeting.","de":"Ein kleines Stück Code (meist JavaScript), das die Plattform (Meta, Google, TikTok) auf Ihrer Website installiert. Der Pixel erfasst, wer die Website besucht hat, was angesehen und gekauft wurde — dies ermöglicht dann Retargeting."},
  },
  {
    term: {"sk":"Server-side tracking","cs":"Server-side tracking","hu":"Server-side tracking","en":"Server-side tracking","de":"Server-side tracking"},
    category: "meranie",
    description: {"sk":"Pokročilá metóda merania, kde dáta neidú priamo z prehliadača do Google/Meta, ale cez váš server. Obíde ad-blockery a iOS 14.5+ obmedzenia. Vďaka tomu sa zachová ~30 % konverzií, ktoré by sa inak stratili.","cs":"Pokročilá metoda měření, kde data nejdou přímo z prohlížeče do Google/Meta, ale přes váš server. Obchází ad-blockery a iOS 14.5+ omezení. Díky tomu se zachová ~30 % konverzí, které by se jinak ztratily.","hu":"Fejlett mérési módszer, ahol az adatok nem közvetlenül a böngészőből jutnak el a Google/Meta rendszerekbe, hanem az Önök szerverén keresztül. Megkerüli az ad-blockereket és az iOS 14.5+ korlátozásokat. Ennek köszönhetően megőrzi a konverziók ~30%-át, amelyek egyébként elvesznének.","en":"Advanced measurement method where data doesn't go directly from the browser to Google/Meta, but through your server. Bypasses ad-blockers and iOS 14.5+ restrictions. Thanks to this, ~30% of conversions that would otherwise be lost are preserved.","de":"Fortgeschrittene Messmethode, bei der Daten nicht direkt vom Browser zu Google/Meta gehen, sondern über Ihren Server. Umgeht Ad-Blocker und iOS 14.5+ Beschränkungen. Dadurch bleiben ~30 % der Conversions erhalten, die sonst verloren gehen würden."},
  },
  {
    term: {"sk":"CAPI","cs":"CAPI","hu":"CAPI","en":"CAPI","de":"CAPI"},
    shortcut: "CAPI",
    category: "meranie",
    description: {"sk":"Conversions API — Meta technológia, ktorá posiela konverzie zo servera priamo na Meta servery. Doplnok k Pixelu — bez nej strácate ~30 % konverzií v atribúcii.","cs":"Conversions API — Meta technologie, která posílá konverze ze serveru přímo na Meta servery. Doplněk k Pixelu — bez ní ztrácíte ~30 % konverzí v atribuci.","hu":"Conversions API — Meta technológia, amely a konverziókat a szerverről közvetlenül a Meta szervereire küldi. A Pixel kiegészítője — nélküle az attribúcióban a konverziók ~30%-át elvesztik.","en":"Conversions API — Meta technology that sends conversions from the server directly to Meta servers. Complement to the Pixel — without it you lose ~30% of conversions in attribution.","de":"Conversions API — Meta-Technologie, die Conversions vom Server direkt an Meta-Server sendet. Ergänzung zum Pixel — ohne diese verlieren Sie ~30 % der Conversions in der Attribution."},
  },
  {
    term: {"sk":"Atribúcia","cs":"Atribuce","hu":"Atribúció","en":"Attribution","de":"Atribúcia"},
    category: "meranie",
    description: {"sk":"Spôsob, akým sa rozhoduje, ktorý kanál dostane \"kredit\" za konverziu. Napríklad ak zákazník kliknul najprv na Facebook, potom na Google a nakúpil — atribučný model rozhoduje, ktorý kanál sa zarátal.","cs":"Způsob, jakým se rozhoduje, který kanál dostane \"kredit\" za konverzi. Například pokud zákazník klikl nejprve na Facebook, pak na Google a nakoupil — atribuční model rozhoduje, který kanál se započítá.","hu":"Az a módszer, ahogyan eldől, hogy melyik csatorna kapja meg a \"kreditet\" egy konverzióért. Például ha a vásárló először a Facebookra kattintott, majd a Google-re és vásárolt — az attribúciós modell dönti el, hogy melyik csatornának számít be.","en":"The way it's decided which channel gets \"credit\" for a conversion. For example, if a customer first clicked on Facebook, then Google and made a purchase — the attribution model decides which channel gets counted.","de":"Die Art, wie entschieden wird, welcher Kanal den \"Kredit\" für eine Conversion erhält. Zum Beispiel, wenn ein Kunde zuerst auf Facebook, dann auf Google klickt und kauft — das Attributionsmodell entscheidet, welcher Kanal angerechnet wird."},
  },
  {
    term: {"sk":"Looker Studio","cs":"Looker Studio","hu":"Looker Studio","en":"Looker Studio","de":"Looker Studio"},
    category: "meranie",
    description: {"sk":"Bezplatný nástroj od Google na tvorbu vizuálnych dashboardov. Spája dáta z viacerých zdrojov (Ads, GA4, Shopify, CRM) do prehľadných grafov. Bývalý Data Studio.","cs":"Bezplatný nástroj od Google na tvorbu vizuálních dashboardů. Spojuje data z více zdrojů (Ads, GA4, Shopify, CRM) do přehledných grafů. Bývalý Data Studio.","hu":"Ingyenes eszköz a Google-tól vizuális dashboardok készítéséhez. Több forrásból (Ads, GA4, Shopify, CRM) származó adatokat kapcsol össze áttekinthető grafikonokba. Korábbi neve Data Studio.","en":"Free tool from Google for creating visual dashboards. Connects data from multiple sources (Ads, GA4, Shopify, CRM) into clear charts. Formerly Data Studio.","de":"Kostenloses Tool von Google zur Erstellung visueller Dashboards. Verbindet Daten aus mehreren Quellen (Ads, GA4, Shopify, CRM) in übersichtlichen Diagrammen. Ehemals Data Studio."},
  },
  {
    term: {"sk":"Heatmapa","cs":"Heatmapa","hu":"Heatmapa","en":"Heatmap","de":"Heatmap"},
    category: "meranie",
    description: {"sk":"Vizualizácia, kde používatelia klikajú a kam sa pozerajú na vašom webe. Teplé farby (červená) = veľa klikov, studené (modrá) = málo. Pomôže odhaliť, prečo ľudia neklikajú na CTA tlačítka. Hotjar, Microsoft Clarity.","cs":"Vizualizace, kde uživatelé klikají a kam se dívají na vašem webu. Teplé barvy (červená) = hodně kliků, studené (modrá) = málo. Pomůže odhalit, proč lidé neklikají na CTA tlačítka. Hotjar, Microsoft Clarity.","hu":"Vizualizáció, amely megmutatja, hová kattintanak és mire néznek a felhasználók az Önök weboldalán. Meleg színek (piros) = sok kattintás, hideg (kék) = kevés. Segít feltárni, miért nem kattintanak az emberek a CTA gombokra. Hotjar, Microsoft Clarity.","en":"Visualization showing where users click and look on your website. Warm colors (red) = many clicks, cold colors (blue) = few clicks. Helps reveal why people don't click on CTA buttons. Hotjar, Microsoft Clarity.","de":"Visualisierung, wo Nutzer auf Ihrer Website klicken und hinschauen. Warme Farben (rot) = viele Klicks, kalte (blau) = wenige. Hilft herauszufinden, warum Menschen nicht auf CTA-Buttons klicken. Hotjar, Microsoft Clarity."},
  },
  {
    term: {"sk":"Session recording","cs":"Session recording","hu":"Session recording","en":"Session recording","de":"Session Recording"},
    category: "meranie",
    description: {"sk":"Nahrávky reálnych návštev na webe — vidíte, kde používateľ klikol, ako sa hýbal myšou, kde sa \"zasekol\". Pomôže zistiť, prečo ľudia nedokončia objednávku.","cs":"Nahrávky skutečných návštěv na webu — vidíte, kde uživatel kliknul, jak se pohyboval myší, kde se \"zasekl\". Pomůže zjistit, proč lidé nedokončí objednávku.","hu":"Valós weboldal-látogatások felvételei — láthatják, hová kattintott a felhasználó, hogyan mozgatta az egeret, hol \"akadt el\". Segít kideríteni, miért nem fejezik be az emberek a rendelést.","en":"Recordings of real website visits — you can see where users clicked, how they moved their mouse, where they got \"stuck\". Helps determine why people don't complete their orders.","de":"Aufzeichnungen echter Website-Besuche — Sie sehen, wo der Nutzer geklickt hat, wie er die Maus bewegt hat, wo er \"hängengeblieben\" ist. Hilft herauszufinden, warum Menschen ihre Bestellung nicht abschließen."},
  },
  {
    term: {"sk":"SEO","cs":"SEO","hu":"SEO","en":"SEO","de":"SEO"},
    shortcut: "SEO",
    category: "seo",
    description: {"sk":"Search Engine Optimization — optimalizácia webu pre vyhľadávače (hlavne Google). Cieľom je dostať web na prvú stránku výsledkov pre kľúčové slová relevantné pre váš biznis. Dlhodobý proces.","cs":"Search Engine Optimization — optimalizace webu pro vyhledávače (hlavně Google). Cílem je dostat web na první stránku výsledků pro klíčová slova relevantní pro váš byznys. Dlouhodobý proces.","hu":"Search Engine Optimization — a weboldal optimalizálása keresőmotorokra (főleg Google). A cél az, hogy a weboldal az első oldalra kerüljön a biznisze szempontjából releváns kulcsszavakra. Hosszú távú folyamat.","en":"Search Engine Optimization — optimizing your website for search engines (mainly Google). The goal is to get your website on the first page of results for keywords relevant to your business. A long-term process.","de":"Search Engine Optimization — Optimierung der Website für Suchmaschinen (hauptsächlich Google). Ziel ist es, die Website auf die erste Ergebnisseite für Schlüsselwörter zu bringen, die für Ihr Business relevant sind. Langfristiger Prozess."},
  },
  {
    term: {"sk":"Onpage SEO","cs":"Onpage SEO","hu":"Onpage SEO","en":"On-page SEO","de":"Onpage SEO"},
    category: "seo",
    description: {"sk":"Časť SEO, ktorá rieši, čo je priamo na vašom webe — texty, nadpisy, meta tagy, štruktúra, vnútorné prelinkovanie. Najľahšia časť SEO.","cs":"Část SEO, která řeší, co je přímo na vašem webu — texty, nadpisy, meta tagy, struktura, vnitřní prolinkování. Nejjednodušší část SEO.","hu":"A SEO része, amely közvetlenül az Önök weboldalán lévő dolgokkal foglalkozik — szövegek, címek, meta tagek, struktúra, belső linkek. A SEO legkönnyebb része.","en":"Part of SEO that deals with what's directly on your website — texts, headlines, meta tags, structure, internal linking. The easiest part of SEO.","de":"Teil von SEO, der sich mit dem beschäftigt, was direkt auf Ihrer Website ist — Texte, Überschriften, Meta-Tags, Struktur, interne Verlinkung. Der einfachste Teil von SEO."},
  },
  {
    term: {"sk":"Technické SEO","cs":"Technické SEO","hu":"Technikai SEO","en":"Technical SEO","de":"Technisches SEO"},
    category: "seo",
    description: {"sk":"Časť SEO, ktorá rieši technický stav webu — rýchlosť načítania, mobilná verzia, sitemap, robots.txt, schema markup. Bez správneho technického SEO Google web ani neindexuje.","cs":"Část SEO, která řeší technický stav webu — rychlost načítání, mobilní verze, sitemap, robots.txt, schema markup. Bez správného technického SEO Google web ani neindexuje.","hu":"A SEO része, amely a weboldal műszaki állapotával foglalkozik — betöltési sebesség, mobil verzió, sitemap, robots.txt, schema markup. Megfelelő technikai SEO nélkül a Google nem is indexeli a weboldalt.","en":"Part of SEO that deals with the technical condition of your website — loading speed, mobile version, sitemap, robots.txt, schema markup. Without proper technical SEO, Google won't even index your website.","de":"Teil von SEO, der sich mit dem technischen Zustand der Website beschäftigt — Ladegeschwindigkeit, mobile Version, Sitemap, robots.txt, Schema Markup. Ohne korrektes technisches SEO indexiert Google die Website gar nicht."},
  },
  {
    term: {"sk":"Off-page SEO","cs":"Off-page SEO","hu":"Off-page SEO","en":"Off-page SEO","de":"Off-page SEO"},
    category: "seo",
    description: {"sk":"Časť SEO, ktorá rieši to, čo o vás hovoria iné weby — backlinks (odkazy na váš web), social media zmienky, recenzie. Najťažšia časť SEO.","cs":"Část SEO, která řeší to, co o vás říkají jiné weby — backlinks (odkazy na váš web), social media zmínky, recenze. Nejtěžší část SEO.","hu":"A SEO része, amely azzal foglalkozik, mit mondanak Önökről más weboldalak — backlinks (linkek az Önök weboldalára), social media említések, vélemények. A SEO legnehezebb része.","en":"Part of SEO that deals with what other websites say about you — backlinks (links to your website), social media mentions, reviews. The hardest part of SEO.","de":"Teil von SEO, der sich damit beschäftigt, was andere Websites über Sie sagen — Backlinks (Links zu Ihrer Website), Social Media Erwähnungen, Bewertungen. Der schwierigste Teil von SEO."},
  },
  {
    term: {"sk":"Backlink","cs":"Backlink","hu":"Backlink","en":"Backlink","de":"Backlink"},
    category: "seo",
    description: {"sk":"Odkaz z iného webu na váš web. Google to chápe ako hlas dôvery — čím viac kvalitných backlinkov máte, tým vyššie sa zobrazujete. Pozor: lacné spam linky vás môžu poškodiť.","cs":"Odkaz z jiného webu na Váš web. Google to chápe jako hlas důvěry — čím více kvalitních backlinků máte, tím výše se zobrazujete. Pozor: levné spam linky Vás mohou poškodit.","hu":"Hivatkozás egy másik webhelyről az Önök webhelyére. A Google ezt bizalmi szavazatként értelmezi — minél több minőségi backlinket szereznek, annál magasabb pozícióban jelennek meg. Figyelem: az olcsó spam linkek kárt okozhatnak.","en":"A link from another website to your website. Google sees it as a vote of confidence — the more quality backlinks you have, the higher you rank. Warning: cheap spam links can hurt you.","de":"Ein Link von einer anderen Website zu Ihrer Website. Google versteht dies als Vertrauensvotum — je mehr qualitative Backlinks Sie haben, desto höher werden Sie angezeigt. Achtung: billige Spam-Links können Ihnen schaden."},
  },
  {
    term: {"sk":"Local SEO","cs":"Local SEO","hu":"Local SEO","en":"Local SEO","de":"Local SEO"},
    category: "seo",
    description: {"sk":"SEO zamerané na lokálne vyhľadávania (\"kaderníctvo Bratislava\", \"autoservis Prešov\"). Kľúčový je Google Business Profile, recenzie a lokálne backlinky.","cs":"SEO zaměřené na lokální vyhledávání (\"kadeřnictví Praha\", \"autoservis Brno\"). Klíčový je Google Business Profile, recenze a lokální backlinky.","hu":"Helyi keresésekre összpontosító SEO (\"fodrászat Bratislava\", \"autószerviz Pozsony\"). A Google Business Profile, vélemények és helyi backlink-ek kulcsfontosságúak.","en":"SEO focused on local searches (\"hair salon Bratislava\", \"car service Prešov\"). Key elements are Google Business Profile, reviews and local backlinks.","de":"SEO fokussiert auf lokale Suchanfragen (\"Friseur Bratislava\", \"Autowerkstatt Pressburg\"). Entscheidend sind Google Business Profile, Bewertungen und lokale Backlinks."},
  },
  {
    term: {"sk":"Google Business Profile","cs":"Google Business Profile","hu":"Google Business Profile","en":"Google Business Profile","de":"Google Business Profile"},
    shortcut: "GBP",
    category: "seo",
    description: {"sk":"Bezplatný profil firmy v Google Maps a vyhľadávaní. Obsahuje adresu, otváracie hodiny, fotky, recenzie. Kľúčový pre lokálne podniky — ak nemáte profil, neexistujete pre lokálnych zákazníkov.","cs":"Bezplatný profil firmy v Google Maps a vyhledávání. Obsahuje adresu, otevírací hodiny, fotky, recenze. Klíčový pro lokální podniky — pokud nemáte profil, neexistujete pro lokální zákazníky.","hu":"Ingyenes céges profil a Google Maps-ben és a keresésben. Tartalmazza a címet, nyitvatartási időt, képeket, véleményeket. Kulcsfontosságú a helyi vállalkozások számára — ha nincs profiljuk, nem léteznek a helyi ügyfelek számára.","en":"Free company profile in Google Maps and search. Contains address, opening hours, photos, reviews. Essential for local businesses — if you don't have a profile, you don't exist for local customers.","de":"Kostenloses Firmenprofil in Google Maps und der Suche. Enthält Adresse, Öffnungszeiten, Fotos, Bewertungen. Entscheidend für lokale Unternehmen — ohne Profil existieren Sie nicht für lokale Kunden."},
  },
  {
    term: {"sk":"Kľúčové slovo (keyword)","cs":"Klíčové slovo (keyword)","hu":"Kulcsszó (keyword)","en":"Keyword","de":"Keyword (Schlüsselwort)"},
    category: "seo",
    description: {"sk":"Slovo alebo fráza, ktorú zákazník zadáva do Google. Napríklad \"kúpiť topánky online\" alebo \"kaderníctvo Bratislava\". SEO sa točí okolo cieľovania správnych kľúčových slov.","cs":"Slovo nebo fráze, kterou zákazník zadává do Google. Například \"koupit boty online\" nebo \"kadeřnictví Praha\". SEO se točí kolem cílení správných klíčových slov.","hu":"Szó vagy kifejezés, amelyet az ügyfél beír a Google-ba. Például \"cipő vásárlás online\" vagy \"fodrászat Pozsony\". A SEO a megfelelő kulcsszavak célzása körül forog.","en":"A word or phrase that customers type into Google. For example \"buy shoes online\" or \"hair salon Bratislava\". SEO revolves around targeting the right keywords.","de":"Wort oder Phrase, die ein Kunde bei Google eingibt. Zum Beispiel \"Schuhe online kaufen\" oder \"Friseur Bratislava\". SEO dreht sich um die Ausrichtung auf die richtigen Keywords."},
  },
  {
    term: {"sk":"Meta description","cs":"Meta description","hu":"Meta description","en":"Meta description","de":"Meta Description"},
    category: "seo",
    description: {"sk":"Krátky popis stránky (do 160 znakov), ktorý Google zobrazuje pod titulkom vo výsledkoch. Neovplyvňuje priamo SEO pozíciu, ale ovplyvňuje, či ľudia kliknú práve na váš výsledok.","cs":"Krátký popis stránky (do 160 znaků), který Google zobrazuje pod titulkem ve výsledcích. Neovlivňuje přímo SEO pozici, ale ovlivňuje, zda lidé kliknou právě na Váš výsledek.","hu":"Az oldal rövid leírása (legfeljebb 160 karakter), amelyet a Google a cím alatt jelenít meg az eredményekben. Közvetlenül nem befolyásolja a SEO pozíciót, de befolyásolja, hogy az emberek éppen az Önök eredményére kattintanak-e.","en":"Short page description (up to 160 characters) that Google displays under the title in search results. Doesn't directly affect SEO position, but influences whether people click on your result.","de":"Kurze Beschreibung der Seite (bis 160 Zeichen), die Google unter dem Titel in den Ergebnissen anzeigt. Beeinflusst nicht direkt die SEO-Position, aber ob Menschen gerade auf Ihr Ergebnis klicken."},
  },
  {
    term: {"sk":"Newsletter","cs":"Newsletter","hu":"Newsletter","en":"Newsletter","de":"Newsletter"},
    category: "email",
    description: {"sk":"Pravidelný e-mail rozosielaný zoznamu odberateľov. Obsahuje novinky, akcie, články. Lacný kanál na komunikáciu s existujúcimi zákazníkmi.","cs":"Pravidelný e-mail rozesílaný seznamu odběratelů. Obsahuje novinky, akce, články. Levný kanál na komunikaci s existujícími zákazníky.","hu":"Rendszeres e-mail, amelyet a feliratkozók listájára küldenek ki. Híreket, akciókat, cikkeket tartalmaz. Olcsó csatorna a meglévő ügyfelekkel való kommunikációra.","en":"Regular email sent to a subscriber list. Contains news, promotions, articles. Cheap channel for communicating with existing customers.","de":"Regelmäßige E-Mail, die an eine Abonnentenliste versendet wird. Enthält Neuigkeiten, Aktionen, Artikel. Günstiger Kanal für die Kommunikation mit bestehenden Kunden."},
  },
  {
    term: {"sk":"Welcome flow","cs":"Welcome flow","hu":"Welcome flow","en":"Welcome flow","de":"Welcome Flow"},
    category: "email",
    description: {"sk":"Automatická séria e-mailov, ktorá sa odošle novému odberateľovi (alebo prvonákupníkovi). Predstavuje firmu, produkty, hodnoty. Najsilnejšie e-maily — otvorenosť cez 50 %.","cs":"Automatická série e-mailů, která se odešle novému odběrateli (nebo prvonákupníkovi). Představuje firmu, produkty, hodnoty. Nejsilnější e-maily — otevřenost přes 50 %.","hu":"Automatikus e-mail sorozat, amely új feliratkozónak (vagy első vásárlónak) küldi ki. Bemutatja a céget, termékeket, értékeket. A legerősebb e-mailek — 50% feletti megnyitási arány.","en":"Automatic series of emails sent to new subscribers (or first-time buyers). Introduces the company, products, values. Most powerful emails — open rates over 50%.","de":"Automatische E-Mail-Serie, die an neue Abonnenten (oder Erstkäufer) versendet wird. Stellt das Unternehmen, Produkte, Werte vor. Die stärksten E-Mails — Öffnungsrate über 50 %."},
  },
  {
    term: {"sk":"Abandoned cart","cs":"Abandoned cart","hu":"Abandoned cart","en":"Abandoned cart","de":"Abandoned cart"},
    category: "email",
    description: {"sk":"Automatický e-mail, ktorý sa odošle zákazníkovi, čo dal produkt do košíka, ale nenakúpil. Bežne získava 10–20 % stratených objednávok späť.","cs":"Automatický e-mail, který se odešle zákazníkovi, jenž dal produkt do košíku, ale nenakoupil. Běžně získává 10–20 % ztracených objednávek zpět.","hu":"Automatikus e-mail, amit olyan vásárlónak küldenek, aki betette a terméket a kosárba, de nem vásárolt. Általában a leadott rendelések 10-20%-át hozza vissza.","en":"An automated email sent to a customer who added a product to their cart but didn't purchase. Typically recovers 10–20% of lost orders.","de":"Eine automatische E-Mail, die an Kunden gesendet wird, die ein Produkt in den Warenkorb gelegt, aber nicht gekauft haben. Gewinnt normalerweise 10–20 % der verlorenen Bestellungen zurück."},
  },
  {
    term: {"sk":"Open rate","cs":"Open rate","hu":"Open rate","en":"Open rate","de":"Open rate"},
    category: "email",
    description: {"sk":"Percento ľudí, ktorí otvorili váš e-mail z tých, čo ho dostali. Bežný open rate pre newsletter je 20–30 %. Pri welcome flow až 50–60 %.","cs":"Procento lidí, kteří otevřeli Váš e-mail z těch, co ho dostali. Běžný open rate pro newsletter je 20–30 %. U welcome flow až 50–60 %.","hu":"Azoknak az embereknek a százaléka, akik megnyitották az e-mailt azok közül, akik megkapták. A newsletter átlagos open rate-je 20-30%. Welcome flow esetén akár 50-60% is lehet.","en":"The percentage of people who opened your email out of those who received it. Typical open rate for newsletters is 20–30%. For welcome flows up to 50–60%.","de":"Der Prozentsatz der Personen, die Ihre E-Mail von denen geöffnet haben, die sie erhalten haben. Eine übliche Open Rate für Newsletter liegt bei 20–30 %. Bei Welcome Flows sogar bei 50–60 %."},
  },
  {
    term: {"sk":"Klaviyo","cs":"Klaviyo","hu":"Klaviyo","en":"Klaviyo","de":"Klaviyo"},
    category: "email",
    description: {"sk":"Najpopulárnejšia e-mail platforma pre e-shopy. Najlepšia integrácia so Shopify, WooCommerce. Pokročilá segmentácia a flows.","cs":"Nejpopulárnější e-mail platforma pro e-shopy. Nejlepší integrace se Shopify, WooCommerce. Pokročilá segmentace a flows.","hu":"A legnépszerűbb e-mail platform webáruházak számára. A legjobb integráció Shopify-jal és WooCommerce-szel. Fejlett szegmentáció és flow-k.","en":"The most popular email platform for e-shops. Best integration with Shopify, WooCommerce. Advanced segmentation and flows.","de":"Die beliebteste E-Mail-Plattform für Online-Shops. Beste Integration mit Shopify, WooCommerce. Erweiterte Segmentierung und Flows."},
  },
  {
    term: {"sk":"Mailchimp","cs":"Mailchimp","hu":"Mailchimp","en":"Mailchimp","de":"Mailchimp"},
    category: "email",
    description: {"sk":"Najznámejšia e-mail platforma — jednoduchá, lacná pre malých. Bezplatná pre ~500 kontaktov. Vhodné pre začiatočníkov a malé firmy.","cs":"Nejznámější e-mail platforma — jednoduchá, levná pro malé. Bezplatná pro ~500 kontaktů. Vhodná pro začátečníky a malé firmy.","hu":"A legismertebb e-mail platform — egyszerű, olcsó kis cégek számára. Ingyenes ~500 kontaktig. Alkalmas kezdők és kis vállalkozások számára.","en":"The most well-known email platform — simple, affordable for small businesses. Free for ~500 contacts. Suitable for beginners and small companies.","de":"Die bekannteste E-Mail-Plattform — einfach, günstig für kleine Unternehmen. Kostenlos für ~500 Kontakte. Geeignet für Anfänger und kleine Firmen."},
  },
  {
    term: {"sk":"AOV","cs":"AOV","hu":"AOV","en":"AOV","de":"AOV"},
    shortcut: "AOV",
    category: "eshop",
    description: {"sk":"Average Order Value — priemerná hodnota objednávky. AOV 80 € znamená, že priemerný zákazník nakúpi za 80 €. Zvýšenie AOV o 10 % je často ľahšie než získať nového zákazníka.","cs":"Average Order Value — průměrná hodnota objednávky. AOV 80 € znamená, že průměrný zákazník nakoupí za 80 €. Zvýšení AOV o 10 % je často snazší než získat nového zákazníka.","hu":"Average Order Value — átlagos rendelési érték. AOV 80 € azt jelenti, hogy az átlagos vásárló 80 € értékben vásárol. Az AOV 10%-os növelése gyakran könnyebb, mint új vásárló szerzése.","en":"Average Order Value — the average value of an order. AOV €80 means the average customer purchases €80 worth. Increasing AOV by 10% is often easier than acquiring a new customer.","de":"Average Order Value — durchschnittlicher Bestellwert. AOV 80 € bedeutet, dass der durchschnittliche Kunde für 80 € einkauft. Eine Erhöhung des AOV um 10 % ist oft einfacher als einen neuen Kunden zu gewinnen."},
  },
  {
    term: {"sk":"LTV","cs":"LTV","hu":"LTV","en":"LTV","de":"LTV"},
    shortcut: "LTV",
    category: "eshop",
    description: {"sk":"Lifetime Value — celková hodnota zákazníka cez celú dobu nákupov. Ak zákazník priemerne nakúpi 4× v živote a každá objednávka je 80 €, LTV = 320 €. Toto je strop, koľko môžete minúť na získanie zákazníka.","cs":"Lifetime Value — celková hodnota zákazníka přes celou dobu nákupů. Pokud zákazník průměrně nakoupí 4× v životě a každá objednávka je 80 €, LTV = 320 €. To je strop, kolik můžete utratit za získání zákazníka.","hu":"Lifetime Value — a vásárló teljes értéke az összes vásárlás során. Ha a vásárló átlagosan 4-szer vásárol életében és minden rendelés 80 €, akkor LTV = 320 €. Ez a felső határ, amennyit vásárlószerzésre költhetnek.","en":"Lifetime Value — the total value of a customer over their entire purchasing period. If a customer averages 4 purchases in their lifetime and each order is €80, LTV = €320. This is the ceiling for how much you can spend on customer acquisition.","de":"Lifetime Value — der gesamte Wert eines Kunden über die gesamte Einkaufsdauer. Wenn ein Kunde durchschnittlich 4× im Leben einkauft und jede Bestellung 80 € beträgt, ist LTV = 320 €. Das ist die Obergrenze dafür, wie viel Sie für die Kundenakquisition ausgeben können."},
  },
  {
    term: {"sk":"Shopify","cs":"Shopify","hu":"Shopify","en":"Shopify","de":"Shopify"},
    category: "eshop",
    description: {"sk":"Globálna e-shop platforma — najjednoduchšia integrácia s Meta CAPI, Klaviyo, GA4. Hodí sa pre nové aj rastúce e-shopy. Mesačný poplatok od ~30 USD.","cs":"Globální e-shop platforma — nejjednodušší integrace s Meta CAPI, Klaviyo, GA4. Hodí se pro nové i rostoucí e-shopy. Měsíční poplatek od ~30 USD.","hu":"Globális webáruház platform — a legegyszerűbb integráció Meta CAPI-val, Klaviyo-val, GA4-gyel. Alkalmas új és növekvő webáruházak számára. Havi díj ~30 USD-től.","en":"Global e-shop platform — easiest integration with Meta CAPI, Klaviyo, GA4. Suitable for new and growing e-shops. Monthly fee from ~$30 USD.","de":"Globale E-Shop-Plattform — einfachste Integration mit Meta CAPI, Klaviyo, GA4. Geeignet für neue und wachsende Online-Shops. Monatliche Gebühr ab ~30 USD."},
  },
  {
    term: {"sk":"WooCommerce","cs":"WooCommerce","hu":"WooCommerce","en":"WooCommerce","de":"WooCommerce"},
    category: "eshop",
    description: {"sk":"Bezplatný e-shop plugin pre WordPress. Flexibilný, ale vyžaduje viac údržby (hosting, security, updates). Hodí sa, ak už máte WordPress web.","cs":"Bezplatný e-shop plugin pro WordPress. Flexibilní, ale vyžaduje více údržby (hosting, security, updates). Hodí se, pokud už máte WordPress web.","hu":"Ingyenes webáruház plugin WordPress-hez. Rugalmas, de több karbantartást igényel (hosting, biztonság, frissítések). Jó, ha már van WordPress weboldaluk.","en":"Free e-shop plugin for WordPress. Flexible, but requires more maintenance (hosting, security, updates). Suitable if you already have a WordPress website.","de":"Kostenloses E-Shop Plugin für WordPress. Flexibel, aber erfordert mehr Wartung (Hosting, Security, Updates). Geeignet, wenn Sie bereits eine WordPress-Website haben."},
  },
  {
    term: {"sk":"Upgades","cs":"Upgades","hu":"Upgades","en":"Upgades","de":"Upgades"},
    category: "eshop",
    description: {"sk":"Slovenská e-shop platforma s dobrým support-om pre SK/CZ trh. Mesačný poplatok od ~30 €. Vhodná pre lokálne e-shopy.","cs":"Slovenská e-shop platforma s dobrým supportem pro SK/CZ trh. Měsíční poplatek od ~30 €. Vhodná pro lokální e-shopy.","hu":"Szlovák webáruház platform jó támogatással a SK/CZ piachoz. Havi díj ~30 €-tól. Alkalmas helyi webáruházak számára.","en":"Slovak e-shop platform with good support for SK/CZ market. Monthly fee from ~30 €. Suitable for local e-shops.","de":"Slowakische E-Shop-Plattform mit gutem Support für den SK/CZ-Markt. Monatliche Gebühr ab ~30 €. Geeignet für lokale E-Shops."},
  },
  {
    term: {"sk":"Shoptet","cs":"Shoptet","hu":"Shoptet","en":"Shoptet","de":"Shoptet"},
    category: "eshop",
    description: {"sk":"Veľmi populárna e-shop platforma v ČR a SR. Mesačný poplatok od ~10 €. Dobré pre začínajúce e-shopy.","cs":"Velmi populární e-shop platforma v ČR a SR. Měsíční poplatek od ~10 €. Dobré pro začínající e-shopy.","hu":"Nagyon népszerű webáruház platform Csehországban és Szlovákiában. Havi díj ~10 €-tól. Jó kezdő webáruházak számára.","en":"Very popular e-shop platform in CZ and SK. Monthly fee from ~10 €. Good for beginning e-shops.","de":"Sehr beliebte E-Shop-Plattform in CZ und SK. Monatliche Gebühr ab ~10 €. Gut für beginnende E-Shops."},
  },
  {
    term: {"sk":"Feed (produktový)","cs":"Feed (produktový)","hu":"Feed (termék)","en":"Feed (product)","de":"Feed (Produkt)"},
    category: "eshop",
    description: {"sk":"Štruktúrovaný zoznam produktov vo formáte, ktorý chápu reklamné platformy (XML, CSV). Bez správneho feedu nemôžete spustiť Google Shopping ani Meta Catalog reklamu.","cs":"Strukturovaný seznam produktů ve formátu, kterému rozumí reklamní platformy (XML, CSV). Bez správného feedu nemůžete spustit Google Shopping ani Meta Catalog reklamu.","hu":"Strukturált terméklista olyan formátumban, amit a hirdetési platformok megértenek (XML, CSV). Megfelelő feed nélkül nem tudnak Google Shopping vagy Meta Catalog hirdetést indítani.","en":"Structured list of products in a format understood by advertising platforms (XML, CSV). Without a proper feed, you cannot run Google Shopping or Meta Catalog ads.","de":"Strukturierte Produktliste in einem Format, das Werbeplattformen verstehen (XML, CSV). Ohne korrekten Feed können Sie weder Google Shopping noch Meta Catalog-Werbung schalten."},
  },
  {
    term: {"sk":"Google Shopping","cs":"Google Shopping","hu":"Google Shopping","en":"Google Shopping","de":"Google Shopping"},
    category: "eshop",
    description: {"sk":"Reklama v Google s obrázkom produktu, cenou a názvom obchodu. Najsilnejší kanál pre e-shopy — zákazník vidí produkt ešte pred kliknutím.","cs":"Reklama v Google s obrázkem produktu, cenou a názvem obchodu. Nejsilnější kanál pro e-shopy — zákazník vidí produkt ještě před kliknutím.","hu":"Hirdetés a Google-ban termékképpel, árral és üzletnévvel. A legerősebb csatorna webáruházak számára — a vásárló a kattintás előtt látja a terméket.","en":"Google ad with product image, price and shop name. The strongest channel for e-shops — customers see the product before clicking.","de":"Werbung in Google mit Produktbild, Preis und Shop-Namen. Stärkster Kanal für E-Shops — der Kunde sieht das Produkt bereits vor dem Klick."},
  },
  {
    term: {"sk":"Heuréka","cs":"Heuréka","hu":"Heuréka","en":"Heuréka","de":"Heuréka"},
    category: "eshop",
    description: {"sk":"Najväčší porovnávač cien v ČR a SR. Pre e-shopy povinný kanál — väčšina ľudí pri nákupe overuje cenu cez Heuréku.","cs":"Největší porovnávač cen v ČR a SR. Pro e-shopy povinný kanál — většina lidí při nákupu ověřuje cenu přes Heuréku.","hu":"A legnagyobb árösszehasonlító Csehországban és Szlovákiában. Webáruházak számára kötelező csatorna — a legtöbb ember vásárláskor a Heuréka-n ellenőrzi az árakat.","en":"Largest price comparison site in CZ and SK. Mandatory channel for e-shops — most people check prices through Heuréka when shopping.","de":"Größter Preisvergleich in CZ und SK. Für E-Shops ein Pflichtkanal — die meisten Menschen überprüfen beim Einkauf den Preis über Heuréka."},
  },
  {
    term: {"sk":"B2B","cs":"B2B","hu":"B2B","en":"B2B","de":"B2B"},
    shortcut: "B2B",
    category: "vseobecne",
    description: {"sk":"Business to Business — predaj firmám. Dlhý rozhodovací cyklus, viac rozhodovateľov, vyššie hodnoty objednávok. LinkedIn, Google Search a B2B landing pages sú hlavné kanály.","cs":"Business to Business — prodej firmám. Dlouhý rozhodovací cyklus, více rozhodovatelů, vyšší hodnoty objednávek. LinkedIn, Google Search a B2B landing pages jsou hlavní kanály.","hu":"Business to Business — értékesítés cégeknek. Hosszú döntési ciklus, több döntéshozó, magasabb rendelésértékek. A LinkedIn, Google Search és B2B landing page-ek a fő csatornák.","en":"Business to Business — selling to companies. Long decision cycle, more decision-makers, higher order values. LinkedIn, Google Search and B2B landing pages are the main channels.","de":"Business to Business — Verkauf an Unternehmen. Langer Entscheidungszyklus, mehr Entscheidungsträger, höhere Bestellwerte. LinkedIn, Google Search und B2B-Landing-Pages sind die Hauptkanäle."},
  },
  {
    term: {"sk":"B2C","cs":"B2C","hu":"B2C","en":"B2C","de":"B2C"},
    shortcut: "B2C",
    category: "vseobecne",
    description: {"sk":"Business to Consumer — predaj koncovým zákazníkom (bežní ľudia). Krátky rozhodovací cyklus, impulzné nákupy. Meta a Google sú hlavné kanály.","cs":"Business to Consumer — prodej koncovým zákazníkům (běžní lidé). Krátký rozhodovací cyklus, impulzní nákupy. Meta a Google jsou hlavní kanály.","hu":"Business to Consumer — értékesítés végfelhasználóknak (átlagos emberek). Rövid döntési ciklus, impulzus vásárlások. A Meta és Google a fő csatornák.","en":"Business to Consumer — selling to end customers (regular people). Short decision cycle, impulse purchases. Meta and Google are the main channels.","de":"Business to Consumer — Verkauf an Endkunden (gewöhnliche Menschen). Kurzer Entscheidungszyklus, Impulskäufe. Meta und Google sind die Hauptkanäle."},
  },
  {
    term: {"sk":"KPI","cs":"KPI","hu":"KPI","en":"KPI","de":"KPI"},
    shortcut: "KPI",
    category: "vseobecne",
    description: {"sk":"Key Performance Indicator — kľúčový metrik, ktorý sledujete. Pre e-shop sú KPI tržby, ROAS, počet objednávok, AOV. Bez KPI neviete, či kampaň funguje.","cs":"Key Performance Indicator — klíčová metrika, kterou sledujete. Pro e-shop jsou KPI tržby, ROAS, počet objednávek, AOV. Bez KPI nevíte, jestli kampaň funguje.","hu":"Key Performance Indicator — kulcsmutató, amit követnek. E-shop esetében a KPI-k a bevételek, ROAS, megrendelések száma, AOV. KPI nélkül nem tudják, hogy működik-e a kampány.","en":"Key Performance Indicator — the key metric you track. For e-shops, KPIs are revenue, ROAS, number of orders, AOV. Without KPIs, you don't know if your campaign is working.","de":"Key Performance Indicator — Schlüsselkennzahl, die Sie verfolgen. Für E-Shops sind KPI Umsatz, ROAS, Anzahl der Bestellungen, AOV. Ohne KPI wissen Sie nicht, ob die Kampagne funktioniert."},
  },
  {
    term: {"sk":"Brand awareness","cs":"Brand awareness","hu":"Brand awareness","en":"Brand awareness","de":"Brand Awareness"},
    category: "vseobecne",
    description: {"sk":"Povedomie o značke — koľko ľudí vás pozná, hoci u vás nikdy nenakúpili. Nie je to priamy predaj, ale zvyšuje budúce konverzie. YouTube, Display a sociálne siete sú hlavné kanály.","cs":"Povědomí o značce — kolik lidí vás zná, ačkoli u vás nikdy nenakoupili. Není to přímý prodej, ale zvyšuje budoucí konverze. YouTube, Display a sociální sítě jsou hlavní kanály.","hu":"Márkaismertség — hány ember ismeri Önöket, még akkor is, ha soha nem vásároltak Önöktől. Ez nem közvetlen értékesítés, de növeli a jövőbeli konverziókat. A YouTube, Display és közösségi hálózatok a fő csatornák.","en":"Brand awareness — how many people know you, even though they've never purchased from you. It's not direct sales, but it increases future conversions. YouTube, Display, and social networks are the main channels.","de":"Markenbewusstsein — wie viele Menschen Sie kennen, obwohl sie nie bei Ihnen eingekauft haben. Es ist kein direkter Verkauf, aber es erhöht zukünftige Conversions. YouTube, Display und soziale Netzwerke sind die Hauptkanäle."},
  },
  {
    term: {"sk":"Funnel","cs":"Funnel","hu":"Funnel","en":"Funnel","de":"Funnel"},
    category: "vseobecne",
    description: {"sk":"Lievik — cesta zákazníka od prvého kontaktu po nákup. Top funnel = povedomie (nikdy nepočul o vás), middle = zvažovanie, bottom = nákup. Každá fáza potrebuje iný typ reklamy.","cs":"Nálevka — cesta zákazníka od prvního kontaktu po nákup. Top funnel = povědomí (nikdy o vás neslyšel), middle = zvažování, bottom = nákup. Každá fáze potřebuje jiný typ reklamy.","hu":"Tölcsér — a vásárló útja az első kontaktustól a vásárlásig. Top funnel = ismertség (soha nem hallott Önökről), middle = mérlegelés, bottom = vásárlás. Minden fázis más típusú reklámot igényel.","en":"Funnel — the customer journey from first contact to purchase. Top funnel = awareness (never heard of you), middle = consideration, bottom = purchase. Each phase needs a different type of advertising.","de":"Trichter — der Weg des Kunden vom ersten Kontakt bis zum Kauf. Top Funnel = Bewusstsein (hat noch nie von Ihnen gehört), Middle = Überlegung, Bottom = Kauf. Jede Phase braucht eine andere Art von Werbung."},
  },
  {
    term: {"sk":"Lead","cs":"Lead","hu":"Lead","en":"Lead","de":"Lead"},
    category: "vseobecne",
    description: {"sk":"Potenciálny zákazník, ktorý prejavil záujem (vyplnil formulár, zavolal, stiahol PDF). Nie je to ešte zákazník, ale niekto, komu môžete predávať.","cs":"Potenciální zákazník, který projevil zájem (vyplnil formulář, zavolal, stáhl PDF). Není to ještě zákazník, ale někdo, komu můžete prodávat.","hu":"Potenciális vásárló, aki érdeklődést mutatott (kitöltött egy űrlapot, felhívott, letöltött egy PDF-et). Még nem vásárló, de valaki, akinek értékesíthetnek.","en":"A potential customer who has shown interest (filled out a form, called, downloaded a PDF). They're not a customer yet, but someone you can sell to.","de":"Potenzieller Kunde, der Interesse gezeigt hat (Formular ausgefüllt, angerufen, PDF heruntergeladen). Es ist noch kein Kunde, aber jemand, dem Sie verkaufen können."},
  },
  {
    term: {"sk":"Landing page","cs":"Landing page","hu":"Landing page","en":"Landing page","de":"Landing Page"},
    shortcut: "LP",
    category: "vseobecne",
    description: {"sk":"Jednoúčelová stránka, na ktorú vedú reklamy. Má jeden cieľ — získať konverziu (nákup, formulár, telefonát). Bez rušivých elementov, jasné CTA.","cs":"Jednoúčelová stránka, na kterou vedou reklamy. Má jeden cíl — získat konverzi (nákup, formulář, telefonát). Bez rušivých elementů, jasné CTA.","hu":"Egyetlen célú oldal, ahová a reklámok vezetnek. Egy célja van — konverzió elérése (vásárlás, űrlap, telefonhívás). Zavaró elemek nélkül, egyértelmű CTA.","en":"A single-purpose page where ads lead to. It has one goal — to get a conversion (purchase, form, phone call). No distracting elements, clear CTA.","de":"Einseitige Seite, auf die Werbeanzeigen führen. Hat ein Ziel — eine Conversion erzielen (Kauf, Formular, Anruf). Ohne störende Elemente, klare CTA."},
  },
  {
    term: {"sk":"CTA","cs":"CTA","hu":"CTA","en":"CTA","de":"CTA"},
    shortcut: "CTA",
    category: "vseobecne",
    description: {"sk":"Call To Action — výzva k akcii. Tlačítko alebo odkaz, ktorý hovorí, čo má návštevník urobiť: \"Kúpiť teraz\", \"Vyžiadať audit\", \"Zarezervovať sa\". Najdôležitejší prvok na webe.","cs":"Call To Action — výzva k akci. Tlačítko nebo odkaz, který říká, co má návštěvník udělat: \"Koupit teď\", \"Vyžádat audit\", \"Zarezervovat se\". Nejdůležitější prvek na webu.","hu":"Call To Action — cselekvésre felhívás. Gomb vagy link, ami megmondja a látogatónak, mit tegyen: \"Vásároljon most\", \"Kérjen audit-ot\", \"Foglaljon időpontot\". A weboldal legfontosabb eleme.","en":"Call To Action — a call to action. A button or link that tells visitors what to do: \"Buy now\", \"Request audit\", \"Book appointment\". The most important element on a website.","de":"Call To Action — Handlungsaufforderung. Button oder Link, der sagt, was der Besucher tun soll: \"Jetzt kaufen\", \"Audit anfordern\", \"Termin buchen\". Das wichtigste Element auf der Website."},
  },
];

// Helper na ziskanie lokalizovanej verzie pojmu
export function localizedTerm(t: GlossaryTerm, lang: Lang): string {
  return t.term[lang] || t.term.sk;
}
export function localizedDesc(t: GlossaryTerm, lang: Lang): string {
  return t.description[lang] || t.description.sk;
}
