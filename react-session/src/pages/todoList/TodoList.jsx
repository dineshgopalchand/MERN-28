import axios from "axios";
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
// const TODO_LIST_KEY = "todoList";
const todoAPIUrl = "http://localhost:3342/todo";
const TodoList = () => {
  const [todoList, setTodoList] = useState();
  const [showNewForm, setShowNewForm] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    getTodoList();
  }, []);
  const getTodoList = () => {
    axios
      .get(todoAPIUrl)
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const createNewTodo = (newTodo) => {
    axios
      .post(todoAPIUrl, newTodo)
      .then((res) => {
        console.log(res);
        // setTodoList(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const deleteTodoItem = (id) => {
    axios
      .delete(todoAPIUrl + "/" + id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const updateTodoItem = (updatedItem) => {
    axios
      .put(`${todoAPIUrl}/${updatedItem.id}`, updatedItem)
      .then((res) => {
        console.log(res);
        // setTodoList(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const updateCompletedCount = (updateTodoList) => {
    const filteredItem = updateTodoList.filter(
      (todoItem) => todoItem.completed === true
    );
    const count = filteredItem.length;
    setCompletedCount(count);
  };

  const todoItemChangeStatusHandler = (todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    updateTodoItem(updatedTodo);
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
    createNewTodo(newTodo);
    setTodoList((prevTodoList) => {
      return [...prevTodoList, newTodo];
    });
  };
  const DeleteHandler = (event, id) => {
    event.stopPropagation();
    console.log("delete handler", id);
    deleteTodoItem(id);
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) => todo.id !== id);
    });
  };
  const todoListFormatted = (todoList || []).map((todo) => {
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
};

export default TodoList;
