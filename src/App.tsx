import CharactersSection from './layout/CharactersSection/CharactersSection';
import FiltersSection from './layout/FiltersSection/FiltersSection';
import './index.scss';
import { useGetDisneyCharactersQuery } from './api/disney.api';

const App = () => {
  const {
    isLoading,
  } = useGetDisneyCharactersQuery();

  if (isLoading) {
    return (
      <div className="home__loading">
        <img
          src="./src/assets/loading.gif"
          alt="Loading screen"
          className="home__loading-gif"
        />
      </div>
    );
  }

  return (
    <main className='home'>
      <h1>List your Disney!</h1>
      <div className='home__wrapper'>
        <FiltersSection />
        <CharactersSection />
      </div>
    </main>
  );
};

export default App;
