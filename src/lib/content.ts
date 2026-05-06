/**
 * Content fetcher — abstrakcia nad Supabase pre Astro stránky.
 *
 * Pri builde každá stránka volá fetchAllCases / fetchAllPosts / fetchAllServices.
 * Ak Supabase env nie je nastavená alebo dotaz zlyhá, vrátime prázdne pole
 * (build prejde, len bude bez contentu).
 *
 * Typy zodpovedajú schéme z migration 20260506_web_content.sql.
 */
import { supabase } from './supabase';

// ============================================================
// TYPES
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
// FETCHERS — listing
// ============================================================

export async function fetchAllCases(): Promise<CaseStudy[]> {
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
  return (data || []) as CaseStudy[];
}

export async function fetchAllPosts(): Promise<BlogPost[]> {
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
  return (data || []) as BlogPost[];
}

export async function fetchFeaturedPost(): Promise<BlogPost | null> {
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
  return (data as BlogPost) || null;
}

export async function fetchAllServices(): Promise<Service[]> {
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
  return (data || []) as Service[];
}

// ============================================================
// FETCHERS — single by slug
// ============================================================

export async function fetchCaseBySlug(slug: string): Promise<CaseStudy | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('web_case_studies')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();
  if (error || !data) return null;
  return data as CaseStudy;
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('web_blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();
  if (error || !data) return null;
  return data as BlogPost;
}

export async function fetchServiceBySlug(slug: string): Promise<Service | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('web_services')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();
  if (error || !data) return null;
  return data as Service;
}
