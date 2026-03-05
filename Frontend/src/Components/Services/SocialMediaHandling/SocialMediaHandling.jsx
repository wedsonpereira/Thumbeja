import React from 'react';
import './SocialMediaHandling.css';
import Header from '../../header/Header.jsx';
import '../../../index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { services1, services2, services3 } from "../../../assets/JsonData/Servicesdata/DigitalMarketing.js";
import Footer from "../../Footer/Footer.jsx";
import { GetInTouch } from "../../GetInTouch/GetInTouch.jsx";
import mountain from "../../../assets/Images/Gemini_Generated_Image_su9pixsu9pixsu9p.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import SocialMedia1Img from "../../../assets/Images/SocialMedia1.jpg";
import SocialMedia2Img from "../../../assets/Images/SocialMedia2.png";
import SocialMedia3Img from "../../../assets/Images/SocialMedia3.png";
import SocialMedia5Img from "../../../assets/Images/SocialMedia5.png";
import SocialMedia7Img from "../../../assets/Images/SocialMedia7.jpg";
import SEO from "../../SEO/SEO.jsx";

gsap.registerPlugin(ScrollTrigger);

const SocialMediaHandling = () => {
    useGSAP(() => {
        const isMobile = window.innerWidth < 768;
        const slideDistance = isMobile ? -50 : -150;

        gsap.from(".social-handling-animation-1", {
            scrollTrigger: {
                trigger: ".social-handling-animation-1",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            },
            duration: 1.2,
            x: slideDistance,
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-handling-animation-2", {
            scrollTrigger: {
                trigger: ".social-handling-animation-2",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            },
            duration: 1.2,
            x: slideDistance,
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-handling-animation-3", {
            scrollTrigger: {
                trigger: ".social-handling-animation-3",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            },
            duration: 1.2,
            x: slideDistance,
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-handling-animation-4", {
            scrollTrigger: {
                trigger: ".social-handling-animation-4",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            },
            duration: 1.2,
            x: slideDistance,
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-handling-animation-final", {
            scrollTrigger: {
                trigger: ".social-handling-animation-final",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            },
            duration: 1.2,
            x: slideDistance,
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-handling-animation-offer", {
            scrollTrigger: {
                trigger: ".social-handling-animation-offer",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            },
            duration: 1.2,
            x: slideDistance,
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-handling-animation-support", {
            scrollTrigger: {
                trigger: ".social-handling-animation-support",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            },
            duration: 1.2,
            x: slideDistance,
            opacity: 0,
            ease: "power2.out"
        });
    }, []);

    return (
        <div className="social-handling-page w-full overflow-x-hidden min-h-[60rem] pt-24">
            <SEO
                title="Social Media Handling Services in Mangalore | Instagram, Facebook and LinkedIn Management"
                description="Thumbeja Publicity provides social media handling services in Mangalore including Instagram management, Facebook page management, LinkedIn content, reels creation, content calendar planning, community management, and growth-focused optimization."
                keywords="social media handling services in Mangalore, social media management company, Instagram management Mangalore, Facebook page management, LinkedIn management services, social media content creation, reels creation, community management, social media growth strategy, lead generation through social media"
                url="https://thumbeja.com/services/social-media-handling-mangalore"
            />
            <Header />

            <div className="DigitalMarketingbox1 social-section-card max-w-[1200px] mx-auto mb-8 px-4 md:px-8 social-handling-animation-1">
                <h1 className="heading pt-8 md:pt-16 px-4 md:pl-2 text-2xl md:text-3xl lg:text-4xl font-bold text-left">Social Media Handling Services in Mangalore</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">At Thumbeja Publicity, we manage your brand presence across Instagram, Facebook, LinkedIn, YouTube, and other relevant platforms with a structured, business-driven approach. Our social media handling services are designed to increase brand visibility, improve audience engagement, and generate qualified business enquiries.</p>
                <p className="paragraph2 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">Our team handles the complete execution cycle, including content planning, post design, reel production, caption writing, posting schedules, comment and inbox management, and performance reporting. We focus on building a consistent and credible social media identity that supports long-term growth.</p>
            </div>

            <div className="image-gallery flex flex-col md:flex-row justify-center items-start mt-4 max-w-[1200px] mx-auto px-4 gap-4 social-handling-animation-2">
                <div className="social-image-frame w-full md:w-[48%] h-[300px] md:h-[350px]">
                    <img src={SocialMedia1Img} alt="Social media content design and brand creatives" className="w-full h-full object-cover object-top rounded-lg shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer" />
                </div>
                <div className="social-image-frame w-full md:w-[48%] h-[300px] md:h-[350px]">
                    <img src={SocialMedia2Img} alt="Social media campaign planning and execution" className="w-full h-full object-cover object-center rounded-lg shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer" />
                </div>
            </div>

            <div className="social-handling-animation-3">
                <p className="paragraph1 leading-7 md:leading-8 px-8 md:px-8 max-w-[1200px] mx-auto pt-6 md:pt-8 text-base md:text-lg text-left">We align every social media action with your brand goals. That means content pillars, audience segmentation, campaign-based posting, and continuous monitoring of what actually works. With this process, your pages stay active, relevant, and performance-focused.</p>
            </div>

            <div className="Subheadingmain social-section-card max-w-[1200px] mx-auto px-4 md:px-8 social-handling-animation-3">
                <h1 className="subheading pt-6 md:pt-8 px-4 md:pl-2 text-xl md:text-2xl font-bold text-left">What Our Social Media Handling Services Include</h1>
                <h2 className="subheading pt-4 md:pt-6 px-4 md:pl-2 text-lg md:text-xl font-bold text-left">Social Media Strategy and Content Planning</h2>

                <div className="image-gallery flex justify-center my-6 max-w-[1200px] mx-auto px-4 social-handling-animation-3">
                    <div className="social-image-frame w-full md:w-[70%] h-[250px] md:h-[400px]">
                        <img src={SocialMedia3Img} alt="Social media strategy and content calendar planning" className="w-full h-full rounded-lg object-cover transition-all duration-300 hover:scale-[1.03] cursor-pointer" />
                    </div>
                </div>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">We create monthly social media content calendars based on audience behavior, campaign requirements, and platform trends. This helps your business maintain consistency while improving organic reach and engagement quality.</p>
                <div className="points w-full max-w-[1200px] px-4 md:px-8 mx-auto pt-6 leading-6 social-handling-animation-3">
                    <ul className="services-list">
                        {services1.map((service, index) => (
                            <li key={index} style={{ marginBottom: '0.625rem', fontSize: '1rem' }}>
                                <FontAwesomeIcon icon={faCheck} size="xl" />
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="DigitalMarketingbox2 social-section-card w-full max-w-[1200px] mx-auto px-4 md:px-8 social-handling-animation-4">
                <h1 className="heading pt-6 md:pt-8 px-4 md:pl-2 text-xl md:text-2xl lg:text-3xl font-bold text-left">Social Media Management and Daily Execution</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">Our social media management model combines creative content production with disciplined execution. We publish platform-specific posts, optimize captions and hashtags, manage daily interactions, and ensure your brand voice stays consistent across all channels.</p>
            </div>

            <div className="image-gallery flex justify-center my-6 max-w-[1200px] mx-auto px-4 social-handling-animation-4">
                <div className="social-image-frame w-full md:w-[70%] h-[250px] md:h-[400px]">
                    <img src={SocialMedia7Img} alt="Social media management and engagement operations" className="w-full h-full rounded-lg object-cover transition-all duration-300 hover:scale-[1.03] cursor-pointer" />
                </div>
            </div>

            <div className="points w-full max-w-[1200px] px-8 md:px-8 mx-auto pt-6 leading-6 social-handling-animation-4">
                <ul className="services-list">
                    {services2.map((service, index) => (
                        <li key={index} style={{ marginBottom: '0.625rem', fontSize: '1rem' }}>
                            <FontAwesomeIcon icon={faCheck} size="xl" />
                            {service}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="Subheadingmain social-section-card max-w-[1200px] mx-auto px-4 md:px-8 social-handling-animation-final">
                <h1 className="subheading pt-6 md:pt-8 text-xl md:text-2xl font-bold text-left">Community Management, Monitoring and Optimization</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-0 pt-4 text-base md:text-lg text-left">We actively manage comments, messages, audience interactions, and trend opportunities so your social media is not just active but genuinely engaging. We also monitor key performance indicators and optimize content based on real results.</p>
                <div className="image-gallery flex justify-center mt-6 max-w-[1200px] mx-auto px-4 social-handling-animation-final">
                    <div className="social-image-frame w-full md:w-[70%] h-[250px] md:h-[400px]">
                        <img src={SocialMedia5Img} alt="Social media analytics and optimization workflow" className="w-full h-full rounded-lg object-cover transition-all duration-300 hover:scale-[1.03] cursor-pointer" />
                    </div>
                </div>
                <div className="points w-full max-w-[1200px] px-4 md:px-8 mx-auto pt-6 leading-6 social-handling-animation-final">
                    <ul className="services-list">
                        {services3.map((service, index) => (
                            <li key={index} style={{ marginBottom: '0.625rem', fontSize: '1rem' }}>
                                <FontAwesomeIcon icon={faCheck} size="xl" />
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 md:px-8 social-section-card social-handling-animation-offer">
                <h1 className="subheading pt-6 md:pt-8 px-4 md:pl-2 text-xl md:text-2xl font-bold text-left">What We Offer Businesses</h1>

                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">Thumbeja Publicity offers complete social media handling for businesses that want serious, predictable growth. We combine strategy, content production, posting discipline, and engagement management to position your brand as active, trusted, and professional in front of your ideal customers.</p>
                <p className="paragraph2 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">Our team continuously refines your content using audience insights and platform performance data, so your business stays ahead of algorithm changes and market trends. If you want a reliable social media partner that focuses on visibility, quality leads, and long-term brand value, this is where you should start.</p>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-8 social-section-card social-handling-animation-support">
                <h1 className="heading pt-6 md:pt-8 px-4 md:pl-2 text-2xl md:text-3xl lg:text-4xl font-bold text-left">Social Media Optimization and Ongoing Support</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">We provide ongoing social media optimization with structured monthly reviews, performance reports, and action plans. From creative direction to engagement quality and conversion intent, every update is designed to improve outcomes and keep your channels business-ready.</p>
                <p className="paragraph2 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">Whether you are building brand authority or scaling lead generation, our team supports you consistently with proactive execution and transparent communication. Explore our services and contact Thumbeja Publicity to build a stronger social media presence that delivers real results.</p>
            </div>

            <GetInTouch mountainImage={mountain} />
            <Footer />
        </div>

    );
};

export default SocialMediaHandling;
