import React from "react";
import { render } from "@testing-library/react";
// import { Provider } from "react-redux";
// import { store } from "./app/store";
// import App from "./App";
import NewsLetter from "./components/NewsLetter";


// test("renders learn react link", () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );

//   expect(getByText(/learn/i)).toBeInTheDocument();
// });


it('render correctly', () => {
  const { queryByPlaceholderText } = render(<NewsLetter />)

  expect(queryByPlaceholderText('Write your email here')).toBeTruthy()
})