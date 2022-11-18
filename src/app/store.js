import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';

import {
  configureStore
} from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import itemReducer from '../features/slices/item'

const store = configureStore({
  reducer: {
    user: userReducer,
    item: itemReducer
  },
});

const { dispatch } = store;
const useSelector = useReduxSelector;
const useDispatch = () => useReduxDispatch();

export { store, dispatch, useDispatch, useSelector };
