import React from "react";
import { Card } from "react-bootstrap";
import classes from "./App.module.css";
import Copyright from "./layout/Copyright";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import TopNotification from "./layout/top-notification/TopNotification";
import Home from "./pages/home/Home";
import TodoList from './pages/todoList/TodoList'
function App() {
  return (
    <>
      <Card className={`${classes.appContainer} rounded-0`}>
        <Card.Header className="p-0">
          <TopNotification/>
          <Header />
        </Card.Header>
        <Card.Body className="p-0 ">
          {/* <Home/> */}
          <TodoList/>
        </Card.Body>
        <Card.Footer className="text-muted p-0 mt-3">
          <Footer />
          <Copyright/>
        </Card.Footer>
      </Card>
    </>
  );
}

export default App;
