import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/portfolio.png";
import navIconLinkedIn from "../assets/img/nav-icon1.svg";
import navIconGit from "../assets/img/nav-icon-github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="http://linkedin.com/in/sunny-sharma-9a3982232" target="_blank" rel="noopener noreferrer">
                <img src={navIconLinkedIn} alt="LinkedIn Icon" />
              </a>
              <a href="https://github.com/Sunny7835" target="_blank" rel="noopener noreferrer">
                <img src={navIconGit} alt="GitHub Icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
