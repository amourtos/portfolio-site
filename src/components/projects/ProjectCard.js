import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "../../projectObjects/projectObjects";
import "./projectcss.css";
import { motion } from "framer-motion";
const ProjectCard = (props) => {
  function newTabGitHub() {
    window.open(props.gitHub);
  }
  function newTabViewApp() {
    window.open(props.link);
  }

  return (
    <motion.div>
      <Card className="card" style={{ width: "31rem", height: "50rem", backgroundColor: "#282c34" }}>
        <Card.Img variant="top" src={props.image} style={{ border: "4px solid lightgreen", width: "100%", height: "19rem" }} />
        <Card.Body>
          <Card.Title className="cardText">{props.title}</Card.Title>
          <Card.Text>{props.content}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush" style={{ backgroundColor: "#282c34" }}>
          <ListGroupItem style={{ backgroundColor: "#282c34" }}>Author: {props.author}</ListGroupItem>
          <ListGroupItem style={{ backgroundColor: "#282c34" }}>Created With: {props.tools}</ListGroupItem>
        </ListGroup>
        <Card.Footer className="cardBottom">
          {props.link != null ? (
            <Card.Link className="cardText">
              <Button className="theButton" variant="info" onClick={newTabViewApp}>
                View Application
              </Button>
            </Card.Link>
          ) : (
            <div></div>
          )}
          <Card.Link className="cardText">
            <Button className="theButton" variant="info" onClick={newTabGitHub}>
              View on Github
            </Button>
          </Card.Link>
        </Card.Footer>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
