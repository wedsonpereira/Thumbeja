import React from 'react';
import './threeD.css';
import SEO from "../../SEO/SEO.jsx";

const ThreeD = () => {
  return (
    <>
      <SEO
        title="3D Design Services in Mangalore"
        description="3D design and visualization services for product modeling, animation, and creative brand presentation."
        keywords="3D design services, product modeling, 3D animation, rendering services Mangalore"
        url="https://thumbeja.com/services/3d-design-mangalore"
      />
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
    </>
  );
};

export default ThreeD;
