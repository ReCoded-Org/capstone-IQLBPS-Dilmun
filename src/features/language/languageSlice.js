import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: {},
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
  },
});

export const language = (state) => state.language.language;
export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
