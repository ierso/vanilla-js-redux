const toggle = (state = { toggle: "press here" }, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, toggle: action.payload };
      break;
    default:
      return state;
  }
};

export { toggle };
