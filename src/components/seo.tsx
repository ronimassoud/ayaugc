import { Helmet } from "react-helmet-async";
import { site } from "@/config/site";

interface SEOProps { title: string; description: string; path: string; noindex?: boolean }

const SEO = ({ title, description, path, noindex }: SEOProps) => {
  const url = `${site.domain}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
    </Helmet>
  );
};
export default SEO;
