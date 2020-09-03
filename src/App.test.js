import React from "react";
import { render, getByText, getbyTestId } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test('renders first name, last name, email, and message', () => {
  const { getByText } = render(<App/>);
  getByText(/First Name/i)
  getByText(/Last Name/i)
  getByText(/email/i)
  getByText(/message/i)
});

test ('returns a string', () => {
  const { getbyTestId } = render(<App/>)
  const firstName = getByTestId('first-name')
  expect(firstName.textContent).toBe('')
})

test('submit is functional', () => {
  const { getByTestId } = render(<App/>)
  const submitButton = getbyTestId(/submit-btn/i)
  console.log(submitButton.textContent)
  expect(submitButton.textContent).toEqual('')
})