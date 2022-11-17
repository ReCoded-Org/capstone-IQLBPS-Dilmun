
import {
  configureStore
} from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import itemReducer from '../features/slices/item'

export const store = configureStore({
  reducer: {
    user: userReducer,
    item: itemReducer
  },
});
