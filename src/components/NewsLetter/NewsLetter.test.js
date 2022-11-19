import React from 'react';
import { render } from '@testing-library/react';
import NewsLetter from '.';

it('render correctly', () => {
  const { getByTestId } = render(<NewsLetter />);
  expect(getByTestId('news-letter-section')).toMatchSnapshot();
});
