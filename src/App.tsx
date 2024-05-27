import { useState } from 'react';
import { useGetDisneyCharactersQuery } from './api/disney.api';

const App = () => {
  const [page, setPage] = useState(1);
  const { data: characters, error, isLoading } = useGetDisneyCharactersQuery(page);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching characters</div>;

  return (
    <main>
      {characters && characters.data ? (
        characters.data.map(({ _id, name }) => (
          <div key={_id}>
            {name}
          </div>
        ))
      ) : (
        <div>No characters found</div>
      )}
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>
        Next
      </button>
    </main>
  );
};

export default App;
