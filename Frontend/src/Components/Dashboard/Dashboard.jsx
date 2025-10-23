import React, { useState } from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBinoculars, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons"; // Imports your global styles

// If using React Router for navigation, uncomment below:
// import { Outlet } from 'react-router-dom';

function Dashboard() {
    const [isMenuOpen, setIsMenuOpen] = useState(true); // Initially open
    const [currentView, setCurrentView] = useState('welcome'); // New state for content switching

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClick = (view) => {
        setCurrentView(view);
        toggleMenu(); // Close menu after selection
    };

    // New state for the add-jobs form
    const [jobTitle, setJobTitle] = useState('');
    const [subtitles, setSubtitles] = useState([]);
    const [descriptions, setDescriptions] = useState([]);
    const [links, setLinks] = useState([]);

    const addSubtitle = () => {
        setSubtitles([...subtitles, '']);
    };

    const removeSubtitle = (index) => {
        setSubtitles(subtitles.filter((_, i) => i !== index));
    };

    const updateSubtitle = (index, value) => {
        const newSubtitles = [...subtitles];
        newSubtitles[index] = value;
        setSubtitles(newSubtitles);
    };

    const addDescription = () => {
        setDescriptions([...descriptions, '']);
    };

    const removeDescription = (index) => {
        setDescriptions(descriptions.filter((_, i) => i !== index));
    };

    const updateDescription = (index, value) => {
        const newDescriptions = [...descriptions];
        newDescriptions[index] = value;
        setDescriptions(newDescriptions);
    };

    const addLink = () => {
        setLinks([...links, '']);
    };

    const removeLink = (index) => {
        setLinks(links.filter((_, i) => i !== index));
    };

    const updateLink = (index, value) => {
        const newLinks = [...links];
        newLinks[index] = value;
        setLinks(newLinks);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submit logic here, e.g., send jobTitle, subtitles, descriptions, links to API
        console.log({ jobTitle, subtitles, descriptions, links });
        // Reset form if needed
        setJobTitle('');
        setSubtitles([]);
        setDescriptions([]);
        setLinks([]);
    };

    return (
        <div className="App">
            {/* Premium header with horizontal gradient edge */}
            {/* Update the <header> section in your Dashboard component: */}
            <header className="header" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '10px',
                padding: '1rem 1.5rem',
                background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <button
                    className="hamburger"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    style={{
                        width: '25px',
                        height: '25px',
                        opacity: 0.7,
                        margin: 0,
                        flexShrink: 0,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer'
                    }} // Adjust width/height for size; spans will scale relatively
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>HR Dashboard</h1>
            </header>
            {/* Sliding menu with vertical gradient edge/background */}
            <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                    <li style={{ marginBottom: '1rem' }}>
                        <a
                            href="#add-jobs"
                            onClick={(e) => { e.preventDefault(); handleMenuClick('add-jobs'); }}
                            style={{
                                textDecoration: 'none',
                                color: '#333',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0.75rem 1rem',
                                borderRadius: '8px',
                                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                                transition: 'background 0.3s ease',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                            }}
                            onMouseEnter={(e) => e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}
                            onMouseLeave={(e) => e.target.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'}
                        >
                            <span className="menu-icon" style={{ marginRight: '0.75rem', color: '#667eea' }}>
                                <FontAwesomeIcon icon={faPlus} />
                            </span>
                            Add Jobs
                        </a>
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                        <a
                            href="#view-jobs"
                            onClick={(e) => { e.preventDefault(); handleMenuClick('view-jobs'); }}
                            style={{
                                textDecoration: 'none',
                                color: '#333',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0.75rem 1rem',
                                borderRadius: '8px',
                                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                                transition: 'background 0.3s ease',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                            }}
                            onMouseEnter={(e) => e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}
                            onMouseLeave={(e) => e.target.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'}
                        >
                            <span className="menu-icon" style={{ marginRight: '0.75rem', color: '#667eea' }}>
                                <FontAwesomeIcon icon={faBinoculars} />
                            </span>
                            View Jobs
                        </a>
                    </li>
                    {/* Add more menu items here, e.g.: */}
                    {/* <li><a href="#notifications" onClick={toggleMenu}><span className="menu-icon">🔔</span> Notifications</a></li> */}
                    {/* <li><a href="#profile" onClick={toggleMenu}><span className="menu-icon">👤</span> Profile</a></li> */}
                </ul>
            </nav>

            {/* Overlay to close menu on outside click - only show when open */}
            {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}

            {/* Main content area - add your components here */}
            <main className={`main-content ${isMenuOpen ? 'menu-open' : ''}`} style={{
                padding: '2rem',
                minHeight: 'calc(100vh - 80px)',
                backgroundColor: '#f8f9ff',
                transition: 'margin-left 0.3s ease'
            }}>
                {/* Conditionally render content based on currentView */}
                {currentView === 'welcome' && (
                    <div className="premium-welcome" style={{
                        textAlign: 'center',
                        marginTop: '4rem',
                        padding: '2rem',
                        background: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        maxWidth: '600px',
                        margin: '4rem auto'
                    }}>
                        <h1 style={{ color: '#333', fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to HR Dashboard</h1>
                        <p style={{ color: '#666', fontSize: '1.2rem', lineHeight: '1.6' }}>Your premium dashboard awaits. Authentic experiences, crafted with care.</p>
                    </div>
                )}
                {currentView === 'add-jobs' && (
                    <div className="add-jobs-content" style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        padding: '2rem',
                        background: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}>
                        <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '2rem' }}>Add Jobs</h1>
                        {/* Dynamic form for adding jobs with one title and unlimited singular additions for subtitle, description, link */}
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {/* Single Title */}
                            <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold', color: '#333' }}>
                                Job Title:
                                <input
                                    type="text"
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        marginTop: '0.5rem',
                                        borderRadius: '8px',
                                        width: '100%',
                                        fontSize: '1rem',
                                        transition: 'border-color 0.3s ease',
                                        boxSizing: 'border-box'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                    required
                                />
                            </label>

                            {/* Subtitles Section */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <h3 style={{ color: '#333', margin: 0, fontSize: '1.3rem' }}>Subtitles</h3>
                                {subtitles.map((subtitle, index) => (
                                    <div key={index} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '1rem',
                                        background: '#f9f9f9',
                                        borderRadius: '8px',
                                        border: '1px solid #eee'
                                    }}>
                                        <input
                                            type="text"
                                            value={subtitle}
                                            onChange={(e) => updateSubtitle(index, e.target.value)}
                                            placeholder={`Subtitle ${index + 1}`}
                                            style={{
                                                flex: 1,
                                                border: '1px solid #ddd',
                                                padding: '10px',
                                                borderRadius: '6px',
                                                fontSize: '0.95rem',
                                                transition: 'border-color 0.3s ease',
                                                boxSizing: 'border-box'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeSubtitle(index)}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                color: '#e74c3c',
                                                cursor: 'pointer',
                                                fontSize: '1.2rem',
                                                padding: '0.5rem',
                                                borderRadius: '4px',
                                                transition: 'background 0.2s ease'
                                            }}
                                            onMouseEnter={(e) => e.target.style.background = '#ffeaea'}
                                            onMouseLeave={(e) => e.target.style.background = 'none'}
                                        >
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={addSubtitle}
                                    style={{
                                        border: '1px solid #667eea',
                                        padding: '10px 20px',
                                        background: 'transparent',
                                        color: '#667eea',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        fontSize: '0.95rem',
                                        fontWeight: 'bold',
                                        transition: 'background 0.2s ease, color 0.2s ease',
                                        alignSelf: 'flex-start',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = '#667eea';
                                        e.target.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = '#667eea';
                                    }}
                                >
                                    <FontAwesomeIcon icon={faPlus} /> Add Subtitle
                                </button>
                            </div>

                            {/* Descriptions Section */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <h3 style={{ color: '#333', margin: 0, fontSize: '1.3rem' }}>Descriptions</h3>
                                {descriptions.map((description, index) => (
                                    <div key={index} style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.5rem',
                                        padding: '1rem',
                                        background: '#f9f9f9',
                                        borderRadius: '8px',
                                        border: '1px solid #eee'
                                    }}>
                                        <textarea
                                            value={description}
                                            onChange={(e) => updateDescription(index, e.target.value)}
                                            placeholder={`Description ${index + 1}`}
                                            style={{
                                                border: '1px solid #ddd',
                                                padding: '10px',
                                                borderRadius: '6px',
                                                width: '100%',
                                                height: '80px',
                                                fontSize: '0.95rem',
                                                resize: 'vertical',
                                                transition: 'border-color 0.3s ease',
                                                boxSizing: 'border-box'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeDescription(index)}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                color: '#e74c3c',
                                                cursor: 'pointer',
                                                fontSize: '1.2rem',
                                                padding: '0.25rem',
                                                borderRadius: '4px',
                                                transition: 'background 0.2s ease',
                                                alignSelf: 'flex-end'
                                            }}
                                            onMouseEnter={(e) => e.target.style.background = '#ffeaea'}
                                            onMouseLeave={(e) => e.target.style.background = 'none'}
                                        >
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={addDescription}
                                    style={{
                                        border: '1px solid #667eea',
                                        padding: '10px 20px',
                                        background: 'transparent',
                                        color: '#667eea',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        fontSize: '0.95rem',
                                        fontWeight: 'bold',
                                        transition: 'background 0.2s ease, color 0.2s ease',
                                        alignSelf: 'flex-start',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = '#667eea';
                                        e.target.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = '#667eea';
                                    }}
                                >
                                    <FontAwesomeIcon icon={faPlus} /> Add Description
                                </button>
                            </div>

                            {/* Links Section */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <h3 style={{ color: '#333', margin: 0, fontSize: '1.3rem' }}>Links</h3>
                                {links.map((link, index) => (
                                    <div key={index} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '1rem',
                                        background: '#f9f9f9',
                                        borderRadius: '8px',
                                        border: '1px solid #eee'
                                    }}>
                                        <input
                                            type="url"
                                            value={link}
                                            onChange={(e) => updateLink(index, e.target.value)}
                                            placeholder={`Link ${index + 1}`}
                                            style={{
                                                flex: 1,
                                                border: '1px solid #ddd',
                                                padding: '10px',
                                                borderRadius: '6px',
                                                fontSize: '0.95rem',
                                                transition: 'border-color 0.3s ease',
                                                boxSizing: 'border-box'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeLink(index)}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                color: '#e74c3c',
                                                cursor: 'pointer',
                                                fontSize: '1.2rem',
                                                padding: '0.5rem',
                                                borderRadius: '4px',
                                                transition: 'background 0.2s ease'
                                            }}
                                            onMouseEnter={(e) => e.target.style.background = '#ffeaea'}
                                            onMouseLeave={(e) => e.target.style.background = 'none'}
                                        >
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={addLink}
                                    style={{
                                        border: '1px solid #667eea',
                                        padding: '10px 20px',
                                        background: 'transparent',
                                        color: '#667eea',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        fontSize: '0.95rem',
                                        fontWeight: 'bold',
                                        transition: 'background 0.2s ease, color 0.2s ease',
                                        alignSelf: 'flex-start',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = '#667eea';
                                        e.target.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'transparent';
                                        e.target.style.color = '#667eea';
                                    }}
                                >
                                    <FontAwesomeIcon icon={faPlus} /> Add Link
                                </button>
                            </div>

                            <button
                                type="submit"
                                style={{
                                    border: 'none',
                                    padding: '14px 24px',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: 'white',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                    alignSelf: 'flex-start'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = 'none';
                                }}
                            >
                                Add Job
                            </button>
                        </form>
                    </div>
                )}
                {currentView === 'view-jobs' && (
                    <div className="view-jobs-content" style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        padding: '2rem',
                        background: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}>
                        <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '2rem' }}>View Jobs</h1>
                        {/* Placeholder for View Jobs list/table - replace with your actual component */}
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}>
                            <li style={{
                                padding: '1.5rem',
                                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                                borderRadius: '8px',
                                borderLeft: '4px solid #667eea',
                                transition: 'transform 0.2s ease'
                            }}
                                onMouseEnter={(e) => e.target.style.transform = 'translateX(5px)'}
                                onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}
                            >
                                Job 1: Software Engineer
                            </li>
                            <li style={{
                                padding: '1.5rem',
                                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                                borderRadius: '8px',
                                borderLeft: '4px solid #667eea',
                                transition: 'transform 0.2s ease'
                            }}
                                onMouseEnter={(e) => e.target.style.transform = 'translateX(5px)'}
                                onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}
                            >
                                Job 2: Designer
                            </li>
                            {/* Add more or fetch from data */}
                        </ul>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Dashboard;