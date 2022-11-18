// import React from "react";
// import renderer from "react-test-renderer";
// import ItemCard from "./ItemCard"
// import SignedInUsersHomePage from "./SignedInUsersHomePage";

// test(' SignedInUsersHomePage renders without crashing ' , () => {
//     const tree = renderer.create(
//         <SignedInUsersHomePage>
//             <ItemCard />
//         </SignedInUsersHomePage>
//      ).toJSON();
//     expect(tree).toMatchSnapshot();

// })
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import ItemCard from "./ItemCard"
import SignedInUsersHomePage from "./SignedInUsersHomePage";

test('SignedInUsersHomePage renders without crashing', () => {
  render(
    <Provider store={store}>
      <Router>
        <SignedInUsersHomePage>
            <ItemCard />
        </SignedInUsersHomePage>      
      </Router>
    </Provider>
  );
  expect(screen.getByTestId('SignedInUseresHomePage')).toMatchSnapshot();
});

