import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
    title = "Thumbeja Publicity - Digital Marketing & Branding Services",
    description = "Leading digital marketing agency in Mangalore offering SEO, social media marketing, web development, printing, branding, and advertising services.",
    keywords = "digital marketing, SEO, social media marketing, web development, Mangalore",
    image = "https://thumbejapublicity.com/thumbeja.svg",
    url = "https://thumbejapublicity.com",
    type = "website",
    author = "Thumbeja Publicity",
    structuredData = null
}) => {
    const fullTitle = title.includes("Thumbeja") ? title : `${title} | Thumbeja Publicity`;
    const fullImageUrl = image.startsWith('http') ? image : `https://thumbejapublicity.com${image}`;
    
    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <link rel="canonical" href={url} />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:image:alt" content={fullTitle} />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:site_name" content="Thumbeja Publicity" />
            
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />
            <meta name="twitter:image:alt" content={fullTitle} />
            
            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
