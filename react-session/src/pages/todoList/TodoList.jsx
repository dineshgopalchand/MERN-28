import { useEffect, useState } from "react";
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
  const [completedCount, setCompletedCount] = useState(0);
  const [buttonCount, setButtonCount] = useState(0);


  // it will run every time whenever state or props change(updating)
  useEffect(() => {
    console.log("useEffect without dep");
  });

  // it will run only once ( Mounting)
  useEffect(() => {
    console.log("useEffect with no dep");
  }, []);

  // it will  run whenever dep(todoList) will change
  useEffect(() => {
    console.log("useEffect with todo list as dep"); 
  }, [todoList]);

  const updateCompletedCount = (updateTodoList) => {
    const filteredItem = updateTodoList.filter(
      (todoItem) => todoItem.completed === true
    );
    console.log(filteredItem);
    const count = filteredItem.length;
    setCompletedCount(count);
  };

  const todoItemChangeStatusHandler = (todo) => {
    console.log("todoItemChangeStatusHandler");
    const updatedTodo = { ...todo, completed: !todo.completed };
    const todoIndex = todoList.findIndex((todoItem) => todoItem.id === todo.id);
    const updateTodoList = [...todoList];
    updateTodoList.splice(todoIndex, 1, updatedTodo);
    updateCompletedCount(updateTodoList);
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
      <h2 className="my-5">
        To do list
        <button onClick={formHideShowHandler}>
          {showNewForm ? "Close Form" : "Add New"}
        </button>
        <span style={{ fontSize: "0.6em" }}> Completed ({completedCount})</span>
      </h2>
      <button
        onClick={() => {
          setButtonCount((prev) => prev + 1);
        }}
      >
        Click me({buttonCount})
      </button>
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
