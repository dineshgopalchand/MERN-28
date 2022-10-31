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

      <ul className="todo-list">
        {todoList.map((todo) => {
          return (
            <Fragment key={todo.id}>
              <li
                className={todo.completed ? "completed" : "not-completed"}
                onClick={() => todoItemChangeStatusHandler(todo)}
              >
                {todo.title}
              </li>
            </Fragment>
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
