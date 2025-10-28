import React from 'react';  // Add this at the top
import './OutdoorAdvertising.css';
import Header from '../../header/Header.jsx';
import '../../../index.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {services1, services2,services3} from "../../../assets/JsonData/Servicesdata/DigitalMarketing.js";
import Footer from "../../Footer/Footer.jsx";
import {GetInTouch} from "../Services.jsx";
import OutdoorAdvertisingImg from "../../../assets/Images/OutdoorAdvertisement.png";
import VideoMarketing1Img from "../../../assets/Images/VideoMarketing1.png";
import SEO1Img from "../../../assets/Images/SEO1.png";
import OutdoorAdvertisementPic1Img from "../../../assets/Images/OutdoorAdvertisementPic1.png";
import OutdoorAdvertisementPic3Img from "../../../assets/Images/OutdoorAdvertisementPic3.png";
import OutdoorAdvertisementPic2Img from "../../../assets/Images/OutdoorAdvertisementPic2.png";
const OutdoorAdvertising = () => {

    return (
        <div className="DigitalMarketing max-width-[2000px] min-h-[60rem]">
            <Header/>
            <div className="DigitalMarketingbox1 max-w-300  m-auto ">
                <h1 className="heading pt-[4rem] pl-[2.5rem] "
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "2.3rem"}}> Outdoor Advertising</h1>
                <p className="paragraph1 leading-8 pl-[2.5rem] " style={{textAlign: 'left'}}>Outdoor advertising
                    leverages high-visibility public spaces to deliver compelling messages to diverse audiences, creating
                    immediate and lasting impressions through strategic placement and creative design.</p>
                <p className="paragraph2 leading-8 pl-[2.5rem] pt-[0.9rem] " style={{textAlign: 'left'}}>Beyond
                    static displays, outdoor advertising builds brand momentum by integrating dynamic elements like digital screens and experiential activations, transforming everyday environments into powerful engagement zones.</p>
            </div>
            <div className="ImageSection pt-10 max-width-[2000px] min-h-[14rem] ">
                <img src={OutdoorAdvertisingImg} className="CustomerRelationshipManagementImg w-[65%] rounded-2xl mt-0 mb-0 m-auto transition-transform duration-300 hover:scale-105"
                     alt="Customer Relationship Management"/>
            </div>
            <div>
                <p className="paragraph1 leading-8 pl-[2.5rem] max-w-300  m-auto pt-8" style={{textAlign: 'left'}}>From
                    billboards and transit wraps to street posters and digital out-of-home networks, outdoor advertising fosters
                    authentic connections by capturing attention in real-world contexts, turning commuters and passersby into engaged brand enthusiasts through bold visuals and targeted messaging.
                </p>
            </div>
            <div className="Subheadingmain max-w-300  m-auto">
                <h1 className="subheading pt-[1.5rem] pl-[2.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>What do our outdoor advertising
                    services include
                </h1>
                <h2 className="subheading  pl-[2.5rem] mb-[1.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.4rem"}}>Outdoor Advertising
                    Evaluations
                </h2>
                <p className="paragraph1 leading-8 pl-[2.5rem] pt-6" style={{textAlign: 'left'}}>Our evaluations assess site visibility, audience demographics, and campaign performance metrics to optimize outdoor placements, ensuring every ad dollar maximizes reach and impact in high-traffic areas.</p>
                <div className="Subheadingmain  max-w-275 m-auto ">
                    <div className="image-gallery flex justify-around mt-4 max-w-275 mx-auto gap-4 ">  {/* Added gap-4 for even spacing */}
                        <img src={SEO1Img} alt="Poster 1" className="w-1/2 rounded-lg object-cover transition-transform duration-300 hover:scale-105" />  {/* Added object-cover for better fit */}
                        <img src={VideoMarketing1Img} alt="Poster 2" className="w-1/2 rounded-lg object-cover transition-transform duration-300 hover:scale-105" />  {/* Import & use a second image */}

                    </div>
                </div>
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
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}> Outdoor Advertising</h1>
                <p className="paragraph1 leading-8 pl-[2.5rem] " style={{textAlign: 'left'}}>Outdoor advertising at Thumbeja Publicity blends innovative design, prime location scouting, and data-driven execution to amplify your brand's presence in the physical world. We handle everything from traditional billboards and vehicle wraps to cutting-edge LED displays and guerrilla installations, delivering campaigns that stop traffic—literally—and spark conversations wherever your audience roams.</p>
            </div>
            <div className="Subheadingmain  max-w-275 m-auto ">
                <div className="image-gallery flex justify-around mt-4 max-w-275 mx-auto gap-4 ">  {/* Added gap-4 for even spacing */}
                    <img src={OutdoorAdvertisementPic2Img} alt="Poster 2" className=" rounded-lg object-cover transition-transform duration-300 hover:scale-105" />  {/* Import & use a second image */}

                </div>
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
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>What do our outdoor advertising
                    services include
                </h1>

                <p className="paragraph1 leading-8 pl-[2.5rem] pt-6" style={{textAlign: 'left'}}>We specialize in creating immersive outdoor experiences that blend seamlessly with urban landscapes, using weather-resistant materials and interactive tech to ensure durability and engagement in any environment.</p>
                <div className="Subheadingmain  max-w-275 m-auto ">
                    <div className="image-gallery flex justify-around mt-4 max-w-275 mx-auto gap-4 ">  {/* Added gap-4 for even spacing */}
                        <img src={OutdoorAdvertisementPic1Img} alt="Poster 1" className="w-1/2 rounded-lg object-cover transition-transform duration-300 hover:scale-105" />  {/* Added object-cover for better fit */}
                        <img src={OutdoorAdvertisementPic3Img} alt="Poster 2" className="w-1/2 rounded-lg object-cover transition-transform duration-300 hover:scale-105" />  {/* Import & use a second image */}

                    </div>
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

                <p className="paragraph1 leading-8 pl-[2.5rem] pt-3" style={{textAlign: 'left'}}>Thumbeja Publicity delivers end-to-end outdoor advertising solutions tailored for businesses seeking bold, unmissable visibility. Our portfolio spans highway billboards, mall kiosks, bus shelters, and digital signage networks, combined with creative services like custom graphics and AR-enhanced displays to captivate on-the-go audiences and boost foot traffic or inquiries.</p>
                <p className="paragraph2 leading-8 pl-[2.5rem] pt-3" style={{textAlign: 'left'}}>We collaborate closely with local authorities for compliant installations and track real-time metrics via geofencing and footfall counters. Whether launching a seasonal promo or a long-term awareness drive, our expertise ensures your message dominates the skyline. Businesses often refresh outdoor strategies to align with evolving markets, proving that evolution keeps brands fresh and relevant.</p>


            </div>

            <div className="DigitalMarketingboxN max-w-300  m-auto ">
                <h1 className="heading pl-[2.5rem] "
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "2.3rem"}}> Outdoor advertising optimizations and ongoing support
                </h1>
                <p className="paragraph1 leading-8 mt-4 pl-[2.5rem] " style={{textAlign: 'left'}}>At Thumbeja Publicity, our outdoor advertising optimizations fine-tune campaigns with A/B testing on creatives, audience flow analysis, and eco-friendly upgrades, maximizing ROI in prime locations while minimizing environmental impact.</p>
                <p className="paragraph2 leading-8 pl-[2.5rem] pt-[0.9rem] " style={{textAlign: 'left'}}>We offer seamless ongoing support, including routine maintenance, performance reporting, and adaptive adjustments to traffic patterns or regulations, empowering your brand to maintain dominance in the out-of-home space without missing a beat.</p>
            </div>
            <GetInTouch />
            <Footer/>
        </div>

    );
};

export default OutdoorAdvertising;