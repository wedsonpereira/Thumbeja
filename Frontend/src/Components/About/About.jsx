import React, { useEffect, useState } from 'react';
import './About.css';
import aboutData from "../../assets/JsonData/About"
import SEO from "../SEO/SEO.jsx";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState('');

    const openLightbox = (imageSrc) => {
        setLightboxImage(imageSrc);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setLightboxImage('');
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        gsap.from(".about-ceo-section", {
            scrollTrigger: {
                trigger: ".about-ceo-section",
                toggleActions: 'restart none none reverse',
                start: "top 80%",
                end: "bottom 80%"


            }, stagger: 0.2, duration: 1, x: -100, opacity: 0
        })


        gsap.from(".about-team-section", {
            scrollTrigger: {
                trigger: ".about-team-section",
                toggleActions: 'restart none none reverse',
                start: "top 80%",
                end: "bottom-=10% 80%"

            }, stagger: 0.2, duration: 1, x: -100, opacity: 0
        })
    }, [])





    return (
        <>
            <SEO
                title="About Thumbeja Publicity - Leadership & Team"
                description="Learn about Thumbeja Publicity's leadership, team values, and mission to deliver impactful branding and digital marketing solutions."
                keywords="about Thumbeja Publicity, marketing agency team, branding experts Mangalore"
                url="https://thumbeja.com/about-thumbeja-publicity"
            />
            <div className="about-section-wrapper" id="about">
                {/* CEO Section */}
                <section className="about-ceo-section">
                    <div className="about-container about-ceo-modern-layout">
                        <div className="about-ceo-title-block">
                            <h2 className="about-ceo-title">About Our CEO</h2>
                        </div>

                        <div className="about-ceo-image-box" onClick={() => openLightbox(aboutData.ceo.image)}>
                            <img
                                src={aboutData.ceo.image}
                                alt="Mr Shakeel - CEO"
                                className="about-ceo-photo"
                            />
                        </div>

                        <div className="about-ceo-info">
                            <p className="about-ceo-bio">
                                Thumbeja Publicity began with a fundamental belief: that every brand, regardless of size, deserves to stand out and succeed in the digital landscape. Founded by Mr. Shakeel, our agency has grown from a humble creative venture in Mangalore into a dynamic powerhouse of branding, printing, and digital marketing experts.
                            </p>

                            <div className="about-ceo-features">
                                <div className="ceo-feature-item">
                                    <div className="ceo-feature-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                                        </svg>
                                    </div>
                                    <h4 className="ceo-feature-title">OUR SOFTWARE</h4>
                                    <p className="ceo-feature-text">Integrating the latest marketing software into your branding to achieve exceptional presence.</p>
                                </div>
                                <div className="ceo-feature-item">
                                    <div className="ceo-feature-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                        </svg>
                                    </div>
                                    <h4 className="ceo-feature-title">EMAIL SERVERS</h4>
                                    <p className="ceo-feature-text">Transforming your digital reach with optimized email delivery pipelines.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Lightbox Modal */}
                {lightboxOpen && (
                    <div className="about-lightbox" onClick={closeLightbox}>
                        <div className="about-lightbox-content">
                            <button className="about-lightbox-close" onClick={closeLightbox}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <img src={lightboxImage} alt="Full view" className="about-lightbox-image" />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default About;
