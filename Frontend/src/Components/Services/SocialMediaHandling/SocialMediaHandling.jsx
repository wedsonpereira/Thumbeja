import React from 'react';
import './SocialMediaHandling.css';
import Header from '../../header/Header.jsx';
import '../../../index.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {services1, services2,services3} from "../../../assets/JsonData/Servicesdata/DigitalMarketing.js";
import Footer from "../../Footer/Footer.jsx";
import {GetInTouch} from "../../GetInTouch/GetInTouch.jsx";
import mountain from "../../../assets/Images/Gemini_Generated_Image_su9pixsu9pixsu9p.png";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
import SocialMedia1Img from "../../../assets/Images/SocialMedia1.jpg";
import SocialMedia2Img from "../../../assets/Images/SocialMedia2.png";
import SocialMedia3Img from "../../../assets/Images/SocialMedia3.png";
import SocialMedia4Img from "../../../assets/Images/SocialMedia4.png";
import SocialMedia5Img from "../../../assets/Images/SocialMedia5.png";
import SocialMedia6Img from "../../../assets/Images/SocialMedia6.png";
import SocialMedia7Img from "../../../assets/Images/SocialMedia7.jpg";

const SocialMediaHandling = () => {
    useGSAP(() => {
        // Use smaller slide distance on mobile
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
        <div className="DigitalMarketing w-full overflow-x-hidden min-h-[60rem] pt-24">
            <Header/>
            <div className="DigitalMarketingbox1 max-w-[1200px] mx-auto mb-8 px-4 md:px-8 social-handling-animation-1">
                <h1 className="heading pt-8 md:pt-16 px-4 md:pl-2 text-2xl md:text-3xl lg:text-4xl font-bold text-left">Social Media Handling</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">Social media handling involves expertly managing your brand's presence across platforms like Instagram, Facebook, Twitter, and LinkedIn to engage audiences, build communities, and drive conversions.</p>
                <p className="paragraph2 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">Beyond mere posting, our social media handling creates meaningful interactions through targeted content, timely responses, and data-driven strategies, transforming followers into brand advocates and boosting overall visibility.</p>
            </div>
            <div className="image-gallery flex flex-col md:flex-row justify-center items-start mt-4 max-w-[1200px] mx-auto px-4 gap-4 social-handling-animation-2">
                <div className="w-full md:w-[48%] h-[300px] md:h-[350px] rounded-lg overflow-hidden">
                    <img src={SocialMedia1Img} alt="Social Media Poster 1" className="w-full h-full object-cover object-top rounded-lg shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer" />
                </div>
                <div className="w-full md:w-[48%] h-[300px] md:h-[350px] rounded-lg overflow-hidden">
                    <img src={SocialMedia2Img} alt="Social Media Poster 2" className="w-full h-full object-cover object-center rounded-lg shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer" />
                </div>
            </div>
         
            <div className="social-handling-animation-3">
                <p className="paragraph1 leading-7 md:leading-8 px-8 md:px-8 max-w-[1200px] mx-auto pt-6 md:pt-8 text-base md:text-lg text-left">Our approach ensures consistent branding, trend-aligned campaigns, and performance analytics to refine strategies, helping businesses stay relevant and connected in the fast-paced social landscape.</p>
            </div>
            <div className="Subheadingmain max-w-[1200px] mx-auto px-4 md:px-8 social-handling-animation-3">
                <h1 className="subheading pt-6 md:pt-8 px-4 md:pl-2 text-xl md:text-2xl font-bold text-left">What do our social media handling services include</h1>
                <h2 className="subheading pt-4 md:pt-6 px-4 md:pl-2 text-lg md:text-xl font-bold text-left">Social Media Strategy & Planning</h2>

                <div className="image-gallery flex justify-center my-6 max-w-[1200px] mx-auto px-4 social-handling-animation-3">
                    <img src={SocialMedia3Img} alt="Social Media Strategy" className="w-full md:w-[70%] h-[250px] md:h-[400px] rounded-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" />
                </div>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">We develop tailored social media strategies that align with your business goals, audience preferences, and platform best practices to maximize reach and engagement.</p>
                <div className="points w-full max-w-[1200px] px-4 md:px-8 mx-auto pt-6 leading-6 social-handling-animation-3">
                    <ul className="services-list">
                        {services1.map((service, index) => (
                            <li key={index} style={{marginBottom: '0.625rem', fontSize: '1rem'}}>
                                <FontAwesomeIcon icon={faCheck} size="xl"/>
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="DigitalMarketingbox2 w-full max-w-[1200px] mx-auto px-4 md:px-8 social-handling-animation-4">
                <h1 className="heading pt-6 md:pt-8 px-4 md:pl-2 text-xl md:text-2xl lg:text-3xl font-bold text-left">Social media management</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">At Thumbeja Publicity, social media management combines creative content curation, community engagement, and analytics to foster growth and loyalty. From daily posting schedules and visual storytelling to influencer collaborations and paid ad campaigns, we handle every aspect to ensure your social channels thrive.</p>
            </div>
            <div className="image-gallery flex justify-center my-6 max-w-[1200px] mx-auto px-4 social-handling-animation-4">
                <img src={SocialMedia7Img} alt="Social Media Management" className="w-full md:w-[70%] h-[250px] md:h-[400px] rounded-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" />
            </div>
            <div className="points w-full max-w-[1200px] px-8 md:px-8 mx-auto pt-6 leading-6 social-handling-animation-4">
                <ul className="services-list">
                    {services2.map((service, index) => (
                        <li key={index} style={{marginBottom: '0.625rem', fontSize: '1rem'}}>
                            <FontAwesomeIcon icon={faCheck} size="xl"/>
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="Subheadingmain max-w-[1200px] mx-auto px-4 md:px-8 social-handling-animation-final">
                <h1 className="subheading pt-6 md:pt-8  text-xl md:text-2xl font-bold text-left">What do our social media handling services include</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-0 pt-4 text-base md:text-lg text-left">Our services extend to crisis management, trend monitoring, and cross-platform integration, ensuring your brand remains agile and responsive in the ever-evolving social media ecosystem.</p>
                <div className="image-gallery flex justify-center mt-6 max-w-[1200px] mx-auto px-4 social-handling-animation-final">
                    <img src={SocialMedia5Img} alt="Social Media Services" className="w-full md:w-[70%] h-[250px] md:h-[400px] rounded-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" />
                </div>
                <div className="points w-full max-w-[1200px] px-4 md:px-8 mx-auto pt-6 leading-6 social-handling-animation-final">
                    <ul className="services-list">
                        {services3.map((service, index) => (
                            <li key={index} style={{marginBottom: '0.625rem', fontSize: '1rem'}}>
                                <FontAwesomeIcon icon={faCheck} size="xl"/>
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 social-handling-animation-offer">
                <h1 className="subheading pt-6 md:pt-8 px-4 md:pl-2 text-xl md:text-2xl font-bold text-left">What we have to offer</h1>

                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">Thumbeja Publicity delivers end-to-end social media handling for brands across industries, amplifying your voice through organic growth, targeted advertising, content creation, and performance tracking. We specialize in platform-specific tactics, from Instagram Reels and TikTok challenges to LinkedIn thought leadership and Twitter conversations, all while integrating with broader digital efforts to drive traffic, leads, and sales.</p>
                <p className="paragraph2 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">Businesses often refresh their social media presence to adapt to new algorithms, audience shifts, or market trends—it's an opportunity for evolution, not a sign of failure. We use modern tools like scheduling software and AI analytics to keep your strategy fresh and effective.</p>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-8 social-handling-animation-support">
                <h1 className="heading pt-6 md:pt-8 px-4 md:pl-2 text-2xl md:text-3xl lg:text-4xl font-bold text-left">Social media optimizations and ongoing support</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">We optimize social media performance through A/B testing, algorithm updates, and ROI-focused adjustments, ensuring your content cuts through the noise and delivers results. Our ongoing support includes monthly audits, trend forecasting, and dedicated account management to keep your social presence dynamic and aligned with business objectives.</p>
                <p className="paragraph2 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">Whether launching a new campaign or sustaining momentum, our proactive approach helps brands navigate challenges, capitalize on opportunities, and build lasting digital communities that drive sustained growth.</p>
            </div>
            <GetInTouch mountainImage={mountain} />
            <Footer/>
        </div>

    );
};

export default SocialMediaHandling;