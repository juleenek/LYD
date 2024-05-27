import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DisneyCharacter } from '../models/types';

const BASE_URL = 'https://api.disneyapi.dev';

interface ListResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
}

export const disneyApi = createApi({
  reducerPath: 'disneyApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getDisneyCharacters: build.query<ListResponse<DisneyCharacter>, number>({
      query: (page = 1) => `character?page=${page}`,
    }),
  }),
});

export const { useGetDisneyCharactersQuery } = disneyApi;
