import React, {useEffect, useRef, useState} from 'react';
import Header from "../header/Header.jsx";
import "./Corporate.css"
import Footer from "../Footer/Footer.jsx";
import {
    CarouselBox,
    ImageModel,
    MultiCards,
    ShadCnPagination
} from "./Carousal.jsx";
import axios from "axios";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import galleryData from "@/assets/JsonData/demoDataCorporate.jsx";

const DriveAPIKEY = "AIzaSyApjsVhgf3KAZNmCHgURVwpc3vTnas1lqk"
const FolderID = "1l2UBrT3MH3iuNdchZTNCFQbZ4rrpMAQk"

// const url = `https://www.googleapis.com/drive/v3/files?q='${FolderID}'+in+parents+and+mimeType+contains+'image/'&fields=files(id,name,mimeType,description,thumbnailLink)&key=${DriveAPIKEY}`

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP)

const CorporateGallery = () => {
    const [data, setData] = React.useState(galleryData);
    const wrapperRef = useRef(null);
    const smootherRef = useRef(null);


    // The state of the MultiCardmodel
    let [image, setImage]=useState({
        image:"",
        isVisible:false
    });


    // Fetch data
    // useEffect(() => {
    //     axios.get(url).then((response) => {
    //         setData(response.data.files);
    //         console.log(response.data.files)
    //     })
    //         .catch(console.error);
    // }, []);


    useGSAP(() => {
       
        // smootherRef.current = ScrollSmoother.create({
        //     wrapper: wrapperRef.current,
        //     content: ".cpr-content",
        //     smooth: 1,
        //     smoothTouch: 0.1,
        //     effects: true
        // });

       
        gsap.from(".fadeYin", {
            ease: "power1.out",
            opacity: 0,
            y: -320,
            duration: 1
        });

        gsap.from(".fadeXin", {
            ease: "power1.out",
            opacity: 0,
            stagger: 0.5,
            x: 320,
            delay: 0.2,
            duration: 1
        });

    }, { scope: wrapperRef }); 

   
    useGSAP(() => {
        if (data.length === 0) return; 

        ScrollTrigger.refresh();

        gsap.from(".fadeUp", {
            ease: "power1.out",
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".fadeUp",
                start: "top center+=200",
                end: "bottom",
                toggleActions: "play none none reverse",
                endTrigger:".pagination"
            }
        });

    }, { scope: wrapperRef, dependencies: [data] }); 

    return (
        <>
            <div ref={wrapperRef} className="wrapper overflow-hidden">
                <Header />
                <div className="cpr-content">
                   {/* Hero Section */}
                    <div className="h-[40rem] w-full relative overflow-hidden -mt-[5rem] bg-slate-950">
                        <img
                            src={"https://images.unsplash.com/photo-1566140967404-b8b3932483f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            className="w-full h-full object-cover block blur-[0.2rem] brightness-[60%] shadow-blue-600 shadow-2xl image-mask"
                            alt=""
                        />
                        <div className="font-bold absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-full h-full p-3 flex flex-col items-center justify-center z-5">
                            <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-semibold tracking-tight gradient-text fadeYin">
                                Studio
                            </h1>
                        </div>
                    </div>

                    {/* Highlights Section */}
                    <div className="h-[25rem] max-h-max bg-slate-950 place-content-end overflow-hidden p-6">
                        <h1 className="text-[clamp(2.2rem,3.3vw,10rem)] text-white p-5 text-center leading-13 capitalize fadeXin">
                            Corporate highlights
                        </h1>
                        <p className="text-[clamp(1rem,1.3vw,10rem)] text-white/70 text-center w-[100%] m-auto fadeXin">
                            Discover the key milestones, achievements, and innovations that have defined our journey and
                            propelled our growth.
                        </p>
                    </div>

                    {/* Carousel Section */}
                    <div className="w-full min-h-[20rem] cr-image overflow-hidden">
                        <CarouselBox animation={"fadeXin"} api={DriveAPIKEY} dummydata={galleryData} />
                    </div>

                    {/* Gallery Section */}
                    <div className="h-max p-3 bg-[#fcefb0] border-blue-900 overflow-hidden w-full ">
                        <div className="flex flex-col pb-4 lg:w-[90%] m-auto p-4">
                            <span className="text-[clamp(2.2rem,3.3vw,10rem)] font-semibold leading-20 text-slate-800 fadeUp">
                                Visual Overview
                            </span>
                            <span className="text-[clamp(1rem,1.2vw,1.5rem)] text-slate-700 fadeUp">
                                A comprehensive visual representation of our company and its capabilities
                            </span>
                        </div>
                        <MultiCards data={data} animation={"fadeUp"} Imagesetter={{image,setImage}}  />
                        <ShadCnPagination end={"pagination"} />
                        <ImageModel Imagesetter={{image, setImage}} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default CorporateGallery;