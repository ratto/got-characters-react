import { Col, Row } from 'react-bootstrap';
import Character from '../../types/Character';
import { CharacterCard } from '../CharacterCard';
import './style.scss';

export const CharactersDeck = (props: { characters: Character[] }) => {
  const characters = props.characters;

  return (
    <Row className="g-4">
      {characters.map(character => {
        return (
          <Col sm={6}>
            <CharacterCard key={character.id} character={character} />
          </Col>
        );
      })}
    </Row>
  );
};
