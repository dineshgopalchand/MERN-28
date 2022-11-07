import React from "react";

const Button = (props) => {
    console.log(props);
  const buttonStyle = {
    backgroundColor: "blue",
    color: "#ffffff",
    borderRadius: "5px",
  };
  return <button style={buttonStyle} {...props}>{props.children}</button>;
};

export default Button;
