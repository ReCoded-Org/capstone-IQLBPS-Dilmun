import React from 'react';
import { render } from '@testing-library/react';
import Sort from './Sort.jsx';

test('Sort the Products', () => {
  const tree = render(<Sort />);
  expect(tree).toMatchSnapshot();
});
