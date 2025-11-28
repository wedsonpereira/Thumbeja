import './WebsiteSoftwareDevelopment.css';
import Header from '../../header/Header.jsx';
import Footer from "../../Footer/Footer.jsx";
import {GetInTouch} from "../../GetInTouch/GetInTouch.jsx";
import mountain from "../../../assets/Images/Gemini_Generated_Image_su9pixsu9pixsu9p.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faCode, faMobile, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import SEO from "../../SEO/SEO.jsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WebsiteSoftwareDevelopment = () => {
    useGSAP(() => {
        // Use smaller slide distance on mobile
        const isMobile = window.innerWidth < 768;
        const slideDistance = isMobile ? -50 : -150;
        
        gsap.from(".website-animation-1", {
            scrollTrigger: {
                trigger: ".website-animation-1",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".website-animation-2", {
            scrollTrigger: {
                trigger: ".website-animation-2",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".website-animation-services", {
            scrollTrigger: {
                trigger: ".website-animation-services",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            }, 
            stagger: 0.2, 
            duration: 1.2, 
            x: slideDistance, 
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".website-animation-why", {
            scrollTrigger: {
                trigger: ".website-animation-why",
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

    const services = [
        "Responsive Website Design - Mobile-first approach",
        "E-commerce Platforms - Secure online stores with payment gateways",
        "Mobile App Development - iOS and Android applications",
        "Custom Software Solutions - Tailored business applications",
        "SEO-Friendly Development - Built for search engine visibility",
        "Workflow Automation - Streamline business processes",
        "CMS Integration - Easy content management systems",
        "API Development - Seamless third-party integrations"
    ];

    return (
        <div className="website-development-page bg-[#fefdf7] min-h-screen pt-24">
            <SEO 
                title="Website & Software Development - Custom Web Solutions & E-commerce"
                description="Professional website and software development services including responsive design, e-commerce platforms, mobile apps, SEO-friendly websites, and custom business applications."
                keywords="website development, web design, e-commerce development, mobile app development, custom software, SEO-friendly websites, web development Mangalore"
                url="https://thumbejapublicity.com/services/website-development-mangalore"
            />
            <Header/>
            
            {/* Hero Section */}
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 md:py-16 website-animation-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#091e42] mb-4 md:mb-6">Website & Software Development</h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-7 md:leading-8 mb-4">
                    Custom websites and software solutions including responsive, SEO-friendly sites, desktop/mobile apps, 
                    e-commerce platforms, workflow automation, and specialized business applications designed for scalability, 
                    security, performance, efficiency, and growth.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-7 md:leading-8">
                    Transform your digital presence with cutting-edge web and software solutions.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-12 md:mb-16 website-animation-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="bg-[#091e42] p-6 md:p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg" style={{color: 'white'}}>
                        <FontAwesomeIcon icon={faCode} size="3x" className="mb-4" style={{color: 'white'}}/>
                        <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{color: 'white'}}>Custom Development</h3>
                        <p className="text-sm md:text-base" style={{color: 'white'}}>Tailored solutions built with modern technologies and best practices</p>
                    </div>
                    <div className="bg-[#5D47AC] p-6 md:p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg" style={{color: 'white'}}>
                        <FontAwesomeIcon icon={faMobile} size="3x" className="mb-4" style={{color: 'white'}}/>
                        <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{color: 'white'}}>Mobile-First</h3>
                        <p className="text-sm md:text-base" style={{color: 'white'}}>Responsive designs that work perfectly on all devices</p>
                    </div>
                    <div className="bg-[#091e42] p-6 md:p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg" style={{color: 'white'}}>
                        <FontAwesomeIcon icon={faShoppingCart} size="3x" className="mb-4" style={{color: 'white'}}/>
                        <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{color: 'white'}}>E-commerce</h3>
                        <p className="text-sm md:text-base" style={{color: 'white'}}>Powerful online stores with secure payment integration</p>
                    </div>
                </div>
            </div>

            {/* Services List */}
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-12 md:mb-16 website-animation-services">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#091e42] mb-4 md:mb-6">Our Development Services</h2>
                <p className="text-base md:text-lg text-gray-700 leading-7 md:leading-8 mb-6 md:mb-8">
                    Comprehensive web and software development solutions for modern businesses.
                </p>
                <ul className="space-y-3 md:space-y-4">
                    {services.map((service, index) => (
                        <li key={index} className="flex items-start bg-white p-3 md:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <FontAwesomeIcon icon={faCheck} className="text-[#5D47AC] mr-3 md:mr-4 mt-1 flex-shrink-0" size="lg"/>
                            <span className="text-base md:text-lg text-gray-800">{service}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-[#091e42] to-[#5D47AC] py-12 md:py-16 mb-12 md:mb-16 website-animation-why" style={{color: 'white'}}>
                <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6" style={{color: 'white'}}>Why Choose Our Development Services?</h2>
                    <p className="text-base md:text-lg leading-7 md:leading-8 mb-4" style={{color: 'white'}}>
                        We build scalable, secure, and high-performance web and software solutions that drive business growth. 
                        From simple websites to complex enterprise applications, our development team delivers quality code and 
                        exceptional user experiences using the latest technologies.
                    </p>
                    <p className="text-base md:text-lg leading-7 md:leading-8" style={{color: 'white'}}>
                        Partner with us to bring your digital vision to life with professional, reliable, and innovative solutions.
                    </p>
                </div>
            </div>

            <GetInTouch mountainImage={mountain} />
            <Footer/>
        </div>
    );
};

export default WebsiteSoftwareDevelopment;
