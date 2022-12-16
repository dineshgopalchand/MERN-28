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
    payload,
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

export const incrementAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      // You can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
};
