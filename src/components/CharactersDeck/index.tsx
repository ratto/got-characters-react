import Character from '../../types/Character';
import { CharacterCard } from '../CharacterCard';
import './style.scss';

export const CharactersDeck = (props: { characters: Character[] }) => {
  const characters = props.characters;

  return (
    <>
      {characters.map(character => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </>
  );
};
