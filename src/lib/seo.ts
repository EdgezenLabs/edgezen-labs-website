export const SITE_URL = "https://edgezenlabs.com";

export const DEFAULT_OG_IMAGE = "/ez.png";

export const SITEMAP_ROUTES: Array<{
  path: string;
  changefreq: "weekly" | "monthly";
  priority: string;
}> = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/products", changefreq: "weekly", priority: "0.9" },
  { path: "/websites", changefreq: "monthly", priority: "0.7" },
  { path: "/briktra-app", changefreq: "monthly", priority: "0.8" },
  { path: "/technologies", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/legal/privacy", changefreq: "monthly", priority: "0.3" },
  { path: "/legal/terms", changefreq: "monthly", priority: "0.3" },
];

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EdgeZen Labs",
    url: SITE_URL,
    logo: absoluteUrl(DEFAULT_OG_IMAGE),
    email: "contact@edgezenlabs.com",
    sameAs: [
      "https://www.linkedin.com/company/edgezen-labs",
      "https://github.com/edgezen-labs",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EdgeZen Labs",
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: "EdgeZen Labs",
      url: SITE_URL,
    },
  };
}

export function webPageJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      url: SITE_URL,
      name: "EdgeZen Labs",
    },
  };
}
