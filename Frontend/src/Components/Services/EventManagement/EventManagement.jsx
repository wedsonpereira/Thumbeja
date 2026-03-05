import './EventManagement.css';
import Header from '../../header/Header.jsx';
// Using placeholder images as requested plan since EventManagement.png is not present yet
import EventManagementImg from '../../../assets/Images/Event Management.webp';
import mountainBg from '../../../assets/Images/Gemini_Generated_Image_su9pixsu9pixsu9p.png';
import cardBg1 from '../../../assets/Images/event1.webp';
import cardBg2 from '../../../assets/Images/event3.webp';
import cardBg3 from '../../../assets/Images/event2.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faGlassCheers, faCalendarCheck, faMusic } from "@fortawesome/free-solid-svg-icons";
import { services1, services2, services3 } from "../../../assets/JsonData/Servicesdata/EventManagement.js";
import Footer from "../../Footer/Footer.jsx";
import { GetInTouch } from "../../GetInTouch/GetInTouch.jsx";
import SEO from "../../SEO/SEO.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

const EventManagement = () => {
    useGSAP(() => {
        // Use smaller slide distance on mobile
        const isMobile = window.innerWidth < 768;
        const slideDistance = isMobile ? -50 : -150;

        const animateSection = (selector) => {
            gsap.from(selector, {
                scrollTrigger: {
                    trigger: selector,
                    start: "top 90%",
                    end: "bottom 20%",
                    toggleActions: 'play none none reverse',
                },
                duration: 1.2,
                x: slideDistance,
                opacity: 0,
                ease: "power2.out"
            });
        };

        const sections = [
            ".event-animation-1", ".event-animation-2", ".event-animation-3",
            ".event-animation-4", ".event-animation-5", ".event-animation-6",
            ".event-animation-7", ".event-animation-testimonial", ".event-animation-support"
        ];

        sections.forEach(animateSection);

    }, []);

    return (
        <div className="event-marketing-page bg-[#fefdf7] min-h-screen pt-24">
            <SEO
                title="Event Management Services in Mangalore - Corporate Events, Weddings & Stage Shows | Thumbeja"
                description="Top event management company in Mangalore. We organize corporate events, weddings, exhibitions, and parties with thematic decor, artist management, and seamless execution."
                keywords="event management Mangalore, corporate events, wedding planners Mangalore, party planning, exhibition organizers, artist management, stage setup and lighting"
                url="https://thumbeja.com/services/event-management-mangalore"
            />
            <Header />

            {/* Hero Section */}
            <div className="max-w-[1200px] m-auto px-8 py-16 event-animation-1">
                <h1 className="text-5xl font-bold text-[#091e42] mb-6">Event Management Services in Mangalore</h1>
                <p className="text-xl text-gray-600 leading-8 mb-4">
                    Transforming your visions into unforgettable experiences. Our event management services cover every detail from conceptualization to execution.
                </p>
                <p className="text-lg text-gray-600 leading-8">
                    Whether it's a grand corporate gathering, an intimate private party, or a massive public exhibition, we deliver seamless, high-impact events that leave a lasting impression on your audience.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="max-w-[1200px] m-auto px-8 mb-16 event-animation-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg overflow-hidden" style={{ backgroundImage: `url(${cardBg1})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
                        <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
                        <div className="relative z-10">
                            <FontAwesomeIcon icon={faCalendarCheck} size="3x" className="mb-4" style={{ color: 'white' }} />
                            <h3 className="text-2xl font-semibold mb-3" style={{ color: 'white' }}>Corporate Events</h3>
                            <p style={{ color: 'white' }}>Professional planning for conferences, seminars, and corporate branding activations.</p>
                        </div>
                    </div>
                    <div className="relative p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg overflow-hidden" style={{ backgroundImage: `url(${cardBg2})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
                        <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
                        <div className="relative z-10">
                            <FontAwesomeIcon icon={faGlassCheers} size="3x" className="mb-4" style={{ color: 'white' }} />
                            <h3 className="text-2xl font-semibold mb-3" style={{ color: 'white' }}>Weddings & Parties</h3>
                            <p style={{ color: 'white' }}>Creating magical moments for private events with thematic decor and perfect execution.</p>
                        </div>
                    </div>
                    <div className="relative p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg overflow-hidden" style={{ backgroundImage: `url(${cardBg3})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
                        <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
                        <div className="relative z-10">
                            <FontAwesomeIcon icon={faMusic} size="3x" className="mb-4" style={{ color: 'white' }} />
                            <h3 className="text-2xl font-semibold mb-3" style={{ color: 'white' }}>Artist & Stage Setup</h3>
                            <p style={{ color: 'white' }}>World-class lighting, audio-visuals, and talent management for stage shows.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Image */}
            <div className="max-w-[900px] m-auto px-8 mb-16 event-animation-3">
                <img src={EventManagementImg} className="w-full rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer" style={{ display: 'block' }} alt="Event Management Services" />
            </div>

            {/* Services Section 1 */}
            <div className="max-w-[1200px] m-auto px-8 mb-16 event-animation-4">
                <h2 className="text-4xl font-bold text-[#091e42] mb-6">Expertise Across All Event Types</h2>
                <p className="text-lg text-gray-700 leading-8 mb-8">
                    We bring passion and precision to every project. By understanding your objectives, we curate experiences that truly reflect your brand and personal style, ensuring your event stands out.
                </p>
                <ul className="space-y-4">
                    {services1.map((service, index) => (
                        <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <FontAwesomeIcon icon={faCheck} className="text-[#5D47AC] mr-4 mt-1" size="lg" />
                            <span className="text-lg text-gray-800">{service}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Complete Event Solutions Section */}
            <div className="bg-gradient-to-r from-[#5D47AC] to-[#091e42] py-16 mb-16 event-animation-5" style={{ color: 'white' }}>
                <div className="max-w-[1200px] m-auto px-8">
                    <h2 className="text-4xl font-bold mb-6" style={{ color: 'white' }}>Complete Event Solutions</h2>
                    <p className="text-lg leading-8 mb-8" style={{ color: 'white' }}>
                        Our holistic approach to event management means you can sit back and relax. From the initial blueprint to the final teardown, our team handles every logistical detail with impeccable standards.
                    </p>
                    <ul className="space-y-4">
                        {services2.map((service, index) => (
                            <li key={index} className="flex items-start bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30">
                                <FontAwesomeIcon icon={faCheck} className="mr-4 mt-1 flex-shrink-0" style={{ color: 'white' }} size="lg" />
                                <span className="text-lg" style={{ color: 'white' }}>{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Services Section 3 */}
            <div className="max-w-[1200px] m-auto px-8 mb-16 event-animation-6">
                <h2 className="text-4xl font-bold text-[#091e42] mb-6">What Our Services Include</h2>
                <p className="text-lg text-gray-700 leading-8 mb-8">
                    Comprehensive planning, marketing, and analytical solutions tailored for your events.
                </p>
                <ul className="space-y-4">
                    {services3.map((service, index) => (
                        <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <FontAwesomeIcon icon={faCheck} className="text-[#5D47AC] mr-4 mt-1" size="lg" />
                            <span className="text-lg text-gray-800">{service}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* What We Offer */}
            <div className="max-w-[1200px] m-auto px-8 mb-16 event-animation-7">
                <h2 className="text-4xl font-bold text-[#091e42] mb-6">Why Choose Us</h2>
                <p className="text-lg text-gray-700 leading-8 mb-4">
                    Thumbeja Publicity leverages an extensive network of premium vendors and industry professionals to bring you the best deals and highest quality service. We are committed to creativity, punctuality, and flawless execution.
                </p>
                <p className="text-lg text-gray-700 leading-8">
                    With years of experience managing diverse crowds and complex stage setups, we predict challenges before they arise, keeping you stress-free to enjoy your successful event.
                </p>
            </div>

            {/* Testimonial */}
            <div className="max-w-[1200px] m-auto px-8 mb-16 event-animation-testimonial">
                <div className="bg-gradient-to-br from-[#091e42] to-[#1a2744] p-12 rounded-2xl shadow-2xl" style={{ color: 'white' }}>
                    <div className="text-center">
                        <span className="text-8xl font-bold opacity-30" style={{ color: 'white' }}>"</span>
                        <p className="text-xl italic leading-relaxed mt-4" style={{ color: 'white' }}>
                            The entire event was managed flawlessly! From the exquisite decor to the perfectly timed performances, Thumbeja Publicity made sure our vision came to life beyond our expectations.
                        </p>
                    </div>
                </div>
            </div>

            {/* Ongoing Support */}
            <div className="max-w-[1200px] m-auto px-8 mb-16 event-animation-support">
                <h2 className="text-4xl font-bold text-[#091e42] mb-6">Post-Event Support & PR</h2>
                <p className="text-lg text-gray-700 leading-8 mb-4">
                    Our job doesn't end when the applause stops. We provide comprehensive post-event services including tear-down logistics, data analytics on audience engagement, and PR distribution.
                </p>
                <p className="text-lg text-gray-700 leading-8">
                    We ensure you capitalize on the momentum of your event by converting attendees into loyal customers through targeted post-event marketing campaigns.
                </p>
            </div>

            <GetInTouch mountainImage={mountainBg} />
            <Footer />
        </div>
    );
};

export default EventManagement;
