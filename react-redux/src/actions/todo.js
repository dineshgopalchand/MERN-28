import axios from "axios";

export const loadNewTodoList = (payload) => {
  return {
    type: "LOADNEWTODO",
    payload,
  };
};
export const addTodo = (payload) => {
  return {
    type: "ADDTODO",
    payload,
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DELETETODO",
    payload: { id },
  };
};
export const fetchInitTodo = () => {
  return (dispatch) => {
    axios.get("http://localhost:3342/todo").then((todolist) => {
      dispatch(loadNewTodoList(todolist.data));
    });
  };
};
