import CharactersSection from './layout/CharactersSection/CharactersSection';
import FiltersSection from './layout/FiltersSection/FiltersSection';
import './index.scss';

const App = () => {

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
