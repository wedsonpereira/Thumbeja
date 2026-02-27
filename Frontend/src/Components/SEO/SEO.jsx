import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = "https://thumbeja.com";
const SITE_NAME = "Thumbeja Publicity";

const SEO = ({ 
    title = `${SITE_NAME} - Digital Marketing & Branding Services`,
    description = "Leading digital marketing agency in Mangalore offering SEO, social media marketing, web development, printing, branding, and advertising services.",
    keywords = "digital marketing, SEO, social media marketing, web development, Mangalore",
    image = `${SITE_URL}/thumbeja.svg`,
    url = SITE_URL,
    type = "website",
    author = SITE_NAME,
    structuredData = null,
    noIndex = false,
    noFollow = false
}) => {
    const fullTitle = title.includes("Thumbeja") ? title : `${title} | Thumbeja Publicity`;
    const baseUrl = SITE_URL.replace(/\/+$/, "");
    const fullImageUrl = image.startsWith("http")
        ? image
        : `${baseUrl}${image.startsWith("/") ? image : `/${image}`}`;
    const canonicalUrl = url.startsWith("http")
        ? url
        : `${baseUrl}${url.startsWith("/") ? url : `/${url}`}`;
    const normalizedCanonicalUrl = canonicalUrl === baseUrl ? canonicalUrl : canonicalUrl.replace(/\/+$/, "");
    const robotsContent = `${noIndex ? "noindex" : "index"}, ${noFollow ? "nofollow" : "follow"}, max-image-preview:large, max-snippet:-1, max-video-preview:-1`;
    const schemas = Array.isArray(structuredData)
        ? structuredData.filter(Boolean)
        : structuredData
            ? [structuredData]
            : [];
    
    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="robots" content={robotsContent} />
            <link rel="canonical" href={normalizedCanonicalUrl} />
            <link rel="alternate" hrefLang="en-IN" href={normalizedCanonicalUrl} />
            <link rel="alternate" hrefLang="x-default" href={normalizedCanonicalUrl} />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={normalizedCanonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:image:alt" content={fullTitle} />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:site_name" content={SITE_NAME} />
            
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={normalizedCanonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />
            <meta name="twitter:image:alt" content={fullTitle} />
            
            {/* Structured Data */}
            {schemas.map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;
