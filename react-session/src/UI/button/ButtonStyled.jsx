import React from "react";
import Styled from "styled-components";

const Button = Styled.button`
            background-color: ${(props) => {
              return props.disabled ? "gray" : "green";
            }};
            color: #ffffff;
            border-radius: 5px;
            cursor:pointer;
            & .icon{
                color:violet;
            }
            &:hover{
               font-weight:bold;
            }
`;
// const Button = Styled.button({
//   "background-color": "pink",
//   color: "#ffffff",
//   "border-radius": "5px",
// });
const ButtonStyled = (props) => {
  return (
    <>
      <Button {...props}>
        <span className="icon">*</span>
        <span>{props.children}</span>
      </Button>
    </>
  );
};

export default ButtonStyled;
