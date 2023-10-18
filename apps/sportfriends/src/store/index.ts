import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import {
  authApi,
  userApi,
  datingApi,
  eventApi,
  chatApi,
  postApi,
} from '@sportfriends-fe/shared/data/services';

import { authReducer, filterReducer } from '@sportfriends-fe/shared/data/store';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filter: filterReducer,
    [eventApi.reducerPath]: eventApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [datingApi.reducerPath]: datingApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      userApi.middleware,
      eventApi.middleware,
      datingApi.middleware,
      chatApi.middleware,
      postApi.middleware,
    ]),
});

setupListeners(store.dispatch);
