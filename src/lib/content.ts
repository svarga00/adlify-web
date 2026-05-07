/**
 * Content fetcher — abstrakcia nad Supabase pre Astro stránky.
 *
 * VŠETKY fetchery prijímajú `lang: Lang` a vracajú už SPLOŠTENÉ záznamy
 * (string polia, nie JSONB) — stránky/komponenty pracujú s plain stringmi.
 *
 * Schéma rešpektuje admin Etapu C — prekladateľné polia sú v Supabase JSONB
 * `{sk, cs, hu, en, de}`. Ak Supabase nie je dostupné, fetcher vráti []/null
 * (build prejde s prázdnym contentom).
 */
import { supabase } from './supabase';
import { pickLang, type Lang } from './i18n';

// ============================================================
// TYPES — flat (po jazykovom flattening)
// ============================================================

export interface CaseStudy {
  id: string;
  slug: string;
  tag: string;
  name: string;
  category: string;
  summary: string;
  metric_a_label: string;
  metric_a_value: string;
  metric_b_label: string;
  metric_b_value: string;
  cover_gradient: string;
  hero_subtitle?: string;
  industry?: string;
  duration?: string;
  budget?: string;
  services_used?: string[];
  challenge?: string;
  approach?: string;
  results?: string;
  testimonial?: string;
  testimonial_by?: string;
  client_logo_url?: string;
  kpis?: Array<{ label: string; before: string; after: string; delta: string }>;
  sort_order: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  body: string;
  read_time_min: number;
  cover_gradient: string;
  cover_image_url?: string;
  author_name: string;
  author_initials: string;
  author_role?: string;
  is_featured: boolean;
  published_at: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  short_desc: string;
  icon_svg: string;
  specs: Array<{ label: string; value: string }>;
  hero_lead?: string;
  what_you_get?: string[];
  process_steps?: Array<{ title: string; desc: string }>;
  faq?: Array<{ q: string; a: string }>;
  pricing_note?: string;
  sort_order: number;
}

// ============================================================
// FLATTENERS — JSONB záznam → flat string záznam podľa lang
// ============================================================

function flattenCase(row: Record<string, unknown>, lang: Lang): CaseStudy {
  return {
    id:               String(row.id ?? ''),
    slug:             String(row.slug ?? ''),
    tag:              pickLang(row.tag, lang),
    name:             pickLang(row.name, lang),
    category:         String(row.category ?? ''),
    summary:          pickLang(row.summary, lang),
    metric_a_label:   pickLang(row.metric_a_label, lang),
    metric_a_value:   pickLang(row.metric_a_value, lang),
    metric_b_label:   pickLang(row.metric_b_label, lang),
    metric_b_value:   pickLang(row.metric_b_value, lang),
    cover_gradient:   String(row.cover_gradient ?? ''),
    hero_subtitle:    pickLang(row.hero_subtitle, lang) || undefined,
    industry:         pickLang(row.industry, lang) || undefined,
    duration:         pickLang(row.duration, lang) || undefined,
    budget:           pickLang(row.budget, lang) || undefined,
    services_used:    Array.isArray(row.services_used) ? (row.services_used as string[]) : undefined,
    challenge:        pickLang(row.challenge, lang) || undefined,
    approach:         pickLang(row.approach, lang) || undefined,
    results:          pickLang(row.results, lang) || undefined,
    testimonial:      pickLang(row.testimonial, lang) || undefined,
    testimonial_by:   pickLang(row.testimonial_by, lang) || undefined,
    client_logo_url:  (row.client_logo_url as string) || undefined,
    kpis:             Array.isArray(row.kpis) ? (row.kpis as CaseStudy['kpis']) : undefined,
    sort_order:       Number(row.sort_order ?? 0),
  };
}

function flattenPost(row: Record<string, unknown>, lang: Lang): BlogPost {
  return {
    id:               String(row.id ?? ''),
    slug:             String(row.slug ?? ''),
    category:         pickLang(row.category, lang),
    title:            pickLang(row.title, lang),
    excerpt:          pickLang(row.excerpt, lang),
    body:             pickLang(row.body, lang),
    read_time_min:    Number(row.read_time_min ?? 0),
    cover_gradient:   String(row.cover_gradient ?? ''),
    cover_image_url:  (row.cover_image_url as string) || undefined,
    author_name:      pickLang(row.author_name, lang),
    author_initials:  String(row.author_initials ?? ''),
    author_role:      pickLang(row.author_role, lang) || undefined,
    is_featured:      Boolean(row.is_featured),
    published_at:     String(row.published_at ?? ''),
  };
}

function flattenService(row: Record<string, unknown>, lang: Lang): Service {
  return {
    id:           String(row.id ?? ''),
    slug:         String(row.slug ?? ''),
    title:        pickLang(row.title, lang),
    short_desc:   pickLang(row.short_desc, lang),
    icon_svg:     String(row.icon_svg ?? ''),
    specs:        Array.isArray(row.specs) ? (row.specs as Service['specs']) : [],
    hero_lead:    pickLang(row.hero_lead, lang) || undefined,
    what_you_get: Array.isArray(row.what_you_get) ? (row.what_you_get as string[]) : undefined,
    process_steps: Array.isArray(row.process_steps) ? (row.process_steps as Service['process_steps']) : undefined,
    faq:          Array.isArray(row.faq) ? (row.faq as Service['faq']) : undefined,
    pricing_note: pickLang(row.pricing_note, lang) || undefined,
    sort_order:   Number(row.sort_order ?? 0),
  };
}

// ============================================================
// FETCHERS — listing
// ============================================================

export async function fetchAllCases(lang: Lang): Promise<CaseStudy[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('web_case_studies')
    .select('*')
    .eq('published', true)
    .order('sort_order', { ascending: true });
  if (error) {
    console.warn('[content] fetchAllCases error:', error.message);
    return [];
  }
  return (data || []).map((row) => flattenCase(row, lang));
}

export async function fetchAllPosts(lang: Lang): Promise<BlogPost[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('web_blog_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });
  if (error) {
    console.warn('[content] fetchAllPosts error:', error.message);
    return [];
  }
  return (data || []).map((row) => flattenPost(row, lang));
}

export async function fetchFeaturedPost(lang: Lang): Promise<BlogPost | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('web_blog_posts')
    .select('*')
    .eq('published', true)
    .eq('is_featured', true)
    .order('published_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) {
    console.warn('[content] fetchFeaturedPost error:', error.message);
    return null;
  }
  return data ? flattenPost(data, lang) : null;
}

export async function fetchAllServices(lang: Lang): Promise<Service[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('web_services')
    .select('*')
    .eq('published', true)
    .order('sort_order', { ascending: true });
  if (error) {
    console.warn('[content] fetchAllServices error:', error.message);
    return [];
  }
  return (data || []).map((row) => flattenService(row, lang));
}

// ============================================================
// FETCHERS — single by slug
// ============================================================

export async function fetchCaseBySlug(slug: string, lang: Lang): Promise<CaseStudy | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('web_case_studies')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();
  if (error || !data) return null;
  return flattenCase(data, lang);
}

export async function fetchPostBySlug(slug: string, lang: Lang): Promise<BlogPost | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('web_blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();
  if (error || !data) return null;
  return flattenPost(data, lang);
}

export async function fetchServiceBySlug(slug: string, lang: Lang): Promise<Service | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('web_services')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();
  if (error || !data) return null;
  return flattenService(data, lang);
}

// ============================================================
// FETCHERS — page content sections (web_pages_content)
// ============================================================

/**
 * Vráti všetky sekcie pre danú stránku, ako mapu section_key → flat content.
 * Content je JSONB s ľubovoľnou štruktúrou per-pole `{sk, cs, hu, en, de}`,
 * tu ho splošťujeme pre daný lang.
 *
 * Príklad: fetchPageSections('homepage', 'sk')
 * → {
 *     hero:     { eyebrow: 'Marketingová...', title: 'Reklama, ktorá...', ... },
 *     manifest: { title: 'Marketingová agentúra...', lead: 'Veríme...' },
 *   }
 */
export async function fetchPageSections(
  pageSlug: string,
  lang: Lang,
): Promise<Record<string, Record<string, string>>> {
  if (!supabase) return {};
  const { data, error } = await supabase
    .from('web_pages_content')
    .select('section_key, content')
    .eq('page_slug', pageSlug)
    .order('sort_order', { ascending: true });
  if (error) {
    console.warn('[content] fetchPageSections error:', error.message);
    return {};
  }
  const result: Record<string, Record<string, string>> = {};
  for (const row of data || []) {
    const sectionKey = String(row.section_key);
    const content = row.content as Record<string, unknown> | null;
    if (!content || typeof content !== 'object') continue;
    // Flatten — pre každý kľúč v content { fieldName: { sk, cs, ... } }
    // vyber lang verziu
    const flat: Record<string, string> = {};
    for (const [field, value] of Object.entries(content)) {
      flat[field] = pickLang(value, lang);
    }
    result[sectionKey] = flat;
  }
  return result;
}

// ============================================================
// FETCHERS — slug listy (pre getStaticPaths)
// ============================================================

export async function fetchAllCaseSlugs(): Promise<string[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('web_case_studies')
    .select('slug')
    .eq('published', true);
  if (error || !data) return [];
  return data.map((r) => String(r.slug)).filter(Boolean);
}

export async function fetchAllPostSlugs(): Promise<string[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('web_blog_posts')
    .select('slug')
    .eq('published', true);
  if (error || !data) return [];
  return data.map((r) => String(r.slug)).filter(Boolean);
}

export async function fetchAllServiceSlugs(): Promise<string[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('web_services')
    .select('slug')
    .eq('published', true);
  if (error || !data) return [];
  return data.map((r) => String(r.slug)).filter(Boolean);
}
