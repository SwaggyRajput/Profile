// ProfilePage.js

import React from 'react';
import './ProfilePage.css'; // Import the CSS file

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image"></div>
        <h1>John Doe</h1>
        <p>Web Developer | Android Developer</p>
      </div>

      <div className="profile-description">
        <p>
          I am a passionate developer with proficiency in React, Express,
          MongoDB, and Flutter. I love building web and mobile applications that
          provide meaningful experiences to users.
        </p>
      </div>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <button className="social-btn">LinkedIn</button>
        </a>
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
          <button className="social-btn">GitHub</button>
        </a>
      </div>
    </div>
  );
};

export default ProfilePage;
