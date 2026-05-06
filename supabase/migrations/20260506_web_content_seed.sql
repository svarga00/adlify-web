-- ============================================================
-- SEED: Adlify-web content
-- ============================================================
-- Spustiť PO migrácii 20260506_web_content.sql.
-- Bezpečné na opakované spustenie — používa ON CONFLICT DO UPDATE.
-- ============================================================


-- ============================================================
-- 6 CASE STUDIES
-- ============================================================

INSERT INTO web_case_studies
  (slug, tag, name, category, summary,
   metric_a_label, metric_a_value, metric_b_label, metric_b_value,
   cover_gradient, hero_subtitle, industry, duration, budget, services_used,
   challenge, approach, results, testimonial, testimonial_by, kpis, sort_order)
VALUES
  (
    'zlatka',
    'E-COMMERCE · ŠPERKY',
    'Zlatka.sk',
    'e-commerce',
    'Online predajca šperkov, ktorý zdvojnásobil výnos z reklamy za 6 mesiacov.',
    'Tržby YoY', '+284%',
    'ROAS',      '6.2×',
    'linear-gradient(135deg, rgb(241, 100, 52), rgb(232, 93, 156))',
    'Ako sme zlatkám pomohli zdvojnásobiť tržby cez Performance Max + Klaviyo',
    'E-commerce · Šperky',
    '6 mesiacov',
    '€84k mesačne',
    ARRAY['Google Ads', 'Meta Ads', 'Klaviyo email', 'GA4 setup'],
    'Zlatka.sk pred spoluprácou s nami spaľovala €40k mesačne na Google Ads s ROAS 2.1× a stagnujúcimi tržbami €180k. Veľký katalóg (~3 200 SKU) bol zle organizovaný do reklamných skupín, žiadna segmentácia podľa marže, a Meta Ads boli prakticky nepoužité. Klaviyo bolo nainštalované, ale s 0 funkčnými flows. Atribúcia konverzií bola v Google Analytics 4 cca o 35 % poddimenzovaná kvôli chýbajúcemu CAPI a server-side trackingu.',
    'Restruktúrovali sme katalóg do 12 Performance Max kampaní podľa marže a kategórie. Nasadili sme server-side tracking cez Stape.io pre Meta CAPI a Google Enhanced Conversions, čo nám zlepšilo atribúciu o ~28 %. V Klaviyo sme spustili 6 flows (welcome, abandoned cart, post-purchase, win-back, browse abandonment, birthday) a 2× týždenne newsletter so segmentáciou. Na Meta Ads sme spustili kreatíva v 4 angloch (gifting, self-purchase, occasion, brand) s týždennými iteračnými testmi.',
    'Po 6 mesiacoch dosiahla Zlatka mesačné tržby €520k pri budgete €84k — ROAS 6.2× (z 2.1×). Email kanál začal sám generovať €74k mesačne (predtým €0). Customer LTV vzrástla o 41 % vďaka post-purchase flow a vernostnému programu. Brand search dopyt vzrástol o 312 % vďaka brand awareness kampaniam na Meta. Vďaka transparentnému dashboardu klient prvýkrát vidí, ktorý kanál vlastne predáva.',
    'Šesť mesiacov tomu nazad sme platili agentúru, ktorá nám sľubovala 5×ROAS, robila krásne reporty a nedoručila nič. Adlify za prvý mesiac restartoval účty a do troch nás ROAS posunul z 2× na 4×. Dnes sme na 6.2× a riešime druhú vlnu rastu — expanziu do Česka. Najlepšie investičné rozhodnutie roku.',
    'Lucia K., zakladateľka Zlatka.sk',
    '[
      {"label": "Mesačné tržby", "before": "€180 000",  "after": "€520 000",  "delta": "+189%"},
      {"label": "ROAS",          "before": "2.1×",      "after": "6.2×",      "delta": "+195%"},
      {"label": "Email revenue", "before": "€0",        "after": "€74 000",   "delta": "+∞"},
      {"label": "CPA",           "before": "€38",       "after": "€16",       "delta": "−58%"}
    ]'::jsonb,
    1
  ),
  (
    'bonsai-lab',
    'DTC · HOBBY',
    'Bonsai Lab',
    'dtc',
    'DTC značka starostlivosti o bonsaje, ktorá znížila CPA o takmer polovicu.',
    'CPA',  '−42%',
    'ROAS', '3.8×',
    'linear-gradient(135deg, rgb(10, 10, 10), rgb(241, 100, 52))',
    'Mikronika v hobby segmente — ako sme znížili CPA o 42 %',
    'DTC · Hobby produkty',
    '4 mesiace',
    '€18k mesačne',
    ARRAY['Meta Ads', 'TikTok Ads', 'Klaviyo email'],
    'Úzky niche segment (záhradkári so záujmom o bonsaje), kde Google Ads nefungovali — žiadny dopyt v search. Klient mal pekné produkty, ale Meta kampane behali ako jedno veľké broad publikum a CPA bol €31 na predaj s priemernou cenou objednávky €58. Inventory loss kvôli zlyhávajúcej segmentácii — top SKU sa vypredalo, kým sme stále reklamovali starý katalog.',
    'Spustili sme Meta s 3 separate audience clustermi (newbie / intermediate / advanced) a vyrobili sme po 4 kreatívy pre každý cluster. Pridali sme TikTok Spark Ads s organickým UGC od influencerov. Klaviyo automation segmentovaná podľa "úrovne pestovateľa" (zo selfreport quiz pri signup). Live inventory sync s Shopify znížil reklamu na out-of-stock SKU.',
    'CPA klesol z €31 na €18 (−42 %) za 4 mesiace. Average order value vzrástol z €58 na €74 (+28 %) vďaka cross-sell na "pokročilých" segmentoch. ROAS 3.8× (oproti 1.9× pred štartom). TikTok začal generovať 22 % všetkých objednávok pri ~15 % budgetu — najlacnejší channel v ich mixe.',
    'Mali sme pocit, že Meta Ads sú u nás nedotknutelné a bonsaje sa proste nedajú lepšie reklamovať. Adlify nám dokázal opak. CPA nižší o 42 % je pre nás ako roztrhnúť strop.',
    'Tomáš H., founder Bonsai Lab',
    '[
      {"label": "CPA",            "before": "€31", "after": "€18",  "delta": "−42%"},
      {"label": "ROAS",           "before": "1.9×","after": "3.8×", "delta": "+100%"},
      {"label": "AOV",            "before": "€58", "after": "€74",  "delta": "+28%"},
      {"label": "Mesačné objednávky", "before": "210", "after": "412", "delta": "+96%"}
    ]'::jsonb,
    2
  ),
  (
    'krajcirstvo',
    'LOCAL · B2C',
    'Krajčírstvo',
    'local',
    'Lokálne krajčírstvo v Bratislave so štedrým prílevom nových objednávok.',
    'Leads',     '+156%',
    'Cena lead', '€14',
    'linear-gradient(135deg, rgb(232, 93, 156), rgb(244, 127, 63))',
    'Úprava odevov a nové objednávky — local lead gen pre Krajčírstvo',
    'Local · B2C služba',
    '3 mesiace',
    '€2k mesačne',
    ARRAY['Google Ads Local', 'Meta Lead Ads', 'Google Business Profile'],
    'Klasické krajčírstvo na Záhradníckej v Bratislave — 80 % tržieb z dvoch mestských častí, neexistencia online prítomnosti, jediný marketing bola tabuľa pred salónom. Vlastníčka rozhodne nechcela "veľký marketing", ale chcela 5–10 nových zákazníkov mesačne pred letnou sezónou.',
    'Optimalizovali sme Google Business Profile (fotky, recenzie, popisy služieb) — za 4 týždne sa preklikoval 4× častejšie. Spustili sme Google Ads Local v 5 km rádiuse okolo prevádzky s ad copy konkrétnym k typom úprav (svadobné šaty, plesové, pánske obleky). Meta Lead Ads s formulárom "Pošlite fotku, povieme cenu" cielená na ženy 28–55 v Bratislave.',
    'Z priemerných ~12 nových klientov mesačne sme sa za 3 mesiace dostali na 31. Cena za lead € 14 (cieľ bol € 25). Konverzia z lead → platiaci klient 68 % (vďaka rýchlej odpovedi do 30 min). Vlastníčka musela zvýšiť personál o 1 krajčírku.',
    'Pred spoluprácou som mala mesiace, kedy som mala 4 klientov za týždeň a mesiace, kedy 12. Teraz mám stabilne 25–30. A neminula som ani na jednu Instagram reel. Najlepšie 2 000 € minulý rok.',
    'Magdaléna H., majiteľka Krajčírstva',
    '[
      {"label": "Mesačné leady",     "before": "12", "after": "31",   "delta": "+158%"},
      {"label": "Cena za lead",      "before": "—",  "after": "€14",  "delta": "—"},
      {"label": "Konverzný pomer",   "before": "—",  "after": "68%",  "delta": "—"},
      {"label": "GBP impressions",   "before": "1 200", "after": "5 800", "delta": "+383%"}
    ]'::jsonb,
    3
  ),
  (
    'novashop',
    'E-COMMERCE · FASHION',
    'NovaShop',
    'e-commerce',
    'Fashion e-shop, ktorý sa za pol roka prepracoval z €27k na €87k mesačných tržieb.',
    'Tržby', '+198%',
    'ROAS',  '5.1×',
    'linear-gradient(135deg, rgb(244, 127, 63), rgb(232, 93, 156))',
    'Performance scaling pre fashion e-shop — z €27k na €87k mesačne',
    'E-commerce · Fashion',
    '6 mesiacov',
    '€16k mesačne',
    ARRAY['Google Ads', 'Meta Ads', 'TikTok Ads', 'Email', 'Looker Studio'],
    'NovaShop pred spoluprácou stagnoval na €27k mesačných tržieb 18 mesiacov. ROAS 2.11×, broad targeting, žiadna kreatívna iterácia, atribúcia v GA4 missing 30 %+ konverzií. Vlastník už zvažoval, či má e-shop zatvoriť.',
    'Plný restart kampaní na Meta a Google — nový pixel implementácia cez server-side, Shopping kampane podľa marže a sezónnosti, TikTok ako nová expanzia. Mesačná retrospektíva s vlastníkom kde sme spolu rozhodovali ďalšie kroky.',
    'Za 6 mesiacov sa tržby pohli na €87 412 (+198 %). ROAS sa dostal z 2.11× na 5.42× (na grafe v hero sekcii našej hlavnej stránky vidíš presne tieto čísla). Mesačné konverzie z 251 na 1 284 (+412 %). CPA klesol z €18.20 na €8.40 (−54 %).',
    'Pol roka tomu naspať som myslel, že môj e-shop je mŕtvy projekt. Adlify ma presvedčil, aby som dal ešte 90 dní. Teraz mám 4-násobok obratu a riešim, či už mám expand do Maďarska.',
    'Marek D., founder NovaShop',
    '[
      {"label": "Mesačné tržby",    "before": "€27 480", "after": "€87 412", "delta": "+218%"},
      {"label": "ROAS",             "before": "2.11×",   "after": "5.42×",   "delta": "+157%"},
      {"label": "Mesačné konverzie","before": "251",     "after": "1 284",   "delta": "+412%"},
      {"label": "CPA",              "before": "€18.20",  "after": "€8.40",   "delta": "−54%"}
    ]'::jsonb,
    4
  ),
  (
    'ekodom',
    'B2C · EKOLÓGIA',
    'EkoDom',
    'b2c',
    'Predajca tepelných čerpadiel a ekologických technológií. Lead gen mašinka.',
    'Leads',     '+312%',
    'Cena lead', '€9',
    'linear-gradient(135deg, rgb(34, 197, 94), rgb(241, 100, 52))',
    'Tepelné čerpadlá ako lead gen — €9 za leada s 38 % konverziou',
    'B2C · Ekologické technológie',
    '5 mesiacov',
    '€8k mesačne',
    ARRAY['Google Ads', 'Meta Lead Ads', 'Email nurture'],
    'EkoDom predáva tepelné čerpadlá s priemernou hodnotou inštalácie €18 000. Pred spoluprácou nám prišli s vyše 200 leadmi mesačne, ale konverzia lead → predaj bola len 4 % (nesegmentované leady, žiadny nurture flow). Cena lead €34, sezonalita drvila finančný plán.',
    'Pridali sme kvalifikačné otázky do Meta Lead form (typ vykurovania, plocha domu, časový horizont). Email nurture sequence s edukatívnym obsahom (5 e-mailov / 10 dní). Sales tím dostal scoring podľa odpovedí — high-intent leady (priestor pripravený, rozhodne tento rok) volali do 1 hodiny, low-intent išli do dlhšieho nurturu.',
    'Cena lead klesla z €34 na €9 vďaka kvalifikácii. Konverzia lead → predaj sa zvýšila z 4 % na 38 %. Mesačné objednávky vzrástli zo 8 na 28. CAC v € 642 oproti predchádzajúcim € 1 880.',
    'Adlify pochopil, že nepotrebujem viac leadov. Potrebujem lepšie. Dnes mám menej leadov, ale 7× viac biznisu z nich.',
    'Rastislav K., founder EkoDom',
    '[
      {"label": "Mesačné leady",     "before": "210",  "after": "865",   "delta": "+312%"},
      {"label": "Cena za lead",      "before": "€34",  "after": "€9",    "delta": "−74%"},
      {"label": "Lead → sale konverzia", "before": "4%", "after": "38%", "delta": "+850%"},
      {"label": "CAC",               "before": "€1 880","after": "€642","delta": "−66%"}
    ]'::jsonb,
    5
  ),
  (
    'techpark',
    'SAAS · B2B',
    'TechPark',
    'b2b',
    'B2B SaaS pre správu coworking priestorov. ROAS dvíhaný cez precízny ICP targeting.',
    'ROAS', '4.4×',
    'CPA',  '−31%',
    'linear-gradient(135deg, rgb(10, 10, 10), rgb(232, 93, 156))',
    'B2B SaaS lead gen — od broad targeting po ICP-only',
    'B2B SaaS · Coworking management',
    '7 mesiacov',
    '€12k mesačne',
    ARRAY['LinkedIn Ads', 'Google Ads', 'Hubspot CRM', 'Outbound'],
    'TechPark mal pred spoluprácou broad LinkedIn Ads cielené na "office managers" v EU. Cena lead €280, sales cycle 4 mesiace, conversion rate <1 %. Hubspot bol napojený, ale chýbal lead scoring a marketing-sales handoff.',
    'Definícia ICP (300+ konkrétnych coworking firiem v 8 krajinách). LinkedIn Conversation Ads na C-level v týchto firmách. Google Ads na long-tail keywords ("coworking management software", "flexible workspace booking system"). Hubspot lead scoring + automatický handoff sales tímu.',
    'Cena lead klesla z €280 na €194 (−31 %). Konverzia lead → demo z 4 % na 23 %. Sales cycle skrátený zo 4 na 2.5 mesiaca. ARR pridelená paid kanálom narástla z €68k na €310k v rovnakom 7-mesačnom období.',
    'Pri B2B SaaS nikto nerobí seriózny marketing v strednej Európe. Adlify si naštudoval naše ICP lepšie ako my. Dnes sa zamerali len na 280 firiem v Európe — a 60 % z nich nás už pozná.',
    'Andrej P., CMO TechPark',
    '[
      {"label": "ROAS",              "before": "1.8×",  "after": "4.4×",   "delta": "+144%"},
      {"label": "CPA (qualified lead)","before": "€280", "after": "€194", "delta": "−31%"},
      {"label": "Lead → demo conversion","before": "4%", "after": "23%", "delta": "+475%"},
      {"label": "Sales cycle",       "before": "4 mes.","after": "2.5 mes.","delta": "−38%"}
    ]'::jsonb,
    6
  )
ON CONFLICT (slug) DO UPDATE SET
  tag             = EXCLUDED.tag,
  name            = EXCLUDED.name,
  category        = EXCLUDED.category,
  summary         = EXCLUDED.summary,
  metric_a_label  = EXCLUDED.metric_a_label,
  metric_a_value  = EXCLUDED.metric_a_value,
  metric_b_label  = EXCLUDED.metric_b_label,
  metric_b_value  = EXCLUDED.metric_b_value,
  cover_gradient  = EXCLUDED.cover_gradient,
  hero_subtitle   = EXCLUDED.hero_subtitle,
  industry        = EXCLUDED.industry,
  duration        = EXCLUDED.duration,
  budget          = EXCLUDED.budget,
  services_used   = EXCLUDED.services_used,
  challenge       = EXCLUDED.challenge,
  approach        = EXCLUDED.approach,
  results         = EXCLUDED.results,
  testimonial     = EXCLUDED.testimonial,
  testimonial_by  = EXCLUDED.testimonial_by,
  kpis            = EXCLUDED.kpis,
  sort_order      = EXCLUDED.sort_order;


-- ============================================================
-- 9 BLOG POSTS
-- ============================================================

INSERT INTO web_blog_posts
  (slug, category, title, excerpt, body, read_time_min,
   cover_gradient, author_name, author_initials, author_role,
   is_featured, published_at)
VALUES
  (
    'performance-max-kedy-pomaha',
    'Google Ads',
    'Performance Max: kedy pomáha a kedy škodí tržbám',
    'PMax funguje skvele pre retailerov s kvalitným feedom. Horšie pre lead gen a brand-heavy kategórie. Kedy ho zapnúť a kedy nechať tak.',
    E'## Performance Max: kedy áno, kedy nie\n\nPerformance Max (PMax) je Googlov vlajkový reklamný formát od 2022. Sľubuje "AI-driven" optimalizáciu cez všetky kanály — Search, YouTube, Display, Discover, Gmail. Pre retailerov to často naozaj funguje. Pre lead gen môže byť čisté tržbové utopenie.\n\n### Kedy PMax pomáha\n\n**Retail s kvalitným product feedom.** Ak máte e-shop s 500+ SKU a každý SKU má dobré obrázky, popisy, ceny a dostupnosť, PMax v kombinácii so Shopping kampaňami zarobí. Algoritmus rozumie produktom a vie ich párovať s nákupným zámerom v reálnom čase.\n\n**Široký katalóg s rôznou maržou.** PMax dokáže priorizovať produkty s vyššou maržou, ak mu to povolíte cez "value rules" alebo nastavíte conversion value goals.\n\n### Kedy PMax škodí\n\n**Lead gen.** PMax sa spolieha na konverzný signál. Ak máte lead form (formulár), signál je slabý a algoritmus ho nedokáže optimalizovať. Skončíte s drahými leadmi nízkej kvality.\n\n**Brand-heavy kategórie.** PMax si "pýta" brand traffic — keď niekto hľadá "Adlify", PMax dosadí brand keyword aj do svojej kampane a pripíše si konverziu, ktorá by sa udiala aj bez neho. To skresľuje ROAS a zhŕňa lacný brand traffic ako vlastnú zásluhu.\n\n### Praktické odporúčanie\n\n1. Nepúšťajte PMax bez Shopping campaign. Robia partnerstvo, nie konkurenciu.\n2. Vyhraďte si brand keywordy do separátnej Search kampane s **negatívami v PMax**.\n3. Ak ste lead gen — najprv testujte Search + Demand Gen, až potom PMax.\n4. Sledujte cross-channel attribution. PMax si rád pripisuje to, čo by ste mali bez neho.',
    12,
    'linear-gradient(135deg, rgb(241, 100, 52), rgb(232, 93, 156))',
    'Peter Novák',     'PN', 'Senior PPC Specialist',
    TRUE,
    '2026-04-12'
  ),
  (
    'meranie-realne-trzby',
    'Analytika',
    'Ako nastaviť meranie tak, aby ste konečne videli reálne tržby',
    'Bežný Google Analytics vám ukazuje cca 70 % reálnych transakcií. Pokročilé meranie a aj offline predaje.',
    E'## Bežné meranie ukazuje len 70 % tržieb\n\nKlasický Google Analytics 4 cez gtag.js v prehliadači vám zachytáva približne 65–75 % reálnych transakcií. Zvyšok mizne kvôli iOS Safari ITP, ad blockerom, cookie consent banneru ("decline all"), a server-to-server platbám.\n\n### Server-side tracking — base case\n\nServer-side tracking presúva merací bod z prehliadača na váš server. Cez Google Tag Manager Server Container (alebo Stape.io / Cookiebot) posielate dáta priamo do GA4, Meta CAPI, Google Ads.\n\n**Co to vyrieši:**\n- iOS 17+ tracking blocking — server signál nie je blokovaný\n- Ad blocky filtrujú browser requesty, nie server\n- Lepšia atribúcia konverzií v Meta Pixel cez CAPI (Conversion API)\n\n### Enhanced ecommerce + offline conversions\n\nAk predávate aj cez telefón / showroom, importujte tieto offline konverzie naspäť do Google Ads cez "Offline Conversion Imports". Algoritmus sa naučí, ktoré online kliky vedú k offline predaju, a začne prioritizovať podobné publiká.\n\n### Setup checklist\n\n1. ☐ GTM server container (€20/mes)\n2. ☐ Meta CAPI cez server\n3. ☐ Google Enhanced Conversions for Web\n4. ☐ Offline Conversion Import (ak máte)\n5. ☐ User-ID + Customer Match\n6. ☐ Consent Mode v2\n\nPo tomto setupe typicky vidíme 25–40 % nárast atribuovanej revenue v GA4 — bez toho aby tržby reálne narástli. Len konečne vidíte, čo sa naozaj dialo.',
    10,
    'linear-gradient(135deg, rgb(232, 93, 156), rgb(244, 127, 63))',
    'Lucia Horváthová', 'LH', 'Head of Analytics',
    FALSE,
    '2026-04-05'
  ),
  (
    'zlatka-case-study',
    'Case Study',
    'Ako sme zdvojnásobili výnosy z reklamy e-shopu so šperkami',
    '6 mesiacov, €84k budget, tržby z €180k na €520k. Čo fungovalo, čo nie.',
    E'## Východisko\n\nZlatka.sk pred spoluprácou s nami spaľovala €40k mesačne na Google Ads s ROAS 2.1× a stagnujúcimi tržbami €180k. Veľký katalóg (~3 200 SKU) bol zle organizovaný do reklamných skupín, žiadna segmentácia podľa marže, a Meta Ads boli prakticky nepoužité.\n\n## Hypotézy ktoré sme testovali\n\n1. **Reštruktúra Performance Max kampaní** podľa marže a kategórie\n2. **Nasadenie server-side trackingu** pre Meta CAPI a Google Enhanced Conversions\n3. **Klaviyo email automation** namiesto sporadických newsletterov\n4. **Meta Ads kreatíva v 4 angloch** (gifting, self-purchase, occasion, brand)\n\n## Čo fungovalo\n\nReštruktúra PMax dokopy najväčší impact — ROAS sa za 8 týždňov pohol z 2.1× na 4.3×. Klaviyo email začal generovať €74k mesačne (z nuly) za 4 mesiace. Server-side tracking nám zlepšil atribúciu o 28 % a algoritmy "videli" viac konverzií, lepšie sa učili.\n\n## Čo nefungovalo\n\nPrvý mesiac sme stratili budget na TikTok Spark Ads — fashion-style hooks proste nerezonovali s naším publikom (priemerný vek 38). Stiahli sme TikTok rozpočet a presunuli ho do Meta Reels.\n\n## Výsledky po 6 mesiacoch\n\n- Mesačné tržby: €180k → €520k (+189 %)\n- ROAS: 2.1× → 6.2× (+195 %)\n- Email revenue: €0 → €74k\n- CPA: €38 → €16 (−58 %)',
    8,
    'linear-gradient(135deg, rgb(10, 10, 10), rgb(241, 100, 52))',
    'Mária Kováčová',  'MK', 'Account Lead',
    FALSE,
    '2026-03-28'
  ),
  (
    'ios-17-meta-ads',
    'Meta Ads',
    'iOS 17 a Meta Ads: čo to znamená pre váš pixel',
    'Atribúcia je čoraz krehkejšia. CAPI, Advanced Matching a modelling ako záchrana dát.',
    E'## iOS 17 mení hru\n\niOS 17 zaviedol Link Tracking Protection — Safari automaticky odstraňuje query parametre ako `fbclid`, `gclid` z URL po kliku z Mailu, Messages, alebo Safari Private mode. Pre Meta Pixel to znamená, že klik z Facebook reklamy už nie je spojiteľný s následnou konverziou bez ďalšieho riešenia.\n\n## Conversion API (CAPI) ako baseline\n\nCAPI posiela konverzný event priamo zo servera Meta-e, obíde browser tracking obmedzenia. Setup cez:\n\n1. Meta Pixel Helper na klienta (browser)\n2. CAPI cez server (Stape.io alebo vlastný backend)\n3. Deduplikácia cez `event_id` aby Meta nezaratovala dvakrát\n\n## Advanced Matching\n\nPosielajte hashed user data (email, telefón) s každým eventom. Meta tým dokáže dohľadať userov medzi browser a server signálom, aj keď klik atribúcia chýba.\n\n## Modelovanie\n\nMeta od iOS 14 robí "modelled conversions" — odhady konverzií ktoré sa udiali ale nedalo ich priamo atribuovať. iOS 17 tieto modely posunul. V Ads Manager pod stĺpcom "Modelled" vidíte, koľko je odhadovaných.',
    9,
    'linear-gradient(135deg, rgb(244, 127, 63), rgb(232, 93, 156))',
    'Peter Novák', 'PN', 'Senior PPC Specialist',
    FALSE,
    '2026-03-20'
  ),
  (
    '7-chyb-email-marketing',
    'E-mail',
    '7 chýb v e-mail marketingu, ktoré robí 90 % e-shopov',
    'Neexistujúci welcome flow, zmiešaná segmentácia, žiadne A/B testy. Vďaka odstráneniu chýb sa email stáva najziskovejším kanálom.',
    E'## 7 najčastejších chýb\n\n**1. Žiadny welcome flow.** Niekto vám dal e-mail (subscribe na newsletter, prvý nákup) a vy mu pošlete ďalší e-mail až o 2 týždne s newsletterom. Welcome series 4–6 e-mailov v prvých 14 dňoch generuje 25–30 % zo všetkej email revenue.\n\n**2. Žiadna segmentácia.** Posielate ten istý e-mail prvonákupcovi aj VIP zákazníkovi s 10 nákupmi. Open rate 18 % a vyhasínate audience.\n\n**3. Abandoned cart bez 3-stupňového flow.** Jeden reminder po 1 hodine je málo. Skúste 1h → 24h → 72h s rastúcou inkrementálnou ponukou (5% → 10%).\n\n**4. Subject line bez A/B testu.** Subject line je 80 % open rate. A/B testujte VŽDY.\n\n**5. Newsletter raz mesačne.** Frequency 2× týždenne dáva najlepší ROI pre e-commerce. Bojte sa unsubscribe. Ľudia, ktorí sa odhlásia, by aj tak nekúpili.\n\n**6. Žiadny post-purchase flow.** Po prvom nákupe odošlite: thank you (deň 0) → tip na použitie (deň 3) → cross-sell (deň 14) → repurchase reminder (deň 45).\n\n**7. Zlá deliverability.** SPF, DKIM, DMARC nastavené nesprávne. 30 % e-mailov skončí v spame. Použite mail-tester.com na audit.',
    7,
    'linear-gradient(135deg, rgb(241, 100, 52), rgb(244, 127, 63))',
    'Juraj Bartoš',  'JB', 'Email Marketing Lead',
    FALSE,
    '2026-03-15'
  ),
  (
    'ai-content-seo-2026',
    'SEO',
    'AI-generated content a Google: čo reálne funguje v 2026',
    'AI content nie je automaticky penalizovaný — ale AI slop áno. Editorial process, ktorý robíme pre klientov.',
    E'## Google nepenalizuje AI per se\n\nGoogle Search Liaison (Danny Sullivan) opakovane potvrdil: nie je dôležité, či obsah písal človek alebo AI. Dôležité je, či je **užitočný, originálny a má E-E-A-T signály**.\n\n### Čo Google trestá\n\n**AI slop** — masívne generovaný content bez editorial review, často duplikovaný, žiadna originálna hodnota. Tieto weby v Helpful Content Update padli o 60–90 %.\n\n### Náš editorial process pre klientov\n\n1. **Topic research** — nie z LLM, ale z reálneho keyword research, Reddit, fórum dát\n2. **Outline od človeka** — autor stanoví štruktúru, kľúčové body, claimy\n3. **Draft od AI** — Claude alebo GPT-4 napíšu prvý draft podľa outlinu\n4. **Heavy edit** — autor prepíše každú vetu, pridá first-hand expertise\n5. **Fact-check** — všetky čísla overené, zdroje pridané\n6. **E-E-A-T signály** — autor bio, link na LinkedIn, dátum, citáty\n\n## Výsledky\n\nKlient v B2B SaaS — 32 článkov mesačne týmto pipeline. 6 mesiacov: organic traffic +287 %, žiadna penalizácia. Top 3 ranking pre 47 keywords s buyer intent.',
    11,
    'linear-gradient(135deg, rgb(10, 10, 10), rgb(232, 93, 156))',
    'Lucia Horváthová', 'LH', 'Head of Analytics',
    FALSE,
    '2026-03-08'
  ),
  (
    'heatmapy-klamu',
    'Optimalizácia',
    'Heatmapy klamú. Čo sledovať namiesto toho.',
    'Scroll depth a click maps sú pekné ale misleading. Ako čítať skutočné user behaviour.',
    E'## Prečo heatmapy klamú\n\nHotjar / Microsoft Clarity / FullStory vám ukážu, kde užívatelia klikajú a kam scrollujú. Vyzerá to vedecky. Realita: bez **kontextu konverzie** sú tieto dáta zavadzajúce.\n\n### Kde heatmapy zlyhávajú\n\n**Klik mapa neukazuje intent.** Vidíte, že 40 % užívateľov kliklo na obrázok produktu. Neviete, či to bolo zo zvedavosti, omylom, alebo to bol konverzný signál.\n\n**Scroll depth ignoruje engagement quality.** 80 % užívateľov scrolluje na koniec stránky. Skvelé! Ale 80 % z nich tam strávilo 2 sekundy a odišlo.\n\n### Čo sledovať namiesto toho\n\n1. **Conversion-segmented session recordings** — pozrite si len recordings od tých, ktorí konvertovali. A potom tých, ktorí takmer konvertovali (pridali do košíka, ale nedokončili).\n2. **Funnel drop-offs s časom** — kde užívatelia opúšťajú a aký je median time on step.\n3. **Form analytics** — ktoré field má najvyšší abandon rate.\n4. **A/B testy** — heatmapy nie sú validátor, len hypotézový generátor.',
    6,
    'linear-gradient(135deg, rgb(232, 93, 156), rgb(241, 100, 52))',
    'Mária Kováčová', 'MK', 'Account Lead',
    FALSE,
    '2026-03-01'
  ),
  (
    'broad-match-2026',
    'Google Ads',
    'Broad match v 2026: áno alebo nie?',
    'S kvalitnými conversion signálmi broad match začína dávať zmysel. Kedy riskovať.',
    E'## Broad match je iný ako pred 5 rokmi\n\nKedysi broad match znamenalo "moje peniaze idú do horúceho ohňa". Dnes, s Smart Bidding (Target ROAS / Maximize Conversions) a kvalitnými konverznými signálmi, je broad match jeden z najprodukatívnejších match types.\n\n### Kedy zapnúť broad match\n\n1. ☐ Máte 30+ konverzií / mesiac na účet (smart bidding learning floor)\n2. ☐ Máte správne nastavený Enhanced Conversions / CAPI\n3. ☐ Conversion value sa posiela presne (nie default 1)\n4. ☐ Máte aspoň 2 týždne historických dát s exact / phrase\n5. ☐ Negative keyword list je proti-spam ready\n\n### Setup\n\n- Vyhraďte si **separátnu kampaň** s broad match — nemiešajte s exact / phrase\n- Použite Target ROAS bidding s konzervatívnym targetom (vyšší než průměr)\n- Sledujte search terms týždenne prvý mesiac\n- Premiestnite high-performance broad terms ako exact match\n\n### Naše skúsenosti\n\nU 60 % e-commerce klientov broad match v 2026 outperformuje exact match na CPA. U lead gen je to 50/50 — záleží od kvality lead signal.',
    8,
    'linear-gradient(135deg, rgb(241, 100, 52), rgb(232, 93, 156))',
    'Peter Novák', 'PN', 'Senior PPC Specialist',
    FALSE,
    '2026-02-22'
  ),
  (
    'paid-vs-seo-kedy',
    'Strategy',
    'Kedy prestať liať peniaze do reklamy a investovať do SEO',
    'Paid má strop. Moment, keď sa treba zamerať na dlhodobé aktíva.',
    E'## Paid má diminishing returns\n\nKaždý e-commerce, ktorý žije len z paid, má strop. Cena za klik rastie YoY, kompetícia tlačí ROAS dole, a vy ste závislý na 1–2 platformách.\n\n### Keď začať seriózne investovať do SEO\n\n1. **Máte stabilný produkt** — investícia do SEO content je 6–12 mesiacov pred prvým ROI\n2. **Paid stagnuje** — ďalší € pridaný do paid prináša už menej ako predtým\n3. **Brand search rastie organicky** — to je signál, že máte content-market fit\n4. **Máte expert in-house** — niekto kto vie napísať obsah s reálnou hodnotou\n\n### SEO economics\n\nPaid: zaplatíte €1, dostanete €4 jednorazovo. Skončíte zaplatiť, skončí návratnosť.\n\nSEO: zaplatíte €5 000 za článok ktorý ranking zoberie 6 mesiacov. Potom rok generuje 5 000 návštev mesačne. Pri konverzii 2 % a marži €15 to je €18 000/mes — bez ďalšieho nákladu.\n\n### Hybrid model\n\nNie buď-alebo. Pre rastúce e-commercey odporúčame:\n\n- 70 % budgetu paid (krátkodobé tržby)\n- 20 % budgetu content/SEO (dlhodobé aktíva)\n- 10 % experimenty (TikTok, retail media, podcasts)',
    9,
    'linear-gradient(135deg, rgb(244, 127, 63), rgb(10, 10, 10))',
    'Juraj Bartoš', 'JB', 'Email Marketing Lead',
    FALSE,
    '2026-02-15'
  )
ON CONFLICT (slug) DO UPDATE SET
  category        = EXCLUDED.category,
  title           = EXCLUDED.title,
  excerpt         = EXCLUDED.excerpt,
  body            = EXCLUDED.body,
  read_time_min   = EXCLUDED.read_time_min,
  cover_gradient  = EXCLUDED.cover_gradient,
  author_name     = EXCLUDED.author_name,
  author_initials = EXCLUDED.author_initials,
  author_role     = EXCLUDED.author_role,
  is_featured     = EXCLUDED.is_featured,
  published_at    = EXCLUDED.published_at;


-- ============================================================
-- 6 SERVICES
-- ============================================================

INSERT INTO web_services (slug, title, short_desc, icon_svg, specs, hero_lead, what_you_get, process_steps, faq, pricing_note, sort_order)
VALUES
  (
    'google-ads',
    'Google Ads',
    'Search, Performance Max, Shopping a YouTube. Od nastavenia konverzií po bid stratégie.',
    '<circle cx="11" cy="11" r="7"></circle><path d="m21 21-4.3-4.3"></path>',
    '[
      {"label": "Setup",         "value": "10 dní"},
      {"label": "Prvé výsledky", "value": "4 týždne"},
      {"label": "Reporting",     "value": "Týždenne"},
      {"label": "Zahrnuté",      "value": "Vo všetkých plánoch"}
    ]'::jsonb,
    'Spravujeme Google Ads pre e-commerce a lead gen už 5+ rokov. Search, Performance Max, Shopping, YouTube, Demand Gen — vieme to celé. S certifikátom Google Premier Partner máme prístup k betám, dedikovanej support linke a školeniam priamo od inžinierov Google.',
    ARRAY[
      'Audit a stratégia kampaní (Search, PMax, Shopping)',
      'Pokročilé Conversions setup + offline conversion import',
      'Týždenná optimalizácia bidding stratégií',
      'A/B testovanie ad copy a kreatívy',
      'Negative keyword management',
      'Mesačná retrospektíva s odporúčaniami'
    ],
    '[
      {"title": "Audit a stratégia", "desc": "Prejdeme váš účet, identifikujeme úniky budgetu a navrhneme reštruktúru kampaní."},
      {"title": "Reštruktúra kampaní", "desc": "Reorganizujeme ad groups, kľúčové slová a bidding stratégiu podľa marže a sezónnosti."},
      {"title": "Tracking setup", "desc": "Nasadíme Enhanced Conversions, server-side tracking a Customer Match."},
      {"title": "Týždenná optimalizácia", "desc": "Negative keywords, bid adjustments, search terms review, ad copy testing."}
    ]'::jsonb,
    '[
      {"q": "Účtujete províziu z Google Ads budgetu?", "a": "Nie. Fixný mesačný paušál bez ohľadu na to, koľko miniete na reklamu."},
      {"q": "Aký minimálny budget odporúčate?", "a": "€500–1000 mesačne na začiatok pre Search. Nižšie hodnoty nedávajú algoritmu dosť dát."},
      {"q": "Vlastníme náš Google Ads účet?", "a": "Áno. Účet je na vašu firmu, my máme prístup ako agentúra. Pri ukončení spolupráce odoberieme prístup."}
    ]'::jsonb,
    'Súčasť každého plánu (Starter / Growth / Scale)',
    1
  ),
  (
    'meta-ads',
    'Meta Ads',
    'Facebook a Instagram reklamy s dôrazom na kreatívy, audience targeting a retargeting.',
    '<path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5v1.8h2.6l-.4 2.9h-2.2v7C18.3 21.1 22 17 22 12z"></path>',
    '[
      {"label": "Setup",         "value": "7 dní"},
      {"label": "Prvé výsledky", "value": "2 týždne"},
      {"label": "Reporting",     "value": "Týždenne"},
      {"label": "Zahrnuté",      "value": "Vo všetkých plánoch"}
    ]'::jsonb,
    'Meta Ads (Facebook + Instagram) pre e-commerce a DTC značky. Špecializujeme sa na kreatívnu iteráciu, audience clustering a server-side tracking cez CAPI. S certifikátom Meta Business Partner.',
    ARRAY[
      'Meta Pixel + CAPI server-side setup',
      'Audience clustering podľa engagement a LTV',
      '12+ kreatív mesačne (static + video)',
      'A/B testy hooks, copy a CTA',
      'Retargeting flows pre cart abandoners a visitors',
      'iOS 17+ tracking optimalizácia'
    ],
    '[
      {"title": "Pixel + CAPI setup", "desc": "Server-side tracking cez Stape.io alebo vlastný backend, deduplikácia cez event_id."},
      {"title": "Audience research", "desc": "Definícia 3-5 target clusters s vlastnými hooks a kreatívami."},
      {"title": "Kreatíva", "desc": "12 variantov mesačne — static, video, carousel. Týždenné testy hooks."},
      {"title": "Scaling", "desc": "Akonáhle audience prinesie ROAS > target, postupne navyšujeme budget."}
    ]'::jsonb,
    '[
      {"q": "Vyrábate aj kreatívu?", "a": "Áno. In-house designer pripraví 12 statické + video kreatívy mesačne."},
      {"q": "Funguje Meta Ads aj na B2B?", "a": "V niche segmentoch áno (cez LinkedIn-style targeting na job titles). Ale pre väčšinu B2B odporúčame LinkedIn Ads."}
    ]'::jsonb,
    'Súčasť každého plánu (od Growth)',
    2
  ),
  (
    'seo',
    'SEO optimalizácia',
    'Audit, technické SEO, content stratégia a link building. Dlhodobý rast organickej návštevnosti.',
    '<circle cx="11" cy="11" r="7"></circle><path d="m21 21-4.3-4.3"></path><path d="M11 8v6"></path><path d="M8 11h6"></path>',
    '[
      {"label": "Audit",         "value": "14 dní"},
      {"label": "Prvé výsledky", "value": "3 mesiace"},
      {"label": "Reporting",     "value": "Mesačne"},
      {"label": "Zahrnuté",      "value": "Plán Growth+"}
    ]'::jsonb,
    'Technické SEO + content stratégia + organický link building. Žiadny PBN, žiadny linkbait. Dôraz na E-E-A-T a buyer-intent keywords.',
    ARRAY[
      'Technický SEO audit (Core Web Vitals, indexácia, štruktúrované dáta)',
      'Keyword research s buyer-intent prioritizáciou',
      'Content calendar + editorial review',
      'On-page optimalizácia top stránok',
      'Digital PR a guest posts (organický link building)',
      'Mesačný ranking & traffic report'
    ],
    '[
      {"title": "Technický audit", "desc": "Core Web Vitals, sitemap, robots.txt, schema markup, internal linking."},
      {"title": "Keyword research", "desc": "200+ kľúčových slov s buyer-intent. Prioritizácia podľa difficulty × volume × intent."},
      {"title": "Content production", "desc": "4-8 článkov mesačne, každý prejde editorial review a fact-checkom."},
      {"title": "Link building", "desc": "Digital PR, guest posts, brand mentions. Žiadny PBN."}
    ]'::jsonb,
    '[
      {"q": "Kedy uvidím prvé výsledky?", "a": "Technické SEO opravy 4-6 týždňov. Nový content ranking 3-6 mesiacov."},
      {"q": "Garantujete top 3 v Google?", "a": "Nie. Nikto seriózny negarantuje pozície. Garantujeme procesy a transparentný reporting."}
    ]'::jsonb,
    'Plán Growth+',
    3
  ),
  (
    'email',
    'E-mailové kampane',
    'Newslettery, automation flows a transakčné e-maily. Od dizajnu po dodanie.',
    '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path>',
    '[
      {"label": "Setup",     "value": "7 dní"},
      {"label": "Frekvencia","value": "1–4× / mes."},
      {"label": "Reporting", "value": "Po každej kampani"},
      {"label": "Zahrnuté",  "value": "Plán Growth+"}
    ]'::jsonb,
    'Klaviyo / Mailchimp / ActiveCampaign — flows, segmentácia, A/B testy. Pre e-commerce typicky 25-30 % z celkových tržieb.',
    ARRAY[
      'Welcome flow (4-6 e-mailov / 14 dní)',
      'Abandoned cart flow (1h → 24h → 72h)',
      'Post-purchase + cross-sell flow',
      'Win-back kampane',
      'Týždenné newslettre s A/B testami subject lines',
      'Deliverability monitoring (SPF, DKIM, DMARC)'
    ],
    '[
      {"title": "Setup ESP", "desc": "Klaviyo / Mailchimp setup, deliverability audit, segmentácia."},
      {"title": "Flows", "desc": "Welcome, abandoned cart, post-purchase, win-back, browse abandonment."},
      {"title": "Newsletter", "desc": "Týždenné kampane s A/B testami. Segmentácia podľa engagement."},
      {"title": "Optimalizácia", "desc": "Mesačná retrospektíva, testy subject lines, send time, segmentov."}
    ]'::jsonb,
    '[
      {"q": "S ktorými ESP pracujete?", "a": "Najčastejšie Klaviyo (e-commerce), Mailchimp a ActiveCampaign (B2B)."},
      {"q": "Vyrábate aj dizajn e-mailov?", "a": "Áno. In-house designer + copywriter."}
    ]'::jsonb,
    'Plán Growth+',
    4
  ),
  (
    'meranie',
    'Meranie a vyhodnocovanie',
    'GA4, Google Tag Manager, server-side tracking, dashboard v Looker Studio. Bez tohto sa nedá optimalizovať.',
    '<path d="M3 3v18h18"></path><path d="M7 14l4-4 4 4 5-5"></path>',
    '[
      {"label": "Setup",         "value": "5–10 dní"},
      {"label": "Prvé reporty",  "value": "2 týždne"},
      {"label": "Reporting",     "value": "Týždenne"},
      {"label": "Zahrnuté",      "value": "Vo všetkých plánoch"}
    ]'::jsonb,
    'Bez správneho merania nevidíte, čo predáva. Nasadíme GA4, GTM, server-side tracking, CAPI a postavíme dashboard v Looker Studio.',
    ARRAY[
      'GA4 setup + Enhanced Ecommerce',
      'Google Tag Manager Server Container',
      'Meta CAPI server-side',
      'Looker Studio dashboard (real-time)',
      'Offline conversion import',
      'Customer Match + User-ID',
      'Consent Mode v2 (GDPR)'
    ],
    '[
      {"title": "Audit current setup", "desc": "Skontrolujeme GA4, pixely, GTM, ECommerce events."},
      {"title": "Server-side setup", "desc": "GTM Server na Stape.io alebo vlastnom serveri."},
      {"title": "Dashboard", "desc": "Looker Studio s vašimi dátami. Real-time KPI, kampane, kanály."},
      {"title": "Maintenance", "desc": "Týždenná kontrola event flow, mesačná aktualizácia."}
    ]'::jsonb,
    '[
      {"q": "Koľko stojí GTM Server hosting?", "a": "€20-30 mesačne cez Stape.io. Platí klient priamo."},
      {"q": "GDPR compliance?", "a": "Áno. Cookiebot/Iubenda integrácia, Consent Mode v2, EU servery."}
    ]'::jsonb,
    'Súčasť každého plánu',
    5
  ),
  (
    'web',
    'Web a vstupné stránky',
    'Rýchle, konverzné landing pages a microweby. Od copy cez dizajn po implementáciu a A/B testy.',
    '<rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path>',
    '[
      {"label": "Setup",         "value": "14–21 dní"},
      {"label": "Prvé výsledky", "value": "4 týždne"},
      {"label": "Reporting",     "value": "Týždenne"},
      {"label": "Zahrnuté",      "value": "Doplnková služba"}
    ]'::jsonb,
    'Konverzná landing page od briefu po live za 14-21 dní. Astro / Next.js stack, Core Web Vitals 95+, SEO ready, A/B test ready.',
    ARRAY[
      'Discovery + UX research',
      'Copywriting (heading, body, CTA)',
      'Dizajn (Figma) + responsive verzia',
      'Implementácia (Astro / Next.js)',
      'Tracking + A/B test setup',
      'Hosting setup (Netlify / Vercel)'
    ],
    '[
      {"title": "Discovery", "desc": "Brief, target audience, value prop, competitor analysis."},
      {"title": "Copy + dizajn", "desc": "First draft copy, Figma dizajn, 2 kolá feedback."},
      {"title": "Implementácia", "desc": "Astro alebo Next.js, plne responzívne, SEO ready."},
      {"title": "Tracking + A/B", "desc": "GA4, Hotjar, Google Optimize alternatíva pre A/B testy."}
    ]'::jsonb,
    '[
      {"q": "Aký framework používate?", "a": "Astro pre static stránky, Next.js pre interaktívne. Hosting na Netlify alebo Vercel."},
      {"q": "Cena?", "a": "Landing page od €1490, microweb (3-5 stránok) od €3490, e-shop launch od €6900."}
    ]'::jsonb,
    'Doplnková služba (jednorazový projekt)',
    6
  )
ON CONFLICT (slug) DO UPDATE SET
  title           = EXCLUDED.title,
  short_desc      = EXCLUDED.short_desc,
  icon_svg        = EXCLUDED.icon_svg,
  specs           = EXCLUDED.specs,
  hero_lead       = EXCLUDED.hero_lead,
  what_you_get    = EXCLUDED.what_you_get,
  process_steps   = EXCLUDED.process_steps,
  faq             = EXCLUDED.faq,
  pricing_note    = EXCLUDED.pricing_note,
  sort_order      = EXCLUDED.sort_order;
