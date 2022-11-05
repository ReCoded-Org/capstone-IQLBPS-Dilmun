import {
  configureStore
} from '@reduxjs/toolkit';
// import {
//   applyMiddleware
// } from 'redux'
// import {
//   logger
// } from 'redux-logger'
// import thunk from 'redux-thunk';
// import rootReducer from '../redux/rootReducer';

// const middleware = [thunk]

// if (process.env.NODE_ENV === "development") {
//   middleware.push(logger)
// }

export const store = configureStore({
  reducer: {
    counter: 0
  },
});