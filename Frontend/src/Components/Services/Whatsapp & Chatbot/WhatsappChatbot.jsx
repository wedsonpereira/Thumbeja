import './WhatsappChatbot.css';
import Header from '../../header/Header.jsx';
import Footer from "../../Footer/Footer.jsx";
import {GetInTouch} from "../../GetInTouch/GetInTouch.jsx";
import mountain from "../../../assets/Images/Gemini_Generated_Image_su9pixsu9pixsu9p.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faRobot, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import SEO from "../../SEO/SEO.jsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WhatsappChatbot = () => {
    useGSAP(() => {
        gsap.from(".whatsapp-animation-1", {
            scrollTrigger: {
                trigger: ".whatsapp-animation-1",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".whatsapp-animation-2", {
            scrollTrigger: {
                trigger: ".whatsapp-animation-2",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".whatsapp-animation-3", {
            scrollTrigger: {
                trigger: ".whatsapp-animation-3",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',    
            }, 
            duration: 1.2, 
            x: -150, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".whatsapp-animation-services", {
            scrollTrigger: {
                trigger: ".whatsapp-animation-services",
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

        gsap.from(".whatsapp-animation-benefits", {
            scrollTrigger: {
                trigger: ".whatsapp-animation-benefits",
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

    const services = [
        "WhatsApp Business API Integration - Official verified business account",
        "AI-Powered Chatbots - Intelligent automated responses",
        "Bulk SMS Campaigns - Mass messaging with personalization",
        "Email Marketing Automation - Scheduled campaigns and drip sequences",
        "24/7 Customer Support - Round-the-clock automated assistance",
        "Lead Generation & Qualification - Capture and qualify leads automatically"
    ];

    return (
        <div className="whatsapp-chatbot-page bg-[#fefdf7] min-h-screen">
            <SEO 
                title="WhatsApp Business API & Chatbot Services - Automated Customer Support"
                description="AI-powered WhatsApp Business API, chatbots, bulk SMS, and email marketing automation for 24/7 customer engagement and lead generation."
                keywords="WhatsApp Business API, chatbot services, AI chatbot, bulk SMS, email marketing, customer support automation, WhatsApp marketing"
                url="https://thumbejapublicity.com/services/whatsapp-chatbot-services"
            />
            <Header/>
            
            {/* Hero Section */}
            <div className="max-w-[1200px] m-auto px-8 py-16 whatsapp-animation-1">
                <h1 className="text-5xl font-bold text-[#091e42] mb-6">WhatsApp & ChatBot Solutions</h1>
                <p className="text-xl text-gray-600 leading-8 mb-4">
                    Automate customer interactions with AI-powered WhatsApp Business APIs, bulk SMS, email campaigns, 
                    and chatbots for faster, smarter communication, instant engagement, and building strong customer relationships.
                </p>
                <p className="text-lg text-gray-600 leading-8">
                    Transform your customer communication with intelligent automation that works 24/7.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="max-w-[1200px] m-auto px-8 mb-16 whatsapp-animation-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-[#25D366] p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg" style={{color: 'white'}}>
                        <FontAwesomeIcon icon={faWhatsapp} size="3x" className="mb-4" style={{color: 'white'}}/>
                        <h3 className="text-2xl font-semibold mb-3" style={{color: 'white'}}>WhatsApp Business</h3>
                        <p style={{color: 'white'}}>Official WhatsApp Business API for seamless customer communication</p>
                    </div>
                    <div className="bg-[#5D47AC] p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg" style={{color: 'white'}}>
                        <FontAwesomeIcon icon={faRobot} size="3x" className="mb-4" style={{color: 'white'}}/>
                        <h3 className="text-2xl font-semibold mb-3" style={{color: 'white'}}>AI Chatbots</h3>
                        <p style={{color: 'white'}}>Intelligent bots that understand and respond to customer queries instantly</p>
                    </div>
                    <div className="bg-[#091e42] p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg" style={{color: 'white'}}>
                        <FontAwesomeIcon icon={faEnvelope} size="3x" className="mb-4" style={{color: 'white'}}/>
                        <h3 className="text-2xl font-semibold mb-3" style={{color: 'white'}}>Bulk Messaging</h3>
                        <p style={{color: 'white'}}>Reach thousands with personalized SMS and email campaigns</p>
                    </div>
                </div>
            </div>

            {/* Services List */}
            <div className="max-w-[1200px] m-auto px-8 mb-16 whatsapp-animation-services">
                <h2 className="text-4xl font-bold text-[#091e42] mb-6">What We Offer</h2>
                <p className="text-lg text-gray-700 leading-8 mb-8">
                    Comprehensive automation solutions for modern customer communication.
                </p>
                <ul className="space-y-4">
                    {services.map((service, index) => (
                        <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <FontAwesomeIcon icon={faCheck} className="text-[#25D366] mr-4 mt-1" size="lg"/>
                            <span className="text-lg text-gray-800">{service}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] py-16 mb-16 whatsapp-animation-benefits" style={{color: 'white'}}>
                <div className="max-w-[1200px] m-auto px-8">
                    <h2 className="text-4xl font-bold mb-6" style={{color: 'white'}}>Why Choose Our Solutions?</h2>
                    <p className="text-lg leading-8 mb-4" style={{color: 'white'}}>
                        Our WhatsApp Business API and chatbot services help you engage customers 24/7, answer queries instantly, and build lasting relationships through personalized, automated interactions.
                    </p>
                    <p className="text-lg leading-8" style={{color: 'white'}}>
                        Increase efficiency, reduce response times, and scale your customer support without increasing costs.
                    </p>
                </div>
            </div>

            <GetInTouch mountainImage={mountain} />
            <Footer/>
        </div>
    );
};

export default WhatsappChatbot;
