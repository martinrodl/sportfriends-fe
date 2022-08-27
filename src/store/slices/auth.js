import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: { id: null, name: null, email: null, accessToken: null },
  reducers: {
    setCredentials: (state, { payload: { id, email, accessToken, name } }) => {
      state.id = id;
      state.email = email;
      state.accessToken = accessToken;
      state.name = name;
    },
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectAuth = (state) => state.auth;
