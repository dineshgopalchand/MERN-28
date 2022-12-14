export const increment = () => {
    return {
        type: "INCREMENT",
    };
};

export const decrement = () => {
    return {
        type: "DECREMENT",
    };
};
export const incrementByValue = (payload) => {
    return {
        type: "INCREMENT_BY_VAL",
        payload
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};

export const logIn = () => {
    return {
        type: "LOG_IN",
    };
};

export const logOut = () => {
    return {
        type: "LOG_OUT",
    };
};