export default function Head() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VINS IoT / Smart Home",
    url: baseUrl,
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "VINS IoT / Smart Home",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}


