import React from "react";
import "../styles/Footer.css";
import instagram from "/instagram.jpg";
import linkedin from "/linkedin.jpg";
import github from "/github.jpg";
import discord from "/discord.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Bharati Vidyapeeth. All rights reserved.</p>
      <div className="social-links">
        <a href={import.meta.env.VITE_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a
          href={import.meta.env.VITE_LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a
          href={import.meta.env.VITE_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" />
        </a>
        <a href={import.meta.env.VITE_DISCORD_URL} target="_blank" rel="noopener noreferrer">
          <img src={discord} alt="Discord" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;