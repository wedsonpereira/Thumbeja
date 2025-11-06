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
        gsap.from(".social-handling-animation-1", {
            scrollTrigger: {
                trigger: ".social-handling-animation-1",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
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
            x: -150, 
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
            x: -150, 
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
            x: -150, 
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
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });
    }, []);

    return (
        <div className="DigitalMarketing max-width-[2000px] min-h-[60rem]">
            <Header/>
            <div className="DigitalMarketingbox1 max-w-300  m-auto ">
                <h1 className="heading pt-[4rem] pl-[2.5rem] "
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "2.3rem"}}> Social Media Handling</h1>
                <p className="paragraph1 leading-8 pl-[2.5rem] " style={{textAlign: 'left'}}>Social media handling involves expertly managing your brand's presence across platforms like Instagram, Facebook, Twitter, and LinkedIn to engage audiences, build communities, and drive conversions.</p>
                <p className="paragraph2 leading-8 pl-[2.5rem] pt-[0.9rem] " style={{textAlign: 'left'}}>Beyond mere posting, our social media handling creates meaningful interactions through targeted content, timely responses, and data-driven strategies, transforming followers into brand advocates and boosting overall visibility.</p>
            </div>
            <div className="image-gallery flex justify-around mt-4 w-175 mx-auto gap-4 ">  {/* Added gap-4 for even spacing */}
                <img src={SocialMedia1Img} alt="Poster 1" className="w-1/2 rounded-lg object-cover" />  {/* Added object-cover for better fit */}
                <img src={SocialMedia2Img} alt="Poster 2" className="w-1/2 rounded-lg object-cover " />  {/* Import & use a second image */}
            </div>
            <div>
                <p className="paragraph1 leading-8 pl-[2.5rem] max-w-300  m-auto pt-8" style={{textAlign: 'left'}}>Our approach ensures consistent branding, trend-aligned campaigns, and performance analytics to refine strategies, helping businesses stay relevant and connected in the fast-paced social landscape.</p>
            </div>
            <div className="Subheadingmain max-w-300  m-auto">
                <h1 className="subheading pt-[1.5rem] pl-[2.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>What do our social media
                    handling services include
                </h1>
                <h2 className="subheading pt-[1.5rem] pl-[2.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.4rem"}}>Social Media
                    Strategy & Planning
                </h2>

                <div className="image-gallery flex justify-around my-6 w-175  mx-auto gap-4 ">  {/* Added gap-4 for even spacing */}
                    <img src={SocialMedia3Img} alt="Poster 1" className=" rounded-lg object-cover" />  {/* Added object-cover for better fit */}
                </div>
                <p className="paragraph1 leading-8 pl-[2.5rem] pt-6" style={{textAlign: 'left'}}>We develop tailored social media strategies that align with your business goals, audience preferences, and platform best practices to maximize reach and engagement.</p>
                <div className="points max-w-450 pl-14 m-auto  pt-6 leading-6" >
                    <ul className="services-list" >
                        {services1.map((service, index) => (
                            <li key={index} style={{marginBottom: '10px', fontSize: '1rem'}}>
                                <FontAwesomeIcon icon={faCheck} size="xl"/>
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="DigitalMarketingbox2 max-w-300  m-auto ">
                <h1 className="heading pt-[2rem] pl-[2.5rem] "
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}> Social media management</h1>
                <p className="paragraph1 leading-8 pl-[2.5rem] " style={{textAlign: 'left'}}>At Thumbeja Publicity, social media management combines creative content curation, community engagement, and analytics to foster growth and loyalty. From daily posting schedules and visual storytelling to influencer collaborations and paid ad campaigns, we handle every aspect to ensure your social channels thrive.</p>
            </div>
            <div className="image-gallery flex justify-around my-4 w-175 mx-auto gap-4 ">  {/* Added gap-4 for even spacing */}
             <img src={SocialMedia7Img} alt="Poster 2" className=" rounded-lg object-cover " />  {/* Import & use a second image */}
            </div>
            <div className="points max-w-300 pl-14 m-auto  pt-6 leading-6" >
                <ul className="services-list" >
                    {services2.map((service, index) => (
                        <li key={index} style={{marginBottom: '10px', fontSize: '1rem'}}>
                            <FontAwesomeIcon icon={faCheck} size="xl"/>
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="Subheadingmain max-w-300  m-auto">
                <h1 className="subheading pt-[1.5rem] pl-[2.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>What do our social media
                    handling services include
                </h1>
                <p className="paragraph1 leading-8 pl-[2.5rem] pt-6" style={{textAlign: 'left'}}>Our services extend to crisis management, trend monitoring, and cross-platform integration, ensuring your brand remains agile and responsive in the ever-evolving social media ecosystem.</p>
                <div className="image-gallery flex justify-around mt-4 w-175  mx-auto gap-4 ">  {/* Added gap-4 for even spacing */}
                    <img src={SocialMedia5Img} alt="Poster 1" className=" rounded-lg object-cover" />  {/* Added object-cover for better fit */}
                </div>
                <div className="points max-w-450 pl-14 m-auto  pt-6 leading-6" >
                    <ul className="services-list" >
                        {services3.map((service, index) => (
                            <li key={index} style={{marginBottom: '10px', fontSize: '1rem'}}>
                                <FontAwesomeIcon icon={faCheck} size="xl"/>
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="4th para max-w-300  m-auto">
                <h1 className="subheading pt-[1.5rem] pl-[2.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>What we have to offer
                </h1>

                <p className="paragraph1 leading-8 pl-[2.5rem] pt-3" style={{textAlign: 'left'}}>Thumbeja Publicity delivers end-to-end social media handling for brands across industries, amplifying your voice through organic growth, targeted advertising, content creation, and performance tracking. We specialize in platform-specific tactics, from Instagram Reels and TikTok challenges to LinkedIn thought leadership and Twitter conversations, all while integrating with broader digital efforts to drive traffic, leads, and sales.</p>
                <p className="paragraph2 leading-8 pl-[2.5rem] pt-3" style={{textAlign: 'left'}}>Businesses often refresh their social media presence to adapt to new algorithms, audience shifts, or market trends—it's an opportunity for evolution, not a sign of failure. We use modern tools like scheduling software and AI analytics to keep your strategy fresh and effective.</p>


            </div>

            <div className="DigitalMarketingboxN max-w-300  m-auto ">
                <h1 className="heading pl-[2.5rem] "
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "2.3rem"}}> Social media optimizations and ongoing support
                </h1>
                <p className="paragraph1 leading-8 mt-4 pl-[2.5rem] " style={{textAlign: 'left'}}>We optimize social media performance through A/B testing, algorithm updates, and ROI-focused adjustments, ensuring your content cuts through the noise and delivers results. Our ongoing support includes monthly audits, trend forecasting, and dedicated account management to keep your social presence dynamic and aligned with business objectives.</p>
                <p className="paragraph2 leading-8 pl-[2.5rem] pt-[0.9rem] " style={{textAlign: 'left'}}>Whether launching a new campaign or sustaining momentum, our proactive approach helps brands navigate challenges, capitalize on opportunities, and build lasting digital communities that drive sustained growth.</p>
            </div>
            <GetInTouch mountainImage={mountain} />
            <Footer/>
        </div>

    );
};

export default SocialMediaHandling;