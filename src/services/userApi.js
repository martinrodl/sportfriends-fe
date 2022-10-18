import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'shared/constants';
// export const BASE_URL = "http://kubernetes.docker.internal:32668";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + '/api/users/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('authorization', `${getState().auth.accessToken}`);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => {
        return {
          url: `profile`,
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
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUpdateProfileMutation, useUploadProfileImageMutation, useGetUserQuery } = userApi;
