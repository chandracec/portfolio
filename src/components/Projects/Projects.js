import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
  <ProjectCard
    imgPath={chatify}
    isBlog={false}
    title="TrendyKart Ecommerce -MERN"
    description={`
    Frontend: React, Vite
    Backend: Node.js, Express.js
    Database: MongoDB 
    State Management: Context API
    Authentication: JWT (JSON Web Tokens) and OTP Using Nodemailer
    Payment Integration: Braintree
    Documentation:SwaggerUI
    Containerized Using Docker
    `}
    ghLink="https://github.com/chandracec/Ecommerce"
     
  />
</Col> 
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={bitsOfCode}
    isBlog={false}
    title="Email OTP sender Package"
    description={`
    Dependency: Nodemailer
    ● The package facilitates sending of one-time passwords (OTPs) via email. 
    ● Optional parameters are available to customize the mail and OTP length
    ● Seamless operation without worrying about handling the complexities of OTP delivery via email, sendOtp simplifies the integration of secure authentication processes into your application flow. 
    `}
    ghLink="https://www.npmjs.com/package/email-otp-send"
     
  />
</Col>
        <Col md={4} className="project-card">
  <ProjectCard
    imgPath={chatify}
    isBlog={false}
    title="Book Management System (BACKEND)"
    description={`
    ● Tech Stack: NodeJs, Express, and MongoDB.
    ● The user can register and login with authentication implemented using JWT
      and can create book entries for which other users can give their reviews.
    `}
    ghLink="https://github.com/chandracec/Book_Management"
     
  />
</Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Intern Management System (BACKEND)"
              description={`● Tech Stack : NodeJs , Express and MongoDB
              ● Colleges can create their accounts and login by providing their details, and students who are interested in interning at a particular college can register and apply .
              ● Colleges have the facility to view the intern and corresponding data"`}
              ghLink="https://github.com/chandracec/intern-project"
               
  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Url Shortener (BACKEND)"
              description={`
              ● Tech Stack : NodeJs , Express , MongoDB and Redis
              ● URL Shortener like bit.ly, where you give a long URL of any resource and It gives you a shortened URL
              ● Shortened URLs using the ShortId package of npm and used Redis as caching DB for faster access to URLs
              Shortened in the last 24 hour`}
              ghLink="https://github.com/chandracec/URL_Shortener"
                             
            />
          </Col>

           
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
