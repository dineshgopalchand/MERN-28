export const addTodo = (payload) => {
    return {
        type: "ADDTODO",
        payload
    }
}
export const deleteTodo = (id) => {
    return {
        type: "DELETETODO",
        payload: { id }
    }
}