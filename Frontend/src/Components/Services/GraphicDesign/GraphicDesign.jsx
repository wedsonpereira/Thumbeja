import React from 'react';  // Add this at the top
import './GraphicDesign.css';
import Header from '../../header/Header.jsx';
import '../../../index.css'
import GraphicDesignImg from '../../../assets/Images/GraphicDesign.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Footer/Footer.jsx";
import {GetInTouch} from "../Services.jsx";
import {galleries, services4,logoGallery} from "../../../assets/JsonData/Servicesdata/GraphicDesign.js";


const GraphicDesign = () => {


    return (
        <div className="DigitalMarketing max-width-[2000px] min-h-[60rem]">
            <Header/>
            <div className="DigitalMarketingbox1 max-w-300  m-auto ">
                <h1 className="heading pt-[4rem] pl-[2.5rem] "
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "2.3rem"}}> Graphic Design</h1>
                <p className="paragraph1 leading-8 pl-[2.5rem] " style={{textAlign: 'left'}}>Graphic design is a creative discipline that blends art, technology, and communication to visually convey ideas, messages, and brands. At its core, it involves the strategic use of elements like color, typography, imagery, and layout to craft compelling visuals that resonate with audiences. </p>
                <p className="paragraph2 leading-8 pl-[2.5rem] pt-[0.9rem] " style={{textAlign: 'left'}}>In today's fast-paced digital landscape, graphic design plays a pivotal role in brand identity and marketing success. Effective designs can differentiate a business in crowded markets, fostering trust and loyalty among consumers. For instance, a well-designed logo becomes synonymous with quality, while infographics make data digestible and shareable on platforms like Instagram or LinkedIn.
                </p>
            </div>
            <div className="ImageSection pt-10 max-width-[2000px] min-h-[14rem] ">
                <img src={GraphicDesignImg} className="DigitalMarketingImg w-[65%] rounded-2xl mt-0 mb-0 m-auto"
                     alt="Digital Marketing"/>
            </div>


            <div className="DigitalMarketingbox2 max-w-300  m-auto ">
                <h1 className="heading pt-[2rem] pl-[2.5rem] "
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}> What types of services of do we provide?</h1>
            </div>
            <div className="points max-w-300 pl-14 m-auto  pt-6 leading-6" >
                <ul className="services-list" >
                    {services4.map((service, index) => (
                        <li key={index} style={{marginBottom: '10px', fontSize: '1rem'}}>
                            <FontAwesomeIcon icon={faCheck} size="xl"/>
                            {service}x
                        </li>
                    ))}
                </ul>
            </div>
            <div className="Subheadingmain max-w-300  m-auto ">
                <h1 className="subheading pt-[1.5rem] pl-[2.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>Our Works :
                </h1>
                <h2 className="subheading pt-[1.5rem] pl-[2.5rem] "
                    style={{textAlign: 'center', fontWeight: 'bold', fontSize: "1.6rem"}}>Posters
                </h2>
                <div className="Subheadingmain max-w-270  m-auto ">
                    <div className="Subheadingmain max-w-270 m-auto">
                        {galleries.map((gallery, galleryIndex) => (
                            <div
                                key={galleryIndex}
                                className="image-gallery flex justify-around mt-4 max-w-450 mx-auto gap-4 transition-transform duration-300 hover:scale-105"
                            >
                                {gallery.map((item, index) => (
                                    <img
                                        key={index}
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-1/4 rounded-lg object-cover transition-transform duration-300 hover:scale-115"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>


                </div>
                <h2 className="subheading pt-[1.5rem] pl-[2.5rem] mt-5  "
                    style={{textAlign: 'center', fontWeight: 'bold', fontSize: "1.6rem" }}>Logos
                </h2>
                <div className="Subheadingmain max-w-270  m-auto ">
                    <div className="Subheadingmain max-w-270 m-auto">
                        {logoGallery.map((gallery, galleryIndex) => (
                            <div
                                key={galleryIndex}
                                className="image-gallery flex justify-around mt-4 max-w-450 mx-auto gap-4 transition-transform duration-300 hover:scale-105"
                            >
                                {gallery.map((item, index) => (
                                    <img
                                        key={index}
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-1/3  rounded-lg object-cover transition-transform duration-300 hover:scale-115"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>


                </div>

            </div>
            <div className="4th para max-w-300  m-auto">
                <h1 className="subheading pt-[1.5rem] pl-[2.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>What we offer
                </h1>

                <p className="paragraph1 leading-8 pl-[2.5rem] pt-3" style={{textAlign: 'left'}}>
                    At Thumbeja Publicity, we deliver innovative digital marketing to boost your brand's visibility and growth. Our services include SEO and Google Ads for top search rankings and targeted traffic, plus engaging social media campaigns on Instagram, Facebook, and LinkedIn with influencer partnerships. We create compelling videos and implement WhatsApp automation to personalize interactions, driving engagement and leads through every channel.
                </p>
                <p className="paragraph2 leading-8 pl-[2.5rem] pt-3" style={{textAlign: 'left'}}>
                    We integrate CRM tools like HubSpot for streamlined customer management and build responsive websites using React.js, optimized for SEO and conversions. With data analytics and A/B testing, we refine strategies for real-time results, helping businesses achieve higher ROI and online dominance. Partner with Thumbeja for a complete digital ecosystem tailored to your success.
                </p>


            </div>

            <div className="DigitalMarketingboxN max-w-300 m-auto mt-10">
                <h1 className="heading pl-[2.5rem]" style={{textAlign: 'left', fontWeight: 'bold', fontSize: "2.3rem"}}>Digital Marketing Optimizations and Ongoing Support</h1>
                <p className="paragraph1 leading-8 mt-4 pl-[2.5rem]" style={{textAlign: 'left'}}>
                    At Thumbeja Publicity, we excel in optimizing digital marketing strategies to elevate your online presence and accelerate growth. Our services focus on refining SEO, PPC campaigns, and social media tactics with data-driven insights, ensuring targeted reach, higher conversion rates, and seamless integration across platforms like Google, Facebook, and Instagram.
                </p>
                <p className="paragraph2 leading-8 pl-[2.5rem] pt-[0.9rem]" style={{textAlign: 'left'}}>
                    We deliver unwavering ongoing support through regular analytics reviews, real-time campaign adjustments, and personalized consulting, empowering your digital efforts to adapt and scale effortlessly. From fine-tuning ad performance to enhancing content strategies, our dedicated team at Thumbeja Publicity keeps your digital marketing innovative and effective, driving sustained ROI without interruptions.
                </p>
            </div>
            <GetInTouch />
            <Footer/>
        </div>

    );
};

export default GraphicDesign;

