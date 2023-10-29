import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
  auth: {
    accessToken: string | null;
    id: string | null;
    email: string | null;
  };
};

const slice = createSlice({
  name: 'auth',
  initialState: { accessToken: null, id: null, email: null },
  reducers: {
    setCredentials: (state, { payload: { accessToken, id, email } }) => {
      state.accessToken = accessToken;
      state.id = id;
      state.email = email;
    },
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectAuth = (state: AuthState) => state.auth;
export const selectAuthId = (state: AuthState) => state.auth.id;
