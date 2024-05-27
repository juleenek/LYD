import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse } from '../models/types';

const BASE_URL = 'https://api.disneyapi.dev';

export const disneyApi = createApi({
  reducerPath: 'disneyApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getDisneyCharacters: build.query<ApiResponse, number>({
      query: (page = 1) => `character?films&page=${page}`,
    }),
  }),
});

export const { useGetDisneyCharactersQuery } = disneyApi;
