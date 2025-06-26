import React from 'react';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import './Team.css';

const teamData = [
  {
    name: "V. Mahesh Kumar",
    id: "1",
    imagePath: "",
    links: {
      linkedin: "https://www.linkedin.com/in/mahesh-kumar-vaileti-b76295152?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/MaheshKumar1533",
      portfolio: "https://vailetimaheshkumar.me/"
    }
  },
  {
    name: "V. Harshavardhan",
    id: "2",
    imagePath: "",
    links: {
      linkedin: "https://www.linkedin.com/in/harshavardhan1974?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/HarshaVardhanRao",
      portfolio: "https://harsharao.netlify.app"
    }
  },
  {
    name: "E. Reddy Rohith",
    id: "3",
    imagePath: "",
    links: {
      linkedin: "https://www.linkedin.com/in/reddy-rohith-enduluri-656000273/",
      github: "https://github.com/ReddyRohith-E",
      portfolio: "https://rohith-pavilion.netlify.app"
    }
  },
  {
    name: "T. Meghana",
    id: "4",
    imagePath: "",
    links: {
      linkedin: "https://www.linkedin.com/in/meghana-timmampalli-21abb8272?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMTRk4FfXQ9%2BJO%2Fi8tvYJKA%3D%3D",
      github: "https://github.com/Meghana3015",
      portfolio: "https://www.behance.net/meghanatimmamp"
    }
  },
  {
    name: "K. Naga Sai Karthik",
    id: "5",
    imagePath: "",
    links: {
      linkedin: "https://www.linkedin.com/in/nagasai-karthik-kanakagiri-91a221254",
      github: "https://github.com/Karthik70904",
      portfolio: "https://kns-blogs.netlify.app"
    }
  },
  {
    name: "M. Keerthana Evanjilin",
    id: "6",
    imagePath: "",
    links: {
      linkedin: "",
      github: "https://github.com/KeerthanaSudhakar",
      portfolio: "#"
    }
  },
  {
    name: "Charitha",
    id: "7",
    imagePath: "",
    links: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      portfolio: "#"
    }
  }
];

const Team = () => {
  return (
    <div className="team">
      <h2 className="heading">Our Team</h2>
      <div className="row">
        {teamData.map(member => (
          <div key={member.id} className="profile-card">
            <img src={member.imagePath ? member.imagePath : "/profile.jpeg"} alt={member.name} className="profile-pic" />
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