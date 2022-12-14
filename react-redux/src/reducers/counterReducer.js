const counterInit = 0;
const counterReducer = (state = counterInit, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "INCREMENT_BY_VAL":
            console.log(action)
            return state + action.payload;
        case "RESET":
            return counterInit;
        default:
            return state;
    }
};
export default counterReducer;