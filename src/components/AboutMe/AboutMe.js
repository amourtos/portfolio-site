import React from "react";
import "./AboutMe.css";
import { Figure } from "react-bootstrap";
import certificate from "./certificate.PNG";

const AboutMe = () => {
  return (
    <>
      <div className="aboutMe">
        <h5>
          Hello and welcome to my portfolio web application, My name is Alex Mourtos, and I am a software engineer. I have been a
          student at Kenzie Academy for the past year. I have built web applications, back-end databases, and other applications
          utilizing the many skills I have acquired at my time with Kenzie Academy. My programming proficiencies include HTML/CSS,
          Javascript/NodeJS, React, Python, and Django, and I continue to work towards growing my language proficiencies every day. I
          am actively seeking employment as a back-end developer or a full stack developer position with a company that is willing to
          take on junior developers that are continuosly willing to learn and advance their career.
        </h5>
        <h5>
          Throughout this web application, you will find some of the projects that I had the pleasure of working on as well as more
          details about them and an opportunity to try them out for yourself. I hope you find what you're looking for, and thank you
          for taking the time to look at my creations.
        </h5>
        <br />
        <br />
        <br />
        <Figure className="certificate">
          <Figure.Image alt="Certificate" src={certificate} />
          <Figure.Caption>
            Front End Web Development Certificate earned with Kenzie Academy during the full stack engineer program
          </Figure.Caption>
        </Figure>
        <footer className="info">
          <p>Alex Mourtos</p>
          <p>amourtos@gmail.com </p>
          <p>https://github.com/amourtos</p>
        </footer>
      </div>
    </>
  );
};

export default AboutMe;
