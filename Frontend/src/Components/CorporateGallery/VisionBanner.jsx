import React from 'react';
import teamData from './teamData.json';
import './VisionBanner.css';

const VisionBanner = () => {
    const { title, subtitle, backgroundImage } = teamData.visionBanner;

    return (
        <section className="vision-banner">
            <img
                src={backgroundImage}
                alt={title}
                className="vision-banner__bg"
                loading="lazy"
            />
            <div className="vision-banner__overlay" />
            <div className="vision-banner__content">
                <h2 className="vision-banner__title">{title}</h2>
                <p className="vision-banner__subtitle">{subtitle}</p>
            </div>
        </section>
    );
};

export default VisionBanner;
