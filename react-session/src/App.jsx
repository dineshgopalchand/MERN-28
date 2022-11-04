import React from "react";
import Header from "./UI/header/Header";
import Login from "./pages/login/Login";
import TopNotification from "./UI/header/TopNotification";
import "./App.css";
import UserList from "./pages/userList/UserList";
import TodoList from "./pages/todoList/TodoList";
// js comment
/* multi line
comment
*/
function App() {
  return (
    <>
      <div className="main">
        <div className="main-header">
          <TopNotification />
          <Header />
        </div>
        <div className="main-body container bg-light p-1">
          {/* <Login /> */}
          {/* <UserList/> */}
          <TodoList/>
        </div>
      </div>
    </>
  );
}

export default App;
