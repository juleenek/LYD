import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse, DisneyCharacter } from '../models/types';
import { Queue } from '../utils/queue';

export const BASE_URL = 'https://api.disneyapi.dev';
const queueCharacters = new Queue<DisneyCharacter>();

const listPerPage = (rawResult: ApiResponse): ApiResponse => {
  const countPerPage = rawResult.info.count;
  const characters: DisneyCharacter[] = [] as DisneyCharacter[];

  while (characters.length !== countPerPage) {
    if (queueCharacters.size()) {
      characters.push(queueCharacters.dequeue() as DisneyCharacter);
    } else {
      rawResult.data.forEach((character) => {
        if (character.films.length > 1) {
          for (let i = 0; i < character.films.length; i++) {
            queueCharacters.enqueue({
              ...character,
              films: [character.films[i]],
            });
          }
        } else {
          queueCharacters.enqueue(character);
        }
      });
    }
  }
  return { ...rawResult, data: characters };
};

export const disneyApi = createApi({
  reducerPath: 'disneyApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getDisneyCharacters: build.query<ApiResponse, number>({
      query: (page = 1) => `character?films&page=${page}`,
      transformResponse: (rawResult: ApiResponse) => {
        return listPerPage(rawResult);
      },
    }),
  }),
});

export const { useGetDisneyCharactersQuery } = disneyApi;
