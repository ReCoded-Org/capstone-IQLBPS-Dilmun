import React from 'react';
import { render } from '@testing-library/react';
import ContactUs from './ContactUs.js';

test('Contact us Page Rendered Correctly', () => {
  const tree = render(<ContactUs />);
  expect(tree).toMatchSnapshot();
});
