import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  keywords?: string;
}

const SEO = ({
  title = "EdgeZen Labs | Engineering Digital Excellence",
  description = "Engineering Digital Excellence. Building intelligent, beautiful, and scalable products.",
  canonical = "https://edgezenlabs.com",
  ogType = "website",
  ogImage = "/ez.png",
  twitterCard = "summary_large_image",
  keywords = "Software Development, AI, ERP, Mobile Apps, Web Development, Construction ERP, Fintech",
}: SEOProps) => {
  const siteTitle = title.includes("|") ? title : `${title} | EdgeZen Labs`;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
