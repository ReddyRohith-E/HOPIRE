import React from 'react';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import teamData from './Team';
import './Team.css';

const Team = () => {
  return (
    <div className="team">
      <h2 className="heading">Our Team</h2>
      <div className="row">
        {teamData.map(member => (
          <div key={member.id} className="profile-card">
            <img src={member.imagePath} alt={member.name} className="profile-pic" />
            <h3>{member.name}</h3>
            <div className="links">
              <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={member.links.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={member.links.portfolio} target="_blank" rel="noopener noreferrer">
                <FaGlobe />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;