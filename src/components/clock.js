import { increment, incrementOdd, decrement } from "../actions/clockActions";

class Clock {
  constructor(options) {
    const { store, el } = options;
    this.store = store;
    this.$increment = el.querySelector("#increment");
    this.$incrementOdd = el.querySelector("#increment-odd");
    this.$decrement = el.querySelector("#decrement");
    this.$value = el.querySelector("#value");
  }

  increment() {
    this.store.dispatch(increment());
  }

  incrementOdd() {
    this.store.dispatch(incrementOdd());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  addEvents() {
    this.$increment.addEventListener("click", this.increment.bind(this));
    this.$incrementOdd.addEventListener("click", this.incrementOdd.bind(this));
    this.$decrement.addEventListener("click", this.decrement.bind(this));
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
