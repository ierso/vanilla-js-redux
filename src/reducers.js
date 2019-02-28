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

const toggle = (state = { toggle: "press here" }, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, toggle: action.payload };
      break;
    default:
      return state;
  }
};

export { counter, toggle };
