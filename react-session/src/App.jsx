import React from "react";
import Header from "./UI/header/Header";
import Login from "./pages/login/Login";
import TopNotification from "./UI/header/TopNotification";

function App() {
  return (
    <>
      <TopNotification />
      <Header />
      <Login />
    </>
  );
}

export default App;
