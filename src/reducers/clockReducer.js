const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENT_ODD":
      if (state % 2 !== 0) {
        return state + 1;
      }
    default:
      return state;
  }
};

export { counter };
