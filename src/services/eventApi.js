import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import { BASE_URL } from "../constants";
const BASE_URL = 'http://kubernetes.docker.internal:31978';
// export const BASE_URL = 'http://martinrodl.me';

// Define a service using a base URL and expected endpoints
export const eventApi = createApi({
  reducerPath: 'eventApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + '/api/event/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('authorization', `${getState().auth.accessToken}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserEvents: builder.query({
      query: () => ({
        url: 'events/userevents',
      }),
    }),
    createEvent: builder.mutation({
      query: (formData) => ({
        url: 'event',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserEventsQuery, useCreateEventMutation } = eventApi;
