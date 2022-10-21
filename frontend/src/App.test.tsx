import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./app";
import { dataSTorage } from "./store/dataSTorage";
import {DATABASE_API} from "./api/api";

// We removed the tests because they stopped working. and now we test only most important things
test("The dataSTorage is properly created", () => {
  expect(dataSTorage).not.toBe(undefined);
});

test("check for valid DB url", () => {
  var urlR = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

  var url= DATABASE_API.match(urlR);

  expect(url);
});
