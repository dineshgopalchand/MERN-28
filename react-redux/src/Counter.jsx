import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementAsync, incrementByValue, reset } from "./actions";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [multipleValue, setMultipleValue] = useState(0);
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Counter</h2>
      <button className="counter-button" onClick={() => dispatch({
        type: "INCREMENT",
    })}>
        +
      </button>
      <input
        type="text"
        className="counter-input"
        disabled
        value={counter}
        style={{ textAlign: "center" }}
      />
      <button className="counter-button" onClick={() => dispatch(decrement())}>
        -
      </button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Add Number"
        value={multipleValue}
        onChange={(event) => setMultipleValue(+event.target.value)}
      />{" "}
      <button
        className="counter-button"
        onClick={() => dispatch(incrementByValue(multipleValue))}
      >
        Add Multiple
      </button>
      <br />
      <br />
      <button className="counter-button" onClick={() => dispatch(reset())}>
        Reset
      </button>
      <button className="counter-button" onClick={() => dispatch(incrementAsync())}>
        Delayed - increase
      </button>
    </div>
  );
};

export default Counter;
