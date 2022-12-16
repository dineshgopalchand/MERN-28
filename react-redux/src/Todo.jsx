import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./actions/todo";

const Todo = () => {
    const [newTodo, setNewTodo] = useState('');
    const todoList = useSelector(state => state.todo);
    const dispatch = useDispatch();
    return <>
        <h2>Todo </h2>
        <hr />
        <div>
            <input type="text" placeholder="Enter todo" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} /> <button onClick={() => {
                dispatch(addTodo({
                    id: Date.now(),
                    title: newTodo
                }));
                setNewTodo('');
            }}>Add todo</button>
        </div>
        <ul>
            {
                todoList.map(todo => {
                    return <li key={todo.id}><button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button> {todo.title} </li>
                })
            }
        </ul>

    </>;
}
export default Todo;