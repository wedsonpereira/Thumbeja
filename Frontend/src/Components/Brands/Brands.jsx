import React, { useEffect } from 'react';
import "./Brands.css"
import kby from '../../assets/BrandsImages/kby.png'
import zyfox from '../../assets/BrandsImages/zyfox.png'
import invitation from '../../assets/BrandsImages/Blaque-1.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Brands = ({ className }) => {
    // We mix some existing images for the effect
    const brands = [
        { src: zyfox, alt: "ZyFox" },
        { src: kby, alt: "Hexdata" },
        { src: invitation, alt: "CloudApp" },
        { src: zyfox, alt: "AVERROS" },
        { src: kby, alt: "GEVAD" },
        { src: invitation, alt: "wixlet" }
    ];

    // Multiply brands for continuous scrolling
    const marqueeBrands = [...brands, ...brands, ...brands, ...brands, ...brands];

    useEffect(() => {
        gsap.from(".brands-modern-section", {
            scrollTrigger: {
                trigger: ".brands-modern-section",
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    }, []);

    return (
        <section className={`brands-modern-section bg-[#fdfdfd] py-16 md:py-24 ${className} relative z-20`}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8 overflow-hidden">
                <div className="text-center mb-10 md:mb-14">
                    <p className="text-[#6b7280] font-medium tracking-wide text-sm sm:text-base mb-3 flex items-center justify-center gap-3">
                        Our ---- <span className="text-[#374151] font-semibold">Top Brands.</span>
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                        <span className="text-[#091e42]">“Driven by Innovation.</span>{' '}
                        <span className="text-[#111827]">Defined by Our Brands.”</span>
                    </h2>
                </div>

                <div className="brands-marquee-container relative w-full pt-4 pb-10 overflow-hidden">
                    {/* Gradient fading masks for the marquee edges */}
                    <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#fdfdfd] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#fdfdfd] to-transparent z-10 pointer-events-none"></div>

                    <div className="brands-marquee-content flex items-center" style={{ gap: '1rem' }}>
                        {marqueeBrands.map((brand, index) => (
                            <div
                                key={index}
                                className={`brand-modern-pill flex-shrink-0 flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-1 rounded-2xl border ${brand.isActive
                                    ? 'bg-[#1a1a1a] border-[#1a1a1a] shadow-lg shadow-black/10'
                                    : 'bg-white border-[#e5e7eb] hover:border-[#d1d5db] hover:shadow-md hover:shadow-gray-200/60'
                                    }`}
                                style={{ width: '180px', aspectRatio: '3/2', padding: '12px' }}
                            >
                                <img
                                    src={brand.src}
                                    alt={brand.alt}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}
                                    className={`transition-all duration-300 ${brand.isActive
                                        ? 'opacity-100'
                                        : 'brightness-0 opacity-60 hover:opacity-90'
                                        }`}
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