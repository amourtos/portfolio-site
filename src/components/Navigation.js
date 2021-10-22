import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Navigation.css";
import resume from "../components/Resume/SE-Resume (2).pdf";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
const Navigation = () => {
  return (
    <div className="navbar">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link className="link" to="/" style={{ color: "lightgreen" }}>
            Home
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link className="link" to="/aboutme" style={{ color: "#808080" }}>
                About Me
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/projects" style={{ color: "#808080" }}>
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/resume" style={{ color: "#808080" }}>
                Resume
              </Link>
            </Nav.Link>
            <NavDropdown title="Media" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/alexander-mourtos-358573201/">
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/amourtos">
                <FontAwesomeIcon icon={faGithubAlt} />
                Github
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.instagram.com/twip_the_twipper001/">
                <FontAwesomeIcon icon={faInstagram} />
                Twip's Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href="https://twitter.com/amourtosgmailc1">
                <FontAwesomeIcon icon={faTwitter} />
                Twip's Twitter
              </NavDropdown.Item>
              <NavDropdown.Item href={resume}>
                <FontAwesomeIcon icon={faFilePdf} /> Download Resume
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
