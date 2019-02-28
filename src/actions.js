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

const toggleTrue = () => {
  return {
    type: "TRUE"
  };
};

const toggleFalse = () => {
  return {
    type: "FALSE"
  };
};

export { increment, decrement, toggleTrue, toggleFalse };
