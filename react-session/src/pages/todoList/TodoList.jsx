import { Fragment } from "react";
import "./TodoList.css";

function TodoList() {
  const todoList = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: true,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
  ];
  return (
    <>
      <h2>To do list</h2>
      <ul className="todo-list">
        {todoList.map((todo) => {
          return (
            <Fragment key={todo.id}>
              {/* <li key={todo.id}>
                {todo.completed ? <del>{todo.title}</del> : <>{todo.title}</>}
              </li> */}
              <li className={todo.completed ? "completed" : "not-completed"}>
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
