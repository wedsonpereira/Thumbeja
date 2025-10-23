import React from 'react';
import "./header.css"
import {Link, useNavigate} from "react-router-dom";
import thumbeja from "/src/assets/Images/thunbejalogo.png";

const Header = () => {

    const navigateTo = useNavigate();

    const imageClickHandler=()=>{
        navigateTo("/")
    }

        // const contactUsHandler=()=>{
        //     console.log("contactUsHandler");
        //     navigateTo("/contact")
        // }

    return (
        <div className="tp-header h-[7rem] sticky z-50 w-[100vw] flex items-center justify-center">
            <div className="tp-header-left">
                <div className={"tp-image"}>
                        <img src={thumbeja} className={"tp-logo"} alt="text" onClick={imageClickHandler} />
                </div>
            </div>
            <div className="tp-header-nav flex h-[80%] w-[38%] gap-x-4 text-[1.2rem] justify-evenly items-center relative text-center">
                <div className="tp-underline relative flex items-center justify-center">
                    <Link className={" text-center pr-2 pl-2"} to={"/"}>Home</Link>
                </div>
                <div className="tp-underline relative flex items-center justify-center">
                    <Link className={"text-center pr-2 pl-2"} to={"/career"}>Career</Link>
                </div>
                <div className="tp-underline relative flex items-center justify-center">
                    <Link className={"text-center pr-2 pl-2"} to={"/services"}>Services</Link>
                </div>

            </div>
            <div className={"tp-burger-menu-container hidden w-[20%] h-full"}>
                <input id="menu__toggle" type="checkbox"/>
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>

                <ul className="menu__box">
                    <li><a className="menu__item" href="/">Home</a></li>
                    <li><a className="menu__item" href="/services">Services</a></li>
                    <li><a className="menu__item" href="/contact">Contact Us</a></li>
                    <li><a className="menu__item" href="/career">Career</a></li>
                    {/*<li><a className="menu__item" href="#aboutus">About us</a></li>*/}
                </ul>
            </div>

            <div className={"tp-header-nav tp-header-right"}>
                <Link to="/contact">
                    <button
                        className={"p-4 font-bold border-2 bg-[#091e42] cursor-pointer text-white rounded-full  border-none outline-none hover:bg-[#091e78] transition"}>
                        Contact Us
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Header;