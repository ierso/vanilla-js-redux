import { increment, decrement, toggleTrue, toggleFalse } from "../actions";

class Clock {
  constructor(options) {
    const { store, el } = options;
    this.store = store;
    this.$increment = el.querySelector("#increment");
    this.$decrement = el.querySelector("#decrement");
    this.$odd = el.querySelector("#incrementIfOdd");
    this.$async = el.querySelector("#incrementAsync");
    this.$value = el.querySelector("#value");
  }

  increment() {
    this.store.dispatch(increment());
  }

  incrementOdd() {
    if (store.getState() % 2 !== 0) {
      this.store.dispatch(increment());
    }
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  addEvents() {
    this.$increment.addEventListener("click", this.increment.bind(this));
    this.$decrement.addEventListener("click", this.decrement.bind(this));
    this.$odd.addEventListener("click", this.incrementOdd.bind(this));
  }

  render() {
    this.$value.innerHTML = this.store.getState().counter.toString();
  }

  init() {
    this.addEvents();
    this.store.subscribe(this.render.bind(this));
  }
}

export default Clock;
