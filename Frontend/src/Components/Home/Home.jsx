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
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import Brands from "../Brands/Brands.jsx";

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
                trigger: ".home-animation-6",
                toggleActions: 'restart none none reverse',
            },
            stagger: 0.2,
            duration: 1,
            x: -100,
            opacity: 0
        });

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
                title="Thumbeja Publicity - Digital Marketing & Branding Agency in Mangalore"
                description="Transform your business with Thumbeja Publicity's comprehensive digital marketing services including SEO, social media marketing, web development, printing, branding, and outdoor advertising in Mangalore."
                keywords="digital marketing Mangalore, SEO services, social media marketing, web development Mangalore, printing services, branding agency, outdoor advertising, graphic design, video marketing"
                url="https://thumbeja.com"
            />
            <Header />
            <div className="tp-hero-section w-full">
                <div className="relative w-full h-[100dvh]">
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
                            <SwiperSlide key={index} className="relative overflow-hidden">
                                {/* Slide Image */}
                                <img
                                    src={item.src}
                                    alt={item.text}
                                    className="w-full h-full object-cover brightness-[0.45] scale-105"
                                />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 flex items-center">
                                    <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                                        {/* Main Content */}
                                        <div className="lg:col-span-8 flex flex-col gap-8">
                                            <div className="overflow-hidden">
                                                <h1 className="tp-hero-title-gradient text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight tp-hero-title">
                                                    {item.text}
                                                </h1>
                                            </div>

                                            <p className="tp-hero-subtitle text-lg md:text-2xl max-w-2xl tp-hero-desc">
                                                {item.description}
                                            </p>

                                            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 tp-hero-btns">
                                                <Link to="/contact-thumbeja-publicity" className="tp-hero-btn-primary group w-full sm:w-auto">
                                                    Start Your Journey
                                                    <FontAwesomeIcon icon={faArrowRight} className="ml-3 transition-transform group-hover:translate-x-2" />
                                                </Link>
                                                <Link to="/services-thumbeja-publicity" className="tp-hero-btn-secondary w-full sm:w-auto text-center">
                                                    Our Portfolio
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Floating Highlight Cards (Desktop) */}
                                        <div className="hidden lg:col-span-4 lg:flex flex-col gap-6 tp-hero-stats">
                                            <div className="tp-hero-stat-card">
                                                <span className="tp-hero-stat-num">Focus</span>
                                                <span className="tp-hero-stat-label">Client Centric</span>
                                            </div>
                                            <div className="tp-hero-stat-card translate-x-12">
                                                <span className="tp-hero-stat-num">Vision</span>
                                                <span className="tp-hero-stat-label">Digital Innovation</span>
                                            </div>
                                            <div className="tp-hero-stat-card">
                                                <span className="tp-hero-stat-num">Growth</span>
                                                <span className="tp-hero-stat-label">Brand Scalability</span>
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

            {/*2st content starting*/}
            <div
                className={"tp-content-services h-max flex items-center w-[90%] m-auto mt-0 pb-10 pt-10     flex-col justify-center gap-10"}
                id={"container-services"}>
                <div className={"tp-content-header-2 h-max p-2 flex items-center justify-evenly gap-10"}>
                    <div className={"w-[45%] h-[10rem] p-2 flex flex-col  justify-center gap-10 home-animation-3"}>
                        <span className={"text-lg home-animation-3"}>Our Services -------------------</span>
                        <span className={"text-5xl font-semibold home-animation-3"}>What we can do for <br /><span
                            className={"text-[#5439a3]"}>our clients</span></span>
                    </div>
                    <div className={"w-[30%] flex h-[10rem] items-center justify-evenly home-animation-3"}>
                        <p className={"text-lg"}>
                            We’re a team of strategists working globally with the largest brands, we believe that
                            progress only happens when you refuse to play things safe. We combine ideas and behaviors.
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

            {/*<div*/}
            {/*    className={"tp-content-features  h-max w-auto flex items-center justify-center text-white select-none home-animation-4 border-1"}>*/}
            {/*    <div*/}
            {/*        className={"m-auto w-[77%] h-max bg-[#00001d] rounded-4xl flex items-center justify-evenly tp-home-serv-sect border-1 pt-5 pb-5"}>*/}
            {/*        <div className={"tp-content-features0 w-[50%] h-max flex flex-col gap-1 "}>*/}
            {/*            <div*/}
            {/*                className={"tp-content-features0-text h-[10rem] flex justify-center flex-col gap-6"}>*/}
            {/*                <span>Features -------</span>*/}
            {/*                <span className={"text-3xl font-semibold home-animation-4"}>*/}
            {/*                        The power of  digital marketing*/}
            {/*                    </span>*/}
            {/*            </div>*/}
            {/*            <div className={"flex flex-wrap gap-9 pb-8 w-[100%] items-start home-animation-4"}>*/}
            {/*                {homepageData2.map((item, index) => {*/}
            {/*                    return (*/}
            {/*                        <div key={index} className={"flex flex-col w-[45%] gap-4 h-max home-animation-4"}>*/}
            {/*                            <span className={"text-2xl"}>0{item.id}</span>*/}
            {/*                            <hr className={"h-max"}/>*/}
            {/*                            <span className={"text-2xl"}>*/}
            {/*                                {item.title}*/}
            {/*                            </span>*/}
            {/*                            <p>{item.description}</p>*/}
            {/*                        </div>*/}
            {/*                    )*/}
            {/*                })}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={"tp-content-features1 w-[30%] h-[80%] flex items-end home-animation-4"}>*/}
            {/*            <div className={"tp-home-feature-gradient overflow-hidden home-animation-4"}>*/}
            {/*                <img src={featureImg} className={"brightness-90 home-animation-4"} alt="yena"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <Brands className="home-animation-7" />

            {/*Process container*/}
            <div className={"tp-content-process min-h-[25rem] w-[85%] m-auto mt-[7rem] flex flex-col gap-6 "}>
                <div
                    className={"flex flex-col gap-1 w-full h-[11rem] items-center justify-evenly tp-content-process0 text-center home-animation-5"}>
                    <span>------Process-----</span>
                    <span className={"text-5xl font-semibold"}>A systematic approach to<span
                        className={"text-[#5e3bab]"}><br />digital marketing</span></span>
                </div>
                <div className={"flex text-black h-max w-full tp-content-process1"}>
                    <div className={"flex w-[50%] h-full items-center justify-center tp-content-process1-inner"}>
                        <div className="w-[50%] flex flex-col justify-center items-center gap-10  h-full">
                            <div className="tp-process-1 w-[100%] home-animation-5">
                                <img
                                    src={processImg1}
                                    className="object-cover w-full h-full rounded-full tp-process-img1"
                                    alt=""
                                />
                            </div>
                            <div className="tp-process-2 w-[100%] home-animation-5">
                                <img
                                    src={processImg2}
                                    className="object-cover w-full h-full rounded-full tp-process-img1"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="w-[100%] flex flex-col justify-center items-center gap-10 h-full">
                            <div className="tp-process-3 w-[100%] home-animation-5">
                                <img
                                    src={processImg3}
                                    className="object-cover w-full h-full rounded-full tp-process-img1"
                                    alt=""
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
                        <span className={"text-lg"}>Why Choose Us-----</span>
                        <span
                            className={"text-5xl text-[#002221] leading-tight font-semibold "}>Effective and affordable <span
                                className={"text-[#5e3bab]"}>marketing solutions</span> </span>
                    </div>
                    <div className={"flex w-[50%] flex-col justify-center home-animation-6"}>
                        <span className={"text-lg"}>This agency is not just its expertise but a personalized approach that tailors strategies to each clients unique needs.</span>
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
                                                    alt="" />
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
                            alt="" />
                    </div>
                </div>
            </div>

            {/* About Section */}
            <About />

            <Footer />
        </>
    );
};


export default Home;