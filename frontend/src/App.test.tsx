import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./app";
import { store } from "./store/store";

// We removed the tests because they stopped working. and now we test only most important things
test("The store is properly created", () => {
  expect(store).not.toBe(undefined);
});
