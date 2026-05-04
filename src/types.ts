import type React from 'react';

export interface StatItem {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface ProblemCard {
  title: string;
  description: string;
}

export interface AudienceCard {
  title: string;
  description: string;
  icon?: any;
}

export interface FormatCard {
  title: string;
  price: string;
  bestFor: string;
  whatHappens: string;
  includes: string[];
  isPopular?: boolean;
}

export interface FAQCategory {
  id: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export interface StepItem {
  title: string;
  description: string;
}
