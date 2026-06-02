import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container ">
        <h1 className="footer__title">Amirhossein Mirzaee</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">
              Qualification
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://github.com/Amirhossein-Mirzaee"
            className="footer__social-link"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/amirhossein-mirzaee-9b652b27a/"
            className="footer__social-link"
          >
            LINKEDIN
          </a>
        </div>
        <span className="footer__copy">
          &#169; All rights reserved To 
          <span >
            <a className="footer__span" href="#about"> Amirhossein Mirzaee</a>
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
