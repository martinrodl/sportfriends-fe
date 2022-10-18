import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'shared/constants';
// const BASE_URL = 'http://kubernetes.docker.internal:30726';

// Define a service using a base URL and expected endpoints
export const datingApi = createApi({
  reducerPath: 'datingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + '/api/dating/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('authorization', `${getState().auth.accessToken}`);
      return headers;
    },
  }),
  tagTypes: ['posts', 'userPosts'],
  endpoints: (builder) => ({
    getDatingPosts: builder.query({
      query: (query) => {
        return {
          url: `posts${query}`,
        };
      },
      providesTags: () => ['posts'],
    }),
    getUserDatingPosts: builder.query({
      query: () => ({
        url: 'userposts',
      }),
      providesTags: ['userPosts'],
    }),
    createDatingPost: builder.mutation({
      query: (formData) => ({
        url: 'post',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['userPosts'],
    }),
    deleteUserDatingPost: builder.mutation({
      query: (id) => ({
        url: 'post/' + id,
        method: 'DELETE',
      }),
      invalidatesTags: ['userPosts'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUserDatingPostsQuery,
  useGetDatingPostsQuery,
  useCreateDatingPostMutation,
  useDeleteUserDatingPostMutation,
} = datingApi;
