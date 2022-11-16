import React from "react";
import { useState } from "react";
import "./NewTodo.css";

const NewTodo = (props) => {
  // console.log(props);
  const newTodoHandler = props.onNewToDo;
  const hideForm=props.onHideForm;
  const [todoVal, setTodoVal] = useState("");
  const [todoError, setTodoError] = useState(false);

  const todoChangeHandle = (event) => {
    const inputVal = event.target.value;
    if (inputVal.trim().length <= 3) {
      setTodoError(true);
    } else {
      setTodoError(false);
    }
    setTodoVal(inputVal);
  };

  const todoFormSubmitHandler = (event) => {
    event.preventDefault();
    if (!todoError) {
      const newTodo = {
        id: Date.now(),
        title: todoVal,
        completed: false,
      };
      newTodoHandler(newTodo);
      setTodoVal('');// after submission clear the input field
      hideForm();// it will hide todo form after submission
    }
  };

  return (
    <form className="todo-from" onSubmit={todoFormSubmitHandler}>
      <div className="form-group">
        <input
          type="text"
          className={`form-control ${todoError ? "error" : ""}`}
          name="todo"
          value={todoVal}
          onChange={todoChangeHandle}
          placeholder="Add new todo item"
        />
      </div>
      <button type="submit">Add new todo</button>
    </form>
  );
};

export default NewTodo;
