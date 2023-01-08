import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'shared/constants';

import { Post, State } from 'models';
// export const BASE_URL = "http://kubernetes.docker.internal:32668";

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + '/api/posts/',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as State;
      headers.set('authorization', `${state.auth.accessToken}`);
      return headers;
    },
  }),
  tagTypes: ['posts'],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], string>({
      query: () => {
        return {
          url: `posts`,
        };
      },
      providesTags: () => ['posts'],
    }),
    createPost: builder.mutation({
      query: (formData) => ({
        url: 'post',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['posts'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery, useCreatePostMutation } = postApi;
