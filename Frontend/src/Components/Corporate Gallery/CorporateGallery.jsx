import React, {useEffect} from 'react';
import Header from "../header/Header.jsx";
import axios from "axios";
import "./Corporate.css"
import Footer from "../Footer/Footer.jsx";
import {CarouselBox, MultiCards} from "@/Components/Corporate Gallery/Carousal.tsx";
import ShadCnPagination from "@/Components/Corporate Gallery/ShadCnPagination.tsx";


const DriveAPIKEY = ""
const FolderID = "1l2UBrT3MH3iuNdchZTNCFQbZ4rrpMAQk"

const url = `https://www.googleapis.com/drive/v3/files?q='${FolderID}'+in+parents+and+mimeType+contains+'image/'&fields=files(id,name,mimeType,thumbnailLink)&key=${DriveAPIKEY}`

const CorporateGallery = () => {

    const [data, setData] = React.useState([]);

    useEffect(()=>{

        axios.get(url).then((req,res) => {
            setData(res.data);
            console.log(res.data)
        }).catch((error) => {
            console.log(error);
        })

    },[])

        // console.log("Logging", data)
    return (
        <div>
            <Header/>
                <div className=" h-[40rem] w-full relative overflow-hidden -mt-[5rem] bg-slate-950">
                <img
                    src={"https://images.unsplash.com/photo-1566140967404-b8b3932483f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        className="w-full h-full object-cover block blur-[0.2rem] brightness-[60%] shadow-blue-600 shadow-2xl image-mask"
                    alt=""
                />

                <div  className="font-bold absolute left-1/2 top-[50%] -translate-x-1/2  -translate-y-1/2 w-full h-full  p-3 flex flex-col items-center justify-center z-5">
                    <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-semibold tracking-tight gradient-text">
                        Studio
                    </h1>
                    {/*<p className="text-[clamp(1rem,1.2vw,1.5rem)] w-[90vw] md:w-[60vw] text-center text-[#cbd5e1]">*/}
                    {/*    A visual showcase of our corporate journey, milestones, and team moments that reflect our values*/}
                    {/*    and growth.*/}
                    {/*</p>*/}
                </div>
            </div>
            <div className="min-h-[13rem] max-h-max bg-slate-950 place-content-end">
                <h1 className={"text-[clamp(2.2rem,3.3vw,10rem)] text-white p-3 text-center leading-13 capitalize"}>Corporate
                    highlights</h1>
                <p className={"text-[clamp(1rem,1.3vw,10rem)] text-white/70 text-center w-[100%] m-auto"}>Lorem ipsum
                    dolor sit ameticiis quae sit tempora tempore veniam vitae, voluptatibus!</p>
            </div>

            <div className="w-full h-[90vh] cr-image">
                <CarouselBox data={data}/>
            </div>

            <div className={"h-max p-14 bg-[#fcefb0] border-blue-900"}>
                <div className={"flex flex-col pb-4"}>
                    <span className={"text-[clamp(2.2rem,3.3vw,10rem)] font-semibold leading-20 text-slate-800"}>Visual Overview</span>
                    <span className={"text-[clamp(1rem,1.2vw,1.5rem)] text-slate-700"}>A comprehensive visual representation of our company and its capabilities</span>
                </div>
                <MultiCards/>
                <div className={"w-full items-center flex mt-5 justify-center h-[6rem] bg-slate-800 p-2"}>
                    <ShadCnPagination/>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default CorporateGallery;