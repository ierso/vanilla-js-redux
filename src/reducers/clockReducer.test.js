import { counter } from "./clockReducer";
import * as types from "../actions/clockActions";

describe("clock reducer", () => {
  it("should return the initial state", () => {
    expect(counter(undefined, {})).toEqual(0);
  });
});

it("should handle INCREMENT", () => {
  expect(counter(1, types.increment())).toEqual(2);
});

expect(counter(2, types.increment())).toEqual(3);

it("should handle INCREMENT_ODD", () => {
  expect(counter(3, types.incrementOdd())).toEqual(4);
});

expect(counter(2, types.incrementOdd())).toEqual(2);

it("should handle DECREMENT", () => {
  expect(counter(1, types.decrement())).toEqual(0);
});

expect(counter(2, types.decrement())).toEqual(1);
