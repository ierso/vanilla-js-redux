import store from "./src/store";
import { Clock } from "./src/components";

document.addEventListener("DOMContentLoaded", () => {
  const newClock = new Clock({
    el: document.getElementById("clock"),
    store
  });

  // init
  newClock.init();
});
