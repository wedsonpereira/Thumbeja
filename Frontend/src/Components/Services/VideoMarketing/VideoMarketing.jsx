import './VideoMarketing.css';
import Header from '../../header/Header.jsx';
import Footer from "../../Footer/Footer.jsx";
import { GetInTouch } from "../../GetInTouch/GetInTouch.jsx";
import mountain from "../../../assets/Images/Gemini_Generated_Image_su9pixsu9pixsu9p.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faVideo, faFilm, faPlay } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../SEO/SEO.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import kby from "../../../assets/BrandsImages/kby.png";

gsap.registerPlugin(ScrollTrigger);

const VideoMarketing = () => {
    useGSAP(() => {
        // Use smaller slide distance on mobile
        const isMobile = window.innerWidth < 768;
        const slideDistance = isMobile ? -50 : -150;

        gsap.from(".video-animation-1", {
            scrollTrigger: {
                trigger: ".video-animation-1",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            },
            duration: 1.2,
            x: slideDistance,
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".video-animation-2", {
            scrollTrigger: {
                trigger: ".video-animation-2",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            },
            duration: 1.2,
            x: -150,
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".video-animation-3", {
            scrollTrigger: {
                trigger: ".video-animation-3",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            },
            duration: 1.2,
            x: -150,
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".video-animation-4", {
            scrollTrigger: {
                trigger: ".video-animation-4",
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: 'play none none reverse',
            },
            duration: 1.2,
            x: -150,
            opacity: 0,
            ease: "power2.out"
        });

        gsap.from(".video-animation-services", {
            scrollTrigger: {
                trigger: ".video-animation-services",
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

        gsap.from(".video-animation-why", {
            scrollTrigger: {
                trigger: ".video-animation-why",
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
        "Corporate Video Production - Company profile videos, brand films, and leadership message videos",
        "Business Promo Videos - Product walkthroughs, service explainers, and sales-focused marketing videos",
        "Event Videography - Professional coverage for business activities, launches, meetings, and public events",
        "Reels & Short Video Editing - Instagram Reels, YouTube Shorts, and social media ad creatives",
        "Ad Video Production - Performance ad videos optimized for paid campaigns and higher conversion rates",
        "End-to-End Video Marketing - Scripting, shooting, editing, posting strategy, and brand promotion support"
    ];

    const demoWork = [
        {
            title: "Corporate Brand Storytelling Projects",
            description: "Produced corporate films and company profile videos that communicate brand value, business process, and customer trust in a clear and professional format."
        },
        {
            title: "Social Media Reels & Shorts Production",
            description: "Planned, shot, and edited short-form content for Instagram Reels and YouTube Shorts to improve engagement, reach, and shareability."
        },
        {
            title: "Business Activity & Event Video Coverage",
            description: "Captured real-time business activities, client interactions, and event highlights, then delivered polished edits for website, social media, and promotions."
        },
        {
            title: "Performance-Focused Video Ads",
            description: "Created ad-ready videos with strong hooks, clear messaging, and conversion-driven edits for digital marketing campaigns."
        }
    ];

    return (
        <div className="video-marketing-page bg-[#fefdf7] min-h-screen pt-24">
            <SEO
                title="Video Marketing Services in Mangalore - Video Production, Reels Editing & Brand Promotion | Thumbeja"
                description="Thumbeja Publicity provides video marketing services in Mangalore including corporate video production, event videography, reels editing, ad video creation, and brand promotion content for business growth."
                keywords="video marketing services in Mangalore, video production company in Mangalore, corporate video production, event videography Mangalore, Instagram reels editing, YouTube shorts editing, business promo videos, brand promotion videos, ad video production, digital marketing video services"
                url="https://thumbeja.com/services/video-marketing-mangalore"
            />
            <Header />

            {/* Hero Section */}
            <div className="max-w-[1200px] m-auto px-8 py-16 video-animation-1">
                <h1 className="text-5xl font-bold text-[#091e42] mb-6">Video Marketing Services in Mangalore</h1>
                <p className="text-xl text-gray-600 leading-8 mb-4">
                    At Thumbeja Publicity, we create high-impact video marketing content for businesses in Mangalore.
                    Our team handles video production, event videography, reels creation, ad video editing, and brand storytelling
                    to help businesses get better visibility, engagement, and qualified leads.
                </p>
                <p className="text-lg text-gray-600 leading-8">
                    We focus on business-first video strategy: what to shoot, how to edit, and where to publish, so your videos
                    not only look good but also support real business growth and stronger brand recall.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="max-w-[1200px] m-auto px-8 mb-16 video-animation-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-[#5D47AC] p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg" style={{ color: 'white' }}>
                        <FontAwesomeIcon icon={faVideo} size="3x" className="mb-4" style={{ color: 'white' }} />
                        <h3 className="text-2xl font-semibold mb-3" style={{ color: 'white' }}>Professional Production</h3>
                        <p style={{ color: 'white' }}>High-quality video production with professional equipment and editing</p>
                    </div>
                    <div className="bg-[#091e42] p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg" style={{ color: 'white' }}>
                        <FontAwesomeIcon icon={faFilm} size="3x" className="mb-4" style={{ color: 'white' }} />
                        <h3 className="text-2xl font-semibold mb-3" style={{ color: 'white' }}>Creative Storytelling</h3>
                        <p style={{ color: 'white' }}>Engaging narratives that connect with your audience emotionally</p>
                    </div>
                    <div className="bg-[#5D47AC] p-8 rounded-2xl hover:scale-105 transition-transform shadow-lg" style={{ color: 'white' }}>
                        <FontAwesomeIcon icon={faPlay} size="3x" className="mb-4" style={{ color: 'white' }} />
                        <h3 className="text-2xl font-semibold mb-3" style={{ color: 'white' }}>Multi-Platform</h3>
                        <p style={{ color: 'white' }}>Optimized for all platforms - YouTube, Instagram, Facebook, LinkedIn</p>
                    </div>
                </div>
            </div>

            {/* Services List */}
            <div className="max-w-[1200px] m-auto px-8 mb-16 video-animation-services">
                <h2 className="text-4xl font-bold text-[#091e42] mb-6">Our Video Services</h2>
                <p className="text-lg text-gray-700 leading-8 mb-8">
                    We provide complete video marketing services for companies that want stronger online presence and better content performance.
                </p>
                <ul className="space-y-4">
                    {services.map((service, index) => (
                        <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <FontAwesomeIcon icon={faCheck} className="text-[#5D47AC] mr-4 mt-1" size="lg" />
                            <span className="text-lg text-gray-800">{service}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Demo Work Section */}
            <div className="max-w-[1200px] m-auto px-8 mb-16 video-animation-3">
                <h2 className="text-4xl font-bold text-[#091e42] mb-6">What We Do For Our Clients</h2>
                <p className="text-lg text-gray-700 leading-8 mb-8">
                    We support brands from concept to publishing with video content that is practical, professional, and aligned with marketing goals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {demoWork.map((item, index) => (
                        <article key={index} className="video-demo-card">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>

            {/* KBY Section */}
            <section className="max-w-[1200px] m-auto px-8 mb-16 video-animation-4">
                <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 md:p-10 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                        <div className="w-[150px] h-[90px] bg-[#f8fafc] border border-[#e5e7eb] rounded-xl p-3 flex items-center justify-center flex-shrink-0">
                            <img src={kby} alt="KBY Karavali Bizz Yaatra" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#091e42] mb-3">KBY - Karavali Bizz Yaatra</h2>
                            <p className="text-lg text-gray-700 leading-8 mb-4">
                                KBY (Karavali Bizz Yaatra) is our specialized team focused on business video creation and promotion.
                                They plan and create videos of businesses, day-to-day activities, and events, then handle post-production
                                editing and digital promotion to improve brand visibility.
                            </p>
                            <p className="text-lg text-gray-700 leading-8">
                                In short, KBY takes care of shoot, edit, and brand promotion workflow, making it easier for companies
                                to publish consistent video content across social media and digital marketing channels.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-[#5D47AC] to-[#091e42] py-16 mb-16 video-animation-why" style={{ color: 'white' }}>
                <div className="max-w-[1200px] m-auto px-8">
                    <h2 className="text-4xl font-bold mb-6" style={{ color: 'white' }}>Why Video Marketing?</h2>
                    <p className="text-lg leading-8 mb-4" style={{ color: 'white' }}>
                        Video marketing helps businesses explain faster, build trust quickly, and stay memorable in a crowded digital space.
                        From brand videos to reels and ad creatives, quality video content improves engagement, click-through rates, and inquiry conversion.
                    </p>
                    <p className="text-lg leading-8" style={{ color: 'white' }}>
                        Our approach combines creative storytelling with performance-focused editing so your content works for both branding and lead generation.
                    </p>
                </div>
            </div>

            <GetInTouch mountainImage={mountain} />
            <Footer />
        </div>
    );
};

export default VideoMarketing;
