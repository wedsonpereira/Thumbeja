import React from 'react';
import thumbejalogo from '/src/assets/Images/thunbejalogo.png'
import {faFacebook, faInstagram, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="tp-footer h-max flex flex-col border-1 justify-center items-center p-2 bg-[#000115] text-white">
            {/*bg-[#091e42]*/}
            <div className={"tp-footer-content w-[80%] h-max flex items-center p-2 gap-2 m-auto justify-center align-center "}>
                <div className={"tp-footer-content0 w-[50%] h-max  flex flex-col justify-between items-center p-2"}>
                    <div className={"h-max w-full flex overflow-hidden items-center"}>
                        <div className={"h-[10rem] w-[50%]"}>
                            <img src={thumbejalogo} alt="" className={"w-full h-full object-contain scale-200"}/>
                        </div>
                        <div className={"tp-max800-text h-[100%] w-full flex p-2 "}>
                            <p>
                                To empower businesses of all sizes with innovative technology, creative marketing, and reliable customer solutions that drive success and long-term growth.                            </p>
                        </div>
                    </div>
                    <hr className={"w-[100%]"}/>
                    <div className={"flex gap-3 flex-col p-3 justify-center items-center w-full"}>
                        <div className={"tp-max800-text"}>
                            <span className={"text-4xl"}>Reach us @</span>
                        </div>
                        <div className={"flex gap-3 border-1 w-max p-2 rounded"}>
                            <a href="https://www.facebook.com/share/17UorZadV3/?mibextid=wwXIfr" target={"_blank"}><FontAwesomeIcon icon={faFacebook} size="lg"/></a>
                            <a href="https://www.instagram.com/thumbeja_publicity?igsh=NGF3OTc1bTM1czds" target={"_blank"}><FontAwesomeIcon icon={faInstagram} size="lg"/></a>
                            <a href="https://wa.me/916366983700" target={"_blank"}><FontAwesomeIcon icon={faWhatsapp} size="lg"/></a>
                            <a href="https://linkedin.com/in/thumbeja-publicity-267636387" target={"_blank"}><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
                        </div>
                    </div>
                </div>
                <div className={"tp-footer-content1 w-[50%] h-[100%] flex justify-evenly p-2"}>
                    <div className={"flex flex-col gap-6"}>
                        <div className={"flex flex-col items-start gap-3 tp-max800-text"}>
                            <span className={"text-2xl"}>Pages</span>
                        </div>
                        <div className={"flex flex-col items-start gap-3 tp-max800-text"}>
                            <Link className={"text-sm"} to={"/services"}>
                                <span className={""}>Services</span>
                                <FontAwesomeIcon icon={faArrowUp} size="lg" style={{"transform":"rotate(45deg)"}} />
                            </Link>
                            <Link className={"text-sm"} to={"/contact"}>
                                <span className={""}>Contact</span>
                                <FontAwesomeIcon icon={faArrowUp} size="lg" style={{"transform":"rotate(45deg)"}} />
                            </Link>
                            <Link className={"text-sm"} to={"/career"}>
                                <span className={""}>Career</span>
                                <FontAwesomeIcon icon={faArrowUp} size="lg" style={{"transform":"rotate(45deg)"}} />
                            </Link>
                            <Link className={"text-sm"} to={"#about"}>
                                <span className={""}>About</span>
                                <FontAwesomeIcon icon={faArrowUp} size="lg" style={{"transform":"rotate(45deg)"}} />
                            </Link>
                            <Link className={"text-sm"} to={"/"}>
                                <span className={""}>Home</span>
                                <FontAwesomeIcon icon={faArrowUp} size="lg" style={{"transform":"rotate(45deg)"}} />
                            </Link>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-6"}>
                        <div className={"flex flex-col items-start  tp-max800-text"}>
                            <span className={"text-2xl"}>Organization information</span>
                        </div>
                        <div className={"flex flex-col items-start gap-3"}>
                            <Link className={"text-sm"} to={"/info"}>
                                <span className={""}>Terms & Conditions </span>
                                <FontAwesomeIcon icon={faArrowUp} size="lg" style={{"transform":"rotate(45deg)"}} />
                            </Link>
                            <Link className={"text-sm"} to={"/info"}>
                                <span className={""}>Privacy Policy</span>
                                <FontAwesomeIcon icon={faArrowUp} size="lg" style={{"transform":"rotate(45deg)"}} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"h-max w-full flex flex-center justify-center items-center"}>
                <hr/>
                <div className={"h-[5rem] flex flex-center justify-center items-center text-center"}>
                    <a href={"tel:+917483713076"} alt={"Developed by Wedson"} className={"text-lg tp-copyright"}>© 2025 Thumbeja Publicity. All rights reserved.</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;