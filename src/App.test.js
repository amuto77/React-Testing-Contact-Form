import React from "react";
import { render, fireEvent} from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test('renders first name, last name, email, message, string, and submit', () => {
  const { getByText } = render(<App/>);
  
  getByText(/First Name/i)
  getByText(/Last Name/i)
  getByText(/email/i)
  getByText(/message/i)
  
  const firstName = getByText(/First Name/i)
  fireEvent.change(firstName, {target:{value:"firstName"}})
  
  const submitButton = getByText(/submit/i)
  fireEvent.click(submitButton)
});