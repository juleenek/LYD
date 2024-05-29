import { FC } from 'react';
import { ApiResponse } from '../../../models/types';
import CharacterCard from '../../../components/CharacterCard/CharacterCard';
import './characters-grid.scss';

interface Props {
  characters: ApiResponse | undefined;
}

const CharactersGrid: FC<Props> = ({ characters }) => {
  return (
    <div className='characters-grid'>
      {characters && characters.data ? (
        characters.data.map((character) => (
          <CharacterCard character={character} />
        ))
      ) : (
        <div>No characters found</div>
      )}
    </div>
  );
};

export default CharactersGrid;
