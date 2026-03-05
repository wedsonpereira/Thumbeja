import React, { useState } from 'react';
import "./home.css"
import Header from "../header/Header.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer.jsx";
import SEO from "../SEO/SEO.jsx";
import {
    homePageData,
    homepageData3,
    homepageData4,
    homeherodata
} from "../../assets/JsonData/HomePageData.js";
import processImg1 from '../../assets/Images/planning-with-client.jpg'
import processImg2 from '../../assets/Images/celebrating-the-success.jpg'
import processImg3 from '../../assets/Images/execution-of-the-project.jpg'
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import About from "../About/About.jsx";
import { Link } from "react-router-dom"
import Brands from "../Brands/Brands.jsx";
import productsData from "../../assets/JsonData/ProductsData.js";

gsap.registerPlugin(ScrollTrigger)

const Home = () => {

    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobileOrTablet = windowWidth <= 1024;

    const [Index, setIndex] = useState(0);

    const handleInputChange = (index) => {
        setIndex(index);
        console.log(index);
    };

    const [hoverIndex, setHoverIndex] = useState(0);

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
        console.log(index);
    }

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.tp-whychooseus-animation', { x: -50, opacity: 0 });
            gsap.from('.tp-whychooseus-animation-img', { x: 0, scale: 0 });
        })

        return () => ctx.revert()
    }, [hoverIndex]);


    const animateSlide = (swiper) => {
        // Find the active slide element specifically
        // Swiper adds 'swiper-slide-active' class to the current slide
        const activeSlide = swiper.el.querySelector('.swiper-slide-active');
        if (!activeSlide) return;

        const title = activeSlide.querySelectorAll(".tp-hero-title");
        const desc = activeSlide.querySelector(".tp-hero-desc");
        const btns = activeSlide.querySelector(".tp-hero-btns");
        const stats = activeSlide.querySelectorAll(".tp-hero-stat-card");

        // Kill any existing animations on these elements to prevent overlap
        gsap.killTweensOf([title, desc, btns, stats]);

        // Reset elements before animating
        gsap.set([title, desc, btns, stats], { opacity: 0, y: 30 });
        gsap.set(stats, { x: 50, y: 0 }); // Stats slide in from right

        // Start animations with a tiny delay to ensure slide transition has started
        gsap.to(title, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            stagger: 0.2,
            delay: 0.1
        });

        gsap.to(desc, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.4
        });

        gsap.to(btns, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.6
        });

        gsap.to(stats, {
            x: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
            delay: 0.8
        });
    };

    useGSAP(() => {
        // Other Sections Animations
        gsap.from(".home-animation-3", {
            scrollTrigger: {
                trigger: ".home-animation-3",
                toggleActions: 'restart none none reverse',
            },
            stagger: 0.2,
            duration: 0.7,
            x: -100,
            opacity: 0
        });

        gsap.from(".home-animation-5", {
            scrollTrigger: {
                trigger: ".home-animation-5",
                toggleActions: 'restart none none reverse',
            },
            stagger: 0.2,
            duration: 1,
            x: -100,
            opacity: 0
        });

        gsap.from(".product-card-animation", {
            scrollTrigger: {
                trigger: ".product-card-animation",
                start: "top bottom-=100",
                toggleActions: 'restart none none reverse',
            },
            y: -30,
            opacity: 0,
            duration: 0.3,
            stagger: 0.1,
            ease: "power2.out",
        }, []);

    }, [])

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.home-animation-onclick-services', {
                x: -100, stagger: 0.3, opacity: 0,
                scrollTrigger: {
                    trigger: '.home-animation-onclick-services',
                }
            })
        });
        return () => ctx.revert()
    }, [Index])


    return (
        <>
            <SEO
                title="Thumbeja Publicity - Best Digital Marketing Agency in Mangalore, Karnataka"
                description="Thumbeja Publicity is the best digital marketing agency in Mangalore, Karnataka. We offer SEO services, social media marketing, web development, printing, branding, outdoor advertising, video marketing & graphic design. Get a free consultation today!"
                keywords="digital marketing agency in Mangalore, best digital marketing company Mangalore, SEO services Mangalore, social media marketing Mangalore, web development Mangalore, printing services Mangalore, branding agency Mangalore, outdoor advertising Mangalore, graphic design Mangalore, video marketing Mangalore, digital marketing Karnataka, online marketing Mangalore, Google Ads Mangalore, website design Mangalore, digital marketing near me, best SEO company Mangalore"
                url="https://thumbeja.com"
                structuredData={[
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://thumbeja.com"
                            }
                        ]
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        "name": "Thumbeja Publicity - Digital Marketing Agency",
                        "image": "https://thumbeja.com/thumbeja.svg",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "410, 4th floor, Sahakari Sadana, Near Rao & Rao Circle, Mission Street, Bunder",
                            "addressLocality": "Mangalore",
                            "addressRegion": "Karnataka",
                            "postalCode": "575001",
                            "addressCountry": "IN"
                        },
                        "telephone": "+916366983700",
                        "url": "https://thumbeja.com",
                        "priceRange": "$$"
                    }
                ]}
            />
            <Header />
            <div className="tp-hero-section w-full">
                <div className="tp-hero-slider-frame relative w-full h-[100vh]">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop
                        onSwiper={(swiper) => animateSlide(swiper)}
                        onSlideChangeTransitionStart={(swiper) => animateSlide(swiper)}
                        className="h-full">
                        {homeherodata.map((item, index) => (
                            <SwiperSlide key={index} className="tp-hero-slide relative overflow-hidden">
                                {/* Slide Image */}
                                <img
                                    src={item.src}
                                    alt={item.text}
                                    className="tp-hero-slide-image w-full h-full object-cover brightness-[0.35] scale-105"
                                />

                                {/* Dark Overlay for better readability */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

                                {/* Centered Content */}
                                <div className="tp-hero-content-wrap absolute inset-0 flex justify-center">
                                    <div className="container mx-auto px-6 lg:px-12">
                                        <div className="tp-hero-content-stack flex flex-col items-center text-center max-w-4xl mx-auto">

                                            {/* Tagline */}
                                            <span className="tp-hero-tagline text-sm md:text-base capitalize mb-4 tp-hero-title">
                                                Best Digital Marketing Agency in Mangalore
                                            </span>

                                            {/* Main Title */}
                                            <h1 className="tp-hero-title-corporate text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 tp-hero-title">
                                                {item.text}
                                            </h1>

                                            {/* Description */}
                                            <p className="tp-hero-description text-base md:text-xl max-w-2xl mb-8 tp-hero-desc">
                                                {item.description}
                                            </p>

                                            {/* Buttons */}
                                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 tp-hero-btns">
                                                <Link to="/contact-thumbeja-publicity" className="tp-hero-btn-primary group">
                                                    Get Started
                                                    <FontAwesomeIcon icon={faArrowRight} className="ml-3 transition-transform group-hover:translate-x-1" />
                                                </Link>
                                                <Link to="/services-thumbeja-publicity" className="tp-hero-btn-ghost">
                                                    View Portfolio
                                                </Link>
                                            </div>

                                            {/* Trust Indicators */}
                                            <div className="tp-hero-trust-indicators flex flex-wrap items-center justify-center gap-6 md:gap-10 tp-hero-stats">
                                                <div className="tp-hero-trust-item tp-hero-stat-card">
                                                    <span className="tp-hero-trust-number">100%</span>
                                                    <span className="tp-hero-trust-label">Client Satisfaction</span>
                                                </div>
                                                <div className="tp-hero-trust-divider hidden md:block"></div>
                                                <div className="tp-hero-trust-item tp-hero-stat-card">
                                                    <span className="tp-hero-trust-number">100%</span>
                                                    <span className="tp-hero-trust-label">Quality Assurance</span>
                                                </div>
                                                <div className="tp-hero-trust-divider hidden md:block"></div>
                                                <div className="tp-hero-trust-item tp-hero-stat-card">
                                                    <span className="tp-hero-trust-number">ROI</span>
                                                    <span className="tp-hero-trust-label">Focused Results</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Scroll Indicator */}
                                <div className="tp-hero-scroll-indicator">
                                    <span>Scroll to explore</span>
                                    <div className="tp-hero-mouse">
                                        <div className="tp-hero-wheel"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            {/*1st content starting*/}

            {/* Our Products Section */}
            <div className="min-h-max py-20 px-6 tp-products-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-lg text-slate-600">Our Products -------------------</span>
                        <h2 className="text-5xl font-semibold text-slate-900 mt-4 tp-products-heading">
                            Explore Our <span className="text-[#5439a3]">Digital Solutions</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
                            Innovative digital marketing products and tools designed to transform your business operations and online presence in Mangalore, Karnataka.
                        </p>
                    </div>

                    {/* Mobile/Tablet: Compact Horizontal Scroll Grid */}
                    {isMobileOrTablet ? (
                        <div className="tp-products-mobile-scroll">
                            <div className="tp-products-scroll-container">
                                {productsData.map((product) => (
                                    <a
                                        key={product.id}
                                        href={product.link}
                                        target={product.type === "external" ? "_blank" : "_self"}
                                        rel={product.type === "external" ? "noopener noreferrer" : ""}
                                        className="tp-product-compact-card product-card-animation"
                                    >
                                        <div className={`tp-product-compact-icon ${product.colorClass} ${product.shadowClass}`}>
                                            {product.image ? (
                                                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                                            ) : (
                                                product.initials
                                            )}
                                        </div>
                                        <h3 className="tp-product-compact-title">{product.title}</h3>
                                        <p className="tp-product-compact-desc">
                                            {product.description.length > 60
                                                ? product.description.substring(0, 60) + '...'
                                                : product.description}
                                        </p>
                                        <span className={`tp-product-compact-cta ${product.textClass}`}>
                                            {product.type === "phone" ? "Contact" : "Visit"}
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M7 17l9.2-9.2M17 17V7H7" />
                                            </svg>
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Desktop: Grid Layout */
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {productsData.map((product) => (
                                <div key={product.id} className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full product-card-animation">
                                    <div className={`w-12 h-12 mb-6 rounded-lg ${product.colorClass} flex items-center justify-center text-white text-xl font-bold shadow-lg ${product.shadowClass} overflow-hidden`}>
                                        {product.image ? (
                                            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                                        ) : (
                                            product.initials
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{product.title}</h3>
                                    <p className="text-slate-600 mb-6 flex-grow">
                                        {product.description}
                                    </p>
                                    <a
                                        href={product.link}
                                        target={product.type === "external" ? "_blank" : "_self"}
                                        rel={product.type === "external" ? "noopener noreferrer" : ""}
                                        className={`inline-flex items-center ${product.textClass} font-semibold ${product.hoverTextClass} transition-colors`}
                                    >
                                        {product.type === "phone" ? "Contact Us" : "Visit Website"}
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {product.type === "phone" ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            )}
                                        </svg>
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/*2st content starting*/}
            <div
                className={"tp-content-services h-max flex items-center w-[90%] m-auto mb-40  pt-10 flex-col justify-center gap-10"}
                id={"container-services"}>
                <div className={"tp-content-header-2 h-max p-2 flex items-center justify-evenly gap-10"}>
                    <div className={"w-[45%] h-[10rem] p-2 flex flex-col  justify-center gap-10 home-animation-3"}>
                        <span className={"text-lg home-animation-3"}>Our Services -------------------</span>
                        <h2 className={"text-5xl font-semibold home-animation-3 tp-products-heading"}>Digital Marketing  <br /><span
                            className={"text-[#5439a3]"}> Services for Businesses</span></h2>
                    </div>
                    <div className={"w-[30%] flex h-[10rem] items-center justify-evenly home-animation-3"}>
                        <p className={"text-lg"}>
                            As a leading digital marketing agency in Mangalore, Karnataka, we help businesses grow with expert SEO, social media marketing, web development, printing, and branding solutions.
                        </p>
                    </div>
                </div>
                {/*container starting*/}
                <div className="w-[85%] min-h-[30rem] tp-content-header-3 home-animation-3 ">
                    <div
                        className="tp-home-serv-sect1 w-full h-max flex items-center justify-center rounded-4xl bg-[#0a071f]">
                        {/* Left Buttons */}
                        <div
                            className="tp-home-serv-sect1-fc flex items-center justify-evenly flex-col w-[25rem] h-[35rem] home-animation-3 p-4">
                            {homePageData.map((item, index) => (
                                <button
                                    key={item.id}
                                    className="text-white hover:text-white hover:bg-orange-500 border rounded-4xl w-[80%] h-[4rem] p-1"
                                    onClick={() => handleInputChange(index)}>
                                    {item.title}
                                </button>
                            ))}
                        </div>
                        {/* Right Content */}
                        <div
                            className="tp-home-serv-sect2 border-l-1 border-amber-50 w-[70%] h-max flex items-center justify-center ">
                            <div
                                className="text-white w-[80%] h-max flex justify-center flex-col gap-10 home-animation-3">
                                <div
                                    className="w-[100%] flex gap-10 flex-col tp-home-serv-sect2-text0 home-animation-onclick-services">
                                    <span className="text-4xl font-semibold">{homePageData[Index].title}</span>
                                    <p>{homePageData[Index].subtitle}</p>
                                </div>
                                <div
                                    className="p-2 flex flex-col gap-8 tp-home-serv-sect2-text1 home-animation-onclick-services">
                                    {homePageData[Index].services.map((service, i) => (
                                        <div key={i} className="flex items-center gap-3 pb-2">
                                            <FontAwesomeIcon icon={faCheck} size="xl" />
                                            <span>{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Process container*/}
            <div className={"tp-content-process min-h-[25rem] w-[85%] m-auto mt-30 pb-12 flex flex-col gap-6"}>
                <div
                    className={"flex flex-col gap-1 w-full h-[11rem] items-center justify-evenly tp-content-process0 text-center home-animation-5"}>
                    <span>------Process-----</span>
                    <h2 className={"text-5xl font-semibold tp-products-heading"}>Our Proven Digital Marketing<span
                        className={"text-[#5e3bab]"}><br />Process</span></h2>
                </div>
                <div className={"flex text-black h-max w-full tp-content-process1"}>
                    <div className={"flex w-[50%] h-full items-center justify-center tp-content-process1-inner"}>
                        <div className="w-[50%] flex flex-col justify-center items-center gap-10  h-full">
                            <div className="tp-process-1 w-[100%] home-animation-5">
                                <img
                                    src={processImg1}
                                    className="object-cover w-full h-full rounded-full tp-process-img1"
                                    alt="Digital marketing strategy planning with client in Mangalore"
                                />
                            </div>
                            <div className="tp-process-2 w-[100%] home-animation-5">
                                <img
                                    src={processImg2}
                                    className="object-cover w-full h-full rounded-full tp-process-img1"
                                    alt="Celebrating successful digital marketing campaign results"
                                />
                            </div>
                        </div>

                        <div className="w-[100%] flex flex-col justify-center items-center gap-10 h-full">
                            <div className="tp-process-3 w-[100%] home-animation-5">
                                <img
                                    src={processImg3}
                                    className="object-cover w-full h-full rounded-full tp-process-img1"
                                    alt="Executing digital marketing project for business growth"
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className={"flex flex-col justify-center gap-6 w-[50%] tp-content-process1-inner1 h-full home-animation-5"}>
                        {
                            homepageData4.map((item, index) => {
                                return (
                                    <div key={index} className={"gap-4 flex flex-col w-[100%] h-max"}>
                                        <div className={"flex items-center gap-6"}>
                                            <span className={""}>
                                                <FontAwesomeIcon icon={item.icon} size="4x" />
                                            </span>
                                            <span className={"text-2xl font-semibold text-center"}>{item.title}</span>
                                        </div>
                                        <div className={" ml-30"}>{item.description}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/*Who choose us Container*/}
            <div
                className={"tp-content-whychooseus min-h-[20rem] w-[85%] m-auto pt-20 pb-15 flex flex-col gap-7 select-none"}>
                <div className={"tp-content-whychooseus0 h-min[15rem] w-[100%] flex"}>
                    <div className={"flex w-[50%] flex-col gap-5 justify-center home-animation-6"}>
                        <span className={"text-lg"}>Why Choose Us?</span>
                        <h2
                            className={"text-5xl text-[#002221] leading-tight font-semibold tp-products-heading"}>Best Digital
                            <span className={"text-[#5e3bab]"}> Marketing Agency</span></h2>
                    </div>
                    <div className={"flex w-[50%] flex-col justify-center home-animation-6"}>
                        <span className={"text-lg"}>Choose Thumbeja Publicity for the best digital marketing, SEO, web development, and branding solutions in Mangalore, Karnataka — designed to grow and sustain your business with the highest returns.</span>
                    </div>
                </div>
                <div className={"tp-content-whychooseus1 flex overflow-hidden h-max gap-10 "}>
                    <div className={"tp-content-whychooseus1-left flex h-[40rem]"}>
                        <div
                            className={"w-[100%] object-cover flex flex-col gap-4 home-animation-6 justify-evenlyh-[100%]"}>
                            {
                                homepageData3.map((item, index) => {
                                    return (
                                        <div key={index} className={"w-[100%] border-b-[.01px] border-b-neutral-200 flex flex-col gap-2 tp-content-whychooseus1-left-head h-full home-animation-6"}>
                                            <div className={"flex w-full gap-5"}>
                                                <span className={"h-[100%] w-[2rem] bg-[white] text-orange-400 text-3xl tp-content-whychoose-lonely-span"}>0{item.id}</span>
                                                <div className={"flex flex-col justify-start w-full tp-content-whychoose-lonely-div"}>
                                                    <span className={"h-[100%] w-[80%] bg-[white] text-black flex items-center justify-start text-3xl hover:text-orange-400 transition-discrete"} onClick={() => handleMouseEnter(index)}>{item.title}</span>
                                                    <span className={"pt-1 pb-1 text-lg tp-whychooseus-animation"}>{hoverIndex === index && homepageData3[index].description}</span>
                                                </div>
                                            </div>

                                            <div className={`w-[100%] ${hoverIndex === index && 'h-[20rem]'} h-[0] flex items-start justify-center relative overflow-hidden tp-why-image-container`}>
                                                <img src={homepageData3[hoverIndex].src}
                                                    className={"w-[95%] h-[95%] object-cover rounded-2xl transition-opacity duration-500 ease-in tp-whychooseus-animation"}
                                                    alt={`Thumbeja Publicity - ${homepageData3[hoverIndex].title}`} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div
                        className={"tp-content-whychooseus1-right w-[50%] h-[40rem] flex items-start justify-center relative overflow-hidden home-animation-6"}>
                        <img src={homepageData3[hoverIndex].src}
                            className={`min-w-[100%] h-[100%]  rounded-3xl transition-opacity duration-500 ease-in object-cover opacity-100 tp-whychooseus-animation-img`}
                            alt={`Why choose Thumbeja Publicity - ${homepageData3[hoverIndex].title}`} />
                    </div>
                </div>
            </div>

            <Brands />

            {/* About Section */}
            <About />

            <Footer />
        </>
    );
};


export default Home;
