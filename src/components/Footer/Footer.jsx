import React, { useState, useEffect } from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const location = useLocation();
  const locationPath = location.pathname;
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Update show state based on locationPath
    if (locationPath === "/test") {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [locationPath]); // Only re-run effect if locationPath changes

  // Render the footer only if show is true
  return show ? (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <h1>Recycle-It</h1>
            </div>
            <p>Recycles Waste, Market place for the user to buy and sell the products </p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>

          <Col md={3} sm={5} className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>Fr. Conceicao Rodrigues College Of Engineering</li>
              <li>website: https://frcrce.ac.in/</li>
              <li>Phone: 022 6711 4000</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  ) : null; // If show is false, return null to not render the footer
};

export default Footer;
