const increment = () => {
  return {
    type: "INCREMENT"
  };
};

const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

const toggle = payload => {
  return {
    type: "TOGGLE",
    payload: payload
  };
};

export { increment, decrement, toggle };
