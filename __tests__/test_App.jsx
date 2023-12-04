import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders test paragraph", () => {
  render(<App />);
  const testParagraph = screen.getByText(/test/i);
  expect(testParagraph).toBeInTheDocument();
});

test("initial count state is 0", () => {
  render(<App />);
  const countState = screen.getByText(/count: 0/i);
  expect(countState).toBeInTheDocument();
});
