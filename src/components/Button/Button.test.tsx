import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button.types";
import "@testing-library/jest-dom";

test("renders button text", () => {
  render(<Button text="Click me" />);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test("changes background color when disabled", () => {
  render(<Button text="Disabled Button" disabled />);
  const buttonElement = screen.getByText(/Disabled Button/i);
  expect(buttonElement).toHaveStyle("background-color: #ccc");
});
