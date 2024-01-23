import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
    Hi Everyone, I'm <span className="purple">Chandrakant Tiwari</span> from <span className="purple">Medininagar, India.</span>
    <br />
    I am currently on the lookout for opportunities in the role of a <span className="orange">Software Engineer</span>.
    <br />
    Holding a <span className="green">B.Tech</span> degree in <span className="green">Computer Science</span>, I am passionate about leveraging technology to create innovative solutions.
    <br />
    <br />
    Beyond coding, I engage in a variety of activities that enrich my life and broaden my perspective.
</p>


          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
