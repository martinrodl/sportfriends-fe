import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'shared/constants';

import { Post, State } from 'models';

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
    getUserPosts: builder.query<Post[], string>({
      query: (userId) => {
        return {
          url: `userposts/${userId}`,
        };
      },
    }),
    createPost: builder.mutation({
      query: (formData) => ({
        url: 'post',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['posts'],
    }),
    likePost: builder.mutation({
      query: (postId: string) => ({
        url: `post/${postId}/like`,
        method: 'PUT',
      }),
      invalidatesTags: ['posts'],
    }),
    unlikePost: builder.mutation({
      query: (postId: string) => ({
        url: `post/${postId}/unlike`,
        method: 'PUT',
      }),
      invalidatesTags: ['posts'],
    }),
    sendPostComment: builder.mutation<Post, { postId: string; text: string }>({
      query: ({ postId, text }) => ({
        url: `post/${postId}/comment`,
        method: 'POST',
        body: {
          text,
        },
      }),
      invalidatesTags: ['posts'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPostsQuery,
  useGetUserPostsQuery,
  useCreatePostMutation,
  useLikePostMutation,
  useUnlikePostMutation,
  useSendPostCommentMutation,
} = postApi;
