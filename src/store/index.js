import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { authApi, userApi, datingApi, eventApi, chatApi } from 'services';

import { authReducer, filterReducer } from './slices';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filter: filterReducer,
    [eventApi.reducerPath]: eventApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [datingApi.reducerPath]: datingApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      userApi.middleware,
      eventApi.middleware,
      datingApi.middleware,
      chatApi.middleware,
    ]),
});

setupListeners(store.dispatch);
