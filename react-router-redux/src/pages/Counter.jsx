import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../slices/counterSlice";

const Counter = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <Container>
      <button className="counter-button" onClick={() => dispatch(increment())}>
        +
      </button>
      <span className="counter-show">{value}</span>
      <button className="counter-button" onClick={() => dispatch(decrement())}>
        -
      </button>
      <br />
      <button className="counter-button" onClick={() => dispatch(reset())}>
        Reset
      </button>
      <button
        className="counter-button"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        Increment by 5
      </button>
    </Container>
  );
};

export default Counter;
