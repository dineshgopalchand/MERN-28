import React, { memo } from "react";

const Button = (props) => {
  console.log(props);
  const buttonStyle = {
    backgroundColor: "blue",
    color: "#ffffff",
    borderRadius: "5px",
  };
  return (
    <>
      {/* <button style={buttonStyle} {...props}> */}
      <button
        style={{
          backgroundColor: "blue",
          color: "#ffffff",
          borderRadius: "5px",
        }}
        {...props}
      >
        {props.children}
      </button>
    </>
  );
};

export default memo(Button);
