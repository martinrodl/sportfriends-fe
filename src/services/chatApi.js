import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'shared/constants';
// export const BASE_URL = "http://kubernetes.docker.internal:32668";

// Define a service using a base URL and expected endpoints
export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + '/api/chat/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('authorization', `${getState().auth.accessToken}`);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getUserChats: builder.query({
      query: () => {
        return {
          url: `chats`,
        };
      },
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: () => ['userChats'],
    }),
    getChatMessages: builder.query({
      query: (id) => {
        return {
          url: `chat/${id}/messages`,
        };
      },
      providesTags: () => ['chatMessages'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserChatsQuery, useGetChatMessagesQuery } = chatApi;
