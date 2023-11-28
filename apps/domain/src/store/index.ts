import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { userApi, eventApi } from '@sportfriends-fe/shared/data/services';

import { authReducer } from '@sportfriends-fe/shared/data/store';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [eventApi.reducerPath]: eventApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware, eventApi.middleware]),
});

setupListeners(store.dispatch);
