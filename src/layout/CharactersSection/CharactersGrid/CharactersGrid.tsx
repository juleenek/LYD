import { FC } from 'react';
import { ApiResponse } from '../../../models/types';
import CharacterCard from '../../../components/CharacterCard/CharacterCard';

interface Props {
  characters: ApiResponse | undefined;
}

const CharactersGrid: FC<Props> = ({ characters }) => {
  return (
    <>
      {characters && characters.data ? (
        characters.data.map((character) => (
          <CharacterCard character={character} />
        ))
      ) : (
        <div>No characters found</div>
      )}
    </>
  );
};

export default CharactersGrid;
