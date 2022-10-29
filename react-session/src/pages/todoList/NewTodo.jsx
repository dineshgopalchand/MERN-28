import React from "react";
import "./NewTodo.css";

function NewTodo() {
  return (
    <form className="todo-from">
      <div className="form-group">
        <input type="text" className="form-control" />
      </div>
      <button type="submit">Create Task</button>
    </form>
  );
}

export default NewTodo;
