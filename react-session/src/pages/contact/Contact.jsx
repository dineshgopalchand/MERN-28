// useRef

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactus from "../../assests/images/contact-us.jpg";
import classes from './Contact.module.css';

const Contact = () => {
  const [error, setError] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    nameRef.current.value = "";
  }, []);
  const contactSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(event);
    // const formVal=event.target;
    // console.log(formVal[0].value);
    // console.log(formVal[1].value);
    // console.log(formVal[2].value);
    // console.log(formVal[3].value);

    setError("");
    const nameValue = nameRef.current.value;
    const EmailValue = emailRef.current.value;
    const subjectValue = subjectRef.current.value;
    const messageValue = messageRef.current.value;
    if (nameValue.trim().length < 5) {
      setError("Name is too short");
      nameRef.current.focus();
    } else if (!EmailValue.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setError("Email id is not valid");
      emailRef.current.focus();
    }
    console.log(error);
    // fetch operation  to same data in  the server
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="mt-5">
            <form onSubmit={contactSubmitHandler}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  ref={nameRef}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Id</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  ref={emailRef}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  ref={subjectRef}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  className="form-control"
                  ref={messageRef}
                />
              </div>
              <div className="form-group mt-2">
                <button className="btn btn-primary form-control">Send</button>
                {error !== "" && (
                  <div className="alert alert-danger m" role="alert">
                    {error}
                  </div>
                )}
              </div>
            </form>
          </Col>
          <Col className="text-center">
            <h2 className={classes.contactHeader}>Contact us</h2>
            <div className="details">
              <img src={contactus} alt="Contact us" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
