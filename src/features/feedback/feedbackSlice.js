import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

const initialState = {
  feedback: {},
  status: 'idle',
  error: null,
};

export const sendFeedback = createAsyncThunk(
  'feedback/sendfeedback',
  async (payload, { rejectWithValue }) => {
    const { name, email, feedback } = payload;

    try {
      const DocRef = await addDoc(collection(db, 'Feedback'), {
        fullName: name,
        Email: email,
        message: feedback,
      });
      return DocRef.map((data) => data);
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  }
);

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(sendFeedback.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.user = {};
      })
      .addCase(sendFeedback.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.error = null;
        state.user = JSON.parse(payload);
      })
      .addCase(sendFeedback.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = JSON.parse(payload);
        state.user = {};
      });
  },
});

export default feedbackSlice.reducer;
