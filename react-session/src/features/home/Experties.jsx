import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { SiGoogleclassroom } from "react-icons/si";

const Experties = () => {
  return (
    <Row>
      <Col>
        <h2 className="bold-title">Our Expertise</h2>
      </Col>
      <Col>
        <Card>
          <Card.Body>
            <div className="icon">
              <SiGoogleclassroom />
              <h3>Classroom Training</h3>
              <div className="details">
                Learning with human interaction is always the best way to grab
                the skills and knowledge. We have facility to provide classroom
                training as it is the best mode to learn and hone your IT
                skills.
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body>
            <div className="icon">
              <SiGoogleclassroom />
              <h3>Classroom Training</h3>
              <div className="details">
                Learning with human interaction is always the best way to grab
                the skills and knowledge. We have facility to provide classroom
                training as it is the best mode to learn and hone your IT
                skills.
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body>
            <div className="icon">
              <SiGoogleclassroom />
              <h3>Classroom Training</h3>
              <div className="details">
                Learning with human interaction is always the best way to grab
                the skills and knowledge. We have facility to provide classroom
                training as it is the best mode to learn and hone your IT
                skills.
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      
    </Row>
  );
};

export default Experties;
