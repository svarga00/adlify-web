# Adlify Web (Astro)

Marketingový web Adlify postavený v Astro 5.x. Statický site, multi-jazyk (SK/CS/HU/EN/DE), obsah neskôr ťahaný zo Supabase pri builde.

## Štruktúra

```
adlify-web/
├── src/
│   ├── layouts/
│   │   └── Layout.astro       — header, footer, mobile drawer, SEO
│   ├── pages/
│   │   └── index.astro        — homepage SK (root /)
│   ├── components/            — (zatiaľ prázdne, prídu v ďalších etapách)
│   └── styles/
│       └── global.css         — design tokens + base + komponenty
├── public/
│   ├── img/logo.webp
│   └── favicon.svg
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Rozbehať lokálne (GitHub Desktop + Mac)

Keďže neradšej cez terminál, najjednoduchšie je rovno deployovať na Netlify (krok 2 nižšie). Ale ak chceš spustiť lokálne aspoň raz pre overenie, je to úplne jednoduché:

1. **Inštalácia Node.js** (raz, ak ešte nemáš)
   - Stiahni z https://nodejs.org → verzia "LTS"
   - Spusti inštalátor, klikaj "Next"

2. **Otvoriť projekt cez Terminal cez GitHub Desktop**
   - V GitHub Desktop klikni na repo → menu "Repository" → "Open in Terminal"
   - V termináli zadaj len 2 príkazy:
     ```
     npm install
     npm run dev
     ```
   - Otvor http://localhost:4321 v prehliadači

To je všetko, terminál môžeš zatvoriť ked skončíš.

## Nasadenie na Netlify (odporúčaný workflow)

1. Vytvor nový GitHub repo (cez GitHub Desktop: File → New Repository, daj názov napr. `adlify-web`)
2. Skopíruj všetky súbory tohto projektu do priečinku repa
3. Commit + Push (cez GitHub Desktop)
4. V Netlify dashboard → "Add new site" → "Import from Git" → vyber tento repo
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Klikni "Deploy"

Po prvom buildu dostaneš URL ako `napríklad-meno.netlify.app`. Tú si môžeš premenovať v Netlify settings.

## Multi-language URL štruktúra

- **SK** (default, root): `/`, `/sluzby`, `/cennik`, ...
- **CS:** `/cs/`, `/cs/sluzby`, ...
- **HU:** `/hu/`, ...
- **EN:** `/en/`, ...
- **DE:** `/de/`, ...

## Stav projektu (Etapa A — prvá dávka)

- ✅ Astro projekt setup
- ✅ Layout (header, footer, mobile drawer, SEO meta, hreflang)
- ✅ Homepage so 4 sekciami: Hero, Trust ticker, Stats, Manifest

### Ďalšie etapy

- [ ] Etapa A2 — sekcie 5–12 homepage (Pred a po, Services, Process, Calculator, Cases, Voices, Contact)
- [ ] Etapa B — Supabase fetch + 5 jazykov (build-time)
- [ ] Etapa C — SEO komplet (sitemap.xml, robots.txt, JSON-LD)
- [ ] Etapa D — Edge Function pre rebuild trigger z admina
