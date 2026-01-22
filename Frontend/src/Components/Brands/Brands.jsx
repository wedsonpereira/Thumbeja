import React, { useEffect } from 'react';
import "./Brands.css"
import kby from '../../assets/BrandsImages/kby.png'
import zyfox from '../../assets/BrandsImages/zyfox.png'
import invitation from '../../assets/BrandsImages/Blaque-1.webp'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Brands = ({ className }) => {
    const brands = [
        { src: kby, alt: "KBY" },
        { src: invitation, alt: "Invitation" },
        { src: zyfox, alt: "Zyfox" }
    ];

    // Multiply brands to ensure a long enough strip for seamless looping
    const marqueeBrands = [...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands];

    useEffect(() => {
        gsap.from(".brands-compact-header", {
            scrollTrigger: {
                trigger: ".brands-compact-header",
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            scale: .8,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out"
        });
    }, []);

    return (
        <section className={`brands-compact-header !pt-10 bg-black ${className} relative z-20`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="brands-compact-header text-center mb-8 md:mb-10">
                    <h2 className="brands-compact-title text-2xl md:text-3xl font-bold tracking-tight">Our Associated Brands</h2>
                </div>

                <div className="brands-marquee-container py-6">
                    <div className="brands-marquee-content">
                        {marqueeBrands.map((brand, index) => (
                            <div key={index} className="brand-minimal-item w-40 md:w-56 h-20 md:h-28 flex items-center justify-center cursor-pointer">
                                <img
                                    src={brand.src}
                                    alt={brand.alt}
                                    className="max-w-full max-h-full object-contain grayscale-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;