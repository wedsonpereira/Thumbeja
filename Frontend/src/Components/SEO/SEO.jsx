import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
    title = "Thumbeja Publicity - Digital Marketing & Branding Services",
    description = "Leading digital marketing agency in Mangalore offering SEO, social media marketing, web development, printing, branding, and advertising services.",
    keywords = "digital marketing, SEO, social media marketing, web development, Mangalore",
    image = "/thumbeja.svg",
    url = "https://thumbejapublicity.com",
    type = "website"
}) => {
    const fullTitle = title.includes("Thumbeja") ? title : `${title} | Thumbeja Publicity`;
    
    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            
            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            
            {/* Twitter */}
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            
            <link rel="canonical" href={url} />
        </Helmet>
    );
};

export default SEO;
