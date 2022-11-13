import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase-config';

const initialState = {
  user: {},
  status: 'idle',
  error: null,
};
export const signInWithFacebook = createAsyncThunk(
  'user/signInWithFacebook',
  async (payload, { rejectWithValue }) => {
    const provider = new FacebookAuthProvider();
    try {
      const { user } = await signInWithPopup(auth, provider);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login with Facebook
      .addCase(signInWithFacebook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signInWithFacebook.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.user = JSON.stringify(payload);
      })
      .addCase(signInWithFacebook.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      });
  },
});

export const user = (state) => state.user;
export const status = (state) => state.status;
export const error = (state) => state.error;

export default userSlice.reducer;
