import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import NavBar from './NavBar';
import { store } from '../../app/store';

it('render NavBar correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    )
    .toJSON();
  //    console.log(tree);
  expect(tree).toMatchSnapshot();
});
