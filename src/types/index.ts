/**
 * TypeScript Learning Note: This file defines all the custom types used throughout
 * the application. Types help us catch errors at compile time and make our code
 * more maintainable.
 */

// Project-related types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  status: ProjectStatus;
  featured: boolean;
  category: ProjectCategory;
  year: number;
  slug: string;
}

// TypeScript Learning: 'type' vs 'interface'
// - Use 'interface' for object shapes that might be extended
// - Use 'type' for unions, primitives, or computed types
export type ProjectStatus = 'completed' | 'in-progress' | 'planning';

export type ProjectCategory =
  | 'web-development'
  | 'mobile-development'
  | 'full-stack'
  | 'api'
  | 'tool'
  | 'design-system';

// Service-related types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing?: ServicePricing;
}

export interface ServicePricing {
  starting: number;
  currency: string;
  unit: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  services?: string[];
}

// TypeScript Learning: Generic types
// This allows us to reuse the same interface for different data types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// SEO types
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

// Component props types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

// Animation types for Framer Motion
export interface AnimationProps {
  delay?: number;
  duration?: number;
  ease?: string;
}

// TypeScript Learning: Utility types
// These are built-in TypeScript utilities that help manipulate types
export type PartialProject = Partial<Project>; // Makes all properties optional
export type RequiredProject = Required<Project>; // Makes all properties required
export type ProjectPreview = Pick<
  Project,
  'id' | 'title' | 'description' | 'image' | 'technologies' | 'slug'
>; // Picks specific properties
export type ProjectWithoutId = Omit<Project, 'id'>; // Excludes specific properties

// Blog types (for future use)
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  readingTime: number;
  featured: boolean;
  image?: string;
}

export type BlogPostPreview = Pick<
  BlogPost,
  | 'id'
  | 'title'
  | 'excerpt'
  | 'slug'
  | 'publishedAt'
  | 'tags'
  | 'readingTime'
  | 'image'
>;

// Analytics types (for future use)
export interface AnalyticsEvent {
  event: string;
  category: string;
  label?: string;
  value?: number;
}

// Error handling types
export interface AppError {
  message: string;
  code?: string;
  statusCode?: number;
}

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// TypeScript Learning: Mapped types
// This creates a type where each key has a loading state
export type LoadingStates<T> = {
  [K in keyof T]: LoadingState;
};

// Example usage of the above type:
// type PageLoadingStates = LoadingStates<{ projects: any; services: any; }>;
// Result: { projects: LoadingState; services: LoadingState; }
