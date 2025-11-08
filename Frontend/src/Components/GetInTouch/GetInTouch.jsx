import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import mountain from "../../assets/Images/Gemini_Generated_Image_su9pixsu9pixsu9p.png";

export function GetInTouch({onPressGetIntouch, mountainImage}) {
    const navigate = useNavigate();
    
    const handleClick = () => {
        if (onPressGetIntouch) {
            onPressGetIntouch();
        } else {
            navigate("/contact-thumbeja-publicity");
        }
    };

    return (
        <div className={"tp-get-in-touch h-[20em] m-auto w-[80%] rounded-3xl mb-20 mt-20 relative overflow-hidden tp-service-animation-3"}>
            <div className={""}>
                <img className={"w-full h-full object-cover absolute inset-0"} src={mountainImage || mountain} alt="Mountain background"/>
            </div>
            <div className={"absolute inset-0 bg-black/20"}></div>
            <div className={" w-[100%] h-[100%] z-10 flex flex-col items-center justify-center text-center tp-service-animation-3 relative px-4"}>
                <span className={"text-2xl md:text-4xl lg:text-5xl font-semibold z-30 p-1 md:p-8 flex flex-col items-center justify-center text-white leading-tight"}>
                    You have a project. We can take it to another level
                </span>
                <span className={"w-auto min-w-[15rem] md:w-[10rem] h-[2.5rem] md:h-[3rem] px-4 md:px-6 rounded-2xl cursor-pointer bg-[#000000c9] text-white gap-2 flex items-center justify-center text-sm md:text-xl lg:text-2xl mt-4 hover:bg-[#000000e6] transition-colors"} onClick={handleClick}>
                    <span>Get In Touch</span>
                    <FontAwesomeIcon icon={faArrowUp} size="sm" style={{"transform":"rotate(45deg)"}} />
                </span>
            </div>
        </div>
    );
}

export default GetInTouch;