import React from "react";
import resume from "./SE-Resume.jpeg";
import resumePgOne from "./SE-Resume-portfolio_pg1.jpg";
import resumePgTwo from "./SE-Resume-portfolio_pg2.jpeg";
import "./Resume.css";
import { motion, MotionConfig } from "framer-motion";

function Resume({ isVisible }) {
  return (
    <MotionConfig transition={{ duration: 1 }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="resumeContainer">
        <img src={resumePgOne} className="resume" alt="resume.jpeg" />
        <img src={resumePgTwo} className="resume" alt="resume.jpeg" />
      </motion.div>
    </MotionConfig>
  );
}
export default Resume;
