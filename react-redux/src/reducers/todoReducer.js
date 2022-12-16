const todoReducer = (state = [
    {
        id: '232222',
        title: 'todo 1 '
    },
    {
        id: '23222s2',
        title: 'todo 2 '
    },
    {
        id: '232222ss',
        title: 'todo 3 '
    },
    {
        id: '2322s22',
        title: 'todo 45 '
    },
], action) => {
    switch (action.type) {
        case "ADDTODO":
            return [...state, action.payload];
        case "DELETETODO":
            const id = action.payload.id;
            return state.filter(todo => todo.id != id);
        default:
            return state;
    }
}
export default todoReducer;