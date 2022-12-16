const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADDTODO":
            return [...state, ...action.payload];
        case "LOADNEWTODO":
            return action.payload;
        case "DELETETODO":
            const id = action.payload.id;
            return state.filter(todo => todo.id !== id);
        default:
            return state;
    }
}
export default todoReducer;