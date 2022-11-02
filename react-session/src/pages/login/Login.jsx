import { useState } from "react";
import Input from "../../UI/input/Input";
import "./Login.css";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameErr, setUserNameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const userNameHandler = (event) => {
    const value = event.target.value;
    // if(value.trim().length<=2){
    //   setUserNameErr(true)
    // }else{
    //   setUserNameErr(false)
    // }
    setUserNameErr(value.trim().length < 5);
    setUserName(value);
  };
  const passwordHandler = (event) => {
    const value = event.target.value;
    setPasswordErr(value.trim().length < 7);
    setPassword(value);
  };
  const loginFormHandler = (event) => {
    event.preventDefault();
    console.log("form value", { userName }, { password });
  };
  return (
    <div className="form-box">
      <form onSubmit={loginFormHandler}>
        <h2>Login Form</h2>

        <Input
          onChange={userNameHandler}
          className={`${userNameErr ? "error-field" : ""}`}
          field={{
            type: "text",
            name: "username",
            value: userName,
            autoComplete: "false",
          }}
        />
        <Input
          onChange={passwordHandler}
          className={`${passwordErr ? "error-field" : ""}`}
          field={{
            type: "password",
            name: "password",
            value: password,
            autoComplete: "false",
          }}
        />
        <div className="form-group">
          <button
            disabled={
              userNameErr ||
              passwordErr ||
              userName.length === 0 ||
              password.length === 0
            }
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
