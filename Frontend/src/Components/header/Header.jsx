import React, { memo, useState, useEffect } from 'react';
import "./header.css"
import { Link, useNavigate } from "react-router-dom";
import thumbeja from "/src/assets/Images/thunbejalogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown, faTimes, faEnvelope, faPhone, faHome, faBriefcase, faInfoCircle, faConciergeBell } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HashLink } from "react-router-hash-link";


const Header = () => {
    const navigateTo = useNavigate();
    const [servicesOpen, setServicesOpen] = useState(false);

    const services = [
        { name: "Digital Marketing", path: "/services/digital-marketing-mangalore" },
        { name: "Printing Services", path: "/services/printing-services-mangalore" },
        { name: "Social Media Marketing", path: "/services/social-media-marketing-mangalore" },
        { name: "Video Marketing", path: "/services/video-marketing-mangalore" },
        { name: "WhatsApp & Chatbot", path: "/services/whatsapp-chatbot-services" },
        { name: "Website Development", path: "/services/website-development-mangalore" },
        { name: "CRM Solutions", path: "/services/crm-solutions-mangalore" },
        { name: "Outdoor Advertising", path: "/services/outdoor-advertising-mangalore" },
        { name: "Social Media Handling", path: "/services/social-media-handling-mangalore" },
        { name: "Graphic Design", path: "/services/graphic-design-mangalore" },
        { name: "Imaging Design", path: "/services/imaging-design-mangalore" },
        { name: "3D Design", path: "https://zyfox.in" }
    ];

    const imageClickHandler = () => {
        navigateTo("/")
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useGSAP(() => {
        if (isOpen) {
            gsap.to(".tp-mobile-nav", {
                x: 0,
                duration: 0.8,
                ease: "power4.out"
            });
            gsap.fromTo(".tp-mobile-link",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 0.3 }
            );
            gsap.fromTo(".tp-mobile-footer-item",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 0.7 }
            );
        } else {
            gsap.to(".tp-mobile-nav", {
                x: "100%",
                duration: 0.6,
                ease: "power4.in"
            });
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };


    return (
        <>
            <div className="tp-header sticky z-50">
                <div className="tp-header-left">
                    <div className={"tp-image"}>
                        <img src={thumbeja} className="tp-logo" alt="text" onClick={imageClickHandler} />
                    </div>
                </div>

                {/*the component is hidden*/}
                <div className="tp-header-nav h-[80%] w-[38%] gap-x-4 text-[1rem] flex justify-evenly items-center relative text-center">
                    <div className="tp-underline relative flex items-center justify-center">
                        <Link className={"text-center pr-2 pl-2"} to={"/"}>Home</Link>
                    </div>
                    <div className="tp-underline relative flex items-center justify-center">
                        <Link className={"text-center pr-2 pl-2"} to={"/career-thumbeja-publicity"}>Career</Link>
                    </div>
                    <div
                        className="tp-services-dropdown relative flex items-center justify-center h-full"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <Link className={"tp-underline relative flex items-center justify-center text-center pr-2 pl-2 h-[70%] gap-2 cursor-pointer"} to={"/services-thumbeja-publicity"}>
                            Services
                            <FontAwesomeIcon icon={faChevronDown} size="sm" className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                        </Link>

                        {/* Services Mega Menu - now inside the dropdown container */}
                        {servicesOpen && (
                            <div className="tp-services-mega-menu">
                                <div className="tp-mega-menu-container">
                                    <div className="tp-mega-menu-content">
                                        <div className="tp-mega-menu-section">
                                            <h3 className="tp-mega-menu-title">Our Services</h3>
                                            <div className="tp-mega-menu-grid">
                                                {services.map((service, index) => (
                                                    <Link
                                                        key={index}
                                                        to={service.path}
                                                        className="tp-mega-menu-item"
                                                        onClick={() => setServicesOpen(false)}
                                                    >
                                                        <span className="tp-mega-item-name">{service.name}</span>
                                                        <FontAwesomeIcon icon={faArrowRight} className="tp-mega-item-arrow" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="tp-underline relative flex items-center justify-center">
                        <HashLink className={"text-center pr-2 pl-2"} to={"/#about"}>About</HashLink>
                    </div>
                    <div className="tp-underline relative flex items-center justify-center">
                        <HashLink className={"text-center pr-2 w-max pl-2"} to={"/corporate-gallery"}>Corporate Gallery</HashLink>
                    </div>
                </div>



                {/* Hamburger Button */}
                <div className="burger-menu-wrapper">
                    <button
                        className={`tp-hamburger ${isOpen ? 'is-active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>

                {/*the component is hidden*/}
                <div className={"tp-header-nav tp-header-right "}>
                    <Link to="/contact-thumbeja-publicity">
                        <button
                            className={"p-3 bg-[#091e42] cursor-pointer text-white rounded-full  border-none outline-none hover:bg-[#091e78] transition text-sm"}>
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
            {/* Premium Mobile Navigation Panel */}
            <div className="tp-mobile-nav mt-[4rem]">
                <div className="tp-mobile-nav-bg border-pink-500"></div>

                <div className="tp-mobile-nav-content">
                    <nav className="tp-mobile-nav-links">
                        <Link className="tp-mobile-link" to="/" onClick={handleLinkClick}>
                            <FontAwesomeIcon icon={faHome} className="link-icon" /> Home
                        </Link>
                        <Link className="tp-mobile-link" to="/services-thumbeja-publicity" onClick={handleLinkClick}>
                            <FontAwesomeIcon icon={faConciergeBell} className="link-icon"  /> Services
                        </Link>
                        <Link className="tp-mobile-link" to="/career-thumbeja-publicity" onClick={handleLinkClick}>
                            <FontAwesomeIcon icon={faBriefcase} className="link-icon" /> Career
                        </Link>
                        <Link className="tp-mobile-link" to="/about-thumbeja-publicity" onClick={handleLinkClick}>
                            <FontAwesomeIcon icon={faInfoCircle} className="link-icon" /> About
                        </Link>
                        <Link className="tp-mobile-link" to="/contact-thumbeja-publicity" onClick={handleLinkClick}>
                            <FontAwesomeIcon icon={faEnvelope} className="link-icon" /> Contact
                        </Link>
                        <Link className="tp-mobile-link" to="/corporate-gallery" onClick={handleLinkClick}>
                            <FontAwesomeIcon icon={faEnvelope} className="link-icon" />Gallery
                        </Link>
                    </nav>

                    <div className="tp-mobile-nav-footer mt-10">
                        <div className="tp-mobile-footer-section">
                            <p className="tp-mobile-footer-label tp-mobile-footer-item">Get in touch</p>
                            <a href="mailto:info@thumbeja.com" className="tp-mobile-footer-link tp-mobile-footer-item">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> info@thumbeja.com
                            </a>
                            <a href="tel:+911234567890" className="tp-mobile-footer-link tp-mobile-footer-item">
                                <FontAwesomeIcon icon={faPhone} className="mr-2" /> +91 1234567890
                            </a>
                        </div>

                        <div className="tp-mobile-footer-section">
                            <p className="tp-mobile-footer-label tp-mobile-footer-item">Follow us</p>
                            <div className="tp-mobile-socials">
                                <a href="#" className="tp-mobile-social-icon tp-mobile-footer-item"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#" className="tp-mobile-social-icon tp-mobile-footer-item"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="#" className="tp-mobile-social-icon tp-mobile-footer-item"><FontAwesomeIcon icon={faFacebook} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default memo(Header);