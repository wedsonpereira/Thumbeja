import React, { useEffect, useRef } from 'react';
import teamData from './teamData.json';
import './Team.css';

/* ── SECTION 1 : Text / Hero ── */
const TeamHero = () => {
    return (
        <div className="team-text">
            <h2 className="team-title">
                <span className="team-title--purple">{teamData.hero.titlePurple}</span>{' '}
                <span className="team-title--black">{teamData.hero.titleBlack}</span>
            </h2>
            <p className="team-paragraph">{teamData.hero.paragraph}</p>
            <button className="team-cta">
                <span>{teamData.hero.ctaText}</span>
                <span className="team-cta__arrow">→</span>
            </button>
        </div>
    );
};

/* ── SECTION 2 : Image Cards (infinite loop) ── */
const TeamCards = () => {
    const trackRef = useRef(null);

    /* Duplicate the cards for seamless infinite loop */
    const duplicatedMembers = [...teamData.teamMembers, ...teamData.teamMembers];

    /* Pause animation on hover */
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const pause = () => track.style.animationPlayState = 'paused';
        const play = () => track.style.animationPlayState = 'running';

        track.addEventListener('mouseenter', pause);
        track.addEventListener('mouseleave', play);
        return () => {
            track.removeEventListener('mouseenter', pause);
            track.removeEventListener('mouseleave', play);
        };
    }, []);

    return (
        <div className="team-cards-wrapper">
            <div className="team-cards-track" ref={trackRef}>
                {duplicatedMembers.map((member, index) => (
                    <div
                        className="team-card"
                        key={`${member.id}-${index}`}
                        style={{ '--i': index % teamData.teamMembers.length }}
                    >
                        <div className="team-card__inner">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="team-card__img"
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


const FeaturesIntro = () => {
    const { title, subtitle } = teamData.featuresIntro;

    return (
        <section className="features-intro">
            <h2 className="features-intro__title">{title}</h2>
            <p className="features-intro__subtitle">{subtitle}</p>
        </section>
    );
};

/* ── SECTION 4 : Bento Grid ── */
const BentoGrid = () => {
    return (
        <section className="bento-section">
            <div className="bento-grid">
                {teamData.bentoGrid.map((card) => (
                    <div
                        className={`bento-card bento-card--${card.size}`}
                        key={card.id}
                        style={{ backgroundColor: card.bgColor }}
                    >
                        {card.image && (
                            <div className="bento-card__img-wrap">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="bento-card__img"
                                    loading="lazy"
                                />
                            </div>
                        )}
                        <div className="bento-card__content">
                            <h3 className="bento-card__title">{card.title}</h3>
                            <p className="bento-card__desc">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


export { TeamHero, TeamCards, FeaturesIntro, BentoGrid };