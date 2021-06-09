import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsArray from "../../projectObjects/projectObjects";
import "./projectcss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Projects = (props) => {
  const [project, setProject] = useState([]);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 0 },
  };

  useEffect(() => {
    setProject(projectsArray);
  }, [project]);

  return (
    <div>
      <motion.header initial="hidden" animate="visible" variants={variants} className="projectHeader">
        <h1>
          Applications
          {"    "}
          <FontAwesomeIcon icon={faReact} />
          {"    "}
          <FontAwesomeIcon icon={faPython} />
          {"    "}
          <FontAwesomeIcon icon={faNodeJs} />
          {"    "}
          <FontAwesomeIcon icon={faHtml5} />
        </h1>
      </motion.header>
      <motion.ul layout initial="hidden" animate="visible" variants={list} transition={{ duration: 0.5 }} className="cardList">
        <motion.li variants={item} className="innerCardList">
          {project.map((index) => (
            <ProjectCard
              title={index.title}
              content={index.content}
              author={index.author}
              tools={index.tools}
              language={index.language}
              image={index.imageSource}
              link={index.link}
              gitHub={index.gitHub}
            />
          ))}
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Projects;
