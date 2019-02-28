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

const toggle = () => {
  return {
    type: "TOGGLE"
  };
};

export { increment, decrement, toggle };
