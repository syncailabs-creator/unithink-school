import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  jsonLd?: object | object[];
  noIndex?: boolean;
}

const SITE_NAME = 'Unithink School';
const SITE_URL = 'https://www.unithinkschool.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  jsonLd,
  noIndex = false,
}: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@unithinkschool" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* Structured Data */}
      {jsonLd && (
        Array.isArray(jsonLd)
          ? jsonLd.map((schema, i) => (
              <script key={i} type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            ))
          : <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

// Reusable JSON-LD schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/#organization`,
  "name": "Unithink School",
  "alternateName": "Unithink",
  "url": SITE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${SITE_URL}/favicon.svg`,
    "width": 60,
    "height": 60
  },
  "image": `${SITE_URL}/og-image.jpg`,
  "description": "India's premier AI training institute offering hands-on workshops for corporate teams, engineering students, and faculty. AICTE-aligned. The Parivartan Method. Based in Ahmedabad, Gujarat.",
  "foundingDate": "2023",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ahmedabad",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9726217070",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi", "Gujarati"]
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "sameAs": [
    "https://www.linkedin.com/company/unithink-school",
    "https://www.instagram.com/unithinkschool"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  "@id": `${SITE_URL}/#local-business`,
  "name": "Unithink School — AI Training & Workshops",
  "url": SITE_URL,
  "logo": `${SITE_URL}/favicon.svg`,
  "image": `${SITE_URL}/og-image.jpg`,
  "description": "Ahmedabad-based AI training institute offering hands-on workshops for corporates, engineering students, and faculty. The Parivartan Method. AICTE-aligned. 1,800+ trained.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "23.0225",
    "longitude": "72.5714"
  },
  "telephone": "+91-9726217070",
  "email": "hello@unithinkschool.com",
  "areaServed": ["Ahmedabad", "Gujarat", "India"],
  "priceRange": "₹₹",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.linkedin.com/company/unithink-school",
    "https://www.instagram.com/unithinkschool"
  ]
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Unithink School",
  "url": SITE_URL,
  "description": "India's premier hands-on AI training institute. Workshops for corporates, students, and faculty across India.",
  "publisher": {
    "@type": "Organization",
    "name": "Unithink School",
    "url": SITE_URL
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SITE_URL}/?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

interface CourseSchemaOptions {
  url?: string;
  educationalLevel?: string;
  teaches?: string[];
  inLanguage?: string[];
  duration?: string;
  courseMode?: string;
  locationName?: string;
  offers?: { price: string; priceCurrency: string; availability?: string };
}

export function courseSchema(
  name: string,
  description: string,
  provider: string,
  options?: CourseSchemaOptions
) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": options?.url ? `${options.url}#course` : `${SITE_URL}#course`,
    "name": name,
    "description": description,
    "url": options?.url ?? SITE_URL,
    "image": `${SITE_URL}/og-image.jpg`,
    "provider": {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": provider,
      "url": SITE_URL,
      "sameAs": [
        "https://www.linkedin.com/company/unithink-school",
        "https://www.instagram.com/unithinkschool"
      ]
    }
  };
  if (options?.educationalLevel) schema.educationalLevel = options.educationalLevel;
  if (options?.teaches?.length) schema.teaches = options.teaches;
  if (options?.inLanguage?.length) schema.inLanguage = options.inLanguage;
  if (options?.courseMode || options?.locationName || options?.duration) {
    schema.hasCourseInstance = {
      "@type": "CourseInstance",
      ...(options?.courseMode ? { courseMode: options.courseMode } : {}),
      ...(options?.locationName ? { location: { "@type": "Place", "name": options.locationName } } : {}),
      ...(options?.duration ? { duration: options.duration } : {})
    };
  }
  if (options?.offers) {
    schema.offers = {
      "@type": "Offer",
      "price": options.offers.price,
      "priceCurrency": options.offers.priceCurrency,
      "availability": options.offers.availability ?? "https://schema.org/InStock"
    };
  }
  return schema;
}
