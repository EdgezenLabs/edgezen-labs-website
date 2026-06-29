import { Helmet } from "react-helmet-async";
import { absoluteUrl, DEFAULT_OG_IMAGE, webPageJsonLd } from "@/lib/seo";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  keywords?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SEO = ({
  title = "EdgeZen Labs | Engineering Digital Excellence",
  description = "Engineering Digital Excellence. Building intelligent, beautiful, and scalable products.",
  canonical = "https://edgezenlabs.com/",
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  twitterCard = "summary_large_image",
  keywords = "Software Development, AI, ERP, Mobile Apps, Web Development, Construction ERP, Fintech",
  noindex = false,
  jsonLd,
}: SEOProps) => {
  const siteTitle = title.includes("|") ? title : `${title} | EdgeZen Labs`;
  const canonicalUrl = absoluteUrl(canonical);
  const ogImageUrl = absoluteUrl(ogImage);

  const structuredData = [
    webPageJsonLd({
      name: siteTitle,
      description,
      url: canonicalUrl,
    }),
    ...(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []),
  ];

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="EdgeZen Labs" />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@EdgeZenLabs" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default SEO;
