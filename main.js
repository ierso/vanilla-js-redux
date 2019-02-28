import store from "./src/store";
import { Clock, Toggle } from "./src/components";

document.addEventListener("DOMContentLoaded", () => {
  const clock = new Clock({
    el: document.getElementById("clock"),
    store
  });

  const toggle = new Toggle({
    el: document.getElementById("button"),
    store
  });

  // init
  clock.init();
  toggle.init();
});
