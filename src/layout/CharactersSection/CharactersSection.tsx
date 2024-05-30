import { useEffect, useState } from 'react';
import { useGetDisneyCharactersQuery } from '../../api/disney.api';
import CharactersGrid from './CharactersGrid/CharactersGrid';
import './characters-section.scss';
import { ApiResponse } from '../../models/types';

enum PaginationDirection {
  Next,
  Previous,
}

const CharactersSection = () => {
  const { data: characters, error, isLoading } = useGetDisneyCharactersQuery();
  const [currentPage, setPage] = useState(1);
  const [currentCharacters, setCurrentCharacters] = useState<ApiResponse>({
    info: { totalPages: 0, count: 0, previousPage: null, nextPage: null },
    data: [],
  });

  const updatePageCharacters = (characters: ApiResponse, page: number) => {
    const charactersPerPage = characters.info.count;
    const paginatedCharacters = characters.data.slice(
      (page - 1) * charactersPerPage,
      page * charactersPerPage
    );
    setCurrentCharacters({ ...characters, data: paginatedCharacters });
  };

  const handlePagination = (direction: PaginationDirection) => {
    if (characters && characters.data) {
      if (direction === PaginationDirection.Next) {
        if (currentPage < characters.info.totalPages) {
          setPage(currentPage + 1);
        }
      } else if (direction === PaginationDirection.Previous) {
        if (currentPage > 1) {
          setPage(currentPage - 1);
        }
      }
    }
  };

  useEffect(() => {
    if (characters && characters.data) {
      updatePageCharacters(characters, currentPage);
    }
  }, [characters, currentPage]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching characters</div>;

  return (
    <section className='characters'>
      <h2>Characters</h2>
      <CharactersGrid characters={currentCharacters} />
      <button
        onClick={() => handlePagination(PaginationDirection.Previous)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button onClick={() => handlePagination(PaginationDirection.Next)}>
        Next
      </button>
    </section>
  );
};

export default CharactersSection;
