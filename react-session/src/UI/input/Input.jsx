import React from "react";
import "./Input.css";

const Input = (props) => {
  const field = props.field;
  console.log(props);
  return (
    <>
      <div className={`form-group ${props.className}`}>
        <input {...field}  className="form-control" onChange={props.onChange}/>
      </div>
    </>
  );
};

export default Input;
