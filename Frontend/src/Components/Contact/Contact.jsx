import React, {useRef} from 'react';
import Header from "../header/Header.jsx";
import "./contact.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import contactdetails from "../../assets/JsonData/contactDetails.jsx";
import {faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import Footer from "../Footer/Footer.jsx";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Link} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {

    function handleContactUrlClick(item){
        window.open(item.url);
    }

    const container = useRef('')

    useGSAP(() => {

        gsap.from('.tp-contact-lbl', {y: -300, duration: 1, stagger: {from: "end", each: 0.2}});

        gsap.from('.tp-contact-card', {
            duration: 1,
            stagger: {
                from: "center", each: 0.3}, yoyo: true, opacity: 0, ease: 'expo.in'
        });



    }, {scope: container});

    const onSubmit = async (event) => {
        event.preventDefault();
        toast("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "0108879f-25a4-4d75-b4cb-f4162a4c384e");

        try{
            const response = await fetch("https://api.web3forms.com/submit", {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            const {name,email } = data.data;

            axios.post("http://localhost:8000/contactform", {name,email}).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error);
            })

            if (data.success) {
                toast("Form Submitted Successfully");
                event.target.reset();
            } else {
                toast("Error");
            }
        }catch(e){
            toast("Error",e.message);
        }

    };
    useGSAP(()=>{
            gsap.from('.tp-contact-scroll-animation-1', {
                y: -50, duration: 1, opacity: 0, ease: "power1.inOut",
                scrollTrigger: {
                    trigger: '.tp-contact-scroll-animation-1',
                    toggleActions: 'restart none none reverse',
                    start: 'top+=300px bottom-=100px',
                    end: 'top-=200px top',
                }
            })

            gsap.from('.tp-contact-scroll-animation-2', {
                x: -100, stagger: 0.2, duration: 1, opacity: 0, ease: 'power1.in',
                scrollTrigger: {
                    trigger: '.tp-contact-scroll-animation-2',
                    start: 'top center+=300px',
                    end: 'top-=300px top',
                    toggleActions: 'restart none none reverse',
                }
            })

    },[])

    return (<>
            <Header/>
            <div ref={container} className={"tp-contact-main pt-24 flex items-center flex-col gap-6 w-full h-max bg-[#fefdf7] pb-8"}>
                <div className={"tp-contact-header w-full h-[15%] flex gap-6 flex-col"}>
                    <div className={" tp-contact-lbl w-full flex items-center justify-center"}>
                        <span>Contact Us</span>
                    </div>
                    <div className={""}>
                        <span className={"tp-contact-lbl text-5xl w-full flex text-center items-center justify-center"}>Want to Get in touch with us?</span>
                    </div>
                </div>
                {/*contact card*/}
                <div className={"w-[100%] h-max flex flex-wrap items-center justify-center pt-2 gap-5"}>
                    {
                        contactdetails.map((item, index) => {
                            return (
                                <div key={index} className="bg-amber-50 tp-contact-card w-[90%] sm:w-2/3 md:w-1/2 lg:w-[25%] h-[22rem] rounded-2xl p-4 flex items-center justify-evenly flex-col tp-contact-lbl">
                                    <div className={"flex items-center justify-center h-[40%]"}>
                                        <span
                                            className={"w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-purple-700 rounded-full flex items-center justify-center"}
                                            onClick={() => handleContactUrlClick(item)}>
                                            <FontAwesomeIcon icon={item.icon} size={"2x"}
                                                             className={"sm:text-3x md:text-4x text-white"}/>
                                        </span>
                                    </div>
                                    <span className={"w-4/5 bg-[#2222223b] h-[0.5%] rounded-full"}></span>
                                    <div className={"h-[40%] flex items-center justify-start flex-col gap-3"}>
                                        <span className={"text-2xl"}>{item.text}</span>
                                        <p className={"text-center"}>{item.contact}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/*Contact form*/}
            <div className={"flex w-[100%] justify-evenly pt-20 h-max gap-10 bg-[#fefdf7] relative tp-contact-container"}>
                <div className={"w-[40%] p-5 pt-0"}>
                    <div className={"tp-animation-side-scroll p-2 tp-contact-scroll-animation-1"}>
                        <span className={"text-4xl"}>Contact us for a free consultation</span>
                    </div>
                    <div className={"tp-contact-dtl pt-9 tp-contact-scroll-animation-1"}>
                        <div className={"flex items-center gap-3 p-2"}>
                            <FontAwesomeIcon icon={faLocationDot}/>
                            <span className={"w-[70%] hover:text-blue-300 transition-shadow"}>4th floor, Sahakari Sadana, Rao & rao Circle, 410, Mission St, Bhavathi, Bunder, Mangaluru, Karnataka 575001</span>
                        </div>
                        <div className={"flex items-center gap-3 p-2 tp-contact-scroll-animation-1"}>
                            <FontAwesomeIcon icon={faPhone}/>
                            <span className={"hover:text-blue-300 transition-shadow"}>+91 6366983700</span>
                        </div>
                    </div>
                    <hr className={"opacity-55 w-[100%] mt-8 mb-8 tp-horizontal-line  tp-contact-scroll-animation-1"}/>
                    <div className={"tp-contact-sc-lk flex items-center gap-2 pt-5 tp-contact-scroll-animation-1"}>
                        <a href={"https://www.facebook.com/share/17UorZadV3/?mibextid=wwXIfr"} target={"_blank"} className={"p-2 tp-contact-sc-hover-effect"}>
                            <FontAwesomeIcon size={"2xl"} className={"cursor-pointer"} icon={faFacebook}/>
                        </a>
                        <a href={"https://www.instagram.com/thumbeja_publicity?igsh=NGF3OTc1bTM1czds"} target={"_blank"} className={"p-2 tp-contact-sc-hover-effect"}>
                              <FontAwesomeIcon size={"2xl"} icon={faInstagram}/>
                        </a>
                        <a href={"https://wa.me/916366983700"} target={"_blank"} className={"p-2 tp-contact-sc-hover-effect"}>
                            <FontAwesomeIcon size={"2xl"} icon={faWhatsapp}/>
                        </a>
                        <a href={"https://linkedin.com/in/thumbeja-publicity-267636387"} target={"_blank"} className={"p-2 tp-contact-sc-hover-effect"}>
                            <FontAwesomeIcon size={"2xl"} icon={faLinkedin}/>
                        </a>
                    </div>
                </div>
                <form className="tp-animation-side-scroll flex w-[40%] flex-col" onSubmit={onSubmit}>
                    <div className="tp-form-text-fields flex flex-col gap-10 overflow-hidden w-full h-full pr-4 ">
                        <div className="tp-contact-input-box flex flex-col gap-7 h-[70%]">
                            <input type="text" name={"name"}  className="border-1 rounded-2xl tp-contact-scroll-animation-1"
                                   placeholder="Enter name"/>
                            <input type="text" name={"company"} className="border-1 rounded-2xl tp-contact-scroll-animation-1" placeholder="Company name"/>
                            <input type="tel" data-for="phoneNumber" minLength={10} maxLength={13}
                                   prefix={"+91"} name="phoneNumber"
                                   className="border-1 rounded-2xl tp-contact-scroll-animation-1" placeholder="Phone"/>
                            <input type="email" name={"email"}
                                   className="border-1 rounded-2xl tp-contact-scroll-animation-1" placeholder="Email"/>
                            <textarea rows={3} cols={3} name={"message"}
                                      className="tp-contact-textarea border-1 rounded-2xl tp-contact-scroll-animation-1" placeholder="Message"/>
                        </div>
                        <div className="tp-contact-input-box2 h-max">
                            <div className="tp-contact-agreement rounded flex items-start">
                                <input type="checkbox" required={true}/>
                                <Link to={"/info"} className={"hover:text-[blue] tp-contact-scroll-animation-1"}> All agree to the terms &
                                    conditions.</Link>
                            </div>
                            <div className="rounded text-white tp-submit-btn tp-contact-scroll-animation-1">
                                <button type="submit" className="rounded-4xl w-[30%] bg-[#091e42] p-5 h-[100%] hover:bg-[#4169E1] transition ">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <Toaster toastOptions={{style: {background: "black", color: "white", textAlign:'center'}}} position={"top-center"}/>
            </div>
            <iframe id={"map"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7779.3339529053455!2d74.8310431605438!3d12.864773152630576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35bf106d2fe49%3A0x4c9a2d8d669dde46!2sThumbeja%20Publicity!5e0!3m2!1sen!2sin!4v1758909845560!5m2!1sen!2sin"
                    width="600" height="500" className={"w-full tp-contact-scroll-animation-2"} loading={"eager"}
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            <Footer/>
        </>
    );
};

export default Contact;