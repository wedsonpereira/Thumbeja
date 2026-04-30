import React from 'react';
import './GraphicDesign.css';
import Header from '../../header/Header.jsx';
import '../../../index.css'
import GraphicDesignImg from '../../Home/Products/images/graphicdesign.webp';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Footer/Footer.jsx";
import {GetInTouch} from "../../GetInTouch/GetInTouch.jsx";
import mountain from "../../../assets/Images/Gemini_Generated_Image_su9pixsu9pixsu9p.png";
import {galleries, services4,logoGallery} from "../../../assets/JsonData/Servicesdata/GraphicDesign.js";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import SEO from "../../SEO/SEO.jsx";

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
        <div className="graphic-design-page bg-[#fefdf7] min-h-screen pt-24">
            <SEO
                title="Graphic Design Services in Mangalore - Logos, Posters & Brand Creatives | Thumbeja"
                description="Professional graphic design services in Mangalore for logos, posters, brochures, social media creatives, and print branding assets that build trust and drive enquiries."
                keywords="graphic design services Mangalore, logo design company Mangalore, poster design Mangalore, brochure design, branding creatives, marketing collateral design"
                url="https://thumbeja.com/services/graphic-design-mangalore"
            />
            <Header/>
            <div className="DigitalMarketingbox1 graphic-section-card max-w-[1200px] mx-auto mb-8 px-4 md:px-8 graphic-animation-1">
                <h1 className="heading pt-8 md:pt-16 px-4 md:pl-2 text-2xl md:text-3xl lg:text-5xl font-bold text-left">Graphic Design Services in Mangalore</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">At Thumbeja Publicity, we create professional graphic designs that make your brand look credible, memorable, and market-ready. From social media creatives to print materials, every visual is crafted to communicate clearly and inspire customer confidence.</p>
                <p className="paragraph2 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">Our design approach combines strategy, creativity, and production quality. We align each design with your brand voice, audience expectations, and campaign goals so your business stands out and converts attention into genuine enquiries.
                </p>
            </div>
            <div className="max-w-[900px] mx-auto px-4 md:px-8 pt-8 mb-16 graphic-animation-2">
                <img src={GraphicDesignImg} className="graphic-image-frame w-full rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" style={{display: 'block', maxHeight: '28.125rem', objectFit: 'cover'}}
                     alt="Graphic Design"/>
            </div>

            <section className="DigitalMarketingbox2 graphic-section-card w-full max-w-[1200px] mx-auto px-4 md:px-8 py-6 md:py-8 graphic-animation-3">
                <h2 className="heading text-xl md:text-4xl font-bold text-left px-2 md:px-0">What Graphic Design Services Do We Provide?</h2>
                <p className="paragraph1 leading-7 md:leading-8 pt-3 px-2 md:px-0 text-base md:text-lg text-left">
                    We provide creative and production-ready design services for digital campaigns, print branding, and day-to-day marketing needs.
                </p>
                <div className="points w-full mx-auto pt-4">
                    <ul className="services-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-2 md:p-4">
                        {services4.map((service, index) => (
                            <li key={`${service}-${index}`} className="min-h-[72px]">
                                <FontAwesomeIcon icon={faCheck} size="sm"/>
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <div className="Subheadingmain graphic-section-card max-w-[1200px] mx-auto px-4 md:px-8 mt-8 graphic-animation-gallery">
                <h1 className="subheading pt-6 md:pt-8 px-4 md:pl-2 text-xl md:text-2xl font-bold text-left lg:text-5xl ">Our Works:</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-3 text-base md:text-lg text-left">Explore a few of our recent design samples. Each creative is tailored for brand consistency, visual impact, and better customer recall.</p>
                <h2 className="subheading py-4 md:py-6 px-4 text-lg md:text-xl font-bold text-center lg:text-5xl">Posters</h2>
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
                <h2 className="subheading py-4 md:py-6 px-4 mt-5 text-lg md:text-xl font-bold text-center lg:text-5xl ">Logos</h2>
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
                                        className="w-[60%] h-auto rounded-lg object-contain transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-8 graphic-section-card graphic-animation-final">
                <h1 className="subheading pt-6 md:pt-8 px-4 md:pl-2 text-xl md:text-5xl font-bold text-left">What we offer</h1>

                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">
                    We offer end-to-end creative support, from concept development and brand direction to final, production-ready designs. Whether you need campaign posters, business stationery, brochures, or logo systems, our team delivers visuals that strengthen credibility and support business growth.
                </p>
                <p className="paragraph2 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">
                    You can expect clear communication, timely revisions, and quality-focused execution on every project. If you are looking for reliable design service that helps your brand look professional and trustworthy, explore our work above and contact Thumbeja Publicity.
                </p>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-8 mt-10 graphic-section-card graphic-animation-optimizations">
                <h1 className="heading pt-6 md:pt-8 px-4 md:pl-2 md:text-3xl lg:text-5xl font-bold text-left ">Graphic Design Optimization and Ongoing Support</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">
                    Great design is never one-time work. We continuously refine layouts, typography, visual hierarchy, and messaging style based on campaign feedback and audience response to keep your brand fresh and effective.
                </p>
                <p className="paragraph2 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">
                    From monthly creative planning to fast-turnaround updates for events, offers, and announcements, our team supports you like a long-term design partner. Connect with us today to build visuals that attract attention and convert it into business.
                </p>
            </div>
            <GetInTouch mountainImage={mountain} />
            <Footer/>
        </div>

    );
};

export default GraphicDesign;

