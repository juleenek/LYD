import { useState } from 'react';
import { useGetDisneyCharactersQuery } from '../../api/disney.api';
import CharactersGrid from './CharactersGrid/CharactersGrid';
import './characters-section.scss';

const CharactersSection = () => {
  const [page, setPage] = useState(1);
  const {
    data: characters,
    error,
    isLoading,
  } = useGetDisneyCharactersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching characters</div>;

  return (
    <section className='characters'>
      <h2>Characters</h2>
      <CharactersGrid characters={characters} />
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </section>
  );
};

export default CharactersSection;
