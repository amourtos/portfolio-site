import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "../../projectObjects/projectObjects";
import "./projectcss.css";

const ProjectCard = (props) => {
  return (
    <div>
      <Card className="card" style={{ width: "29rem", height: "51rem", backgroundColor: "#282c34" }}>
        <Card.Img variant="top" src={props.image} style={{ border: "6px solid lightgreen", width: "29rem", height: "17rem" }} />
        <Card.Body>
          <Card.Title className="cardText">{props.title}</Card.Title>
          <Card.Text>{props.content}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush" style={{ backgroundColor: "#282c34" }}>
          <ListGroupItem style={{ backgroundColor: "#282c34" }}>Author: {props.author}</ListGroupItem>
          <ListGroupItem style={{ backgroundColor: "#282c34" }}>Tools: {props.tools}</ListGroupItem>
          <ListGroupItem style={{ backgroundColor: "#282c34" }}>language: {props.language}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link className="cardText" href={props.link}>
            View Application
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
