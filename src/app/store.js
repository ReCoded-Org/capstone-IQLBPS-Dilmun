
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import {
  configureStore
} from '@reduxjs/toolkit';

import userReducer from '../features/slices/user';
import itemReducer from '../features/slices/item';
import feedbackReducer from '../features/feedback/feedbackSlice';


const store = configureStore({
  reducer: {
    user: userReducer,
    feedback: feedbackReducer,
    item: itemReducer
  },
});

const { dispatch } = store;
const useSelector = useReduxSelector;
const useDispatch = () => useReduxDispatch();

export { store, dispatch, useDispatch, useSelector };
