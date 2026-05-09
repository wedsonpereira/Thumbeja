import React, { useState } from 'react';
import "./home.css"
import Header from "../header/Header.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck, faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
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
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import About from "../About/About.jsx";
import { Link } from "react-router-dom"
import Brands from "../Brands/Brands.jsx";
import productsData from "../../assets/JsonData/ProductsData.js";

gsap.registerPlugin(ScrollTrigger)

const Home = () => {

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

        gsap.from(".home-animation-6", {
            scrollTrigger: {
                trigger: ".tp-content-whychooseus",
                toggleActions: 'restart none none reverse',
            },
            stagger: 0.2,
            duration: 0.8,
            x: -100,
            opacity: 0
        });

        const productsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".tp-products-section",
                start: "top 72%",
                toggleActions: "play none none reverse",
            }
        });

        productsTimeline
            .from(".tp-products-intro > *", {
                y: 34,
                opacity: 0,
                duration: 0.75,
                stagger: 0.12,
                ease: "power3.out"
            })
            .from(".tp-products-coverflow-wrap", {
                y: 48,
                opacity: 0,
                duration: 0.85,
                ease: "power3.out"
            }, "-=0.35")
            .from(".tp-product-cover-card", {
                opacity: 0,
                y: 24,
                duration: 0.65,
                stagger: 0.06,
                ease: "power2.out"
            }, "-=0.45");

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
            <div className="min-h-max py-20 tp-products-section">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-14 tp-products-intro">
                        <span className="text-lg text-slate-600">----------Our Products---------</span>
                        <h2 className="text-5xl font-semibold text-slate-900 mt-4 tp-products-heading">
                            Explore Our <span className="text-[#5439a3]">Digital Solutions</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
                            Innovative digital marketing products and tools designed to transform your business operations and online presence in Mangalore, Karnataka.
                        </p>
                    </div>
                </div>

                <div className="tp-products-coverflow-wrap">
                    <Swiper
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        effect="coverflow"
                        grabCursor
                        centeredSlides
                        loop
                        slidesPerView="auto"
                        speed={650}
                        roundLengths
                        autoplay={{ delay: 3600, disableOnInteraction: false, pauseOnMouseEnter: true, waitForTransition: true }}
                        pagination={{ clickable: true }}
                        coverflowEffect={{
                            rotate: 14,
                            stretch: "40%",
                            depth: 170,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        className="tp-products-coverflow"
                    >
                        {productsData.map((item) => {
                            const isInternal = item.type === "internal";
                            const cardContent = (
                                <article className="tp-product-cover-card">
                                    <img
                                        src={item.image}
                                        alt={`${item.title} preview`}
                                        className="tp-product-cover-image"
                                        loading="lazy"
                                        decoding="async"
                                        sizes="(max-width: 768px) 82vw, (max-width: 1280px) 52vw, 900px"
                                    />
                                    <div className={`tp-product-cover-icon rounded-full ${item.icon ? "has-uploaded-icon" : item.colorClass}`}>
                                        {item.icon ? (
                                            <img src={item.icon} alt="" aria-hidden="true" />
                                        ) : (
                                            item.initials
                                        )}
                                    </div>
                                    <div className="tp-product-cover-body">
                                        <span className="tp-product-cover-kicker">Product</span>
                                        <h3>{item.title}</h3>
                                        <div className="tp-product-cover-details">
                                            <div className="tp-product-cover-stats">
                                                <span>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    {item.rating}
                                                </span>
                                                <span>
                                                    <FontAwesomeIcon icon={faUsers} />
                                                    {item.totalUsers}
                                                </span>
                                            </div>
                                            <p>{item.description}</p>
                                            <span className={`tp-product-cover-link ${item.textClass}`}>
                                                Explore product <FontAwesomeIcon icon={faArrowRight} />
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            );

                            return (
                                <SwiperSlide key={item.id} className="tp-products-cover-slide">
                                    {isInternal ? (
                                        <Link to={item.link} className="tp-product-cover-link-wrap" aria-label={`Explore ${item.title}`}>
                                            {cardContent}
                                        </Link>
                                    ) : (
                                        <a
                                            href={item.link}
                                            className="tp-product-cover-link-wrap"
                                            target={item.type === "external" ? "_blank" : undefined}
                                            rel={item.type === "external" ? "noopener noreferrer" : undefined}
                                            aria-label={`Explore ${item.title}`}
                                        >
                                            {cardContent}
                                        </a>
                                    )}
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
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
