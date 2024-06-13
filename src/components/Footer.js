import React from 'react'
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
            <div class="container">
                <div class="footer-wrapper">
                    <div class="footer-faded-text">
                        Vardhan Reddy
                    </div>
                    <div class="link-wrapper">
                    <div>
                        <a href=" #projects">Projects</a>
                    </div>
                    <div>
                        <a href=" #skills">Skills</a>
                    </div>
                    <div>
                        <a href="#contactme">Contact</a>
                    </div>
                </div>
                <div class="icon-wrapper">
                <a href="https://www.linkedin.com/in/vardhan-reddy-59810124b/" target='_new'>
                    <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                </a>
                <a href="https://github.com/Vardhanreddy-17" target='_new'>
                <FontAwesomeIcon icon={faGithub} className="icon"/>
                </a>
                <a href="https://x.com/?lang=en" target='_new'>
                <FontAwesomeIcon icon={faTwitter} className="icon"/>
                </a>
                <a href="https://www.instagram.com/vardhanreddy_17/" target='_new'>
                <FontAwesomeIcon icon={faInstagram} className="icon"/>
                </a>
                </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer;
