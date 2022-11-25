import React from "react";
import { render, screen } from "@testing-library/react";
import NewsLetter from "./NewsLetter";


it('render NewsLetter correctly', () => {
  render(<NewsLetter />)
  expect(screen.getByTestId('newsletter')).toMatchSnapshot()
})