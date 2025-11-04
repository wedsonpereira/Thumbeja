import './DigitalMarketing.css';
import Header from '../../header/Header.jsx';
import DigitalMarketingImg from '../../../assets/Images/DigitalMarketing.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faChartLine, faSearch, faBullhorn} from "@fortawesome/free-solid-svg-icons";
import {services1, services2,services3} from "../../../assets/JsonData/Servicesdata/DigitalMarketing.js";
import Footer from "../../Footer/Footer.jsx";
import {GetInTouch} from "../Services.jsx";
import SEO from "../../SEO/SEO.jsx";

const DigitalMarketing = () => {
    return (
        <div className="digital-marketing-page bg-[#fefdf7] min-h-screen">
            <SEO 
                title="Digital Marketing Services - SEO, Google Ads & Social Media"
                description="Comprehensive digital marketing services including SEO, Google Ads, social media marketing, and content strategy to boost your online presence and drive conversions."
                keywords="digital marketing, SEO services, Google Ads, search engine marketing, social media marketing, content marketing, online advertising"
                url="https://thumbejapublicity.com/services/digital-marketing-mangalore"
            />
            <Header/>
            
            {/* Hero Section */}
            <div className="max-w-[1200px] m-auto px-8 py-16">
                <h1 className="text-5xl font-bold text-[#091e42] mb-6">Digital Marketing</h1>
                <p className="text-xl text-gray-600 leading-8 mb-4">
                    Digital marketing encompasses a dynamic array of strategies designed to connect businesses with their audiences in the digital realm.
                </p>
                <p className="text-lg text-gray-600 leading-8">
                    Beyond promotion, digital marketing fosters authentic relationships by emphasizing storytelling and value creation, turning passive viewers into loyal advocates through personalized experiences and interactive content.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="max-w-[1200px] m-auto px-8 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-[#5D47AC] p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg" style={{color: 'white'}}>
                        <FontAwesomeIcon icon={faSearch} size="3x" className="mb-4" style={{color: 'white'}}/>
                        <h3 className="text-2xl font-semibold mb-3" style={{color: 'white'}}>SEO Optimization</h3>
                        <p style={{color: 'white'}}>Rank higher on search engines and drive organic traffic to your website</p>
                    </div>
                    <div className="bg-[#091e42] p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg" style={{color: 'white'}}>
                        <FontAwesomeIcon icon={faBullhorn} size="3x" className="mb-4" style={{color: 'white'}}/>
                        <h3 className="text-2xl font-semibold mb-3" style={{color: 'white'}}>Google Ads</h3>
                        <p style={{color: 'white'}}>Targeted advertising campaigns that deliver measurable results</p>
                    </div>
                    <div className="bg-[#5D47AC] p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg" style={{color: 'white'}}>
                        <FontAwesomeIcon icon={faChartLine} size="3x" className="mb-4" style={{color: 'white'}}/>
                        <h3 className="text-2xl font-semibold mb-3" style={{color: 'white'}}>Analytics & Insights</h3>
                        <p style={{color: 'white'}}>Data-driven strategies to optimize your marketing performance</p>
                    </div>
                </div>
            </div>

            {/* Main Image */}
            <div className="max-w-[1200px] m-auto px-8 mb-16">
                <img src={DigitalMarketingImg} className="w-full rounded-2xl shadow-2xl" alt="Digital Marketing Services"/>
            </div>

            {/* Services Section 1 */}
            <div className="max-w-[1200px] m-auto px-8 mb-16">
                <h2 className="text-4xl font-bold text-[#091e42] mb-6">Brand & Marketing Evaluations</h2>
                <p className="text-lg text-gray-700 leading-8 mb-8">
                    Beyond promotion, digital marketing fosters authentic relationships by emphasizing storytelling and value creation, turning passive viewers into loyal advocates through personalized experiences and interactive content.
                </p>
                <ul className="space-y-4">
                    {services1.map((service, index) => (
                        <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <FontAwesomeIcon icon={faCheck} className="text-[#5D47AC] mr-4 mt-1" size="lg"/>
                            <span className="text-lg text-gray-800">{service}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Branding & Marketing Section */}
            <div className="bg-gradient-to-r from-[#5D47AC] to-[#091e42] py-16 mb-16" style={{color: 'white'}}>
                <div className="max-w-[1200px] m-auto px-8">
                    <h2 className="text-4xl font-bold mb-6" style={{color: 'white'}}>Branding & Marketing</h2>
                    <p className="text-lg leading-8 mb-8" style={{color: 'white'}}>
                        Branding and marketing at Thumbeja Publicity represent a seamless fusion of creative storytelling, strategic innovation, and measurable impact, designed to elevate your business from visibility to unforgettable presence.
                    </p>
                    <ul className="space-y-4">
                        {services2.map((service, index) => (
                            <li key={index} className="flex items-start bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30">
                                <FontAwesomeIcon icon={faCheck} className="mr-4 mt-1 flex-shrink-0" style={{color: 'white'}} size="lg"/>
                                <span className="text-lg" style={{color: 'white'}}>{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Services Section 3 */}
            <div className="max-w-[1200px] m-auto px-8 mb-16">
                <h2 className="text-4xl font-bold text-[#091e42] mb-6">What Our Services Include</h2>
                <p className="text-lg text-gray-700 leading-8 mb-8">
                    Comprehensive digital marketing solutions tailored to your business needs.
                </p>
                <ul className="space-y-4">
                    {services3.map((service, index) => (
                        <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <FontAwesomeIcon icon={faCheck} className="text-[#5D47AC] mr-4 mt-1" size="lg"/>
                            <span className="text-lg text-gray-800">{service}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* What We Offer */}
            <div className="max-w-[1200px] m-auto px-8 mb-16">
                <h2 className="text-4xl font-bold text-[#091e42] mb-6">What We Offer</h2>
                <p className="text-lg text-gray-700 leading-8 mb-4">
                    Thumbeja Publicity offers comprehensive branding and marketing services to businesses of all sizes and industries, enhancing online visibility, generating leads, and driving sales through innovative digital and traditional strategies.
                </p>
                <p className="text-lg text-gray-700 leading-8">
                    We leverage cutting-edge tools and creativity to keep you ahead of the competition and achieve your growth goals.
                </p>
            </div>

            {/* Testimonial */}
            <div className="max-w-[1200px] m-auto px-8 mb-16">
                <div className="bg-gradient-to-br from-[#091e42] to-[#1a2744] p-12 rounded-2xl shadow-2xl" style={{color: 'white'}}>
                    <div className="text-center">
                        <span className="text-8xl font-bold opacity-30" style={{color: 'white'}}>"</span>
                        <p className="text-xl italic leading-relaxed mt-4" style={{color: 'white'}}>
                            This platform has not only simplified our processes but also given us valuable insights. The intuitive interface and robust tools have made a significant difference in our decision-making.
                        </p>
                    </div>
                </div>
            </div>

            {/* Ongoing Support */}
            <div className="max-w-[1200px] m-auto px-8 mb-16">
                <h2 className="text-4xl font-bold text-[#091e42] mb-6">Ongoing Support & Optimization</h2>
                <p className="text-lg text-gray-700 leading-8 mb-4">
                    At Thumbeja Publicity, we specialize in crafting unique brand identities that resonate with target audiences, driving meaningful connections and long-term growth.
                </p>
                <p className="text-lg text-gray-700 leading-8">
                    We provide comprehensive ongoing support, from continuous performance audits and adaptive campaign tweaks to dedicated relationship management, helping clients evolve their brands without disruption.
                </p>
            </div>

            <GetInTouch />
            <Footer/>
        </div>
    );
};

export default DigitalMarketing;
