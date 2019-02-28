const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const toggle = (state = false, action) => {
  switch (action.type) {
    case "TRUE":
      return { ...state, toggle: true };
      break;
    case "FALSE":
      return { ...state, toggle: false };
    default:
      return state;
  }
};

export { counter, toggle };
