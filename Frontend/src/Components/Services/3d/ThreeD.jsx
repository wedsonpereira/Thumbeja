import React from 'react';
import './threeD.css';

const ThreeD = () => {
  return (
    <div className="three-d-container">
      <div className="quantum-info">
        <h3>3D Design Services</h3>
        <p>Coming Soon - Interactive 3D Experience</p>
        <div className="quantum-stats">
          <div className="stat">
            <span className="stat-label">Modeling</span>
            <span className="stat-value">3D</span>
          </div>
          <div className="stat">
            <span className="stat-label">Animation</span>
            <span className="stat-value">CGI</span>
          </div>
          <div className="stat">
            <span className="stat-label">Rendering</span>
            <span className="stat-value">HD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeD;
