import { toggle } from "./toggleReducer";
import * as type from "../actions/toggleActions";

describe("toggle reducer", () => {
  it("should return initial state", () => {
    expect(toggle(undefined, {})).toEqual({
      toggle: "press here"
    });
  });
});

it("should handle TOGGLE", () => {
  expect(toggle(undefined, type.toggle("this is the payload"))).toEqual({
    toggle: "this is the payload"
  });
});
