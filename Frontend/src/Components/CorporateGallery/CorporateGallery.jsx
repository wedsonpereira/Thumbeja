import React, { useEffect, useRef, useState } from 'react';
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

const DriveAPIKEY = "AIzaSyCxo3L0EhlmszOunHeU8iIPcuL9J3H9QaQ"
const FolderID = "1l2UBrT3MH3iuNdchZTNCFQbZ4rrpMAQk"

const url = `https://www.googleapis.com/drive/v3/files?q='${FolderID}'+in+parents+and+mimeType+contains+'image/'&fields=files(id,name,mimeType,description,thumbnailLink)&key=${DriveAPIKEY}`

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP)

const CorporateGallery = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const wrapperRef = useRef(null);
    // const smootherRef = useRef(null);
    const gallerySectionRef = useRef(null);
    const pageSize = 20;


    // The state of the MultiCardmodel
    let [image, setImage] = useState({
        image: "",
        isVisible: false
    });


    // Fetch data
    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data.files);
        })
            .catch(console.error);
    }, []);


    useGSAP(() => {

        gsap.from(".fadeYin", {
            ease: "power1.out",
            opacity: 0,
            y: -70,
            duration: 1
        });

        gsap.from(".fadeXin", {
            ease: "power1.out",
            opacity: 0,
            stagger: 0.5,
            y: -20,
            delay: 0.2,
            duration: 1
        });

    }, { scope: wrapperRef });

    // Title animation should start after the section is ~200px into the viewport
    useGSAP(() => {
        if (!gallerySectionRef.current) return;

        const ctx = gsap.context(() => {
            // Set initial state
            gsap.set(".gallery-title", { opacity: 0, y: 40 });

            gsap.to(".gallery-title", {
                ease: "power1.out",
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: gallerySectionRef.current,
                    start: "top bottom-=300", // Triggers when section is 200px into viewport
                    end: "bottom top",
                    toggleActions: "play complete none reverse", // play on enter, complete on leave, none on re-enter, reverse on leave-back
                },
            });
        }, gallerySectionRef);

        return () => ctx.revert();
    }, { scope: wrapperRef, dependencies: [data] });

    const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
    const pagedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [currentPage, totalPages]);

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
                    <div className="min-h-[25rem] max-h-max bg-slate-950 place-content-end overflow-hidden p-6">
                        <h1 className="text-[clamp(2.2rem,3.3vw,10rem)] text-white lg:p-5 p-0 text-center leading-13 capitalize fadeXin">
                            Corporate highlights
                        </h1>
                        <p className="text-[clamp(1rem,1.3vw,10rem)] text-white/70 text-center w-[100%] m-auto fadeXin">
                            Discover the key milestones, achievements, and innovations that have defined our journey and
                            propelled our growth.
                        </p>
                    </div>

                    {/* Carousel Section */}
                    <div className="w-full min-h-[20rem] cr-image overflow-hidden">
                        <CarouselBox animation={"fadeXin"} api={DriveAPIKEY} data={data} />
                    </div>

                    {/* Gallery Section */}
                    <div ref={gallerySectionRef} className="h-max p-3 bg-[#fcefb0] border-blue-900 overflow-hidden w-full transition-all">
                        <div className="flex flex-col pb-4 lg:w-[90%] m-auto pt-14 lg:!p-10">
                            <span className="text-[clamp(2.2rem,3.3vw,10rem)] font-semibold leading-20 text-slate-800 gallery-title">
                                Visual Overview
                            </span>
                            <span className="text-[clamp(1rem,1.2vw,1.5rem)] text-slate-700 gallery-title">
                                A comprehensive visual representation of our company and its capabilities
                            </span>
                        </div>
                        <MultiCards
                            data={pagedData}
                            animation={"multiCardItem"}
                            Imagesetter={{ image, setImage }}
                            currentPage={currentPage}
                            triggerRef={gallerySectionRef}
                        />
                        <ShadCnPagination end={"pagination"} currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                        <ImageModel Imagesetter={{ image, setImage }} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default CorporateGallery;
