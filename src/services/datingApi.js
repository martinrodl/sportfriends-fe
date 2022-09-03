import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import { BASE_URL } from "../constants";
const BASE_URL = 'http://kubernetes.docker.internal:31978';
// export const BASE_URL = 'http://martinrodl.me';

// Define a service using a base URL and expected endpoints
export const datingApi = createApi({
  reducerPath: 'eventApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + '/api/dating/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('authorization', `${getState().auth.accessToken}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserDatingPosts: builder.query({
      query: () => ({
        url: 'userposts',
      }),
    }),
    createDatingPost: builder.mutation({
      query: (formData) => ({
        url: 'post',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserDatingPostsQuery, useCreateDatingPostMutation } = datingApi;
