import React from "react";
import resume from "./SE-Resume (2).pdf";
import resumePgOne from "./SE-Resume-portfolio_pg1.jpg";
import resumePgTwo from "./SE-Resume-portfolio_pg2.jpeg";
import "./Resume.css";
import { motion, MotionConfig } from "framer-motion";
import Button from "react-bootstrap/Button";

function Resume({ isVisible }) {
  return (
    <>
      <MotionConfig transition={{ duration: 1 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="resumeContainer">
          <a className="links" href={resume} download="SE-Resume (2).pdf" target="_blank">
            <Button variant="secondary">Download PDF</Button>
          </a>
          <img src={resumePgOne} className="resume" alt="resume.jpeg" />
          <img src={resumePgTwo} className="resume" alt="resume.jpeg" />
        </motion.div>
      </MotionConfig>
    </>
  );
}
export default Resume;
