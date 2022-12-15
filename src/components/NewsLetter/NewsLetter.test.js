import React from "react";
import { render, screen } from "@testing-library/react";
import NewsLetter from "./NewsLetter";

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));

it('render NewsLetter correctly', () => {
  render(<NewsLetter />)
  expect(screen.getByTestId('newsletter')).toMatchSnapshot()
})