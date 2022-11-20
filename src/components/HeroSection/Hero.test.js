import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './Hero';

it('render correctly', () => {
  const { getByText } = render(
    <Router>
      <Hero />
    </Router>
  );
  expect(getByText('Welcome to Dilmun')).toBeTruthy();
  expect(getByText('Your Way to Get Quality Products!')).toBeTruthy();
});
