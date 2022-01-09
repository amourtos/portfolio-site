import React from "react";
import "./AboutMe.css";
import { Figure } from "react-bootstrap";
import certificate from "./certificate.PNG";
import certificateFullStack from "./certificate-2.png";
import { motion, MotionConfig } from "framer-motion";

const AboutMe = () => {
  return (
    <>
      <div className="aboutMe">
        <div className="text">
          <h5>
            Hello and welcome to my portfolio web application. My name is Alex
            Mourtos, and I am a certified full stack software developer. I
            earned my certificates through a 12 month full-stack bootcamp from
            Kenzie Academy at Southern New Hampshire University. Throughout
            their program, I have built web applications, back-end databases,
            and other applications utilizing the skills I have acquired from
            their training program. My programming proficiencies include
            HTML/CSS, Javascript/NodeJS, React, Python, and Django. I continue
            to work towards growing my language proficiencies every day. I am a
            highly motivated individual actively seeking employment as a
            back-end developer or a full stack developer.
          </h5>
          <h5>
            Throughout this web application, you will find some of the projects
            that I had the pleasure of working on as well as more details about
            them and an opportunity to try them out for yourself. I hope you
            find what you're looking for, and thank you for taking the time to
            view my portfolio.
          </h5>
        </div>
        <br />
        <br />
        <br />
        <MotionConfig transition={{ duration: 3 }} className="certificate">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Figure>
              <Figure.Image alt="Certificate" src={certificate} />
              <center>
                <Figure.Caption>
                  Front End Web Development Certificate earned from Kenzie
                  Academy during the full stack engineering program
                </Figure.Caption>
              </center>
            </Figure>
          </motion.div>
        </MotionConfig>
        <MotionConfig transition={{ duration: 5 }} className="certificate">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Figure>
              <Figure.Image alt="Certificate" src={certificateFullStack} />
              <center>
                <Figure.Caption>
                  Full stack Web Development Certificate earned from Kenzie
                  Academy during the full stack engineering program
                </Figure.Caption>
              </center>
            </Figure>
          </motion.div>
        </MotionConfig>
        <footer className="info">
          <p>Alex Mourtos</p>
          <p>amourtos@gmail.com </p>
          <a className="links" href="https://github.com/amourtos">
            My GitHub
          </a>
        </footer>
      </div>
    </>
  );
};

export default AboutMe;
