/**
 * Balíčky pre odvetvia — data
 *
 * Každý balíček má:
 *  - slug (URL)
 *  - name (názov)
 *  - tagline (krátky popis pod hero)
 *  - heroLead (dlhší úvod)
 *  - pains (3-4 typické problémy odvetvia)
 *  - includes (6-10 položiek čo balíček obsahuje)
 *  - results (príklady výsledkov, placeholdery sú OK)
 *  - priceFrom (od koľko € mesačne)
 *  - timeline (typicky koľko trvá rozbeh)
 */

export interface IndustryPackage {
  slug: string;
  name: string;
  tagline: string;
  heroLead: string;
  pains: string[];
  includes: { title: string; desc: string }[];
  results: { metric: string; label: string }[];
  priceFrom: number;
  timeline: string;
  idealFor: string;
}

export const industries: IndustryPackage[] = [

  // 1) KADERNÍCTVA
  {
    slug: 'kadernictva',
    name: 'Kaderníctva a salóny krásy',
    tagline: 'Plný kalendár každý týždeň. Bez výpadkov.',
    heroLead: 'Kaderníctvo, kozmetika, manikúra alebo solárium — všetko sa točí okolo plného kalendára. Pomáhame plniť termíny cez Instagram, Google Maps a online rezervácie.',
    pains: [
      'Termíny zadávate ručne cez WhatsApp a Messenger',
      'Recenzií máte málo a nikto ich nepýta po návšteve',
      'Konkurencia je viditeľnejšia v Google Maps',
      'Nemáte čas robiť obsah na Instagram každý týždeň',
    ],
    includes: [
      { title: 'Online rezervačný systém', desc: 'Zákazníci sa rezervujú sami 24/7. Reservio, Booksy alebo SimplyBook.' },
      { title: 'Google Business Profile', desc: 'Optimalizácia profilu, správa fotografií, reagovanie na recenzie.' },
      { title: 'Local SEO', desc: 'Aby ste sa zobrazovali medzi prvými v "kaderníctvo + vaše mesto".' },
      { title: 'Instagram + TikTok ads', desc: '2 kampane mesačne — propagácia služieb a získavanie nových zákazníkov.' },
      { title: 'Mesačná tvorba obsahu', desc: '8-12 príspevkov + reels mesačne. Konzistentný brand.' },
      { title: 'Recenzie automation', desc: 'Po každej návšteve automatický mail/SMS s prosbou o recenziu.' },
      { title: 'Mesačný reporting', desc: 'Koľko nových zákazníkov, odkiaľ, koľko sa vrátili.' },
    ],
    results: [
      { metric: '+85%',   label: 'Online rezervácií' },
      { metric: '4.9',    label: 'Priemerné hodnotenie' },
      { metric: '+120',   label: 'Nových klientov / 6 mesiacov' },
    ],
    priceFrom: 249,
    timeline: '14 dní setup, prvé výsledky do 30 dní',
    idealFor: 'Salóny s 1-5 stoličkami v Bratislave, Košiciach, Prešove a iných mestách',
  },

  // 2) AUTOSERVISY
  {
    slug: 'autoservisy',
    name: 'Autoservisy a pneuservisy',
    tagline: 'Zákazníci nájdu vás, nie konkurenciu.',
    heroLead: 'Pri poruche auta hľadá zákazník v Google "autoservis + jeho mesto" a klikne na prvý výsledok. Postaráme sa, aby to bol váš servis.',
    pains: [
      'Zákazníci si vás všimnú, len keď sú vedľa vašej budovy',
      'V Google Maps ste niekde dole, nad vami sú konkurenti',
      'Sezónne výpadky (jar/jeseň) sú vidieť na obrate',
      'Nemáte web alebo je z roku 2010',
    ],
    includes: [
      { title: 'Lokálny Google Ads', desc: 'Search kampane na "autoservis Prešov", "pneuservis Bratislava" atď.' },
      { title: 'Google Business Profile', desc: 'Plný profil s fotkami, otváracími hodinami, službami a cenníkom.' },
      { title: 'Local SEO', desc: 'Optimalizácia pre lokálne vyhľadávania v okruhu 20 km.' },
      { title: 'Recenzie management', desc: 'Aktívne získavanie recenzií od spokojných zákazníkov.' },
      { title: 'Sezónne kampane', desc: 'Pred jarou pneumatiky, pred zimou kontroly, klimatizácie.' },
      { title: 'Jednoduchý web', desc: 'Ak nemáte alebo je zastaraný — moderný web s formulárom a cenníkom.' },
      { title: 'Týždenné reporty', desc: 'Koľko hovorov a dopytov ste dostali z online reklamy.' },
    ],
    results: [
      { metric: '+62%',   label: 'Telefonických dopytov' },
      { metric: 'Top 3',  label: 'V Google Maps' },
      { metric: '+45',    label: 'Recenzií / rok' },
    ],
    priceFrom: 199,
    timeline: '10 dní setup, prvé hovory do 14 dní',
    idealFor: 'Autoservisy, pneuservisy, autoumyvárky s 2+ technikmi',
  },

  // 3) REŠTAURÁCIE
  {
    slug: 'restauracie',
    name: 'Reštaurácie a kaviarne',
    tagline: 'Plné stoly aj cez týždeň.',
    heroLead: 'Reštaurácia žije z prvej návštevy a hlavne z opakovaných. Pomáhame priviesť nových hostí a udržať tých starých — cez Instagram, online menu a lokálnu reklamu.',
    pains: [
      'Cez týždeň máte poloprázdne stoly',
      'Instagram nemá čas nikto robiť každý deň',
      'Nemáte online menu a ľudia sa pýtajú cez Messenger',
      'Konkurencia má lepšie fotky a recenzie',
    ],
    includes: [
      { title: 'Online menu (QR + web)', desc: 'Profesionálne digitálne menu, ktoré zákazník naskenuje a uvidí celú ponuku.' },
      { title: 'Instagram + Facebook content', desc: '12-15 príspevkov a stories mesačne. Profi fotky jedál.' },
      { title: 'Lokálna Meta Ads kampaň', desc: 'Cielenie na ľudí v okruhu 5-10 km od vašej reštaurácie.' },
      { title: 'Google Business Profile', desc: 'Optimalizácia, fotky jedál, menu, otváracie hodiny.' },
      { title: 'Profi food fotenie', desc: 'Raz za 3 mesiace fotenie nového menu (alebo sezónne).' },
      { title: 'Newsletter pre verných', desc: 'Mesačný newsletter s novinkami a špeciálnymi akciami.' },
      { title: 'Integrácia delivery', desc: 'Bolt Food, Wolt — nastavenie a optimalizácia profilov.' },
    ],
    results: [
      { metric: '+40%',  label: 'Návštev cez týždeň' },
      { metric: '+2.5k', label: 'Sledovateľov / 6 mes' },
      { metric: '4.7',   label: 'Priemerné hodnotenie' },
    ],
    priceFrom: 349,
    timeline: '14-21 dní setup, prvé výsledky do 30 dní',
    idealFor: 'Reštaurácie, kaviarne, pizzerie, cukrárne, bistrá s vlastnou prevádzkou',
  },

  // 4) E-SHOPY
  {
    slug: 'eshopy',
    name: 'E-shopy',
    tagline: 'Predaj, ktorý rastie. Bez záhad.',
    heroLead: 'E-shop bez merania je čierna skrinka. Bez Meta + Google Ads je neviditeľný. My nasadíme oboje a navyše Klaviyo automatizácie, ktoré vrátia 30-40 % zákazníkov späť.',
    pains: [
      'Reklama beží, ale neviete, koľko z nej naozaj predáva',
      'Návštevníci kliknú "do košíka" a odídu',
      'Nemáte e-mail komunikáciu s existujúcimi zákazníkmi',
      'Konverzný pomer pod 1 %',
    ],
    includes: [
      { title: 'Pokročilé meranie', desc: 'GA4 + GTM + server-side tracking + Meta CAPI. Bez stratených konverzií.' },
      { title: 'Google Ads (Shopping + Search + PMAX)', desc: 'Plný stack pre maximalizáciu predaja.' },
      { title: 'Meta Ads (FB + IG)', desc: 'Catalog, retargeting, lookalike audiences.' },
      { title: 'Klaviyo automation', desc: 'Welcome flow, abandoned cart, post-purchase, win-back.' },
      { title: 'Optimalizácia konverzie', desc: 'Audit checkoutu, A/B testy product page, heatmapy.' },
      { title: 'Feed management', desc: 'Google Shopping feed, Heuréka, optimalizácia produktových popisov.' },
      { title: 'Týždenné reporty + portál 24/7', desc: 'Live čísla z všetkých kanálov. Real ROAS.' },
    ],
    results: [
      { metric: '4.8×',   label: 'ROAS po 3 mesiacoch' },
      { metric: '+35%',   label: 'Konverzný pomer' },
      { metric: '+€87k',  label: 'Tržby / mesiac' },
    ],
    priceFrom: 399,
    timeline: '14-21 dní setup, prvé výsledky do 14 dní',
    idealFor: 'E-shopy s mesačným obratom 5-100k €. Shopify, WooCommerce, Upgades, Shoptet.',
  },

  // 5) KOVOVÝROBA / B2B VÝROBA
  {
    slug: 'kovovyroba',
    name: 'Kovovýroba a B2B výroba',
    tagline: 'Lead generation pre B2B. Bez impresií, len konkrétne dopyty.',
    heroLead: 'Kovovýroba, plastikárstvo, technológie — B2B reklama nie je o impresiách. Je o správnych ľuďoch v správnej firme. Pomáhame nájsť konkrétne firmy, ktoré potrebujú vaše služby.',
    pains: [
      'Klienti vás nájdu len cez referencie a outreach',
      'LinkedIn nemáte čas riešiť',
      'Web nemá nič o vašich kapacitách a strojoch',
      'Lacné výrobky z Číny vám berú dopyty',
    ],
    includes: [
      { title: 'LinkedIn Ads + organické', desc: 'Profil firmy, sponzorované príspevky, lead gen kampane.' },
      { title: 'Google Ads B2B', desc: 'Cielené na nákupcov, technológov, projekt manažérov.' },
      { title: 'B2B landing pages', desc: '2-3 stránky pre konkrétne služby (napr. CNC obrábanie, frézovanie).' },
      { title: 'Lead scoring + CRM', desc: 'HubSpot alebo Brevo — automatická kvalifikácia leadov.' },
      { title: 'Case study tvorba', desc: '2-3 prípadové štúdie ročne — váš nástroj na presvedčenie.' },
      { title: 'Outreach support', desc: 'Šablóny e-mailov pre cold outreach, sequencie.' },
      { title: 'Mesačné reporty', desc: 'Kvalifikované leady, zdroje, sales pipeline.' },
    ],
    results: [
      { metric: '+18',     label: 'Kvalifikovaných leadov / mes' },
      { metric: '€3.2k',   label: 'Priemerná hodnota dopytu' },
      { metric: '24%',     label: 'Conversion rate na schôdzku' },
    ],
    priceFrom: 499,
    timeline: '21 dní setup, prvé leady do 30-45 dní',
    idealFor: 'Kovovýroba, plastikárstvo, presná mechanika, technologické služby. 5-50 zamestnancov.',
  },

  // 6) REMESELNÍCI
  {
    slug: 'remeselnici',
    name: 'Remeselné firmy',
    tagline: 'Sklenári, klampiari, stavebníci. Vyhrávate v Google.',
    heroLead: 'Sklenárske, klampiarske, stavebné, či záhradnícke firmy — všetky majú jeden problém: zákazník ich nájde, len keď to akútne potrebuje. Postaráme sa, aby vás našiel ako prvého.',
    pains: [
      'Klienti volajú podľa odporúčania alebo z lokálnej skupinky FB',
      'Web je zastaraný alebo žiadny',
      'Recenzií máte málo, hoci robíte kvalitnú prácu',
      'Konkurencia v Google reklame ide drahšie ako vy',
    ],
    includes: [
      { title: 'Lokálne SEO', desc: 'Optimalizácia pre vyhľadávania typu "sklenár Prešov", "klampiar Košice".' },
      { title: 'Google Ads (Search + Local)', desc: 'Cielené na vaše služby v okruhu 30-50 km.' },
      { title: 'Google Business Profile', desc: 'Plný profil, fotky realizácií, recenzie, otváracie hodiny.' },
      { title: 'Jednoduchý moderný web', desc: 'Prezentačný web s portfóliom prác, cenníkom a kontaktným formulárom.' },
      { title: 'Recenzie management', desc: 'Po každej zákazke automaticky žiadame o recenziu cez SMS/e-mail.' },
      { title: 'Foto realizácií', desc: 'Pomôžeme s fotením realizácií — buď máte vlastný telefón, alebo dodáme.' },
      { title: 'Mesačný reporting', desc: 'Koľko volaní, koľko vyplnených formulárov, odkiaľ.' },
    ],
    results: [
      { metric: '+50%',   label: 'Telefonických dopytov' },
      { metric: 'Top 3',  label: 'V Google Maps' },
      { metric: '+38',    label: 'Nových recenzií / rok' },
    ],
    priceFrom: 249,
    timeline: '14-21 dní setup, prvé hovory do 21 dní',
    idealFor: 'Sklenári, klampiari, stavebné firmy, záhradníci, elektrikári, kúrenárie.',
  },
];

export function getIndustry(slug: string): IndustryPackage | undefined {
  return industries.find((i) => i.slug === slug);
}
