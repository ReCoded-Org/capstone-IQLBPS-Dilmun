import {
  configureStore
} from '@reduxjs/toolkit';
import userReducer from '../Features/Users/userSlice';

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});