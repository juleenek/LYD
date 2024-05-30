export type DisneyCharacter = {
  _id: number;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
  sourceUrl: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  __v: number;
};

export type ApiResponse = {
  info: {
    totalPages: number;
    count: number;
    previousPage: string | null;
    nextPage: string | null;
  };
  data: DisneyCharacter[];
};
