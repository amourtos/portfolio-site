import React from "react";
import resume from "./SE-Resume.jpeg";
import "./Resume.css";
import { motion, MotionConfig } from "framer-motion";

function Resume({ isVisible }) {
  return (
    <MotionConfig transition={{ duration: 1 }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="resumeContainer">
        <img src={resume} className="resume" alt="resume.jpeg" />
      </motion.div>
    </MotionConfig>
  );
}
export default Resume;
