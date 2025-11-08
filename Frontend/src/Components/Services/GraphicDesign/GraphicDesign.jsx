import React from 'react';
import './GraphicDesign.css';
import Header from '../../header/Header.jsx';
import '../../../index.css'
import GraphicDesignImg from '../../../assets/Images/GraphicDesign.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Footer/Footer.jsx";
import {GetInTouch} from "../../GetInTouch/GetInTouch.jsx";
import mountain from "../../../assets/Images/Gemini_Generated_Image_su9pixsu9pixsu9p.png";
import {galleries, services4,logoGallery} from "../../../assets/JsonData/Servicesdata/GraphicDesign.js";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


const GraphicDesign = () => {
    useGSAP(() => {
        // Use smaller slide distance on mobile
        const isMobile = window.innerWidth < 768;
        const slideDistance = isMobile ? -50 : -150;
        
        gsap.from(".graphic-animation-1", {
            scrollTrigger: {
                trigger: ".graphic-animation-1",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".graphic-animation-2", {
            scrollTrigger: {
                trigger: ".graphic-animation-2",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".graphic-animation-3", {
            scrollTrigger: {
                trigger: ".graphic-animation-3",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',    
            }, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".graphic-animation-gallery", {
            scrollTrigger: {
                trigger: ".graphic-animation-gallery",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            stagger: 0.2, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".graphic-animation-final", {
            scrollTrigger: {
                trigger: ".graphic-animation-final",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".graphic-animation-optimizations", {
            scrollTrigger: {
                trigger: ".graphic-animation-optimizations",
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
        <div className="DigitalMarketing w-full overflow-x-hidden min-h-[60rem] pt-24">
            <Header/>
            <div className="DigitalMarketingbox1 max-w-[1200px] mx-auto mb-8 px-4 md:px-8 graphic-animation-1">
                <h1 className="heading pt-8 md:pt-16 px-4 md:pl-2 text-2xl md:text-3xl lg:text-4xl font-bold text-left">Graphic Design</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">Graphic design is a creative discipline that blends art, technology, and communication to visually convey ideas, messages, and brands. At its core, it involves the strategic use of elements like color, typography, imagery, and layout to craft compelling visuals that resonate with audiences.</p>
                <p className="paragraph2 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">In today's fast-paced digital landscape, graphic design plays a pivotal role in brand identity and marketing success. Effective designs can differentiate a business in crowded markets, fostering trust and loyalty among consumers. For instance, a well-designed logo becomes synonymous with quality, while infographics make data digestible and shareable on platforms like Instagram or LinkedIn.
                </p>
            </div>
            <div className="max-w-[900px] mx-auto px-4 md:px-8 pt-8 mb-16 graphic-animation-2">
                <img src={GraphicDesignImg} className="w-full rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" style={{display: 'block', maxHeight: '28.125rem', objectFit: 'cover'}}
                     alt="Graphic Design"/>
            </div>

            <div className="DigitalMarketingbox2 w-full max-w-[1200px] mx-auto px-4 md:px-8 graphic-animation-3">
                <h1 className="heading pt-6 md:pt-8 px-4 md:pl-2 text-xl md:text-2xl font-bold text-left">What types of services do we provide?</h1>
            </div>
            <div className="points w-full max-w-[1200px] px-4 md:px-8 mx-auto pt-6 leading-6 graphic-animation-3">
                <ul className="services-list">
                    {services4.map((service, index) => (
                        <li key={index} style={{marginBottom: '0.625rem', fontSize: '1rem'}}>
                            <FontAwesomeIcon icon={faCheck} size="xl"/>
                            {service}x
                        </li>
                    ))}
                </ul>
            </div>
            <div className="Subheadingmain max-w-[1200px] mx-auto px-4 md:px-8 graphic-animation-gallery">
                <h1 className="subheading pt-6 md:pt-8 px-4 md:pl-2 text-xl md:text-2xl font-bold text-left">Our Works:</h1>
                <h2 className="subheading py-4 md:py-6 px-4 text-lg md:text-xl font-bold text-center">Posters</h2>
                <div className="max-w-[1200px] mx-auto">
                    <div className="w-full">
                        {galleries.map((gallery, galleryIndex) => (
                            <div
                                key={galleryIndex}
                                className="image-gallery grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 px-2 md:px-0"
                            >
                                {gallery.map((item, index) => (
                                    <img
                                        key={index}
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-auto rounded-lg object-contain transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <h2 className="subheading py-4 md:py-6 px-4 mt-5 text-lg md:text-xl font-bold text-center">Logos</h2>
                <div className="max-w-[1200px] mx-auto">
                    <div className="w-full">
                        {logoGallery.map((gallery, galleryIndex) => (
                            <div
                                key={galleryIndex}
                                className="image-gallery grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-4 px-2 md:px-0"
                            >
                                {gallery.map((item, index) => (
                                    <img
                                        key={index}
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-auto rounded-lg object-contain transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 graphic-animation-final">
                <h1 className="subheading pt-6 md:pt-8 px-4 md:pl-2 text-xl md:text-2xl font-bold text-left">What we offer</h1>

                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">
                    At Thumbeja Publicity, we deliver innovative digital marketing to boost your brand's visibility and growth. Our services include SEO and Google Ads for top search rankings and targeted traffic, plus engaging social media campaigns on Instagram, Facebook, and LinkedIn with influencer partnerships. We create compelling videos and implement WhatsApp automation to personalize interactions, driving engagement and leads through every channel.
                </p>
                <p className="paragraph2 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">
                    We integrate CRM tools like HubSpot for streamlined customer management and build responsive websites using React.js, optimized for SEO and conversions. With data analytics and A/B testing, we refine strategies for real-time results, helping businesses achieve higher ROI and online dominance. Partner with Thumbeja for a complete digital ecosystem tailored to your success.
                </p>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-8 mt-10 graphic-animation-optimizations">
                <h1 className="heading pt-6 md:pt-8 px-4 md:pl-2 text-2xl md:text-3xl lg:text-4xl font-bold text-left">Digital Marketing Optimizations and Ongoing Support</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">
                    At Thumbeja Publicity, we excel in optimizing digital marketing strategies to elevate your online presence and accelerate growth. Our services focus on refining SEO, PPC campaigns, and social media tactics with data-driven insights, ensuring targeted reach, higher conversion rates, and seamless integration across platforms like Google, Facebook, and Instagram.
                </p>
                <p className="paragraph2 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">
                    We deliver unwavering ongoing support through regular analytics reviews, real-time campaign adjustments, and personalized consulting, empowering your digital efforts to adapt and scale effortlessly. From fine-tuning ad performance to enhancing content strategies, our dedicated team at Thumbeja Publicity keeps your digital marketing innovative and effective, driving sustained ROI without interruptions.
                </p>
            </div>
            <GetInTouch mountainImage={mountain} />
            <Footer/>
        </div>

    );
};

export default GraphicDesign;

