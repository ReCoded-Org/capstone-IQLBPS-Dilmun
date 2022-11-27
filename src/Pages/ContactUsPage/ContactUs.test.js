import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactUs from './ContactUs';
import { store } from '../../app/store';

test('Contact us Page Rendered Correctly', () => {
  const tree = render(
    <Provider store={store}>
      <Router>
        <ContactUs />
      </Router>
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
