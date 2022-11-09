import React, { memo } from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <>
      <button
        className={`${classes.button} ${props.disabled ? classes.bgGray : ""}`}
        {...props}
      >
        {props.children}
      </button>
    </>
  );
};

export default memo(Button);
