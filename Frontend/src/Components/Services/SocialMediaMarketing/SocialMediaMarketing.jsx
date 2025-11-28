import React from 'react';
import './SocialMediaMarketing.css';
import Header from '../../header/Header.jsx';
import '../../../index.css'
import SocialMediaMarketingImg from '../../../assets/Images/SocialMediaMarketing.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {services1, services2,services3} from "../../../assets/JsonData/Servicesdata/DigitalMarketing.js";
import Footer from "../../Footer/Footer.jsx";
import {GetInTouch} from "../../GetInTouch/GetInTouch.jsx";
import mountain from "../../../assets/Images/Gemini_Generated_Image_su9pixsu9pixsu9p.png";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import BrandmarketImg1 from "../../../assets/Images/BrandmarketImg1.png";
import BrandMarketImg2 from "../../../assets/Images/BrandMarketImg2.png";
import BrankMarketImg3 from "../../../assets/Images/brankmarket3.png";
import BrankMarketImg4 from "../../../assets/Images/brankmarket4.png";
import BrandMarketImg5 from "../../../assets/Images/brandmarket5.png";

gsap.registerPlugin(ScrollTrigger);

const SocialMediaMarketing = () => {
    useGSAP(() => {
        // Use smaller slide distance on mobile
        const isMobile = window.innerWidth < 768;
        const slideDistance = isMobile ? -50 : -150;
        
        gsap.from(".social-animation-1", {
            scrollTrigger: {
                trigger: ".social-animation-1",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
        
            }, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-animation-2", {
            scrollTrigger: {
                trigger: ".social-animation-2",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-animation-3", {
            scrollTrigger: {
                trigger: ".social-animation-3",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',    
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-animation-4", {
            scrollTrigger: {
                trigger: ".social-animation-4",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-animation-5", {
            scrollTrigger: {
                trigger: ".social-animation-5",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-animation-6", {
            scrollTrigger: {
                trigger: ".social-animation-6",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-animation-7", {
            scrollTrigger: {
                trigger: ".social-animation-7",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-animation-8", {
            scrollTrigger: {
                trigger: ".social-animation-8",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        // Additional animations for all sections
        gsap.from(".social-animation-9", {
            scrollTrigger: {
                trigger: ".social-animation-9",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-animation-10", {
            scrollTrigger: {
                trigger: ".social-animation-10",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-animation-11", {
            scrollTrigger: {
                trigger: ".social-animation-11",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            stagger: 0.2, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-animation-12", {
            scrollTrigger: {
                trigger: ".social-animation-12",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            stagger: 0.2, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-animation-13", {
            scrollTrigger: {
                trigger: ".social-animation-13",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-animation-14", {
            scrollTrigger: {
                trigger: ".social-animation-14",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-animation-branding", {
            scrollTrigger: {
                trigger: ".social-animation-branding",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-animation-branding2", {
            scrollTrigger: {
                trigger: ".social-animation-branding2",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-animation-offer", {
            scrollTrigger: {
                trigger: ".social-animation-offer",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".social-animation-final", {
            scrollTrigger: {
                trigger: ".social-animation-final",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            stagger: 0.3, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });
    }, []);

    return (
        <div className="DigitalMarketing w-full overflow-x-hidden pt-24">
            <Header/>
            <div className="DigitalMarketingbox1 max-w-[1200px] mx-auto mb-8 px-4 md:px-8 social-animation-1">
                <h1 className="heading pt-8 md:pt-16 px-4 md:pl-1 text-2xl md:text-3xl lg:text-4xl font-bold text-left"> Social Media Marketing</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-1 text-base md:text-lg text-left">Social media marketing is about using platforms like Facebook, Instagram, and Twitter to reach people and share your brand. It focuses on creating interesting posts, videos, and stories that people enjoy and interact with. By connecting with your audience regularly, it helps build trust, loyalty, and turns followers into customers.
                </p>
                
            </div>
            <div className="max-w-[900px] mx-auto px-4 md:px-8 social-animation-2">
                <img src={SocialMediaMarketingImg} className="w-full rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" style={{display: 'block', maxHeight: '28.125rem', objectFit: 'cover'}}
                     alt="Social Media Marketing"/>
            </div>
            <div className="social-animation-3">
                <p className="paragraph1 leading-8 px-7  md:pl-10 max-w-[1200px] mx-auto pt-6 md:pt-8" style={{textAlign: 'left'}}>Additionally, social media marketing can be cost-effective compared to traditional advertising, while offering opportunities for targeted campaigns that reach the right people at the right time. Overall, it’s a powerful way to grow a brand, strengthen relationships, and drive sales.
                </p>
            </div>
            <div className="Subheadingmain max-w-[1200px] mx-auto px-4 md:px-8 social-animation-branding">
                
                
                <h2 className="subheading pt-[1.5rem] pl-[0.7rem] social-animation-branding"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.4rem"}}>Brand & Marketing
                    Evaluations
                </h2>
                <p className="paragraph1 leading-8 pl-[0.7rem] pt-2 social-animation-branding" style={{textAlign: 'left'}}>Branding and marketing services include a thorough evaluation of your brand and marketing efforts to understand your strengths and areas for improvement. This helps create strategies that enhance your brand’s visibility and impact.
                </p>
                <div className="image-gallery flex flex-col md:flex-row justify-between gap-4 mt-4 w-full max-w-[1200px] mx-auto px-4 social-animation-branding">
                    <img src={BrandmarketImg1} alt="Brand Marketing Poster 1" className="w-full md:w-[48%] h-[250px] md:h-[300px] rounded-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" />
                    <img src={BrandMarketImg2} alt="Brand Marketing Poster 2" className="w-full md:w-[48%] h-[250px] md:h-[300px] rounded-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" />
                </div>
                <div className="points w-full max-w-[1200px] px-4 md:px-4 mx-auto pt-6 leading-6 social-animation-branding" >
                    <ul className="services-list" >
                        {services1.map((service, index) => (
                            <li key={index} style={{marginBottom: '0.625rem', fontSize: '1rem'}}>
                                <FontAwesomeIcon icon={faCheck} size="xl"/>
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="DigitalMarketingbox2 w-full max-w-[1200px] mx-auto px-4 md:px-8 social-animation-9">
                <h1 className="heading pt-6 md:pt-8  px-4 md:pl-2 text-xl md:text-2xl lg:text-3xl font-bold text-left mb-4"> Branding & marketing</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 text-base md:text-lg text-left">Branding and marketing services focus on building a strong, memorable identity that connects with your audience. We combine creativity and strategy to deliver impactful solutions, including logo design, marketing materials, merchandise, and event branding. Our goal is to help your business stand out, communicate its values effectively, and leave a lasting impression in every interaction.</p>
            </div>
          <div className="image-gallery flex flex-col md:flex-row justify-center mt-4 w-full max-w-[1200px] mx-auto px-4 gap-4 md:gap-6 social-animation-10">
                    <img src={BrankMarketImg3} alt="Poster 1" className="w-full md:w-[30%] h-[250px] md:h-auto rounded-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" />
                    <img src={BrankMarketImg4} alt="Poster 2" className="w-full md:w-[30%] h-[250px] md:h-auto rounded-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" />
                    <img src={BrandMarketImg5} alt="Poster 3" className="w-full md:w-[30%] h-[250px] md:h-auto rounded-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" />
                </div>
            <div className="points w-full max-w-[1200px] px-6 md:px-12 mx-auto pt-6 leading-6 social-animation-6">
                <ul className="services-list" >
                    {services2.map((service, index) => (
                        <li key={index} style={{marginBottom: '0.625rem', fontSize: '1rem'}}>
                            <FontAwesomeIcon icon={faCheck} size="xl"/>
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="Subheadingmain w-full max-w-[1200px] mx-auto px-2 md:px-2 social-animation-branding2">
                <h1 className="subheading pt-4 md:pt-6 px-4 md:pl-9 text-xl md:text-2xl font-bold text-left social-animation-branding2">What do our branding &
                    marketing services include
                </h1>

                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-9 pt-2 social-animation-branding2" style={{textAlign: 'left'}}>Branding and marketing services include creative and strategic solutions that define and enhance a brand’s identity. These services cover logo design, brand strategy, marketing materials, digital campaigns, and social media management. The goal is to create consistent, impactful communication that leaves a lasting impression across all platforms.

                </p>
               
                <div className="points w-full max-w-[1200px] px-4 md:px-12 mx-auto pt-6 leading-6 social-animation-branding2" >
                    <ul className="services-list" >
                        {services3.map((service, index) => (
                            <li key={index} style={{marginBottom: '0.625rem', fontSize: '1rem'}}>
                                <FontAwesomeIcon icon={faCheck} size="xl"/>
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-6 py-16 social-animation-offer">
                <h1 className="subheading text-left font-bold text-3xl mb-8 social-animation-offer">
                    What we offer
                </h1>

                <div className="social-icons-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        
                        {/* Facebook Marketing Card */}
                        <div className="group cursor-pointer social-icon">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 h-64 flex flex-col justify-between text-white hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
                                <div className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" className="mr-3" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Facebook Marketing</h3>
                                    <p className="text-blue-100 text-sm leading-relaxed">
                                        Targeted advertising campaigns and organic content strategies to reach your ideal audience on Facebook
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Instagram Marketing Card */}
                        <div className="group cursor-pointer social-icon">
                            <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-2xl p-8 h-64 flex flex-col justify-between text-white hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
                                <div className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" className="mr-3" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Instagram Marketing</h3>
                                    <p className="text-pink-100 text-sm leading-relaxed">
                                        Visual storytelling and engagement strategies to build your brand presence on Instagram
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* LinkedIn Marketing Card */}
                        <div className="group cursor-pointer social-icon">
                            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 h-64 flex flex-col justify-between text-white hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
                                <div className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" className="mr-3" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">LinkedIn Marketing</h3>
                                    <p className="text-blue-100 text-sm leading-relaxed">
                                        Professional networking and B2B marketing strategies to connect with industry leaders
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp Marketing Card */}
                        <div className="group cursor-pointer social-icon">
                            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-8 h-64 flex flex-col justify-between text-white hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
                                <div className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={faWhatsapp} size="2x" className="mr-3" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3">WhatsApp Marketing</h3>
                                    <p className="text-green-100 text-sm leading-relaxed">
                                        Direct customer communication and automated messaging solutions for better engagement
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
           
            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 social-animation-final">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center social-animation-final">
                        Branding & Marketing Optimizations and Ongoing Support
                    </h1>
                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500 social-animation-final">
                            <p className="text-gray-700 leading-relaxed text-lg">
                                At Thumbeja Publicity, we specialize in crafting unique brand identities that resonate with target audiences, driving meaningful connections and long-term growth. Our branding and marketing optimization services leverage cutting-edge strategies to enhance online visibility, refine messaging, and amplify engagement across digital channels, ensuring businesses stand out in competitive markets.
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 social-animation-final">
                            <p className="text-gray-700 leading-relaxed text-lg">
                                We provide comprehensive ongoing support, from continuous performance audits and adaptive campaign tweaks to dedicated relationship management, helping clients evolve their brands without disruption. Whether refreshing an established identity or scaling new initiatives, our tailored approach empowers businesses to thrive, proving that strategic rebrands are about innovation, not just recovery.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <GetInTouch mountainImage={mountain} />
            <Footer/>
        </div>

    );
};

export default SocialMediaMarketing;