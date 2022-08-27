import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import { BASE_URL } from "../constants";
// export const BASE_URL = 'http://martinrodl.me';
const BASE_URL = 'http://kubernetes.docker.internal:30471';

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  initialState: { user: null, token: null },
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + '/api/auth/' }),
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: (formData) => ({
        url: 'signup',
        method: 'POST',
        body: formData,
      }),
    }),
    signinUser: builder.mutation({
      query: (formData) => ({
        url: 'signin',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignupUserMutation, useSigninUserMutation } = authApi;
