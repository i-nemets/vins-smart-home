export default function Head() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
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
      {GA_ID ? (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${GA_ID}');`,
            }}
          />
        </>
      ) : null}
      {META_PIXEL_ID ? (
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[]; t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init','${META_PIXEL_ID}'); fbq('track','PageView');`,
          }}
        />
      ) : null}
    </>
  );
}
