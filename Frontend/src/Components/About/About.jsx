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
                    <div className="about-container">
                        <div className="about-section-header">
                            <span className="about-section-label">------Leadership------</span>
                            <h2 className="about-section-title">Meet Our CEO</h2>
                        </div>
                        <div className="about-ceo-content">
                            <div className="about-ceo-image-box" onClick={() => openLightbox(aboutData.ceo.image)}>
                                <img
                                    src={aboutData.ceo.image}
                                    alt={aboutData.ceo.name}
                                    className="about-ceo-photo"
                                />
                                <div className="about-image-overlay">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="about-zoom-icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                    </svg>
                                </div>
                            </div>
                            <div className="about-ceo-info">
                                <h3 className="about-ceo-name">{aboutData.ceo.name}</h3>
                                <p className="about-ceo-position">{aboutData.ceo.role}</p>
                                <p className="about-ceo-bio">{aboutData.ceo.description}</p>
                            </div>
                        </div>
                    </div>
                </section>

            {/* Team Section */}
            <section className="about-team-section ">
                <div className="about-container">
                    <div className="about-section-header">
                        <span className="about-section-label">------Our People------</span>
                        <h2 className="about-section-title">{aboutData.team.title}</h2>
                    </div>
                    <div className="about-team-content">
                        <div className="about-team-info">
                            <p className="about-team-bio">{aboutData.team.description}</p>

                            <div className="about-team-values">
                                <div className="about-team-value-item">
                                    <div className="about-value-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                        </svg>
                                    </div>
                                    <div className="about-value-content">
                                        <h4 className="about-value-title">Collaborative Spirit</h4>
                                        <p className="about-value-text">We work together seamlessly, combining our diverse skills to deliver exceptional results.</p>
                                    </div>
                                </div>

                                <div className="about-team-value-item">
                                    <div className="about-value-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                        </svg>
                                    </div>
                                    <div className="about-value-content">
                                        <h4 className="about-value-title">Innovation Driven</h4>
                                        <p className="about-value-text">We stay ahead of trends, constantly learning and adapting to bring fresh ideas to every project.</p>
                                    </div>
                                </div>

                                <div className="about-team-value-item">
                                    <div className="about-value-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    </div>
                                    <div className="about-value-content">
                                        <h4 className="about-value-title">Excellence Focused</h4>
                                        <p className="about-value-text">Quality is at the heart of everything we do, ensuring every deliverable exceeds expectations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-team-image-box" onClick={() => openLightbox(aboutData.team.image)}>
                            <img
                                src={aboutData.team.image}
                                alt="Our Team"
                                className="about-team-photo"
                            />
                            <div className="about-image-overlay">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="about-zoom-icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                </svg>
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
