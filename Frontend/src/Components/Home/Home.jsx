import React, {useState} from 'react';
import "./home.css"
import Header from "../header/Header.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer.jsx";
import {homepageData2, homePageData, homepageData3, homepageData4,homeherodata} from "../../assets/JsonData/HomePageData.js";
import featureImg from '/src/assets/Images/features.png'
import processImg1 from '/src/assets/Images/processImg1.jpg'
import processImg2 from '/src/assets/Images/processImg2.jpg'
import processImg3 from '/src/assets/Images/processImg3.jpg'
import {useEffect} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import {useGSAP} from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"

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
        let ctx=gsap.context(()=>{
            gsap.from('.tp-whychooseus-animation',{x:-50,opacity:0});
            gsap.from('.tp-whychooseus-animation-img',{x:0,scale:0});
        })

        return () => ctx.revert()
    },[hoverIndex]);


    useGSAP(() => {

        // gsap.from(".home-animation-2", {
        //     scrollTrigger: {
        //         trigger: ".home-animation-2",
        //         toggleActions:'restart none none reverse',
        //         start: 'bottom 90%'
        //
        //
        //     }, stagger: 0.2, duration: 1, x: -100, opacity: 0
        // })

        gsap.from(".home-animation-3", {
            scrollTrigger: {
                trigger: ".home-animation-3",
                toggleActions:'restart none none reverse',
            },stagger:0.2, duration: 0.7, x: -100, opacity: 0
        })

        gsap.from(".home-animation-4", {
            scrollTrigger: {
                trigger: ".home-animation-4",
                start: 'top bottom-=20%',
                end: 'top center-=50%',
                toggleActions:'restart none none reverse',
            }, duration: 1, x: -100, opacity: 0
        })

        gsap.from(".home-animation-5", {
            scrollTrigger: {
                trigger: ".home-animation-5",
                toggleActions:'restart none none reverse',

            }, stagger: 0.2, duration: 1, x: -100, opacity: 0
        })

        gsap.from(".home-animation-6", {
            scrollTrigger: {
                trigger: ".home-animation-6",
                toggleActions:'restart none none reverse',

            }, stagger: 0.2, duration: 1, x: -100, opacity: 0
        })

    },[])

    useEffect(() => {
        let ctx=gsap.context(()=>{
            gsap.from('.home-animation-onclick-services', {
                x: -100, stagger: 0.3, opacity: 0,
                scrollTrigger: {
                    trigger: '.home-animation-onclick-services',
                }
            })
        });return () => ctx.revert()
    }, [Index])


        return (
        <>
            <Header/>
            <div className="tp-home w-full flex flex-col">
                <div className="relative w-[100%] h-[53rem]">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop
                        className="h-[100%]">
                        {/* Slide 1 */}
                        {
                              homeherodata.map((item,index) => {
                                return (
                                    <SwiperSlide key={index} className="relative">
                                        <img
                                            src={item.src}
                                            alt={item.text}
                                            className="w-[100%] h-[100%] object-cover brightness-60"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center flex-col bg-black/40 gap-4">
                                            <h1 className="text-white text-6xl text-center font-bold w-[100%] ">{item.text}</h1>
                                            <p className={"w-[60%] text-center text-2xl text-white"}>{item.description}</p>
                                        </div>
                                        <div className={"absolute w-[100%] bottom-[5rem] flex items-center justify-center "}>
                                            <a href={"#container-services"} className={"p-7 rounded-full flex flex-col items-center justify-center cursor-pointer tp-hero-drag-animation"}>
                                                <div className="arrow-down"></div>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                )
                            })

                        }
                    </Swiper>
                </div>
            </div>
            {/*1st content starting*/}

            {/*2st content starting*/}
            <div
                className={"tp-content-services h-max flex items-center w-[90%] m-auto mt-0 pb-10 pt-10 mb-0 flex-col justify-center gap-10" } id={"container-services"}>
                <div className={"tp-content-header-2 h-max p-2 flex items-center justify-evenly gap-10"}>
                        <div className={"w-[45%] h-[10rem] p-2 flex flex-col  justify-center gap-10 home-animation-3"}>
                        <span className={"text-lg home-animation-3"}>Our Services -------------------</span>
                        <span className={"text-5xl font-semibold home-animation-3"}>What we can do for <br/><span
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
                <div className="w-[85%] h-max tp-content-header-3 home-animation-3 pt-3 pb-3">
                    <div
                        className="tp-home-serv-sect1 w-full h-max flex items-center justify-center rounded-4xl bg-[#0a071f]">
                        {/* Left Buttons */}
                        <div
                            className="tp-home-serv-sect1-fc flex items-center justify-evenly flex-col w-[25rem] h-[35rem] home-animation-3">
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
                            <div className="text-white w-[80%] h-max flex justify-center flex-col gap-10 home-animation-3">
                                <div
                                    className="w-[100%] flex gap-10 flex-col tp-home-serv-sect2-text0 home-animation-onclick-services">
                                    <span className="text-4xl font-semibold">{homePageData[Index].title}</span>
                                    <p>{homePageData[Index].subtitle}</p>
                                </div>
                                <div
                                    className="p-2 flex flex-col gap-8 tp-home-serv-sect2-text1 home-animation-onclick-services">
                                    {homePageData[Index].services.map((service, i) => (
                                        <div key={i} className="flex items-center gap-3 pb-2">
                                            <FontAwesomeIcon icon={faCheck} size="xl"/>
                                            <span>{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"tp-content-features  h-max w-auto flex items-center justify-center text-white select-none home-animation-4 border-1"}>
                <div
                    className={"m-auto w-[77%] h-max bg-[#00001d] rounded-4xl flex items-center justify-evenly tp-home-serv-sect border-1 pt-5 pb-5"}>
                    <div className={"tp-content-features0 w-[50%] h-max flex flex-col gap-1 "}>
                        <div
                            className={"tp-content-features0-text h-[10rem] flex justify-center flex-col gap-6"}>
                            <span>Features -------</span>
                            <span className={"text-3xl font-semibold home-animation-4"}>
                                    The power of  digital marketing
                                </span>
                        </div>
                        <div className={"flex flex-wrap gap-9 pb-8 w-[100%] items-start home-animation-4"}>
                            {homepageData2.map((item, index) => {
                                return (
                                    <div key={index} className={"flex flex-col w-[45%] gap-4 h-max home-animation-4"}>
                                        <span className={"text-2xl"}>0{item.id}</span>
                                        <hr className={"h-max"}/>
                                        <span className={"text-2xl"}>
                                            {item.title}
                                        </span>
                                        <p>{item.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={"tp-content-features1 w-[30%] h-[80%] flex items-end home-animation-4"}>
                        <div className={"tp-home-feature-gradient overflow-hidden home-animation-4"}>
                            <img src={featureImg} className={"brightness-90 home-animation-4"} alt="yena"/>
                        </div>
                    </div>
                </div>
            </div>

            {/*Process container*/}
            <div className={"tp-content-process min-h-[25rem] w-[85%] m-auto mt-[7rem] flex flex-col gap-6 "}>
                <div
                    className={"flex flex-col gap-1 w-full h-[11rem] items-center justify-evenly tp-content-process0 text-center home-animation-5"}>
                    <span>------Process-----</span>
                    <span className={"text-5xl font-semibold"}>A systematic approach to<span
                        className={"text-[#5e3bab]"}><br/>digital marketing</span></span>
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
                                        <div className={"flex items-center  gap-6"}>
                                            <span className={""}>
                                                <FontAwesomeIcon icon={item.icon} size="4x"/>
                                            </span>
                                            <span className={"text-2xl font-semibold"}>{item.title}</span>
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
            <div className={"tp-content-whychooseus min-h-[20rem] w-[85%] m-auto pt-20 pb-15 flex flex-col gap-7 select-none"}>
                <div className={"tp-content-whychooseus0 h-[15rem] w-[100%] flex"}>
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
                        <div className={"w-[100%] object-cover flex flex-col gap-4 home-animation-6 justify-evenlyh-[100%]"}>
                            {
                                homepageData3.map((item, index) => {
                                    return (
                                        <div key={index}
                                             className={"w-[100%] border-b-[.01px] border-b-neutral-200 flex flex-col gap-2 tp-content-whychooseus1-left-head h-full home-animation-6"}>
                                            <div className={"flex w-full"}>
                                                <span
                                                    className={"h-[100%] w-[10%] bg-[white] text-red-800 flex items-center justify-start text-4xl"}>0{item.id}</span>
                                                <span
                                                    className={"h-[100%] w-[80%] bg-[white] text-black flex items-center justify-start text-4xl hover:text-orange-400 transition-discrete"}
                                                    onClick={() => handleMouseEnter(index)}>{item.title}</span>
                                            </div>
                                            <div className={"flex justify-start w-full"}>
                                                <span className={"pt-1 pb-1 ml-20 text-lg tp-whychooseus-animation"}>{hoverIndex === index && homepageData3[index].description}</span>
                                            </div>
                                            <div
                                                className={`w-[100%] ${hoverIndex === index && 'h-[20rem]'} h-[0] flex items-start justify-center relative overflow-hidden tp-why-image-container`}>
                                                <img src={homepageData3[hoverIndex].src}
                                                     className={"w-[95%] h-[95%] object-cover rounded-2xl transition-opacity duration-500 ease-in tp-whychooseus-animation"} alt=""/>
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
                             className={`min-w-[100%] h-[100%]  rounded-3xl transition-opacity duration-500 ease-in object-cover opacity-100 tp-whychooseus-animation-img`} alt=""/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};


export default Home;