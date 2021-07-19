import React from "react";
import "./Intro.css";
import { motion } from "framer-motion";
import Picture from "./christmas2019.jpg";
const Intro = ({ isvisible }) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants} className="introContainer">
      <h1>
        <b>Alex Mourtos</b>
      </h1>
      <img alt="Me" src={Picture} />
      <h2>Software Engineer</h2>
      <h2>New Jersey, USA</h2>
      <h2>Kenzie Academy Graduate</h2>
    </motion.div>
  );
};

export default Intro;
