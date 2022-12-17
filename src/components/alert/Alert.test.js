import React from 'react';
import { render } from '@testing-library/react';
import Alert from './Alert';

test('Sort the Products', () => {
  const tree = render(<Alert/>);
  expect(tree).toMatchSnapshot();
});