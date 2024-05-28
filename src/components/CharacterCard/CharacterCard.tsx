import { FC } from 'react';
import { DisneyCharacter } from '../../models/types';
import './character-card.scss';

interface Props {
  character: DisneyCharacter;
}

const CharacterCard: FC<Props> = ({ character }) => {
  return (
    <div
      className='character-card'
      key={`${character._id}-${character.films[0]}`}
    >
      <img src={character.imageUrl} alt={character.name} />
      <p>Name: {character.name}</p>
      <p>Film: {character.films[0]}</p>
      <p>Games: {...character.videoGames}</p>
    </div>
  );
};

export default CharacterCard;
