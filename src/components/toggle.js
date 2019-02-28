import { toggle } from "../actions";

class Toggle {
  constructor(options) {
    const { store, el } = options;
    this.store = store;
    this.$toggle = el.querySelector("#toggle");
  }

  toggle() {
    this.store.dispatch(toggle());
  }

  addEvents() {
    this.$toggle.addEventListener("click", this.toggle.bind(this));
  }

  render() {
    const { toggle } = this.store.getState().toggle;
    this.$toggle.innerText = toggle;
  }

  init() {
    this.addEvents();
    this.store.subscribe(this.render.bind(this));
  }
}

export default Toggle;
