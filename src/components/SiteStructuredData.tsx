import { Helmet } from "react-helmet-async";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const SiteStructuredData = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify([organizationJsonLd(), websiteJsonLd()])}
    </script>
  </Helmet>
);

export default SiteStructuredData;
