import React from 'react';  // Add this at the top
import './DigitalMarketing.css';
import Header from '../../header/Header.jsx';
import '../../../index.css'
import DigitalMarketingImg from '../../../assets/Images/DigitalMarketing.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {services1, services2,services3} from "../../../assets/JsonData/Servicesdata/DigitalMarketing.js";
import Footer from "../../Footer/Footer.jsx";
import {GetInTouch} from "../Services.jsx";
const DigitalMarketing = () => {

        return (
            <div className="DigitalMarketing max-width-[2000px] min-h-[60rem]">
                <Header/>
                <div className="DigitalMarketingbox1 max-w-300  m-auto ">
                    <h1 className="heading pt-[4rem] pl-[2.5rem] "
                        style={{textAlign: 'left', fontWeight: 'bold', fontSize: "2.3rem"}}> Digital Marketing</h1>
                    <p className="paragraph1 leading-8 pl-[2.5rem] " style={{textAlign: 'left'}}>Digital marketing
                        encompasses a dynamic array of strategies designed to connect businesses with their audiences in
                        the digital realm.</p>
                    <p className="paragraph2 leading-8 pl-[2.5rem] pt-[0.9rem] " style={{textAlign: 'left'}}>1Beyond
                        promotion, digital marketing fosters authentic relationships by emphasizing storytelling and
                        value creation, turning passive viewers into loyal advocates through personalized experiences
                        and interactive content.</p>
                </div>
                <div className="ImageSection pt-10 max-width-[2000px] min-h-[14rem] ">
                    <img src={DigitalMarketingImg} className="DigitalMarketingImg w-[65%] rounded-2xl mt-0 mb-0 m-auto"
                         alt="Digital Marketing"/>
                </div>
                <div>
                    <p className="paragraph1 leading-8 pl-[2.5rem] max-w-300  m-auto pt-8" style={{textAlign: 'left'}}>2Beyond
                        promotion, digital marketing fosters authentic relationships by emphasizing storytelling and value
                        creation, turning passive viewers into loyal advocates through personalized experiences and
                        interactive content.
                    </p>
                </div>
                <div className="Subheadingmain max-w-300  m-auto">
                    <h1 className="subheading pt-[1.5rem] pl-[2.5rem]"
                        style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>What do our branding &
                        marketing services include
                    </h1>
                    <h2 className="subheading pt-[1.5rem] pl-[2.5rem]"
                        style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.4rem"}}>Brand & Marketing
                        Evaluations
                    </h2>
                    <p className="paragraph1 leading-8 pl-[2.5rem] pt-6" style={{textAlign: 'left'}}>Beyond promotion,
                        digital marketing fosters authentic relationships by emphasizing storytelling and value
                        creation, turning passive viewers into loyal advocates through personalized experiences and
                        interactive content.
                    </p>
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
                        style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}> Branding & marketing</h1>
                    <p className="paragraph1 leading-8 pl-[2.5rem] " style={{textAlign: 'left'}}>Branding and marketing at Thumbeja Publicity represent a seamless fusion of creative storytelling, strategic innovation, and measurable impact, designed to elevate your business from visibility to unforgettable presence. We craft comprehensive branding solutions—from corporate stationery, marketing collaterals, and merchandise printing to event and personal branding with custom ID cards, badges, and signage—that embody your identity with professional precision.</p>
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
                        style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>What do our branding &
                        marketing services include
                    </h1>

                    <p className="paragraph1 leading-8 pl-[2.5rem] pt-6" style={{textAlign: 'left'}}>Beyond promotion,
                        digital marketing fosters authentic relationships by emphasizing storytelling and value
                        creation, turning passive viewers into loyal advocates through personalized experiences and
                        interactive content.
                    </p>
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
                        style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>What we have offer
                    </h1>

                    <p className="paragraph1 leading-8 pl-[2.5rem] pt-3" style={{textAlign: 'left'}}>Thumbeja Publicity offers comprehensive branding and marketing services to businesses of all sizes and industries, enhancing online visibility, generating leads, and driving sales through innovative digital and traditional strategies. From search engine marketing with Google Ads and SEO to social media campaigns, video production, WhatsApp automation, CRM management, website development, corporate stationery, marketing collaterals, event branding, signage, merchandise printing, and outdoor advertising like banners and LED displays, we leverage cutting-edge tools and creativity to keep you ahead of the competition and achieve your growth goals. We love to bring designs to life as developers, and we aim to do this using whatever front-end tools are necessary.
                    </p>
                    <p className="paragraph2 leading-8 pl-[2.5rem] pt-3" style={{textAlign: 'left'}}>Our preferred tools are more modern JavaScript libraries like React.js but we like to use whatever is best for the website's needs. There are several reasons why a business would consider a rebrand and it doesn’t necessarily mean the business has been unsuccessful.   </p>


                </div>
                <div className="bg w-[55%] min-h-[20rem] bg-black m-auto mt-5 h-[18rem] rounded-2xl mb-8">
                    <div className="Box font-extralight  ">
                        <div className="apostrophe flex w-[100%] text-white h-[5rem] items-center justify-center" >
                           <span className="h-[100%] w-[100%] text-center  mt-24" style={{fontFamily:"Passion One", fontSize: "10rem",transform: "rotate(180deg)"}}>"</span>
                        </div>
                    </div>
                            <div className="text flex  w-[90%] m-auto text-white items-center justify-center text-center" style={{ fontSize: "1.1em"}}>
                                "This platform has not only simplified our accounting processes but also given us valuable insights into our financial health. The intuitive interface and robust reporting tools have made a significant difference in our decision-making."
                            </div>
                </div>
                <div className="DigitalMarketingboxN max-w-300  m-auto ">
                    <h1 className="heading pl-[2.5rem] "
                        style={{textAlign: 'left', fontWeight: 'bold', fontSize: "2.3rem"}}> Branding & marketing optimizations and ongoing support
                    </h1>
                    <p className="paragraph1 leading-8 mt-4 pl-[2.5rem] " style={{textAlign: 'left'}}>At Thumbeja Publicity, we specialize in crafting unique brand identities that resonate with target audiences, driving meaningful connections and long-term growth. Our branding and marketing optimization services leverage cutting-edge strategies to enhance online visibility, refine messaging, and amplify engagement across digital channels, ensuring businesses stand out in competitive markets.
                    </p>
                    <p className="paragraph2 leading-8 pl-[2.5rem] pt-[0.9rem] " style={{textAlign: 'left'}}>We provide comprehensive ongoing support, from continuous performance audits and adaptive campaign tweaks to dedicated relationship management, helping clients evolve their brands without disruption. Whether refreshing an established identity or scaling new initiatives, our tailored approach empowers businesses to thrive, proving that strategic rebrands are about innovation, not just recovery.
                    </p>
                </div>
                <GetInTouch />
                <Footer/>
            </div>

        );
    };

export default DigitalMarketing;