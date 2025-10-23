import React, {useEffect} from 'react';
import Header from "../header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import jobData from "../../assets/JsonData/JobData.js";
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import "./Career.css"
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Career = () => {

    const [hoverindex, setindex] = React.useState(0);

    const updateContent = (id) => {
        setindex(id);
    }


    useGSAP(()=>{
            gsap.from('.tp-career-animation-1', {x: -100, opacity: 0, ease: "Power2.easeOut", stagger: 0.2});

            // gsap.from('.tp-career-animation-2', {
            //     y: +70, opacity: 0, ease: "Power2.easeOut", stagger: 0.2, delay: 0.2,
            //     scrollTrigger: {
            //         trigger: '.tp-career-animation-2',
            //         start: 'top-=600px center',
            //         end: 'bottom-=400px top',
            //         scrub: true,
            //     }
            // });
    },[])

    useEffect(() => {
        let ctx=gsap.context(()=>{
            gsap.from('.tp-career-animation-whileclick', {x: -100, opacity: 0, ease: "power1", stagger: 0.1});
        })
        return ()=> ctx.revert()
    },[hoverindex])

    return (
        <>
            <Header/>
            <div className={"tp-career-main h-max flex flex-col  items-center bg-[#fefdf7] pb-8 gap-10"}>
                <div className={"tp-career0 w-[70%] text-center flex flex-col h-max gap-5 pt-20 items-center tp-career-animation-1"}>
                    <span>------Career Page-------</span>
                    <span className={"text-5xl font-semibold text-[#091e42]"}>Let's build something together for the upcoming future</span>
                </div>
                <div className={"tp-career1 w-[90%] p-2 flex flex-col gap-6 items-start tp-career-animation-1"}>
                    <span>
                        Join our team---------
                    </span>
                    <span className={"text-5xl text-[#091e42]"}>
                        We are actively hiring for
                    </span>
                </div>
                <div className={"tp-career2 w-[90%] flex h-full justify-evenly flex-col"}>
                    <div className={"w-[100%] h-max flex justify-start flex-wrap gap-4 items-center tp-career-animation-1"}>
                        {
                            jobData.map((item, index) => {
                                return (
                                    <button key={index}
                                            className={`p-3 ${hoverindex===index? "bg-[#091e42] text-[#ffffff]" : "bg-[#cbcbcb] text-[#091e68] "} w-max rounded-3xl cursor-pointer hover:scale-105 transition border-[.2] text-lg`}
                                            onClick={() => updateContent(index)}>{item.title}</button>
                                )
                            })
                        }
                    </div>
                    <div className={"w-[100%] transition h-max"}>
                        {/* Job Title */}
                        <h1 className="text-4xl pt-8 font-bold mb-4 tp-career-animation-whileclick">{jobData[hoverindex].title}</h1>

                        {/* Loop through sections */}
                        {jobData[hoverindex].sections.map((section, secIndex) => (
                            <div key={secIndex} className="mb-6 p-3 tp-career-animation-whileclick">
                                <h2 className="text-2xl font-semibold mb-2 ">{section.heading}</h2>

                                {/*(subHeadings) */}
                                {section.items &&
                                    section.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="mb-3 pt-1 tp-career-animation-whileclick">
                                            <h3 className="text-xl font-medium mt-2">{item.subHeading}</h3>
                                            <ul className="list-disc list-inside pl-4">
                                                {item.points.map((point, pointIndex) => (
                                                    <li key={pointIndex}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}

                                {/*points*/}
                                {section.points && (
                                    <ul className="list-disc list-inside pl-4 tp-career-animation-whileclick">
                                        {section.points.map((point, pointIndex) => (
                                            <li key={pointIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className={"p-2 flex items-center justify-start tp-career-animation-whileclick"}>
                        <a href={jobData[hoverindex].url}  className={"border-1 p-2 hover:bg-[#091e42] hover:text-white border-[.1%]"}>Apply Now</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Career;