import React from 'react';
import './About.css';
import aboutData from "../../assets/JsonData/About"

const About = () => {


    return (
        <div className="about-main-wrapper">
            {/* CEO Section */}
            <section className="about-ceo-section">
                <div className="about-section-container">
                    <div className="about-ceo-grid">
                        <div className="about-ceo-image-wrapper">
                            <div className="about-image-box">
                                <img
                                    src={aboutData.ceo.image}
                                    alt={aboutData.ceo.name}
                                    className="about-ceo-img"
                                />
                            </div>
                        </div>
                        <div className="about-ceo-text">
                            <div className="about-label">Our CEO</div>
                            <h2 className="about-ceo-name">{aboutData.ceo.name}</h2>
                            <p className="about-ceo-role">{aboutData.ceo.role}</p>
                            <p className="about-ceo-desc">{aboutData.ceo.description}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="about-team-section">
                <div className="about-section-container">
                    <div className="about-team-grid">
                        <div className="about-team-text">
                            <div className="about-label-dark">Our Team</div>
                            <h2 className="about-team-title">{aboutData.team.title}</h2>
                            <p className="about-team-desc">{aboutData.team.description}</p>
                        </div>
                        <div className="about-team-image-wrapper">
                            <div className="about-image-box">
                                <img
                                    src={aboutData.team.image}
                                    alt="Our Team"
                                    className="about-team-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
