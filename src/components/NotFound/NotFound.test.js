import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
  Trans: ({ children }) => children,
}));

test('Sort the Products', () => {
  const tree = render(<NotFound/>);
  expect(tree).toMatchSnapshot();
});