import {
  configureStore
} from '@reduxjs/toolkit';
import userReducer from '../components/Features/Users/userSlice';


export const store = configureStore({
  reducer: {
    counter: 0,
    user: userReducer
  },
});