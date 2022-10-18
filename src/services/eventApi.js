import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'shared/constants';
// const BASE_URL = 'http://kubernetes.docker.internal:31978';

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
  tagTypes: ['events', 'userEvents'],
  endpoints: (builder) => ({
    getUserEvents: builder.query({
      query: () => ({
        url: 'events/userevents',
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ['userEvents'],
    }),
    getEvents: builder.query({
      query: (query = '') => ({
        url: `events${query}`,
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ['events'],
    }),
    getEvent: builder.query({
      query: (id) => ({
        url: `event/${id}`,
      }),
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ['event'],
    }),
    createEvent: builder.mutation({
      query: (formData) => ({
        url: 'event',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['userEvents'],
    }),
    joinEvent: builder.mutation({
      query: (eventId) => ({
        url: `event/${eventId}/join`,
        method: 'POST',
      }),
      invalidatesTags: ['event', 'events'],
    }),
    leaveEvent: builder.mutation({
      query: (eventId) => ({
        url: `event/${eventId}/leave`,
        method: 'POST',
      }),
      invalidatesTags: ['event', 'events'],
    }),
    createComment: builder.mutation({
      query: (arg) => ({
        url: `event/${arg.eventId}/comment`,
        method: 'POST',
        body: { text: arg.comment },
      }),
      invalidatesTags: ['event'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUserEventsQuery,
  useGetEventsQuery,
  useGetEventQuery,
  useJoinEventMutation,
  useLeaveEventMutation,
  useCreateEventMutation,
  useCreateCommentMutation,
} = eventApi;
