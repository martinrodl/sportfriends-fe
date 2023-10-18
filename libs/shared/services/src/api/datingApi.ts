import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { PartnerPost, State } from '@sportfriends-fe/shared/models';
import { BASE_URL } from '@sportfriends-fe/shared/constants';

export const datingApi = createApi({
  reducerPath: 'datingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + '/api/dating/',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as State;
      headers.set('authorization', `${state.auth.accessToken}`);
      return headers;
    },
  }),
  tagTypes: ['posts', 'userPosts'],
  endpoints: (builder) => ({
    getDatingPosts: builder.query<{ posts: PartnerPost[] }, string>({
      query: (query) => {
        return {
          url: `posts${query}`,
        };
      },
      providesTags: () => ['posts'],
    }),
    getUserDatingPosts: builder.query<{ posts: PartnerPost[] }, void>({
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
