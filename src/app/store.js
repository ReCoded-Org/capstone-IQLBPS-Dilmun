import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import feedbackReducer from '../features/feedback/feedbackSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    feedback: feedbackReducer,
  },
});
