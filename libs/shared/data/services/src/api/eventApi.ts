import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '@sportfriends-fe/shared/constants';
import { Event, State, Slot } from '@sportfriends-fe/shared/models';

type UserEventsI = {
  participated: Event[];
  created: Event[];
};

export const eventApi = createApi({
  reducerPath: 'eventApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + '/api/event/',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as State;
      headers.set('authorization', `${state.auth.accessToken}`);
      return headers;
    },
  }),
  tagTypes: ['event', 'events', 'userEvents'],
  endpoints: (builder) => ({
    getUserEvents: builder.query<UserEventsI, void>({
      query: () => ({
        url: 'events/userevents',
      }),
      transformResponse: (response: { data: UserEventsI }): UserEventsI => {
        return response.data;
      },
      providesTags: ['userEvents'],
    }),
    getEvents: builder.query<Event[], string>({
      query: (query = '') => ({
        url: `events${query}`,
      }),
      transformResponse: (response: { data: Event[] }): Event[] => {
        return response.data;
      },
      providesTags: ['events'],
    }),
    getSpecificUserEvents: builder.query<Event[], string>({
      query: (userId) => ({
        url: `events/${userId}`,
      }),
      transformResponse: (response: {
        data: { created: Event[] };
      }): Event[] => {
        return response.data.created;
      },
      providesTags: ['events'],
    }),
    getEvent: builder.query<Event, string>({
      query: (id) => ({
        url: `event/${id}`,
      }),
      transformResponse: (response: { data: Event }): Event => {
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
        body: { text: arg.text },
      }),
      invalidatesTags: ['event'],
    }),
    getSlots: builder.query<Slot[], string>({
      query: (userId) => ({
        url: `slots/${userId}`,
      }),
      transformResponse: (response: { data: { slots: Slot[] } }): Slot[] => {
        return response.data.slots;
      },
    }),
    createSlot: builder.mutation({
      query: (formData) => ({
        url: 'slot',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetSpecificUserEventsQuery,
  useGetUserEventsQuery,
  useGetEventsQuery,
  useGetEventQuery,
  useJoinEventMutation,
  useLeaveEventMutation,
  useCreateEventMutation,
  useCreateCommentMutation,
  useGetSlotsQuery,
  useCreateSlotMutation,
} = eventApi;
