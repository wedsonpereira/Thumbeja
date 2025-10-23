import React from 'react';
import { Link } from 'react-router-dom';

const ViewJobs = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            fontFamily: 'system-ui, sans-serif',
            padding: '2rem',
        }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
                View Jobs Page
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
                Here you can view all job listings.
            </p>
            <Link
                to="/addjobs"
                style={{
                    padding: '1rem 2rem',
                    backgroundColor: 'white',
                    color: '#667eea',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
                Add Jobs
            </Link>
        </div>
    );
};

export default ViewJobs;