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
    tag:              String(row.category ?? ''),
    name:             pickLang(row.title ?? row.name, lang),
    category:         String(row.category ?? ''),
    summary:          pickLang(row.summary, lang),
    metric_a_label:   pickLang(row.kpi_1_label ?? row.metric_a_label, lang),
    metric_a_value:   pickLang(row.kpi_1_value ?? row.metric_a_value, lang),
    metric_b_label:   pickLang(row.kpi_2_label ?? row.metric_b_label, lang),
    metric_b_value:   pickLang(row.kpi_2_value ?? row.metric_b_value, lang),
    cover_gradient:   String(row.hero_gradient ?? row.cover_gradient ?? 'linear-gradient(135deg, #F16434, #E85D9C)'),
    hero_subtitle:    pickLang(row.hero_subtitle, lang) || undefined,
    industry:         pickLang(row.industry, lang) || undefined,
    duration:         pickLang(row.duration, lang) || undefined,
    budget:           pickLang(row.budget, lang) || undefined,
    services_used:    Array.isArray(row.services_used) ? (row.services_used as string[]) : undefined,
    challenge:        pickLang(row.challenge, lang) || undefined,
    approach:         pickLang(row.approach ?? row.body_md, lang) || undefined,
    results:          pickLang(row.results, lang) || undefined,
    testimonial:      pickLang(row.testimonial, lang) || undefined,
    testimonial_by:   pickLang(row.testimonial_by, lang) || undefined,
    client_logo_url:  (row.client_logo_url as string) || undefined,
    kpis:             Array.isArray(row.kpis) ? (row.kpis as CaseStudy['kpis']) : undefined,
    sort_order:       Number(row.sort_order ?? 0),
  };
}

// Default rotujúce gradienty pre blog posty (ak admin neukladá cover_gradient)
const BLOG_GRADIENTS = [
  'linear-gradient(135deg, #F16434, #E85D9C)',
  'linear-gradient(135deg, #6366F1, #8B5CF6)',
  'linear-gradient(135deg, #06B6D4, #3B82F6)',
  'linear-gradient(135deg, #10B981, #34D399)',
  'linear-gradient(135deg, #F59E0B, #EF4444)',
];

function flattenPost(row: Record<string, unknown>, lang: Lang): BlogPost {
  const idStr = String(row.id ?? '');
  const gradientIndex = idStr.charCodeAt(0) % BLOG_GRADIENTS.length;

  return {
    id:               idStr,
    slug:             String(row.slug ?? ''),
    category:         pickLang(row.category, lang),
    title:            pickLang(row.title, lang),
    excerpt:          pickLang(row.excerpt, lang),
    body:             pickLang(row.body ?? row.body_md, lang),
    read_time_min:    Number(row.read_time_min ?? 0),
    cover_gradient:   String(row.cover_gradient ?? BLOG_GRADIENTS[gradientIndex]),
    cover_image_url:  (row.cover_image_url as string) || undefined,
    author_name:      pickLang(row.author_name, lang),
    author_initials:  String(row.author_initials ?? ''),
    author_role:      pickLang(row.author_role, lang) || undefined,
    is_featured:      Boolean(row.is_featured),
    published_at:     String(row.published_at ?? row.created_at ?? ''),
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
    .from('web_cases')
    .select('*')
    .eq('is_published', true)
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
    .eq('is_published', true)
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
    .eq('is_published', true)
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
    .eq('is_published', true)
    .order('sort_order', { ascending: true });
  if (error) {
    console.warn('[content] fetchAllServices error:', error.message);
    return [];
  }
  return (data || []).map((row) => flattenService(row, lang));
}

// ============================================================
// FETCHERS — pricing plans (web_pricing)
// ============================================================

export interface PricingFeature {
  label: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price_monthly: number;
  price_setup: number;
  icon: string;
  badge_label: string;
  badge_color: string;
  is_popular: boolean;
  is_custom: boolean;
  features: PricingFeature[];
  cta_label: string;
}

export async function fetchPricingPlans(lang: Lang): Promise<PricingPlan[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('web_pricing')
    .select('*')
    .eq('is_published', true)
    .order('sort_order', { ascending: true });
  if (error) {
    console.warn('[content] fetchPricingPlans error:', error.message);
    return [];
  }
  return (data || []).map((row) => ({
    id:            String(row.id ?? ''),
    slug:          String(row.slug ?? ''),
    name:          pickLang(row.name,        lang),
    tagline:       pickLang(row.tagline,     lang),
    description:   pickLang(row.description, lang),
    price_monthly: Number(row.price_monthly ?? 0),
    price_setup:   Number(row.price_setup ?? 0),
    icon:          String(row.icon ?? ''),
    badge_label:   pickLang(row.badge_label, lang),
    badge_color:   String(row.badge_color ?? ''),
    is_popular:    Boolean(row.is_popular),
    is_custom:     Boolean(row.is_custom),
    features:      Array.isArray(row.features)
      ? row.features.map((f: any) => ({
          label: pickLang(f.label, lang),
          included: Boolean(f.included),
        }))
      : [],
    cta_label:     pickLang(row.cta_label,   lang),
  }));
}

// ============================================================
// FETCHERS — testimonials (web_testimonials)
// ============================================================

export interface Testimonial {
  id: string;
  quote: string;
  author_name: string;
  author_role: string;
  author_logo_url: string;
  rating: number;
}

export async function fetchTestimonials(lang: Lang, limit?: number): Promise<Testimonial[]> {
  if (!supabase) return [];
  let q = supabase
    .from('web_testimonials')
    .select('*')
    .eq('is_published', true)
    .order('sort_order', { ascending: true });
  if (limit) q = q.limit(limit);
  const { data, error } = await q;
  if (error) {
    console.warn('[content] fetchTestimonials error:', error.message);
    return [];
  }
  return (data || []).map((row) => ({
    id:               String(row.id ?? ''),
    quote:            pickLang(row.quote,         lang),
    author_name:      pickLang(row.author_name,   lang),
    author_role:      pickLang(row.author_role,   lang),
    author_logo_url:  String(row.author_logo_url ?? ''),
    rating:           Number(row.rating ?? 5),
  }));
}

// ============================================================
// FETCHERS — FAQ (web_faq)
// ============================================================

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export async function fetchFaq(lang: Lang, limit?: number): Promise<FaqItem[]> {
  if (!supabase) return [];
  let q = supabase
    .from('web_faq')
    .select('*')
    .eq('is_published', true)
    .order('sort_order', { ascending: true });
  if (limit) q = q.limit(limit);
  const { data, error } = await q;
  if (error) {
    console.warn('[content] fetchFaq error:', error.message);
    return [];
  }
  return (data || []).map((row) => ({
    id:        String(row.id ?? ''),
    question:  pickLang(row.question, lang),
    answer:    pickLang(row.answer,   lang),
    category:  String(row.category ?? ''),
  }));
}

// ============================================================
// FETCHERS — single by slug
// ============================================================

export async function fetchCaseBySlug(slug: string, lang: Lang): Promise<CaseStudy | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('web_cases')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
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
    .eq('is_published', true)
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
    .eq('is_published', true)
    .maybeSingle();
  if (error || !data) return null;
  return flattenService(data, lang);
}

// ============================================================
// FETCHERS — team members (web_team)
// ============================================================

export interface TeamMember {
  id: string;
  name: string;
  initials: string;
  email: string;
  phone: string;
  photo_url: string;
  role: string;
  bio: string;
  sort_order: number;
}

export async function fetchTeam(lang: Lang): Promise<TeamMember[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('web_team')
    .select('*')
    .eq('is_published', true)
    .order('sort_order', { ascending: true });
  if (error) {
    console.warn('[content] fetchTeam error:', error.message);
    return [];
  }
  return (data || []).map((row) => ({
    id:         String(row.id ?? ''),
    name:       String(row.name ?? ''),
    initials:   String(row.initials ?? ''),
    email:      String(row.email ?? ''),
    phone:      String(row.phone ?? ''),
    photo_url:  String(row.photo_url ?? ''),
    role:       pickLang(row.role, lang),
    bio:        pickLang(row.bio, lang),
    sort_order: Number(row.sort_order ?? 0),
  }));
}

// ============================================================
// FETCHERS — site settings (web_settings)
// ============================================================

export interface SiteSettings {
  // Kontakty
  contact_email: string;
  contact_phone: string;
  contact_address: string;
  // Firma
  company_name: string;
  company_ico: string;
  company_dic: string;
  company_iban: string;
  // Sociálne
  social_linkedin: string;
  social_facebook: string;
  social_instagram: string;
  social_youtube: string;
  // Prekladateľné texty
  footer_tagline: string;
  footer_copyright: string;
  cookie_message: string;
  default_seo_title: string;
  default_seo_description: string;
  default_og_image_url: string;
}

const EMPTY_SETTINGS: SiteSettings = {
  contact_email: '',
  contact_phone: '',
  contact_address: '',
  company_name: '',
  company_ico: '',
  company_dic: '',
  company_iban: '',
  social_linkedin: '',
  social_facebook: '',
  social_instagram: '',
  social_youtube: '',
  footer_tagline: '',
  footer_copyright: '',
  cookie_message: '',
  default_seo_title: '',
  default_seo_description: '',
  default_og_image_url: '',
};

/**
 * Vráti site settings flatten-uté na konkrétny lang.
 * Statické polia (TEXT) ako email, telefón, IČO sa vrátia priamo.
 * Prekladateľné polia (JSONB) sa flatten-ujú cez pickLang().
 *
 * Ak settings v DB neexistujú alebo Supabase je nedostupné, vráti
 * EMPTY_SETTINGS (všetky polia ''), aby fallback v stránkach mohol
 * preberať.
 */
export async function fetchSettings(lang: Lang): Promise<SiteSettings> {
  if (!supabase) return EMPTY_SETTINGS;
  const { data, error } = await supabase
    .from('web_settings')
    .select('*')
    .eq('id', 'global')
    .maybeSingle();
  if (error || !data) {
    if (error) console.warn('[content] fetchSettings error:', error.message);
    return EMPTY_SETTINGS;
  }
  return {
    contact_email:    String(data.contact_email   ?? ''),
    contact_phone:    String(data.contact_phone   ?? ''),
    contact_address:  String(data.contact_address ?? ''),
    company_name:     String(data.company_name    ?? ''),
    company_ico:      String(data.company_ico     ?? ''),
    company_dic:      String(data.company_dic     ?? ''),
    company_iban:     String(data.company_iban    ?? ''),
    social_linkedin:  String(data.social_linkedin  ?? ''),
    social_facebook:  String(data.social_facebook  ?? ''),
    social_instagram: String(data.social_instagram ?? ''),
    social_youtube:   String(data.social_youtube   ?? ''),
    footer_tagline:           pickLang(data.footer_tagline,           lang),
    footer_copyright:         pickLang(data.footer_copyright,         lang),
    cookie_message:           pickLang(data.cookie_message,           lang),
    default_seo_title:        pickLang(data.default_seo_title,        lang),
    default_seo_description:  pickLang(data.default_seo_description,  lang),
    default_og_image_url:     String(data.default_og_image_url ?? ''),
  };
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
    .eq('is_published', true);
  if (error || !data) return [];
  return data.map((r) => String(r.slug)).filter(Boolean);
}

export async function fetchAllPostSlugs(): Promise<string[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('web_blog_posts')
    .select('slug')
    .eq('is_published', true);
  if (error || !data) return [];
  return data.map((r) => String(r.slug)).filter(Boolean);
}

export async function fetchAllServiceSlugs(): Promise<string[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('web_services')
    .select('slug')
    .eq('is_published', true);
  if (error || !data) return [];
  return data.map((r) => String(r.slug)).filter(Boolean);
}
