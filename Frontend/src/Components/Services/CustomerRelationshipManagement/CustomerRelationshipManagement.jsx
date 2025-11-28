import React from 'react';
import './CustomerRelationshipManagement.css';
import Header from '../../header/Header.jsx';
import '../../../index.css'
import CustomerRelationshipManagementImg from '../../../assets/Images/CustomerRelationshipManagement.jpeg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {services1, services2,services3} from "../../../assets/JsonData/Servicesdata/DigitalMarketing.js";
import CRMImage2Img from "../../../assets/Images/CRMImage2Img.png";
import CRMSystemEvaluationsImg from "../../../assets/Images/CRMSystemEvaluationsImg.png";
import Footer from "../../Footer/Footer.jsx";
import {GetInTouch} from "../../GetInTouch/GetInTouch.jsx";
import mountain from "../../../assets/Images/Gemini_Generated_Image_su9pixsu9pixsu9p.png";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const CustomerRelationshipManagement = () => {
    useGSAP(() => {
        // Use smaller slide distance on mobile
        const isMobile = window.innerWidth < 768;
        const slideDistance = isMobile ? -50 : -150;
        
        gsap.from(".crm-animation-1", {
            scrollTrigger: {
                trigger: ".crm-animation-1",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".crm-animation-2", {
            scrollTrigger: {
                trigger: ".crm-animation-2",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".crm-animation-3", {
            scrollTrigger: {
                trigger: ".crm-animation-3",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',    
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".crm-animation-4", {
            scrollTrigger: {
                trigger: ".crm-animation-4",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".crm-animation-5", {
            scrollTrigger: {
                trigger: ".crm-animation-5",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".crm-animation-6", {
            scrollTrigger: {
                trigger: ".crm-animation-6",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".crm-animation-final", {
            scrollTrigger: {
                trigger: ".crm-animation-final",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".crm-animation-offer", {
            scrollTrigger: {
                trigger: ".crm-animation-offer",
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
        <div className="DigitalMarketing max-width-[2000px] min-h-[60rem] pt-24">
            <Header/>
            <div className="DigitalMarketingbox1 max-w-300  m-auto crm-animation-1">
                <h1 className="heading pt-[4rem] pl-[1.5rem] "
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "2.3rem"}}> Customer Relationship Management</h1>
                <p className="paragraph1 leading-8 pl-[1.5rem] " style={{textAlign: 'left'}}>Customer Relationship Management (CRM) at Thumbeja Publicity is a comprehensive approach to managing a company's interactions with current and potential customers, leveraging data-driven strategies to enhance customer satisfaction and loyalty.</p>
                <p className="paragraph2 leading-8 pl-[1.5rem] pt-[0.9rem] " style={{textAlign: 'left'}}>Our CRM solutions go beyond basic data tracking, fostering long-term relationships through personalized communication, automated workflows, and insightful analytics that turn customer insights into actionable growth opportunities.</p>
            </div>
            <div className="max-w-[900px] m-auto px-8 py-6 mb-8 crm-animation-2">
                <img src={CustomerRelationshipManagementImg} className="w-full rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" style={{display: 'block'}}
                     alt="Customer Relationship Management"/>
            </div>
            <div className="crm-animation-3">
                <p className="paragraph1 leading-8 pl-[1.5rem] max-w-300  m-auto" style={{textAlign: 'left'}}>Effective CRM implementation helps businesses streamline sales processes, improve customer service, and boost retention rates by delivering tailored experiences that anticipate needs and resolve issues proactively.</p>
            </div>
            <div className="Subheadingmain max-w-300  m-auto crm-animation-4">
                <h1 className="subheading pt-[1.5rem] pl-[1.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>CRM System Evaluations
                </h1>
                
                <p className="paragraph1 leading-8 pl-[1.5rem] pt-2" style={{textAlign: 'left'}}>We assess your existing customer data infrastructure to identify gaps and opportunities, ensuring seamless integration of CRM tools that align with your business objectives and enhance overall efficiency.</p>
                <div className="max-w-[900px] m-auto px-8 py-6 mb-8">
                    <img src={CRMSystemEvaluationsImg} className="w-full rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" style={{display: 'block'}}
                         alt="CRM System Evaluations"/>
                </div>
                <div className="points max-w-450 pl-10 m-auto  pt-4 leading-6" >
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
            <div className="DigitalMarketingbox2 max-w-300  m-auto crm-animation-5">
                <h1 className="heading pt-[2rem] pl-[1.5rem] "
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}> CRM Implementation</h1>
                <p className="paragraph1 leading-8 pl-[1.5rem] " style={{textAlign: 'left'}}>At Thumbeja Publicity, our CRM services empower businesses to build stronger customer connections through integrated platforms that centralize data, automate interactions, and provide real-time insights for informed decision-making across sales, marketing, and support teams.</p>
            </div>
            <div className="points max-w-300 pl-8 m-auto  pt-6 leading-6 crm-animation-5" >
                <ul className="services-list" >
                    {services2.map((service, index) => (
                        <li key={index} style={{marginBottom: '0.625rem', fontSize: '1rem'}}>
                            <FontAwesomeIcon icon={faCheck} size="xl"/>
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="Subheadingmain max-w-300  m-auto crm-animation-6">
                <h1 className="subheading pt-[1.5rem] pl-[1.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>What do our CRM services include
                </h1>

                <p className="paragraph1 leading-8 pl-[1.5rem] pt-2" style={{textAlign: 'left'}}>Our tailored CRM strategies include everything from lead nurturing and customer segmentation to performance tracking and feedback loops, all designed to maximize customer lifetime value and drive sustainable revenue growth.</p>
                <div className="max-w-[900px] m-auto px-8 py-6 mb-8">
                    <img src={CRMImage2Img} className="w-full rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" style={{display: 'block'}}
                         alt="CRM Solutions"/>
                </div>
                <div className="points max-w-450 pl-8 m-auto  pt-2 leading-6" >
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
            <div className="4th para max-w-300  m-auto crm-animation-offer">
                <h1 className="subheading pt-[1.5rem] pl-[1.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>What we have to offer
                </h1>

                <p className="paragraph1 leading-8 pl-[1.5rem] pt-3" style={{textAlign: 'left'}}>Thumbeja Publicity delivers end-to-end CRM solutions customized for businesses seeking to optimize customer engagement and operational efficiency. From deploying advanced CRM software like Salesforce or HubSpot integrations to developing custom dashboards and automation workflows, we ensure your systems support scalable growth while maintaining data security and compliance.</p>
                <p className="paragraph2 leading-8 pl-[1.5rem] pt-3" style={{textAlign: 'left'}}>We specialize in training your team on CRM best practices and providing ongoing consultation to adapt strategies as your business evolves, helping you transform customer data into a competitive advantage.</p>


            </div>

            <div className="DigitalMarketingboxN max-w-300  m-auto mt-4 crm-animation-final">
                <h1 className="heading pl-[1.5rem] "
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "2.3rem"}}> CRM Optimizations and Ongoing Support
                </h1>
                <p className="paragraph1 leading-8 mt-4 pl-[1.5rem] " style={{textAlign: 'left'}}>We offer continuous CRM optimization through regular audits, A/B testing of customer journeys, and predictive analytics to refine your approach and stay ahead of industry trends.</p>
                <p className="paragraph2 leading-8 pl-[1.5rem] pt-[0.9rem] " style={{textAlign: 'left'}}>Our dedicated support team provides 24/7 monitoring, custom reporting, and strategic advisory services, ensuring your CRM evolves with your business and delivers measurable ROI over the long term.</p>
            </div>
            <GetInTouch mountainImage={mountain} />
            <Footer/>
        </div>

    );
};

export default CustomerRelationshipManagement;