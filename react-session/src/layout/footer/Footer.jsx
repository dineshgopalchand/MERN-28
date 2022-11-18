import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaMapMarker } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Container className={classes.mainFooter}>
      <Row>
        <Col>
          <h3>About Us</h3>
          <div>
            SDLC Training is an IT training institute that offers tailor-made
            courses to students and corporates who intend to hone their IT
            Skills. Our training portfolio covers programs that span across the
            Software Development Life Cycle, and hence the name.
          </div>
        </Col>
        <Col>
          <h3>Easy Access</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Student Review</a>
            </li>
            <li>
              <a href="#">Placement</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </Col>
        <Col>
          <h3>Contact Us</h3>
          <div className={classes.contactGroup}>
            <div className={classes.icon}>
              <FaMapMarker />
            </div>
            <div className={classes.details}>
              <div>
                #354, 3rd Floor, Aswath Nagar Main Road, Near Kanti Sweets,
                Marathahalli, Bengaluru, Karnataka - 560037
              </div>
            </div>
          </div>
          <div className={classes.contactGroup}>
            <div className={classes.icon}>
              <MdOutlineEmail />
            </div>
            <div className={classes.details}>
              <a href="mailto:hr@sdlctraining.in">hr@sdlctraining.in</a>
            </div>
          </div>
          <div className={classes.contactGroup}>
            <div className={classes.icon}>
              <FiPhoneCall />
            </div>
            <div className={classes.details}>
              <a href="tel:+91-8494840567">+91 84948 40567</a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
