import { useState } from "react";
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
  const passwordNameHandler = (event) => {
    const value = event.target.value;
    setPasswordErr(value.trim().length < 7);
    setPassword(value);
  };
  const loginFormHandler=event=>{
    event.preventDefault();
    console.log('form value',{userName},{password});
  }
  return (
    <div className="form-box">
      <form onSubmit={loginFormHandler}>
        <h2>Login Form</h2>
        <div className={`form-group ${userNameErr ? "error-field" : ""}`}>
          <input
            type="text"
            name="username"
            value={userName}
            onChange={userNameHandler}
            autoComplete="false"
          />
        </div>
        <div className={`form-group ${passwordErr ? "error-field" : ""}`}>
          <input
            type="password"
            name="password"
            value={password}
            onChange={passwordNameHandler}
            autoComplete="false"
          />
        </div>
        <div className="form-group">
          <button disabled={userNameErr || passwordErr || userName.length===0 || password.length===0 }>Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
