import React from 'react';
import { render } from '@testing-library/react';
import Sort from './Sort';

const MOCK_SORT_OPTIONS = 
  {
    name: 'Most Popular',
    href: '#',
    current: true,
  }


test('Sort the Products', () => {
  const tree = render(<Sort sortOptions={MOCK_SORT_OPTIONS} />);
  expect(tree).toMatchSnapshot();
});
