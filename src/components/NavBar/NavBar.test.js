import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from './NavBar';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

it('render NavBar correctly', () => {
  const { navbar } = renderer
    .create(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    )
    .toJSON();
  expect(navbar).toMatchSnapshot();
});
