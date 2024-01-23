// Contact.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CgMail } from "react-icons/cg";
const Contact = () => {
     
         

  return (
    <div className="contactListContainer">
      <Row>
        <Col md={12} className="home-about-social">
          <h3>
          <span className="purple">Feel free to   connect with me </span>
          </h3>
          <h5>
            phone no +91 <span className="purple">9123202854</span>
          </h5>
 
          <h5>
            Email <span className="purple">Chandrakant91550@gmail.com</span>
          </h5>

          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/chandracec"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
         
         
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/cktfromdtg/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://leetcode.com/BruteForcehere/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiLeetcode />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
