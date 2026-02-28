import React, { useState, useEffect, useRef } from 'react';
import teamData from './teamData.json';
import './Team.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/* ── SECTION 1 : Text / Hero ── */
const TeamHero = () => {
    return (
        <div className="team-text">
            {/* SVG gradient definitions (shared) */}
            {/* SVG gradient definitions removed as we are using solid styles */}

            {/* Left decorative elements */}
            <div className="team-deco team-deco--left" aria-hidden="true">
                {/* 1. Target (Bullseye) */}
                <svg className="deco deco--1 deco-float1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                {/* 2. Arrow Cursor */}
                <svg className="deco deco--2 deco-float2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-15deg)' }}><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" /><path d="m13 13 6 6" /></svg>
                {/* 3. Magnifying Glass (SEO) */}
                <svg className="deco deco--3 deco-float3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                {/* 4. Hashtag */}
                <svg className="deco deco--4 deco-float4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9" /><line x1="4" y1="15" x2="20" y2="15" /><line x1="10" y1="3" x2="8" y2="21" /><line x1="16" y1="3" x2="14" y2="21" /></svg>
                {/* 5. Megaphone */}
                <svg className="deco deco--5 deco-float1" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg>
                {/* 6. Line Chart (Growth) */}
                <svg className="deco deco--6 deco-float2" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 3 3 21 21 21" /><polyline points="3 17 9 11 13 15 21 7" /><polyline points="14 7 21 7 21 14" /></svg>
                {/* 7. Bar Chart */}
                <svg className="deco deco--7 deco-float3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                {/* 8. Lightbulb */}
                <svg className="deco deco--8 deco-float4" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
                {/* 9. Plus / cross (Filler) */}
                <svg className="deco deco--9 deco-float1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                {/* 10. Sparkle (Filler) */}
                <svg className="deco deco--10 deco-float3" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" fill="none" stroke="#222" strokeWidth="1.5" strokeLinejoin="round" /></svg>
                {/* 11. Magnet (Lead Generation) */}
                <svg className="deco deco--11 deco-float2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-45deg)' }}><path d="m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15" /><path d="m5 8 4 4" /><path d="m12 15 4 4" /></svg>
                {/* 12. Check Badge (Quality) */}
                <svg className="deco deco--12 deco-float3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" /></svg>
                {/* 13. At Sign (Social) */}
                <svg className="deco deco--13 deco-float4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" /></svg>
                {/* 14. Sparkle */}
                <svg className="deco deco--14 deco-float1" width="16" height="16" viewBox="0 0 24 24"><path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" fill="none" stroke="#222" strokeWidth="2" strokeLinejoin="round" /></svg>
                {/* 15. Plus */}
                <svg className="deco deco--15 deco-float2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                {/* 16. Globe */}
                <svg className="deco deco--16 deco-float4" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                {/* 17. Smartphone */}
                <svg className="deco deco--17 deco-float3" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
            </div>

            {/* Right decorative elements */}
            <div className="team-deco team-deco--right" aria-hidden="true">
                {/* 1. Envelope (Email) */}
                <svg className="deco deco--1 deco-float2" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                {/* 2. Link / Chain */}
                <svg className="deco deco--2 deco-float4" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-45deg)' }}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                {/* 3. Paper Airplane */}
                <svg className="deco deco--3 deco-float1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-15deg)' }}><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                {/* 4. Speech Bubble */}
                <svg className="deco deco--4 deco-float3" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                {/* 5. Pie Chart */}
                <svg className="deco deco--5 deco-float2" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
                {/* 6. Mouse/Click */}
                <svg className="deco deco--6 deco-float4" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="7" /><path d="M12 2v8" /></svg>
                {/* 7. Briefcase (Business) */}
                <svg className="deco deco--7 deco-float1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                {/* 8. Plus / cross */}
                <svg className="deco deco--8 deco-float3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                {/* 9. Trending Up */}
                <svg className="deco deco--9 deco-float2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                {/* 10. Star (Analytics/Rating) */}
                <svg className="deco deco--10 deco-float4" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                {/* 11. Thumbs Up (Social) */}
                <svg className="deco deco--11 deco-float1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
                {/* 12. Sparkle */}
                <svg className="deco deco--12 deco-float2" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" fill="none" stroke="#222" strokeWidth="1.5" strokeLinejoin="round" /></svg>
                {/* 13. Camera (Content) */}
                <svg className="deco deco--13 deco-float4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
                {/* 14. Dots (Filler) */}
                <svg className="deco deco--14 deco-float3" width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="4" r="2" fill="#222" /><circle cx="12" cy="12" r="2" fill="#222" /><circle cx="12" cy="20" r="2" fill="#222" /></svg>
                {/* 15. Server/Data */}
                <svg className="deco deco--15 deco-float1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                {/* 16. Monitor/Desktop */}
                <svg className="deco deco--16 deco-float2" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
            </div>

            <h2 className="team-title">
                <span className="team-title--purple">{teamData.hero.titlePurple}</span>{' '}
                <span className="team-title--black">{teamData.hero.titleBlack}</span>
            </h2>
            <p className="team-paragraph">{teamData.hero.paragraph}</p>
            <button className="team-cta">
                <span>{teamData.hero.ctaText}</span>
            </button>
        </div>
    );
};

/* ── SECTION 2 : Image Cards (infinite loop) ── */
const TeamCards = ({ overrideData = [] }) => {
    const trackRef = useRef(null);

    // Create an infinitely scrolling duplicated strip using real dynamic data, fallback to JSON if empty while loading
    const activeData = overrideData.length > 0 ? overrideData : teamData.teamMembers;
    const duplicatedMembers = [...activeData, ...activeData];

    /* Pause animation on hover */
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const pause = () => track.style.animationPlayState = 'paused';
        const play = () => track.style.animationPlayState = 'running';

        track.addEventListener('mouseenter', pause);
        track.addEventListener('mouseleave', play);
        return () => {
            track.removeEventListener('mouseenter', pause);
            track.removeEventListener('mouseleave', play);
        };
    }, []);

    // Ensure we're ready before doing math on lengths
    if (!activeData.length) return null;

    return (
        <div className="team-cards-wrapper">
            <div className="team-cards-track" ref={trackRef}>
                {duplicatedMembers.map((member, index) => {
                    // Handle dual structure mapping based on if it's Live API data or fallback JSON data
                    const isLiveApi = overrideData.length > 0;
                    const imgSource = isLiveApi ? `https://lh3.googleusercontent.com/d/${member.id}=w600` : member.image;
                    const imgAlt = isLiveApi ? member.name : member.name;

                    return (
                        <div
                            className="team-card"
                            key={`${member.id}-${index}`}
                            style={{ '--i': index % activeData.length }}
                        >
                            <div className="team-card__inner">
                                <img
                                    src={imgSource}
                                    alt={imgAlt}
                                    className="team-card__img object-cover object-center"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


const FeaturesIntro = () => {
    const { title, subtitle } = teamData.featuresIntro;
    const sectionRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                end: "top 25%",
                scrub: 1, // Add scrub to match scroll speed 
                once: false,
                // These prevent the timeline from scrubbing backwards when scrolling up
                onLeave: () => tl.progress(1),
                onEnterBack: () => tl.progress(1),
                // Only reset the animation when scrolling completely past it at the top
                onLeaveBack: () => tl.progress(0),
            }
        });

        tl.to(".features-arrow", { opacity: 1, duration: 0.1 })
            .to(".arrow-path", { strokeDashoffset: 0, duration: 1, ease: 'none' })
            .fromTo(".arrow-head", { opacity: 0 }, { opacity: 1, duration: 0.2 }, "-=0.2");

    }, { scope: sectionRef });

    // Split title roughly in half by words
    const words = title.split(' ');
    const midpoint = Math.ceil(words.length / 2);
    const firstHalf = words.slice(0, midpoint).join(' ');
    const secondHalf = words.slice(midpoint).join(' ');

    return (
        <section className="features-intro" ref={sectionRef}>
            <div className="features-intro__container">
                {/* Left Animated Arrow */}
                <svg className="features-arrow features-arrow--left" width="120" height="80" viewBox="0 0 120 80" fill="none">
                    <path
                        className="arrow-path"
                        d="M 10,20 Q 60,20 100,70"
                        stroke="#222" strokeWidth="3" strokeLinecap="round" strokeDasharray="150" strokeDashoffset="150"
                    />
                    <path
                        className="arrow-head"
                        d="M 85,75 L 102,72 L 95,55"
                        stroke="#222" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    />
                </svg>

                <div className="features-intro__text">
                    <h2 className="features-intro__title">
                        {firstHalf}{' '}
                        <span className="features-intro__title--blue">{secondHalf}</span>
                    </h2>
                    <p className="features-intro__subtitle">{subtitle}</p>
                </div>

                {/* Right Animated Arrow */}
                <svg className="features-arrow features-arrow--right" width="120" height="80" viewBox="0 0 120 80" fill="none">
                    <path
                        className="arrow-path"
                        d="M 110,10 Q 60,30 20,70"
                        stroke="#222" strokeWidth="3" strokeLinecap="round" strokeDasharray="150" strokeDashoffset="150"
                    />
                    <path
                        className="arrow-head"
                        d="M 22,55 L 18,72 L 35,70"
                        stroke="#222" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    />
                </svg>
            </div>
        </section>
    );
};

/* ── SECTION 4 : Bento Grid ── */
const BentoGrid = () => {
    return (
        <section className="bento-section">
            <div className="bento-grid">
                {teamData.bentoGrid.map((card) => (
                    <div
                        className={`bento-card bento-card--${card.size}`}
                        key={card.id}
                        style={{ backgroundColor: card.bgColor }}
                    >
                        {card.image && (
                            <div className="bento-card__img-wrap">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="bento-card__img"
                                    loading="lazy"
                                />
                            </div>
                        )}
                        <div className="bento-card__content">
                            <h3 className="bento-card__title">{card.title}</h3>
                            <p className="bento-card__desc">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


export { TeamHero, TeamCards, FeaturesIntro, BentoGrid };