import { FC } from 'react';
import { DisneyCharacter } from '../../models/types';
import './character-card.scss';
import SquareImg from '../SquareImg/SquareImg';

interface Props {
  character: DisneyCharacter;
}

const CharacterCard: FC<Props> = ({ character }) => {
  return (
    <div
      className='character-card'
      key={`${character._id}-${character.films[0]}`}
    >
      <input type='checkbox' />
      <SquareImg src={character.imageUrl} alt={character.name} size={180} />
      <p>Name: {character.name}</p>
      <p>Film: {character.films[0]}</p>
      <p>
        Games:
        {character.videoGames.length ? character.videoGames.join(', ') : ' -'}
      </p>
    </div>
  );
};

export default CharacterCard;
