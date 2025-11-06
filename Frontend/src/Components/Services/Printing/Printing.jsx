import React from 'react';
import './Printing.css';
import Header from '../../header/Header.jsx';
import '../../../index.css'
import OutdoorAdvertisingImg from '../../../assets/Images/Printing.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Footer/Footer.jsx";
import {GetInTouch} from "../../GetInTouch/GetInTouch.jsx";
import mountain from "../../../assets/Images/Gemini_Generated_Image_su9pixsu9pixsu9p.png";
import {services5} from "../../../assets/JsonData/Servicesdata/Printing.js";
import cardAnimations from "../../../assets/JsonData/CardAnimations/CardAnimations.js";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);




const Printing = () => {
    useGSAP(() => {
        gsap.from(".social-animation-1", {
            scrollTrigger: {
                trigger: ".social-animation-1",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
        
            }, 
            duration: 1.2, 
            x: -150, 
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
                start: "top 90%",
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
        <div className="DigitalMarketing max-width-[2000px] min-h-[60rem]">
            <Header/>
            <div className="DigitalMarketingbox1 max-w-300 m-auto mb-8 social-animation-1">
                <h1 className="heading pt-[4rem] pl-[2.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "2.3rem"}}>Printing</h1>
                <p className="paragraph1 leading-8 pl-[2.5rem]" style={{textAlign: 'left'}}>
                    At Thumbeja Publicity, our printing services deliver high-quality, custom solutions to bring your
                    brand to life in tangible ways. From corporate stationery and marketing collaterals like brochures
                    and flyers to eye-catching merchandise such as branded apparel and promotional items, we utilize
                    state-of-the-art digital and offset printing techniques to ensure vibrant colors, sharp details, and
                    durable finishes that align with your vision.
                </p>
                <p className="paragraph2 leading-8 pl-[2.5rem] pt-[0.9rem]" style={{textAlign: 'left'}}>
                    We extend our expertise to outdoor advertising with large-format prints including banners, posters,
                    and LED displays, designed for maximum impact and weather resistance. Beyond production, our team at
                    Thumbeja Publicity offers design consultation and quick turnaround times, empowering businesses to
                    create cohesive branding materials that captivate audiences and reinforce professional identities
                    across all touchpoints.
                </p>
            </div>
            <div className="max-w-[1200px] m-auto px-8 social-animation-2">
                <img src={OutdoorAdvertisingImg} className="w-full rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" style={{display: 'block'}}
                     alt="Printing Services"/>
            </div>
            <div className="social-animation-3">
                <p className="paragraph3 leading-8 pl-[2.5rem] pt-[0.9rem] max-w-300 m-auto "
                   style={{textAlign: 'left'}}>
                    Committed to sustainability, Thumbeja Publicity incorporates eco-friendly inks and recycled
                    materials in our printing processes, minimizing environmental impact while maintaining premium
                    quality. Our end-to-end service—from concept ideation to final delivery—ensures seamless execution,
                    helping clients distribute impactful print materials that complement digital efforts and build
                    lasting brand loyalty.
                </p>
            </div>
            <div className="Subheadingmain max-w-300  m-auto social-animation-branding">
                <h1 className="subheading pt-[1.5rem] pl-[2.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>What do our branding &
                    marketing services include
                </h1>


                <div className="points max-w-450 pl-14 m-auto  pt-6 leading-6">
                    <ul className="services-list">
                        {services5.map((service, index) => (
                            <li key={index} style={{marginBottom: '10px', fontSize: '1rem'}}>
                                <FontAwesomeIcon icon={faCheck} size="xl"/>
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="relative min-h-[30rem] w-full flex justify-center items-center flex-col p-1 social-animation-10">
                {/*Box 1*/}
                <div className={"w-[93%] flex items-center justify-center"}>
                    <h1 className="subheading h-full p-2 font-bold text-2xl">Our Works</h1>
                </div>

                {/*box 2*/}
                <div className=" w-full flex items-center justify-center min-h-[50rem] relative flex-wrap gap-6">
                    {cardAnimations.map((item, index) => {
                        return (
                            <div className={`p-3 ${item.type==="poster"? "container2" : "container1"}`} key={index}>
                                <div className="card1 border-amber-900">
                                    <div className="front">
                                        <img
                                            src={item.frontImage}
                                            alt={item.altFront || `Front side of card ${index + 1}`}
                                            className=" w-full h-full rounded-[2rem]"
                                        />
                                    </div>
                                    <div className="back">
                                        <img
                                            src={item.backImage}
                                            alt={item.altBack || `Back side of card ${index + 1}`}
                                            className=" w-full h-full rounded-[2rem]"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="4th para max-w-300 m-auto social-animation-offer">
                <h1 className="subheading pt-[1.5rem] pl-[2.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>What we have offer</h1>
                <p className="paragraph1 leading-8 pl-[2.5rem] pt-3" style={{textAlign: 'left'}}>
                    Thumbeja Publicity offers comprehensive branding and marketing services to businesses of all sizes
                    and industries, enhancing online visibility, generating leads, and driving sales through innovative
                    digital and traditional strategies. From search engine marketing with Google Ads and SEO to social
                    media campaigns, video production, WhatsApp automation, CRM management, website development,
                    corporate stationery, marketing collaterals, event branding, signage, merchandise printing, and
                    outdoor advertising like banners and LED displays, we leverage cutting-edge tools and creativity to
                    keep you ahead of the competition and achieve your growth goals. We love to bring designs to life as
                    developers, and we aim to do this using whatever front-end tools are necessary.
                </p>
                <p className="paragraph2 leading-8 pl-[2.5rem] pt-3" style={{textAlign: 'left'}}>
                    Our preferred tools are more modern JavaScript libraries like React.js but we like to use whatever
                    is best for the website's needs. There are several reasons why a business would consider a rebrand
                    and it doesn’t necessarily mean the business has been unsuccessful.
                </p>
            </div>

            <div className="DigitalMarketingboxN py-3 max-w-300 m-auto social-animation-final">
                <h1 className="heading pl-[2.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "2.3rem"}}>Printing Services and Custom
                    Solutions</h1>
                <p className="paragraph1 leading-8 mt-4 pl-[2.5rem]" style={{textAlign: 'left'}}>
                    At Thumbeja Publicity, our printing services provide high-quality, bespoke solutions that transform
                    your creative concepts into tangible assets, strengthening your brand's physical presence. We
                    specialize in everything from corporate stationery and marketing collaterals like brochures, flyers,
                    and business cards to custom merchandise such as branded apparel, mugs, and promotional giveaways,
                    all produced with precision using advanced digital and offset printing technologies for superior
                    color accuracy and durability.
                </p>
                <p className="paragraph2 leading-8 pl-[2.5rem] pt-[0.9rem]" style={{textAlign: 'left'}}>
                    Extending to large-scale projects, we handle signage, event branding, and outdoor advertising
                    including weather-resistant banners, posters, and LED displays that capture attention and convey
                    your message effectively. With expert design consultation, eco-friendly material options, and
                    efficient turnaround times, Thumbeja Publicity ensures your print materials seamlessly complement
                    digital efforts, fostering memorable customer experiences and elevating your overall marketing
                    impact.
                </p>
            </div>
            <GetInTouch mountainImage={mountain}/>
            <Footer/>
        </div>

    );
};

export default Printing;