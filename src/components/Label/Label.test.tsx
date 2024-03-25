import React from "react";
import { render, screen } from "@testing-library/react";
import Label from "./Label";
import "@testing-library/jest-dom";

test("renders label", () => {
  render(<Label text="Test Label" />);
  const labelElement = screen.getByText("Test Label");
  expect(labelElement).toBeInTheDocument();
});

test("changes background color when disabled", () => {
  render(<Label text="Test Label" disabled />);
  const labelElement = screen.getByText("Test Label");
  expect(labelElement).toHaveStyle("background-color: #ccc");
});
