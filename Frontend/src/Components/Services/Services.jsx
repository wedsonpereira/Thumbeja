import React from 'react';
import Header from "../header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Services.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import mountain from "/src/assets/Images/Gemini_Generated_Image_su9pixsu9pixsu9p.png"
import servicesData from "../../assets/JsonData/ServicesData.js";
import {Link, useNavigate} from "react-router-dom";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)
const Services = () => {

    const navigate = useNavigate();

    const handleGetinTouch=()=>{
        navigate("/contact");
    }

    useGSAP(()=>{
        gsap.from(".tp-service-animation-1", {x: -200, opacity: 0})

        gsap.from(".tp-service-animation-2", {y: -200, opacity: 0,stagger:0.2, delay: 0.4})

        gsap.from(".tp-service-animation-3", {y: -100, opacity: 0,
            scrollTrigger:{
                trigger: '.tp-service-animation-3',
                toggleActions: 'restart none none none',
                scrub:true,
                end:'top center-=100px',
            }})

    })

    return (
        <>
            <Header />
            <div className={" h-max pb-8 pt-15 flex flex-col items-center bg-[#fefdf7] w-full"}>
                {/*services header */}
                <div className={"m-0 flex items-center h-max justify-center w-[100%] flex-col"}>
                    <div className={"w-max h-max p-4 items-center justify-center tp-service-animation-1"}>
                        <span>----------Our services----------</span>
                    </div>
                    <div className={"w-[100%] h-max p-4 flex justify-center items-center text-800px tp-service-animation-1"}>
                        <span className={"text-[3rem] text-[#091e42] font-semibold text-center "}>
                            Introducing Our All-in-One Digital Services
                        </span>
                    </div>
                    <div className={"w-[100%] text-center h-max p-4 text-800px tp-service-animation-1"}>
                        <p className={"text-2xl text-neutral-500 w-[80%] m-auto"}>
                            We offer printing, design, web development, hosting, chatbots, and photo editing.
                            Our services also include social media marketing to grow your brand.
                        </p>
                    </div>
                </div>
                {/*Services container*/}
                <div className={"flex justify-center gap-7 flex-wrap h-max w-[80%] service-container"}>
                    {/*card start*/}
                    {
                        servicesData.map((service, index) => {
                            return (
                                <div key={index} className={"services-card-container w-[23rem] h-[28rem] tp-service-animation-2"}>
                                    <div className={"services-card-container-inner tp-serv-card grid grid-cols-2 grid-rows-[30%_70%] h-[100%] rounded-2xl"}>
                                        <div className="flex items-center h-full justify-center">
                                            <img src={service.svg} alt="Service Image" className={"service-container-inner-img"} />
                                        </div>
                                        <div className="flex items-center h-full justify-center">
                                            <Link className={"w-[30%] h-[42%] bg-[#ffffff]  rounded-full flex items-center justify-center"} to={""}>
                                                <FontAwesomeIcon
                                                    icon={faArrowRight}
                                                    // size="2xl"
                                                    className={""}
                                                    style={{ transform: "rotate(-45deg)", color: "black" }}
                                                />
                                            </Link>
                                        </div>
                                        <div className="col-span-2 text-white w-[100%] p-6 flex flex-col items-start justify-end relative z-10">
                                            <span className={"services-card-header text-3xl w-[100%] p-2"}>{service.contentH}</span>
                                            <p className={"services-card-desc p-2 text-[0.8rem]"}>{service.contentDesc}</p>
                                        </div>
                                    </div>
                                    {/*bg image*/}
                                    <div className={"service-card-bg-wave h-full"}>
                                        <svg className={"services-svg-shape"} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#03045e" d="M29.3,-42.6C40.6,-44.3,54,-41.6,58.3,-33.8C62.6,-26,57.8,-13,57.1,-0.4C56.4,12.2,59.9,24.4,52.6,27C45.3,29.6,27.2,22.6,16.6,29.4C6,36.1,3,56.6,-4,63.5C-11,70.5,-22,63.9,-32,56.8C-41.9,49.7,-50.8,42.1,-52.8,32.5C-54.8,23,-49.9,11.5,-47.6,1.4C-45.2,-8.8,-45.4,-17.5,-42,-24.7C-38.6,-31.8,-31.7,-37.3,-24.1,-37.7C-16.5,-38.2,-8.2,-33.5,0.4,-34.2C9,-34.9,18.1,-40.9,29.3,-42.6Z" transform="translate(100 100)" />
                                        </svg>
                                    </div>
                                </div>
                            )

                            }
                        )
                    }

                </div>
            </div>
            <GetInTouch onPressGetIntouch={()=>handleGetinTouch()}/>

            <Footer/>
        </>
    );
};


export function GetInTouch({onPressGetIntouch}) {
    return (

    <div className={"tp-get-in-touch h-[20em] m-auto w-[80%] rounded-3xl mb-20 mt-20 relative bg-[#5D47ACCF] overflow-hidden tp-service-animation-3"}>
        <div className={""}>
            <img className={"w-full h-full object-cover absolute -z-10"} src={mountain} alt=""/>
        </div>
        <div className={" w-[100%] h-[100%] z-10 flex flex-col items-center justify-center text-800px text-center tp-service-animation-3"}>
                    <span className={"text-5xl font-semibold top-1 z-30 p-8 flex flex-col items-center justify-center text-white"}>
                        You have a project. We can take it to another level
                    </span>
            <span className={"w-[10em] h-[3em] rounded-2xl cursor-pointer bg-[#000000c9] text-white gap-2 flex items-center justify-center text-2xl"} onClick={onPressGetIntouch}>
                        <span>Get In Touch</span>
                        <FontAwesomeIcon icon={faArrowUp} size="sm" style={{"transform":"rotate(45deg)"}} />
                    </span>
        </div>
    </div>
    )
}

export default Services;