import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <p></p>
      <footer data-aos="fade-in">
        <a href="#home" className="footerLogo">
          Matheus Diniz
        </a>

        <ul className="permalinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contacts</a>
          </li>
        </ul>

        <div className="footerSocials">
          <a href="https://www.facebook.com/MatheusCostaDiniz/" target="blank">
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-diniz-857070146/"
            target="blank"
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/MatheusDevios" target="blank">
            <BsGithub />
          </a>
          <a href="https://www.instagram.com/theusdiniz_/" target="blank">
            <ImInstagram />
          </a>
        </div>

        <div className="footerCopyright">
          <small>{year} &copy; Matheus Diniz. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
