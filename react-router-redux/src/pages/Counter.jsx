import React from "react";
import { Container } from "react-bootstrap";

const Counter = () => {
  return (
    <Container>
      <button className="counter-button">+</button>
      <input type="text" className="counter-input" disabled value="0"/>
      <button className="counter-button">-</button>
    </Container>
  );
};

export default Counter;
