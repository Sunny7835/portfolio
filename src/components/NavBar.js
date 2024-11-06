import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIconLinkedIn from "../assets/img/nav-icon1.svg";
import navIconFB from "../assets/img/nav-icon2.svg";
import navIconInsta from "../assets/img/nav-icon3.svg";
import navIconGit from "../assets/img/nav-icon-github.svg";

import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            {/* <img src={logo} alt="Logo" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="http://linkedin.com/in/sunny-sharma-9a3982232"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIconLinkedIn} alt="" />
                </a>

                <a
                  href="https://github.com/Sunny7835"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIconGit} alt="" />
                </a>
{/* 
                <a
                  href="http://linkedin.com/in/sunny-sharma-9a3982232"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIconFB} alt="" />
                </a>

                <a
                  href="http://linkedin.com/in/sunny-sharma-9a3982232"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIconInsta} alt="" />
                </a> */}
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
