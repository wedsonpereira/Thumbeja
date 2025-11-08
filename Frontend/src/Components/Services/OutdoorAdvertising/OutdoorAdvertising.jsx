import React from 'react';
import './OutdoorAdvertising.css';
import Header from '../../header/Header.jsx';
import '../../../index.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {services1, services2,services3} from "../../../assets/JsonData/Servicesdata/DigitalMarketing.js";
import Footer from "../../Footer/Footer.jsx";
import {GetInTouch} from "../../GetInTouch/GetInTouch.jsx";
import mountain from "../../../assets/Images/Gemini_Generated_Image_su9pixsu9pixsu9p.png";
import OutdoorAdvertisingImg from "../../../assets/Images/OutdoorAdvertisement.png";
import VideoMarketing1Img from "../../../assets/Images/VideoMarketing1.png";
import SEO1Img from "../../../assets/Images/SEO1.png";
import OutdoorAdvertisementPic1Img from "../../../assets/Images/OutdoorAdvertisementPic1.png";
import OutdoorAdvertisementPic3Img from "../../../assets/Images/OutdoorAdvertisementPic3.png";
import OutdoorAdvertisementPic2Img from "../../../assets/Images/OutdoorAdvertisementPic2.png";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const OutdoorAdvertising = () => {
    useGSAP(() => {
        // Use smaller slide distance on mobile
        const isMobile = window.innerWidth < 768;
        const slideDistance = isMobile ? -50 : -150;
        
        gsap.from(".outdoor-animation-1", {
            scrollTrigger: {
                trigger: ".outdoor-animation-1",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".outdoor-animation-2", {
            scrollTrigger: {
                trigger: ".outdoor-animation-2",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".outdoor-animation-3", {
            scrollTrigger: {
                trigger: ".outdoor-animation-3",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',    
            }, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".outdoor-animation-4", {
            scrollTrigger: {
                trigger: ".outdoor-animation-4",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".outdoor-animation-5", {
            scrollTrigger: {
                trigger: ".outdoor-animation-5",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".outdoor-animation-final", {
            scrollTrigger: {
                trigger: ".outdoor-animation-final",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".outdoor-animation-optimizations", {
            scrollTrigger: {
                trigger: ".outdoor-animation-optimizations",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".outdoor-animation-evaluations", {
            scrollTrigger: {
                trigger: ".outdoor-animation-evaluations",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".outdoor-animation-offer", {
            scrollTrigger: {
                trigger: ".outdoor-animation-offer",
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
            <div className="DigitalMarketingbox1 max-w-[1200px] mx-auto mb-8 px-4 md:px-8 outdoor-animation-1">
                <h1 className="heading pt-8 md:pt-16 px-4 md:pl-2 text-2xl md:text-3xl lg:text-4xl font-bold text-left">Outdoor Advertising</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">Outdoor advertising leverages high-visibility public spaces to deliver compelling messages to diverse audiences, creating immediate and lasting impressions through strategic placement and creative design.</p>
                <p className="paragraph2 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">Beyond static displays, outdoor advertising builds brand momentum by integrating dynamic elements like digital screens and experiential activations, transforming everyday environments into powerful engagement zones.</p>
            </div>
            <div className="max-w-[900px] mx-auto px-4 md:px-8 py-5 mb-10 outdoor-animation-2">
                <img src={OutdoorAdvertisingImg} className="w-full rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" style={{display: 'block', maxHeight: '28.125rem', objectFit: 'cover'}}
                     alt="Outdoor Advertising"/>
            </div>
            <div className="outdoor-animation-3">
                <p className="paragraph1 leading-7 md:leading-8 px-8 md:px-10 max-w-[1200px] mx-auto pt-0 text-base md:text-lg text-left">From billboards and transit wraps to street posters and digital out-of-home networks, outdoor advertising fosters authentic connections by capturing attention in real-world contexts, turning commuters and passersby into engaged brand enthusiasts through bold visuals and targeted messaging.
                </p>
            </div>
            <div className="Subheadingmain max-w-[1200px] mx-auto px-4 md:px-8 outdoor-animation-evaluations">
               
            
                <h1 className="heading pt-6 md:pt-8 px-4 md:pl-1 text-xl md:text-2xl lg:text-3xl font-bold text-left pb-2">Outdoor Advertising Evaluations</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 text-base md:text-lg text-left">Our evaluations assess site visibility, audience demographics, and campaign performance metrics to optimize outdoor placements, ensuring every ad dollar maximizes reach and impact in high-traffic areas.</p>
                <div className="image-gallery flex flex-col md:flex-row justify-center mt-4 max-w-[1200px] mx-auto px-4 gap-4">
                    <img src={SEO1Img} alt="SEO Marketing" className="w-full md:w-[48%] h-[250px] md:h-[300px] rounded-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" />
                    <img src={VideoMarketing1Img} alt="Video Marketing" className="w-full md:w-[48%] h-[250px] md:h-[300px] rounded-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" />
                </div>
                <div className="points w-full max-w-[1200px] px-4 md:px-8 mx-auto pt-6 leading-6">
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
            <div className="DigitalMarketingbox2 w-full max-w-[1200px] mx-auto px-4 md:px-8 outdoor-animation-4">
                <h1 className="heading pt-6 md:pt-8 px-4 md:pl-2 text-xl md:text-2xl lg:text-3xl font-bold text-left">Outdoor Advertising</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">Outdoor advertising at Thumbeja Publicity blends innovative design, prime location scouting, and data-driven execution to amplify your brand's presence in the physical world. We handle everything from traditional billboards and vehicle wraps to cutting-edge LED displays and guerrilla installations, delivering campaigns that stop traffic—literally—and spark conversations wherever your audience roams.</p>
            </div>
            <div className="flex justify-center mt-4 max-w-[1200px] mx-auto px-4 outdoor-animation-4">
                <img src={OutdoorAdvertisementPic2Img} alt="Outdoor Advertisement" className="w-full md:w-[70%] h-[250px] md:h-[400px] rounded-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" />
            </div>
            <div className="points w-full max-w-[1200px] px-8 md:px-14 mx-auto pt-6 leading-6 outdoor-animation-4">
                <ul className="services-list">
                    {services2.map((service, index) => (
                        <li key={index} style={{marginBottom: '0.625rem', fontSize: '1rem'}}>
                            <FontAwesomeIcon icon={faCheck} size="xl"/>
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="Subheadingmain max-w-[1200px] mx-auto px-4 md:px-8 outdoor-animation-5">
                <h1 className="subheading pt-6 md:pt-8 px-4 md:pl-2 text-xl md:text-2xl font-bold text-left">What do our outdoor advertising services include</h1>

                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">We specialize in creating immersive outdoor experiences that blend seamlessly with urban landscapes, using weather-resistant materials and interactive tech to ensure durability and engagement in any environment.</p>
                <div className="image-gallery flex flex-col md:flex-row justify-center mt-4 max-w-[1200px] mx-auto px-4 gap-4">
                    <img src={OutdoorAdvertisementPic1Img} alt="Outdoor Advertisement 1" className="w-full md:w-[48%] h-[250px] md:h-[300px] rounded-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" />
                    <img src={OutdoorAdvertisementPic3Img} alt="Outdoor Advertisement 2" className="w-full md:w-[48%] h-[250px] md:h-[300px] rounded-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" />
                </div>
                <div className="points w-full max-w-[1200px] px-4 md:px-8 mx-auto pt-6 leading-6">
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
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 outdoor-animation-offer">
                <h1 className="subheading pt-6 md:pt-8 px-4 md:pl-2 text-xl md:text-2xl font-bold text-left">What we have to offer</h1>

                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">Thumbeja Publicity delivers end-to-end outdoor advertising solutions tailored for businesses seeking bold, unmissable visibility. Our portfolio spans highway billboards, mall kiosks, bus shelters, and digital signage networks, combined with creative services like custom graphics and AR-enhanced displays to captivate on-the-go audiences and boost foot traffic or inquiries.</p>
                <p className="paragraph2 leading-7 md:leading-8 px-4 md:pl-2 pt-4 pb-4 text-base md:text-lg text-left">We collaborate closely with local authorities for compliant installations and track real-time metrics via geofencing and footfall counters. Whether launching a seasonal promo or a long-term awareness drive, our expertise ensures your message dominates the skyline. Businesses often refresh outdoor strategies to align with evolving markets, proving that evolution keeps brands fresh and relevant.</p>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-8 outdoor-animation-optimizations">
                <h1 className="heading pt-6 md:pt-8 px-4 md:pl-2 text-2xl md:text-3xl lg:text-4xl font-bold text-left">Outdoor advertising optimizations and ongoing support</h1>
                <p className="paragraph1 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">At Thumbeja Publicity, our outdoor advertising optimizations fine-tune campaigns with A/B testing on creatives, audience flow analysis, and eco-friendly upgrades, maximizing ROI in prime locations while minimizing environmental impact.</p>
                <p className="paragraph2 leading-7 md:leading-8 px-4 md:pl-2 pt-4 text-base md:text-lg text-left">We offer seamless ongoing support, including routine maintenance, performance reporting, and adaptive adjustments to traffic patterns or regulations, empowering your brand to maintain dominance in the out-of-home space without missing a beat.</p>
            </div>
            <GetInTouch mountainImage={mountain} />
            <Footer/>
        </div>

    );
};

export default OutdoorAdvertising;