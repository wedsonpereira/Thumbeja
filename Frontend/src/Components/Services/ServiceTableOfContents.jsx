import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './ServiceTableOfContents.css';

const ServiceTableOfContents = ({ items, className = '', panelTitle = '' }) => {
    const safeItems = Array.isArray(items) ? items : [];
    const sectionIds = useMemo(() => safeItems.map((item) => item.id), [safeItems]);
    const sectionSignature = sectionIds.join('|');
    const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [portalTarget, setPortalTarget] = useState(null);
    const contentId = useMemo(() => `service-toc-panel-${sectionIds[0] ?? 'default'}`, [sectionIds]);

    useEffect(() => {
        setPortalTarget(document.body);

        return () => setPortalTarget(null);
    }, []);

    useEffect(() => {
        if (!sectionIds.length) {
            return;
        }

        setActiveSection((currentSection) => {
            if (sectionIds.includes(currentSection)) {
                return currentSection;
            }

            return sectionIds[0];
        });
    }, [sectionIds, sectionSignature]);

    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (!sections.length) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visibleEntries.length > 0) {
                    setActiveSection(visibleEntries[0].target.id);
                }
            },
            {
                rootMargin: '-120px 0px -55% 0px',
                threshold: [0.15, 0.3, 0.5, 0.75]
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [sectionIds, sectionSignature]);

    if (!safeItems.length || !portalTarget) {
        return null;
    }

    const handleLinkClick = (event, id) => {
        const targetSection = document.getElementById(id);

        if (!targetSection) {
            return;
        }

        event.preventDefault();
        setActiveSection(id);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', `#${id}`);
    };

    return createPortal(
        <div className={`service-toc-shell ${isCollapsed ? 'is-collapsed' : ''} ${className}`.trim()}>
            <aside className="service-toc">
                <button
                    type="button"
                    className="service-toc__edge-toggle"
                    onClick={() => setIsCollapsed((currentState) => !currentState)}
                    aria-expanded={!isCollapsed}
                    aria-controls={contentId}
                    aria-label={isCollapsed ? 'Expand table of contents' : 'Collapse table of contents'}
                    title={isCollapsed ? 'Expand table of contents' : 'Collapse table of contents'}
                >   
                    <span className="service-toc__edge-toggle-icon" aria-hidden="true">
                        <FontAwesomeIcon icon={isCollapsed ? faChevronLeft : faChevronRight} />
                    </span>
                </button>
                <div id={contentId} className="service-toc__card">
                    <div className="service-toc__header">
                        <div className="service-toc__heading-group">
                            <p className="service-toc__eyebrow">Contents</p>
                            {panelTitle ? <h3 className="service-toc__title">{panelTitle}</h3> : null}
                        </div>
                    </div>
                    <nav className="service-toc__nav" aria-label="Table of contents">
                        <ul className="service-toc__list">
                            {safeItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className={`service-toc__link${activeSection === item.id ? ' is-active' : ''}`}
                                        onClick={(event) => handleLinkClick(event, item.id)}
                                        aria-current={activeSection === item.id ? 'true' : undefined}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>,
        portalTarget
    );
};

export default ServiceTableOfContents;
