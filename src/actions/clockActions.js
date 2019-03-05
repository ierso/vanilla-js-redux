const increment = () => {
  return {
    type: "INCREMENT"
  };
};

const incrementOdd = () => {
  return {
    type: "INCREMENT_ODD"
  };
};

const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

export { increment, incrementOdd, decrement };
