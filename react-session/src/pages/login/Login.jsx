import { useState } from "react";
import Button from "../../UI/button/Button";
import ButtonStyled from "../../UI/button/ButtonStyled";
import Card from "../../UI/card/Card";
import Input from "../../UI/input/Input";
import "./Login.css";
const Login = () => {
  const [formVal, setFormVal] = useState({
    username: {
      value: "",
      error: false,
    },
    password: {
      value: "",
      error: false,
    },
    formError: true,
  });
  const formFieldHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(value, name);
    let error = false;
    if (name === "username") {
      error = value.trim().length < 5;
    } else if (name === "password") {
      error = value.trim().length < 7;
    }
    setFormVal((prev) => {
      return {
        ...prev,
        [name]: {
          value,
          error,
        },
      };
    });
    setFormVal((prev) => {
      return { ...prev, formError: isFormError(prev) };
    });
  };

  const isFormError = ({ username, password }) => {
    return (
      username.error ||
      password.error ||
      username.value === "" ||
      password.value === ""
    );
  };

  const loginFormHandler = (event) => {
    event.preventDefault();
    console.log("form value", formVal.username.value, formVal.password.value);
  };

  return (
    <div className="form-box">
      <Card className="border-2 border-solid border-blue">
        <form onSubmit={loginFormHandler}>
          <h2>Login Form</h2>
          <Input
            onChange={formFieldHandler}
            className={`${formVal.username.error ? "error-field" : ""}`}
            field={{
              type: "text",
              name: "username",
              value: formVal.username.value,
              autoComplete: "false",
            }}
          />
          <Input
            onChange={formFieldHandler}
            className={`${formVal.password.error ? "error-field" : ""}`}
            field={{
              type: "password",
              name: "password",
              value: formVal.password.value,
              autoComplete: "false",
            }}
          />
          <div className="form-group">
            <Button disabled={formVal.formError} title="sign-in button">
              Sign In
            </Button>
            {/* <ButtonStyled disabled={formVal.formError} title="sign-in button">
              Sign In
            </ButtonStyled> */}
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
