import { Fragment, useState } from "react";
import NewTodo from "./NewTodo";
import "./TodoList.css";

const todoListInit = [
  {
    id: 1,
    title: "delectus aut autem",
    completed: true,
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
];
function TodoList() {
  const [todoList, setTodoList] = useState(todoListInit);
  const [showNewForm, setShowNewForm] = useState(false);

  const todoItemChangeStatusHandler = (todo) => {
    console.log("todoItemChangeStatusHandler");
    const updatedTodo = { ...todo, completed: !todo.completed };
    const todoIndex = todoList.findIndex((todoItem) => todoItem.id === todo.id);
    const updateTodoList = [...todoList];
    updateTodoList.splice(todoIndex, 1, updatedTodo);
    setTodoList(updateTodoList);
  };
  const formHideShowHandler = () => {
    setShowNewForm(!showNewForm);
  };
  const addNewTodoHandler = (newTodo) => {
    setTodoList((prevTodoList) => {
      return [...prevTodoList, newTodo];
    });
  };
  const DeleteHandler = (event, id) => {
    event.stopPropagation();
    console.log("delete handler", id);

    setTodoList((prevTodoList) => {
      // const updateList=[...prevTodoList];
      // const removeItemIndex=updateList.findIndex(item=>item.id===id);
      // updateList.splice(removeItemIndex,1);
      // return updateList;
      return prevTodoList.filter((todo) => todo.id !== id);
    });
  };
  const todoListFormatted = todoList.map((todo) => {
    return (
      <li
        className={todo.completed ? "completed" : "not-completed"}
        onClick={() => todoItemChangeStatusHandler(todo)}
        key={todo.id}
      >
        {" "}
        <button onClick={(event) => DeleteHandler(event, todo.id)}>
          Delete
        </button>
        <i
          className={`fa-solid fa-rocket fa-icon ${
            todo.completed ? "" : "not-completed"
          }`}
        ></i>
        {todo.title}
      </li>
    );
  });
  return (
    <>
      <h2>
        To do list{" "}
        <button onClick={formHideShowHandler}>
          {showNewForm ? "Close Form" : "Add New"}
        </button>
      </h2>
      {/* {showNewForm ? <NewTodo /> : ""} */}
      {showNewForm && (
        <NewTodo
          onNewToDo={addNewTodoHandler}
          onHideForm={formHideShowHandler}
        />
      )}

      <ul className="todo-list">{todoListFormatted}</ul>
    </>
  );
}

export default TodoList;
