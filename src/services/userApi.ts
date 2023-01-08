import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'shared/constants';
import { FriendshipsResponse, State } from 'models';

// export const BASE_URL = "http://kubernetes.docker.internal:32668";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + '/api/users/',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as State;
      headers.set('authorization', `${state.auth.accessToken}`);

      return headers;
    },
  }),
  tagTypes: ['userProfile'],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => {
        return {
          url: `profile`,
        };
      },
      providesTags: () => ['userProfile'],
    }),

    getFriendships: builder.query<FriendshipsResponse, ''>({
      query: () => {
        return {
          url: `friendships`,
        };
      },
      providesTags: () => ['userProfile'],
    }),
    updateProfile: builder.mutation({
      query: (formData) => ({
        url: 'profile',
        method: 'PATCH',
        body: formData,
        headers: {
          'content-type': 'application/text',
        },
      }),
      invalidatesTags: ['userProfile'],
    }),
    uploadProfileImage: builder.mutation({
      query(data) {
        return {
          url: 'profileimg',
          method: 'POST',
          body: data,
        };
      },
    }),
    confirmFriendship: builder.mutation({
      query(id) {
        return {
          url: `friendship/${id}/confirmed`,
          method: 'PUT',
        };
      },
    }),
    rejectFriendship: builder.mutation({
      query(id) {
        return {
          url: `friendship/${id}/rejected`,
          method: 'PUT',
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useUpdateProfileMutation,
  useUploadProfileImageMutation,
  useGetUserQuery,
  useGetFriendshipsQuery,
  useConfirmFriendshipMutation,
  useRejectFriendshipMutation,
} = userApi;
