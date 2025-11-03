import './VideoMarketing.css';
import Header from '../../header/Header.jsx';
import Footer from "../../Footer/Footer.jsx";
import {GetInTouch} from "../Services.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faVideo, faFilm, faPlay} from "@fortawesome/free-solid-svg-icons";
import SEO from "../../SEO/SEO.jsx";

const VideoMarketing = () => {
    const services = [
        "Explainer Videos - Simplify complex concepts",
        "Product Demonstrations - Showcase features effectively",
        "Event Coverage - Capture memorable moments",
        "Social Media Reels - Short-form engaging content",
        "Corporate Videos - Professional brand storytelling",
        "Testimonial Videos - Build trust with real stories"
    ];

    return (
        <div className="video-marketing-page bg-[#fefdf7] min-h-screen">
            <SEO 
                title="Video Marketing Services - Explainer Videos, Reels & Product Demos"
                description="Professional video marketing services including explainer videos, product demonstrations, event coverage, social media reels, and corporate videos for engaging storytelling."
                keywords="video marketing, explainer videos, product demo videos, social media reels, corporate videos, video production Mangalore"
                url="https://thumbejapublicity.com/services/video-marketing-mangalore"
            />
            <Header/>
            
            {/* Hero Section */}
            <div className="max-w-[1200px] m-auto px-8 py-16">
                <h1 className="text-5xl font-bold text-[#091e42] mb-6">Video Marketing</h1>
                <p className="text-xl text-gray-600 leading-8 mb-4">
                    Create compelling videos including explainers, events, product demos, and reels that capture attention, 
                    tell stories effectively, and leave a lasting impression across all digital platforms.
                </p>
                <p className="text-lg text-gray-600 leading-8">
                    Video marketing is one of the most powerful tools for engaging audiences and driving conversions in today's digital landscape.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="max-w-[1200px] m-auto px-8 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-[#5D47AC] p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg" style={{color: 'white'}}>
                        <FontAwesomeIcon icon={faVideo} size="3x" className="mb-4" style={{color: 'white'}}/>
                        <h3 className="text-2xl font-semibold mb-3" style={{color: 'white'}}>Professional Production</h3>
                        <p style={{color: 'white'}}>High-quality video production with professional equipment and editing</p>
                    </div>
                    <div className="bg-[#091e42] p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg" style={{color: 'white'}}>
                        <FontAwesomeIcon icon={faFilm} size="3x" className="mb-4" style={{color: 'white'}}/>
                        <h3 className="text-2xl font-semibold mb-3" style={{color: 'white'}}>Creative Storytelling</h3>
                        <p style={{color: 'white'}}>Engaging narratives that connect with your audience emotionally</p>
                    </div>
                    <div className="bg-[#5D47AC] p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg" style={{color: 'white'}}>
                        <FontAwesomeIcon icon={faPlay} size="3x" className="mb-4" style={{color: 'white'}}/>
                        <h3 className="text-2xl font-semibold mb-3" style={{color: 'white'}}>Multi-Platform</h3>
                        <p style={{color: 'white'}}>Optimized for all platforms - YouTube, Instagram, Facebook, LinkedIn</p>
                    </div>
                </div>
            </div>

            {/* Services List */}
            <div className="max-w-[1200px] m-auto px-8 mb-16">
                <h2 className="text-4xl font-bold text-[#091e42] mb-6">Our Video Services</h2>
                <p className="text-lg text-gray-700 leading-8 mb-8">
                    Comprehensive video production services tailored to your marketing needs.
                </p>
                <ul className="space-y-4">
                    {services.map((service, index) => (
                        <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <FontAwesomeIcon icon={faCheck} className="text-[#5D47AC] mr-4 mt-1" size="lg"/>
                            <span className="text-lg text-gray-800">{service}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-[#5D47AC] to-[#091e42] py-16 mb-16" style={{color: 'white'}}>
                <div className="max-w-[1200px] m-auto px-8">
                    <h2 className="text-4xl font-bold mb-6" style={{color: 'white'}}>Why Video Marketing?</h2>
                    <p className="text-lg leading-8 mb-4" style={{color: 'white'}}>
                        Our team creates visually stunning, strategically crafted videos that tell your brand's story and resonate with your target audience across all digital channels.
                    </p>
                    <p className="text-lg leading-8" style={{color: 'white'}}>
                        From concept to final delivery, we handle every aspect of video production to ensure your message is communicated effectively and memorably.
                    </p>
                </div>
            </div>

            <GetInTouch />
            <Footer/>
        </div>
    );
};

export default VideoMarketing;
