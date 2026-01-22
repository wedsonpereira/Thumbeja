import React from 'react';
import thumbejalogo from '/src/assets/Images/thunbejalogo.png'
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="tp-footer-corporate">
            {/* Main Footer Content */}
            <div className="tp-footer-main">
                <div className="tp-footer-container">

                    {/* Brand Section */}
                    <div className="tp-footer-brand">
                        <div className="tp-footer-logo">
                            <img src={thumbejalogo} alt="Thumbeja Publicity" />
                        </div>
                        <p className="tp-footer-tagline">
                            Empowering businesses with innovative technology, creative marketing, and reliable solutions that drive success.
                        </p>
                        <div className="tp-footer-social">
                            <a href="https://www.facebook.com/share/17UorZadV3/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="tp-social-icon" aria-label="Facebook">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://www.instagram.com/thumbeja_publicity?igsh=NGF3OTc1bTM1czds" target="_blank" rel="noopener noreferrer" className="tp-social-icon" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://wa.me/916366983700" target="_blank" rel="noopener noreferrer" className="tp-social-icon" aria-label="WhatsApp">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                            <a href="https://linkedin.com/in/thumbeja-publicity-267636387" target="_blank" rel="noopener noreferrer" className="tp-social-icon" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="tp-footer-links">
                        <h4 className="tp-footer-heading">Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services-thumbeja-publicity">Services</Link></li>
                            <li><Link to="/career-thumbeja-publicity">Careers</Link></li>
                            <li><Link to="/contact-thumbeja-publicity">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="tp-footer-links">
                        <h4 className="tp-footer-heading">Services</h4>
                        <ul>
                            <li><Link to="/services-thumbeja-publicity">Digital Marketing</Link></li>
                            <li><Link to="/services-thumbeja-publicity">Web Development</Link></li>
                            <li><Link to="/services-thumbeja-publicity">Branding & Design</Link></li>
                            <li><Link to="/services-thumbeja-publicity">Social Media</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="tp-footer-contact">
                        <h4 className="tp-footer-heading">Get In Touch</h4>
                        <div className="tp-contact-item">
                            <FontAwesomeIcon icon={faLocationDot} className="tp-contact-icon" />
                            <span>Mangalore, Karnataka, India</span>
                        </div>
                        <div className="tp-contact-item">
                            <FontAwesomeIcon icon={faPhone} className="tp-contact-icon" />
                            <a href="tel:+916366983700">+91 6366 983 700</a>
                        </div>
                        <div className="tp-contact-item">
                            <FontAwesomeIcon icon={faEnvelope} className="tp-contact-icon" />
                            <a href="mailto:info@thumbeja.com">info@thumbeja.com</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="tp-footer-bottom">
                <div className="tp-footer-container tp-footer-bottom-content">
                    <p className="tp-copyright">
                        © {currentYear} Thumbeja Publicity. All rights reserved.
                    </p>
                    <div className="tp-footer-legal">
                        <Link to="/terms-conditions-thumbeja-publicity">Terms & Conditions</Link>
                        <span className="tp-legal-divider">|</span>
                        <Link to="/terms-conditions-thumbeja-publicity">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;