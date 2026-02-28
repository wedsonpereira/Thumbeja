import React, { useRef } from 'react';
import teamData from './teamData.json';
import './VisionBanner.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText);

const VisionBanner = () => {
    const { title, subtitle, backgroundImage } = teamData.visionBanner;
    const bannerRef = useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const titleEl = bannerRef.current.querySelector('.vision-banner__title');
            const subtitleEl = bannerRef.current.querySelector('.vision-banner__subtitle');
            if (!titleEl) return;

            /* Hide content immediately until animation plays */
            gsap.set([titleEl, subtitleEl], { opacity: 0 });

            const split = new SplitText(titleEl, {
                type: 'chars,words',
                charsClass: 'vb-char',
                wordsClass: 'vb-word',
            });

            /* Delay: wait for TeamHero animation to finish (~2.5s) */
            const tl = gsap.timeline({ delay: 2.5 });

            /* Title becomes visible, chars sweep in */
            tl.to(titleEl, { opacity: 1, duration: 0.01 })
                .from(split.chars, {
                    opacity: 0,
                    y: 30,
                    rotateX: -60,
                    stagger: 0.02,
                    duration: 0.6,
                    ease: 'power3.out',
                });

            /* Subtitle fades up after title */
            tl.to(subtitleEl, { opacity: 1, duration: 0.01 })
                .from(subtitleEl, {
                    y: 20,
                    duration: 0.6,
                    ease: 'power2.out',
                }, '-=0.2');

        }, bannerRef);

        return () => ctx.revert();
    }, { scope: bannerRef });

    return (
        <section className="vision-banner" ref={bannerRef}>
            <img
                src={backgroundImage}
                alt={title}
                className="vision-banner__bg"
                loading="lazy"
            />
            <div className="vision-banner__overlay" />
            <div className="vision-banner__content">
                <h2 className="vision-banner__title">{title}</h2>
                <p className="vision-banner__subtitle">{subtitle}</p>
            </div>
        </section>
    );
};

export default VisionBanner;
