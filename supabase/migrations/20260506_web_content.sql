-- ============================================================
-- Migrácia: Adlify-web content tabuľky
-- ============================================================
-- 3 tabuľky pre dynamic content webu (postavenom na Astro):
--   1. web_case_studies — prípadové štúdie (Zlatka, Bonsai Lab, ...)
--   2. web_blog_posts   — blog články
--   3. web_services     — služby (Google Ads, Meta Ads, SEO, ...)
--
-- Konvencia (poradie operácií):
--   1) CREATE TABLE IF NOT EXISTS
--   2) ALTER TABLE ADD COLUMN IF NOT EXISTS  (pre fix existujúcich)
--   3) Indexy / RLS / Policies
--   4) Data (v samostatnom seed scripte)
-- ============================================================


-- ============================================================
-- 1) WEB_CASE_STUDIES
-- ============================================================
CREATE TABLE IF NOT EXISTS web_case_studies (
  id              UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
  slug            TEXT         NOT NULL UNIQUE,
  -- Karta v listingu (/pripadove-studie)
  tag             TEXT         NOT NULL,           -- "E-COMMERCE · ŠPERKY"
  name            TEXT         NOT NULL,           -- "Zlatka.sk"
  category        TEXT         NOT NULL,           -- "e-commerce" / "dtc" / "local" / "b2c" / "b2b"
  summary         TEXT         NOT NULL,           -- kratké zhrnutie pre kartu
  metric_a_label  TEXT         NOT NULL,           -- "Tržby YoY"
  metric_a_value  TEXT         NOT NULL,           -- "+284%"
  metric_b_label  TEXT         NOT NULL,           -- "ROAS"
  metric_b_value  TEXT         NOT NULL,           -- "6.2×"
  cover_gradient  TEXT         NOT NULL,           -- CSS linear-gradient
  -- Detail stránka (/pripadove-studie/[slug])
  hero_subtitle   TEXT,                            -- podnadpis na detail stránke
  client_logo_url TEXT,                            -- URL klientovho loga (zatiaľ NULL)
  industry        TEXT,                            -- "E-commerce" / "B2B SaaS" / ...
  duration        TEXT,                            -- "6 mesiacov"
  budget          TEXT,                            -- "€84k mesačne"
  services_used   TEXT[],                          -- ['Google Ads', 'Meta Ads', 'SEO']
  challenge       TEXT,                            -- markdown: výzva
  approach        TEXT,                            -- markdown: prístup
  results         TEXT,                            -- markdown: výsledky
  testimonial     TEXT,                            -- citát od klienta
  testimonial_by  TEXT,                            -- meno klienta
  -- KPI grid na detaile (4 metriky)
  kpis            JSONB,                           -- [{"label": "Tržby", "before": "€180k", "after": "€520k", "delta": "+289%"}, ...]
  published       BOOLEAN      NOT NULL DEFAULT TRUE,
  sort_order      INTEGER      NOT NULL DEFAULT 0,
  created_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);


-- ============================================================
-- 2) WEB_BLOG_POSTS
-- ============================================================
CREATE TABLE IF NOT EXISTS web_blog_posts (
  id              UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
  slug            TEXT         NOT NULL UNIQUE,
  category        TEXT         NOT NULL,           -- "Google Ads" / "Analytika" / "Case Study" / ...
  title           TEXT         NOT NULL,
  excerpt         TEXT         NOT NULL,           -- 1-2 vety pod nadpisom
  body            TEXT         NOT NULL,           -- markdown obsahu článku
  read_time_min   INTEGER      NOT NULL DEFAULT 8, -- "12 min"
  cover_gradient  TEXT         NOT NULL,
  cover_image_url TEXT,                            -- voliteľné, zatiaľ NULL
  author_name     TEXT         NOT NULL,
  author_initials TEXT         NOT NULL,           -- "PN"
  author_role     TEXT,                            -- "Head of Paid Media"
  is_featured     BOOLEAN      NOT NULL DEFAULT FALSE,
  published       BOOLEAN      NOT NULL DEFAULT TRUE,
  published_at    TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  created_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);


-- ============================================================
-- 3) WEB_SERVICES
-- ============================================================
CREATE TABLE IF NOT EXISTS web_services (
  id              UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
  slug            TEXT         NOT NULL UNIQUE,
  -- Karta v accordion (homepage + /sluzby)
  title           TEXT         NOT NULL,           -- "Google Ads"
  short_desc      TEXT         NOT NULL,           -- popis v accordion
  icon_svg        TEXT         NOT NULL,           -- inline SVG paths
  -- Specs grid (4 položky v účordeón panel)
  specs           JSONB        NOT NULL,           -- [{"label": "Setup", "value": "10 dní"}, ...]
  -- Detail stránka (/sluzby/[slug])
  hero_lead       TEXT,                            -- dlhšie zhrnutie pre detail
  what_you_get    TEXT[],                          -- bullet zoznam "čo získate"
  process_steps   JSONB,                           -- [{"title": "...", "desc": "..."}, ...]
  faq             JSONB,                           -- [{"q": "...", "a": "..."}, ...]
  pricing_note    TEXT,                            -- "Súčasť každého plánu"
  related_cases   UUID[],                          -- referencie na web_case_studies
  published       BOOLEAN      NOT NULL DEFAULT TRUE,
  sort_order      INTEGER      NOT NULL DEFAULT 0,
  created_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);


-- ============================================================
-- ALTER TABLE — pre fix existujúcich tabuliek (idempotent)
-- ============================================================
-- Ak by sa migrácia spustila znova nad už existujúcim contentom,
-- tieto add-column operácie nič nezhoršia.
ALTER TABLE web_case_studies ADD COLUMN IF NOT EXISTS kpis            JSONB;
ALTER TABLE web_case_studies ADD COLUMN IF NOT EXISTS services_used   TEXT[];
ALTER TABLE web_blog_posts   ADD COLUMN IF NOT EXISTS author_role     TEXT;
ALTER TABLE web_services     ADD COLUMN IF NOT EXISTS related_cases   UUID[];


-- ============================================================
-- INDEXES
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_web_case_studies_published    ON web_case_studies(published, sort_order);
CREATE INDEX IF NOT EXISTS idx_web_case_studies_slug         ON web_case_studies(slug);
CREATE INDEX IF NOT EXISTS idx_web_case_studies_category     ON web_case_studies(category);

CREATE INDEX IF NOT EXISTS idx_web_blog_posts_published      ON web_blog_posts(published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_web_blog_posts_slug           ON web_blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_web_blog_posts_featured       ON web_blog_posts(is_featured) WHERE is_featured = TRUE;

CREATE INDEX IF NOT EXISTS idx_web_services_published        ON web_services(published, sort_order);
CREATE INDEX IF NOT EXISTS idx_web_services_slug             ON web_services(slug);


-- ============================================================
-- TRIGGERS — auto-update updated_at
-- ============================================================
CREATE OR REPLACE FUNCTION trg_set_updated_at() RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_updated_at ON web_case_studies;
CREATE TRIGGER set_updated_at BEFORE UPDATE ON web_case_studies
  FOR EACH ROW EXECUTE FUNCTION trg_set_updated_at();

DROP TRIGGER IF EXISTS set_updated_at ON web_blog_posts;
CREATE TRIGGER set_updated_at BEFORE UPDATE ON web_blog_posts
  FOR EACH ROW EXECUTE FUNCTION trg_set_updated_at();

DROP TRIGGER IF EXISTS set_updated_at ON web_services;
CREATE TRIGGER set_updated_at BEFORE UPDATE ON web_services
  FOR EACH ROW EXECUTE FUNCTION trg_set_updated_at();


-- ============================================================
-- RLS — anon read-only (web build a public)
-- ============================================================
ALTER TABLE web_case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE web_blog_posts   ENABLE ROW LEVEL SECURITY;
ALTER TABLE web_services     ENABLE ROW LEVEL SECURITY;

-- Anonymous SELECT pre published záznamy (build čas + verejný web)
DROP POLICY IF EXISTS "anon_read_published_case_studies" ON web_case_studies;
CREATE POLICY "anon_read_published_case_studies" ON web_case_studies
  FOR SELECT TO anon USING (published = TRUE);

DROP POLICY IF EXISTS "anon_read_published_blog_posts" ON web_blog_posts;
CREATE POLICY "anon_read_published_blog_posts" ON web_blog_posts
  FOR SELECT TO anon USING (published = TRUE);

DROP POLICY IF EXISTS "anon_read_published_services" ON web_services;
CREATE POLICY "anon_read_published_services" ON web_services
  FOR SELECT TO anon USING (published = TRUE);

-- Authenticated (admin) má full prístup
DROP POLICY IF EXISTS "auth_full_case_studies" ON web_case_studies;
CREATE POLICY "auth_full_case_studies" ON web_case_studies
  FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

DROP POLICY IF EXISTS "auth_full_blog_posts" ON web_blog_posts;
CREATE POLICY "auth_full_blog_posts" ON web_blog_posts
  FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

DROP POLICY IF EXISTS "auth_full_services" ON web_services;
CREATE POLICY "auth_full_services" ON web_services
  FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);
