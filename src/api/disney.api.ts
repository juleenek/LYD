import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse, DisneyCharacter } from '../models/types';

export const BASE_URL = 'https://api.disneyapi.dev';

const CHARACTERS_PER_PAGE = 40;

const expandCharactersByFilm = (rawResult: ApiResponse): ApiResponse => {
  const characters: DisneyCharacter[] = [] as DisneyCharacter[];
  rawResult.data.forEach((character) => {
    if (character.films.length > 1) {
      for (let i = 0; i < character.films.length; i++) {
        characters.push({
          ...character,
          films: [character.films[i]],
        });
      }
    } else {
      characters.push(character);
    }
  });
  return { ...rawResult, data: characters };
};

export const disneyApi = createApi({
  reducerPath: 'disneyApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getDisneyCharacters: build.query<ApiResponse, void>({
      query: () => `character?films&pageSize=3500`,
      transformResponse: (rawResult: ApiResponse) => {
        const sortedData = expandCharactersByFilm(rawResult).data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        const info = {
          ...rawResult.info,
          totalPages: Math.ceil(rawResult.info.count / CHARACTERS_PER_PAGE),
          count: CHARACTERS_PER_PAGE,
        };
        return {
          info: info,
          data: sortedData,
        };
      },
    }),
  }),
});

export const { useGetDisneyCharactersQuery } = disneyApi;
