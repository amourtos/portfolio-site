import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsArray from "../../projectObjects/projectObjects";
import "./projectcss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";

const Projects = (props) => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    setProject(projectsArray);
  }, [project]);

  return (
    <div>
      <header className="projectHeader">
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
      </header>
      <div className="cardList">
        {project.map((index) => (
          <ProjectCard
            title={index.title}
            content={index.content}
            author={index.author}
            tools={index.tools}
            language={index.language}
            image={index.imageSource}
            link={index.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
