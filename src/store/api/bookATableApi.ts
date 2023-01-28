import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'http://localhost:5005';

export const bookATableApi = createApi({
  reducerPath: 'bookATableApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    userBookATable: build.mutation({
      query: (body) => ({
        url: '/book',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useUserBookATableMutation } = bookATableApi;
