import React, {memo} from 'react';
import "./header.css"
import {Link, useNavigate} from "react-router-dom";
import thumbeja from "/src/assets/Images/thunbejalogo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const navigateTo = useNavigate();

    const imageClickHandler = () => {
        navigateTo("/")
    }

    const handleburgerClick = () => {
        let burger = document.querySelector(".burger");
        let navcontainer=document.querySelector(".nav");
        burger.classList.toggle("nav-open");
        navcontainer.classList.toggle("nav-container");
    }


    return (
        <>
            <div className="tp-header sticky z-50 w-[100%] flex items-center justify-center border-1">
                <div className="tp-header-left">
                    <div className={"tp-image"}>
                        <img src={thumbeja} className={"tp-logo"} alt="text" onClick={imageClickHandler}/>
                    </div>
                </div>

                {/*the component is hidden*/}
                <div className="tp-header-nav h-[80%] w-[38%] gap-x-4 text-[1.2rem] flex justify-evenly items-center relative text-center">
                    <div className="tp-underline relative flex items-center justify-center">
                        <Link className={"text-center pr-2 pl-2"} to={"/"}>Home</Link>
                    </div>
                    <div className="tp-underline relative flex items-center justify-center">
                        <Link className={"text-center pr-2 pl-2"} to={"/career-thumbeja-publicity"}>Career</Link>
                    </div>
                    <div className="tp-underline relative flex items-center justify-center">
                        <Link className={"text-center pr-2 pl-2"} to={"/services-thumbeja-publicity"}>Services</Link>
                    </div>
                </div>

                {/*This component is the replacement of the 2 componants*/}
                <div className={"relative w-[5rem] h-full hidden burger-menu "}>
                    <button className={"burger"} onClick={() => handleburgerClick()}>
                        <div className={"manu-hamburger"}></div>
                    </button>
                </div>

                {/*the component is hidden*/}
                <div className={"tp-header-nav tp-header-right "}>
                    <Link to="/contact-thumbeja-publicity">
                        <button
                            className={"p-4 font-bold border-2 bg-[#091e42] cursor-pointer text-white rounded-full  border-none outline-none hover:bg-[#091e78] transition"}>
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
            <div className={"hidden w-full h-[100dvh] border-1 z-[100] nav"}>
                <ul className={"w-[100%] flex nav-links flex-col items-center justify-center h-[40rem] gap-10 text-2xl"}>
                    <Link className={'w-[70%] border-b-2 text-center leading-13 border-blue-600'} to={'/'}><li >Home</li></Link>
                    <Link className={'w-[70%] border-b-2 text-center leading-13 border-blue-600'} to={'/services-thumbeja-publicity'}><li>Services</li></Link>
                    <Link className={'w-[70%] border-b-2 text-center leading-13 border-blue-600'} to={'/career-thumbeja-publicity'}><li>career</li></Link>
                </ul>
                <Link to={"/contact-thumbeja-publicity"} className={"w-[100%] text-white p-5 bg-blue-900 flex items-center"}>
                    <h2 className={"p-1"}>Contact</h2>
                    <FontAwesomeIcon className={"p-1"} icon={faArrowRight} size="lg" />
                </Link>
            </div>

        </>

    );
};

export default memo(Header);