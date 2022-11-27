import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './Hero';

it('render correctly', () => {
  const { getByTestId } = render(
    <Router>
      <Hero />
    </Router>
  );
  expect(getByTestId('hero-section')).toMatchSnapshot();
});
