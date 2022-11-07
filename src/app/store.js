import {
  configureStore
} from '@reduxjs/toolkit';
// import userSlice from '../components/Features/Users/userSlice';


export const store = configureStore({
  reducer: {
    counter: 0,
    // user: userSlice
  },
});